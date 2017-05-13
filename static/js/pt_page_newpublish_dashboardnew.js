(function() {
    var p = P(N.ut),
    mI,
    mo = "__tabkey__";
    var rm = function(X) {
        return !! X[mo]
    };
    p.nP = C();
    mI = p.nP.bi(p.gY);
    mI.bq = function(bn, I) {
        this.bHr();
        I = I || O;
        this.SB = !!I.nobubble;
        this.bTn = I.selected || "selected";
        this.bHo("onchange", I.onchange);
        this.gH(bn || [], I.index || 0)
    };
    mI.gH = function(bn, Q) {
        Q = Q != null ? Q: this.bC;
        this.bqL(bn);
        delete this.bC;
        this.lE(Q)
    };
    mI.bbX = function() {
        return this.cB
    };
    mI.fY = function() {
        return this.bC
    };
    mI.bqL = function(bn) {
        this.cB = bn || this.cB;
        for (var i = 0,
        l = this.cB.length,
        bo; i < l; i++) {
            bo = this.cB[i] = E.be(this.cB[i]);
            E.bf(bo, this.bTn);
            if (!bo[mo]) {
                bo.index = i;
                bo[mo] = true;
                V.bHo(bo, "click", this.rF.bHk(this))
            }
        }
    };
    mI.lE = function(Q, zC) {
        if (!this.cB || this.cB.length <= 0 || this.bC == Q) return;
        var gd = this.bC;
        E.bf(this.cB[this.bC], this.bTn);
        this.bC = Q;
        E.ba(this.cB[this.bC], this.bTn); ! zC && this.bh("onchange", this.bC, gd)
    };
    mI.rF = function(bHm) {
        if (this.SB) V.bb(bHm);
        var bk = V.be(bHm, rm);
        if (!bk || !!bk.disabled) return;
        this.lE(bk.index || 0)
    }
})();

this.cqX = {
    dxk: location.host,
    cKP: document
}; (function(a) {
    a.dxi = 31;
    a.cBa = function(a) {
        var d = this.dxi,
        c, g, f, e;
        c = a.length & 3;
        g = a.length - c;
        f = d;
        for (d = 0; d < g;) e = a.charCodeAt(d) & 255 | (a.charCodeAt(++d) & 255) << 8 | (a.charCodeAt(++d) & 255) << 16 | (a.charCodeAt(++d) & 255) << 24,
        ++d,
        e = 3432918353 * (e & 65535) + ((3432918353 * (e >>> 16) & 65535) << 16) & 4294967295,
        e = e << 15 | e >>> 17,
        e = 461845907 * (e & 65535) + ((461845907 * (e >>> 16) & 65535) << 16) & 4294967295,
        f ^= e,
        f = f << 13 | f >>> 19,
        f = 5 * (f & 65535) + ((5 * (f >>> 16) & 65535) << 16) & 4294967295,
        f = (f & 65535) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
        e = 0;
        switch (c) {
        case 3:
            e ^= (a.charCodeAt(d + 2) & 255) << 16;
        case 2:
            e ^= (a.charCodeAt(d + 1) & 255) << 8;
        case 1:
            e ^= a.charCodeAt(d) & 255,
            e = 3432918353 * (e & 65535) + ((3432918353 * (e >>> 16) & 65535) << 16) & 4294967295,
            e = e << 15 | e >>> 17,
            f ^= 461845907 * (e & 65535) + ((461845907 * (e >>> 16) & 65535) << 16) & 4294967295
        }
        f ^= a.length;
        f ^= f >>> 16;
        f = 2246822507 * (f & 65535) + ((2246822507 * (f >>> 16) & 65535) << 16) & 4294967295;
        f ^= f >>> 13;
        f = 3266489909 * (f & 65535) + ((3266489909 * (f >>> 16) & 65535) << 16) & 4294967295;
        return (f ^ f >>> 16) >>> 0
    };
    var l = "KsbXWeGOwHvZUTaF".split("");
    a.bHs = function(a) {
        if (null == a || void 0 == a) return a;
        if (0 != a.length % 2) throw Error("1100");
        for (var d = [], c = 0; c < a.length; c++) {
            0 == c % 2 && d.push("%");
            for (var g = 0; g < l.length; g++) if (a.charAt(c) == l[g]) {
                d.push(g.toString(16));
                break
            }
        }
        return decodeURIComponent(d.join(""))
    }
})(this.cqX); (function(a) {
    var l = function(a) {
        var d, c;
        d = Array.prototype.forEach;
        c = Array.prototype.map;
        this.each = function(a, b, e) {
            if (null !== a) if (d && a.forEach === d) a.forEach(b, e);
            else if (a.length === +a.length) for (var m = 0,
            c = a.length; m < c && b.call(e, a[m], m, a) !== {}; m++);
            else for (m in a) if (a.hasOwnProperty(m) && b.call(e, a[m], m, a) === {}) break
        };
        this.map = function(a, b, e) {
            var d = [];
            if (null == a) return d;
            if (c && a.map === c) return a.map(b, e);
            this.each(a,
            function(a, g, c) {
                d[d.length] = b.call(e, a, g, c)
            });
            return d
        };
        if ("object" == typeof a) {
            this.hasher = a.hasher;
            this.screen_resolution = a.screen_resolution;
            if (null == this.screen_resolution || void 0 == this.screen_resolution) this.screen_resolution = !0;
            this.canvas = a.canvas;
            if (null == this.canvas || void 0 == this.canvas) this.canvas = !0;
            this.ie_activex = a.ie_activex;
            if (null == this.ie_activex || void 0 == this.ie_activex) this.ie_activex = !0
        } else "function" == typeof a && (this.hasher = a)
    };
    l.prototype = {
        get: function() {
            var b = [];
            b.push(this.hasSessionStorage());
            b.push(this.hasLocalStorage());
            b.push( !! window.indexedDB);
            document.body ? b.push(typeof document.body.addBehavior) : b.push("undefined");
            b.push(typeof window.openDatabase);
            b.push(navigator.cpuClass);
            b.push(navigator.platform);
            this.canvas && this.isCanvasSupported() && (b.push(this.getCanvasFp()), b.push(this.getWebgl()));
            b.push(this.getSystemColors());
            var d = [];
            d.push(this.getFontsString());
            d.push(navigator.userAgent);
            d.push(navigator.language);
            d.push(screen.colorDepth);
            this.screen_resolution && "undefined" !== typeof this.getScreenResolution() && d.push(this.getScreenResolution().join("x"));
            d.push((new Date).getTimezoneOffset());
            d.push(navigator.doNotTrack);
            d.push(this.getPluginsString());
            var c = [];
            this.hasher ? (c.push(this.hasher(b.join("###"))), c.push(this.hasher(d.join("###")))) : (c.push(a.cBa(b.join("###"))), c.push(a.cBa(d.join("###"))));
            return c
        },
        hasLocalStorage: function() {
            try {
                return !! window.localStorage
            } catch(a) {
                return ! 0
            }
        },
        hasSessionStorage: function() {
            try {
                return !! window.sessionStorage
            } catch(a) {
                return ! 0
            }
        },
        isCanvasSupported: function() {
            var a = document.createElement("canvas");
            return ! (!a.getContext || !a.getContext("2d"))
        },
        getPluginsString: function() {
            return window.ActiveXObject && this.ie_activex ? this.getPluginsForOldIE() : this.getPluginsForOtherBrowsers()
        },
        getPluginsForOtherBrowsers: function() {
            if (!navigator.plugins) return "";
            var b = [a.bHs("XWGOGsGTGe"), a.bHs("WsGWGbGUGFGXGZeKGUOeGOGHGa"), a.bHs("WsGWGFGbGeWeOwWTGsGaWXWXWWGeOWGeGXOW"), a.bHs("WsGWGFGbGeWeOwWTGsGaWWGeOWGeGXOW"), a.bHs("WsGUGsOOGsObbKWaeKWseKWHbKOeOWGHGUOX"), a.bHs("WsGUGHGeGWGHOWbKeKGUOeGObTWHGa"), a.bHs("WsGUGHOKGsOHbKeXGeGXOeObGHOWOHbKWXGFGaOWObGFGUbKXX"), a.bHs("WsGUGHeXeXWFWUGFGOGHGabKOKGUOeGOGHGa"), a.bHs("WsGTGsOvGFGaWTeKXXWWGFOOGaGUGFGsGWGeObeKGUOeGOGHGa"), a.bHs("WsWFWUbKWTGeGWGHGsbKeKGUGsOHGbGsGXGZbKeKGUOeGOGHGa"), a.bHs("WsOKOKeeOK"), a.bHs("WsObGXGwGHWXWsWW"), a.bHs("WseGWObKeXGHOWGeeXGsGGGeOWOHbKOKGUOeGOGHGa"), a.bHs("WbGsGbOHGUGFGabKeWGFGFGUWbGsOb"), a.bHs("WbGsOWOWGUGeGUGFGObKWOGsGTGebKWUGsOeGaGXGwGeOb"), a.bHs("WbGHOWWXGFGTGeOWWsGOGeGaOW"), a.bHs("WbGHOWGWGeGGGeGaGWGeObbKesOeGHGXGZeXGXGsGa"), a.bHs("WbGUOeGeeXOWGsGXGZOXbKWHGaOXOWGsGUGUbKWWGeOWGeGXOWGFOb"), a.bHs("WXGsOWGsGUGHGaGsWOObGFOeOKbKeeOKGWGsOWGe"), a.bHs("WXGHOWObGHOwbKWHWXWsbKWXGUGHGeGaOW"), a.bHs("WXGHOWObGHOwbKGFGaGUGHGaGebKOKGUOeGObTGHGa"), a.bHs("WXGHOWObGHOwbKebGeGXGeGHOGGeObbKeKGUOeGObTGHGa"), a.bHs("WXGFGFOOGFGabKeeOKGWGsOWGe"), a.bHs("WWGeGsGUeKGUOHWUGHOGGebKeeOKGWGsOWGe"), a.bHs("WWGeGGGsOeGUOWbKWbObGFOOOXGeObbKWwGeGUOKGeOb"), a.bHs("WWGHOGewbKWbObGFOOOXGeObbKeKGUOeGObTWHGa"), a.bHs("WWGHOGewbKeKGUOeOXbKeOGeGbbKeKGUGsOHGeOb"), a.bHs("WWGHOGewbKeGWFWWbKWwGeGUOKGeObbKeKGUOeGObTGHGa"), a.bHs("GWGFOeGbGUGeeWOOGHOXOWbKeOGeGbbKeKGUOeGOGHGa"), a.bHs("WWGFOOGaGUGFGsGWGeObOXbKOKGUOeGOGHGa"), a.bHs("GWGFOOGaGUGFGsGWeeOKGWGsOWGeOb"), a.bHs("GeWTOeOXGHGXeKGUOeGOGHGabKWWWUWTXG"), a.bHs("WeeXWabKWUGsOeGaGXGwbKWTGFOvGHGUGUGsbKeKGUOeGOGHGa"), a.bHs("WeeXWabKeXGFGaGsObbKWseKWH"), a.bHs("WeOwGHGGbKWeOGGeObOHOOGwGeObGe"), a.bHs("WGGsGXGeGbGFGFGZbKeKGUOeGOGHGa"), a.bHs("WGGHGUGebKWWGFOOGaGUGFGsGWGeObbKeKGUOeGObTGHGa"), a.bHs("WGGHGUGeWUGsGbbKOKGUOeGOGHGa"), a.bHs("WGGUOHWFObWWGHGebKWOGsGTGeOXbKeKGUOeGOGHGa"), a.bHs("WGGFGUOwbKXXbKWbObGFOOOXGeObbKeKGUOeGOGHGa"), a.bHs("WGeeevWeeXGwGsObGe"), a.bHs("WOWWWUbKWFGbGvGeGXOWbKeOGeGbbKeKGUOeGObTGHGabKXsXGbaXKXK"), a.bHs("WOWGWsWXWebKeKGUOeGOGHGa"), a.bHs("WOGHGaGOGeOb"), a.bHs("WOGaGFGTGebKeXGwGeGUGUbKWHGaOWGeGOObGsOWGHGFGa"), a.bHs("WOGFGFGOGUGebKWeGsObOWGwbKeKGUOeGOGHGa"), a.bHs("WOGFGFGOGUGebKWeGsObOWGwbKeKGUOeGObTGHGa"), a.bHs("WOGFGFGOGUGebKWOGeGsObOXbKXKbaXebaXXXXbaXK"), a.bHs("WOGFGFGOGUGebKeWGsGUGZbKWeGGGGGeGXOWOXbKeKGUOeGOGHGa"), a.bHs("WOGFGFGOGUGebKeeOKGWGsOWGe"), a.bHs("WwGsObGTGFGaOHbKWGGHObGeGGGFOwbKeKGUOeGOGHGa"), a.bHs("WwGsObGTGFGaOHbKeKGUOeGObTWHGa"), a.bHs("WwGeObGFGeOXbKbGbKWOGeGaGeObGsGUOXbKGUGHOGGe"), a.bHs("WweKWWGeOWGeGXOW"), a.bHs("WwOWGTGUXebKGUGFGXGsOWGHGFGabKOKObGFOGGHGWGeOb"), a.bHs("WHWebKeWGsGbbKOKGUOeGOGHGa"), a.bHs("GHWOGeOWOWGeObeXGXObGHOKOWGsGbGUGeeKGUOeGOGHGa"), a.bHs("GHWTGeOXGwbKOKGUOeGOGHGa"), a.bHs("WZGsOXOKGeObOXGZOHbKeKGsOXOXOOGFObGWbKWTGsGaGsGOGeOb"), a.bHs("WUGsOXOWeKGsOXOX"), a.bHs("WUGFGOWTGeWHGabKeKGUOeGOGHGabKXsbaXKbaXKbaXHXXXe"), a.bHs("WUGFGOWTGeWHGabKeKGUOeGOGHGabKXsbaXKbaXKbaXHXGXs"), a.bHs("WTGsbTWXGFGaGGGHGObaGXGFGTbKOKGUOeGOGHGa"), a.bHs("WTGHGXObGFOXGFGGOWbKWFGGGGGHGXGebKXbXKXsXX"), a.bHs("WTGHGaGHGbGsObeKGUOeGOGHGa"), a.bHs("WaGsOWGHOGGebKWXGUGHGeGaOW"), a.bHs("WaGHOWObGFbKeKWWWGbKeKGUOeGObTWHGa"), a.bHs("WaGFGZGHGsbKeXOeGHOWGebKWeGaGsGbGUGeObbKeKGUOeGOGHGa"), a.bHs("WaGFObOWGFGabKWHGWGeGaOWGHOWOHbKeXGsGGGe"), a.bHs("GaOKWseKWHbKeKGUOeGOGHGa"), a.bHs("WaeKWUGsOXOWeKGsOXOX"), a.bHs("WaeKeKGUGsOHGeObeXGwGeGUGU"), a.bHs("GaOKeWGFGaGOGbOeWsGWGWGHGa"), a.bHs("WaOHOwWUGsOeGaGXGwGeOb"), a.bHs("WFGXOWGFOXGwGsOKGebKeXOWObGeGsGTGHGaGObKeXGeObOGGHGXGeOX"), a.bHs("WFGaGUGHGaGebKeXOWGFObGsGOGebKOKGUOeGObTGHGa"), a.bHs("WFObGbGHOWbKWWGFOOGaGUGFGsGWGeOb"), a.bHs("eKGsGaGWGFbKeOGeGbbKeKGUOeGOGHGa"), a.bHs("eKGsObGFGTbaeWeGbKOKGUGsOHGeObbKOKGUOeGOGHGa"), a.bHs("eKWWWGbKGHGaOWGeGOObGsGWGFbKGWGFbKeOGeGbWZGHOW"), a.bHs("eKWWWGbTewWXGwGsGaGOGebKeGGHGeOOGeOb"), a.bHs("eKGwGFOWGFWXGeGaOWGeObeKGUOeGOGHGaXsbaXsbaXbbaXb"), a.bHs("eKGHGXGsOXGs"), a.bHs("eKGUGsOHWFGabKeKGUOeGObTGHGa"), a.bHs("esesXbXKXsXXbKWGGHObGeGGGFOwbKeKGUOeGOGHGa"), a.bHs("esesWWGFOOGaGUGFGsGWbKeKGUOeGOGHGa"), a.bHs("esesWTGHGaGHWWWUbKeKGUOeGOGHGa"), a.bHs("esesWTOeOXGHGX"), a.bHs("ebGeGsGUWWGFOOGaGUGFGsGWGeObbKeKGUOeGOGHGa"), a.bHs("ebGFGbGUGFOwbKWUGsOeGaGXGwGeObbKeKGUOeGOGHGa"), a.bHs("ebGFGXGZWTGeGUOWbKeeOKGWGsOWGe"), a.bHs("eXGsGGGeObbKeeOKGWGsOWGe"), a.bHs("eXGsGGGeeXGeGsObGXGw"), a.bHs("eXGXObGHOKOWGHGaGObaWWGHGXOWGHGFGaGsObOH"), a.bHs("eXGeGGWXGUGHGeGaOWbKeKGUOeGOGHGa"), a.bHs("eXGwGeGUGUbaeeWHWwGeGUOKGeOb"), a.bHs("eXGHGUOGGeObGUGHGOGwOWbKeKGUOeGObTWHGa"), a.bHs("eXGHGTOKGUGebKeKGsOXOX"), a.bHs("eXGZOHOKGebKeOGeGbbKeKGUOeGOGHGa"), a.bHs("eXOeGTGsOWObGseKWWWGbKWbObGFOOOXGeObbKeKGUOeGOGHGa"), a.bHs("eXOHGTGsGaOWGeGXbKeKWZWHbKWXGUGHGeGaOW"), a.bHs("eWGeGaGXGeGaOWbKWGeWWabKOKGUOeGObTGHGa"), a.bHs("eWGwOeGaGWGeObbKWWGsOKWXOWObGUbKWaeKWseKWHbKeKGUOeGOGHGa"), a.bHs("eWGFObGXGwWwGeGUOKGeOb"), a.bHs("eeGaGHOWOHbKeKGUGsOHGeOb"), a.bHs("eeOKGUGsOHbKeKWX"), a.bHs("eGWWGFOOGaGUGFGsGWGeOb"), a.bHs("eGGeGeOWGUGebKeWeGbKWXGFObGe"), a.bHs("eGWUWXbKWTOeGUOWGHGTGeGWGHGsbKeKGUOeGOGHGa"), a.bHs("eOGeGbbKWXGFGTOKGFGaGeGaOWOX"), a.bHs("eOGeGbWZGHOWbTGHGaOWGeGOObGHGeObOWGebKeKWWWG"), a.bHs("eOWeWbevWeWabKWbObGFOOOXGeObbKWeOwOWGeGaOXGHGFGa"), a.bHs("eOGFGUGGObGsGTbKWTGsOWGwGeGTGsOWGHGXGs"), a.bHs("eOGFObGWWXGsOKOWOeObGeew"), a.bHs("eOeKWHbKWWGeOWGeGXOWGFObbKXsbaXW"), a.bHs("eHGsGaGWGeOwbKWTGeGWGHGsbKeKGUOeGOGHGa"), a.bHs("eHGsGaGWGeOwbKeKWWWGbKeGGHGeOOGeOb"), a.bHs("eHGFOeeWOeGbGebKeKGUOeGObTGHGa"), a.bHs("OvGsGZGF")],
            d = [],
            c = {};
            d.push(this.map(navigator.plugins,
            function(a) {
                c[a.name] = 1;
                var b = this.map(a,
                function(a) {
                    return [a.type, a.suffixes].join("~")
                }).join(",");
                return [a.name, a.description, b].join("::")
            },
            this).join("$"));
            d.push(this.map(b,
            function(a) {
                if (c[a]) return "";
                a = navigator.plugins[a];
                if (!a) return "";
                var b = this.map(a,
                function(a) {
                    return [a.type, a.suffixes].join("~")
                }).join(",");
                return [a.name, a.description, b].join("::")
            },
            this).join(";"));
            return d.join(";")
        },
        getPluginsForOldIE: function() {
            if (window.ActiveXObject) {
                var b = [a.bHs("WsGXObGFeKWWWGbaeKWWWG"), a.bHs("WsGWGFGWGbbaeXOWObGeGsGT"), a.bHs("WsGOWXGFGaOWObGFGUbaWsGOWXGFGaOWObGFGU"), a.bHs("WWGeOGGsGUeGebewWXOWObGUbaWWGeOGGsGUeGebewWXOWObGUbaXs"), a.bHs("WTGsGXObGFGTGeGWGHGsWGGUGsOXGweKGsOKGeObbaWTGsGXObGFGTGeGWGHGsWGGUGsOXGweKGsOKGeOb"), a.bHs("WTOXOwGTGUXbbaWWWFWTWWGFGXOeGTGeGaOW"), a.bHs("WTOXOwGTGUXbbaewWTWUWweWeWeK"), a.bHs("eKWWWGbaeKGWGGWXOWObGU"), a.bHs("esOeGHGXGZeWGHGTGebaesOeGHGXGZeWGHGTGe"), a.bHs("esOeGHGXGZeWGHGTGeWXGwGeGXGZWFGbGvGeGXOWbaesOeGHGXGZeWGHGTGeWXGwGeGXGZbaXs"), a.bHs("ObGTGFGXOwbaebGeGsGUeKGUGsOHGeObbKWOXbbKWXGFGaOWObGFGU"), a.bHs("ObGTGFGXOwbaebGeGsGUeKGUGsOHGeObbKWOXbbKWXGFGaOWObGFGUbaXs"), a.bHs("ebGeGsGUeKGUGsOHGeOb"), a.bHs("ebGeGsGUeKGUGsOHGeObbaebGeGsGUeKGUGsOHGeObbwOWGTbHbKWsGXOWGHOGGeewbKWXGFGaOWObGFGUbKbwXXXbbTGbGHOWbH"), a.bHs("ebGeGsGUeGGHGWGeGFbaebGeGsGUeGGHGWGeGFbwOWGTbHbKWsGXOWGHOGGeewbKWXGFGaOWObGFGUbKbwXXXbbTGbGHOWbH"), a.bHs("ObGTGFGXOwbaebGeGsGUeKGUGsOHGeObbKWOXbbKWXGFGaOWObGFGU"), a.bHs("eXGXObGHOKOWGHGaGObaWWGHGXOWGHGFGaGsObOH"), a.bHs("eXGwGeGUGUbaeeWHWwGeGUOKGeOb"), a.bHs("eXGwGFGXGZOOGsOGGeWGGUGsOXGwbaeXGwGFGXGZOOGsOGGeWGGUGsOXGw"), a.bHs("eXeOWXOWGUbaeXeOWXOWGU"), a.bHs("eXGZOHOKGebaWWGeOWGeGXOWGHGFGa"), a.bHs("eWWWWXWXOWGUbaeWWWWXWXOWGU"), a.bHs("eOWTeKGUGsOHGeObbaWFWXew")];
                return this.map(b,
                function(a) {
                    try {
                        return new ActiveXObject(a),
                        a
                    } catch(b) {
                        return null
                    }
                }).join(";")
            }
            return ""
        },
        getScreenResolution: function() {
            return [screen.height, screen.width]
        },
        getCanvasFp: function() {
            var a = document.createElement("canvas"),
            d = a.getContext("2d");
            d.textBaseline = "top";
            d.font = "70px 'Arial'";
            d.textBaseline = "alphabetic";
            d.fillStyle = "#f60";
            d.fillRect(125, 1, 62, 20);
            d.fillStyle = "#069";
            d.fillText("Cwm fjordbank glyphs vext quiz, https://github.com/valve ὠ", 2, 15);
            d.fillStyle = "rgba(102, 204, 0, 0.7)";
            d.fillText("Cwm fjordbank glyphs vext quiz, https://github.com/valve ὠ", 4, 17);
            return a.toDataURL()
        },
        getSystemColors: function() {
            var b = document.createElement("div"),
            d = [],
            c = [a.bHs("WsGXOWGHOGGeWbGFObGWGeOb"), a.bHs("WsGXOWGHOGGeWXGsOKOWGHGFGa"), a.bHs("WsOKOKeOGFObGZOXOKGsGXGe"), a.bHs("WbGsGXGZGOObGFOeGaGW"), a.bHs("WbOeOWOWGFGaWGGsGXGe"), a.bHs("WbOeOWOWGFGaWwGHGOGwGUGHGOGwOW"), a.bHs("WbOeOWOWGFGaeXGwGsGWGFOO"), a.bHs("WbOeOWOWGFGaeWGeOwOW"), a.bHs("WXGsOKOWGHGFGaeWGeOwOW"), a.bHs("WOObGsOHeWGeOwOW"), a.bHs("WwGHGOGwGUGHGOGwOW"), a.bHs("WwGHGOGwGUGHGOGwOWeWGeOwOW"), a.bHs("WHGaGsGXOWGHOGGeWbGFObGWGeOb"), a.bHs("WHGaGsGXOWGHOGGeWXGsOKOWGHGFGa"), a.bHs("WHGaGsGXOWGHOGGeWXGsOKOWGHGFGaeWGeOwOW"), a.bHs("WHGaGGGFWbGsGXGZGOObGFOeGaGW"), a.bHs("WHGaGGGFeWGeOwOW"), a.bHs("WTGeGaOe"), a.bHs("WTGeGaOeeWGeOwOW"), a.bHs("eXGXObGFGUGUGbGsOb"), a.bHs("eWGwObGeGeWWWWGsObGZeXGwGsGWGFOO"), a.bHs("eWGwObGeGeWWWGGsGXGe"), a.bHs("eWGwObGeGeWWWwGHGOGwGUGHGOGwOW"), a.bHs("eWGwObGeGeWWWUGHGOGwOWeXGwGsGWGFOO"), a.bHs("eWGwObGeGeWWeXGwGsGWGFOO"), a.bHs("eOGHGaGWGFOO"), a.bHs("eOGHGaGWGFOOWGObGsGTGe"), a.bHs("eOGHGaGWGFOOeWGeOwOW")];
            if (!window.getComputedStyle) return d.join("");
            for (var g = 0; g < c.length; g++) document.body.appendChild(b),
            b.style.color = c[g],
            d.push(c[g]),
            d.push(window.getComputedStyle(b).getPropertyValue("color")),
            document.body.removeChild(b);
            return d.join(":")
        },
        getWebglHash: function(b, d) {
            var c = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, c);
            var g = new Float32Array([ - .2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            b.bufferData(b.ARRAY_BUFFER, g, b.STATIC_DRAW);
            c.itemSize = 3;
            c.numItems = 3;
            var g = b.createProgram(),
            f = b.createShader(b.VERTEX_SHADER);
            b.shaderSource(f, "attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }");
            b.compileShader(f);
            var e = b.createShader(b.FRAGMENT_SHADER);
            return b.shaderSource(e, "precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }"),
            b.compileShader(e),
            b.attachShader(g, f),
            b.attachShader(g, e),
            b.linkProgram(g),
            b.useProgram(g),
            g.vertexPosAttrib = b.getAttribLocation(g, "attrVertex"),
            g.offsetUniform = b.getUniformLocation(g, "uniformOffset"),
            b.enableVertexAttribArray(g.vertexPosArray),
            b.vertexAttribPointer(g.vertexPosAttrib, c.itemSize, b.FLOAT, !1, 0, 0),
            b.uniform2f(g.offsetUniform, 1, 1),
            b.drawArrays(b.TRIANGLE_STRIP, 0, c.numItems),
            a.cBa(d.toDataURL())
        },
        getWebgl: function() {
            var a, d = document.createElement("canvas"),
            c = [];
            try {
                a = d.getContext("webgl") || d.getContext("experimental-webgl")
            } catch(g) {}
            if (!a) return c;
            try {
                c.push(a.getSupportedExtensions())
            } catch(f) {}
            try {
                c.push(this.getWebglHash(a, d))
            } catch(e) {}
            return c.join(";")
        },
        fontDetector: function() {
            var a = ["monospace", "sans-serif", "serif"],
            d = [],
            c = document.body,
            g = document.createElement("span");
            g.style.fontSize = "72px";
            g.style.visibility = "hidden";
            g.innerHTML = "wwwmmmmmmmmmmlli";
            for (var f = function(a) {
                var e = {};
                return g.style.fontFamily = a,
                c.appendChild(g),
                e.height = g.offsetHeight,
                e.width = g.offsetWidth,
                c.removeChild(g),
                e
            },
            e = 0; e < a.length; e++) d[e] = f(a[e]);
            return function(e) {
                for (var c = 0; c < d.length; c++) {
                    var g = f(e + "," + a[c]),
                    l = d[c];
                    if (g.height !== l.height || g.width !== l.width) return ! 0
                }
                return ! 1
            }
        },
        getFontsString: function() {
            for (var b = [a.bHs("WsGbGsGWGHbKWTeWbKWXGFGaGWGeGaOXGeGWbKWUGHGOGwOW"), a.bHs("WsGWGFGbGebKWGGsGaGOOXGFGaGObKeXOWGW"), a.bHs("WsGWGFGbGebKWwGeGbObGeOO"), a.bHs("WsGWGFGbGebKWTGHGaGObKeXOWGW"), a.bHs("WsGOGeGaGXOHbKWGWb"), a.bHs("WsObGsGb"), a.bHs("WsObGsGbGHGXbKeWOHOKGeOXGeOWOWGHGaGO"), a.bHs("WsObGHGsGUbKWbGUGsGXGZ"), a.bHs("WbGsOWGsGaGO"), a.bHs("WbGsOeGwGsOeOXbKXHXX"), a.bHs("WbGeGUGUbKWTeW"), a.bHs("WbGHOWOXOWObGeGsGTbKeGGeObGsbKeXGeObGHGG"), a.bHs("WbGFGWGFGaGHbKWTeW"), a.bHs("WbGFGFGZGTGsGabKWFGUGWbKeXOWOHGUGe"), a.bHs("WbObGsGOGOGsGWGFGXGHGF"), a.bHs("WbObGFGsGWOOGsOH"), a.bHs("WXGsGUGHGbObGH"), a.bHs("WXGsGUGHGGGFObGaGHGsGabKWGWb"), a.bHs("WXGsOXOWGeGUGUGsOb"), a.bHs("WXGsOXOeGsGU"), a.bHs("WXGeGaOWGsOeOb"), a.bHs("WXGeGaOWOeObOHbKWOGFOWGwGHGX"), a.bHs("WXGwGsGUGZGWOeOXOWGeOb"), a.bHs("WXGFGUGFGaGaGsbKWTeW"), a.bHs("WXGFOKOKGeObOKGUGsOWGebKWOGFOWGwGHGXbKWUGHGOGwOW"), a.bHs("WWGeGvGseGOebKWUWOWXbKeXGsGaOXbKWTGFGaGF"), a.bHs("WWGeOXGWGeGTGFGaGs"), a.bHs("WWWGWZGsGHbTeXWb"), a.bHs("WWGFOWOeGT"), a.bHs("WeGaGOObGsOGGeObOXbKWTeW"), a.bHs("WeObGsOXbKWbGFGUGWbKWHeWWX"), a.bHs("WeOeObGFOXOWGHGUGe"), a.bHs("WGGsGaGOeXGFGaGO"), a.bHs("WGGFObOWGe"), a.bHs("WGObGsGaGZGUGHGabKWOGFOWGwGHGXbKWwGeGsOGOH"), a.bHs("WGObGeGaGXGwbKeXGXObGHOKOWbKWTeW"), a.bHs("WOGsGbObGHGFGUGs"), a.bHs("WOGHGOGH"), a.bHs("WOGHOXGwGs"), a.bHs("WOGFOeGWOHbKWFGUGWbKeXOWOHGUGe"), a.bHs("WOOeGUGHGT"), a.bHs("WOOeGaGOeXGeGF"), a.bHs("WwGsGeOWOWGeGaOXGXGwOOGeGHGUGeOb"), a.bHs("WwGsObObGHGaGOOWGFGa"), a.bHs("WwGHObGsGOGHGaGFbKeXGsGaOXbKWOWb"), a.bHs("WHGTOKGsGXOW"), a.bHs("WHGaGGGFObGTGsGUbKebGFGTGsGa"), a.bHs("WZGsGXOXOWWFGaGe"), a.bHs("WZGHGaGFbKWTeW"), a.bHs("WZGFOvOeGZGsbKWOGFOWGwGHGXbKeKObXGWa"), a.bHs("WUGFGwGHOWbKWOOeGvGsObGsOWGH"), a.bHs("WUGFGTGs"), a.bHs("WUOeGXGHGWGsbKWbObGHGOGwOW"), a.bHs("WUOeGXGHGWGsbKWGGsOw"), a.bHs("WTGsGOGaGeOWGF"), a.bHs("WTGsGUGOOeGabKWOGFOWGwGHGX"), a.bHs("WTGsOWOeObGsbKWTeWbKeXGXObGHOKOWbKWXGsOKGHOWGsGUOX"), a.bHs("WTGeGaGUGF"), a.bHs("WTGHGaGOWUGHeebTWeOwOWWb"), a.bHs("WTGFGFGUWbGFObGsGa"), a.bHs("WTeXbKeKWTGHGaGXGwGF"), a.bHs("WTeXbKebGeGGGeObGeGaGXGebKeXGsGaOXbKeXGeObGHGG"), a.bHs("WaGeOOOXbKWOGFOWGwGHGXbKWTeW"), a.bHs("WaGHGsGOGsObGsbKeXGFGUGHGW"), a.bHs("WaOHGsGUGs"), a.bHs("eKGsGUGsGXGebKeXGXObGHOKOWbKWTeW"), a.bHs("eKGsOKOHObOeOX"), a.bHs("eKGeObOKGeOWOeGs"), a.bHs("eKGUGsOHGbGHGUGU"), a.bHs("eKWTGHGaGOWUGHee"), a.bHs("ebGsGXGwGsGaGs"), a.bHs("ebGFGXGZOOGeGUGU"), a.bHs("eXGsOOGsOXGWGeGe"), a.bHs("eXGXObGHOKOWbKWTeWbKWbGFGUGW"), a.bHs("eXGeGOGFGebKeKObGHGaOW"), a.bHs("eXGwGFOOGXGsObGWbKWOGFOWGwGHGX"), a.bHs("eXGHGTWwGeGH"), a.bHs("eXGaGsOKbKWHeWWX"), a.bHs("eWGUOOGOWTGFGaGF"), a.bHs("eWOObKWXGeGabKWTeWbKWXGFGaGWGeGaOXGeGWbKWeOwOWObGsbKWbGFGUGW"), a.bHs("eeGbOeGaOWOe"), a.bHs("eeGTOKOeOXGw"), a.bHs("eeGaGHOGGeObOX"), a.bHs("eeOWGFOKGHGs"), a.bHs("eGGUGsGWGHGTGHObbKeXGXObGHOKOW"), a.bHs("eOGHGWGebKWUGsOWGHGa"), a.bHs("aWZZZFaevawZ"), a.bHs("aewTwaaGHGwOaWZwvTaevawZ"), a.bHs("aewTwaaGHGwOaWZZZFaevawZ"), a.bHs("aewTwaaGHGwOaevawZaWZTHX"), a.bHs("aewTwaaGHGwOaeZTvHaWZvHs"), a.bHs("aewTwaaGHGwOaGHGZKaHvTwF"), a.bHs("aewTwaaGHGwOaGveZOaWZTHX"), a.bHs("aewTwaaGHGwOaOHKveaOwFwK"), a.bHs("aewTwaaGHGwOaOZZwGaHZZHs"), a.bHs("aewTwaaGHGwOawvswUaGveZO"), a.bHs("aewTwaaGHGwOaHHvZGaWZHvG"), a.bHs("aevawZaWZTHX"), a.bHs("aeZHZUaeHUwG"), a.bHs("aeZavaawZTvFaHHZweaHZZHs"), a.bHs("aGHGZKaevawZaWZTHX"), a.bHs("aGHGZHaGvTvXaevOHvaWZTHX"), a.bHs("aGHGZHaGvTvXawwwHbaWZTHX"), a.bHs("aGveZOaWZTHX"), a.bHs("aHHvZGaWZHvG"), a.bHs("aHZZHsaWZTHX"), a.bHs("aGHGZKaOZZwGaGHwwaaWZTHX"), a.bHs("aOZZwGaGHwwaaWZTHX"), a.bHs("aGvKwOaGveZOaWZTHX"), a.bHs("aWZZZFaevawZeFWOWbXbXXXsXb"), a.bHs("aGveZOaWZTHXeFWOWbXbXXXsXb"), a.bHs("aeZavaawZTvFaGvTvXaHZZHsaWZTHX"), a.bHs("aewTwaaGHGwOaHZZHsaWZTHX"), a.bHs("aWZwZTaHZZHsbKeKObGF"), a.bHs("aWZwZTaevawZbKeKObGF"), a.bHs("awwZZHaGHaHUaWZwZTaWZwvTaHZZHs"), a.bHs("awwZZHaGHaHUaWZwZTaOZZwGaevawZ")], d = [], c = 0; c < b.length; c++) {
                var g = b[c];
                this.fontDetector()(g) && d.push(g)
            }
            return d.join(";")
        }
    };
    a.dxh = l
})(this.cqX); (function(a) {
    a.dxg = (new
    function() {
        var l = function(a) {
            if ( - 128 > a) return l(128 - ( - 128 - a));
            if ( - 128 <= a && 127 >= a) return a;
            if (127 < a) return l( - 129 + a - 127);
            throw Error("1001")
        },
        b = function(a, e) {
            a = l(a);
            e = l(e);
            return l(a ^ e)
        },
        d = function(a, e) {
            if (null == a || null == e || a.length != e.length) return a;
            for (var d = [], c = 0, m = a.length; c < m; c++) d[c] = b(a[c], e[c]);
            return d
        },
        c = [a.bHs("XK"), a.bHs("Xs"), a.bHs("Xb"), a.bHs("XX"), a.bHs("XW"), a.bHs("Xe"), a.bHs("XG"), a.bHs("XO"), a.bHs("Xw"), a.bHs("XH"), a.bHs("Gs"), a.bHs("Gb"), a.bHs("GX"), a.bHs("GW"), a.bHs("Ge"), a.bHs("GG")],
        g = function(a) {
            var e = [];
            e.push(c[a >>> 4 & 15]);
            e.push(c[a & 15]);
            return e.join("")
        },
        f = function(a) {
            if (null == a || 0 == a.length) return [];
            a = new String(a);
            for (var e = [], d = a.length / 2, b = 0, c = 0; c < d; c++) {
                var m = parseInt(a.charAt(b++), 16) << 4,
                g = parseInt(a.charAt(b++), 16);
                e[c] = l(m + g)
            }
            return e
        },
        e = function(a) {
            if (null == a || void 0 == a) return a;
            a = encodeURIComponent(a);
            for (var e = [], d = a.length, b = 0; b < d; b++) if ("%" == a.charAt(b)) if (b + 2 < d) e.push(f(a.charAt(++b) + "" + a.charAt(++b))[0]);
            else throw Error("1009");
            else e.push(a.charCodeAt(b));
            return e
        },
        m = function(a, e, b, d, c) {
            if (null == a || 0 == a.length) return b;
            if (null == b) throw Error("1004");
            if (a.length < c) throw Error("1003");
            for (var m = 0; m < c; m++) b[d + m] = a[e + m];
            return b
        },
        z = function(a) {
            for (var e = [], b = 0; b < a; b++) e[b] = 0;
            return e
        },
        n = [ - 4, 16, 7, 8, -112, 123, -22, -124, -64, -36, 22, -76, 87, 122, -55, -26, 43, 118, 76, -62, -30, -105, -58, 26, -24, 127, 57, 68, -66, 72, 101, 108, 124, -111, 99, 27, 100, -21, 54, 31, 52, -37, -90, 53, -116, -60, -47, 11, 61, -13, 10, -72, -82, -67, -108, 23, -77, 62, -103, 102, 25, 60, -75, -8, -70, 97, 106, -117, 17, -42, -34, -5, -2, -78, -110, 48, -123, -28, -27, -87, -126, 121, -41, -11, 78, 92, 50, 81, 126, 82, 46, 80, -53, 28, 0, 117, -59, 66, -14, -56, -93, -68, -43, -29, 40, 88, 3, 35, -86, 105, 18, 73, 103, -94, -9, -95, -61, 41, -35, 113, -88, 19, 69, 56, 119, -54, 89, -32, -63, -89, 65, -84, 42, -96, -18, 15, 98, -109, -65, 4, 93, -106, 110, 79, 116, 104, -50, -102, -57, 38, -31, 86, 12, 111, 115, 90, 112, -100, -45, 21, -120, 125, 114, -113, 51, -33, 95, -20, 20, 37, -40, -6, -98, -119, 32, 47, 45, 6, -85, -23, 64, 107, -1, 24, 1, 85, 71, -118, 94, -81, -39, -107, 49, -16, 70, -91, -25, 14, -83, -44, 34, 74, 75, 109, -79, -7, 58, 96, -115, -19, 2, -38, 120, -121, -10, -17, -74, -127, -125, -51, -104, -71, 30, 59, -73, 91, -101, -52, -49, 39, -12, 77, -128, 33, 55, 36, -3, -48, -15, -97, 13, 63, 29, -80, 83, 5, -92, 44, 67, -122, -69, 84, -114, -46, -99, 9],
        v = function(a) {
            var e = [];
            if (null == a || void 0 == a || 0 == a.length) return z(64);
            if (64 <= a.length) {
                e = [];
                if (null != a && 0 != a.length) {
                    if (64 > a.length) throw Error("1003");
                    for (var b = 0; 64 > b; b++) e[b] = a[0 + b]
                }
                return e
            }
            for (b = 0; 64 > b; b++) e[b] = a[b % a.length];
            return e
        },
        y = function(a) {
            if (null == a) return null;
            for (var e = [], b = 0, d = a.length; b < d; b++) {
                var c = a[b];
                e[b] = n[16 * (c >>> 4 & 15) + (c & 15)]
            }
            return e
        };
        this.dxe = function(a, c) {
            if (null == a || void 0 == a) return "";
            if (null == c || void 0 == c) throw Error("1008");
            var f = e(a),
            n = e(c),
            k = f;
            null == k && (k = []);
            for (var x = [], f = 0; 4 > f; f++) {
                var p = 256 * Math.random(),
                p = Math.floor(p);
                x[f] = l(p)
            }
            n = v(n);
            n = d(n, v(x));
            f = n = v(n);
            var h = k;
            if (null == h || void 0 == h || 0 == h.length) k = z(64);
            else {
                var k = h.length,
                p = 0,
                p = 60 > k % 64 ? 64 - k % 64 - 4 : 128 - k % 64 - 4,
                u = [];
                m(h, 0, u, 0, k);
                for (h = 0; h < p; h++) u[k + h] = 0;
                h = [];
                h[0] = k >>> 24 & 255;
                h[1] = k >>> 16 & 255;
                h[2] = k >>> 8 & 255;
                h[3] = k & 255;
                m(h, 0, u, k + p, 4);
                k = u
            }
            p = k;
            if (null == p || 0 != p.length % 64) throw Error("1005");
            for (var k = [], u = 0, h = p.length / 64, t = 0; t < h; t++) {
                k[t] = [];
                for (var r = 0; 64 > r; r++) k[t][r] = p[u++]
            }
            p = [];
            m(x, 0, p, 0, 4);
            x = k.length;
            for (u = 0; u < x; u++) {
                h = k[u];
                if (null == h) h = null;
                else {
                    for (var t = l( - 61), r = [], w = h.length, q = 0; q < w; q++) r.push(l(h[q] + t));
                    h = r
                }
                if (null == h) h = null;
                else {
                    t = l(125);
                    r = [];
                    w = h.length;
                    for (q = 0; q < w; q++) r.push(b(h[q], t--));
                    h = r
                }
                if (null == h) h = null;
                else {
                    t = l(35);
                    r = [];
                    w = h.length;
                    for (q = 0; q < w; q++) r.push(b(h[q], t));
                    h = r
                }
                h = d(h, n);
                t = f;
                if (null == h) h = null;
                else if (null != t) {
                    for (var r = [], w = t.length, q = 0, B = h.length; q < B; q++) r[q] = l(h[q] + t[q % w]);
                    h = r
                }
                h = d(h, f);
                f = y(h);
                f = y(f);
                m(f, 0, p, 64 * u + 4, 64)
            }
            n = p.length;
            if (null == p || 0 > n) n = new String("");
            else {
                f = [];
                for (k = 0; k < n; k++) f.push(g(p[k]));
                n = f.join("")
            }
            return n
        }
    }).dxe
})(this.cqX); (function(a) {
    function l(a) {
        for (var b = [], d = 0; d < a; d++) {
            var c = 62 * Math.random(),
            c = Math.floor(c);
            b.push("aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA".charAt(c))
        }
        return b.join("")
    }
    function b(a) {
        var b = "v fp u h ec em".split(" "),
        d;
        if (null == a || void 0 == a) return a;
        if ("object" == typeof a) {
            d = "{";
            for (var c = 0; c < b.length; c++) if (a.hasOwnProperty(b[c])) {
                var f = "'" + b[c] + "':'",
                g;
                g = "" + a[b[c]];
                g = null == g || void 0 == g ? g: g.replace(/'/g, "\\'").replace(/"/g, '"');
                d += f + g + "',"
            }
            "," == d.charAt(d.length - 1) && (d = d.substring(0, d.length - 1));
            return d + "}"
        }
        return null
    }
    function d(a, b) {
        for (var d = [], c = 0; c < b; c++) d.push(a);
        return d.join("")
    }
    function c(e) {
        var c = !0,
        f = {
            v: "v1.0"
        },
        n = null;
        f.h = a.dxk;
        f.u = l(3) + (new Date).getTime() + l(3);
        try {
            var v = (new a.dxh).get();
            null != v && void 0 != v && 0 < v.length ? f.fp = v.join(",") : (f.fp = d("0", 10), f.ec = "1", c = !1)
        } catch(y) {
            f.fp = d("0", 10),
            f.ec = "1",
            c = !1
        }
        try {
            n = b(f),
            n = a.dxg(n, g)
        } catch(A) {
            n = b({
                ec: "2",
                em: A.message
            }),
            c = !1
        }
        f = c;
        c = [];
        c.push(e + "=" + escape(n));
        f && (e = new Date, e.setDate(15), e.setMonth(e.getMonth() + 1), e = e[a.bHs("OWGFWOWTeWeXOWObGHGaGO")](), c.push("; "), c.push("ex"), c.push("pi"), c.push("re"), c.push("s="), c.push(e), c.push("; "), c.push("pa"), c.push("th=/"), c.push("; "), c.push("dom"), c.push("ain=.lof"), c.push("ter.com"));
        a.cKP[a.bHs("GXGFGFGZGHGe")] = c.join("")
    }
    var g = a.bHs("XsXWXOXXXbGXXXXeXOGWXsXbXXGXGsXHXwXwGeGeGWWsXKXKWsGGXGGWXeGbGGGWGXWXGGXsXeWXWeXHXwWWGbXbXKGGXG"),
    f = a.bHs("WveXWeeXeXWHWFWaWHWWbTeOWUWGbTewewWW"); (function() {
        var b;
        a: {
            b = a.cKP[a.bHs("GXGFGFGZGHGe")].split("; ");
            for (var c = 0; c < b.length; c++) {
                var d = b[c].indexOf("=");
                if (0 <= d) {
                    var g = b[c].substring(0, d),
                    d = b[c].substring(d + 1, b[c].length);
                    if (g == f) {
                        b = d;
                        break a
                    }
                }
            }
            b = null
        }
        return null == b || void 0 == b || "" == b ? !1 : !0
    })() || c(f)
})(this.cqX); (function() {
    P("U");
    var dxd = {
        a: {
            r: /\<|\>|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": ""
        }
    };
    var cv;
    U.lO = function(bHn) {
        if (U.co(bHn, "number")) return bHn;
        if (U.co(bHn, "date")) return bHn.getTime();
        if (U.co(bHn, "boolean")) return !! bHn ? "true": "false";
        if (U.co(bHn, "string")) return '"' + U.IY(bHn) + '"';
        if (!bHn) return "null";
        if (U.co(bHn, "array")) {
            var cd = [];
            for (var i = 0,
            l = bHn.length; i < l; cd.push(U.lO(bHn[i])), i++);
            return "[" + cd.join(",") + "]"
        }
        if (U.co(bHn, "object")) {
            var cd = [];
            for (var p in bHn) cd.push(U.lO(p) + ":" + U.lO(bHn[p]));
            return "{" + cd.join(",") + "}"
        }
        return "null"
    };
    U.qr = function(Z) {
        try {
            return ! Z ? null: (new Function("return " + Z))()
        } catch(e) {
            return null
        }
    };
    if (B.da) {
        U.bHx = U.qr
    } else {
        U.bHx = !!window.JSON ? JSON.parse: U.qr
    }
    if (B.da) {
        U.ii = U.lO
    } else {
        U.ii = !!window.JSON ? JSON.stringify: U.lO
    }
    var p = P("loft.x"),
    AR = 60 * 1e3,
    RC = 60 * AR,
    bFH = 24 * RC,
    cg = document.createElement("input");
    var Vg = /(&nbsp;(\w+))/gi;
    var Vh = /((\w+)&nbsp;([^ ]+))/gi;
    p.bzz = function(fv) {
        fv = fv || "";
        fv = U.ew(fv);
        fv = fv.replace(Vg, " $2");
        fv = fv.replace(Vh, "$2 $3");
        return fv
    };
    p.mP = function(fv) {
        fv = fv || "";
        fv = fv.replace(Vg, " $2");
        fv = fv.replace(Vh, "$2 $3");
        return fv
    };
    p.dxb = function(Z) {
        return U.El(dxd.a, Z)
    };
    p.jo = function(Z) {
        Z = Z || "";
        return Z.replace(/^(<p>(&nbsp;|<br\s*\/?>)<\/p>)|(&nbsp;|<br\s*\/?>)$/i, "")
    };
    p.Gg = function(Z) {
        Z = Z || "";
        return Z.replace(/(^<p>(&nbsp;|<br\s*\/?>)<\/p>)|(<p>(&nbsp;|<br\s*\/?>)<\/p>$)/gi, "")
    };
    p.Gh = function(Gr, eg) {
        if (!Gr) return;
        if ( !! eg) {
            Gr.focus()
        } else {
            var hy = Gr.selection.getRange();
            var bHl = E.dE(Gr.body) || [];
            if (bHl.length > 0) {
                var Gu = E.dE(bHl[bHl.length - 1]) || [];
                var RA = Gu[Gu.length - 1];
                if ( !! RA && !!RA.tagName && RA.tagName.toLowerCase() == "br") {
                    hy.selectNodeContents(Gu[Gu.length - 1]);
                    hy.setCursor(false, true)
                } else {
                    hy.selectNodeContents(bHl[bHl.length - 1]);
                    hy.setCursor(true, true)
                }
            }
        }
    };
    p.th = function(du) {
        if (( !! P("loft.c").cre || !!P("loft.c").crf) && !!du) {
            alert(du)
        }
    };
    p.dxa = function(crg) {
        if (!crg) return;
        var cAQ = document.cloneElement("link");
        cAQ.setAttribute("href", crg);
        if ( !! document.head && !!cAQ) {
            document.head.insertAdjacentElement("beforeEnd", cAQ)
        }
    };
    p.dwZ = function(crg) {
        if ( !! window.devicePixelRatio && window.devicePixelRatio > 1 && !B.da) {
            p.dxa(crg)
        }
    };
    p.bHt = function(cAP) {
        try {
            var eJ = new Image;
            eJ.src = "http://www.lofter.com/statistic.png?act=" + cAP + "&t=" + (new Date).getTime()
        } catch(e) {}
    };
    window.statistic4Lofter = p.bHt;
    p.dwY = function(cAP, ca) {
        try {
            var eJ = new Image;
            eJ.onload = function() {
                window.clearTimeout(cv);
                ca()
            };
            cv = window.setTimeout(function() {
                eJ.onload = function() {};
                ca()
            },
            300);
            eJ.src = "http://www.lofter.com/statistic.png?act=" + cAP + "&t=" + (new Date).getTime()
        } catch(e) {}
    };
    p.bzy = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
    p.GD = function(bHn) {
        if (U.co(bHn, "number")) return bHn;
        if (U.co(bHn, "date")) return bHn.getTime();
        if (U.co(bHn, "boolean")) return bHn;
        if (U.co(bHn, "string")) return bHn;
        if (U.co(bHn, "function")) return bHn;
        if (!bHn) return null;
        if (U.co(bHn, "array")) {
            var cd = [];
            for (var i = 0,
            l = bHn.length; i < l; cd.push(this.GD(bHn[i])), i++);
            return cd
        }
        if (U.co(bHn, "object")) {
            var cp = {};
            for (var p in bHn) cp[p] = this.GD(bHn[p]);
            return cp
        }
    };
    p.gW = function(cp) {
        return U.ii(cp)
    };
    p.wc = function(bp, bx, jD) {
        bp = bp || "";
        jD = jD || "?";
        bp = U.bA(bp);
        var cAO = bp.indexOf(jD);
        if (cAO < 0) {
            return ""
        }
        if (jD != "#") {
            var Q = bp.indexOf("#") || 0;
            if (Q >= 0 && cAO < Q) {
                bp = bp.substring(0, Q)
            }
        }
        bp = bp.substr(cAO + 1);
        if (!bp) return "";
        bp = bp.split("&");
        for (var i = 0,
        l = bp.length,
        d; i < l; i++) {
            d = bp[i].indexOf("=");
            if (bp[i].substring(0, d) === bx) {
                return bp[i].substr(d + 1) || ""
            }
        }
        return ""
    };
    p.ty = function(Z) {
        Z = Z || "";
        var fe = 0;
        for (var i = 0,
        l = Z.length; i < l; i++) {
            fe += Z.charCodeAt(i) > 255 ? 2 : 1
        }
        return fe
    };
    var Rx = ["http://www.lofter.com/control", "http://www.lofter.com/theme"];
    p.isInReferrerBlackList = function(hf) {
        hf = U.bA(hf);
        if (!hf) return false;
        for (var i = 0; i < Rx.length; i++) {
            if ( !! Rx[i]) {
                var Q = hf.indexOf(Rx[i]);
                if (Q == 0) {
                    return true
                }
            } else {
                break
            }
        }
        return false
    };
    p.bM = function(eq) {
        eq = eq || "";
        return ! eq && "http://www.lofter.com" || "http://" + eq + ".lofter.com"
    };
    p.GX = function(eq, dR, bc) {
        return this.bM(eq) + "/post/" + bc.toString(16) + "_" + dR.toString(16)
    };
    p.cF = function(bx) {
        var bg = window[bx];
        try {
            if (!delete window[bx]) throw ""
        } catch(e) {
            window[bx] = undefined
        }
        return bg
    };
    p.eK = function(Rw, ok) {
        ok = ok || 64;
        if (!Rw) {
            if (ok <= 30) return location.dirhost + "/rsc/img/ava/30.png";
            if (ok <= 64) return location.dirhost + "/rsc/img/ava/64.png";
            return location.dirhost + "/rsc/img/ava/110.png"
        } else {
            if (ok > 140) return Rw;
            return "http://imgsize.ph.126.net/?imgurl=" + Rw + "_" + ok + "x" + ok + "x0.jpg"
        }
    };
    p.bJR = function(bws, dz, eT, cri, crj, bUY) {
        if (!bws) return null;
        cri = cri || 0;
        crj = crj || false;
        if (dz >= 300) {
            bUY = bUY || 95
        } else {
            bUY = bUY || 90
        }
        if (bws.toLowerCase().indexOf("http://imgsize.ph.126.net") >= 0) {
            bws = p.wc(bws, "imgurl", "?") || "";
            var Q = bws.lastIndexOf("_");
            if ( !! bws && Q >= 0) {
                bws = bws.substring(0, Q)
            }
            if (!bws) return null
        }
        if (!dz || dz < 0) return bws;
        if (!eT || eT < 0) eT = dz;
        bUY = parseInt(bUY) || 0;
        if (bUY > 100) bUY = 100;
        if (bws.indexOf("nos.netease.com") > 0 || bws.indexOf("nosdn.127.net") > 0) {
            var resized = bws;
            var imageview = "thumbnail=" + dz + (cri == 1 ? "y": "x") + eT + ( !! crj ? "&enlarge=1": "");
            if (/\.gif/.test(bws)) {
                if (dz < 500) {
                    imageview += "&type=jpg"
                }
            } else {
                imageview += "&type=jpg"
            }
            if (/thumbnail=\d+[xyz]\d+/.test(bws)) {
                resized = bws.replace(/thumbnail=\d+[xyz]\d+/, imageview)
            } else {
                resized = bws.replace(/imageView/, "imageView&" + imageview)
            }
            if (/watermark&/.test(resized)) {
                var sm = 8;
                var pD = 10;
                var bXr = 240;
                if (dz >= 1680) {
                    sm = 32;
                    pD = 36;
                    bXr = 680
                } else if (dz > 500) {
                    sm = 16;
                    pD = 20;
                    bXr = 360
                } else if (dz >= 300) {
                    sm = 8;
                    pD = 10;
                    bXr = 240
                }
                resized = resized.replace(/dx=\d+/, "dx=" + sm);
                resized = resized.replace(/dy=\d+/, "dy=" + pD);
                resized = resized.replace(/fontsize=\d+/, "fontsize=" + bXr)
            }
            return resized
        } else {
            return "http://imgsize.ph.126.net/?" + ( !! crj ? "enlarge=true&": "") + "imgurl=" + bws + "_" + dz + "x" + eT + "x" + cri + (bUY > 0 ? "x" + bUY: "") + ".jpg"
        }
    };
    p.Ru = function(eF) {
        return this.bM() + "/login" + ( !! eF ? "?target=" + encodeURIComponent(eF) : "")
    };
    B.HC = "placeholder" in cg;
    delete cg;
    p.Ws = function(X, wM) {
        wM = wM || "";
        var lb, i, l;
        if ( !! B.HC || !X) return;
        X = E.be(X);
        if (!U.co(X, "array")) {
            if (X.value == "") {
                X.value = X.getAttribute("placeholder");
            }
            V.bHo(X, "focus",
            function() {
                lb = X.getAttribute("placeholder");
                if (X.value == lb) {
                    X.value = ""
                }
                if ( !! wM) E.ba(X, wM)
            });
            V.bHo(X, "blur",
            function() {
                lb = X.getAttribute("placeholder");
                if (!X.value) {
                    X.value = lb;
                    if ( !! wM) E.bf(X, wM)
                }
            })
        } else {
            for (i = 0, l = X.length; i < l; i++) {
                p.Ws(X[i], wM)
            }
        }
    };
    p.WD = function(Rt) {
        Rt = Rt || 1;
        switch (Rt) {
        case 1:
            return "文字";
        case 2:
            return "图片";
        case 3:
            return "音乐";
        case 4:
            return "视频";
        case 5:
            return "问答";
        default:
            return "文字"
        }
    };
    P(N.ui).fx("#<proxy-span2>{position:absolute;z-index:-1;left:0;bottom:0;width:370px;height:0;overflow:hidden;visibility:hidden;word-wrap:break-word;word-break:break-all;}#<proxy-span2> .proxy-span{position:absolute;visibility:hidden;width:370px;line-height:20px;}", "proxy-span2");
    p.WG = function(cx, dz, eT) {
        var Rp = document.cloneElement("span", "proxy-span2"),
        yx = document.cloneElement("span", "proxy-span");
        Rp.appendChild(yx);
        if ( !! dz) yx.style.width = Rp.style.width = dz + "px";
        cx.insertAdjacentElement("afterEnd", Rp);
        V.bHo(cx, "input",
        function() {
            if (!cx.value) {
                cx.style.height = "20px";
                return
            } else {
                if (cx.value.length > 200) {
                    cx.value = cx.value.substring(0, 200)
                }
            }
            var bg = cx.value.replace(/\n/g, "<br>");
            bg = bg.replace(/<br>$/, "<br>&nbsp;");
            yx.innerText = bg;
            if (yx.clientHeight > 20) {
                cx.style.height = yx.clientHeight + "px"
            } else {
                cx.style.height = "20px"
            }
        });
        return yx
    };
    p.AL = function(cx, WN) {
        if (!cx || !WN) return;
        V.bHo(cx, "keydown",
        function(bHm) {
            var bK = bHm && (bHm.which || bHm.keyCode) || 0,
            bzx = bHm && bHm.ctrlKey;
            if ( !! bzx && bK == 13) {
                WN.call()
            }
        })
    };
    p.bzw = function(bHm) {
        V.bb(bHm);
        E.bf(document.body, "p-tmsg2");
        E.ba(this.bzv, "f-dn");
        U.ru("OutdatedBrowserBanner", "1", ".lofter.com", 30, "/");
        this.WX = false;
        this.Ig()
    };
    p.Rn = function() {
        if (U.ot("OutdatedBrowserBanner") == "1") {
            return
        }
        if (B.dh) {
            E.ba(document.body, "p-tmsg2");
            var p = document.createElement("div");
            document.body.insertAdjacentElement("afterBegin", p);
            p.className = "m-tmsg2";
            p.innerHTML = '<p>温馨提示：使用<a href="http://www.google.com/chrome" target="_blank">Chrome</a>、<a href="http://firefox.com.cn/download/" target="_blank">Firefox</a>、<a href="http://windows.microsoft.com/zh-CN/windows/downloads" target="_blank">IE7以上版本</a>等最新浏览器访问LOFTER，可以获得更好的视觉体验！</p><a href="#" id="closeOutdatedBrowserBanner" class="w-close2">关闭</a>';
            this.bzv = p;
            var closeLink = E.be("closeOutdatedBrowserBanner");
            V.bHo(closeLink, "click", this.bzw.bHk(this));
            this.WX = true
        }
    };
    p.qB = function(hD) {
        var Xh = new Date,
        bzu = new Date(hD),
        ig = Xh.getTime() - hD;
        if (ig > 13 * RC) return U.ws(hD, (bzu.getFullYear() != Xh.getFullYear() ? "yyyy/": "") + "MM/dd HH:mm");
        for (var i = 12; i > 0; i--) if (ig > i * RC) return i + "小时前";
        if (ig > 30 * AR) return "半小时前";
        if (ig > 15 * AR) return "一刻钟前";
        if (ig > 10 * AR) return "10分钟前";
        if (ig > 5 * AR) return "5分钟前";
        return "1分钟前"
    };
    p.kX = function() {
        E.bd("操作失败，请帐号解封后再试！", true)
    };
    p.bzt = function(cG) {
        return !! cG && cG.length > 4 && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(cG)
    };
    p.yA = function() { //我改动的
        //return;
        this.Ix = E.be("rside");
        this.AH = E.be("g-foreverEntryArea");
        if (!this.Ix || !this.AH) return;
        this.cSa = E.bj(document.body, "g-bd")[0];
        window.setTimeout(function() {
            V.bHo(window, "scroll", this.Ig.bHk(this));
            V.bHo(window, "resize", this.Ig.bHk(this))
        }.bHk(this), 1e3);
        window.setTimeout(this.Ig.bHk(this), 1200)
    };
    p.Ig = function() {
        if (B.dh) {
            this.XE()
        } else {
            if ( !! this.Rl) this.Rl = window.clearTimeout(this.Rl);
            this.Rl = window.setTimeout(this.XE.bHk(this), 10)
        }
    };
    p.XE = function() {
        var kj = this.bzy();
        var AF = this.Ix.clientHeight || this.Ix.offsetHeight || 300;
        var dp = document.documentElement || document.body;
        var cSR = E.bj(document.body, "mlistimg").length;
        if (cSR > 0 && cSR <= 20) {
            this.dwW = this.cSa.offsetHeight > AF + 100 ? this.cSa.offsetHeight: AF + 100
        }
        var qx = dp.clientHeight || 0;
        if (kj + qx > AF + 220 && kj + qx < this.dwW + 220) {
            if (B.dh) {
                this.AH.style.left = 0;
                var XT = 0;
                if (this.WX) {
                    XT = 46
                }
                this.AH.style.top = kj + qx - 163 - XT + "px"
            }
            if ( !! this.ceM) this.ceM = window.clearTimeout(this.ceM);
            E.ba(this.AH, "js-foreverEntry-show-1");
            E.ba(this.AH, "js-foreverEntry-show")
        } else {
            E.bf(this.AH, "js-foreverEntry-show");
            if ( !! this.ceM) this.ceM = window.clearTimeout(this.ceM);
            this.ceM = window.setTimeout(function() {
                E.bf(this.AH, "js-foreverEntry-show-1")
            }.bHk(this), 300)
        }
    };
    p.Rh = function(bN) {
        var Rg = "";
        if (bN.citeRootBlogId > 0 && !!bN.citeRootBlogInfo) {
            var bzs = bN.citeRootBlogInfo.blogNickName || "";
            var bzr = loft.x.GX(bN.citeRootBlogInfo.blogName, bN.citeRootPostId, bN.citeRootBlogId);
            Rg = '<a href="' + bzr + '" target="_blank">转载自&nbsp;&nbsp;' + bzs + "</a>"
        } else if ( !! bN.blogInfo.imageProtected) {
            Rg = "&copy;" + bN.blogInfo.blogNickName
        }
        return Rg
    };
    p.AD = function(origiString, len, needsuffix) {
        if ( !! origiString) {
            var cuted = U.bgB(origiString, len);
            if (needsuffix && cuted.length < origiString.length) cuted += "...";
            return cuted
        }
        return origiString
    };
    p.caG = function(tF) {
        if ( !! tF) {
            tF.addListener("afterpaste", this.dwV.bHk(this, tF))
        }
    };
    p.dwV = function(tF) {
        if (!tF || !tF.document || !tF.document.getElementsByTagName) return;
        var bHl = tF.document.getElementsByTagName("span") || [];
        for (var i = 0; i < bHl.length; i++) {
            var crq = bHl[i].style.textDecoration || "";
            bHl[i].style.cssText = "";
            if (crq.toLowerCase() == "underline") {
                bHl[i].style.textDecoration = crq
            } else if (crq.toLowerCase() == "line-through") {
                bHl[i].style.textDecoration = crq
            }
        }
        bHl = tF.document.getElementsByTagName("ol") || [];
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.cssText = "";
            bHl[i].style.listStyleType = "decimal"
        }
        bHl = tF.document.getElementsByTagName("ul") || [];
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.cssText = "";
            bHl[i].style.listStyleType = "disc"
        }
    };
    p.qt = function(tF) {
        if (B.oc && !!tF) {
            tF.addListener("afterpaste", this.bzq.bHk(this, tF))
        }
    };
    p.bzq = function(tF) {
        if (!tF || !tF.document || !tF.document.getElementsByTagName) return;
        var bHl = tF.document.getElementsByTagName("span");
        if (!bHl || bHl.length <= 0) return;
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.whiteSpace = ""
        }
    };
    p.stopEvent = V.bb;
    p.dwU = function() {
        var ceP = window.navigator.userAgent.toLowerCase();
        var cUw = false;
        if (ceP.indexOf("safari") >= 0) {
            try {
                cUw = ceP.match(/version\/([\d.]+)/)[1]
            } catch(e) {}
        }
        return cUw
    };
    p.ceQ = function() {
        var ceP = window.navigator.userAgent.toLowerCase();
        return ceP.indexOf("ipad") >= 0
    };
    p.dwT = function() {
        var ceP = window.navigator.userAgent;
        /OS ([0-9]_\d[_\d]*) like Mac OS X/i.test(ceP);
        return RegExp.$1 || ""
    };
    var dwS = /(?:<embed.*?>)|(?:<\/embed>)/gi;
    p.bOY = function(Z) {
        return (Z || "").replace(dwS, "")
    };
    p.dwR = function(bHm, ok) {
        ok = ok || 125;
        if (!bHm) return;
        var X = V.be(bHm);
        if (!X) return;
        if (X.clientWidth > X.clientHeight) {
            X.style.height = ok + "px";
            X.style.width = "auto";
            var cw = X.clientWidth;
            var ch = X.clientHeight || 1;
            var offset = (ok * cw / ch - ok) / 2;
            X.style.left = -offset + "px"
        } else {
            X.style.width = ok + "px";
            X.style.height = "auto";
            var cw = X.clientWidth;
            var ch = X.clientHeight || 1;
            var offset = (ok * ch / cw - ok) / 2;
            X.style.top = -offset + "px"
        }
        X.style.visibility = "visible"
    };
    p.cVd = function(CL, bJU) {
        CL.focus();
        CL.innerHTML = U.ew(bJU);
        if (!B.da) {
            var bIW = window.getSelection ? window.getSelection() : document.selection;
            var hy = bIW.createRange ? bIW.createRange() : bIW.getRangeAt(0);
            var cVj = CL.lastChild;
            hy.setEndAfter(cVj);
            hy.setStartAfter(cVj);
            bIW.removeAllRanges();
            bIW.addRange(hy)
        }
    };
    p.cVk = function(CL, fW) {
        if (!CL) return;
        var atags = CL.getElementsByTagName("a"),
        l = atags.length,
        i = l - 1;
        for (; i > -1; i--) {
            if (atags[i].tagName === "A" && (atags[i].href.indexOf("mailto") >= 0 || atags[i].className === "")) {
                atags[i].outerHTML = atags[i].innerHTML
            }
        }
        if ( !! fW) {
            return CL.innerHTML.replace(/^(<p>&nbsp;<\/p>(\r)?(\n)?)*/ig, "").replace(/(<p>&nbsp;<\/p>(\r)?(\n)?)*$/ig, "").replace(/<\/p>/ig, "").replace(/<p>/ig, "<br>").replace(/^(<br>)?/ig, "")
        } else {
            return CL.innerHTML
        }
    };
    p.ceS = function(cVt) {
        if ( !! cVt) {
            this.xI = document.getElementById(cVt).contentWindow
        } else {
            this.xI = window
        }
        var bIW = this.xI.getSelection ? this.xI.getSelection() : document.selection,
        hy = bIW.createRange ? bIW.createRange() : bIW.getRangeAt(0),
        cVw = false,
        CL = this.xI.getSelection ? bIW.anchorNode.parentNode: hy.parentElement(),
        czQ = this.xI.getSelection ? bIW.anchorNode.parentNode.tagName.toUpperCase() : hy.parentElement().nodeName.toUpperCase();
        if (czQ === "A") {
            cVw = true
        }
        return cVw
    };
    p.bKv = function(bK) {
        if (bK == -100) {
            E.bd("您关注得太快了，请休息一下。", true)
        } else if (bK == -2) {
            E.bd("您已经关注该博客。", true)
        } else if (bK == -4) {
            E.bd("博客已经不存在，不允许关注。", true)
        } else if (bK == -6) {
            E.bd("关注失败，您关注博客的总数已经超过限制。", true)
        } else if (bK == -7) {
            E.bd("加密博客，无法关注！", true)
        } else if (bK == -8) {
            E.bd("由于用户权限设置，您无法关注该用户！", true)
        } else if (bK <= 0) {
            E.bd("关注失败，错误码: " + bK, true)
        }
    };
    p.dwQ = function() {
        var czL = /(msie\s|trident.*rv:)([\w.]+)/,
        czK = navigator.userAgent.toLowerCase();
        if (czL.exec(czK) != null) {
            return true
        } else {
            return false
        }
    };
    p.bOv = function() {
        p.cVT();
        var czI = E.be("artCart"),
        bQG = U.ot("spcartmessages") || "";
        if (!bQG) {
            czI.innerText = "购物车(0)";
            U.ir("spcartmessages", ".lofter.com", "/")
        } else {
            var bRL = U.bHx(decodeURIComponent(bQG));
            if ( !! bRL && bRL.length > 0) {
                czI.innerText = "购物车(" + bRL.length + ")";
                czI.style.display = ""
            } else {
                U.ir("spcartmessages", ".lofter.com", "/")
            }
        }
    };
    p.cVT = function() {
        if ( !! p.ceQ() && E.be("showDldTipsInIpad")) {
            var cbF = E.be("showDldTipsInIpad"),
            cbH = cbF.getElementsByClassName("w-close2")[0],
            cir = U.ot("showDldTipsInIpadStatus") || "";
            var ceU = E.be("m-blogSetting");
            if (!cir) {
                if ( !! ceU) {
                    E.ba(ceU, "js-showDldTipsInIpad")
                }
                E.bf(cbF, "f-dn");
                V.bHo(cbH, "click",
                function(bHm) {
                    V.bb(bHm);
                    E.ba(cbF, "f-dn");
                    if ( !! ceU) {
                        E.bf(ceU, "js-showDldTipsInIpad")
                    }
                    U.ru("showDldTipsInIpadStatus", "1", ".lofter.com", 5, "/")
                })
            } else {
                if ( !! ceU) {
                    E.bf(ceU, "js-showDldTipsInIpad")
                }
            }
        }
    };
    p.dxZ = function(CL, cbI, bNR) {
        var dwM = decodeURIComponent(U.ot(cbI)) || "",
        bYk = E.bj(CL, "w-tip")[0] || CL;
        if (dwM == bNR) {
            bYk.style.display = "none"
        } else {
            bYk.style.display = "block";
            V.bHo(CL, "click", this.dwL.bHk(this, bYk, cbI, bNR))
        }
    };
    p.dwL = function(bYk, cbI, bNR) {
        bYk.style.display = "none";
        U.ru(cbI, bNR, ".lofter.com", 300, "/")
    };
    p.bTy = function(bTx, bOH, bLf, bLi, ca, bEL) {
        bTx = bTx || "_trackEvent";
        bOH = bOH || "";
        bLf = bLf || "";
        bLi = bLi || "";
        bEL = bEL || 400;
        if ( !! ca && U.co(ca, "function")) {
            var cWJ = function(ca) {
                var cb = function() {
                    if (!cb.isExeced) {
                        cb.isExeced = true;
                        ca()
                    }
                };
                return cb
            } (ca);
            setTimeout(cWJ, bEL);
            window["_gaq"].push(["_set", "hitCallback", cWJ])
        }
        window["_gaq"].push([bTx, bOH, bLf, bLi]);
        window["_gaq"].push(["_set", "hitCallback", null])
    };
    p.dwK = function(bk) {
        while ( !! bk && bk != document.body) {
            if ( !! bk.tagName && bk.tagName.toLowerCase() == "a") return bk;
            bk = bk.parentNode
        }
        return
    };
    p.globalEventStatistic = function(bHm, Hp, bTx, bOH, bLf, bLi, ca, bEL) {
        bHm = bHm ? bHm: window.event;
        var bQd;
        if ( !! bHm && !!Hp) {
            bQd = p.dwK(Hp)
        }
        if ( !! bQd) {
            var yk = U.bA(bQd.href || "");
            var eF = U.bA(bQd.target || "");
            if (eF.toLowerCase() != "_blank") {
                V.bsR(bHm);
                if (!ca && !!yk) {
                    ca = function() {
                        location.href = yk
                    }
                }
            }
        }
        p.bTy(bTx, bOH, bLf, bLi, ca, bEL)
    };
    p.cWS = function(bRj, dx) {
        bRj = bRj || [];
        var bn = loft.x.GD(bRj);
        var bOM = bn.length || 0;
        dx = dx || bOM;
        if (dx > bOM) dx = bOM;
        if (bOM > 0) {
            var bHO = {},
            bJn = [];
            var Q = -1;
            var bJa;
            for (; bn.length > 0 && bJn.length < dx;) {
                Q = U.Ub(0, bn.length);
                bJa = bn[Q];
                bn.splice(Q, 1);
                if ( !! bJa && !bHO[bJa]) {
                    bHO[bJa] = bJa;
                    bJn.push(bJa)
                }
            }
            bn = bJn
        }
        return bn
    };
    p.kI = function(ciu) {
        if (!ciu || !U.co(ciu, "function")) return;
        var ccq = function(nd) {
            if (document.readyState === "complete") {
                setTimeout(function() {
                    if (!ccq.isExced) {
                        ccq.isExced = true;
                        ciu()
                    }
                },
                1)
            } else if (nd) {
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", ccq, false);
                    window.addEventListener("load", ccq, false)
                } else {
                    document.attachEvent("onreadystatechange", ccq);
                    window.attachEvent("onload", ccq)
                }
            }
        };
        ccq(true)
    };
    p.cID = function(ck) {
        if (!ck) return;
        loft.c.ccv = loft.c.ccv || [];
        if (U.co(ck, "string")) {
            ck = ck.split(",")
        }
        for (var i = 0; i < ck.length; i++) {
            if (U.fO(loft.c.ccv,
            function(dwJ, bo) {
                return dwJ === bo
            }.bHk(this, ck[i])) < 0) {
                loft.c.ccv.push(ck[i])
            }
        }
    };
    p.ccz = function(bHn) {
        if (!bHn) return;
        if (U.co(bHn, "object") && !!bHn.activityTags) {
            loft.x.cID(bHn.activityTags)
        } else if (U.co(bHn, "array") && !!bHn.length) {
            for (var i = 0; i < bHn.length; i++) {
                if ( !! bHn[i] && !!bHn[i].activityTags) {
                    loft.x.cID(bHn[i].activityTags)
                }
            }
        }
    };
    var civ = [".baidu.com", "www.163.com", "bbs.163.com", "blog.163.com", "mail.163.com", "pp.163.com", "photo.163.com", "reg.163.com", "weibo.com"];
    var cJs = function(bp, bn) {
        if (!bp) return - 1;
        bn = bn || [];
        for (var i = 0; i < bn.length; i++) {
            var Q = bp.indexOf(bn[i]);
            if (Q >= 0) {
                return i
            }
        }
        return - 1
    };
    p.dwI = function() {
        var crI = U.ot("referrer4statistic");
        try {
            crI = unescape(crI || "")
        } catch(e) {}
        if ( !! crI) {
            U.ir("referrer4statistic", "www.lofter.com", "/");
            var Q = cJs(crI, civ);
            if (Q >= 0) {
                p.bTy("_trackEvent", "外部流量", civ[Q], "");
                return
            }
        }
        var cJH = document.referrer || "";
        if ( !! cJH) {
            var Q = cJs(cJH, civ);
            if (Q >= 0) {
                if ( !! civ[Q]) {
                    p.bTy("_trackEvent", "外部流量", civ[Q], "")
                }
                return
            }
        }
    };
    p.crJ = function() {
        return true
    };
    p.hashCode = function(str, caseSensitive) {
        if (!caseSensitive) {
            str = str.toLowerCase()
        }
        var hash = 1315423911,
        i, ch;
        for (i = str.length - 1; i >= 0; i--) {
            ch = str.charCodeAt(i);
            hash ^= (hash << 5) + ch + (hash >> 2)
        }
        return hash & 2147483647
    };
    p.ceZ = function(bKf) {
        bKf = bKf || "";
        if (bKf.indexOf("nos.netease.com") >= 0 || bKf.indexOf("nosdn.127.net") >= 0) {
            return true
        } else {
            return false
        }
    };
    p.dwG = function(bKf, cfa) {
        if (!bKf || !loft.x.ceZ(bKf)) return null;
        cfa = cfa || {};
        var bMk = {
            imageView: {},
            watermark: {}
        };
        if ( !! cfa.ow) bMk.ow = cfa.ow;
        if ( !! cfa.oh) bMk.oh = cfa.oh;
        var crL = bKf.split("?");
        bMk.raw = crL[0];
        var dwt = crL[1] || "";
        var bWO = dwt.split("%7C") || [];
        for (var i = 0; i < bWO.length; i++) {
            if ( !! bWO[i] && bWO[i].indexOf("imageView") >= 0) {
                var cyZ = bWO[i].split("&") || [];
                for (var j = 0; j < cyZ.length; j++) {
                    if ( !! cyZ[j]) {
                        var wB = cyZ[j].split("=");
                        bMk["imageView"][wB[0]] = wB[1]
                    }
                }
            } else if ( !! bWO[i] && bWO[i].indexOf("watermark") >= 0) {
                var cyU = bWO[i].split("&") || [];
                for (var j = 0; j < cyU.length; j++) {
                    if ( !! cyU[j]) {
                        var wB = cyU[j].split("=");
                        bMk["watermark"][wB[0]] = wB[1]
                    }
                }
            }
        }
        return bMk
    };
    p.cKf = function(bMk, ccS) {
        bMk = bMk || {};
        bMk["imageView"] = bMk["imageView"] || {};
        var bNC = bMk["imageView"]["rotate"] || 0;
        var py = bMk.ow || 0;
        var Oe = bMk.oh || 0;
        if (bNC == 90 || bNC == 270) {
            py = Oe
        }
        ccS = ccS || 500;
        if (py > 0 && py < ccS) {
            ccS = py
        }
        var sm = 8;
        var pD = 10;
        var bXr = 240;
        if (ccS >= 1680) {
            sm = 32;
            pD = 36;
            bXr = 680
        } else if (ccS > 500) {
            sm = 16;
            pD = 20;
            bXr = 360
        } else if (ccS >= 300) {
            sm = 8;
            pD = 10;
            bXr = 240
        } else {
            return ""
        }
        var fv = "watermark";
        var bHn = bMk["watermark"] || {};
        for (var k in bHn) {
            if ( !! k && k != "watermark" && bHn[k]) {
                if (k == "fontsize") {
                    fv = fv + "&" + k + "=" + bXr
                } else if (k == "dx") {
                    fv = fv + "&" + k + "=" + sm
                } else if (k == "dy") {
                    fv = fv + "&" + k + "=" + pD
                } else {
                    fv = fv + "&" + k + "=" + bHn[k]
                }
            }
        }
        if (fv == "watermark") fv = "";
        return fv
    };
    p.dya = function(bMk) {
        bMk = bMk || {};
        var fv = "imageView";
        var bHn = bMk["imageView"] || {};
        for (var k in bHn) {
            if ( !! k && k != "imageView" && bHn[k]) {
                fv = fv + "&" + k + "=" + bHn[k]
            }
        }
        return fv
    };
    p.dwq = function(yz) {
        if (!yz) return;
        var bLc = {};
        var Q = yz.indexOf("_");
        if (Q > 0 && Q < yz.length) {
            try {
                bLc.blogId = parseInt(yz.substring(0, Q), 16);
                bLc.postId = parseInt(yz.substring(Q + 1, yz.length), 16)
            } catch(e) {}
        }
        return bLc
    }
})(); (function() {
    var p = P("loft.c"),
    bHp = loft.x.cF("CF") || {};
    p.dyb = bHp.debugMode || false;
    p.cre = bHp.testDBMode || false;
    p.crf = bHp.devSourceMode || false;
    p.cm = bHp.visitor || [];
    p.jg = bHp.blogs || [];
    p.bzp = !!bHp.crm;
    p.ccv = bHp.activityTags || [];
    p.nz = bHp.mainBlog || {}
})(); (function() {
    var p = P("loft.w"),
    wS,
    bLw,
    bLq,
    bHu = "ui-" + U.cA();
    var cLd = "js-scrollList";
    var cyO = "js-trans";
    var HL = "js-showscrolllist";
    P(N.ui).fx("#<uispace>{position:absolute;z-index:100;text-align:left;cursor:pointer;color:#444;background:#fff;}*[hidefocus]{outline:none;}#<uispace> .clearfix{zoom:1;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .js-trans{transition:all 0.15s linear;-webkit-transition:all 0.15s linear;-moz-transition:all 0.15s linear;-o-transition:all 0.15s linear;}#<uispace> .zitm{/*padding:0 5px;width:57px;*/ *min-width:expression(this.parentNode.clientWidth+\"px\");height:19px;line-height:19px;cursor:pointer;font-size:12px;}#<uispace> .zitm{background-color:#fff;text-align:center;}#<uispace> .zitm:hover,#<uispace> .item.js-zhvr-910{color:#fff;background-color:#4ea0d4;}#<uispace> .scrollNode{position:relative;zoom:1;overflow:hidden;border:1px solid #c0c0c0;}#<uispace> .scrollNode .scrollList{position:absolute;left:0;top:0;*text-align:center;}#<uispace> .scrollNode .vSlideWayNode{display:none;position:absolute;right:0;_right:-1px;top:0;background:#e2dfdf;cursor:default;}#<uispace> .scrollNode .hSlideWayNode{display:none;position:absolute;left:0;bottom:0;background:#e2dfdf;cursor:default;}#<uispace> .scrollNode .vSlideWayNode .vSlideBtn{position:absolute;top:0left:0;width:6px;background:#aaa;text-indent:-9999px;}#<uispace> .scrollNode .hSlideWayNode .hSlideBtn{position:absolute;top:0;left:0;width:6px;background:#aaa;text-indent:-9999px;}#<uispace> .js-noHoverItem,#<uispace> .js-noHoverItem:hover{color:#444;background-color:#fff;}#<uispace> .js-hoverItem,#<uispace> .js-hoverItem:hover{color:#fff;background-color:#4ea0d4;}", bHu);
    p.ciM = C();
    wS = p.ciM.bi(P(N.ut).fc, true);
    Xx = p.ciM.bw;
    wS.bq = function() {
        this.bHr();
        this.Y = document.cloneElement("div", "zitm thide");
        E.fy(this.Y, "js-zhvr-910");
        V.bHo(this.Y, "click", this.rF.bHk(this))
    };
    wS.bHC = function(I) {
        I = I || O;
        this.bHo("onclick", I.onclick || F);
        this.dwo = I.notShowTitle || false
    };
    wS.ce = function(bHn) {
        this.bHq = bHn || O;
        var bg = this.bHq.t || this.bHq.n || this.bHq.v || " ";
        if (!this.dwo) this.Y.title = bg;
        this.Y.innerText = bg
    };
    wS.hY = function() {
        return this.bHq
    };
    wS.rF = function(bHm) {
        this.bh("onclick", this.bHq)
    };
    wS.cK = function() {
        E.bf(this.Y, "js-curpage");
        this.Y.innerHTML = "";
        this.Y.style.display = "";
        Xx.cK.apply(this)
    };
    wS.cLF = function(bTv, bTu) {
        bTv = bTv || "js-hoverItem";
        bTu = bTu || "js-noHoverItem";
        E.bf(this.Y, bTu);
        E.ba(this.Y, bTv)
    };
    wS.ciQ = function(bTv, bTu) {
        bTv = bTv || "js-hoverItem";
        bTu = bTu || "js-noHoverItem";
        E.bf(this.Y, bTv);
        E.ba(this.Y, bTu)
    };
    wS.cyL = function(bTv, bTu) {
        bTv = bTv || "js-hoverItem";
        bTu = bTu || "js-noHoverItem";
        E.bf(this.Y, bTv);
        E.bf(this.Y, bTu)
    };
    wS.dwn = function() {
        var du = {
            width: this.Y.clientWidth,
            height: this.Y.clientHeight
        };
        return du
    };
    p.bRS = C();
    bLw = p.bRS.bi(P(N.ui).ga, true);
    bLw.bq = function(bl, I) {
        I = I || O;
        this.eL = {
            onclick: this.DD.bHk(this)
        };
        this.cMy = I.triggerNode || "";
        this.dL = bl || document.body;
        this.bHr(bl, I);
        if (!this.bMX) {
            this.bMX = p.ciS.bG(this.ciU);
            if (this.pp > -1) {
                this.cMN(I)
            }
        }
        V.bHo(this.Y, "mousedown",
        function(bHm) {
            V.bb(bHm)
        }.bHk(this));
        V.bHo(document, "mousedown", this.Hl.bHk(this));
        if (B.qi) {
            V.bHo(this.Y, "DOMMouseScroll", this.but.bHk(this))
        } else {
            V.bHo(this.Y, "mousewheel", this.but.bHk(this))
        }
        V.bHo(this.Y, "mousemove", this.dwm.bHk(this))
    };
    bLw.bz = function(I) {
        if (B.dh) this.dL.style.zoom = 1;
        I = I || O;
        this.bHo("onchange", I.onchange || F);
        this.bHo("onlisthide", I.onlisthide || F);
        this.dwl = I.enableCurItemCenter || false;
        this.eL.notShowTitle = I.notShowTitle || false;
        this.Ho = I.items || [];
        this.dwk = I.noFixChromeWheelHover || false;
        this.dyc = I.scrollNodewidth || 0;
        this.cfg = I.scrollNodeHeight || 0;
        this.cfj = I.minBtnLength || 10;
        this.bQb = I.scrollType || "";
        this.cyz = I.scrollAreaWidth || 0;
        this.cNW = I.scrollAreaHeight || 0;
        this.cOk = I.btnBreadth || this.bLI.clientWidth || 6;
        this.cOn = I.btnBreadth || this.bYp.clientHeight || 6;
        if ( !! this.cNW) {
            if (this.bQb == "v" || this.bQb == "vh") {
                this.bKg.style.height = this.cNW - this.cOn + "px";
                this.bKg.style.paddingBottom = this.cOn + "px"
            }
        }
        if ( !! this.cyz) {
            if (this.bQb == "v" || this.bQb == "vh") {
                this.bKg.style.width = this.cyz - this.cOk + "px";
                this.bKg.style.paddingRight = this.cOk + "px"
            }
        }
        if (!this.bQb) {
            this.bKg.style.height = "auto";
            this.bKg.style.paddingBottom = 0;
            this.bKg.style.width = this.cyz + "px";
            this.bKg.style.paddingRight = 0
        }
        this.cyt = I.hasAnimateMove || false;
        this.bmA = I.noHideListIfListShowed || false;
        this.cOE = I.upScrollBarStyleLeft || 0;
        this.cOJ = I.upScrollBarStyleBottom || 0;
        this.XL(this.Ho);
        this.pp = I.pp || -1;
        this.bmz();
        if ( !! this.cOE) {
            this.Y.style.left = this.cOE + "px"
        }
        if ( !! this.cOJ) {
            this.Y.style.bottom = this.cOJ + "px"
        }
        this.ciU = {
            scrollNode: this.bKg,
            scrollList: this.bIe,
            vSlideWayNode: this.bMd,
            hSlideWayNode: this.bNk,
            vSlideBtn: this.bLI,
            hSlideBtn: this.bYp,
            minBtnLength: this.cfj,
            scrollType: this.bQb,
            hasAnimateMove: this.cyt
        };
        if ( !! this.bMX) {
            this.bMX.bHC(this.ciU)
        }
        if ( !! this.bMX && this.pp > -1) {
            this.cMN(I)
        }
    };
    bLw.dwi = function(Q) {
        if (Q < 0) return;
        var bym = this.cT[Q - 1];
        if ( !! bym && bym.Y) {
            E.ba(bym.Y, "js-curpage")
        }
    };
    bLw.cMN = function(I) {
        if (this.dwl) {
            this.dwi(this.pp)
        }
        var Q = this.pp,
        fe = this.cT.length,
        bLJ, cjd;
        this.cT[Q - 1].cLF();
        if (fe > 10 && Q > 5) {
            var bTs = fe - Q - 5;
            cjd = bTs < 0 ? fe - 10 : Q - 5;
            this.bIe.style.top = 0 - cjd * I.scrollAreaHeight / 10 + "px";
            this.bMX.cHR(cjd, fe)
        }
    };
    bLw.dwm = function(bHm) {
        if (this.pp > -1) {
            this.cT[this.pp - 1].cyL();
            this.pp = -1
        }
        if (B.oc && !!this.cyc) {
            this.dwh(this.cT);
            this.cyc = false
        }
    };
    bLw.but = function(bHm) {
        if (!bHm) return;
        V.bb(bHm);
        var bLJ;
        var bWB = 1;
        if ( !! bHm.wheelDelta && !!this.bMX) {
            if (bHm.wheelDelta > 0) {
                bLJ = {
                    deltaTop: -bWB
                }
            } else {
                bLJ = {
                    deltaTop: bWB
                }
            }
        } else if ( !! bHm.detail) {
            if (bHm.detail > 0) {
                bLJ = {
                    deltaTop: bWB
                }
            } else {
                bLJ = {
                    deltaTop: -bWB
                }
            }
        }
        if ( !! bLJ) {
            this.bMX.cQe(bLJ);
            if (B.oc && !this.dwk && !!this.cT) {
                if (!this.cyc) {
                    this.cyc = true;
                    this.dwg(this.cT)
                }
                this.dwf(this.cT, bHm)
            }
        }
    };
    bLw.dwf = function(cf, bHm) {
        if ( !! cf && !!cf[0] && !!this.bMX) {
            var crU = cf[0].dwn();
            if (!crU.height) return;
            var kT = this.bMX.dwe();
            var QL = V.IO(bHm);
            var wF = V.vS(bHm);
            var cQl = E.tz(this.bKg);
            var dwb = E.jO(this.bKg);
            if (QL < cQl || QL > cQl + crU.width) {
                if ( !! this.bUy) this.bUy.ciQ();
                return
            }
            var Q = Math.ceil((wF - dwb - kT.top + crU.height) / crU.height) - 1 - 1;
            if ( !! cf[Q]) {
                if (this.bUy == cf[Q]) {
                    return
                } else {
                    if ( !! this.bUy) this.bUy.ciQ();
                    this.bUy = cf[Q];
                    this.bUy.cLF()
                }
            } else {
                if ( !! this.bUy) this.bUy.ciQ()
            }
        } else {
            if ( !! this.bUy) this.bUy.ciQ()
        }
    };
    bLw.dwg = function(cf) {
        if (!cf || cf.length <= 0) return;
        for (var i = 0; i < cf.length; i++) {
            this.cT[i].ciQ()
        }
    };
    bLw.dwh = function(cf) {
        if (!cf || cf.length <= 0) return;
        for (var i = 0; i < cf.length; i++) {
            this.cT[i].cyL()
        }
    };
    bLw.cK = function() {
        p.bRS.bw.cK.call(this);
        this.bMX = this.bMX.cK();
        this.cT = p.ciM.db(this.cT)
    };
    bLw.XL = function(cf) {
        p.ciM.db(this.cT);
        this.cT = p.ciM.bG(cf, this.bIe, this.eL)
    };
    bLw.cU = function() {
        return bHu + " " + cLd
    };
    bLw.cM = function() {
        return '<div class="scrollNode ztag"><div class="scrollList ztag"></div><div class="vSlideWayNode ztag"><div hidefocus="true" class="vSlideBtn ztag">&nbsp;</div></div><div class="hSlideWayNode ztag"><div hidefocus="true" class="hSlideBtn ztag">&nbsp;</div></div></div>'
    };
    bLw.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        var Q = 0;
        this.bKg = bHl[Q++];
        this.bIe = bHl[Q++];
        this.bMd = bHl[Q++];
        this.bLI = bHl[Q++];
        this.bNk = bHl[Q++];
        this.bYp = bHl[Q++];
        this.pp = -1
    };
    bLw.DD = function(bHn) {
        if (!bHn) return;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHn.v) {
                Q = i;
                break
            }
        }
        this.Hl();
        this.bh("onchange", bHn.v || bHn.n || bHn.t || "", Q)
    };
    bLw.bmz = function(bHm) {
        if (bHm) V.bb(bHm);
        if (!this.XK) {
            if (!E.cr(this.Y, HL)) {
                this.bmy();
                this.Y.style.visibility = "visible";
                E.ba(this.Y, HL)
            } else {
                if (!this.bmA) this.Hl()
            }
        }
    };
    bLw.Hl = function(bHm) {
        var bOI = V.be(bHm);
        if (this.pp > -1) {
            this.cT[this.pp - 1].cyL();
            this.pp = -1
        }
        if ( !! bOI && !!this.cMy) {
            var bk = bOI;
            while ( !! bk && bk != document.body) {
                if (bk == this.cMy) {
                    return
                } else {
                    bk = bk.parentNode
                }
            }
        }
        E.bf(this.bIe, cyO);
        this.Y.style.visibility = "hidden";
        E.bf(this.Y, HL);
        this.bh("onlisthide")
    };
    bLw.bUw = function() {
        if (E.cr(this.Y, HL)) {
            return true
        } else {
            return false
        }
    };
    bLw.bmy = function() {
        var bHl = E.bj(document.body, cLd) || [];
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.visibility = "hidden";
            E.bf(bHl[i].parentNode, HL)
        }
    };
    p.ciS = C();
    bLq = p.ciS.bi(P(N.ut).gY);
    p.ciS.bG = function(I) {
        return new p.ciS(I)
    };
    bLq.bq = function(I) {
        this.bHr();
        this.bHC(I)
    };
    bLq.bHC = function(I) {
        this.bz(I);
        this.dwa()
    };
    bLq.bz = function(I) {
        I = I || O;
        this.bKg = I.scrollNode;
        this.bIe = I.scrollList;
        this.bMd = I.vSlideWayNode;
        this.bNk = I.hSlideWayNode;
        this.bLI = I.vSlideBtn;
        this.bYp = I.hSlideBtn;
        this.cfj = I.minBtnLength || 10;
        this.bQb = I.scrollType;
        this.cyt = I.hasAnimateMove;
        if ( !! this.bKg) {
            this.crY = this.bKg.clientWidth || 0;
            this.cfg = this.bKg.clientHeight || 0
        }
        if ( !! this.bMd) {
            this.bMd.style.visibility = "hidden";
            this.bMd.style.display = "block";
            this.cfu = this.bMd.clientHeight || this.bKg.clientHeight || 0;
            this.bMd.style.height = this.cfu + "px";
            this.bMd.style.width = (this.bLI.clientWidth || 6) + "px"
        }
        if ( !! this.bNk) {
            this.bNk.style.visibility = "hidden";
            this.bNk.style.display = "block";
            this.cxH = this.bNk.clientWidth || this.bKg.clientWidth || 0;
            this.bNk.style.width = this.cxH + "px";
            this.bNk.style.height = (this.bYp.clientHeight || 6) + "px"
        }
        if ( !! this.bIe) {
            this.cxF = this.bIe.clientWidth || 0;
            this.crZ = this.bIe.clientHeight || 0;
            if ( !! this.bQb) {
                this.bIe.style.position = "absolute";
                this.bIe.style.minWidth = this.crY - this.bLI.clientWidth + "px";
                this.bIe.style.minHeight = this.cfg - this.bYp.clientHeight + "px"
            } else {
                this.bIe.style.minWidth = 0;
                this.bIe.style.minHeight = 0;
                this.bIe.style.position = "relative";
                this.bIe.style.width = "100%";
                this.bKg.style.paddingBottom = 0;
                this.bKg.style.paddingRight = 0
            }
        }
    };
    bLq.dyd = function() {
        if ( !! this.bMd) this.bMd.style.display = "none";
        if ( !! this.bNk) this.bNk.style.display = "none"
    };
    bLq.dye = function() {
        if ( !! this.bMd) this.bMd.style.display = "block";
        if ( !! this.bNk) this.bNk.style.display = "block"
    };
    bLq.dwa = function() {
        this.yQ(this.bLI, null);
        this.cjs(null, false);
        if (this.bQb == "v" || this.bQb == "vh") {
            if (this.cfg > 0 && this.crZ > 0 && this.crZ > this.cfg && this.cfu > 0) {
                this.bYx = Math.floor(this.cfg * this.cfu / this.crZ);
                if (this.bYx < this.cfj) this.bYx = this.cfj;
                this.bLI.style.height = this.bYx + "px";
                this.bMd.style.visibility = "";
                V.bHo(this.bLI.parentNode, "mousedown", this.dvZ.bHk(this));
                this.bIl = {
                    mintop: 0,
                    minleft: 0,
                    maxwidth: 0,
                    maxheight: this.cfu - this.bYx
                };
                this.cxv = new(P(N.ut).Er)(this.bLI, {
                    nobubble: true,
                    noselect: true,
                    ondrag: this.dvW.bHk(this),
                    onmove: this.dvV.bHk(this),
                    ondrop: this.dvU.bHk(this)
                })
            } else {
                this.bMd.style.visibility = "hidden";
                this.bMd.style.display = "none"
            }
        }
    };
    bLq.cjs = function(cfw, dvQ) {
        if (this.cyt && !!dvQ) {
            E.ba(this.bIe, cyO)
        } else {
            E.bf(this.bIe, cyO)
        }
        if ( !! cfw && !!cfw.top) {
            var cxh = this.crZ - this.cfg;
            if (cxh <= 0) cxh = 0;
            if ( !! cfw.maxheight && cfw.maxheight > 0) {
                var dn = cfw.top * cxh / cfw.maxheight;
                if (dn > 0) {
                    this.bIe.style.top = -dn + "px"
                } else {
                    this.bIe.style.top = 0
                }
            } else {
                this.bIe.style.top = 0
            }
        } else {
            this.bIe.style.top = 0
        }
    };
    bLq.cQe = function(bLJ) {
        if (this.bYx <= 0) return;
        bLJ = bLJ || {
            deltaTop: 0
        };
        if ((this.bQb == "v" || this.bQb == "vh") && !!bLJ.deltaTop && !!this.bIl) {
            this.bIl.top = (this.bIl.top || 0) + bLJ.deltaTop;
            var dvP = Math.floor(this.cfu / this.bYx - 1) * 10 + 1;
            var cxe = Math.floor((this.cfu - this.bYx) / dvP);
            if (cxe < 1) cxe = 1;
            var kT = this.Ap(this.bLI);
            var dn = (kT.top || 0) + bLJ.deltaTop * cxe;
            if (dn < this.bIl.mintop) {
                this.bIl.top = this.bIl.mintop
            } else if (dn > this.bIl.mintop + this.bIl.maxheight) {
                this.bIl.top = this.bIl.mintop + this.bIl.maxheight
            } else {
                this.bIl.top = dn
            }
            this.yQ(this.bLI, this.bIl);
            this.cjs(this.bIl, true)
        }
    };
    bLq.dwe = function() {
        var kT = {
            top: parseInt(this.bIe.style.top) || 0
        };
        return kT
    };
    bLq.dvW = function(sm, pD) {
        var wF = this.cxv.Zl();
        var dvO = E.jO(this.bLI);
        this.dvN = wF - dvO
    };
    bLq.dvV = function(sm, pD) {
        var wF = this.cxv.Zl(),
        dvM = E.jO(this.bLI.parentNode);
        var dn = wF - this.dvN - dvM;
        this.bIl.left = this.bIl.minleft;
        if (dn < this.bIl.mintop) {
            this.bIl.top = this.bIl.mintop
        } else if (dn > this.bIl.mintop + this.bIl.maxheight) {
            this.bIl.top = this.bIl.mintop + this.bIl.maxheight
        } else {
            this.bIl.top = dn
        }
        this.yQ(this.bLI, this.bIl);
        this.cjs(this.bIl)
    };
    bLq.dvU = function(sm, pD) {};
    bLq.dvZ = function(bHm) {
        var dn = V.vS(bHm) - E.jO(this.bLI.parentNode) - Math.floor(this.bYx / 2);
        if (dn < this.bIl.mintop) {
            this.bIl.top = this.bIl.mintop
        } else if (dn > this.bIl.mintop + this.bIl.maxheight) {
            this.bIl.top = this.bIl.mintop + this.bIl.maxheight
        } else {
            this.bIl.top = dn
        }
        this.yQ(this.bLI, this.bIl);
        this.cjs(this.bIl, true);
        this.cxv.jY(bHm)
    };
    bLq.dvL = function(dn) {
        dn = dn || 0;
        if (dn < this.bIl.mintop) {
            this.bIl.top = this.bIl.mintop
        } else if (dn > this.bIl.mintop + this.bIl.maxheight) {
            this.bIl.top = this.bIl.mintop + this.bIl.maxheight
        } else {
            this.bIl.top = dn
        }
        this.yQ(this.bLI, this.bIl);
        this.cjs(this.bIl, true)
    };
    bLq.dyf = function(Q) {
        Q = Q || 0;
        var dn = 0;
        var eB = (E.bj(this.bIe, "zitm") || []).length;
        if (eB < 0) return;
        if (Q >= 0) {
            dn = Q * this.bIl.maxheight / eB
        }
        this.dvL(dn)
    };
    bLq.dyg = function() {
        if (this.bQb == "h" || this.bQb == "vh") {
            if (this.crY > 0 && this.cxF > 0 && this.cxF > this.crY && this.cxH > 0) {
                this.cwD = Math.floor(this.crY * this.cxH / this.cxF);
                if (this.cwD < this.cfj) this.cwD = this.cfj;
                this.bYp.style.width = this.cwD + "px";
                this.bNk.style.visibility = ""
            } else {
                this.bNk.style.visibility = "hidden";
                this.bNk.style.display = "none"
            }
        }
    };
    bLq.yQ = function(X, bg, ya) {
        X = E.be(X);
        if (!X) return;
        bg = bg || {};
        var dn = bg.top || 0,
        cN = bg.left || 0,
        QZ = bg.mintop || 0,
        Rc = bg.minleft || 0;
        YR = bg.maxwidth || 0,
        YQ = bg.maxheight || 0;
        if ( !! ya) {
            var kT = this.Ap(X) || {};
            cN += kT.left || 0;
            dn += kT.top || 0
        }
        dn = Math.max(QZ, dn);
        if (YQ > 0) {
            dn = Math.min(dn, YQ + QZ)
        } else {
            dn = QZ
        }
        cN = Math.max(Rc, cN);
        if (YR > 0) {
            cN = Math.min(cN, YR + Rc)
        } else {
            cN = Rc
        }
        X.style.top = (dn || 0) + "px";
        X.style.left = (cN || 0) + "px"
    };
    bLq.Ap = function(X) {
        X = E.be(X);
        if (!X) return;
        return {
            left: parseInt(E.oS(X, "left")) || 0,
            top: parseInt(E.oS(X, "top")) || 0
        }
    };
    bLq.cK = function() {
        delete this
    };
    bLq.cHR = function(cjd, fe) {
        var dn = Math.floor(this.bIl.maxheight * cjd / (fe - 10));
        this.bLI.style.top = dn + "px";
        this.bIl.top = dn
    }
})(); (function() {
    var p = P(N.ui),
    lI,
    bHu = "ui-" + U.cA();
    var hb = [],
    Sg = "js-zslt-123",
    YI = "js-zslt-124",
    hC = "w-sbtn-2";
    p.fx("#<uispace> .zitm{font-size:16px;height:25px;line-height:25px;}", bHu);
    p.AZ = C();
    lI = p.AZ.bi(p.vW, true);
    lI.bz = function(I) {
        I = I || O;
        this.yE = Math.min(I.total, Math.max(I.number || 10, 3));
        p.AZ.bw.bz.call(this, I)
    };
    lI.cU = function() {
        return "m-page " + bHu
    };
    lI.cM = function() {
        var gd = N.tm.fc00 || "";
        return '<a class="w-sbtn" href="#"><span class="w-ial">上 一 页</span></a><div class="num"><span>2 / 10</span><span class="arrow">&nbsp;</span></div><a class="w-sbtn" href="#"><span class="w-iar r">下 一 页</span></a>'
    };
    lI.cc = function() {
        this.Y.onselectstart = F;
        E.ba(this.Y, "noselect");
        var bHl = E.dE(this.Y);
        this.rf = bHl[0];
        this.bXI = bHl[2];
        this.bKB = bHl[1];
        bHl = E.dE(this.bKB);
        this.Sb = bHl[0];
        this.bOt = bHl[1];
        V.bHo(this.bKB, "mouseover", this.bFI.bHk(this));
        V.bHo(this.bKB, "mouseout", this.bzn.bHk(this));
        V.bHo(this.rf, "click", this.Rf.bHk(this, 1));
        V.bHo(this.bXI, "click", this.Rf.bHk(this, 2))
    };
    lI.Sh = function() {
        var yF = p.AZ.bw.Sh.call(this);
        yF.number = this.yE;
        return yF
    };
    lI.bFI = function(bHm) {
        V.bb(bHm);
        if (!this.eZ) return;
        if (!this.bIe) {
            this.bFM();
            E.ba(this.bOt, "arrowup");
            this.bMR.pp = this.bC;
            this.bIe = P("loft.w").bRS.bG(this.bKB, this.bMR)
        } else {
            if ( !! this.bIS) {
                this.bIS = window.clearTimeout(this.bIS)
            }
            if (!this.bIe.bUw()) {
                E.ba(this.bOt, "arrowup");
                this.bMR.pp = this.bC;
                this.bIe.bz(this.bMR)
            }
        }
    };
    lI.bzn = function() {
        if ( !! this.bIS) return;
        this.bIS = window.setTimeout(function() {
            this.bIe.Hl();
            this.bIS = null
        }.bHk(this), 400)
    };
    lI.Rf = function(fW, bHm) {
        V.bb(bHm);
        switch (fW) {
        case 0:
            if (E.cr(this.bFJ, hC)) return;
            this.nx(1, this.eZ);
            return;
        case 1:
            if (E.cr(this.rf, hC)) return;
            this.nx(this.bC - 1, this.eZ);
            return;
        case 2:
            if (E.cr(this.bXI, hC)) return;
            this.nx(this.bC + 1, this.eZ);
            return;
        case 3:
            if (E.cr(this.bFL, hC)) return;
            this.nx(this.eZ, this.eZ);
            return;
        case 4:
            var dvJ = bHm;
            this.nx(dvJ, this.eZ);
            return
        }
    };
    lI.bFM = function() {
        var i = 0;
        cf = [];
        for (; i < this.eZ; i++) {
            cf.push({
                v: i + 1
            })
        }
        var bTo = 250;
        if (this.eZ <= 10) {
            bTo = this.eZ * 25
        }
        var bWg = this.bKB.clientWidth || 48;
        this.bMR = {
            notShowTitle: true,
            triggerNode: this.bKB,
            upScrollBarStyleBottom: 30,
            scrollAreaWidth: bWg,
            scrollAreaHeight: bTo,
            scrollType: this.eZ <= 10 ? "": "v",
            minBtnLength: 20,
            hasAnimateMove: true,
            "class": "scrollbar0",
            items: cf,
            onchange: this.bWd.bHk(this),
            onlisthide: this.bWc.bHk(this)
        }
    };
    lI.bWd = function(bg, Q) {
        this.Rf(4, bg)
    };
    lI.bWc = function() {
        E.bf(this.bOt, "arrowup")
    };
    lI.Sc = function() {
        var bHl = this.bC == 1;
        bHl ? E.ba(this.rf, hC) : E.bf(this.rf, hC);
        bHl = this.bC == this.eZ;
        bHl ? E.ba(this.bXI, hC) : E.bf(this.bXI, hC)
    };
    lI.bFN = function() {
        var bn = this.YS.getElementsByTagName("a");
        if (!bn || !bn.length) return;
        for (var i = 0,
        l = bn.length,
        gA, lo = Math.min(this.eZ - this.yE + 1, Math.max(1, this.bC - Math.floor(this.yE / 2))); i < l; i++) {
            gA = lo + i;
            bn[i].index = gA;
            bn[i].innerText = gA;
            gA == this.bC ? E.ba(bn[i], YI) : E.bf(bn[i], YI)
        }
    };
    lI.wO = function(Q, eB) {
        window.scrollTo(0, 0);
        if (this.bC == Q && this.eZ == eB) return false;
        p.AZ.bw.wO.call(this, Q, eB);
        this.Sb.innerText = this.bC + " / " + this.eZ + " ";
        this.Sc();
        return true
    }
})(); (function() {
    var p = P(N.ui),
    hA,
    bHu = "ui-" + U.cA();
    p.fx("#<uispace> .zcvr,#<uispace> .zhnt{display:none;position:fixed;_position:absolute;z-index:80;}#<uispace> .zcvr{top:0;left:0;width:100%;height:100%;background:url(" + N.rc.r + "empty.png);}#<uispace> .zhnt{display:block;top:0px;color:#000;z-index:12000;}", bHu);
    p.Cd = C();
    hA = p.Cd.bi(p.ga, true);
    hA.SF = function(eV, vp, by) {
        this.nu();
        this.Cc(eV, vp, by)
    };
    hA.Cc = function(eV, vp, by) {
        var qx = this.ep.clientHeight,
        dp = document.documentElement || document.body,
        FW = document.body || document.documentElement,
        dn = 0;
        this.JA.innerText = eV || " ";
        if (by == "err") {
            this.JA.className = "tmsgc err"
        } else if (by == "load") {
            this.JA.className = "tmsgc load"
        } else {
            this.JA.className = "tmsgc ok"
        }
        if (B.dh) {
            dn = dp.scrollTop || FW.scrollTop
        }
        if ( !! vp) {
            dn += Math.max(0, dp.clientHeight - qx) / 2
        }
        this.Rb.style.top = dn + "px";
        E.ba(this.Rb, "a-slide-do");
        this.ep.style.marginTop = !!vp ? "6px": "0px"
    };
    hA.gI = function(bUm) {
        if (!bUm) this.hG();
        this.JQ()
    };
    hA.JQ = function() {
        this.ep.style.marginTop = -this.ep.scrollHeight + "px";
        E.bf(this.Rb, "a-slide-do")
    };
    hA.nu = function(bB) {
        if (U.co(bB, "number") && bB >= 0) {
            if (bB > 100) bB = 100;
            this.fG.style.backgroundColor = "black";
            this.fG.style.opacity = bB / 100;
            this.fG.style.filter = "alpha(opacity=" + bB + ")"
        } else {
            this.fG.style.backgroundColor = "";
            this.fG.style.opacity = "";
            this.fG.style.filter = ""
        }
        if (B.dh) {
            var gl = document.documentElement || document.body;
            this.fG.style.width = gl.scrollWidth + "px";
            this.fG.style.height = gl.scrollHeight + "px"
        }
        this.fG.style.display = "block"
    };
    hA.hG = function() {
        this.fG.style.display = "none"
    };
    hA.cU = function() {
        return bHu
    };
    hA.cM = function() {
        return '<div class="zcvr wtag">&nbsp;</div><div class="zhnt m-tmsg a-slide a-slide-tmsg"><div class="slide" style="margin-top:-42px;"><div class="tmsg"><span class="tmsgc ok wtag"></span></div></div></div>'
    };
    hA.cc = function() {
        var bHl = E.bj(this.Y, "wtag");
        this.fG = bHl[0];
        this.JA = bHl[1];
        this.ep = bHl[1].parentNode.parentNode;
        this.Rb = this.ep.parentNode
    };
    var cv, eb, Ca = 0;
    var jM = function() {
        if (!eb) eb = p.Cd.bG(document.body, {
            "class": "uiutil"
        });
        return eb
    };
    var SE = function(bUm) {
        cv = window.clearTimeout(cv);
        E.gI(bUm)
    };
    E.bY = function(eV, pB, SD, vp, bUm, by) {
        if ( !! pB && (bUm === null || bUm === undefined)) {
            bUm = true
        }
        if ( !! SD) {
            cv = window.clearTimeout(cv);
            Ca = 0
        } else if ( !! cv) {
            Ca++
        } else {
            cv = window.setTimeout(SE.bHk(E, bUm), 3e3)
        }
        var hk = jM();
        by = by || "ok"; ! pB ? hk.SF(eV, vp, by) : hk.Cc(eV, vp, by)
    };
    E.bd = function() {
        var de = Array.prototype.slice.call(arguments, 0);
        while (de.length < 5) {
            de.push(null)
        }
        de.push("err");
        E.bY(de[0], de[1], de[2], de[3], de[4], de[5])
    };
    E.ef = function() {
        var de = Array.prototype.slice.call(arguments, 0);
        while (de.length < 5) {
            de.push(null)
        }
        de.push("load");
        E.bY(de[0], de[1], de[2], de[3], de[4], de[5])
    };
    E.nu = function(bB) {
        jM().nu(bB)
    };
    E.gI = function(bUm) {
        if ( !! cv) return;
        jM().gI(bUm)
    };
    E.JQ = function() {
        if ( !! cv) return;
        jM().JQ()
    };
    E.hG = function() {
        jM().hG()
    }
})(); (function() {
    var p = P("loft.w"),
    kg,
    lz,
    ye;
    var JV = '<div class="m-layer"><div class="layert"><h3 class="zflg">删除投稿</h3><a class="w-close2 zflg" href="#">关闭</a></div><div class="zflg"></div></div>';
    var cc = function() {
        var bHl = E.bj(this.Y, "zflg");
        this.yh = bHl[0];
        this.fP = bHl[1];
        this.nJ = bHl[2];
        E.DX(bHl[1].parentNode);
        E.DX(bHl[1].parentNode);
        V.bHo(this.fP, "click", this.rR.bHk(this));
        P(N.ui).fx("#<uispace>{border:none;}", this.cU())
    };
    p.nr = C();
    kg = p.nr.bi(P(N.ui).nr, true);
    kg.cM = function() {
        return JV
    };
    kg.cc = function() {
        cc.call(this)
    };
    kg.cU = function() {
        return "a-scale a-scale-layer"
    };
    kg.bE = function() {
        p.nr.bw.bE.call(this, arguments);
        E.ba(this.Y, "a-scale-do")
    };
    kg.rR = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        E.bf(this.Y, "a-scale-do");
        window.setTimeout(p.nr.bw.rR.bHk(this), 300)
    };
    p.mG = C();
    lz = p.mG.bi(P(N.ui).mG, true);
    lz.cM = function() {
        return JV
    };
    lz.cc = function() {
        cc.call(this);
        E.ba(this.yh.parentNode, "zmov")
    };
    lz.cU = function() {
        return "a-scale a-scale-layer"
    };
    lz.bE = function() {
        p.mG.bw.bE.call(this, arguments);
        E.ba(this.Y, "a-scale-do")
    };
    lz.rR = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        E.bf(this.Y, "a-scale-do");
        window.setTimeout(p.mG.bw.rR.bHk(this), 300)
    };
    p.fr = C();
    ye = p.fr.bi(P(N.ui).yc, true);
    ye.rU = function(I) {
        this.eX = I || {};
        p.fr.bw.rU.call(this, this.eX);
        if (!this.eX.nocover) {
            this.eX.onclose = E.hG;
            this.eX.onbeforeshow = E.nu.bHk(null, 25)
        }
        if ( !! this.eX.wclass) {
            return this.eX.wclass.bG(null, this.eX)
        }
        return ! this.eX.nomove ? p.mG.bG(null, this.eX) : p.nr.bG(null, this.eX)
    };
    ye.cwl = function(ca) {
        if ( !! this.ei && !!this.ei.fP) {
            V.bJv(this.ei.fP, "click");
            V.bHo(this.ei.fP, "click", this.dvG.bHk(this, ca))
        }
    };
    ye.dvG = function(ca, bHm) {
        V.bb(bHm);
        if ( !! this.ei && !!this.ei.fP) {
            if ( !! ca) ca();
            this.ei.rR()
        }
    };
    ye.bz = function(I) {
        if (!I.nocover) {
            I.onclose = E.hG;
            I.onbeforeshow = E.nu.bHk(null, 25)
        }
        I.content = this.Y;
        this.ei.bz(I);
        p.fr.bw.bz.call(this, I)
    }
})(); (function() {
    var p = P("loft.w"),
    JY;
    var dvF = function(cp) {
        if (!cp) return true;
        for (var iq in cp) {
            return false
        }
        return true
    };
    p.cV = C();
    JY = p.cV.bi(P(N.ut).gY);
    JY.bq = function() {
        this.bHr();
        var bk = E.bj(document, "fa-init");
        this.bzh(bk && bk[0] || null);
        this.bHp = this.bzd || {};
        this.Y = E.be(this.bHp.mid)
    };
    JY.bzh = function(bk) {
        var dc, mw;
        if ( !! bk) {
            var bHl = bk.getElementsByTagName("textarea") || [];
            for (var i = bHl.length - 1,
            by, bo; i >= 0; i--) {
                bo = bHl[i];
                by = U.bA(bo.name.toLowerCase());
                if (by == "js") {
                    mw = bo.value || "";
                    continue
                }
                if (by == "html") {
                    dc = bo.value || "";
                    continue
                }
                if (!bo.id) continue;
                if (by == "jst") {
                    E.ft(bo);
                    continue
                }
                if (by == "txt") {
                    fa.x.ce(bo.id, bo.value || "");
                    continue
                }
                if (by == "ntp") {
                    E.gD(bo.value || "", bo.id);
                    continue
                }
            }
            E.hE(bk)
        }
        this.Aw(mw);
        if ( !! dc) this.jc(dc)
    };
    JY.Aw = function(kO) {
        kO = U.bA(kO || "");
        if (!kO) return;
        try { (new Function(kO)).call(this);
            this.bzd = this.p || "index"
        } catch(e) {
            try {
                var kO = kO.replace(/\u2028/g, ""); (new Function(kO)).call(this);
                this.bzd = this.p || "index"
            } catch(e2) {
                alert(e2)
            }
        }
        if (!P("loft.c").bOj || dvF(P("loft.c").bOj)) {
            P("loft.c").bOj = this.bzd || {}
        }
    }
})(); (function() {
    var p = P("loft.w"),
    hN;
    p.jt = C();
    hN = p.jt.bi(P(N.fw).jt);
    hN.bY = function(tj) {
        E.dt(this.ceE, "lhint", "w-load2");
        this.ceE.innerHTML = '<div class="load">加载中</div>';
        this.cP.icase.innerHTML = "";
        this.cP.icase.appendChild(this.ceE)
    }
})(); (function() {
    var p = P("loft.w.suggest"),
    bHI,
    Ip,
    eR;
    p.Ce = C();
    bHI = p.Ce.bi(P(N.ui).gB, true);
    bHI.cM = function() {
        return '<div class="ssch"><form class="xtag"><button type="submit">&nbsp;</button><input type="text" style="padding:0;" class="xtag" placeholder="搜索标签、人、我的文章" maxlength="40"></form></div><div class="suggest"><div class="xtag sugbox"></div></div>'
    };
    bHI.cU = function() {
        return "m-ssch2"
    };
    bHI.bz = function(I) {
        I.option = p.MO;
        p.Ce.bw.bz.call(this, I)
    };
    bHI.xW = function(bn, Q) {
        if (!bn || !bn.length) {
            if (this.kb) {
                this.bIF.style.display = "none"
            }
            return
        }
        this.cT = this.SJ.bG(bn, this.fS, this.cP);
        if ( !! this.cT[Q]) {
            this.bC = Q;
            this.rg = 0;
            this.cT[this.bC].gg(true)
        }
        this.fS.style.visibility = "visible";
        if (!this.kb) {
            this.UQ()
        }
        E.ba(this.fS, "sugbox-act")
    };
    bHI.cc = function() {
        var bHl = E.bj(this.Y, "xtag");
        this.ek = bHl[0];
        this.bU = bHl[1];
        this.fS = bHl[2];
        V.bHo(this.bU, "click", V.bb.bHk(V));
        V.bHo(document, "click", this.he.bHk(this, true));
        V.bHo(this.bU, "input", this.hu.bHk(this));
        V.bHo(this.bU, "focus", this.dX.bHk(this, true));
        V.bHo(this.bU, "blur", this.dX.bHk(this, false));
        V.bHo(this.ek, "submit", this.fd.bHk(this));
        V.bHo(document, "keydown", this.mW.bHk(this));
        if (loft.c.cm.userId <= 0) {
            this.bU.setAttribute("placeholder", "搜索标签")
        }
        if (!B.HC) this.bU.value = this.bU.getAttribute("placeholder")
    };
    bHI.dX = function(en, bHm) {
        var lb = this.bU.getAttribute("placeholder");
        if ( !! en) {
            E.ba(this.Y, "m-ssch-act");
            this.hu()
        } else {
            E.bf(this.Y, "m-ssch-act")
        }
        if (!B.HC) {
            window.setTimeout(function() {
                if ( !! en && this.bU.value == lb) this.bU.value = "";
                if (!en && this.bU.value == "") this.bU.value = lb
            }.bHk(this), 50)
        }
    };
    bHI.fd = function(bHm) {
        V.bb(bHm);
        this.he();
        this.bh("onenter")
    };
    bHI.hu = function() {
        var bg = U.bA(this.bU.value);
        var lb = this.bU.getAttribute("placeholder");
        if (bg === lb) return;
        this.he(!bg);
        if (!bg) return;
        this.bh("onchange", bg)
    };
    bHI.bgH = function(Q, pN) {
        this.rg = this.rg || -1;
        var bo = this.cT[this.bC];
        if ( !! bo) bo.gg(false, this.rg);
        this.bC = Q;
        this.rg = pN
    };
    bHI.pz = function(fW) {
        var bo = this.cT[this.bC];
        if ( !! bo) bo.gg(false, this.rg);
        var pN = this.rg + fW;
        if ( !! bo && pN >= 0 && pN < bo.re.length) {
            this.rg = pN;
            bo.gg(true, pN)
        } else {
            this.bC = (this.bC + fW) % this.cT.length;
            if (this.bC < 0) this.bC = this.cT.length - 1;
            var bo = this.cT[this.bC];
            this.rg = bo.re.length > 1 && fW < 0 ? bo.re.length - 1 : 0;
            if ( !! bo) bo.gg(true, this.rg)
        }
    };
    bHI.SK = function(bg, yk) {
        if ( !! yk) bg.href = yk;
        else {
            var bo = this.cT[Math.max(0, Math.min(this.bC, this.cT.length - 1))];
            var hf = bo.re[this.rg || 0];
            bg.href = hf.href
        }
        this.he();
        this.bh("onselect", bg)
    };
    bHI.he = function(MN) {
        E.bf(this.fS, "sugbox-act");
        if ( !! MN) {
            window.setTimeout(p.Ce.bw.he.bHk(this), 300)
        } else {
            p.Ce.bw.he.call(this)
        }
    };
    p.MO = C();
    eR = p.MO.bi(P(N.ui).hF, true);
    var eO = E.gD('<div class="sugitm"><a href="#" class="sugitma stag"><span class="sugin stag">搜“<strong>关键关键字关键字关键字关键字字</strong>”标签</span></a></div>');
    eR.bq = function() {
        this.bHr();
        this.Y = E.mF(eO);
        var bHl = E.bj(this.Y, "stag");
        this.Bx = bHl[0];
        this.dg = bHl[1];
        V.bHo(this.Y, "click", this.rF.bHk(this));
        V.bHo(this.Y, "mouseout", this.Cr.bHk(this));
        V.bHo(this.Y, "mouseover", this.Cq.bHk(this))
    };
    eR.bHC = function(I) {
        I = I || O;
        this.re = [this.Bx];
        this.gg(false);
        this.bC = I.VP;
        this.bHo("onclick", I.onclick || F);
        this.bHo("onmouseover", I.onmouseover || F)
    };
    eR.gg = function(hU, pN) {
        pN = pN || 0;
        var hf = this.re[pN];
        if (!hf) return;
        hU ? E.ba(hf, "js-select") : E.bf(hf, "js-select")
    };
    eR.ce = function(bg) {
        this.fg = bg;
        this.dg.innerHTML = bg.html || "";
        if (bg.type == 0) {
            this.Bx.className = "sugitma stag sctag";
            E.bf(this.Bx.parentNode, "sugitm-blog")
        }
        if (bg.type == 1) {
            this.Bx.className = "sugitma stag scblog";
            E.ba(this.Bx.parentNode, "sugitm-blog")
        }
        if ( !! bg.subItems && !!bg.subItems.length) {
            this.IC = p.ID.bG(bg.subItems, this.Y, {
                search: bg.value
            });
            for (var i = 0,
            l = this.IC.length; i < l; i++) {
                this.re.push(this.IC[i].Y)
            }
        }
    };
    eR.cK = function() {
        E.bf(this.Bx.parentNode, "sugitm-blog");
        this.IC = p.ID.db(this.IC);
        var l = this.re.length,
        i = 0;
        for (; i < l; i++) {
            this.gg(false, i)
        }
        p.MO.bw.cK.apply(this, arguments)
    };
    eR.cF = function() {
        return this.fg
    };
    eR.rF = function(bHm) {
        V.bb(bHm);
        var eF = V.be(bHm,
        function(X) {
            return X.tagName == "A"
        });
        this.bh("onclick", this.fg, !!eF ? eF.href: "")
    };
    eR.Cq = function(bHm) {
        var eF = V.be(bHm,
        function(X) {
            return X.tagName == "A"
        });
        if (!eF) return;
        var IE = U.fO(this.re, eF);
        this.gg(true, IE);
        this.bh("onmouseover", this.bC, IE)
    };
    eR.Cr = function(bHm) {
        var eF = V.be(bHm,
        function(X) {
            return X.tagName == "A"
        });
        if (!eF) return;
        var IE = U.fO(this.re, eF);
        this.gg(false, IE)
    };
    p.ID = C();
    Ip = p.ID.bi(P(N.ut).fc, true);
    var Di = E.gD('<a href="#" class="sugitma"><span class="w-img2 w-img2-2"><img class="utag" src="http://l.bst.126.net/rsc/img/ava/30.png"></span><span class="sugin f-thide itag utag">搜“<strong>关键字</strong>”标标签标签标签标签标签签</span><span class="desc f-thide itag utag"></span></a>');
    Ip.bq = function() {
        this.bHr(Di);
        var bHl = E.bj(this.Y, "utag");
        this.IF = bHl[0];
        this.fz = bHl[1];
        this.bVQ = bHl[2]
    };
    Ip.ce = function(bHn) {
        if ( !! bHn.star && !!bHn.star.desc) {
            this.bVQ.innerText = bHn.star.desc;
            E.ba(this.Y, "js-hasdesc")
        } else {
            E.bf(this.Y, "js-hasdesc")
        }
        p.ID.bw.ce.call(this, bHn);
        var dvD = U.ew(this.hm.replace(/([\\*|\\+|\\?|\\[])/ig, "\\$1")),
        bPV = new RegExp("(" + dvD + ")", "ig");
        if (U.co(bHn, "string")) {
            this.IF.parentNode.style.display = "none";
            this.Y.href = "http://www.lofter.com/tag/" + encodeURIComponent(bHn);
            this.Y.title = bHn;
            bHn = U.ew(bHn).replace(bPV, "<strong>$1</strong>");
            this.fz.innerHTML = bHn
        } else {
            this.IF.parentNode.style.display = "block";
            this.IF.src = loft.x.eK(bHn.bigAvaImg, 30);
            this.Y.href = loft.x.bM(bHn.blogName);
            this.Y.title = bHn.blogNickName;
            var gR = bHn.blogNickName,
            iV = gR.split(this.hm);
            gR = U.ew(gR).replace(bPV, "<strong>$1</strong>");
            this.fz.innerHTML = gR
        }
    };
    Ip.bHC = function(yF) {
        this.hm = yF.search
    }
})(); (function() {
    var p = P("loft.w.suggestnew"),
    MM,
    qX,
    bHI,
    ML = "skey_";
    p.wb = C();
    qX = p.wb.bi(P(N.ut).gY);
    qX.bq = function(bl, I) {
        I = I || {};
        this.brp = I.targetBlogName || loft.c.cm.blogName || "";
        this.bro = new p.VU({
            onsearchsucc: this.brn.bHk(this)
        });
        this.eH = p.Ce.bG(bl, {
            onselect: this.qu.bHk(this),
            onchange: this.hu.bHk(this),
            onenter: this.SI.bHk(this)
        })
    };
    qX.SI = function() {
        if (loft.c.cm.userId > 0) return;
        var bg = this.eH.cF();//alert('test1');
        //location.href = location.hosturl + "/tag/" + encodeURIComponent(bg) + "?from=tagsearch";
        location.href = "/user/search?key=" + encodeURIComponent(bg);
    };
    qX.hu = function(bg) {
        if (loft.c.cm.userId <= 0) return;
        this.eH.xW(this.VY(bg), 0);
        window.setTimeout(function() {
            this.bro.brm(bg, 3)
        }.bHk(this), 100)
    };
    qX.VY = function(bx, brl, ck) {
        var bn = [];
        bn.push({
            html: "进入 <strong>" + this.MK(bx, 13) + "</strong> 标签 ＞",
            value: bx,
            type: 0,
            subItems: ck || []
        });
        bn.push({
            html: "<strong>" + this.MK(bx, 11) + "</strong> 相关的人 ＞",
            value: bx,
            type: 1,
            subItems: brl || []
        });
        return bn
    };
    qX.MK = function(bx, Wi) {
        var fe = loft.x.ty(bx);
        if (fe > Wi) {
            var gd, i = 0;
            while (++i) {
                if (i >= bx.length) break;
                gd = bx.substring(0, i);
                if (loft.x.ty(gd) >= Wi) {
                    bx = gd + "...";
                    break
                }
            }
        }
        return U.ew(bx)
    };
    qX.brn = function(bx, bn) {
        var bg = U.bA(this.eH.cF());
        if ( !! bn && ( !! bn.blogInfos.length || !!bn.tags.length) && bx == bg) {
            var bu = [],
            i = 0,
            l = bn.blogInfos.length;
            for (; i < l; i++) {
                if ( !! bn.blogInfos[i].blogId) bu.push(bn.blogInfos[i])
            }
            this.eH.he();
            this.eH.xW(this.VY(bx, bu, bn.tags), 0)
        }
    };
    qX.qu = function(bg) {
        switch (bg.type) {
        case 0:
            if (/#$/.test(bg.href) == false) {
                location.href = bg.href + "?from=tagsearch&queryString=" + encodeURIComponent(bg.value)
            } else {//alert('test2');
                //location.href = location.hosturl + "/tag/" + encodeURIComponent(bg.value) + "?from=tagsearch"
                location.href = "/user/search?key=" + encodeURIComponent(bg.value);
            }
            break;
        case 1:
            if (/#$/.test(bg.href) == false) {
                window.open(bg.href)
            } else {
                location.href = location.hosturl + "/follow/" + encodeURIComponent(bg.value)
            }
            break;
        case 2:
            location.href = location.hosturl + "/blog/" + this.brp + "/tag/" + bg.value;
            break
        }
    };
    qX.bE = F;
    p.VU = C();
    MM = p.VU.bi(P(N.ut).hx);
    MM.brm = function(bx, dx) {
        if (bx == "" || bx == undefined) return;
        var bS = this.et(ML + bx);
        if ( !! bS) {
            this.bh("onsearchsucc", bx, bS == "empty" ? null: bS);
            return
        }
        J.br(location.dwr, "UserBean", "searchBlogAndTagForSuggest", bx, dx, this.hm.bHk(this, bx))
    };
    MM.hm = function(bx, bS) {
        if ( !! bS) {
            this.gp(ML + bx, bS)
        } else {
            this.gp(ML + bx, "empty")
        }
        this.bh("onsearchsucc", bx, bS)
    };
    p.Ce = C();
    bHI = p.Ce.bi(P("loft.w.suggest").Ce, true);
    bHI.cU = function() {
        return "m-ssch2"
    };
    bHI.cM = function() {
        return ""
    };
    bHI.cc = function() {
        this.Y = E.be("schtagbox");
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.ek = bHl[i++];
        this.brC = bHl[i++];
        this.bgR = bHl[i++];
        this.bU = bHl[i++];
        this.cae = bHl[i++];
        this.fS = bHl[i++];
        this.cJm = E.be("newguide-1");
        this.bLd = false;
        this.bRE = E.be("taglist");
        V.bHo(this.brC, "click", this.cvC.bHk(this));
        V.bHo(this.bU, "click", V.bb.bHk(V));
        V.bHo(document, "click", this.he.bHk(this, true));
        V.bHo(this.bgR, "click",
        function() {
            this.bU.focus()
        }.bHk(this));
        V.bHo(this.bU, "input", this.hu.bHk(this));
        if (B.da && B.Ud >= "9.0" && B.Ud <= "9.9") {
            V.bHo(this.bU, "keyup",
            function(bHm) {
                var bK = bHm && (bHm.which || bHm.keyCode);
                if (bK == 8 || bK == 46) {
                    this.hu()
                }
            }.bHk(this))
        }
        V.bHo(this.bU, "focus", this.dX.bHk(this, true));
        V.bHo(this.bU, "blur", this.dX.bHk(this, false));
        V.bHo(this.ek, "submit", this.fd.bHk(this));
        V.bHo(document, "keydown", this.mW.bHk(this));
        if ( !! B.dh) V.bHo(document, "keypress", this.cjY.bHk(this));
        if (loft.c.cm.userId <= 0) {
            this.bU.setAttribute("placeholder", "搜索标签")
        }
        if (!B.HC) {
            this.bgR.style.display = ""
        }
        p.hideschlist = this.he.bHk(this, true);
        this.bRE.style.marginTop = "-" + this.bRE.offsetHeight + "px";
        if ( !! this.bU.isfocus) this.dX(true)
    };
    // 点击搜索按钮时调用
    bHI.cvC = function(bHm) {
        V.bb(bHm);
        var lb = this.bU.getAttribute("placeholder") || "搜索标签、人";
        if (!this.bU.value) //搜索框input内没有填值的话，则直接退出
            return;//alert("test3");
        //location.href = location.hosturl + "/tag/" + encodeURIComponent(this.bU.value) + "?from=tagsearch";alert(location.hosturl); // 页面跳转
        location.href = "/user/search?key=" + encodeURIComponent(this.bU.value);
    };
    bHI.dX = function(en, bHm) {
        var lb = this.bU.getAttribute("placeholder") || "搜索标签、人";
        if ( !! en) {
            if (!this.bLd) {
                J.br(location.dwr, "LoggerBean", "printStatLog", "homeClick_20130514_02", F)
            }
            if ( !! loft.w.hidemorelist) loft.w.hidemorelist();
            if ( !! loft.w.bm.hidebloglist) loft.w.bm.hidebloglist();
            E.ba(this.cae, "f-op0");
            this.bLd = true;
            this.csQ();
            E.ba(this.Y, "m-ssch-act");
            this.hu()
        } else {
            E.bf(this.cae, "f-op0");
            this.bLd = false;
            E.bf(this.Y, "m-ssch-act");
            this.cfK = false
        }
        if (!B.HC) {
            if (this.bU.value == "") {
                this.bgR.style.display = ""
            } else {
                this.bgR.style.display = "none"
            }
        }
    };
    var Oq = [38, 40, 13, 27, 83];
    bHI.mW = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode),
        Q = U.fO(Oq, rB);
        if (Q == -1) return;
        var X = V.be(bHm);
        switch (Q) {
        case 0:
            if ( !! this.bLd) this.csS( - 1, bHm);
            break;
        case 1:
            if ( !! this.bLd) this.csS(1, bHm);
            break;
        case 2:
            if ( !! this.bLd) this.SI(0, bHm);
            break;
        case 3:
            if ( !! this.bLd) {
                this.bU.blur();
                if ( !! this.bQv[this.bJq]) E.bf(this.bQv[this.bJq], "seli-hover");
                this.he(true);
                this.csT(true)
            }
            break;
        case 4:
            if (X.tagName == "INPUT" || X.tagName == "TEXTAREA" || !!E.cr(X, "noshortkey")) return;
            this.dvC(bHm);
            break
        }
    };
    bHI.dvC = function(bHm) {
        V.bb(bHm);
        if ( !! this.cJm && this.cJm.style.display == "") {
            window.loft.g.g5(1, bHm)
        }
        this.bU.focus()
    };
    bHI.cjY = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode);
        if (rB == 13 && !!this.bLd) {
            if ( !! this.cfK) {
                this.csS(0, bHm)
            } else {
                if ( !! this.bVK[this.bPS]) {
                    this.bVK[this.bPS].click()
                } else {
                    this.cvC(bHm)
                }
            }
        }
        if (rB == 27 && !!this.bLd) {
            this.bU.blur();
            if ( !! this.bQv[this.bJq]) E.bf(this.bQv[this.bJq], "seli-hover");
            this.he(true);
            this.csT(true)
        }
    };
    bHI.SI = function(gC, bHm) {
        if ( !! this.cfK) {
            this.csS(0, bHm)
        } else {
            if ( !! this.bVK[this.bPS]) {
                var CL = this.bVK[this.bPS];
                try {
                    CL.click();
                    return true
                } catch(e) {
                    var evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true);
                    CL.dispatchEvent(evt);
                    return false
                }
            } else {
                this.cvC(bHm)
            }
        }
    };
    bHI.csS = function(gC, bHm) {
        if (this.bQv.length == 0) return;
        if (gC == 0) {
            V.bb(bHm);
            if ( !! this.bQv[this.bJq]) location.href = this.bQv[this.bJq].children[0].href
        } else {
            if ( !! this.cfK && !this.bU.value) {
                if ( !! this.bQv[this.bJq]) E.bf(this.bQv[this.bJq], "seli-hover");
                this.bJq = this.bJq + gC <= -1 ? this.bQv.length - 1 : this.bJq + gC >= this.bQv.length ? 0 : this.bJq + gC;
                if ( !! this.bQv[this.bJq]) E.ba(this.bQv[this.bJq], "seli-hover")
            } else {
                if (!E.cr(this.bVK[this.bPS], "js-select")) this.bPS = -1;
                if (this.bPS > -1) E.bf(this.bVK[this.bPS], "js-select");
                this.bPS = this.bPS + gC <= -1 ? this.bVK.length - 1 : this.bPS + gC >= this.bVK.length ? 0 : this.bPS + gC;
                if (this.bPS > -1) E.ba(this.bVK[this.bPS], "js-select")
            }
        }
    };
    bHI.he = function(MN) {
        E.bf(this.fS, "sugbox-act");
        if ( !! MN) {
            this.csT();
            window.setTimeout(p.Ce.bw.he.bHk(this), 300)
        } else {
            p.Ce.bw.he.call(this)
        }
    };
    bHI.hu = function(fW) {
        var bg = U.bA(this.bU.value);
        var lb = this.bU.getAttribute("placeholder") || "搜索标签、人";
        if ((!bg || bg === lb) && this.fS.children.length > 0) {
            this.he(true);
            if (B.da && B.Ud <= "9.9") {
                if (this.qJ) this.qJ = window.clearTimeout(this.qJ);
                this.fS.style.visibility = "hidden"
            }
            window.setTimeout(function() {
                E.bf(this.fS, "sugbox-act");
                if ( !! this.bLd) {
                    this.csQ()
                }
                if (B.da && B.Ud <= "9.9") {
                    this.qJ = window.setTimeout(function() {
                        this.fS.style.visibility = ""
                    }.bHk(this), 500)
                }
            }.bHk(this), "150");
            return
        }
        if (!B.HC && !bg) {
            this.bgR.style.display = "";
            if ( !! this.bLd) this.csQ();
            return
        }
        this.he(!bg);
        if (!bg) {
            if ( !! this.bLd) this.csQ();
            return
        }
        if (!B.HC) {
            this.bgR.style.display = "none"
        }
        this.csT(true);
        this.bh("onchange", bg)
    };
    bHI.csQ = function(gu, bHm) {
        E.ba(this.bRE.parentNode, "a-w-sel-do");
        this.bRE.style.marginTop = "0";
        this.cfK = true;
        this.bJq = -1
    };
    bHI.csT = function(fW) {
        if (!E.cr(this.bRE.parentNode, "a-w-sel-do")) return;
        if (!this.cfK || !!fW) {
            this.bRE.style.marginTop = "-" + this.bRE.offsetHeight + "px";
            E.bf(this.bRE.parentNode, "a-w-sel-do")
        }
        this.cfK = false;
        this.bJq = -1;
        this.bQv = E.bj(this.bRE, "seli")
    };
    bHI.xW = function(bn, Q) {
        p.Ce.bw.xW.call(this, bn, Q);
        this.bVK = E.bj(this.fS, "sugitma");
        this.bPS = 0
    }
})(); (function() {
    var p = P("loft.w"),
    ber,
    fQ,
    sR;
    p.bet = C();
    ber = p.bet.bi(P(N.ut).hx);
    ber.biT = function(uG) {
        J.br(location.dwr, "UserBean", "updateFavoriteTagSequence", uG, this.bh.bHk(this, "onupdatesequence"))
    };
    p.yp = C();
    sR = p.yp.bi(P(N.fw).lu);
    sR.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I);
        this.dl = new p.bet;
        var g = P("m.n");
        g.refreshFavTagList = this.biS.bHk(this)
    };
    sR.ke = function() {
        var bHl = E.be("favtagcnew");
        if (!bHl) return;
        this.tu = this.bex(bHl);
        var fC = E.bj(bHl, "fctag");
        if (fC.length > 0) {
            E.be("nav2flnew").style.display = "";
            E.bf(E.be("nav2flnew").parentNode, "f-op0")
        }
        return bHl
    };
    sR.bex = function(bHl) {
        bHl = bHl || this.Y;
        var bS = E.dE(bHl),
        i = 0,
        l = bS.length,
        bey = [];
        if (!l) return;
        if (!this.tk) {
            this.tk = p.ckb.bG(bHl, {
                handler: "seli",
                height: 54,
                noselect: "f-usn",
                onchange: this.Qx.bHk(this)
            })
        } else {
            this.tk.gH()
        }
        for (; i < l; bey.push(parseInt(bS[i].id.replace(/ftagid/g, ""))), i++);
        if ( !! B.da && l > 0) {
            for (var i = 0; i < l; i++) {
                V.bHo(bS[i].children[0], "click",
                function(bp) {
                    location.href = bp
                }.bHk(this, bS[i].children[0].href))
            }
        }
        return bey.join(",")
    };
    sR.Qx = function() {
        this.bez()
    };
    sR.bez = function() {
        var qP = this.tk.GK("id", ";");
        qP = qP.replace(/ftagid/g, "");
        if ( !! qP && this.tu == qP) return;
        this.tu = qP;
        this.biR(); !! this.tu && this.dl.biT(this.tu)
    };
    sR.biR = function() {
        var bS = this.tk.cB,
        i = 1,
        l = bS.length,
        Q;
        E.ba(bS[0], "first");
        for (; i < l; i++) {
            E.bf(bS[i], "first")
        }
    };
    sR.biS = function() {
        this.bex();
        this.bez();
        var cf = E.dE(this.Y);
        this.Y.style.display = !!cf && cf.length ? "": "none"
    };
    p.ckb = C();
    fQ = p.ckb.bi(P(N.ui).gX, true);
    fQ.jY = function(bHm) {
        this.bUd = true;
        this.cvm = V.vS(bHm);
        return
    };
    fQ.yd = function(bHm) {
        if (!this.bUd || Math.abs(V.vS(bHm) - this.cvm) < 5) return;
        if (!this.bUc) this.cke(bHm);
        p.ckb.bw.yd.call(this, bHm)
    };
    fQ.EK = function(bHm) {
        this.bUd = this.bUc = false;
        p.ckb.bw.EK.call(this)
    };
    fQ.cke = function(bHm) {
        this.Br();
        this.rL = V.vS(bHm);
        this.YH(this.Y, true);
        this.mn = V.be(bHm, this.bBh.bHk(this));
        this.mn.style.visibility = "hidden";
        var cY = this.Y.style;
        this.gh = this.mn.offsetTop;
        cY.top = this.gh + "px";
        cY.height = this.mn.offsetHeight + "px";
        this.dL.appendChild(this.Y);
        if (B.dh && !this.cv) {
            this.cv = window.setInterval(this.YZ.bHk(this), 10)
        }
        this.Y.innerHTML = this.mn.innerHTML;
        this.bUc = true
    };
    fQ.cc = function() {
        p.ckb.bw.cc.call(this);
        E.ba(this.Y, "seli seli-hover seli-move")
    };
    fQ.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL) return;
        this.Y.style.width = "100%";
        this.gH()
    };
    fQ.RY = function(X) {
        var bHl = !!this.rO && E.bj(X, this.rO) || null;
        return bHl && bHl[0] || X
    };
    fQ.GJ = function(X) {
        if ( !! X[this.Bt]) return;
        X[this.Bt] = true;
        X = this.RY(X);
        this.bUd = this.bUc = false;
        V.bHo(X.parentNode, "dragstart", V.bb);
        V.bHo(X, "dragstart", V.bb);
        V.bHo(X, "mousedown", this.jY.bHk(this))
    }
})(); (function() {
    var p = P("loft.w.bm"),
    qk,
    fQ,
    Eu;
    p.lH = C();
    qk = p.lH.bi(P(N.ui).ga, true);
    qk.bq = function(bl, I) {
        I = I || O;
        this.bHr(bl, I);
        var i = 0,
        l = loft.c.jg.length,
        Ah = [];
        for (; i < l; Ah.push(loft.c.jg[i].blogId), i++);
        this.tu = Ah.join(";");
        this.tO = I.targetid;
        for (var i = 0; i < loft.c.jg.length; i++) {
            if (loft.c.jg[i].blogId == this.tO) {
                this.cvi = i > 0 ? loft.c.jg[i - 1].blogId: -1;
                break
            }
        }
        p.loadMsgCount = this.byS.bHk(this)
    };
    qk.cc = function() {
        var CL = E.be("blogmanage");
        var bHl = E.bj(CL, "bmtag");
        //我增加的
        if(null != bHl){
            this.ou = bHl[0];
            this.cLM = bHl[1];
            this.bUb = bHl[2];
            this.cB = bHl[3];
            this.cve = E.be("bgmancontri", "bgmanask", "bgmanmsg");
            this.cMi = E.be("newguide-2");
            this.bUb.style.marginTop = -this.bUb.offsetHeight + "px";
            V.bHo(this.ou, "click", this.cbo.bHk(this));
            V.bHo(document, "click", this.bPP.bHk(this, true));
            V.bHo(document, "keydown", this.mW.bHk(this));
            if ( !! B.dh) V.bHo(document, "keypress", this.cjY.bHk(this));
            p.hidebloglist = this.bPP.bHk(this, true)
        }
    };
    qk.bz = function(I) {
        I = I || O;
        p.lH.bw.bz.call(this, I)
    };
    qk.fs = function(bl, pa) {
        if (!this.tk) this.tk = p.gX.bG(this.cB, {
            userclass: true,
            tag: "candrag",
            height: 52,
            noselect: "f-usn",
            onchange: this.Qx.bHk(this)
        });
        else this.tk.gH()
    };
    var Oq = [38, 40, 13, 27, 68];
    qk.mW = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode),
        Q = U.fO(Oq, rB);
        if (Q == -1) return;
        var X = V.be(bHm);
        switch (Q) {
        case 0:
            if ( !! this.cbt) this.ctc( - 1, bHm);
            break;
        case 1:
            if ( !! this.cbt) this.ctc(1, bHm);
            break;
        case 2:
            if ( !! this.cbt) this.ctc(0, bHm);
            break;
        case 3:
            if ( !! this.cbt) if ( !! this.bQs[this.bJq]) {
                E.bf(this.bQs[this.bJq], "j-hover")
            }
            this.bPP();
            break;
        case 4:
            if (X.tagName == "INPUT" || X.tagName == "TEXTAREA" || !!E.cr(X, "noshortkey")) return;
            this.dvx(bHm);
            break
        }
    };
    qk.dvx = function(bHm) {
        V.bb(bHm);
        if ( !! this.cMi && this.cMi.style.display == "") {
            window.loft.g.g5(2, bHm)
        }
        document.body.scrollTop = 0;
        try {
            this.ou.click();
            return true
        } catch(e) {
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true);
            this.ou.dispatchEvent(evt);
            return false
        }
    };
    qk.ctc = function(gC, bHm) {
        if (this.bQs.length == 0) return;
        V.bb(bHm);
        if (gC == 0) {
            if ( !! this.bQs[this.bJq]) {
                var CL = this.bQs[this.bJq];
                try {
                    CL.click();
                    return true
                } catch(e) {
                    var evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true);
                    CL.dispatchEvent(evt);
                    return false
                }
            }
        } else {
            if ( !! this.bQs[this.bJq]) E.bf(this.bQs[this.bJq], "j-hover");
            this.bJq = this.bJq + gC <= -1 ? this.bQs.length - 1 : this.bJq + gC >= this.bQs.length ? 0 : this.bJq + gC;
            if ( !! this.bQs[this.bJq]) E.ba(this.bQs[this.bJq], "j-hover")
        }
    };
    qk.cjY = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode);
        if (rB == 13 && !!this.cbt) {
            this.ctc(0, bHm)
        }
        if (rB == 27 && !!this.cbt) {
            if ( !! this.bQs[this.bJq]) {
                E.bf(this.bQs[this.bJq], "j-hover")
            }
            this.bPP()
        }
        return
    };
    qk.cbo = function(bHm) {
        V.bb(bHm);
        if (!E.cr(this.bUb.parentNode, "a-w-sel-do")) {
            this.cbt = true;
            this.bJq = -1;
            if ( !! loft.w.suggestnew.hideschlist) loft.w.suggestnew.hideschlist();
            if ( !! loft.w.hidemorelist) loft.w.hidemorelist();
            this.bUb.style.marginTop = "0px";
            E.ba(this.bUb.parentNode, "a-w-sel-do");
            J.br(location.dwr, "LoggerBean", "printStatLog", "homeClick_20130514_03", F)
        } else {
            this.bPP()
        }
    };
    qk.bPP = function() {
        this.cbt = false;
        this.bJq = -1;
        if (!this.bUb) return;
        if (this.bUb.offsetHeight == 0) return;
        this.bUb.style.marginTop = -this.bUb.offsetHeight + "px";
        E.bf(this.bUb.parentNode, "a-w-sel-do")
    };
    qk.Qx = function() {
        var qP = this.tk.GK("id", ";"),
        bPV = new RegExp(this.cvi, "gi");
        qP = this.cvi == -1 ? this.tO + ";" + qP: qP.replace(bPV, this.cvi + ";" + this.tO);
        if (this.tu != qP) {
            this.tu = qP;
            this.byA();
            J.br(location.dwr, "UserBean", "updateBlogSequence", qP,
            function() {}.bHk(this))
        }
    };
    qk.byA = function() {
        var i = 0,
        ij = [],
        pP = this.tu.split(";"),
        byt = pP.length,
        bt,
        Q;
        for (i = 0; i < byt; i++) {
            bt = pP[i];
            Q = U.fO(loft.c.jg,
            function(mV) {
                return mV.blogId == bt
            });
            if (Q != -1) {
                ij.push(loft.c.jg[Q])
            }
        }
        loft.c.jg = ij
    };
    qk.byS = function(bS) {
        var Lt = !!this.tO ? this.tO: E.be("blogmanage").children[0].id,
        cMU = U.fO(bS,
        function(mV) {
            return mV.blogId == Lt
        });
        if (cMU >= 0) {
            this.cMV = bS.splice(cMU, 1)
        }
        var i = 0,
        l = bS.length,
        fC, qC = 0,
        bn = E.bj(this.cB, "candrag"),
        bt,
        Q,
        df,
        cfM,
        cuU,
        ctl = ["unReadContributeCount", "unReadAskCount", "unReadMsgCount"],
        cNs = this.cMV[0];
        for (; i < l; i++) {
            fC = bS[i] || {};
            qC += (fC.unReadContributeCount || 0) + (fC.unReadMsgCount || 0) + (fC.unReadAskCount || 0)
        }
        this.cLM.innerHTML = qC;
        this.cLM.style.display = qC > 0 ? "block": "none";
        for (i = 0; i < bS.length; i++) {
            bt = bn[i].id;
            Q = U.fO(bS,
            function(mV) {
                return mV.blogId == bt
            });
            df = E.bj(bn[i], "ttag");
            cfM = 0;
            for (var j = 1; j < 4; j++) {
                cuU = bS[Q];
                if (cuU[ctl[j - 1]] > 0) {
                    df[j].innerHTML = cuU[ctl[j - 1]];
                    df[j].parentNode.style.display = "inline-block";
                    E.ba(df[j].parentNode, "j-blogman");
                    cfM++
                } else {
                    df[j].parentNode.style.display = "none";
                    E.bf(df[j].parentNode, "j-blogman")
                }
            }
            df[0].style.width = cfM == 0 ? "192px": 157 - 40 * (cfM - 1) + "px";
            df[0].style.paddingRight = cfM == 0 ? "17px": 52 + 40 * (cfM - 1) + "px"
        }
        if (this.cMV.length > 0) {
            for (var j = 0; j < 3; j++) {
                if ( !! this.cve[j] && cNs[ctl[j]] > 0) {
                    this.cve[j].innerHTML = cNs[ctl[j]];
                    this.cve[j].style.display = ""
                }
            }
        }
        this.bQs = E.bj(this.cB, "j-blogman")
    };
    p.gX = C();
    fQ = p.gX.bi(P(N.ui).gX, true);
    fQ.cc = function() {
        p.gX.bw.cc.call(this);
        E.ba(this.Y, "seli seli-hover seli-move")
    };
    fQ.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL) return;
        this.gH()
    };
    fQ.jY = function(bHm) {
        this.bUd = true;
        this.dvv = V.vS(bHm);
        return
    };
    fQ.yd = function(bHm) {
        if (!this.bUd || Math.abs(V.vS(bHm) - this.dvv) < 5) {
            return
        }
        if (!this.bUc) this.cke(bHm);
        p.gX.bw.yd.call(this, bHm)
    };
    fQ.EK = function(bHm) {
        this.bUd = this.bUc = false;
        p.gX.bw.EK.call(this)
    };
    fQ.cke = function(bHm) {
        p.gX.bw.jY.call(this, bHm);
        this.Y.innerHTML = this.mn.innerHTML;
        this.bUc = true
    }
})(); (function() {
    var p = P("loft.w"),
    jQ,
    qk,
    qf,
    Eu,
    QY,
    yI,
    bFO = 10,
    bzb = 12e4,
    ex = "blogcount",
    cuJ = 0;
    p.QX = C();
    yI = p.QX.bi(P(N.ut).hx);
    yI.bai = function(byZ, byY) {
        cuJ++;
        J.br(location.dwr, "TrackBean", "getTopCount", byZ, byY, cuJ, false, this.byW.bHk(this))
    };
    yI.byW = function(dU) {
        if ( !! dU) {
            var byV = dU.unread || 0,
            bS = dU.list || [];
            this.gp(ex, bS);
            this.bh("ongetunreadtrackcount", byV);
            if ( !! E.be("blogmanage")) {
                loft.w.bm.loadMsgCount(bS)
            }
        }
    };
    p.bas = C();
    jQ = p.bas.prototype;
    jQ.bq = function() {
        this.bv = new p.QX({
            ongetunreadtrackcount: this.byT.bHk(this)
        });
        if ( !! this.dK() && loft.c.cm.userId > 0) {
            this.bbc = this.bbd = -1;
            this.bv.bai( - 1, -1);
            this.byP();
            this.byO()
        }
        P("m").loadAllMembers = this.QQ.bHk(this);
        loft.x.cVT();
        this.dvp()
    };
    jQ.dK = function() {
        var byJ = E.be("topbar"),
        bHl = E.bj(byJ, "tbtag"),
        i = 0;
        if (!bHl || !bHl.length) return false;
        this.FO = bHl[i++];
        this.QD = bHl[i++];
        this.pj = bHl[i++];
        this.dyh = bHl[i++];
        this.cfO = bHl[i++];
        this.dvf = bHl[i++];
        this.cg = bHl[i++];
        this.bRE = bHl[i++];
        this.cPu = E.be("uapptip1");
        this.cPF = E.be("uapptip2");
        this.dve = this.cPF.children[0];
        this.cPM = this.cPF.children[1];
        if ( !! this.cPM) {
            V.bHo(this.dve, "click", this.dvd.bHk(this))
        }
        if ( !! E.be("apptip")) {
            var bYk = E.be("apptip");
            V.bHo(bYk.parentNode, "click", this.dvc.bHk(this, bYk));
            loft.x.bHt("qbydxz_20141230_01")
        }
        this.cfO.children[0].style.marginTop = "-300px";
        V.bHo(this.pj.parentNode, "click", this.cux.bHk(this, true));
        V.bHo(document, "click", this.byE.bHk(this));
        this.byD();
        var bHl = E.dE(this.dvf).concat(E.dE(E.be("favtagcnew")).concat(E.dE(E.be("bloglstp")))),
        l = bHl.length;
        for (; l--; E.fy(bHl[l], "seli-hover"));
        this.CN = new loft.w.suggestnew.wb(null, {
            stag: "",
            stype: 0
        });
        this.IT = new p.yp(null, {});
        p.hidemorelist = this.cux.bHk(this, false);
        return true
    };
    jQ.dvc = function(CL, bHm) {
        V.bb(bHm);
        J.br(location.dwr, "UserBean", "clearAppTip", this.dva.bHk(this, CL))
    };
    jQ.dva = function(CL) {
        location.href = CL.href
    };
    jQ.dvp = function() {
        var cQa = E.be("w-myart");
        if ( !! cQa) {
            E.fy(cQa, "w-moreList-hover")
        }
    };
    jQ.byP = function() {
        var byM = function() {
            this.bv.bai(this.bbc, this.bbd);
            if ( !! this.cun) {
                window.clearTimeout(this.cun)
            }
            if (cuJ < 12) {
                this.cun = window.setTimeout(byM, bzb)
            }
        }.bHk(this);
        this.cun = window.setTimeout(byM, bzb)
    };
    jQ.byT = function(bHn) {
        if ( !! bHn && bHn > 0) {
            this.QD.parentNode.style.display = "";
            this.QD.innerText = bHn;
            if ( !! window.isInDashboard) {
                if (bHn > 99) {
                    document.title = "[99+] " + "LOFTER（乐乎） - 每个人的理想国"
                } else {
                    document.title = "[" + bHn + "] " + "LOFTER（乐乎） - 每个人的理想国"
                }
            }
        } else {
            this.QD.parentNode.style.display = "none";
            if ( !! window.isInDashboard) {
                document.title = "LOFTER（乐乎） - 每个人的理想国"
            }
        }
        this.bbc = bHn || 0
    };
    jQ.byD = function() {
        var duZ = E.be("rside-postcount"),
        duY = E.be("rside-postqueuecount"),
        duX = E.be("rside-draftcount");
        this.duW = {
            postCount: duZ,
            postQueueCount: duY,
            draftCount: duX
        };
        var g = P("loft.g");
        g.updateRightSide = this.duV.bHk(this);
        this.bRE.style.marginTop = "-" + this.bRE.offsetHeight + "px";
        if (!B.dh) return;
        var bdb = E.be("rside"),
        cf,
        l;
        if ( !! bdb) {
            cf = bdb.getElementsByTagName("li");
            for (l = cf.length; l--; E.fy(cf[l], "j-hover"));
        }
    };
    jQ.duV = function(by, duU) {
        var X = this.duW[by];
        if (X) {
            var fC = 0;
            try {
                fC = parseInt(X.innerText)
            } catch(e) {}
            fC += duU;
            if (fC <= 0) {
                fC = 0
            }
            X.innerText = fC;
            if (by == "postCount") return;
            X.parentNode.parentNode.style.display = fC > 0 ? "": "none"
        }
    };
    jQ.cux = function(gu, bHm) {
        if ( !! bHm && !!E.cr(bHm.originalTarget || bHm.srcElement, "tbtag")) V.bb(bHm);
        if (!gu || !!E.cr(this.cfO, "a-w-sel-do")) {
            E.bf(this.cfO, "a-w-sel-do");
            this.cfO.children[0].style.marginTop = "-300px"
        } else {
            if ( !! this.cPu) {
                J.br(location.dwr, "UAppBean", "clearUappTip1", this.duT.bHk(this))
            }
            if ( !! loft.w.suggestnew.hideschlist) loft.w.suggestnew.hideschlist();
            if ( !! loft.w.bm.hidebloglist) loft.w.bm.hidebloglist();
            E.ba(this.cfO, "a-w-sel-do");
            this.cfO.children[0].style.marginTop = "0px";
            J.br(location.dwr, "LoggerBean", "printStatLog", "homeClick_20130514_01", F)
        }
    };
    jQ.duT = function() {
        E.hE(this.cPu)
    };
    jQ.dvd = function() {
        J.br(location.dwr, "UAppBean", "clearUappTip2", this.duS.bHk(this))
    };
    jQ.duS = function() {
        E.hE(this.cPM)
    };
    jQ.byE = function(bHm) {
        this.cux(false)
    };
    jQ.byO = function() {
        if (loft.c.cm.isFromMobile == "1") {
            var QK = document.cloneElement("div", "g-hd2");
            QK.innerHTML = '<div class="m-bkmbbtn"><a href="#">返回移动版</a>';
            document.body.insertAdjacentElement("afterBegin", QK);
            E.ba(document.body, "p-body9");
            V.bHo(QK, "click", this.byN.bHk(this))
        }
    };
    jQ.byN = function() {
        U.ir("NTES_LOFT_PCSTICK");
        U.ir("NTES_LOFT_PCSTICK", ".lofter.com", "/");
        location.reload()
    };
    jQ.QQ = function(bHm) {
        V.bb(bHm);
        var X = V.be(bHm,
        function(X) {
            return X.tagName == "A"
        }),
        bl = X.parentNode.parentNode,
        qC = E.dE(bl),
        l = qC.length - 1;
        for (; l--; qC[l].style.display = "");
        var QH = qC[0].clientHeight;
        bl.style.height = (qC.length - 1) * QH + "px";
        X.parentNode.style.display = "none"
    }
})(); (function() {
    var mA = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    },
    byg = function() {
        var X = E.be("gtotop"),
        sv,
        Qs,
        bfP,
        HU;
        if (!X) return;
        V.bHo(X, "click", byf);
        Qs = function() {
            if (mA() > 500) {
                if (B.dh) {
                    X.style.top = document.documentElement.clientHeight + mA() - 86 + "px"
                }
                X.style.visibility = "visible";
                X.style.filter = "alpha(opacity=100)";
                X.style.opacity = 1;
                if ( !! HU) window.clearTimeout(HU)
            } else {
                X.style.filter = "alpha(opacity=0)";
                X.style.opacity = 0;
                HU = window.setTimeout(function() {
                    X.style.visibility = "hidden";
                    delete HU
                }.bHk(this), 300)
            }
        };
        bfP = function() {
            if ( !! sv) {
                window.clearTimeout(sv);
                delete sv
            }
            sv = window.setTimeout(Qs, 100)
        };
        V.bHo(window, "scroll", B.dh ? Qs: bfP)
    },
    byf = function(bHm) {
        V.bb(bHm);
        document.documentElement.scrollTop = document.body.scrollTop = 0
    };
    byg()
})(); (function() {
    var p = P("loft.w"),
    vm,
    eb;
    p.Ie = C();
    p.Ie.Qq = function(dN, eT, I) {
        if (!eb) eb = new p.Ie(I);
        if ( !! dN) eb.Qq(dN, eT || 0)
    };
    vm = p.Ie.prototype;
    vm.bq = function(I) {
        I = I || O;
        this.Qo = [];
        this.bye(I);
        this.bgg = this.bgj();
        this.byd()
    };
    vm.bye = function(I) {
        this.bgy = I.imgattr || "imgsrc";
        this.Qm = I.diff || 0
    };
    vm.byd = function() {
        var sv, self = this;
        V.bHo(window, "scroll", bgF);
        V.bHo(window, "resize",
        function() {
            self.bgg = self.bgj();
            bgF(true)
        });
        function bgF(qF) {
            if (sv) return;
            sv = setTimeout(function() {
                self.bgG(qF);
                sv = null
            },
            100)
        }
    };
    vm.bgG = function(qF) {
        var kj = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!qF && kj <= this.Qm) return;
        var dN = this.Qo,
        byc = this.bgg + kj,
        i, eJ, In;
        for (i = 0; eJ = dN[i++];) {
            var byb = eJ.dataoffset || E.jO(eJ);
            if (byb <= byc) {
                In = eJ.getAttribute(this.bgy);
                if (In && eJ.src != In) {
                    eJ.src = In;
                    eJ.removeAttribute(this.bgy);
                    dN.splice(--i, 1)
                }
            }
        }
    };
    vm.bgj = function() {
        var bgS = document.documentElement.clientHeight;
        if (this.Qm === 0) return 2 * bgS;
        else return this.Qm + bgS
    };
    vm.Qq = function(dN, eT) {
        if ( !! dN.length) {
            for (var i = 0,
            l = dN.length; i < l; this.Qo.push(dN[i]), dN[i].dataoffset = eT, i++);
        } else {
            this.Qo.push(dN);
            dN.dataoffset = eT
        }
        this.bgG(true)
    }
})(); (function() {
    var p = P("loft.d"),
    yX;
    p.vz = C();
    yX = p.vz.bi(P(N.fw).bLr);
    yX.yY = function(bHK, cuP) {
        cuP = cuP || (loft.c.bOj || O).targetBlogId || 0;
        J.br(location.dwr, "UserBean", "addBlacklist", bHK || "", cuP, this.bh.bHk(this, "onaddblacklist"))
    };
    yX.bxZ = function(bt) {
        J.br(location.dwr, "UserBean", "removeBlacklist", bt || 0, this.bh.bHk(this, "onremoveblacklist", bt))
    };
    yX.cuX = function(bc, duR) {
        J.br(location.dwr, "UserBean", "removeFollower", bc || 0, duR || 0, this.bh.bHk(this, "onremovefollowed"))
    };
    yX.bFQ = function(dx, ci) {
        J.br(location.dwr, "UserBean", "getBlacklistUserList", dx, ci, this.bh.bHk(this, "onloadblacklist"))
    };
    yX.pQ = function(I, ca) {
        ca(I.allcount)
    };
    yX.kB = function(I, ca) {
        J.br(location.dwr, "UserBean", "getBlacklistUserList", I.limit, I.offset, ca)
    }
})(); (function() {
    window.setTimeout(function() {
        new(P("loft.w").bas);
        if ( !! loft.c.bzp) {
            J.Ty("https://music.ph.126.net/ph.js?001")
        }
        J.Ty("https://analytics.163.com/ntes.js",
        function() {
            window["_ntes_nacc"] = "lofter";
            window.neteaseTracker()
        })
    },
    1e3);
    var bxW = function() {
        if (typeof screen.fontSmoothingEnabled != "undefined") return screen.fontSmoothingEnabled;
        try {
            var a = document.createElement("canvas");
            a.width = "35",
            a.height = "35",
            a.style.display = "none",
            document.body.appendChild(a);
            var b = a.getContext("2d");
            b.textBaseline = "top",
            b.font = "32px Arial",
            b.fillStyle = "black",
            b.strokeStyle = "black",
            b.fillText("E", 0, 0);
            for (var c = 8; c <= 32; c++) for (var d = 1; d <= 32; d++) {
                var e = b.getImageData(d, c, 1, 1).data,
                f = e[3];
                if (f != 255 && f != 0) return document.body.removeChild(a),
                true
            }
            return document.body.removeChild(a),
            false
        } catch(e) {
            return null
        }
    },
    bxU = function() {
        var b = navigator.userAgent.indexOf("Windows NT 5.1") > -1,
        c = b ? bxW() : true,
        d = document.getElementsByTagName("html")[0];
        if (c == false) d.className += " z-ff"
    };
    bxU();
    function test() {
        var dyi = "just for update!!!"
    }
    loft.x.dwZ("/src/css/retina/style.css");
    loft.x.dwI();
    if (window.isInDashboard || window.isInTagSearch) { (function() {
            var bJ = P("loft.m.g");
            var bTP = E.be("sidebara4darea");
            if (!bTP) return;
            var bYI;
            var bTa = function(bRj, dx) {
                bRj = bRj || [];
                var bOM = bRj.length || 0;
                dx = dx || bOM;
                if (dx > bOM) dx = bOM;
                var csV = [];
                var bn = [];
                for (var i = 0; i < bOM; i++) {
                    csV[i] = i
                }
                if (bOM > 0) {
                    var Q = -1;
                    for (var j = 0; j < dx; j++) {
                        Q = U.Ub(0, csV.length);
                        bn.push(bRj[csV[Q]]);
                        csV.splice(Q, 1)
                    }
                }
                return bn
            };
            var duQ = function(bn) {
                var cRW = -1;
                for (var i = 0; i < bn.length; i++) {
                    var bHn = bn[i];
                    if ( !! bHn && !!bHn.linkUrl) {
                        bHn.type = 1;
                        var bYM = "";
                        if (bHn.type == 2 && !!U.bA(bHn.flash)) {
                            bYM = "flashad_" + loft.x.hashCode(U.bA(bHn.flash))
                        } else if (bHn.type == 1 && !!U.bA(bHn.imgUrl)) {
                            bYM = "imgad_" + loft.x.hashCode(U.bA(bHn.imgUrl))
                        } else {
                            continue
                        }
                        var duP = U.ot(bYM);
                        if (!duP) {
                            if (nl(bHn)) {
                                cRW = i;
                                break
                            }
                        }
                    }
                }
                return cRW
            };
            var nl = function(bHn) {
                var cvB = false;
                if ( !! bHn && !!bHn.areas && bHn.areas.length > 0) {
                    var ckX = (loft.c.bOj || {}).ipdata || "";
                    if ( !! ckX && ( !! ckX.province || !!ckX.city)) {
                        for (var i = 0; i < bHn.areas.length; i++) {
                            if ( !! bHn.areas[i] && (bHn.areas[i] == ckX.province || bHn.areas[i] == ckX.city)) {
                                cvB = true;
                                break
                            }
                        }
                    } else {
                        cvB = true
                    }
                } else {
                    cvB = true
                }
                return cvB
            };
            bJ.cbGetSidebarA4d = function(bn) {
                var bHl = E.bj(bTP, "a4dtag");
                var Q = 0;
                var duO = bHl[Q++];
                var duN = bHl[Q++];
                var duM = bHl[Q++];
                var duL = bHl[Q++];
                bn = bTa(bn);
                var Q = duQ(bn);
                var bHn = bn[Q];
                bYI = bHn;
                if ( !! bHn && !!bHn.imgUrl && !!bHn.linkUrl) {
                    duN.src = loft.x.bJR(bHn.imgUrl, 226, 226, true);
                    duO.href = bHn.linkUrl;
                    duM.href = bHn.linkUrl;
                    duL.innerText = bHn.title || "";
                    bTP.style.display = "block";
                    loft.x.bHt("qbdbsgg_20150518_03");
                    if ( !! bHn.uncloseable) {
                        E.ba(bTP, "js-sidebara4darea-noclose")
                    } else {
                        E.bf(bTP, "js-sidebara4darea-noclose")
                    }
                } else {
                    bTP.style.display = "none"
                }
                if (bTP.style.display != "none") {
                    loft.x.bHt("qbdbycgg_20150519_02")
                }
            };
            bJ.closeSidebarA4d = function(bHm) {
                V.bb(bHm);
                loft.x.bHt("qbdbsgg_20150518_01");
                if (!bYI) return;
                var bYM = "";
                if (bYI.type == 2 && !!U.bA(bYI.flash)) {
                    bYM = "flashad_" + loft.x.hashCode(U.bA(bYI.flash))
                } else if (bYI.type == 1 && !!U.bA(bYI.imgUrl)) {
                    bYM = "imgad_" + loft.x.hashCode(U.bA(bYI.imgUrl))
                }
                if ( !! bYM) U.ru(bYM, "1", ".lofter.com", 90, "/");
                E.ba(bTP, "js-hide-sidebara4darea");
                window.setTimeout(function() {
                    bTP.style.display = "none"
                },
                500)
            };
            var duK = "http://www.lofter.com/blogPhotoAd?positionId=13&callback=loft.m.g.cbGetSidebarA4d";
            if (window.isInTagSearch) {
                duK = "http://www.lofter.com/blogPhotoAd?positionId=12&callback=loft.m.g.cbGetSidebarA4d"
            }
            J.Ty(duK, F)
        })()
    }
})(); (function() {
    var p = P("loft.m.newpublish.w");
    p.bIv = function() {
        var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
            ie: !!window.ActiveXObject,
            opera: !!opera && opera.version,
            webkit: agent.indexOf(" applewebkit/") > -1,
            mac: agent.indexOf("macintosh") > -1,
            quirks: document.compatMode == "BackCompat"
        };
        browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera;
        var version = 0;
        var kernelVersion = 0;
        if (browser.ie) {
            version = parseFloat(agent.match(/msie (\d+)/)[1]);
            kernelVersion = version;
            if (version >= 7) {
                B.dh = false
            }
        }
        if (browser.gecko) {
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if (geckoRelease) {
                geckoRelease = geckoRelease[1].split(".");
                version = parseFloat(geckoRelease);
                kernelVersion = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1
            }
        }
        if (/chrome\/(\d+\.\d)/i.test(agent)) {
            browser.chrome = +RegExp["$1"];
            version = browser.chrome
        }
        if (/(\d+\.\d)?(\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
            browser.safari = +(RegExp["$1"] || RegExp["$3"]);
            try {
                version = parseFloat(RegExp["$1"]) + parseFloat(RegExp["$2"]) * .1
            } catch(e) {
                version = browser.safari
            }
        }
        if (browser.opera) {
            version = parseFloat(opera.version());
            kernelVersion = version
        }
        if (browser.webkit) {
            kernelVersion = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1])
        }
        browser.version = version;
        browser.kernelVersion = kernelVersion;
        if (browser.gecko && browser.version >= 11 && agent.indexOf(" .net") > -1 && agent.lastIndexOf("like gecko") > -1) {
            browser.ie11plus = true;
            B.coJ = true
        }
        return browser
    } ();
    p.cJK = function() {
        var bp = location.href;
        var cJL = bp.indexOf("#");
        if (cJL >= 0 && !!window.history && !!window.history.replaceState) {
            window.history.replaceState(null, "", bp.substring(0, cJL))
        } else {
            if ( !! location.hash) location.hash = ""
        }
    };
    p.dtg = function() {
        var bp = location.href;
        var cJP = bp.indexOf("?");
        if ( !! window.history && !!window.history.replaceState) {
            window.history.replaceState(null, "", bp.substring(0, cJP))
        } else {
            location.href = bp.substring(0, cJP)
        }
    };
    p.cht = function() {
        var bZw = E.be("publishPostBar");
        if (!bZw) return;
        var bHl = bZw.getElementsByTagName("li") || [];
        var Q = 1;
        var bZx = bHl[Q++];
        var bZy = bHl[Q++];
        var bZz = bHl[Q++];
        var bZA = bHl[Q++];
        var bZC;
        var bZD;
        var bZE;
        var bZF;
        if ( !! bZx) bZC = (bZx.getElementsByTagName("a") || [])[0];
        if ( !! bZy) bZD = (bZy.getElementsByTagName("a") || [])[0];
        if ( !! bZz) bZE = (bZz.getElementsByTagName("a") || [])[0];
        if ( !! bZA) bZF = (bZA.getElementsByTagName("a") || [])[0];
        var bHQ = [bZC, bZD, bZE, bZF];
        return bHQ
    };
    p.dtf = function() {
        if (window["__flash__removeCallback"]) return;
        window["__flash__removeCallback"] = function(instance, name) {
            try {
                if (instance) {
                    instance[name] = null
                }
            } catch(flashEx) {}
        }
    };
    p.dyw = function() {
        if ((p.bIv.ie || p.bIv.ie11plus) && p.bIv.version >= 10) {
            window.setTimeout(function() {
                p.dtf()
            }.bHk(this), 1e3)
        }
    };
    p.bMy = function() {
        if (p.isAdvancedBrowser !== undefined && !U.co(p.isAdvancedBrowser, "undefined")) return p.isAdvancedBrowser;
        var mN = true;
        try {
            var bIa = document.createElement("canvas");
            if (!bIa.toBlob) {
                new Blob(["test"], {
                    type: "text"
                })
            } else {
                var buf = new ArrayBuffer(10);
                var ui8a = new Uint8Array(buf, 0)
            }
            var bJX = bIa.getContext("2d");
            var brG = new XMLHttpRequest;
            window.URL = window.URL || window.webkitURL;
            if (!bJX.drawImage || !bIa.toDataURL || !atob || !window.URL || !window.URL.createObjectURL || !brG.upload || !window.localStorage) {
                mN = false
            }
        } catch(e) {
            mN = false
        }
        if (p.bIv.chrome) {
            if (p.bIv.version >= 17) mN = true
        } else if (p.bIv.ie || p.bIv.ie11plus) {
            if (p.bIv.version >= 10 && document.documentMode >= 10) {
                mN = true
            } else {
                mN = false
            }
        } else if (p.bIv.safari) {
            if (p.bIv.version >= 4.04) mN = true
        }
        var bx = "noAdvancedBrowser";
        var bQy = 365 * 100;
        if ( !! mN) {
            U.ru(bx, 0, null, bQy, "/")
        } else {
            U.ru(bx, 1, null, bQy, "/")
        }
        p.isAdvancedBrowser = mN;
        return p.isAdvancedBrowser
    };
    window.setTimeout(function() {
        p.bMy()
    }.bHk(this), 2e5)
})(); (function() { (function() {
        var p = P(N.ut),
        Nf,
        Ne,
        Nd,
        GL;
        if ( !! window.sessionStorage) {
            Nf = function(bx, bHn) {
                sessionStorage.setItem(bx, U.lO(bHn))
            };
            Ne = function(bx) {
                return U.qr(sessionStorage.getItem(bx))
            };
            GL = function(bx) {
                sessionStorage.removeItem(bx)
            };
            Nd = function() {
                if ( !! sessionStorage.clear) {
                    sessionStorage.clear();
                    return
                }
                for (var i = (sessionStorage.length || 0) - 1; i >= 0; GL(sessionStorage.key(i)), i--);
            }
        } else {
            var qm;
            try {
                qm = U.qr(window.name.replace(/(document.write|alert|appendChild)/ig, ""))
            } catch(e) {}
            if (!qm || !U.co(qm, "object")) qm = {};
            var bsv = function() {
                window.name = U.lO(qm)
            };
            Nf = function(bx, bHn) {
                qm[bx] = bHn
            };
            Ne = function(bx) {
                return qm[bx]
            };
            GL = function(bx) {
                delete qm[bx]
            };
            Nd = function() {
                qm = {}
            };
            V.bHo(window, "beforeunload", bsv)
        }
        p.GN = C();
        p.GN.wE = Nf;
        p.GN.qs = Ne;
        p.GN.Nc = Nd;
        p.GN.hz = GL
    })(); (function() {
        var p = P(N.ut),
        bgn,
        bgo,
        bgq,
        bgr,
        bgs,
        qI;
        var GT = "ntsstorage",
        bsq = "nts_flash_storage",
        GV = "http://www.lofter.com/rsc/swf/storage.swf?t=" + (new Date).getTime();
        if ( !! window.localStorage) {
            bgn = function(bx, bHn) {
                localStorage.setItem(bx, U.lO(bHn))
            };
            bgo = function(bx) {
                return U.qr(localStorage.getItem(bx))
            };
            bgr = function(bx) {
                localStorage.removeItem(bx)
            };
            bgq = function() {
                localStorage.clear()
            };
            bgs = function(tq) {
                tq = tq || F;
                tq()
            }
        } else { (function() {
                document.body.insertAdjacentHTML("beforeEnd", '<div style="position:absolute;top:0;right:0;z-index:999;width:1px;height:1px;overflow:hidden;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="' + GT + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + GV + '"/><param name="AllowScriptAccess" value="sameDomain"/><embed src="' + GV + '" width="1" height="1"name="' + GT + '" AllowScriptAccess="sameDomain"type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed></object></div>')
            })()
        }
        p.iv = C();
        qI = p.iv.prototype;
        qI.bq = function() {
            this.vY(true)
        };
        qI.vY = function(nd) {
            var ed = E.bfk(GT);
            if ( !! ed) {
                if ( !! nd) this.bsp(ed)
            } else {}
            return ed
        };
        qI.bsp = function(ed) {
            if ( !! ed && !!ed.init) {
                ed.init(bsq)
            }
        };
        qI.bsn = function(bx, gA) {
            var ed = this.vY();
            if ( !! ed && !!ed.setValue) {
                ed.setValue(bx, gA)
            }
        };
        qI.bsm = function(bx) {
            var ed = this.vY();
            if ( !! ed && !!ed.getValue) {
                return ed.getValue(bx)
            }
        };
        qI.bGo = function(bx, gA) {
            var ed = this.vY();
            if ( !! ed && !!ed.appendValue) {
                ed.appendValue(bx, gA)
            }
        };
        qI.bsk = function(bx) {
            var ed = this.vY();
            if ( !! ed && !!ed.deleteValue) {
                ed.deleteValue(bx)
            }
        };
        qI.bsj = function() {
            var ed = this.vY();
            if ( !! ed && !!ed.clearCookie) {
                ed.clearCookie()
            }
        };
        p.iv.jM = function() {
            if (!this.bgN) {
                var ed = E.bfk(GT);
                if ( !! ed && !!ed.init) {
                    this.bgN = new p.iv
                }
            }
            return this.bgN
        };
        p.iv.wE = function(bx, bHn) {
            var jP = p.iv.jM();
            if ( !! jP) {
                jP.bsn(bx, encodeURIComponent(U.ii(bHn)))
            }
        };
        p.iv.qs = function(bx) {
            var jP = p.iv.jM();
            if ( !! jP) {
                return U.bHx(decodeURIComponent(jP.bsm(bx)))
            }
        };
        p.iv.Nc = function() {
            var jP = p.iv.jM();
            if ( !! jP) {
                jP.bsj()
            }
        };
        p.iv.hz = function(bx) {
            var jP = p.iv.jM();
            if ( !! jP) {
                jP.bsk(bx)
            }
        };
        p.iv.kI = function(tq) {
            tq = tq || F;
            var jP, ed;
            jP = p.iv.jM();
            if ( !! jP) ed = jP.vY();
            if ( !! jP && !!ed) {
                tq()
            } else {
                window.setTimeout(this.kI.bHk(this, tq), 100)
            }
        };
        p.dC = C();
        p.dC.wE = bgn || p.iv.wE;
        p.dC.qs = bgo || p.iv.qs;
        p.dC.Nc = bgq || p.iv.Nc;
        p.dC.hz = bgr || p.iv.hz;
        p.dC.kI = bgs || p.iv.kI
    })()
})(); (function() {
    var p = P("loft.d"),
    bdX = "ck-hot",
    Ak = "ck-cmt",
    lj;
    p.up = C();
    lj = p.up.bi(P(N.ut).hx);
    lj.bvW = function(bIj, dA, dx, ci) {
        var bHn = this.et(bdX + bIj + ci);
        if ( !! bHn) {
            this.bh("onloadhotlist", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getPostHots", bIj, dA, dx, ci, this.bvV.bHk(this, bIj, ci))
        }
    };
    lj.bvV = function(bIj, ci, bHn) {
        if ( !! bHn) {
            this.gp(bdX + bIj + ci, bHn);
            this.bh("onloadhotlist", bHn)
        }
    };
    lj.bvU = function(bIj, dx, ci) {
        var bHn = this.et(Ak + bIj),
        Pp;
        if ( !! bHn) {
            Pp = bHn.slice(ci, ci + dx)
        }
        if ( !! Pp && !!Pp.length) {
            this.bh("onloadcmtlist", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getPostResponses", bIj, dx, ci, this.bvS.bHk(this, bIj, dx, ci))
        }
    };
    lj.bvS = function(bIj, dx, ci, bHn) {
        if ( !! bHn) {
            var eu = this.et(Ak + bIj) || [];
            eu = eu.concat(bHn);
            this.gp(Ak + bIj, eu);
            this.bh("onloadcmtlist", eu)
        }
    };
    lj.Ao = function(Z, bIj, dA, bQp, rs, rq) {
        var Po = {
            postId: bIj,
            blogId: dA,
            content: Z,
            replyToUserId: rs || 0,
            replyToResponseId: bQp || 0
        };
        J.br(location.dwr, "PostBean", "addPostResponse", Po, !!rq, this.bvR.bHk(this, bIj))
    };
    lj.bvR = function(bIj, bHn) {
        var bx = Ak + bIj,
        eu = this.et(bx) || [];
        eu.unshift(bHn);
        this.gp(bx, eu);
        this.bh("onaddcmt", bHn)
    };
    lj.dkf = function(Z, bIj, dA, bQp, rs, rq) {
        var Po = {
            postId: bIj,
            blogId: dA,
            content: Z,
            replyToUserId: rs || 0,
            replyToResponseId: bQp || 0
        };
        J.br(location.dwr, "PostBean", "addPostResponse", Po, !!rq, this.dkd.bHk(this, bIj))
    };
    lj.dkd = function(bIj, bHn) {
        this.bh("onaddcmt", bHn)
    };
    lj.Pm = function(sT, dR, bc) {
        if ( !! loft.c.cm && loft.c.cm.isEditor) {
            J.br(location.dwr, "PostBean", "removePostResponse4Editor", sT, dR, bc, false, this.bvO.bHk(this, dR))
        } else {
            J.br(location.dwr, "PostBean", "removePostResponse", sT, dR, bc, this.bvO.bHk(this, dR))
        }
    };
    lj.bvO = function(bIj, bHn) {
        if ( !! bHn) {
            var eu = this.et(Ak + bIj),
            Q = U.fO(eu,
            function(bo) {
                return bHn == bo.id
            });
            if (Q != -1) eu.splice(Q, 1);
            this.bh("ondelcmt", bHn, Q)
        }
    };
    lj.bfg = function(bIj, dA) {
        J.br(location.dwr, "PostBean", "like", bIj, dA, this.bh.bHk(this, "onlike", true))
    };
    lj.bfi = function(bIj, dA) {
        J.br(location.dwr, "PostBean", "unlike", bIj, dA, this.bh.bHk(this, "onlike", false))
    };
    lj.bvN = function(bIj, dA) {
        J.br(location.dwr, "PostBean", "removePost", bIj, dA, this.bh.bHk(this, "ondelete"))
    };
    lj.bvE = function(bIj, dA, ld) {
        J.br(location.dwr, "PostBean", "share", bIj, dA, this.bh.bHk(this, "onshare", true, ld))
    };
    lj.bvA = function(bIj, dA, ld) {
        J.br(location.dwr, "PostBean", "unShare", bIj, dA, this.bh.bHk(this, "onshare", false, ld))
    };
    lj.czH = function(bIj, dA) {
        J.br(location.dwr, "PostBean", "publishQueuePostNow", bIj, dA, this.bh.bHk(this, "oncontripass"))
    }
})(); (function() {
    var p = P("loft.d"),
    ex = "ck_tracklist",
    Pe = "ck_eventsids",
    bfu = "ck_eventid_userid_map",
    eN = 20,
    cny = 20,
    JU,
    Au,
    uM,
    lV,
    Pc,
    cqE,
    cVo;
    var cVp = function(bn) {
        if (!bn || !bn.length) return bn;
        var cVq = [];
        for (var i = 0; i < bn.length; i++) {
            if ( !! bn[i]) {
                cVq.push(bn[i])
            }
        }
        return cVq
    };
    p.bfJ = C();
    JU = p.bfJ.bi(P(N.ut).hx);
    JU.uP = function(cq, cqG) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            if (cq == 1) {
                cqG = cqG || "";
                J.br(location.dwr, "TrackBean", "getTrackItemListWithShareNew", false, cqG, this.nf.bHk(this, cq))
            } else {
                var Kh = this.et(Pe),
                qv = (cq - 1) * eN,
                ik;
                if ( !! Kh && Kh.length > qv) {
                    ik = Kh.slice(qv, qv + eN);
                    if ( !! ik && !!ik.length) {
                        var bvy = this.et(bfu);
                        var bfU = {};
                        for (var i = 0,
                        j = ik.length; i < j; i++) {
                            var Pb = bvy[ik[i]];
                            if ( !! Pb && Pb > 0) {
                                bfU[ik[i]] = Pb
                            }
                        }
                        J.br(location.dwr, "TrackBean", "getTrackItemWithShareListByEventIds", ik, bfU, this.nf.bHk(this, cq));
                        return
                    }
                }
                this.bh("ontracklistload", null)
            }
        }
    };
    JU.nf = function(cq, bHn) {
        loft.x.ccz(bHn);
        cq = cq || 1;
        if (!bHn || bHn.items && !bHn.items.length && bHn.eventsIds.length < cq * eN) {
            this.bh("ontracklistload", null, !!bHn);
            return
        }
        if (cq == 1) {
            bHn.items = cVp(bHn.items) || [];
            var sF = bHn.items.length || 0;
            if (sF > 0) {
                var cqJ = 0;
                for (var i = 0; i < 2 && i < sF; i++) {
                    if ( !! bHn.items[i]) {
                        if ( !! bHn.items[i].recomBlog) {
                            var dkv = bHn.items[i].recomBlogs;
                            cqJ++;
                            bHn.items[i].post = {
                                blogInfo: {
                                    bigAvaImg: "http://img.ph.126.net/yLjjLihk-Xtx-5xcQv32jg==/6631442699164011363.jpg",
                                    bigAvaUrl: "http://www.lofter.com/explore/?type=recommend"
                                },
                                publisherMainBlogInfo: {},
                                type: 6,
                                recomBlogs: dkv
                            };
                            this.cey = bHn.items[i]
                        } else if ( !! bHn.items[i].promote) {
                            cqJ++;
                            this.cez = bHn.items[i]
                        }
                    }
                }
                if (cqJ > 0) {
                    bHn.items.splice(0, cqJ)
                }
                if ( !! this.cez && bHn.items.length >= 4) {
                    bHn.items.splice(4, 0, this.cez);
                    this.cez = null
                }
                if ( !! this.cey && bHn.items.length >= 7) {
                    bHn.items.splice(7, 0, this.cey);
                    this.cey = null
                }
            }
            this.ceA = bHn.items.length || 0;
            this.gp(ex + cq, bHn.items || []);
            this.gp(Pe, bHn.eventsIds || []);
            this.gp(bfu, bHn.shareEventIdUserIdMap || {});
            this.bfW = bHn.eventsIds.length;
            var Pa = this.bfW > cq * eN;
            this.bh("ontracklistload", bHn.items || [], Pa)
        } else {
            bHn = cVp(bHn) || [];
            var cqK = this.ceA;
            this.ceA += bHn.length;
            if ( !! this.cez && this.ceA >= 4) {
                if (cqK < 5) {
                    bHn.splice(4 - cqK, 0, this.cez);
                    this.cez = null;
                    this.ceA++
                }
            }
            if ( !! this.cey && this.ceA >= 7) {
                if (cqK < 8) {
                    bHn.splice(7 - cqK, 0, this.cey);
                    this.cey = null;
                    this.ceA++
                }
            }
            this.gp(ex + cq, bHn || []);
            this.bh("ontracklistload", bHn || [], this.bfW > cq * eN)
        }
    };
    JU.Et = function() {
        return eN
    };
    p.bgc = C();
    Au = p.bgc.bi(P(N.ut).hx);
    Au.bq = function(bvx, bvw) {
        this.bHr();
        this.bgk = bvx || [];
        this.bvv = bvw || [];
        this.bgv = this.bgk.length
    };
    Au.uP = function(cq) {
        cq = cq || 2;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            var Kh = this.et(Pe),
            qv = (cq - 1) * eN,
            Ah,
            bgx;
            if (this.bgv > qv) {
                Ah = this.bgk.slice(qv, qv + eN);
                bgx = this.bvv.slice(qv, qv + eN);
                J.br(location.dwr, "TagBean", "getRecommendTagPost4GoogleAd", Ah, bgx, this.nf.bHk(this, cq));
                return
            }
            this.bh("ontracklistload", null)
        }
    };
    Au.nf = function(cq, bHn) {
        loft.x.ccz(bHn);
        cq = cq || 2;
        if (!bHn || bHn.items && !bHn.items.length) {
            this.bh("ontracklistload", null);
            return
        }
        this.gp(ex + cq, bHn || []);
        this.bh("ontracklistload", bHn || [], this.bgv > cq * eN)
    };
    Au.Et = function() {
        return eN
    };
    p.qe = C();
    lV = p.qe.bi(P(N.ut).hx);
    lV.bq = function(I) {
        I = I || O;
        this.bHr(I);
        this.er = I.tag || "";
        this.dJ = I.type || 0;
        this.bgC = I.first || "";
        this.bvu = I.recommType || "new";
        this.bvt = I.isrecommender || false;
        this.AB = I.rtagId || 0;
        this.bbp = I.rtagRank || 0;
        this.tO = I.targetBlogId || 0;
        this.chE = I.mjtag || false;
        this.cVV = I.mjPage;
        this.cVW = [0]
    };
    lV.dkq = function(bQc, chH, ca) {
        bQc = bQc || 0;
        var bMQ = bQc * 5 + 1;
        var bUJ = bQc * 5 + 5;
        chH = chH || this.bUI(bMQ);
        var ci = this.cqQ(bMQ);
        var dkp = chH * (bUJ - bMQ + 1);
        var cWb = this.et(ex + bMQ);
        if ( !! cWb && cWb.length > 0) {
            if (bUJ >= bMQ && !!ca && U.co(ca, "function")) {
                ca(bMQ, bUJ)
            }
            return
        }
        J.br(location.dwr, "TagBean", "search", this.er, this.dJ, this.bgC, this.bvu, this.bvt, this.tO, dkp, ci, this.bgM || 0,
        function(bMQ, bUJ, cBm) {
            if (!cBm || cBm.length <= 0) return;
            var dko = -1;
            for (var i = bMQ; i <= bUJ; i++) {
                var bHn = cBm.splice(0, chH);
                if ( !! bHn && bHn.length > 0) {
                    dko = i;
                    this.cWg(i, true, null, chH, bHn)
                } else {
                    break
                }
            }
            if (bUJ >= bMQ && !!ca && U.co(ca, "function")) {
                ca(bMQ, bUJ)
            }
        }.bHk(this, bMQ, bUJ))
    };
    lV.uP = function(cq, cqG, bQa, ca) {
        cq = cq || 1;
        var bHn = this.et(ex + cq),
        bLg = this.bUI(cq),
        ci = this.cqQ(cq);
        if ( !! bHn && !!bHn.length) {
            var bUF = false;
            if (bHn.length < bLg) {
                bUF = true
            }
            if ( !! ca && U.co(ca, "function")) ca(bUF, bQa);
            if (!bQa) this.bh("ontracklistload", bHn)
        } else {
            if ( !! this.chE) {
                ci = 200 * (cq - 1);
                J.br(location.dwr, "TagBeanWrap", "search", this.er, this.dJ, this.bgC, this.bvu, this.bvt, this.tO, 200, ci, this.bgM || 0, this.nf.bHk(this, cq, bQa, ca, bLg))
            } else {
                J.br(location.dwr, "TagBean", "search", this.er, this.dJ, this.bgC, this.bvu, this.bvt, this.tO, bLg, ci, this.bgM || 0, this.cWg.bHk(this, cq, bQa, ca, bLg))
            }
            return
        }
    };
    lV.crd = function(cq) {
        var ci = 200 * (cq - 1),
        bYs = 0;
        if (cq > 25) {
            bYs = this.cVW[cq - 1];
            ci = 200
        }
        J.br(location.dwr, "TagBeanWrap", "search", this.er, this.dJ, this.bgC, this.bvu, this.bvt, this.tO, 200, ci, bYs || 0, this.bPZ.bHk(this, cq))
    };
    lV.bPZ = function(cq, bHn) {
        loft.x.ccz(bHn);
        cq = cq || 1;
        if (!bHn || !bHn.length) {
            this.bh("ontracklistload", bHn);
            return
        }
        var Q = bHn.length;
        if (cq > 24) {
            while (--Q >= 0) {
                if ( !! bHn[Q]) {
                    this.cVW[cq] = bHn[Q].trackItem.post.publishTime;
                    break
                }
            }
        }
        this.bh("ontracklistload", bHn || [])
    };
    lV.nf = function(cq, bHn) {
        loft.x.ccz(bHn);
        cq = cq || 1;
        if (!bHn || !bHn.length) {
            this.bh("ontracklistload", bHn);
            return
        }
        this.gp(ex + cq, bHn || []);
        var bGd, Q = bHn.length;
        this.bgM = 0;
        if ( !! this.chE) {
            while (--Q >= 0) {
                if ( !! bHn[Q]) {
                    this.bgM = bHn[Q].trackItem.post.publishTime;
                    break
                }
            }
        } else {
            while (--Q >= 0) {
                if ( !! bHn[Q]) {
                    this.bgM = bHn[Q].post.publishTime;
                    break
                }
            }
        }
        this.bh("ontracklistload", bHn || [])
    };
    lV.cWg = function(cq, bQa, ca, bLg, bHn) {
        loft.x.ccz(bHn);
        cq = cq || 1;
        if (!bHn || !bHn.length) {
            if ( !! ca && U.co(ca, "function")) {
                ca(true, bQa, 0)
            }
            if (!bQa) this.bh("ontracklistload", bHn);
            return
        }
        this.gp(ex + cq, bHn || []);
        var bGd, Q = bHn.length;
        this.bgM = 0;
        if ( !! this.chE) {
            while (--Q >= 0) {
                if ( !! bHn[Q]) {
                    this.bgM = bHn[Q].trackItem.post.publishTime;
                    break
                }
            }
        } else {
            while (--Q >= 0) {
                if ( !! bHn[Q]) {
                    this.bgM = bHn[Q].post.publishTime;
                    break
                }
            }
        }
        var bUF = false;
        if (bHn.length < bLg) {
            bUF = true
        }
        if ( !! ca && U.co(ca, "function")) {
            var tX = (bHn[0] || O).totalCount || 0;
            ca(bUF, bQa, tX)
        }
        if (!bQa) this.bh("ontracklistload", bHn || [])
    };
    lV.bUI = function(cq) {
        return cq === 1 ? cny: eN
    };
    lV.cqQ = function(cq) {
        var ci = 0,
        i = 1;
        for (; i <= cq - 1; i++) {
            ci += this.bUI(i)
        }
        return ci
    };
    lV.Et = function(cq) {
        cq = cq || 0;
        var bLg = this.bUI(cq);
        return !! this.bgC ? bLg - 1 : bLg
    };
    lV.bvr = function(df) {
        J.br(location.dwr, "TagBean", "favTag", df, this.bh.bHk(this, "onfavtag"))
    };
    lV.bvq = function(bvp) {
        J.br(location.dwr, "TagBean", "unFavTag", bvp, this.bh.bHk(this, "unfavtag"))
    };
    lV.bgW = function(dR, bc, bha) {
        J.br(location.dwr, "TagBean", "addRecommendPost", this.AB, dR, bc, !!bha, this.bh.bHk(this, "onrecommend", true, dR, this.er, !!bha))
    };
    lV.bvm = function(yz) {
        J.br(location.dwr, "TagBean", "addRecommendPostByPermalink", this.AB, yz, this.bh.bHk(this, "onrecommendpermalink"))
    };
    lV.bhl = function(dR, bc, Ui) {
        J.br(location.dwr, "TagBean", "removeRecommendPost", this.AB, dR, bc, !!Ui, this.bh.bHk(this, "onrecommend", false, dR, this.er, !!Ui))
    };
    lV.dkn = function(dkl, yz) {
        J.br(location.dwr, "PostBean", "addTagInPost", dkl, yz, this.bh.bHk(this, "onaddtaginpost"))
    };
    lV.bvl = function(dx) {
        if ( !! this.AB) {
            J.br(location.dwr, "TagBean", "getTagEditors", this.AB, this.bh.bHk(this, "onloadeditors"))
        } else {
            J.br(location.dwr, "TagBean", "getCommonTagExcellentAuthors", this.er, this.bh.bHk(this, "onloadeditors"))
        }
    };
    lV.chZ = function(dR, bc) {
        J.br(location.dwr, "TagBean", "degradePostTag", this.er, dR, bc, this.bh.bHk(this, "ondegradepost", dR, this.er))
    };
    lV.bvk = function(dR, bc) {
        J.br(location.dwr, "TagBean", "filterPostTag", this.er, dR, bc, this.bh.bHk(this, "onfilterpost", dR))
    };
    lV.bvi = function(bc) {
        J.br(location.dwr, "TagBean", "addBlogTagForbid", bc, this.er, this.bh.bHk(this, "onforbidblog", bc))
    };
    p.Uo = C();
    Pc = p.Uo.bi(p.qe);
    Pc.bq = function(I) {
        this.bHr(I);
        this.bI = I.blogId || 0
    };
    Pc.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getPosts", this.bI, eN, eN * (cq - 1), this.nf.bHk(this, cq));
            return
        }
    };
    p.Uq = C();
    Us = p.Uq.bi(p.qe);
    Us.bq = function(I) {
        this.bHr(I);
        this.bI = I.blogId || 0
    };
    Us.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getDrafts", this.bI, eN, eN * (cq - 1), this.nf.bHk(this, cq));
            return
        }
    };
    p.Ut = C();
    Uw = p.Ut.bi(p.qe);
    Uw.bq = function(I) {
        this.bHr(I);
        this.bI = I.blogId || 0
    };
    Uw.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getContributes", this.bI, eN, eN * (cq - 1), this.nf.bHk(this, cq));
            return
        }
    };
    p.cHU = C();
    cAv = p.cHU.bi(p.qe);
    cAv.bq = function(I) {
        this.bHr(I);
        this.bI = I.blogId || 0
    };
    cAv.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getQueuePostTrackItemList", this.bI, eN, eN * (cq - 1), this.nf.bHk(this, cq));
            return
        }
    };
    cAv.dkk = function(dA, dkj, dki, fC) {
        J.br(location.dwr, "PostBean", "updateQueuePostSetting", dA, dkj, dki, fC, this.bh.bHk(this, "cbsettime"))
    };
    p.OX = C();
    OW = p.OX.bi(p.qe);
    OW.bq = function(I) {
        this.bHr(I)
    };
    OW.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getFavTrackItem", eN, eN * (cq - 1), this.nf.bHk(this, cq));
            return
        }
    };
    OW.nf = function(cq, bHn) {
        if ( !! bHn && bHn.length > 0) for (var l = bHn.length; l--; !! bHn[l] && (bHn[l].liked = true));
        p.OX.bw.nf.call(this, cq, bHn)
    };
    p.EY = C();
    uM = p.EY.bi(P(N.fw).bLr);
    uM.kB = function(I, ca) {
        var UC = this.et("_$FCID$_" + I.cyid);
        if ( !! UC) {
            this.UE(ca, I.cyid, UC)
        } else {
            J.br(location.dwr, "BlogBean", "getGoodBlogsByCategory", I.cyid, this.UE.bHk(this, ca, I.cyid))
        }
    };
    uM.pQ = function(I, ca) {
        ca(I.allcount)
    };
    uM.UE = function(ca, bt, bn) {
        this.gp("_$FCID$_" + bt, bn);
        ca(bn)
    };
    uM.OU = function() {
        return this.et("_$FIDS$_") || {}
    };
    uM.bvh = function() {
        return this.et("_$FIDSC$_") || 0
    };
    uM.bvg = function(bc, bvf) {
        var cp = this.et("_$FIDS$_"),
        fC = this.et("_$FIDSC$_"),
        bg;
        if (!cp) {
            cp = {};
            this.gp("_$FIDS$_", cp)
        }
        if (!fC) {
            fC = 0;
            this.gp("_$FIDSC$_", fC)
        }
        bg = cp[bc];
        if ( !! bvf) {
            if (!bg) {
                cp[bc] = "1";
                fC++
            }
        } else {
            if ( !! bg) {
                cp[bc] = null;
                fC--
            }
        }
        this.gp("_$FIDS$_", cp);
        this.gp("_$FIDSC$_", fC)
    };
    p.cAm = C();
    cqE = p.cAm.bi(p.qe);
    cVo = p.cAm.bw;
    cqE.bq = function(I) {
        this.bHr(I);
        this.bI = I.blogId || 0
    };
    cqE.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "PostBean", "getAskList", this.bI, eN, eN * (cq - 1), this.nf.bHk(this, cq));
            return
        }
    };
    cqE.nf = function(cq, bHn) {
        cVo.nf.call(this, cq, bHn)
    };
    p.cIo = C();
    cAl = p.cIo.bi(p.qe);
    cAl.bq = function(I) {
        this.bHr(I);
        this.Am = I.userId;
        this.dkh = I.fpost;
        this.dkg = I.dwrMethod
    };
    cAl.uP = function(cq) {
        cq = cq || 1;
        var bHn = this.et(ex + cq);
        if ( !! bHn && !!bHn.length) {
            this.bh("ontracklistload", bHn)
        } else {
            J.br(location.dwr, "BlogBean", this.dkg, this.Am, eN, eN * (cq - 1), this.dkh, this.nf.bHk(this, cq));
            return
        }
    };
    cAl.nf = function(cq, bHn) {
        p.OX.bw.nf.call(this, cq, bHn)
    }
})(); (function() {
    var p = P("loft.d"),
    UL = "uf",
    fK = "cmt",
    vB;
    p.AS = C();
    vB = p.AS.bi(P(N.ut).hx);
    vB.bq = function(I) {
        I = I || O;
        this.bHr(I);
        this.dkc = I.followFrom || ""
    };
    vB.OS = function(bc) {
        J.br(location.dwr, "UserBean", "followBlogWithFrom", bc, this.dkc, this.bh.bHk(this, "onfollow", bc, true))
    };
    vB.dkb = function(bc, bHv, bIC, by) {
        J.br(location.dwr, "UserBean", "followBlog", bc, bHv, bIC, by, this.bh.bHk(this, "onfollow", bc, true))
    };
    vB.OP = function(bc) {
        J.br(location.dwr, "UserBean", "unFollowBlog", bc, this.bh.bHk(this, "unfollow", bc, false))
    };
    vB.bGe = function(bc) {
        var vF = this.et(UL + bc);
        if ( !! vF) this.bh("ongetuf", vF);
        else J.br(location.dwr, "UserBean", "getUserFollowing", bc, this.bvd.bHk(this))
    };
    vB.bvd = function(vF) {
        if ( !! vF) {
            this.gp(UL + vF.blogId, vF);
            this.bh("ongetuf", vF)
        }
    };
    vB.bvb = function(bc) {
        var bu = this.et(fK + bc);
        if ( !! bu) {
            this.bh("ongetcancomment", bu)
        } else J.br(location.dwr, "UserBean", "canComment", bc, this.bva.bHk(this, bc))
    };
    vB.bva = function(bc, bu) {
        if ( !! bu) {
            this.gp(fK + bc, bu);
            this.bh("ongetcancomment", bu)
        }
    }
})(); (function() {
    var p = P("loft.d"),
    g = P("loft.g"),
    DP;
    p.bgU = C();
    DP = p.bgU.bi(P(N.ut).hx);
    DP.bsd = function(bHm) {
        J.gf(location.dwr, "GuideBean", "guidedAvator")
    };
    DP.brZ = function(bHm) {
        J.gf(location.dwr, "GuideBean", "guidedPost")
    };
    DP.brW = function(bHm) {
        J.gf(location.dwr, "GuideBean", "guidedBlogSetting")
    };
    DP.brO = function(di, bHm) {
        J.gf(location.dwr, "GuideBean", "guidedDashboard", di)
    };
    DP.dhm = function(di, bHm) {
        if ( !! bHm) {
            V.bb(bHm)
        }
        J.gf(location.dwr, "GuideBean", "guidedNewWebFrame", di);
        if (di == 1) {
            var cKu = E.be("newguide-1"),
            cpE = E.be("newguide-2");
            cKu.style.opacity = 0;
            cKu.style.filter = "alpha(opacity=0)";
            cpE.style.display = "";
            window.setTimeout(function() {
                document.getElementById("newguide-1").style.display = "none";
                E.be("newguide-2").style.opacity = 1;
                E.be("newguide-2").style.filter = "alpha(opacity=100)"
            },
            "400")
        } else if (di == 2) {
            var cpE = E.be("newguide-2");
            cpE.style.opacity = 0;
            cpE.style.filter = "alpha(opacity=0)";
            window.setTimeout('document.getElementById("newguide-2").style.display="none"', "300")
        }
    };
    var bv = new p.bgU;
    g.g1 = bv.bsd.bHk(null);
    g.g2 = bv.brZ.bHk(null);
    g.g3 = bv.brW.bHk(null);
    g.g4 = bv.brO.bHk(null);
    g.g5 = bv.dhm.bHk(null)
})(); (function() {
    var p = P("loft.w.suggest"),
    cgV,
    bMn,
    caz,
    eR,
    ML = "skey_";
    p.cQW = C();
    cgV = p.cQW.bi(P(N.ut).hx);
    cgV.brm = function(bx, dx) {
        if (bx == "" || bx == undefined) return;
        var bS = this.et(ML + bx);
        if ( !! bS) {
            this.bh("onsearchsucc", bx, bS == "empty" ? null: bS);
            return
        }
        J.br(location.dwr, "MentionBean", "search", bx, 30, this.hm.bHk(this, bx))
    };
    cgV.dtK = function() {
        var bx = "";
        var bS = this.et(ML + bx);
        if ( !! bS) {
            this.bh("onsearchsucc", bx, bS == "empty" ? null: bS);
            return
        }
        J.br(location.dwr, "MentionBean", "getLastMentions", this.hm.bHk(this, bx))
    };
    cgV.hm = function(bx, bS) {
        if ( !! bS) {
            this.gp(ML + bx, bS)
        } else {
            this.gp(ML + bx, "empty")
        }
        this.bh("onsearchsucc", bx, bS)
    };
    cgV.cK = function() {
        this.iJ("onsearchsucc")
    };
    p.cEJ = C();
    bMn = p.cEJ.bi(P(N.ui).gB, true);
    bMn.cM = function() {
        return ""
    };
    bMn.cU = function() {
        return "m-ssch2"
    };
    bMn.bz = function(I) {
        I.option = p.cEL;
        this.bZj = I.itemNum || 6;
        this.dyp = I.scrollPos || 2;
        this.cpK = I.iframeId;
        this.dtJ = I.canBlurHide;
        if ( !! this.cpK) {
            V.bHo(document.getElementById(this.cpK).contentDocument, "click", this.cpF)
        }
        p.cEJ.bw.bz.call(this, I)
    };
    bMn.xW = function(bn, Q) {
        if (!bn || !bn.length) {
            this.bKg.style.height = 0;
            this.bKg.style.visibility = "hidden";
            return
        }
        this.cT = this.SJ.bG(bn, this.fS, this.cP);
        for (var i = 0; i < this.cT.length; i++) {
            this.cT[i].Y.className = "atitm"
        }
        if ( !! this.cT[Q]) {
            this.bC = 0;
            this.cT[this.bC].gg(true)
        }
        this.bKg.style.height = (this.cT.length > this.bZj ? this.bZj: this.cT.length) * 30 + "px";
        this.ciU = {
            scrollNode: this.bKg,
            scrollList: this.fS,
            vSlideWayNode: this.bMd,
            hSlideWayNode: this.bNk,
            vSlideBtn: this.bLI,
            hSlideBtn: this.bYp,
            minBtnLength: this.bZj,
            scrollType: "v",
            hasAnimateMove: true
        };
        if (!this.bMX) {
            this.bMX = loft.w.ciS.bG(this.ciU)
        } else {
            if (this.cT.length <= this.bZj) {
                this.fS.style.minHeight = this.cT.length * 30 + "px"
            }
            this.bMX.bHC(this.ciU)
        }
        this.bKg.style.visibility = "visible";
        this.fS.style.visibility = "visible"
    };
    bMn.cc = function() {
        this.Y = E.be("atinput");
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.cEP = bHl[i++];
        this.bU = bHl[i++];
        this.bKg = bHl[i++];
        this.fS = bHl[i++];
        this.bMd = bHl[i++];
        this.bLI = bHl[i++];
        this.bNk = bHl[i++];
        this.bYp = bHl[i++];
        this.bLd = false;
        this.cpF = this.dtI.bHk(this);
        this.dtH = this.mW.bHk(this);
        V.bHo(this.Y, "click", V.bb.bHk(V));
        V.bHo(this.bU, "click", V.bb.bHk(V));
        V.bHo(document, "click", this.cpF);
        V.bHo(this.cEP, "click",
        function(bHm) {
            V.bb(bHm);
            this.bU.focus()
        }.bHk(this));
        V.bHo(this.bU, "input", this.hu.bHk(this));
        V.bHo(this.bU, "focus", this.dX.bHk(this, true));
        V.bHo(this.bU, "blur", this.dX.bHk(this, false));
        V.bHo(this.bU, "keydown", this.dtH);
        if ( !! B.dh) V.bHo(this.bU, "keypress", this.cjY.bHk(this));
        if (B.qi) {
            V.bHo(this.Y, "DOMMouseScroll", this.but.bHk(this))
        } else {
            V.bHo(this.Y, "mousewheel", this.but.bHk(this))
        }
        this.cRq = true
    };
    bMn.but = function(bHm) {
        if (!bHm || this.bMd.style.display === "none") return;
        V.bb(bHm);
        var bLJ;
        var bWB = 1;
        if ( !! bHm.wheelDelta && !!this.bMX) {
            if (bHm.wheelDelta > 0) {
                bLJ = {
                    deltaTop: -bWB
                }
            } else {
                bLJ = {
                    deltaTop: bWB
                }
            }
        } else if ( !! bHm.detail) {
            if (bHm.detail > 0) {
                bLJ = {
                    deltaTop: bWB
                }
            } else {
                bLJ = {
                    deltaTop: -bWB
                }
            }
        }
        if ( !! bLJ) {
            this.bMX.cQe(bLJ)
        }
    };
    bMn.dtI = function(bHm) {
        if (this.Y.style.visibility === "hidden") return;
        V.bb(bHm);
        this.cgX();
        this.bh("onselect", "atbodyclick")
    };
    bMn.dX = function(en, bHm) {
        if ( !! en) {
            this.bLd = true;
            this.hu()
        } else {
            this.bLd = false;
            if ( !! this.dtJ) {
                window.setTimeout(function(bHm) {
                    if ( !! this.cRq) {
                        this.cgX();
                        this.bh("onselect", "atbodyclick")
                    }
                }.bHk(this), 300)
            }
        }
    };
    bMn.xS = function() {
        this.lN = false;
        V.iJ(document, "click", this.cpF);
        if ( !! this.cpK) {
            V.iJ(document.getElementById(this.cpK).contentDocument, "click", this.cpF)
        }
        V.bJv(this.bU)
    };
    var Oq = [38, 40, 13, 27, 8];
    bMn.mW = function(bHm) {
        if (this.Y.style.visibility !== "visible") return;
        var X = V.be(bHm);
        if (X === this.bU) {
            var rB = bHm && (bHm.which || bHm.keyCode),
            Q = U.fO(Oq, rB);
            if (Q == -1) {
                return
            }
            switch (Q) {
            case 0:
                if ( !! this.bLd && this.fS.style.visibility === "visible") {
                    V.bb(bHm);
                    this.pz( - 1, bHm)
                }
                break;
            case 1:
                if ( !! this.bLd && this.fS.style.visibility === "visible") {
                    V.bb(bHm);
                    this.pz(1, bHm)
                }
                break;
            case 2:
                if ( !! this.bLd && this.fS.style.visibility === "visible") {
                    V.bb(bHm);
                    this.cEX = true;
                    this.GQ(bHm)
                }
                break;
            case 3:
                if ( !! this.bLd) {
                    V.bb(bHm);
                    this.cgX();
                    this.bh("onselect", "atbodyclick")
                }
                break;
            case 4:
                if ( !! this.bLd && U.bA(this.bU.value) === "") {
                    V.bb(bHm);
                    this.cgX();
                    this.bh("onselect", "atbodyclick")
                }
                break
            }
        }
    };
    bMn.cjY = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode);
        if (rB == 13 && !!this.bLd) {
            V.bb(bHm);
            this.cEX = true;
            this.GQ(bHm)
        }
        if (rB == 27 && !!this.bLd) {
            V.bb(bHm);
            this.cgX();
            this.bh("onselect", "atbodyclick")
        }
    };
    bMn.hu = function() {
        var bg = U.bA(this.bU.value);
        if (bg === "") {
            this.cEP.style.display = ""
        } else {
            this.cEP.style.display = "none"
        }
        this.he();
        this.bh("onchange", bg)
    };
    bMn.SK = function(bHn) {
        var cRs = true;
        if ( !! this.cEX) {
            cRs = false;
            this.cEX = false
        }
        this.he();
        this.cgX();
        this.cRq = false;
        this.bh("onselect", bHn, cRs)
    };
    bMn.pz = function(fW) {
        var cRu = this.bC + fW;
        if (this.cT.length > this.bZj && (cRu < 0 || cRu >= this.cT.length)) {
            return
        }
        var bo = this.cT[this.bC],
        dn = 0 - parseInt(this.fS.style.top.replace("px", "")),
        caH = Math.floor(dn / 30),
        cRx = caH + this.bZj - 1,
        fe = this.cT.length,
        dyq = [caH, cRx];
        if (fW === 1 && this.bC === cRx && this.bC !== fe - 1) {
            this.fS.style.top = 0 - (caH + 1) * 30 + "px";
            this.bMX.cHR(caH + 1, fe + 10 - this.bZj)
        } else if (fW === -1 && this.bC === caH && this.bC !== 0) {
            this.fS.style.top = 0 - (caH - 1) * 30 + "px";
            this.bMX.cHR(caH - 1, fe + 10 - this.bZj)
        }
        if ( !! bo) bo.gg(false);
        this.bC = (this.bC + fW) % this.cT.length;
        if (this.bC < 0) this.bC = this.cT.length - 1;
        var bo = this.cT[this.bC];
        if ( !! bo) bo.gg(true, 2)
    };
    bMn.bgH = function(Q) {
        return
    };
    bMn.he = function(MN) {
        this.fS.style.visibility = "hidden";
        this.cT = this.SJ.db(this.cT)
    };
    bMn.cgX = function() {
        this.bMd.style.display = "none";
        this.fS.style.minHeight = 0
    };
    p.cEL = C();
    caz = p.cEL.bi(P(N.ut).fc, true);
    var Di = E.gD('<span class="atitm"><span class="w-img2"><img class="utag" src="http://l.bst.126.net/rsc/img/ava/30.png"></span><span class="name f-thide utag">名称</span></span>');
    caz.bq = function() {
        this.bHr(Di);
        var bHl = E.bj(this.Y, "utag");
        this.IF = bHl[0];
        this.fz = bHl[1];
        V.bHo(this.Y, "click", this.rF.bHk(this));
        E.fy(this.Y, "c-hover", true)
    };
    caz.ce = function(bHn) {
        p.cEL.bw.ce.call(this, bHn);
        this.gg(false);
        this.IF.src = bHn.avator || "http://l.bst.126.net/rsc/img/ava/30.png";
        this.fz.innerHTML = U.ew(bHn.nickName);
        this.bHq = bHn
    };
    caz.bHC = function(I) {
        this.bHo("onclick", I.onclick || F)
    };
    caz.rF = function(bHm) {
        V.bb(bHm);
        this.bh("onclick", this.bHq)
    };
    caz.gg = function(hU, pN) {
        hU ? E.ba(this.Y, "j-hover") : E.bf(this.Y, "j-hover")
    };
    caz.cF = function() {
        return this.bHq
    }
})(); (function() {
    var p = P("loft.w"),
    cgV,
    bNn,
    bMn,
    dtE = '<div class="inputNode"><label class="xtag">想用@提到谁？</label><input id="atinputb" class="input xtag"></div><div class="scrollNode xtag" style="height: 60px; visibility: hidden;"><div class="result xtag" style="visibility: hidden; position: absolute; min-width: 167px; min-height: 0px; top: 0px;"></div><div class="vSlideWayNode xtag" style="visibility: hidden; display: none; height: 180px; width: 6px;"><div hidefocus="true" class="vSlideBtn xtag" style="top: 0px; left: 0px;">&nbsp;</div></div><div class="hSlideWayNode xtag" style="visibility: hidden; display: block; width: 173px; height: 17px;"><div hidefocus="true" class="hSlideBtn xtag">&nbsp;</div></div></div><div id="atshadow" class="shadow"></div>';
    p.caN = C();
    bNn = p.caN.bi(P(N.ut).gY);
    bNn.bq = function(bl, I) {
        var I = I || {};
        this.gF = I;
        this.gF.linkColorClass = "s-fc2";
        this.xI = window;
        if ( !! I.iframeId) {
            this.xI = document.getElementById(I.iframeId).contentWindow
        }
        var dyr = loft || this.xI.loft,
        dtD = !!loft.g ? !!loft.g.noAt: false;
        if (dtD === true) {
            return
        }
        this.bTX = I.textBody;
        if ( !! I.isInLayer) {
            this.cpu = I.isInLayer;
            E.hE(E.be("atinput"));
            this.cSm = E.be(I.layerId);
            this.bPh = document.createElement("a");
            this.bPh.className = "m-at";
            this.bPh.id = "atinput";
            this.bPh.innerHTML = dtE;
            this.cSm.appendChild(this.bPh)
        } else {
            this.bPh = E.be("atinput")
        }
        this.bro = new loft.w.suggest.cQW({
            onsearchsucc: this.brn.bHk(this)
        });
        this.eH = loft.w.suggest.cEJ.bG(bl, {
            canBlurHide: I.canBlurHide || true,
            scrollPos: I.scrollPos || 2,
            itemNum: I.itemNum,
            iframeId: I.iframeId || "",
            onselect: this.qu.bHk(this),
            onchange: this.hu.bHk(this),
            onenter: this.SI.bHk(this)
        });
        this.cSD = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/) ? true: false;
        this.dtB(I)
    };
    bNn.dys = function() {
        var bIW = this.xI.getSelection ? this.xI.getSelection() : document.selection,
        hy = bIW.createRange ? bIW.createRange() : bIW.getRangeAt(0),
        cSS = true,
        czQ = this.xI.getSelection ? bIW.anchorNode.parentNode.tagName.toUpperCase() : hy.parentElement().nodeName.toUpperCase();
        if (czQ === "A") {
            cSS = false
        }
        return cSS
    };
    bNn.dtB = function(I) {
        this.cSU = this.dtA(this.bTX);
        this.dtz();
        this.bMq = E.bj(this.bTX, "test")[0];
        if ( !! this.cpu) {
            var ci = this.dtx(this.bMq, this.cSm),
            cN = !!this.cpq ? 10 : 22,
            caV = ci.top,
            caW = ci.left + cN
        } else {
            this.fl = this.YL(this.bMq);
            var cN = !!this.cpq ? 10 : 22,
            cFc = {
                top: 0,
                left: 0
            },
            caW,
            caV;
            if ( !! I.iframeId) {
                cFc = this.YL(document.getElementById(I.iframeId));
                if (this.fl.scrollTop > 0) {
                    this.fl.top = this.fl.top - this.fl.scrollTop
                }
            }
            caV = this.fl.top + cFc.top;
            caW = this.fl.left + cFc.left + cN;
            if ( !! this.gF.canAutoSetInputPos) {
                var by = 0,
                dyt = {
                    top: caV,
                    left: caW
                },
                cTt = {
                    top: caV + 175,
                    left: caW + 30 * this.gF.itemNum
                },
                cTu = {
                    width: document.body.offsetWidth,
                    height: document.body.offsetHeight
                };
                if (cTt.left > cTu.width) {
                    by = by + 1;
                    caW = caW - 2 * cN - 170
                }
                if (cTt.top > cTu.height) {
                    by = by + 2;
                    caV = caV
                }
            }
        }
        E.be("atshadow").style.display = !!I.isSdHide ? "none": "";
        this.bPh.style.top = caV + "px";
        this.bPh.style.left = caW + "px";
        this.bPh.style.visibility = "visible";
        E.be("atinputb").focus();
        this.cTz = this.dtw.bHk(this)
    };
    bNn.dtw = function(bHm) {
        if (!this.bMq) return;
        var rB = bHm && (bHm.which || bHm.keyCode);
        if (rB === 8) {
            window.setTimeout(function() {
                if (this.bMq.innerText.length === this.dtv.length - 1) {
                    if ( !! this.cSD) {
                        this.bTX.focus();
                        var selection = this.xI.getSelection ? this.xI.getSelection() : document.selection;
                        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
                        if ( !! this.bZk) {
                            range.setEndAfter(this.bZk);
                            range.setStartAfter(this.bZk);
                            selection.removeAllRanges();
                            selection.addRange(range)
                        }
                    }
                    E.hE(this.bMq);
                    if (!B.da) {
                        this.cbb.nodeValue = this.cbb.nodeValue.replace(/^\s/, "");
                        if (!this.cSD) {
                            this.bZk.nodeValue = this.bZk.nodeValue.replace(/\s$/, "")
                        }
                    }
                    if (B.qi && this.bTX.innerHTML === "") {
                        this.bTX.innerHTML = " "
                    }
                    V.iJ(this.bTX, "keydown", this.cTz);
                    this.bMq = null;
                    this.gF.cbDelTag()
                }
            }.bHk(this), 40)
        }
        this.dtv = this.bMq.innerText
    };
    bNn.SI = function() {
        return
    };
    bNn.hu = function(bg) {
        if (loft.c.cm.userId <= 0) return;
        this.eH.xW([], 0);
        if (bg === "") {
            window.setTimeout(function() {
                this.bro.dtK()
            }.bHk(this), 100)
        } else {
            window.setTimeout(function() {
                this.bro.brm(bg, 10)
            }.bHk(this), 100)
        }
    };
    bNn.brn = function(bx, bn) {
        var bg = U.bA(this.eH.cF());
        if ( !! bn && !!bn.length && bx === bg) {
            var bu = [],
            i = 0,
            l = bn.length;
            this.eH.he();
            this.eH.xW(bn, 0)
        } else if (bx === bg) {
            this.eH.he();
            this.eH.xW([], 0)
        }
    };
    bNn.qu = function(bHn, fW) {
        if (this.bPh.style.visibility === "hidden" || !this.bPh) {
            return
        }
        if (bHn === "atbodyclick") {
            if (!this.bMq) {
                this.bMq = E.bj(this.bTX, "test")[0]
            }
            E.hE(this.bMq);
            if ( !! this.cbb && !!this.bZk) {
                this.cbb.nodeValue = "@";
                this.bZk.nodeValue = ""
            }
            this.bMq = null;
            this.cTC(false)
        } else {
            this.bHq = bHn;
            if ( !! this.cpq) {
                this.cpq.text = ""
            }
            this.bMq.href = "http://www.lofter.com/mentionredirect.do?blogId=" + bHn.blogId;
            this.bMq.innerHTML = "@" + U.ew(bHn.nickName);
            this.bMq.setAttribute("loftermentionblogId", bHn.blogId + "");
            this.bMq.target = "_blank";
            V.bHo(this.bTX, "keydown", this.cTz);
            this.cTC(fW)
        }
    };
    bNn.cTC = function(fW) {
        E.bf(this.bMq, "test");
        this.gF.cbDelTag();
        this.bPh.children[1].style.visibility = "hidden";
        this.bPh.style.visibility = "hidden";
        this.bPh.style.top = "-150px";
        this.bPh.style.left = "-150px";
        E.be("atinputb").value = "";
        this.dtu(fW);
        this.bro.cK();
        this.eH.cK();
        if (this.cpu) {
            E.hE(this.bPh)
        }
    };
    bNn.dtu = function(fW) {
        this.bTX.focus();
        var selection = this.xI.getSelection ? this.xI.getSelection() : document.selection;
        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        if ( !! this.cbb && !!this.bZk) {
            range.setEndAfter(this.cbb);
            range.setStartAfter(this.cbb);
            selection.removeAllRanges();
            selection.addRange(range)
        } else {
            if (!fW || B.Ud === "8.0") {
                var bTs = this.cSU.index;
                if ( !! this.bMq) {
                    bTs = bTs + this.bMq.innerText.length
                }
                range.moveStart("character", bTs);
                range.select()
            } else {
                range.collapse(false);
                var bTs = 0 - this.cSU.last;
                range.moveStart("character", bTs);
                range.moveEnd("character", bTs);
                range.select()
            }
        }
    };
    bNn.dyu = function() {
        if ( !! this.bMq && !!this.bHq.blogId) {}
    };
    bNn.YL = function(elem) {
        var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement;
        var clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var top = box.top + (self.pageYOffset || docElem.scrollTop) - clientTop,
        left = box.left + (self.pageXOffset || docElem.scrollLeft) - clientLeft;
        return {
            left: left,
            top: top,
            right: left + box.width,
            bottom: top + box.height,
            scrollTop: self.pageYOffset || docElem.scrollTop
        }
    };
    bNn.dtx = function(elem, pelem) {
        var box = elem.getBoundingClientRect(),
        pbox = pelem.getBoundingClientRect();
        return {
            left: box.left - pbox.left,
            top: box.top - pbox.top
        }
    };
    bNn.dtA = function(element) {
        var Q = 0,
        cgZ, bTs = 0;
        if (document.selection) {
            element.focus();
            cgZ = document.selection.createRange();
            cgZ.moveStart("character", -element.innerText.length);
            var jd = cgZ.text;
            for (var i = 0; i < element.innerText.length; i++) {
                if (element.innerText.substring(0, i + 1) == jd.substring(jd.length - i - 1, jd.length)) {
                    Q = i + 1
                }
            }
            bTs = element.innerText.length - Q
        } else {
            var bIW = this.xI.getSelection(),
            dtt = bIW.anchorNode.parentNode.tagName,
            bfd = bIW.anchorOffset,
            bZm = bIW.anchorNode.parentNode.previousSibling,
            tM = "";
            if (dtt == element.tagName) {
                while (bZm != null) {
                    tM += bZm.textContent;
                    bZm = bZm.previousSibling;
                    Q = tM.trim().length + bfd
                }
            } else {
                while (bZm != null) {
                    tM += bZm.textContent;
                    bZm = bZm.previousSibling
                }
                Q = tM.trim().length + bfd
            }
            this.dyv = this.xI.getSelection().baseNode
        }
        return {
            index: Q,
            last: bTs
        }
    };
    bNn.dtz = function() {
        this.bTX.focus();
        var bIW = this.xI.getSelection ? this.xI.getSelection() : document.selection;
        var hy = bIW.createRange ? bIW.createRange() : bIW.getRangeAt(0);
        if (!this.xI.getSelection) {
            var dtq = !!this.gF.linkColorClass ? '<a href="#" class="test f-atbox ' + this.gF.linkColorClass + '">&nbsp;</a>&nbsp;': '<a href="#" class="test f-atbox">&nbsp;</a>&nbsp;';
            var cgZ = bIW.createRange();
            cgZ.moveStart("character", -1);
            this.cpq = cgZ;
            hy.pasteHTML(dtq);
            hy.collapse(false);
            hy.select()
        } else {
            var cha, cnb;
            var cUA = !!this.gF.linkColorClass ? '&nbsp;<a href="#" class="test f-atbox ' + this.gF.linkColorClass + '">@</a>&nbsp;': '&nbsp;<a href="#" class="test f-atbox">@</a>&nbsp;';
            if ( !! hy.createContextualFragment) {
                cha = hy.createContextualFragment(cUA)
            } else {
                var cUB = document.createElement("div");
                cha = document.createDocumentFragment();
                cha.appendChild(cUB);
                cUB.outerHTML = cUA
            }
            cnb = cha.lastChild;
            this.cbb = cnb;
            this.bZk = cha.firstChild;
            hy.insertNode(cha);
            bIW.anchorNode.nodeValue = bIW.anchorNode.nodeValue.replace(/@$/, "");
            if (cnb) {
                hy.setEndAfter(cnb);
                hy.setStartAfter(cnb)
            }
            bIW.removeAllRanges();
            bIW.addRange(hy)
        }
    };
    bNn.bE = F
})(); (function() {
    var p = P("loft.w"),
    eN = 10,
    buZ = 60 * 60 * 24 * 7 * 1e3,
    nc,
    gr,
    Vc = function(X) {
        X.style.marginTop = "0px";
        E.ba(X.parentNode, "a-isaym2-do")
    },
    Ve = function(X, buY) {
        X.style.marginTop = -(buY || X.scrollHeight) + "px";
        E.bf(X.parentNode, "a-isaym2-do")
    };
    p.mZ = C();
    nc = p.mZ.bi(P(N.ui).ga, true);
    nc.bq = function(bl, I) {
        I = I || O;
        this.bv = new(P("loft.d").up);
        this.bv.bHo("onloadhotlist", this.buX.bHk(this));
        this.bHr(bl, I)
    };
    nc.buX = function(bS) {
        if ( !! bS) {
            this.pW = this.pW.concat(p.Ba.bG(bS, this.yu, {
                typeText: loft.x.WD(this.dJ)
            }));
            this.fP.parentNode.parentNode.style.display = this.pW.length > 5 ? "": "none";
            this.oz.style.display = this.pW.length >= this.lx ? "none": "";
            E.ba(this.yu.parentNode, "a-show-do");
            this.yu.parentNode.style.height = this.yu.scrollHeight + "px";
            this.cQ.style.display = "none"
        } else {}
        this.cQ.style.display = "none"
    };
    nc.cK = function() {
        p.mZ.bw.cK.apply(this, arguments);
        E.bf(this.vP, "opti-crt");
        E.bf(this.yu.parentNode, "a-show-do");
        this.yu.parentNode.style.height = 0
    };
    nc.bz = function(I) {
        p.mZ.bw.bz.call(this, I);
        this.ic = I.pid || 0;
        this.bI = I.bid || 0;
        this.vP = I.act || O;
        this.dJ = I.type || 1;
        this.fl = 0;
        this.lx = I.count || 0;
        if ( !! this.pW) p.Ba.db(this.pW);
        this.pW = [];
        E.ba(this.vP, "opti-crt")
    };
    nc.xT = function(pa) {
        p.mZ.bw.xT.call(this, pa);
        if ( !! this.Bc) window.clearTimeout(this.Bc);
        this.dL.parentNode.style.display = "block";
        this.iT();
        Vc(this.dL)
    };
    nc.xS = function() {
        this.Bc = window.setTimeout(function() {
            if (this.pW && !!this.pW.length) {
                this.pW = p.Ba.db(this.pW)
            }
            p.mZ.bw.xS.call(this);
            B.da && (this.dL.parentNode.style.display = "none")
        }.bHk(this), 300);
        Ve(this.dL)
    };
    nc.iT = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        this.cQ.style.display = "";
        this.bv.bvW(this.ic, this.bI, eN, this.fl);
        this.fl += eN
    };
    nc.cU = function() {
        return ""
    };
    nc.cM = function() {
        return '<div class="shadow"></div><div class="isaymin"><div class="m-cmt"><div class="a-show a-show-cmtul"><ul class="xtag"></ul></div></div><div class="isayi xtag"><div class="more"><div class="w-load">正在载入中...</div></div></div><div class="isayi"><a class="w-more2 xtag" href="#"><span>查看更多</span></a></div><div class="more"><div class="isayi"><a class="w-more w-more-close xtag" href="#">收起</a></div></div></div>'
    };
    nc.cc = function() {
        var bHl = E.bj(this.Y, "xtag");
        this.yu = bHl[0];
        this.cQ = bHl[1];
        this.oz = bHl[2];
        this.fP = bHl[3];
        this.oz.style.display = this.fP.parentNode.parentNode.style.display = "none";
        V.bHo(this.fP, "click", this.kN.bHk(this));
        V.bHo(this.oz, "click", this.iT.bHk(this))
    };
    nc.kN = function(bHm) {
        V.bb(bHm);
        p.mZ.db(this)
    };
    p.Ba = C();
    OL = p.Ba.bi(P(N.ut).fc, true);
    var eO = E.gD('<li><div class="cmti"><div class="w-img2 w-img2-4"><a href="#" target="_blank"><img class="xtag"><span class="xtag w-icn3 w-icn3-1">&nbsp;</span></a></div><div class="cmtcnt xtag"></div></div></li>');
    OL.bq = function() {
        this.bHr(eO);
        var bHl = E.bj(this.Y, "xtag");
        this.bD = bHl[0];
        this.cFA = bHl[1];
        this.vP = bHl[2];
        this.FP = [];
        this.FP.push(E.ft('<div class="cmthot"><a href="${link1}" target="_blank" class="s-fc4" title="${title}">${nick1}</a>&nbsp;&nbsp;喜欢此${typeText}</div>'));
        this.FP.push(E.ft('<div class="cmthot"><a href="${link1}" target="_blank" class="s-fc4" title="${title}">${nick1}</a>&nbsp;&nbsp;从&nbsp;&nbsp;<a href="${link2}" class="s-fc4" target="_blank">${nick2}</a>&nbsp;&nbsp;转载了此${typeText}${reblogTargetUrl}</div>{if !!content}<div class="cmtcmt cmtcmt-1">{if !!toPost}<a href="${toPost.blogPageUrl}" target="_blank" title="浏览文章">${content}</a>{else}${content}{/if}</div>{/if}'));
        this.FP.push(E.ft('<div class="cmthot"><a href="${link1}" target="_blank" class="s-fc4" title="${title}">${nick1}</a>&nbsp;&nbsp;{if !!link2}从&nbsp;&nbsp;<a href="${link2}" class="s-fc4" target="_blank">${nick2}</a>&nbsp;&nbsp;{/if}推荐了此${typeText}</div>'));
        V.bHo(this.bD.parentNode, "mouseover", this.bHF.bHk(this, true, this.bD.parentNode, null));
        V.bHo(this.bD.parentNode, "mouseout", this.bHF.bHk(this, false, this.bD.parentNode, null))
    };
    OL.bHF = function(gu, CL, dA, bHm) {
        dA = dA || this.bHq.publisherUserId;
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHm)
    };
    OL.ce = function(bHn) {
        p.Ba.bw.ce.call(this, bHn);
        bHn.typeText = this.buV;
        bHn.link1 = loft.x.bM(bHn.publisherMainBlogInfo.blogName);
        bHn.nick1 = U.ew(bHn.publisherMainBlogInfo.blogNickName) || "";
        bHn.title = loft.x.AD(bHn.nick1, 20, true) + " - " + loft.x.qB(bHn.opTime);
        if ( !! bHn.fromPost) {
            bHn.link2 = loft.x.bM(bHn.fromPost.blogInfo.blogName);
            bHn.nick2 = U.ew(bHn.fromPost.blogInfo.blogNickName);
            if (bHn.type == 3 && bHn.postId == bHn.fromPostId) {
                bHn.link2 = null
            }
        }
        bHn.reblogTargetUrl = "";
        if (bHn.publisherUserId != bHn.toBlogId && !!bHn.toPost) {
            var buU = loft.x.GX(bHn.toPost.blogInfo.blogName, bHn.toPost.id, bHn.toPost.blogId);
            bHn.reblogTargetUrl = '&nbsp;&nbsp;到&nbsp;&nbsp;<a href="' + buU + '" target="_blank" class="s-fc4">' + bHn.toPost.blogInfo.blogNickName + "</a>"
        }
        this.bD.src = loft.x.eK(bHn.publisherMainBlogInfo.bigAvaImg, 20);
        this.bD.parentNode.href = bHn.link1;
        this.bD.parentNode.title = bHn.title;
        this.cFA.className = this.dtp(bHn.type);
        this.vP.innerHTML = E.dG(this.FP[bHn.type - 1], bHn);
        var cpd = this.vP.children[0].children[0];
        V.bHo(cpd, "mouseover", this.bHF.bHk(this, true, cpd, bHn.publisherUserId));
        V.bHo(cpd, "mouseout", this.bHF.bHk(this, false, cpd, bHn.publisherUserId));
        if ( !! bHn.link2) {
            var Ai = this.vP.getElementsByTagName("a"),
            l = Ai.length,
            i = 0;
            for (; i < l; i++) {
                if (Ai[i].href.replace(/\/$/i, "") === bHn.link2.replace(/\/$/i, "")) {
                    V.bHo(Ai[i], "mouseover", this.bHF.bHk(this, true, Ai[i], bHn.fromBlogId));
                    V.bHo(Ai[i], "mouseout", this.bHF.bHk(this, false, Ai[i], bHn.fromBlogId));
                    continue
                }
                if (Ai[i].href.indexOf(bHn.toBlogId.toString(16) + "_" + bHn.toPostId.toString(16)) > 0 && U.Ua(bHn.toPost.blogInfo.blogNickName) === Ai[i].innerHTML) {
                    V.bHo(Ai[i], "mouseover", this.bHF.bHk(this, true, Ai[i], bHn.toBlogId));
                    V.bHo(Ai[i], "mouseout", this.bHF.bHk(this, false, Ai[i], bHn.toBlogId))
                }
            }
        }
    };
    OL.dtp = function(by) {
        var iQ = 5;
        switch (by) {
        case 1:
            iQ = 5;
            break;
        case 2:
            iQ = 3;
            break;
        case 3:
            iQ = 2;
            break
        }
        return "w-icn3 w-icn3-" + iQ
    };
    OL.bHC = function(I) {
        I = I || O;
        this.buV = I.typeText
    };
    p.lT = C();
    gr = p.lT.bi(P(N.ui).ga, true);
    gr.bq = function(bl, I) {
        I = I || O;
        this.bv = new(P("loft.d").up);
        this.bv.bHo("onloadcmtlist", this.OI.bHk(this));
        this.bv.bHo("onaddcmt", this.OG.bHk(this));
        this.bv.bHo("ondelcmt", this.OF.bHk(this));
        this.buT = new loft.d.AS({
            ongetcancomment: this.buO.bHk(this)
        });
        this.rp = new loft.d.vz({
            onaddblacklist: this.nV.bHk(this)
        });
        this.wd = !!I.isReblog;
        this.cP = {
            onreply: this.lJ.bHk(this),
            onblack: this.rz.bHk(this),
            ondelete: this.pV.bHk(this)
        };
        this.cpu = I.isInLayer || false;
        this.dtn = I.layerId || "";
        this.bHr(bl, I)
    };
    gr.bz = function(I) {
        p.lT.bw.bz.call(this, I);
        this.cQ.style.display = this.oz.style.display = this.fP.parentNode.parentNode.style.display = "none";
        this.ic = I.pid || 0;
        this.bI = I.bid || 0;
        this.Bn = !!I.isanonymous;
        this.bGf = I.followTime || 0;
        this.buM = I.commentRank || 0;
        this.vP = I.act || O;
        this.wd = !!I.isReblog;
        E.ba(this.vP, "opti-crt");
        this.lm = I.isedit || false;
        this.lx = I.count || 0;
        this.bHo("oncmtupdate", I.oncmtupdate || F);
        this.fl = 0; !! this.wd ? E.ba(this.bU.parentNode, "add-tbu") : E.bf(this.bU.parentNode, "add-tbu");
        this.jr = false;
        this.cP.postId = this.ic;
        this.cP.blogId = this.bI;
        this.cP.isedit = this.lm;
        this.cP.isanonymous = this.Bn;
        this.cP.onanonymousclick = I.onanonymousclick || F;
        this.bU.parentNode.style.display = this.Bn ? "none": "";
        this.bU.disabled = this.ou.disabled = false;
        E.bf(this.bU, "w-inputxt-dis");
        E.dt(this.ou, "w-bbtn-2", "w-bbtn-0");
        this.bIQ = "";
        this.buL()
    };
    gr.buL = function() {
        if (!this.lm && this.buM == 11) {
            this.bU.parentNode.style.display = "none";
            this.buT.bvb(this.bI)
        }
    };
    gr.buO = function(bu) {
        this.bU.parentNode.style.display = "";
        if ( !! bu && bu == -1) {
            this.bU.disabled = this.ou.disabled = true;
            this.bU.innerHTML = "由于该用户的权限设置，您暂时无法进行评论...";
            E.ba(this.bU, "w-inputxt-dis");
            E.dt(this.ou, "w-bbtn-0", "w-bbtn-2");
            E.bf(this.bU.parentNode, "add-tbu");
            return
        }
        this.bU.focus()
    };
    gr.iT = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        if (!this.lx) return;
        this.cQ.style.display = "";
        this.bv.bvU(this.ic, eN, this.fl)
    };
    gr.OI = function(bS) {
        this.cQ.style.display = "none";
        if ( !! bS && !!bS.length) {
            var buK = bS.length;
            this.lQ.parentNode.parentNode.style.display = "";
            if ( !! this.kG) {
                if (bS.length < this.kG.length + eN) {
                    this.td = true
                }
                bS = bS.slice(this.kG.length, bS.length);
                this.fl += eN
            } else {
                this.fl += bS.length;
                this.td = bS.length < eN
            }
            if (buK >= this.lx) this.td = true;
            this.oz.style.display = !!this.td ? "none": "";
            this.fP.parentNode.parentNode.style.display = "";
            if (!bS.length) return;
            var Wd = p.kD.bG(bS, this.lQ, this.cP); !! this.kG ? this.kG = this.kG.concat(Wd) : this.kG = Wd;
            this.buJ()
        } else {
            this.td = true;
            this.lQ.parentNode.parentNode.style.display = "none";
            this.fP.parentNode.parentNode.style.display = "none"
        }
    };
    gr.buJ = function() {
        if (!E.cr(this.lQ.parentNode, "a-show-do")) E.ba(this.lQ.parentNode, "a-show-do");
        this.lQ.parentNode.style.height = this.lQ.scrollHeight + "px"
    };
    gr.cK = function() {
        p.lT.bw.cK.call(this);
        if ( !! this.kG) {
            this.kG = p.kD.db(this.kG)
        }
        this.bU.innerHTML = "";
        E.bf(this.vP, "opti-crt");
        E.bf(this.bU.parentNode, "add-tbu");
        E.bf(this.ju, "w-tbu-sel");
        E.bf(this.lQ.parentNode, "a-show-do");
        this.lQ.parentNode.style.height = 0
    };
    gr.lJ = function(bQp, Oz, Bs, gR) {
        this.Ow = Bs || "";
        this.Bw = gR || "";
        this.bRK = Oz || 0;
        this.ccA = bQp || 0;
        if (this.bU.disabled === true) {
            return
        }
        loft.x.cVd(this.bU, "回复 " + gR + "：");
        this.bIQ = this.bU.innerText
    };
    gr.rz = function(bc, gR) {
        loft.w.eD.bE({
            parent: document.body,
            title: "加入黑名单",
            c1: "确定将 " + (gR || "") + " 加入黑名单吗？",
            c2: "加入黑名单之后，动态和标签页将不再显示" + (gR || "") + "发布或推荐的内容，" + "对方也不能向您发布评论、投稿和私信。您还可以去帐号设置管理黑名单。",
            onok: function() {
                this.rp.yY(bc)
            }.bHk(this)
        })
    };
    gr.nV = function(bHn) {
        if ( !! bHn) {
            if (bHn.id == -1e3) {
                alert("您尚未登录");
                return
            }
            if (bHn.id == -999) {
                return
            }
            if (bHn.id > 0) {
                E.bY("加入黑名单成功！", true)
            } else if (bHn.id == -2) {
                E.bd("黑名单已经存在")
            } else if (bHn.id == -10) {
                E.bd("您输入的博客地址不是用户的默认博客地址,无法加入黑名单")
            } else if (bHn.id == -11) {
                E.bd("不允许加自己帐号为黑名单")
            } else if (bHn.id == -997) {
                E.bd("您输入的博客地址有误")
            }
        }
    };
    gr.pV = function(buF, dR, bc) {
        loft.w.eD.bE({
            parent: document.body,
            title: "删除评论",
            c1: "确定删除这条评论吗？",
            onok: function() {
                this.bv.Pm(buF, dR, bc)
            }.bHk(this)
        })
    };
    gr.OF = function(bHn, Q) {
        if ( !! bHn && bHn > 0) {
            var dth = this.lQ.parentNode.scrollHeight;
            this.bh("oncmtupdate", -1);
            var QH = this.kG[Q].ra.offsetHeight;
            p.kD.db(this.kG[Q]);
            this.kG.splice(Q, 1);
            this.lQ.parentNode.style.height = dth - QH + "px"
        }
    };
    gr.cU = function() {
        return ""
    };
    gr.cM = function() {
        return '<div class="shadow"></div><div class="isaymin"><div class="isayi add"><div contentEditable="true" class="w-inputxt xtag noshortkey" maxlength="200"></div><button class="w-bbtn w-bbtn-0 xtag">发　布</button><a title="点击图标，同时评论给原作者" class="w-tbu xtag">同时评论给原作者</a></div><div class="m-cmt"><div class="a-show a-show-cmtul"><ul class="xtag"></ul></div></div><div class="isayi xtag"><div class="more"><div class="w-load">正在载入中...</div></div></div><div class="isayi"><a class="w-more2 xtag" href="#"><span>查看更多</span></a></div><div class="more"><div class="isayi"><a class="w-more w-more-close xtag" href="#">收起</a></div></div></div>'
    };
    gr.cc = function() {
        var bHl = E.bj(this.Y, "xtag"), //评论帖子，class中包含xtag的鼠标点击事件，都会调用此处
        i = 0;
        this.bU = bHl[i++];
        this.ou = bHl[i++];
        this.ju = bHl[i++];
        this.lQ = bHl[i++];
        this.cQ = bHl[i++];
        this.oz = bHl[i++];
        this.fP = bHl[i++];
        V.bHo(this.bU, "keyup", this.cnz.bHk(this));
        V.bHo(this.ou, "click", this.Wu.bHk(this));
        V.bHo(this.fP, "click", this.kN.bHk(this));
        V.bHo(this.oz, "click", this.iT.bHk(this));
        V.bHo(this.ju, "click", this.buC.bHk(this));
        loft.x.AL(this.bU, this.Wu.bHk(this));
        this.bIQ = "";
        this.bSI = [];
        if (!loft.x.crJ()) {
            V.bHo(this.bU, "keydown", this.bSH.bHk(this));
            V.bHo(this.bU, "paste", this.bUL.bHk(this))
        }
    };
    gr.bSH = function(bHm) {
        if (!bHm) return;
        var bIu = bHm.which || bHm.keyCode;
        if (bHm.ctrlKey && (bIu == 86 || bIu == 118)) {
            V.bb(bHm);
            return
        }
    };
    gr.bUL = function(bHm) {
        V.bb(bHm);
        return
    };
    gr.cnz = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode);
        if (rB == 86) {
            var ck = this.bU.children,
            l = ck.length;
            if (l == 0) {
                this.bIQ = this.bU.innerText;
                return
            }
            for (var i = l - 1; i > -1; i--) {
                if (ck[i].tagName === "A" && !!E.cr(ck[i], "f-atbox") && ck[i].innerText.indexOf("@") >= 0) {
                    if (ck[i].children.length > 0) {
                        ck[i].innerHTML = ck[i].innerText
                    }
                    continue
                } else {
                    ck[i].outerHTML = ck[i].innerText
                }
            }
        } else if (rB !== 17 && rB !== 86 && this.bU.innerText.split("@").length === this.bIQ.split("@").length + 1) {
            if ( !! loft.x.ceS() || loft.c.cm.userId <= 0) {
                this.bIQ = this.bU.innerText;
                return
            }
            V.bb(bHm);
            var bSG = new loft.w.caN(null, {
                textBody: this.bU,
                isInLayer: this.cpu,
                layerId: this.dtn,
                cbDelTag: this.bSF.bHk(this)
            });
            this.bSI.push(bSG)
        }
        this.bIQ = this.bU.innerText
    };
    gr.bSF = function() {
        this.bIQ = this.bU.innerText
    };
    gr.buC = function(bHm) {
        V.bb(bHm);
        this.jr = !this.jr; !! this.jr ? E.ba(this.ju, "w-tbu-sel") : E.bf(this.ju, "w-tbu-sel");
        this.ju.title = !!this.jr ? "点击图标，取消评论同步": "点击图标，同时评论给原作者"
    };
    gr.fs = function() {
        p.lT.bw.fs.apply(this, arguments);
        if ( !! this.Ww) window.clearTimeout(this.Ww);
        this.Ww = window.setTimeout(function() {
            if (!this.bU.parentNode.style.display && !this.bU.disabled) this.bU.focus()
        }.bHk(this), 350);
        this.iT()
    };
    gr.xT = function(pa) {
        p.lT.bw.xT.call(this, pa);
        if ( !! this.Bc) window.clearTimeout(this.Bc);
        this.dL.parentNode.style.display = "block";
        Vc(this.dL)
    };
    gr.xS = function() {
        this.Bc = window.setTimeout(function() {
            p.lT.bw.xS.call(this);
            B.da && (this.dL.parentNode.style.display = "none")
        }.bHk(this), 300);
        Ve(this.dL)
    };
    gr.kN = function(bHm) {
        V.bb(bHm);
        p.lT.db(this)
    };
    gr.Wu = function() {
        if ( !! loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        var jd = "",
        cIT = U.bA(this.bU.innerText);
        if (B.da) {
            jd = U.bA(loft.x.cVk(this.bU, true))
        } else {
            jd = U.bA(this.bU.innerHTML.replace(/<\/div>/ig, "").replace(/<div>(<[\/]?\s*br>)?/ig, "<br>").replace(/^(<br>)*/ig, "").replace(/(<br>)*$/ig, ""))
        }
        if ( !! this.bRK) {
            var tI = U.ew("回复 " + this.Bw + "：");
            if (jd.indexOf(tI) != 0) {
                this.bRK = 0
            } else {
                jd = jd.replace(tI, "")
            }
        }
        if (!cIT) {
            E.bd("请输入评论内容", true);
            this.bU.focus();
            return
        }
        if (cIT.length > 200) {
            E.bd("评论内容不超过200个字", true);
            this.bU.focus();
            return
        }
        this.ou.innerText = "正在发布...";
        E.dt(this.ou, "w-bbtn-0", "w-bbtn-2");
        this.bU.disabled = this.ou.disabled = true;
        this.bv.Ao(jd, this.ic, this.bI, this.ccA, this.bRK, !!this.jr)
    };
    gr.OG = function(bHn) {
        this.bU.innerHTML = "";
        this.bIQ = "";
        this.ou.innerText = "发　布";
        this.bU.disabled = this.ou.disabled = false;
        this.lQ.parentNode.parentNode.style.display = "";
        E.dt(this.ou, "w-bbtn-2", "w-bbtn-0");
        if ( !! bHn) {
            if (bHn.id == -10) {
                E.bd("对不起，您没有权限发表评论", true)
            } else if (bHn.id == -11) {
                E.bd("对不起，由于用户设置，您没有权限发表评论")
            } else if (bHn.id == -15) {
                E.bd("该文章已删除，不能回复评论！")
            } else if (bHn.id == -16) {
                E.bd("该评论已删除，不能回复评论！")
            } else if (bHn.id == -17) {
                E.bd("每次最多允许@60个人！")
            } else if (bHn.id == -100) {
                E.bd("您发布得太快了，请休息一下。")
            } else if (bHn.id == -199) {
                E.bd("您提交的内容中含敏感词！", true)
            } else {
                this.bh("oncmtupdate", 1);
                if ( !! bHn.replyToUserId) {
                    bHn.replyBlogInfo = {
                        blogId: this.bRK,
                        blogName: this.Ow,
                        blogNickName: this.Bw
                    }
                }
                this.bRK = 0;
                this.ccA = 0;
                this.cP.before = true;
                this.kG = this.kG || [];
                this.kG.unshift(p.kD.bG(bHn, this.lQ, this.cP));
                this.cP.before = false
            }
        }
    };
    p.kD = C();
    iP = p.kD.bi(P(N.ut).fc, true);
    var ex = E.gD('<li class="a-slide a-slide-do"><div class="cmti slide xtag"><div class="w-img2 w-img2-2 noshortkey"><a href="#" target="_blank"><img class="xtag"></a></div><div class="cmtcnt"><div class="cmthot"><span class="cmtusr"><a href="#" target="_blank" class="s-fc4 xtag">某某某</a><span class="xtag">&nbsp;&nbsp;回复了&nbsp;&nbsp;<a class="s-fc4 xtag" target="_blank"></a></span></span><span class="xtag"></span></div><div class="cmtopt"><a href="#" class="cmtj s-fc4 xtag">加黑</a><a href="#" class="xtag cmtj s-fc4">删除</a><a href="#" class="s-fc4 xtag">回复</a></div></div></div></li>');
    iP.bq = function() {
        this.bHr(ex);
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.ra = bHl[i++];
        this.bD = bHl[i++];
        this.fz = bHl[i++];
        this.BQ = bHl[i++];
        this.Wz = bHl[i++];
        this.dg = bHl[i++];
        this.rW = bHl[i++];
        this.WB = bHl[i++];
        this.of = bHl[i++];
        V.bHo(this.of, "click", this.lJ.bHk(this));
        V.bHo(this.rW, "click", this.rz.bHk(this));
        V.bHo(this.WB, "click", this.pV.bHk(this));
        E.fy(this.Y, "j-hover");
        V.bHo(this.bD.parentNode, "mouseover", this.bHF.bHk(this, true, this.bD.parentNode, null));
        V.bHo(this.bD.parentNode, "mouseout", this.bHF.bHk(this, false, this.bD.parentNode, null));
        V.bHo(this.fz, "mouseover", this.bHF.bHk(this, true, this.fz, null));
        V.bHo(this.fz, "mouseout", this.bHF.bHk(this, false, this.fz, null));
        this.bMe = this.bRV.bHk(this)
    };
    iP.bHF = function(gu, CL, dA, bHm) {
        if (!dA && (!CL.href || CL.href.indexOf("lofter.com") < 0)) {
            return
        }
        dA = dA || this.bHq.publisherUserId;
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu, {
                onFollowSucc: this.bMe
            })
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHm)
    };
    iP.bRV = function(dA, bNV) {
        var bNW = "icontag" + dA,
        bHl = E.bj(document.body, bNW);
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.width = bHl[i].style.marginLeft = bHl[i].style.opacity = 0
        }
    };
    iP.bHC = function(I) {
        this.bHo("onreply", I.onreply || F);
        this.bHo("onblack", I.onblack || F);
        this.bHo("ondelete", I.ondelete || F);
        this.bHo("onanonymousclick", I.onanonymousclick || F);
        this.lm = I.isedit || false;
        this.ic = I.postId || 0;
        this.bI = I.blogId || 0;
        this.BR = I.before || false;
        this.Bn = !!I.isanonymous;
        if ( !! this.BR) {
            E.bf(this.Y, "a-slide-do");
            this.ra.style.marginTop = "-100px"
        } else {
            this.Y.className = "a-slide a-slide-do";
            this.ra.style.marginTop = 0
        }
    };
    iP.fs = function(bl) {
        p.kD.bw.fs.call(this, bl, this.BR)
    };
    iP.cK = function() {
        this.ra.style.marginTop = -this.ra.scrollHeight + "px";
        E.bf(this.Y, "a-slide-do");
        window.setTimeout(p.kD.bw.cK.bHk(this), 300)
    };
    iP.ce = function(bHn) {
        p.kD.bw.ce.call(this, bHn);
        var du = bHn.publisherMainBlogInfo || O;
        this.bD.src = loft.x.eK(du.bigAvaImg, 20);
        if (du.blogId < 0) {
            if ( !! du.blogName) {
                this.bD.parentNode.href = this.fz.href = du.blogName;
                this.bD.parentNode.target = this.fz.target = "_blank"
            } else {
                this.bD.parentNode.removeAttribute("href");
                this.fz.removeAttribute("href");
                this.bD.parentNode.style.cursor = "default";
                this.fz.style.cursor = "default";
                this.fz.style.textDecoration = "none"
            }
        } else {
            this.bD.parentNode.href = this.fz.href = loft.x.bM(du.blogName)
        }
        this.Ov = bHn.publisherUserId || 0;
        this.fz.innerText = du.blogNickName || "";
        this.dg.innerHTML = bHn.content || "";
        this.cGy();
        var title = loft.x.AD(du.blogNickName, 20, true) + " - " + loft.x.qB(bHn.publishTime);
        this.bD.parentNode.title = title;
        this.fz.title = title;
        if ( !! bHn.replyBlogInfo) {
            this.BQ.style.display = "";
            this.Wz.innerText = bHn.replyBlogInfo.blogNickName || "";
            if (bHn.replyBlogInfo.blogId < 0) {
                if ( !! bHn.replyBlogInfo.blogName) {
                    this.Wz.href = bHn.replyBlogInfo.blogName;
                    this.Wz.target = "_blank"
                } else {
                    this.Wz.removeAttribute("href");
                    this.Wz.style.cursor = "default";
                    this.Wz.style.textDecoration = "none"
                }
            } else {
                this.Wz.href = loft.x.bM(bHn.replyBlogInfo.blogName)
            }
            V.bHo(this.Wz, "mouseover", this.bHF.bHk(this, true, this.Wz, bHn.replyToUserId));
            V.bHo(this.Wz, "mouseout", this.bHF.bHk(this, false, this.Wz, bHn.replyToUserId))
        } else {
            this.BQ.style.display = "none"
        }
        if (bHn.publisherUserId == -90) {
            this.of.style.display = "none"
        }
        this.lm = !!this.lm || loft.c.cm.userId === this.Ov;
        if (loft.c.cm.isEditor) {
            this.lm = 1
        }
        this.WB.style.display = !!this.lm ? "": "none";
        this.rW.style.display = this.Ov < 0 || loft.c.cm.userId == this.Ov || this.Bn ? "none": "";
        if ( !! this.BR) {
            var GZ = this.Y.parentNode.parentNode;
            window.setTimeout(function() {
                this.ra.style.marginTop = "0px";
                E.ba(this.Y, "a-slide-do");
                GZ.style.height = GZ.offsetHeight + this.ra.offsetHeight + "px";
                if (!E.cr(GZ, "a-show-do")) E.ba(GZ, "a-show-do")
            }.bHk(this), 50)
        }
    };
    iP.cGy = function() {
        var bMi = this.dg.getElementsByTagName("a"),
        i = 0,
        l = bMi.length;
        for (; i < l; i++) {
            if ( !! bMi[i].getAttribute("loftermentionblogId")) {
                bMi[i].target = "_blank";
                V.bHo(bMi[i], "mouseover", this.bHF.bHk(this, true, bMi[i], parseInt(bMi[i].getAttribute("loftermentionblogId"))));
                V.bHo(bMi[i], "mouseout", this.bHF.bHk(this, false, bMi[i], parseInt(bMi[i].getAttribute("loftermentionblogId"))))
            }
        }
    };
    iP.lJ = function(bHm) {
        V.bb(bHm);
        if (this.Bn) {
            this.bh("onanonymousclick")
        } else {
            this.bh("onreply", this.bHq.id, this.Ov, this.bHq.publisherMainBlogInfo.blogName, this.bHq.publisherMainBlogInfo.blogNickName || "")
        }
    };
    iP.rz = function(bHm) {
        V.bb(bHm);
        this.bh("onblack", this.bHq.publisherMainBlogInfo.blogName, this.bHq.publisherMainBlogInfo.blogNickName)
    };
    iP.pV = function(bHm) {
        V.bb(bHm);
        this.bh("ondelete", this.bHq.id, this.ic, this.bI)
    }
})(); (function() {
    var p = P("loft.w"),
    bKH,
    cnO,
    bHu = "ui-" + U.cA(),
    bPu = {},
    cGH = {},
    cGI = "http://l.bst.126.net/rsc/img/empty.png";
    eW = 400,
    fX = 600,
    gh = (window.screen.height - eW - 200) / 2,
    fM = (window.screen.width - fX) / 2,
    Vc = function(X) {
        X.style.marginTop = "0px";
        E.ba(X.parentNode, "a-isaym2-do")
    },
    Ve = function(X, buY) {
        X.style.marginTop = -(buY || X.scrollHeight) + "px";
        E.bf(X.parentNode, "a-isaym2-do")
    };
    P(N.ui).fx('#<uispace>{height:120px;}#<uispace> .isaymin{height:112px;}#<uispace> .isaymin ul{height:80px;padding:23px 0 0 29px;}#<uispace> .isaymin li{float:left;width:60px;height:80px;padding:0 12px;}#<uispace> .isaymin li a{display:block;color:#aaa;}#<uispace> .isaymin li em{display:block;width:46px;height:46px;margin:0 auto;background:url("http://l.bst.126.net/rsc/img/sharewidget/icons24.png?002") -9999px -9999px no-repeat;_background:url("http://l.bst.126.net/rsc/img/sharewidget/icons8.png?002") -9999px -9999px no-repeat;}#<uispace> .isaymin li span{display:block;line-height:22px;margin-top:5px;text-align:center;}#<uispace> .isaymin li.weixin em{background-position:2px 2px;}#<uispace> .isaymin li.yixin em{background-position:-99px 2px;}#<uispace> .isaymin li.sinawb em{background-position:-199px 2px;}#<uispace> .isaymin li.qzone em{background-position:-299px 2px;}#<uispace> .isaymin li.bdtieba em{background-position:-500px 2px;}#<uispace> .isaymin li.reblog em{background-position:-399px 2px;}#<uispace> .isaymin li a:hover{color:#7594b3;}#<uispace> .isaymin li.weixin a:hover em{background-position:2px -87px;}#<uispace> .isaymin li.yixin a:hover em{background-position:-99px -87px;}#<uispace> .isaymin li.sinawb a:hover em{background-position:-199px -87px;}#<uispace> .isaymin li.qzone a:hover em{background-position:-299px -87px;}#<uispace> .isaymin li.bdtieba a:hover em{background-position:-500px -86px;}#<uispace> .isaymin li.reblog a:hover em{background-position:-399px -87px;}.towdimcodelayer{position:absolute;left:0;top:0;z-index:10000;margin-top:0;opacity:0;}.js-transition{transition:margin-top .15s ease,opacity .12s linear;-webkit-transition:margin-top .15s ease,opacity .12s linear;-moz-transition:margin-top .18s ease,opacity .15s linear;-ms-transition:margin-top .15s ease,opacity .12s linear;-o-transition:margin-top .15s ease,opacity .12s linear;}.towdimcodelayer .arrow{position:absolute;width:0;height:0;border-width:8px;border-style:solid;_display:none;}.towdimcodelayer .js-arrow-up{left:72px;top:-15px;border-color:transparent transparent #191919 transparent;}.towdimcodelayer .js-arrow-down{left:72px;bottom:-15px;border-color:#191919 transparent transparent transparent;}.towdimcodelayer .layerbd{width:100px;height:150px;padding:30px 30px 0 30px;background:#191919;box-shadow:0 1px 3px #000;-webkit-box-shadow:0 1px 3px #000;-moz-box-shadow:0 1px 3px #000;-o-box-shadow:0 1px 3px #000;}.towdimcodelayer .codebg{width:75px;height:75px;padding:13px 12px 12px 13px;background:#fff;}.towdimcodelayer .codebg img{width:75px;height:75px;}.towdimcodelayer .codettl{height:22px;line-height:22px;margin-top:5px;color:#888;font-size:12px;}.js-show-up{margin-top:15px;opacity:1;}.js-show-down{margin-top:-15px;opacity:1;}', bHu);
    p.bQY = C();
    bKH = p.bQY.bi(P(N.ui).ga, true);
    bKH.bq = function(bl, I) {
        I = I || O;
        this.bHr(bl, I)
    };
    bKH.bz = function(I) {
        I = I || O;
        p.bQY.bw.bz.call(this, I);
        this.bSx = I.noLogin || false;
        this.bUT = I.shareTo || O;
        if (!this.bSx) {
            this.Iu.href = I.reblogUrl || "#";
            this.btL = I.onActReblog;
            this.bhw = I.post || {};
            this.coF = this.bhw.blogPageUrl || "";
            this.hL = this.bhw.title || "";
            this.btU = this.cds(this.bhw.digest) || "";
            this.btU = U.bA(this.btU);
            var dY = this.bhw.blogInfo || {};
            this.bI = dY.blogId;
            this.hJ = dY.blogNickName || dY.blogName || "";
            var bHZ;
            try {
                bHZ = U.bHx(this.bhw.firstImageUrl)
            } catch(e) {}
            if ( !! bHZ && !!bHZ[1]) {
                this.dte = bHZ[1]
            }
            var bOh;
            try {
                bOh = U.bHx(this.bhw.photoLinks).length
            } catch(e) {}
            this.bPk = bOh || 0;
            if ( !! this.bhw.embed) {
                try {
                    this.FF = U.bHx(decodeURIComponent(this.bhw.embed))
                } catch(e) {
                    this.FF = null
                }
            }
            this.ic = this.bhw.id || "";
            if ( !! this.ic && !cGH[this.ic]) {
                J.gf(location.dwr, "PostBean", "getPostActivityInfo", this.ic, this.bI, this.dtd.bHk(this, this.ic))
            }
            this.cGO()
        } else {
            this.cLx = I.onShowRegTipFunc
        }
        E.ba(this.bUT, "opti-crt")
    };
    bKH.dtd = function(dR, cnU) {
        if ( !! cnU) cGH[dR] = cnU
    };
    bKH.cds = function(bIt) {
        var bSv = document.cloneElement("div");
        bSv.innerHTML = this.bhw.digest || "";
        var bHl = bSv.getElementsByTagName("p") || [];
        for (var i = 0; i < bHl.length; i++) {
            var wB = bHl[i].getAttribute("reblogfrom");
            if (wB == "reblogfrom") {
                bHl[i].innerHTML = "//" + bHl[i].innerHTML;
                break
            }
        }
        return bSv.innerText || ""
    };
    bKH.cK = function() {
        p.bQY.bw.cK.apply(this, arguments);
        E.bf(this.bUT, "opti-crt");
        E.bf(this.Y.parentNode, "a-show-do")
    };
    bKH.xT = function(pa) {
        p.bQY.bw.xT.call(this, pa);
        if ( !! this.Bc) window.clearTimeout(this.Bc);
        Vc(this.dL)
    };
    bKH.xS = function() {
        this.Bc = window.setTimeout(function() {
            p.bQY.bw.xS.call(this)
        }.bHk(this), 300);
        Ve(this.dL, 125)
    };
    bKH.cU = function() {
        return bHu + " sharewidget"
    };
    bKH.cM = function() {
        return '<div class="shadow"></div><div class="isaymin"><ul><li class="weixin"><a href="#" hidefocus="true"><em></em><span>微信</span></a></li><li class="yixin"><a href="#" hidefocus="true"><em></em><span>易信</span></a></li><li class="sinawb"><a href="#" hidefocus="true"><em></em><span>新浪微博</span></a></li><li class="qzone"><a href="#" hidefocus="true"><em></em><span>QQ空间</span></a></li><li class="bdtieba"><a href="#" hidefocus="true"><em></em><span>百度贴吧</span></a></li><li class="reblog"><a href="#" hidefocus="true" target="_blank"><em></em><span>我的主页</span></a></li></ul></div>'
    };
    bKH.cc = function() {
        var bHl = this.Y.getElementsByTagName("a");
        this.bLa = bHl[0];
        this.cdJ = bHl[1];
        this.bKY = bHl[2];
        this.cGU = bHl[3];
        this.dtc = bHl[4];
        this.Iu = bHl[5];
        V.bHo(this.bLa, "click", this.dtb.bHk(this));
        V.bHo(this.cdJ, "click", this.dsY.bHk(this));
        V.bHo(this.bLa, "mouseover", this.cGV.bHk(this));
        V.bHo(this.bLa, "mouseout", this.cGW.bHk(this));
        V.bHo(this.cdJ, "mouseover", this.cGY.bHk(this));
        V.bHo(this.cdJ, "mouseout", this.cGZ.bHk(this));
        V.bHo(this.bKY, "click", this.cab.bHk(this));
        V.bHo(this.cGU, "click", this.cac.bHk(this));
        V.bHo(this.dtc, "click", this.dsX.bHk(this));
        V.bHo(this.Iu, "click", this.cMG.bHk(this))
    };
    bKH.Fq = function(bHm) {
        if (typeof this.cLx === "function") {
            this.cLx()
        }
    };
    bKH.dtb = function(bHm) {
        V.bb(bHm);
        if (this.bSx) {
            this.Fq()
        }
    };
    bKH.dsY = function(bHm) {
        V.bb(bHm);
        if (this.bSx) {
            this.Fq()
        }
    };
    bKH.cGV = function(bHm) {
        if (this.bSx) {
            return
        }
        this.bLx = true;
        if ( !! this.bIb) this.bIb = window.clearTimeout(this.bIb);
        this.bIb = window.setTimeout(function() {
            if (this.bLx) {
                var cag = this.coF + "?act=qbdashshareWeixin_20140227_01";
                var bLu = "http://www.lofter.com/genBitmaxImage?url=" + encodeURIComponent(cag);
                var I = {
                    srcNode: this.bLa,
                    codeimg: bLu,
                    codettl: "打开微信扫一扫"
                };
                this.bJC = p.bRF.YV(null, I)
            }
        }.bHk(this), 150)
    };
    bKH.cGW = function(bHm) {
        if (this.bSx) {
            return
        }
        this.bLx = false;
        if ( !! this.bIb) this.bIb = window.clearTimeout(this.bIb);
        if ( !! this.bJC) this.bJC.cy()
    };
    bKH.cGY = function(bHm) {
        if (this.bSx) {
            return
        }
        this.cMS = true;
        if ( !! this.bIb) this.bIb = window.clearTimeout(this.bIb);
        this.bIb = window.setTimeout(function() {
            if (this.cMS) {
                var cag = this.coF + "?act=qbdashshareYixin_20140227_01";
                var bLu = "http://www.lofter.com/genBitmaxImage?url=" + encodeURIComponent(cag);
                var I = {
                    srcNode: this.cdJ,
                    codeimg: bLu,
                    codettl: "打开易信扫一扫"
                };
                this.bJC = p.bRF.YV(null, I)
            }
        }.bHk(this), 150)
    };
    bKH.cGZ = function(bHm) {
        if (this.bSx) {
            return
        }
        this.cMS = false;
        if ( !! this.bIb) this.bIb = window.clearTimeout(this.bIb);
        if ( !! this.bJC) this.bJC.cy()
    };
    bKH.cMG = function(bHm) {
        if (this.bSx) {
            V.bb(bHm);
            this.Fq();
            return
        }
        if (typeof this.btL === "function") {
            if ( !! P("loft.m.indom.g").reblogWithOldLink || !!P("loft.m.mjtag.g").reblogWithOldLink) {} else {
                this.btL(bHm)
            }
        }
        window["_gaq"].push(["_trackEvent", "动态流文章分享功能", "转载点击"])
    };
    bKH.cGO = function() {
        var bp = this.coF;
        this.tR = this.tR || this.dte || "";
        this.cak = bp;
        this.bSs = "";
        if ( !! this.hL) {
            this.bSs += "《" + this.hL + "》"
        }
        this.bSs += " ";
        if ( !! this.btU) {
            var sF = 40;
            if (this.bhw.type == 3 || this.bhw.type == 4) {
                sF = 20
            }
            var bIt = this.btU;
            if (bIt.length > sF) bIt = bIt.substring(0, sF) + "...";
            this.bSs += bIt + " "
        }
        if (this.bPk && this.bhw.type == 2) {
            this.bSs += "（" + this.bPk + "图）"
        }
        if (this.bhw.type == 4 && this.bhw.permalink && this.FF && this.FF.type == "uservideo") {
            this.bSs += "（阅读全文：" + "http://www.lofter.com/video/" + this.bhw.permalink
        } else {
            this.bSs += "（阅读全文：" + this.coF
        }
        this.bSs += " 下载LOFTER客户端：http://www.lofter.com/app/QRCodedownload?act=qbdlfwb_20140723_02）";
        if ( !! this.FF) {
            if (this.bhw.type == 3) {
                this.bSs += " 音乐地址  " + " http://music.163.com/#/m/song?id=" + (this.FF.song_id || "");
                this.tR = this.FF.album_logo || ""
            } else if (this.bhw.type == 4) {
                if (this.FF.type != "uservideo") {
                    this.bSs += " 视频地址  " + (this.FF.originUrl || "")
                }
                this.tR = this.FF.video_img_url || ""
            }
        }
        this.cnV = "";
        if ( !! this.hL) {
            this.cnV += "《" + this.hL + "》";
            this.cnV += " "
        }
        if ( !! this.btU) {
            var sF = 40;
            var bIt = this.btU;
            if (bIt.length > sF) bIt = bIt.substring(0, sF) + "...";
            this.cnV += bIt + " "
        }
        if (this.bhw.type == 1) {
            this.bXq = "分享文字 ";
            if ( !! this.hL) this.bXq += "《" + this.hL + "》 ";
            this.bXq += "： "
        } else if (this.bhw.type == 2) {
            this.bXq = "分享图片： "
        } else if (this.bhw.type == 3) {
            this.bXq = "分享音乐： "
        } else if (this.bhw.type == 4) {
            this.bXq = "分享视频： "
        } else if (this.bhw.type == 5) {
            this.bXq = "分享问答 ";
            if ( !! this.hL) this.bXq += "《" + this.hL + "》 "
        }
        this.bXq += "来自 " + this.hJ + " 的LOFTER。";
        this.cHb = "";
        if ( !! this.btU) {
            var bPr = this.btU;
            if (bPr.length > 120) bPr = bPr.substring(0, 120);
            this.cHb = bPr || ""
        }
        if (this.bhw.type == 2 && this.bPk) {
            this.cHb += "（" + this.bPk + "图）"
        }
        if (this.bhw.type == 1) {
            if ( !! this.hL) {
                this.cao = "《" + this.hL + "》 "
            } else {
                this.cao = "分享LOFTER上的好文 "
            }
        } else if (this.bhw.type == 2) {
            this.cao = "LOFTER上的好图片"
        } else if (this.bhw.type == 3) {
            this.cao = "LOFTER上好听的音乐"
        } else if (this.bhw.type == 4) {
            this.cao = "LOFTER上的视频 "
        } else if (this.bhw.type == 5) {
            if ( !! this.hL) {
                this.cao = "《" + this.hL + "》 "
            } else {
                this.cao = "分享LOFTER上的问答 "
            }
        }
    };
    bKH.cab = function(bHm) {
        V.bb(bHm);
        if (this.bSx) {
            this.Fq();
            return
        }
        if (this.bI && bPu[this.bI] === undefined) {
            J.bFh(1e3);
            J.gf(location.dwr, "SiteConnectInfoBean", "getSiteConnectNickname", this.bI, 1, this.bZH.bHk(this, this.bI))
        } else {
            this.bZH(this.bI, bPu[this.bI])
        }
        window["_gaq"].push(["_trackEvent", "动态流文章分享功能", "新浪微博分享点击"])
    };
    bKH.bZH = function(bc, bSr) {
        var bPt;
        if ( !! bSr) {
            bPu[bc] = bSr;
            bPt = "@" + bSr
        } else {
            bPu[bc] = "";
            bPt = this.hJ
        }
        var cnU = cGH[this.ic] || {};
        var cHe = cnU.activityType || 0;
        var cHg = cnU.activityName || "";
        var bJL = "";
        if (cHe == 2) {
            bJL = "【分享自 " + bPt + " 的@网易LOFTER】" + this.bSs
        } else if (cHe === 0) {
            bJL = this.cnV;
            bJL += "来自" + bPt + " 参与的@网易LOFTER＃" + cHg + "＃话题";
            bJL += "（下载LOFTER客户端参与：http://www.lofter.com/app/QRCodedownload?act=qbshareactivityposttoweibo_20140726_02）"
        } else if (cHe == 1) {
            if (this.bhw.publisherUserId == loft.c.cm.userId) {
                bJL = "我发布了一张图片参与@网易LOFTER＃" + cHg + "＃话题。（下载LOFTER客户端参与：http://www.lofter.com/app/QRCodedownload?act=qbshareactivityposttoweibo_20140726_01 ）"
            } else {
                bJL = this.cnV + "来自" + bPt + " 参与的@网易LOFTER＃" + cHg + "＃话题。（下载LOFTER客户端参与：http://www.lofter.com/app/QRCodedownload?act=qbshareactivityposttoweibo_20140726_01 ）"
            }
        } else {
            bJL = "【分享自 " + bPt + " 的@网易LOFTER】" + this.bSs
        }
        var cH = "http://v.t.sina.com.cn/share/share.php?";
        cH += "url=" + encodeURIComponent("");
        cH += "&title=" + encodeURIComponent(bJL);
        cH += "&pic=" + encodeURIComponent(this.tR);
        cH += "&appkey=895033136";
        window.open(cH, "_blank", "height=" + eW + ",width=" + fX + ",top=" + gh + ",left=" + fM + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no")
    };
    bKH.cac = function(bHm) {
        V.bb(bHm);
        if (this.bSx) {
            this.Fq();
            return
        }
        var cH = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
        cH += "title=" + encodeURIComponent(this.bXq);
        cH += "&summary=" + encodeURIComponent(this.cHb || "");
        cH += "&desc=" + encodeURIComponent("");
        cH += "&url=" + encodeURIComponent(this.cak);
        cH += "&pics=" + encodeURIComponent(this.tR);
        window.open(cH, "_blank", "height=" + eW + ",width=" + fX + ",top=" + gh + ",left=" + fM + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
        window["_gaq"].push(["_trackEvent", "动态流文章分享功能", "QQ空间分享点击"])
    };
    bKH.dsX = function(bHm) {
        V.bb(bHm);
        if (this.bSx) {
            this.Fq();
            return
        }
        var cH = "http://tieba.baidu.com/f/commit/share/openShareApi?";
        cH += "title=" + encodeURIComponent(this.cao);
        cH += "&url=" + encodeURIComponent(this.cak);
        cH += "&pic=" + encodeURIComponent(this.tR);
        var cNU = function() {
            window["_gaq"].push(["_trackEvent", "!动态流文章分享功能", "!百度贴吧分享点击"]);
            window.setTimeout(function() {
                if (!window.open(cH)) location.href = cH
            },
            400)
        };
        if (/Firefox/.test(navigator.userAgent)) {
            setTimeout(cNU, 0)
        } else {
            cNU()
        }
    };
    p.bRF = C();
    cnO = p.bRF.bi(P(N.ut).gY);
    p.bRF.YV = function(bl, I) {
        I = I || {};
        if (!this.eb) {
            this.eb = new loft.w.bRF(bl, I)
        } else {
            this.eb.bHC(I)
        }
        return this.eb
    };
    cnO.bq = function(bl, I) {
        this.dL = bl || document.body;
        this.bHr();
        this.bHC(I)
    };
    cnO.bHC = function(I) {
        I = I || {};
        this.cNV = I.srcNode;
        if (!this.cNV) return;
        this.dsV = I.isFixedShowUp || false;
        this.dsU = I.isFixedShowDown || false;
        var bLu = I.codeimg || cGI;
        var dsR = I.codettl || "打开微信扫一扫";
        var cN = I.left || -50;
        var cHi = I.ttop || -210;
        var cHn = I.dtop || 98;
        this.dsP(this.cNV, bLu, dsR, cN, cHi, cHn)
    };
    cnO.dsP = function(bOI, bKf, dsN, cN, cHi, cHn) {
        if ( !! this.KO) {
            this.KO = window.clearTimeout(this.KO)
        }
        if (!this.bNf) {
            var dc = '<div class="towdimcodelayer"><div class="arrow xtag"></div><div class="layerbd"><div class="codebg"><img class="xtag" /></div><div class="codettl xtag"></div></div></div>';
            this.bNf = E.eY(dc);
            var bHl = E.bj(this.bNf, "xtag");
            this.chv = bHl[0];
            this.caB = bHl[1];
            this.dsM = bHl[2];
            if (P("loft.m.newpublish.w").bMy()) {
                E.ba(this.bNf, "js-transition")
            }
            this.dL.insertAdjacentElement("beforeEnd", this.bNf)
        } else {
            this.bNf.style.visibility = ""
        }
        if ( !! bKf) this.caB.src = bKf;
        this.dsM.innerText = dsN || "";
        var bug = E.tz(bOI);
        var bud = E.jO(bOI);
        var dz = 160;
        var dyx = 60;
        var eT = 190;
        var qx = document.documentElement.clientHeight || 1;
        var kj = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var cHx = bud - kj + 25 > kj + qx - bud - (120 - 25);
        if (this.dsV) {
            cHx = true
        } else if (this.dsU) {
            cHx = false
        }
        if (cHx) {
            E.dt(this.chv, "js-arrow-up", "js-arrow-down");
            this.bNf.style.left = bug + cN + "px";
            this.bNf.style.top = bud + cHi + "px";
            E.dt(this.bNf, "js-show-down", "js-show-up")
        } else {
            E.dt(this.chv, "js-arrow-down", "js-arrow-up");
            this.bNf.style.left = bug + cN + "px";
            this.bNf.style.top = bud + cHn + "px";
            E.dt(this.bNf, "js-show-up", "js-show-down")
        }
    };
    cnO.cy = function() {
        if ( !! this.bNf) {
            if ( !! this.KO) this.KO = window.clearTimeout(this.KO);
            if (P("loft.m.newpublish.w").bMy()) {
                this.KO = window.setTimeout(function() {
                    this.bNf.style.visibility = "hidden";
                    if ( !! this.caB) this.caB.src = cGI
                }.bHk(this), 150)
            } else {
                this.bNf.style.visibility = "hidden";
                if ( !! this.caB) this.caB.src = cGI
            }
            E.bf(this.bNf, "js-show-up js-show-down")
        }
    }
})(); (function() {
    var p = P("loft.w"),
    wu,
    bwa,
    cUO,
    cUP,
    cUS;
    p.eD = C();
    wu = p.eD.bi(p.fr, true);
    wu.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "未定义标题";
        this.bHr(bl, I)
    };
    wu.bz = function(I) {
        this.ei.iI(I.title);
        this.bHo("onok", I.onok || F);
        this.bHo("oncc", I.oncc || F);
        this.bbK.innerHTML = U.ew(I.c1);
        this.bwb.innerHTML = U.ew(I.c2);
        p.eD.bw.bz.call(this, I)
    };
    wu.cM = function() {
        return '<div class="layerm"><h4 class="warmt wtag">确定要删除某某某的投稿吗？</h4><div class="warmc"><p class="wtag">加入黑名单后，您还可以去帐号设置管理黑名单</p></div></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" href="#" hidefocus="true">确 定</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">取 消</a></div>'
    };
    wu.cc = function() {
        var bHl = E.bj(this.Y, "wtag");
        this.bbK = bHl[0];
        this.bwb = bHl[1];
        this.zY = bHl[2];
        this.yU = bHl[3];
        V.bHo(this.zY, "click", this.ry.bHk(this));
        V.bHo(this.yU, "click", this.gL.bHk(this))
    };
    wu.ry = function(bHm) {
        V.bb(bHm);
        this.cy();
        this.bh("onok")
    };
    wu.gL = function(bHm) {
        V.bb(bHm);
        this.cy();
        this.bh("oncc")
    };
    p.Pu = C();
    bwa = p.Pu.bi(p.eD, true);
    bwa.cc = function() {
        p.Pu.bw.cc.call(this);
        this.yU.style.display = "none";
        E.ba(this.bbK, "warmt-ok")
    };
    p.bSV = C();
    cUO = p.bSV.bi(p.eD, true);
    cUO.cc = function() {
        p.Pu.bw.cc.call(this);
        this.yU.style.display = "none"
    };
    p.clp = C();
    cUP = p.clp.bi(p.eD, true);
    cUP.bz = function(I) {
        I = I || O;
        p.eD.bw.bz.call(this, I);
        this.bHo("onok", I.onok || F);
        this.bHo("oncc", I.oncc || F);
        this.bbK.innerHTML = I.c1 || "";
        this.bwb.innerHTML = I.c2 || "";
        this.zY.innerText = I.okbtntxt || "确 定";
        this.yU.innerText = I.ccbtntxt || "取 消";
        var coj = I.warmtState || "fail";
        if (coj == "ok") {
            E.bf(this.bbK, "warmt-noicon");
            E.ba(this.bbK, "warmt-ok");
            this.bbK.style.visibility = ""
        } else if (coj == "fail") {
            E.bf(this.bbK, "warmt-noicon");
            E.bf(this.bbK, "warmt-ok");
            this.bbK.style.visibility = ""
        } else if (coj == "hidden") {
            this.bbK.style.visibility = "hidden"
        } else if (coj == "noicon") {
            E.bf(this.bbK, "warmt-ok");
            E.ba(this.bbK, "warmt-noicon");
            this.bbK.style.visibility = ""
        }
    };
    p.cVr = C();
    cUS = p.cVr.bi(p.clp, true);
    cUS.cc = function() {
        p.cVr.bw.cc.call(this);
        this.yU.style.display = "none"
    };
    p.cwL = C();
    duJ = p.cwL.bi(p.eD, true);
    duJ.bz = function(I) {
        I = I || O;
        this.zY.innerHTML = I.okText || "确 定";
        this.yU.innerHTML = I.ccText || "取 消";
        E.ba(this.bbK, "warmt-ok");
        p.cwL.bw.bz.call(this, I)
    }
})(); (function() {
    var p = P("loft.w"),
    jT,
    cI,
    bSo = false,
    rj = {},
    buB = "<div class=\"exif\" style=\"display:none;\" onclick=\"loft.g.stopBubble(event);\"><div class=\"exifbg\"></div><a class=\"w-ii\"  onclick=\"this.parentNode.className= 'exif exif-open'\"></a><a class=\"w-ii w-ii-hover\" onclick=\"this.parentNode.className='exif'\"></a><table><tbody><tr><th>品牌</th><td>${make||'-'}</td></tr><tr><th>型号</th><td>${model||'-'}</td></tr><tr><th>焦距</th><td>${focalLength||'-'}</td></tr><tr><th>光圈</th><td>${apertureValue||'-'}</td></tr><tr><th>快门速度</th><td>${exposureTime||'-'}</td></tr><tr><th>ISO</th><td>${isoSpeedRatings||'-'}</td></tr><tr><th>曝光补偿</th><td>${exposureBiasValue||'-'}</td></tr><tr><th>镜头</th><td><div class=\"exifitm\" title=\"${lens||''}\">${lens||'-'}</div></td></tr></tbody></table></div>";
    p.nX = C();
    jT = p.nX.bi(P(N.ui).ga, true);
    jT.bq = function() {
        this.bHr.apply(this, arguments);
        var g = P("loft.g");
        g.stopBubble = V.qK
    };
    jT.bz = function(I) {
        I = I || O;
        p.nX.bw.bz.call(this, I);
        window["__photo_showing_lock__"] = true;
        V.bHo(document, "keydown", this.WP);
        if (window.addEventListener) {
            window.addEventListener("DOMMouseScroll", this.Hf, false)
        }
        V.bHo(document, "mousewheel", this.Hf);
        this.BS = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dp = document.documentElement || document.body;
        this.buA = dp.style.overflowY;
        this.buz = dp.style.overflowX;
        dp.style.overflowY = "hidden";
        dp.style.overflowX = "hidden";
        this.buw = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
    jT.bHC = function(bl, I) {
        p.nX.bw.bHC.call(this, bl, I);
        this.sG = I.photos || [];
        this.bC = I.index || 0;
        window.Theme = window.Theme || O;
        this.buv = {
            cctype: I.cctype || window.Theme.CcType || 0,
            imageProtected: !!I.contextValue || !!window.Theme.ImageProtected,
            contextValue: I.contextValue || window.Theme.ContextValue || "",
            firstShowPhoto: this.sG[this.bC],
            authorId: I.authorId
        };
        this.Ot()
    };
    jT.Ot = function() {
        var dp = document.documentElement || document.body;
        if (B.dh) {
            this.fG.style.width = dp.scrollWidth + "px";
            this.fG.style.height = dp.scrollHeight + "px"
        }
        window.setTimeout(function() {
            this.fG.style.opacity = .9
        }.bHk(this), 1);
        this.Xd.style.top = this.buw + "px";
        this.Xe.style.display = this.oz.style.display = this.sG.length <= 1 ? "none": "";
        this.Xf();
        this.BT.style.display = "";
        bSo = false;
        this.fo = p.BV.bG(this.sG, this.BT, this.buv);
        this.Xk();
        this.Xl = window.setInterval(this.Xk.bHk(this), 280)
    };
    jT.Xk = function() {
        var dp = document.documentElement || document.body,
        ll = dp.clientWidth,
        nq = dp.clientHeight,
        Xo = ll / nq;
        this.fo[this.bC].Sy();
        this.BT.style.width = ll * this.sG.length + "px";
        this.Xd.style.height = nq + "px";
        this.oz.style.left = ll - 60 + "px"
    };
    jT.cU = function() {
        return "widgetcommon photoshow"
    };
    jT.cM = function() {
        return '<div class="a-show-mask m-mask wtag" style="opacity:0;"></div><table class="m-bphoto wtag"><tbody><tr><td><div class="photos wtag" style="position:absolute;_position:relative;left:0;top:0;width:1000000px;height:100%;"></div><a title="上一张" class="wtag w-pctrl w-pctrl-pre" href="#">上一张</a><a title="下一张" class="wtag w-pctrl w-pctrl-nxt" href="#" style="right:auto;">下一张</a></td></tr></tbody></table>'
    };
    jT.cK = function() {
        p.nX.bw.cK.call(this);
        if (this.Xl) window.clearInterval(this.Xl);
        this.fo = p.BV.db(this.fo);
        this.BT.style.display = "none";
        this.fG.style.opacity = 0;
        V.iJ(document, "keydown", this.WP);
        window["__photo_showing_lock__"] = false;
        if (window.removeEventListener) {
            window.removeEventListener("DOMMouseScroll", this.Hf, false)
        }
        V.iJ(document, "mousewheel", this.Hf)
    };
    jT.cc = function() {
        var bHl = E.bj(this.Y, "wtag"),
        i = 0;
        this.fG = bHl[i++];
        this.Xd = bHl[i++];
        this.BT = bHl[i++];
        this.Xe = bHl[i++];
        this.oz = bHl[i++];
        V.bHo(this.Y, "click", this.buu.bHk(this));
        V.bHo(this.Xe, "click", this.iT.bHk(this, -1));
        V.bHo(this.oz, "click", this.iT.bHk(this, 1));
        this.WP = this.Cf.bHk(this);
        this.Hf = this.but.bHk(this)
    };
    jT.buu = function(bHm) {
        var X = V.be(bHm);
        if (X == this.fo[this.bC].bD) {
            if (this.bC + 1 == this.sG.length) {
                this.HM(bHm)
            } else {
                this.iT(1, bHm)
            }
        } else {
            this.HM(bHm)
        }
    };
    jT.iT = function(is, bHm) {
        V.bb(bHm);
        if (!this.sG || this.sG.length <= 1) return;
        var Or = this.bC;
        var Xy = (this.bC + is + this.sG.length) % this.sG.length;
        this.bC = Xy;
        this.fo[Or].bus();
        this.fo[Xy].bur();
        this.Xf()
    };
    jT.Xf = function() {
        var dp = document.documentElement || document.body,
        ll = dp.clientWidth;
        this.BT.style.left = -ll * this.bC + "px"
    };
    jT.but = function(bHm) {
        var delta = 0;
        if (bHm.wheelDelta) {
            delta = bHm.wheelDelta / Math.abs(bHm.wheelDelta);
            if (B.wZ) delta = -delta
        } else if (bHm.detail) {
            delta = -bHm.detail / Math.abs(bHm.detail)
        }
        this.iT( - delta)
    };
    var Oq = [37, 38, 39, 40, 27];
    jT.Cf = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode),
        Q = U.fO(Oq, rB);
        V.bb(bHm);
        if (Q == -1) return;
        var X = V.be(bHm);
        switch (Q) {
        case 0:
        case 1:
            this.iT( - 1);
            break;
        case 2:
        case 3:
            this.iT(1);
            break;
        case 4:
            this.HM()
        }
    };
    jT.HM = function(bHm) {
        V.bb(bHm);
        var dp = document.documentElement || document.body;
        dp.style.overflowY = this.buA || "";
        dp.style.overflowX = this.buz || "";
        document.documentElement.scrollTop = document.body.scrollTop = this.BS;
        p.nX.db(this)
    };
    var buq = E.gD('<table class="photowrap" style="width:1640px;"><tr><td><div class="bphoto" style="background-color:transparent;"><img class="xtag a-show a-show-photo"><a class="rphlink xtag" href="#" target="_blank" style="display:none;">查看原图（1280x1024）&gt;</a><div class="rinfo xtag" onclick="loft.g.stopBubble(event);" style="display:none;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;-moz-transition:opacity 0.3s;-o-transition:opacity 0.3s;"></div><div class="w-load2 xtag" style="display:none;"><div class="load">&nbsp;</div></div></div></td></tr></table>');
    p.BV = C();
    cI = p.BV.bi(P(N.ut).fc, true);
    cI.bq = function() {
        this.bHr(buq);
        this.bhq = E.ft(buB);
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.bD = bHl[i++];
        this.xZ = bHl[i++];
        this.sl = bHl[i++];
        this.cQ = bHl[i++];
        V.bHo(this.xZ, "click", V.qK.bHk(null));
        V.bHo(this.bD.parentNode, "contextmenu", this.buo.bHk(this));
        V.bHo(this.bD.parentNode, "mouseover", this.XQ.bHk(this, true));
        V.bHo(this.bD.parentNode, "mouseout", this.XQ.bHk(this, false));
        if ( !! ("ontouchstart" in window)) {
            V.bHo(this.bD.parentNode, "touchstart", this.dsK.bHk(this));
            V.bHo(this.bD.parentNode, "touchend", this.dsJ.bHk(this));
            this.sI = null
        }
        V.bHo(this.bD, "load", this.vb.bHk(this))
    };
    cI.jW = function(bH) {
        if (!bH || !loft.x.ceZ(bH.orign) || (bH.ow || 0) <= 1680) {
            return bH || {}
        }
        var eC = {};
        eC.ow = bH.ow || 1;
        eC.oh = bH.oh || 1;
        var no = eC.ow / eC.oh;
        if (eC.ow > 2e3) {
            eC.ow = 2e3;
            eC.oh = parseInt(2e3 / no)
        }
        eC.orign = loft.x.bJR(bH.orign, eC.ow, eC.oh, 1, false);
        return eC
    };
    cI.ce = function(bHn) {
        p.BV.bw.ce.call(this, bHn);
        this.eU = bHn;
        this.On = true;
        var eC = this.jW(this.eU);
        this.xY = eC.orign || "";
        this.uk = eC.ow || 1;
        this.xX = eC.oh || 1;
        this.Cn = this.uk / this.xX;
        if (this.uk > 2e3) {
            this.uk = 2e3;
            this.xX = parseInt(1680 / this.Cn)
        }
        if (B.oc) {
            if (this.xY != N.rc.r + "empty.png" && this.bD.src == this.xY) {
                this.xY = this.xY + "?copyone_" + U.cA()
            }
        }
        var dp = document.documentElement || document.body,
        ll = dp.clientWidth,
        nq = dp.clientHeight;
        this.Y.style.width = ll + "px";
        this.Y.style.height = nq + "px";
        this.bD.style.visibility = "hidden";
        this.bD.style.width = "500px";
        this.bD.style.height = 500 / this.Cn + "px";
        this.bD.style.display = "";
        this.bZJ();
        this.sl.style.display = "none"
    };
    cI.bZJ = function() {
        if (bSo || this.cog == this.eU) {
            window.setTimeout(function() {
                this.bD.src = this.xY
            }.bHk(this), 20);
            window.setTimeout(function() {
                this.cQ.style.display = this.On ? "": "none"
            }.bHk(this), 100);
            this.Om(this.xY)
        } else {
            window.setTimeout(this.bZJ.bHk(this), 100)
        }
    };
    cI.bHC = function(I) {
        I = I || O;
        this.Co = !!I.imageProtected;
        this.bun = I.contextValue || "";
        this.buj = I.cctype || 0;
        this.cog = I.firstShowPhoto;
        this.dsI = I.authorId || 0;
        this.bHo("onblack", I.onblack || F)
    };
    cI.cK = function() {
        E.bf(this.bD, "a-show-do");
        this.bD.src = N.rc.r + "empty.png";
        this.bD.style.opacity = 1;
        this.bD.style.display = "none";
        this.cQ.style.display = "none";
        E.hv(this.Oh);
        this.xZ.style.display = "none";
        p.BV.bw.cK.apply(this, arguments)
    };
    cI.bus = function() {
        var dp = document.documentElement || document.body,
        ll = dp.clientWidth,
        nq = dp.clientHeight;
        var Yr = parseInt(this.bD.style.width) || 0,
        oE = parseInt(this.bD.style.height) || 0;
        if (Yr > 0 && oE > 0) {
            this.bD.style.height = oE / 4 + "px";
            this.bD.style.width = Yr / 4 + "px"
        }
        this.bD.style.opacity = .5
    };
    cI.bur = function() {
        this.Sy();
        this.bD.style.opacity = 1
    };
    cI.Sy = function() {
        var dp = document.documentElement || document.body,
        ll = dp.clientWidth,
        nq = dp.clientHeight,
        Xo = ll / nq;
        this.Y.style.width = ll + "px";
        this.Y.style.height = nq + "px";
        if ( !! this.On) return;
        if (this.Cn > Xo) {
            if (this.uk > ll - 100) {
                this.bD.style.width = ll - 100 + "px";
                this.bD.style.height = (ll - 100) / this.Cn + "px"
            } else {
                this.bD.style.width = this.uk + "px";
                this.bD.style.height = this.xX + "px"
            }
        } else {
            if (this.xX > nq - 100) {
                this.bD.style.height = nq - 100 + "px";
                this.bD.style.width = (nq - 100) * this.Cn + "px"
            } else {
                this.bD.style.height = this.xX + "px";
                this.bD.style.width = this.uk + "px"
            }
        }
    };
    cI.vb = function(bHm) {
        if (this.bD.src == N.rc.r + "empty.png") return;
        this.On = false;
        bSo = true;
        this.cQ.style.display = "none";
        this.bD.style.visibility = "visible";
        E.ba(this.bD, "a-show-do");
        this.Sy();
        this.bui();
        if ( !! this.Co && (!loft.c.cm.userId || !this.dsH() || this.bun.indexOf("转载自") > 0)) {
            this.xZ.style.display = "none"
        } else {
            if ( !! this.Co) {
                this.xZ.title = "仅作者可见";
                this.xZ.innerText = "查看原图（" + this.uk + "x" + this.xX + "）>(仅作者可见)"
            } else {
                this.xZ.innerText = "查看原图（" + this.uk + "x" + this.xX + "）>"
            }
            this.xZ.style.display = "";
            this.xZ.href = this.xY
        }
    };
    cI.dsH = function() {
        var io = loft.c.jg,
        i = 0,
        l = io.length;
        for (; i < l; i++) {
            if (io[i].blogId === this.dsI) {
                return true
            }
        }
        return false
    };
    cI.buo = function(bHm) {
        if ( !! this.Co) {
            this.sl.innerHTML = this.bun || "TEST";
            var bug = E.tz(this.bD),
            bud = E.jO(this.bD);
            this.sl.style.left = V.IO(bHm) - bug + "px";
            this.sl.style.top = V.vS(bHm) - bud + "px";
            this.sl.style.opacity = "0.8";
            this.sl.style.display = "";
            if ( !! this.Ok) this.Ok = window.clearTimeout(this.Ok);
            if ( !! this.Oi) this.Oi = window.clearTimeout(this.Oi);
            this.Ok = window.setTimeout(function() {
                this.sl.style.opacity = "0"
            }.bHk(this), 2700);
            this.Oi = window.setTimeout(function() {
                this.sl.style.display = "none"
            }.bHk(this), 3e3)
        }
        if ( !! this.Co) {
            V.bb(bHm);
            bHm.returnValue = !this.Co;
            return ! this.Co
        } else {
            bHm.returnValue = true;
            return true
        }
    };
    cI.bui = function() {
        var dc;
        if ( !! this.Oh) E.hE(this.Oh);
        switch (this.buj) {
        case 1:
            dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nc-nd/2.5/deed.zh" class="w-cc1 w-cc1-1" target="_blank" title="署名-非商业性使用-禁止演绎">署名-非商业性使用-禁止演绎</a>';
            break;
        case 2:
            dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nc-sa/2.5/deed.zh" class="w-cc1 w-cc1-2" target="_blank" title="署名-非商业性使用-相同方式共享">署名-非商业性使用-相同方式共享</a>';
            break;
        case 3:
            dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nc/2.5/deed.zh" class="w-cc1 w-cc1-3" target="_blank" title="署名-非商业性使用">署名-非商业性使用</a>';
            break;
        case 4:
            dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nd/2.5/deed.zh" class="w-cc1 w-cc1-4" target="_blank" title="署名-禁止演绎">署名-禁止演绎</a>';
            break;
        case 5:
            dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-sa/2.5/deed.zh" class="w-cc1 w-cc1-5" target="_blank" title="署名-相同方式共享">署名-相同方式共享</a>';
            break;
        case 6:
            dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by/2.5/deed.zh" class="w-cc1 w-cc1-6" target="_blank" title="署名">署名</a>';
            break
        }
        if ( !! dc) {
            this.Oh = E.eY(dc);
            this.bD.parentNode.appendChild(this.Oh)
        }
    };
    cI.dsK = function(bHm) {
        if ( !! this.Co) {
            V.bb(bHm);
            this.sI = new Date
        }
    };
    cI.dsJ = function(bHm) {
        if ( !! this.Co && !!this.sI) {
            V.bb(bHm);
            var hD = new Date;
            if (hD - this.sI > 1e3) {
                try {
                    this.sl.innerHTML = this.bun || "TEST";
                    var bug = E.tz(this.bD),
                    bud = E.jO(this.bD);
                    var cQD = bHm.touches[0] || bHm.changedTouches[0];
                    this.sl.style.left = cQD.pageX - bug + "px";
                    this.sl.style.top = cQD.pageY - bud + "px";
                    this.sl.style.opacity = "0.8";
                    this.sl.style.display = "";
                    if ( !! this.Ok) this.Ok = window.clearTimeout(this.Ok);
                    if ( !! this.Oi) this.Oi = window.clearTimeout(this.Oi);
                    this.Ok = window.setTimeout(function() {
                        this.sl.style.opacity = "0"
                    }.bHk(this), 2700);
                    this.Oi = window.setTimeout(function() {
                        this.sl.style.display = "none"
                    }.bHk(this), 3e3)
                } catch(e) {}
            }
            this.sI = null
        }
    };
    cI.XQ = function(gu, bHm) {
        if (!this.uw) return;
        var eF = V.be(bHm,
        function(X) {
            if (E.cr(X, "exif")) return true;
            if (X.tagName == "IMG") return true;
            return false
        });
        if ( !! eF) {
            if (this.uw.className === "exif exif-open") return;
            this.uw.style.display = !!gu ? "": "none"
        }
    };
    cI.Om = function(fV) {
        if (!fV) return;
        var bx = U.bcq(fV),
        bg = rj[bx];
        if ( !! this.uw) {
            E.hE(this.uw);
            delete this.uw
        }
        if (!bg) {
            if (!/\.(?:jpg|jpeg)$/.test(fV) && !loft.x.ceZ(fV)) {
                rj[bx] = "none";
                return
            }
            rj[bx] = "loading";
            J.br(location.dwr, "ImageBean", "getExif", fV, this.Cu.bHk(this, bx))
        } else {
            if (U.co(bg, "string") && (bg === "loading" || bg === "none")) {
                return
            } else {
                this.Cu(bx, bg)
            }
        }
    };
    cI.Cu = function(bx, iH) {
        rj[bx] = iH || "none";
        if (!iH) return;
        this.uw = E.eY(E.dG(this.bhq, iH));
        this.bD.parentNode.appendChild(this.uw)
    }
})(); (function() {
    var netease = window.netease || {};
    window.netease = netease;
    netease.lofter = {};
    netease.lofter.widget = {};
    var Ft = document.createDocumentFragment();
    var browser = netease.lofter.browser = function() {
        var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
            ie: !!window.ActiveXObject,
            opera: !!opera && opera.version,
            webkit: agent.indexOf(" applewebkit/") > -1,
            mac: agent.indexOf("macintosh") > -1,
            quirks: document.compatMode == "BackCompat"
        };
        browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera;
        var version = 0;
        if (browser.ie) {
            version = parseFloat(agent.match(/msie (\d+)/)[1]);
            browser.ie8 = !!document.documentMode;
            browser.ie8Compat = document.documentMode == 8;
            browser.ie7Compat = version == 7 && !document.documentMode || document.documentMode == 7;
            browser.ie6Compat = version < 7 || browser.quirks;
            if (version >= 10 || document.documentMode >= 7) browser.ie6Compat = false
        }
        if (browser.gecko) {
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if (geckoRelease) {
                geckoRelease = geckoRelease[1].split(".");
                version = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1
            }
        }
        if (/chrome\/(\d+\.\d)/i.test(agent)) {
            browser.chrome = +RegExp["$1"]
        }
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
            browser.safari = +(RegExp["$1"] || RegExp["$2"])
        }
        if (browser.opera) version = parseFloat(opera.version());
        if (browser.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
        browser.version = version;
        browser.isCompatible = !browser.mobile && (browser.ie && version >= 6 || browser.gecko && version >= 10801 || browser.opera && version >= 9.5 || browser.air && version >= 1 || browser.webkit && version >= 522 || false);
        return browser
    } ();
    var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko;
    if (!window.Node) {
        window.Node = {
            ELEMENT_NODE: 1
        }
    }
    if (browser.gecko) {
        HTMLElement.prototype["__defineGetter__"]("innerText",
        function() {
            return this.textContent
        });
        HTMLElement.prototype["__defineSetter__"]("innerText",
        function(Z) {
            this.textContent = Z
        });
        HTMLElement.prototype.insertAdjacentElement = function(DW, X) {
            if (!DW || !X) return;
            switch (DW) {
            case "beforeEnd":
                this.appendChild(X);
                return;
            case "beforeBegin":
                this.parentNode.insertBefore(X, this);
                return;
            case "afterBegin":
                !this.firstChild ? this.appendChild(X) : this.insertBefore(X, this.firstChild);
                return;
            case "afterEnd":
                !this.nextSibling ? this.parentNode.appendChild(X) : this.parentNode.insertBefore(X, this.nextSibling);
                return
            }
        };
        HTMLElement.prototype.insertAdjacentHTML = function(DW, dc) {
            if (!DW || !dc) return;
            this.insertAdjacentElement(DW, document.createRange().createContextualFragment(dc))
        }
    }
    Function.prototype.bHk = function() {
        var de = arguments,
        fb = arguments[0],
        iA = this;
        return function() {
            var bdL = [].slice.call(de, 1); [].push.apply(bdL, arguments);
            return iA.apply(fb || window, bdL)
        }
    };
    var utils = netease.lofter.utils = {
        trim: function(fv) {
            if (fv != null) {
                return fv.replace(/(^\s*)|(\s*$)/g, "")
            } else {
                return null
            }
        },
        stopBubble: function(bHm) {
            bHm = bHm ? bHm: window.event;
            if (!bHm) return;
            if ( !! (window.attachEvent && !window.opera)) {
                bHm.cancelBubble = true
            } else {
                bHm.stopPropagation()
            }
            return bHm
        },
        stopDefault: function(bHm) {
            if (!bHm) return; !! bHm.preventDefault ? bHm.preventDefault() : bHm.returnValue = false
        },
        stopEvent: function(bHm) {
            this.stopBubble(bHm);
            this.stopDefault(bHm)
        },
        addEvent: function(X, by, ev, vf) {
            X = this.getElement(X);
            if (!X || !by || !ev) return;
            if ( !! document.addEventListener) {
                X.addEventListener(by, ev, !!vf)
            } else {
                X.attachEvent("on" + by, ev)
            }
        },
        delEvent: function(X, by, ev, vf) {
            X = this.getElement(X);
            if (!X || !by || !ev) return;
            if ( !! document.addEventListener) {
                X.removeEventListener(by, ev, !!vf)
            } else {
                X.detachEvent("on" + by, ev)
            }
        },
        isExpectedString: function(pattern, str) {
            if (pattern.test(str)) {
                return true
            } else {
                return false
            }
        },
        hasClassName: function(X, bMB) {
            bMB = this.trim(bMB);
            if (!X || !X.className || !bMB) return false;
            var cDn = "\\s+" + bMB + "\\s+";
            var bPV = new RegExp(cDn);
            return this.isExpectedString(bPV, " " + X.className + " ")
        },
        getChildElements: function(X, cj) {
            X = this.getElement(X);
            if (!X) return null;
            var bu = [];
            for (var bk = X.children || X.childNodes,
            i = 0,
            l = bk.length; i < l; i++) {
                if (bk[i].nodeType != Node.ELEMENT_NODE || cj && !this.hasClassName(bk[i], cj)) continue;
                bu.push(bk[i])
            }
            return bu
        },
        getElementsByClassName: function(cgO, bMB) {
            var X = [];
            cgO = utils.getElement(cgO);
            if (typeof cgO != "object" || cgO == null) {
                cgO = document
            }
            var Qu = cgO.getElementsByTagName("*");
            for (var i = 0; i < Qu.length; i++) {
                if (this.hasClassName(Qu[i], bMB)) {
                    X[X.length] = Qu[i]
                }
            }
            return X
        },
        addClassName: function(cp, bMB) {
            if (!this.hasClassName(cp, bMB)) {
                cp.className = cp.className + " " + bMB
            }
        },
        delClassName: function(cp, bMB) {
            if ( !! this.hasClassName(cp, bMB)) {
                var cDn = "(^" + bMB + "\\s+)" + "|" + "(\\s+" + bMB + "\\s+)" + "|" + "(\\s+" + bMB + "$)";
                var bPV = new RegExp(cDn, "g");
                cp.className = cp.className.replace(bPV, " ")
            }
        },
        removeElement: function(X) {
            X = this.getElement(X);
            if (!X || !X.parentNode) return;
            X.parentNode.removeChild(X);
            if (browser.ie && !!X.outerHTML) X.outerHTML = ""
        },
        removeElementByEC: function() {
            for (var i = 0,
            l = arguments.length,
            X; i < l; i++) {
                X = utils.getElement(arguments[i]);
                X && Ft.appendChild(X)
            }
        },
        getElement: function(X) {
            if (typeof X == "string" || typeof X == "number") {
                X = document.getElementById(X)
            }
            return X
        }
    };
    var pageLayer = netease.lofter.widget.pageLayer = function() {};
    pageLayer.YV = function(bl, I) {
        if ( !! this.eb) {
            this.eb.resetOption(I)
        } else {
            this.eb = new this;
            this.eb.init(bl, I)
        }
        return this.eb
    };
    pageLayer.dyl = function(bl, I) {
        if ( !! this.cqd) {
            this.cqd.resetOption(I)
        } else {
            this.cqd = new this;
            this.cqd.init(bl, I)
        }
        return this.cqd
    };
    pageLayer.prototype = {
        init: function(bl, I) {
            this.Y = document.createElement("div");
            this.Y.className = this.getSpace();
            this.Y.innerHTML = this.getXhtml();
            this.initNode();
            this.reset(bl, I);
            utils.addEvent(window, "resize", this.resizewin.bHk(this, false));
            utils.addEvent(document.body, "click", this.onDocumentClick.bHk(this))
        },
        onDocumentClick: function(bHm) {
            if (!this.cqb) {
                if ( !! this.cbBeforeDestroy) {
                    this.cbBeforeDestroy()
                } else {
                    this.destroy()
                }
            }
        },
        onKeyPress: function(bHm) {
            var bK = bHm.keyCode;
            if (bK == 38 || bK == 40) {
                if (!this.destroyed() && this.cgQ) {
                    utils.stopDefault(bHm)
                }
            }
        },
        getSpace: function() {
            return "w-pagelayer"
        },
        getXhtml: function() {
            return '<div class="pagelayer ztag"><div class="lyloading a-show ztag"></div><div class="lycover a-show ztag">&nbsp;</div><div class="lyscroll ztag" id="lyscroll"><a href="#" class="lyclosed ztag"></a><div class="lybody ztag"><div class="lycont a-show ztag"></div></div></div></div>'
        },
        initNode: function() {
            var bHl = utils.getElementsByClassName(this.Y, "ztag");
            var Q = 0;
            this.cDI = bHl[Q++];
            this.cgR = bHl[Q++];
            this.bQr = bHl[Q++];
            this.cQo = bHl[Q++];
            this.cQp = bHl[Q++];
            this.dym = bHl[Q++];
            this.bLG = bHl[Q++];
            utils.addEvent(this.bLG, "click", this.onLycontClick.bHk(this));
            utils.addEvent(this.cQp, "click", this.onClosedClick.bHk(this))
        },
        onLycontClick: function(bHm) {
            if (!this.cqb) {
                utils.stopBubble(bHm)
            }
            if (browser.gecko && !!this.cgQ) {
                utils.delEvent(document.body, "keydown", this.onKeyPress.bHk(this));
                this.cgQ = false
            }
        },
        onClosedClick: function(bHm) {
            utils.stopEvent(bHm);
            if ( !! this.cbBeforeDestroy) {
                this.cbBeforeDestroy()
            } else {
                this.destroy()
            }
        },
        reset: function(bl, I) {
            I = I || {};
            bl = utils.getElement(bl);
            this.dL = bl == document.documentElement ? document.body: bl;
            this.resetOption(I);
            if (browser.gecko && !this.cgQ) {
                this.cgQ = true;
                utils.addEvent(document.body, "keydown", this.onKeyPress.bHk(this))
            }
        },
        resetOption: function(I) {
            utils.addClassName(this.cgR, "a-show-do");
            if ( !! I.showClosedIcon) {
                this.cQp.style.display = "block"
            }
            this.dtT = I.notSetContMinHeight || false;
            this.cqb = I.noDocClickDestroy || false;
            this.cDN = (!browser.ie || browser.version >= 10) && I.isNeedAnimation || false;
            this.dtS = I.pageShowInVerticalMiddle || false;
            this.ng = I["class"] || "";
            utils.addClassName(this.Y, this.ng);
            this.cbAfterSetHtmlContent = I.cbAfterSetHtmlContent;
            this.cbBeforeDestroy = I.cbBeforeDestroy;
            this.cbAfterDestroy = I.cbAfterDestroy;
            if (!this.lN) {
                this.hideScroll();
                this.appendToParent( !! I.before)
            }
            this.showCover(I.bgcolor, I.opacity);
            this.setHtmlContent(I.html)
        },
        getNoDocClickDestroy: function() {
            return this.cqb
        },
        setNoDocClickDestroy: function(dtR) {
            this.cqb = dtR || false
        },
        hideScroll: function() {
            if ( !! this.cQy) return;
            this.cQy = true;
            var dp = document.documentElement || document.body;
            this.BS = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            this.buA = dp.style.overflowY;
            var cQB = dp.clientWidth || 0;
            if (this.buA != "hidden") {
                dp.style.overflowY = "hidden";
                var Az = dp.clientWidth || 0;
                if (Az > cQB) {
                    dp.style.paddingRight = Az - cQB + "px";
                    dp.style.width = "auto"
                }
            }
            this.buz = dp.style.overflowX;
            if (this.buz != "hidden") {
                dp.style.overflowX = "hidden";
                this.buw = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            }
        },
        showHtmlContent: function() {
            utils.delClassName(this.cgR, "a-show-do");
            utils.addClassName(this.bLG, "a-show-do")
        },
        hideHtmlContent: function() {
            utils.delClassName(this.bLG, "a-show-do");
            utils.addClassName(this.cgR, "a-show-do")
        },
        setHtmlContent: function(dc) {
            utils.addClassName(this.cgR, "a-show-do");
            this.beforeSetHtmlContent(dc);
            if ( !! this.cDN && !!this.bLG.innerHTML) {
                this.doAnimate(true);
                window.setTimeout(this.doSetHtmlContent.bHk(this, dc), 280)
            } else {
                this.doSetHtmlContent(dc)
            }
        },
        beforeSetHtmlContent: function(dc) {
            if ( !! dc && browser.ie && browser.version < 10) {
                this.bLG.style.visibility = "hidden"
            }
        },
        doSetHtmlContent: function(dc) {
            if (typeof dc == "object") {
                this.bLG.innerHTML = "";
                this.bLG.insertAdjacentElement("beforeEnd", dc)
            } else {
                this.bLG.innerHTML = dc || ""
            }
            this.afterSetHtmlContent(dc);
            if ( !! this.cbAfterSetHtmlContent && !!this.dtS) {
                this.cbAfterSetHtmlContent(this.bLG)
            } else if ( !! this.cbAfterSetHtmlContent) {
                this.cbAfterSetHtmlContent()
            }
        },
        afterSetHtmlContent: function(dc) {
            if (!dc) return;
            if ( !! dc && browser.ie && browser.version < 10) {
                window.setTimeout(this.setZoomForIE.bHk(this), 300)
            }
            if ( !! this.cDN) {
                window.setTimeout(this.doAnimate.bHk(this), 200)
            } else {
                this.doAnimate()
            }
            this.setLyContMinHeight()
        },
        doAnimate: function(dtP) {
            if (!dtP) {
                utils.addClassName(this.bLG, "a-show-do");
                utils.delClassName(this.cgR, "a-show-do")
            } else {
                utils.delClassName(this.bLG, "a-show-do")
            }
        },
        setLyContMinHeight: function() {
            if ( !! this.dtT) {
                return
            }
            if (!this.bLG.innerHTML) {
                return
            }
            if ( !! this.cDO) this.cDO = window.clearTimeout(this.cDO);
            this.cDO = window.setTimeout(this.doLyContMinHeight.bHk(this), 10)
        },
        doLyContMinHeight: function() {
            if (this.destroyed()) return;
            var gl = document.documentElement || document.body;
            var qx = gl.clientHeight || 1;
            var cDP = utils.getChildElements(this.bLG);
            var tD;
            if ( !! cDP && cDP.length == 1) {
                tD = cDP[0]
            }
            if (browser.ie6Compat) {
                if ( !! tD) {
                    tD.style.height = "auto"
                } else {
                    this.bLG.style.height = "auto"
                }
            } else {
                if ( !! tD) {
                    tD.style.minHeight = 0
                } else {
                    this.bLG.style.minHeight = 0
                }
            }
            var dtO = this.bLG.clientHeight || 1;
            var cmF = Math.ceil(qx * 3 / 4);
            if (cmF > dtO) {
                if (browser.ie6Compat) {
                    if ( !! tD) {
                        tD.style.height = cmF + "px"
                    } else {
                        this.bLG.style.height = cmF + "px"
                    }
                } else {
                    if ( !! tD) {
                        tD.style.minHeight = cmF + "px"
                    } else {
                        this.bLG.style.minHeight = cmF + "px"
                    }
                }
            }
        },
        setZoomForIE: function() {
            this.Y.style.zoom = 1;
            this.bLG.style.visibility = "visible"
        },
        showCover: function(cDV, bB) {
            this.resizewin(true);
            if ( !! bB || bB === 0) {
                this.bQr.style.opacity = 0;
                this.bQr.style.filter = "alpha(opacity=" + 0 + ")"
            }
            if (browser.ie && browser.version < 10) {
                window.setTimeout(this.showCoverForIE.bHk(this), 10)
            } else {
                this.bQr.style.visibility = "visible"
            }
            this.dyn = cDV;
            this.dyo = bB;
            if ( !! cDV) {
                this.bQr.style.backgroundColor = cDV
            } else {
                this.bQr.style.backgroundColor = ""
            }
            if ( !! bB || bB === 0) {
                this.bQr.style.opacity = bB / 100;
                this.bQr.style.filter = "alpha(opacity=" + bB + ")"
            } else {
                this.bQr.style.opacity = ""
            }
        },
        hideCover: function() {
            if (browser.ie && browser.version < 10) {
                this.bQr.style.visibility = "hidden"
            } else {
                this.bQr.style.opacity = 0
            }
        },
        showCoverForIE: function() {
            this.bQr.style.visibility = "visible"
        },
        resizewin: function(dtL) {
            if (!dtL) {
                this.setLyContMinHeight()
            }
            if (browser.ie6Compat) {
                var gl = document.documentElement || document.body;
                this.bQr.style.width = gl.clientWidth + "px";
                this.bQr.style.height = gl.clientHeight + "px";
                this.cQo.style.width = gl.clientWidth + "px";
                this.cQo.style.height = gl.clientHeight + "px";
                this.cDI.style.width = gl.clientWidth + "px";
                this.cDI.style.height = gl.clientHeight + "px";
                this.cDI.style.top = this.buw || 0 + "px"
            }
        },
        appendToParent: function(pa) {
            if (!this.Y) return;
            this.revertBody(pa)
        },
        revertBody: function(pa) {
            if (!this.dL || !this.Y) return; ! pa ? this.dL.appendChild(this.Y) : this.dL.insertAdjacentElement("afterBegin", this.Y);
            this.lN = true
        },
        destroy: function() {
            if (browser.gecko && !!this.cgQ) {
                utils.delEvent(document.body, "keydown", this.onKeyPress.bHk(this));
                this.cgQ = false
            }
            if (!this.destroyed()) {
                utils.delClassName(this.cgR, "a-show-do");
                if ( !! this.cDN) {
                    this.hideCover();
                    this.doAnimate(true);
                    window.setTimeout(this.recycleBody.bHk(this), 280)
                } else {
                    this.recycleBody()
                }
            }
            if ( !! this.cbAfterDestroy) this.cbAfterDestroy()
        },
        destroyed: function() {
            return ! this.lN
        },
        recycleBody: function() {
            this.lN = false;
            utils.removeElementByEC(this.Y);
            this.bLG.innerHTML = "";
            this.recoverScroll()
        },
        recoverScroll: function(bHm) {
            utils.stopEvent(bHm);
            var dp = document.documentElement || document.body;
            if (this.buz != "hidden") {
                dp.style.overflowX = this.buz || ""
            }
            if (this.buA != "hidden") {
                dp.style.paddingRight = 0;
                dp.style.width = "";
                dp.style.overflowY = this.buA || "";
                document.documentElement.scrollTop = document.body.scrollTop = this.BS
            }
            this.cQy = false
        }
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    bRx;
    p.cQL = C();
    bRx = p.cQL.prototype;
    bRx.bq = function(X, I) {
        this.lX = E.be(X);
        if (!this.lX) return;
        this.bHC(I)
    };
    bRx.bHC = function(I) {
        I = I || O;
        this.bfZ = I.from;
        this.EO = I.to;
        this.jX = I.time || 200;
        this.qU = I.callback || F;
        this.bhN = this.EO - this.bfZ;
        this.fg = this.bfZ;
        this.cHD = I.bounce || this.EO * .1;
        if (this.cHD <= 0) {
            this.cHD = 0
        }
        this.dsG = this.bfZ;
        this.cHC = this.EO + this.cHD;
        this.dsF = this.cHC - this.dsG;
        this.cHB = this.jX;
        this.coo = -2 * this.dsF / (this.cHB * this.cHB);
        this.dsE = -this.coo * this.cHB
    };
    bRx.JT = function(bg) {
        if (!this.lX) return;
        if (U.co(bg, "number") && bg >= 0) {
            this.lX.style.height = bg + "px"
        } else if (bg == "auto") {
            this.lX.style.height = bg
        }
    };
    bRx.bZN = function() {
        var zV = new Date,
        bge = zV - this.sI;
        if (bge > this.jX || this.fg == this.EO) {
            this.chw = window.clearTimeout(this.chw);
            this.JT(this.EO);
            this.dsD()
        } else {
            var ig = this.dsE * bge + this.coo * bge * bge / 2;
            if (ig <= 0) ig = .1;
            this.fg = this.bfZ + ig;
            if (this.fg >= this.EO) {
                this.fg = this.EO;
                this.chw = window.clearTimeout(this.chw);
                this.bZN()
            } else {
                this.JT(this.fg);
                this.chw = window.clearTimeout(this.chw);
                var btc = 10;
                if (p.bIv.ie || p.bIv.ie11plus) btc = 30;
                this.chw = window.setTimeout(this.bZN.bHk(this), btc)
            }
        }
    };
    bRx.dsD = function() {
        this.dsC = new Date;
        this.cnX = this.cHC;
        this.cQY()
    };
    bRx.cQY = function() {
        var zV = new Date,
        bge = zV - this.dsC;
        if (this.cnX <= this.EO) {
            this.coG = window.clearTimeout(this.coG);
            this.JT(this.EO);
            this.lX.style.height = "auto";
            this.lX.style.overflow = "visible";
            this.lX.style.opacity = 1
        } else {
            var ig = this.coo * bge * bge / 2;
            ig = ig / 3;
            if (ig >= 0) ig = -1;
            this.cnX = this.cHC + ig;
            if (this.cnX < this.EO) this.cnX = this.EO;
            this.JT(this.cnX);
            this.coG = window.clearTimeout(this.coG);
            var btc = 10;
            if (p.bIv.ie || p.bIv.ie11plus) btc = 30;
            this.coG = window.setTimeout(this.cQY.bHk(this), btc)
        }
    };
    bRx.dsB = function(I) {
        if ( !! I) {
            this.bHC(I)
        }
        if (p.bIv.ie && p.bIv.version < 7) {
            this.lX.style.height = "auto";
            this.lX.style.overflow = "visible";
            this.lX.style.opacity = 1;
            if ( !! this.qU) this.qU.call(this);
            return
        }
        this.sI = new Date;
        this.JT(this.bfZ);
        this.lX.style.overflow = "hidden";
        this.lX.style.opacity = 0;
        this.bZN(this.bfZ, this.EO)
    };
    bRx.dsA = function(I) {
        this.cRf = I.callback || F;
        this.lX.style.opacity = 0;
        window.setTimeout(function() {
            this.dsy = new Date;
            this.cbO = this.lX.clientHeight || this.EO;
            this.JT(this.cbO);
            this.lX.style.overflow = "hidden";
            this.cRi()
        }.bHk(this), 200)
    };
    bRx.cRi = function() {
        var zV = new Date,
        bge = zV - this.dsy;
        if (this.cbO <= this.bfZ) {
            this.coI = window.clearTimeout(this.coI);
            this.JT(this.bfZ);
            if ( !! this.cRf) this.cRf()
        } else {
            var ig = this.coo * bge * bge / 2;
            ig = ig / 2;
            if (ig >= 0) ig = -1;
            this.cbO = this.cbO + ig;
            if (this.cbO < this.bfZ) this.cbO = this.bfZ;
            this.JT(this.cbO);
            this.coI = window.clearTimeout(this.coI);
            var btc = 10;
            if (p.bIv.ie || p.bIv.ie11plus) btc = 80;
            this.coI = window.setTimeout(this.cRi.bHk(this), btc)
        }
    };
    bRx.fD = function(I) {
        this.dsB(I)
    };
    bRx.dsx = function(I) {
        this.dsA(I)
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    bPI,
    dsw;
    p.bRG = C();
    bPI = p.bRG.bi(P(N.ut).gY);
    dsw = p.bRG.bw;
    p.bRG.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    p.bRG.coK = function(I) {
        var hk = this.YV(I);
        if ( !! hk) {
            hk.coK(I)
        } else {}
        return hk
    };
    bPI.bq = function(I) {
        this.bHr();
        I = I || {};
        this.cGz = I.ue_cfg_develop || false;
        this.coL = I.ue_js_version || "";
        this.bKL = {};
        this.bz(I);
        this.dsv()
    };
    bPI.dsv = function() {
        if ( !! this.dsu) return;
        this.dsu = true;
        window.UEDITOR_HOME_URL = "";
        var dst = "https://l.bst.126.net/rsc/js/ueditor/editor_config.js?v=" + this.coL;
        J.Iv(dst, {
            charset: "utf-8",
            onload: this.dss.bHk(this)
        });
        var cGx;
        if ( !! this.cGz) {
            window.ueditorloadmode = "syncload";
            cGx = "http://l.bst.126.net/rsc/js/ueditor/uesrc/editor_api.js"
        } else {
            cGx = "https://l.bst.126.net/rsc/js/ueditor/output/r/ueditor_min.js?v=" + this.coL
        }
        var dsr = {
            charset: "utf-8",
            onload: this.dsq.bHk(this)
        };
        J.Iv(cGx, dsr)
    };
    bPI.bz = function(I) {
        I = I || {};
        if ( !! I.parent) {
            I.parent = I.parent.id || I.parent
        }
        if ( !! I.ongenueditor) {
            this.bHo("ongenueditor", I.ongenueditor || F)
        }
    };
    bPI.dss = function() {
        this.dsp = true;
        this.dso()
    };
    bPI.dsq = function() {
        this.dsn = true
    };
    bPI.dso = function() {
        if ( !! window.UEDITOR_CONFIG) {
            window.UEDITOR_CONFIG.focus = false;
            if (/opera\/(.*?)\s/i.test(window.navigator.userAgent)) {
                window.UEDITOR_CONFIG.initialStyle += "body{min-height:260px;padding:1px 8px 8px 8px;margin:0;*padding:0;*margin:8px;}"
            }
        }
    };
    bPI.coK = function(I) {
        if (!I || !I.parent) {
            loft.x.th("ueditormanager.js: 缺少parent，不能实例化编辑器");
            return
        }
        this.bRO = I.minFrameHeight || "";
        this.bRP = I.maxFrameHeight || "";
        this.cnG = I.autoHeightEnabled || false;
        if (I.forceNew) {
            if ( !! this.bKL[I.parent] && !!this.bKL[I.parent].uEditor) {
                this.bKL[I.parent].uEditor.destroy();
                this.bKL[I.parent].uEditor = null;
                this.bKL[I.parent] = null
            }
        }
        if ( !! this.bKL[I.parent] && !!this.bKL[I.parent].uEditor) {
            this.cSb(I.parent, this.bKL[I.parent].uEditor)
        } else {
            this.bKL[I.parent] = {
                state: "gening",
                timer: null,
                delay: 10,
                uEditor: null
            };
            this.cSe(I)
        }
    };
    bPI.chn = function(tF, bPK, bOp, cnC) {
        this.bRO = bPK || this.bRO;
        this.bRP = bOp || this.bRP;
        this.cnG = cnC || this.cnG;
        if ( !! tF) {
            this.cSB(tF)
        }
    };
    bPI.cSB = function(tF, bPK, bOp, cnC) {
        if (!tF) return;
        bPK = bPK || this.bRO;
        bOp = bOp || this.bRP;
        cnC = cnC || this.cnG;
        if ( !! cnC) {
            tF.enableAutoHeight && tF.enableAutoHeight(bPK, bOp)
        } else {
            tF.disableAutoHeight && tF.disableAutoHeight()
        }
    };
    bPI.cSb = function(bl, tF) {
        if ( !! tF) {
            try {
                tF.render(bl);
                this.cSB(tF);
                this.dsm(tF)
            } catch(e) {}
        }
    };
    bPI.dsm = function(tF) {
        if (p.bIv.ie && p.bIv.version >= 10 && document.documentMode >= 0 && !!tF) {
            try {
                V.iJ(tF.document.documentElement, "click", this.cSI.bHk(this, tF));
                V.bHo(tF.document.documentElement, "click", this.cSI.bHk(this, tF))
            } catch(e) {}
        }
    };
    bPI.cSI = function(tF) {
        if (tF) tF.focus()
    };
    bPI.cSe = function(I) {
        var bl = I.parent;
        if ( !! window.baidu && !!window.baidu.editor && !!window.baidu.editor.ui && !!window.baidu.editor.ui.Editor && !!this.dsp && !!this.dsn) {
            try {
                var uEditor_Instance = new baidu.editor.ui.Editor;
                this.cSb(bl, uEditor_Instance);
                V.bHo(uEditor_Instance.document, "dragenter",
                function() {}.bHk(this));
                V.bHo(uEditor_Instance.document, "dragover",
                function(bHm) {
                    V.bb(bHm)
                }.bHk(this));
                V.bHo(uEditor_Instance.document, "drop",
                function(bHm) {
                    V.bb(bHm)
                }.bHk(this))
            } catch(e) {
                this.bh("ongenueditor", {
                    parent: bl,
                    code: -1
                });
                this.bKL[bl].state = "error"
            }
            if ( !! uEditor_Instance) {
                this.bh("ongenueditor", {
                    parent: bl,
                    uEditorInstance: uEditor_Instance
                });
                this.bKL[bl].state = "ok";
                this.bKL[bl].uEditor = uEditor_Instance
            } else {
                this.bh("ongenueditor", {
                    parent: bl,
                    code: -1
                });
                this.bKL[bl].state = "error"
            }
        } else {
            this.bKL[bl].state = "retry";
            if (this.bKL[bl].delay < 3e5) {
                if ( !! this.bKL[bl].timer) this.bKL[bl].timer = window.clearTimeout(this.bKL[bl].timer);
                this.bKL[bl].timer = window.setTimeout(this.cSe.bHk(this, I), this.bKL[bl].delay);
                this.bKL[bl].delay = (this.bKL[bl].delay + 500) * 2
            } else {
                this.bKL[bl].state = "timeout"
            }
        }
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    wS,
    Xx,
    le,
    bHu = "ui-" + U.cA();
    var Xz = 2e3;
    var coM = "js-noSelect";
    var HL = "js-showlist";
    var cGv = "js-upperlist";
    var cSY = "js-nipple-hover";
    var XB = "js_selectListTag";
    var cTb = "js_selected_option";
    var cTc = "js-noDownListWhenOne";
    P(N.ui).fx("#<uispace>{position:relative;z-index:16;float:left;background-color:#fff;}#<uispace>.js-showlist{z-index:1600;}*[hidefocus]{outline:none;}#<uispace> .clearfix{zoom:1;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .ztxt{float:left;height:25px;line-height:25px;max-width:191px;font-size:16px;color:#777;cursor:pointer;}#<uispace> .zdwn{float:left;width:0;height:0;overflow:hidden;margin:10px;border-width:5px 5px 0 5px;border-style:solid;border-color:#aaa transparent transparent transparent;}#<uispace> .zlst{visibility:hidden;position:absolute;top:30px;left:-40px;}#<uispace> .zlst .case{width:254px;max-height:" + Xz + 'px;overflow:auto;overflow-x:hidden;border:1px solid #c2c2c2;background-color:#fff;}#<uispace> .zlst .nipple{position:absolute;top:-9px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #c2c2c2;/*border-color:transparent;*/border-image:none;}#<uispace> .zlst .nipple:after{content:"";position:absolute;top:1px;left:-9px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #fff;border-image:none;}#<uispace> .zlst .js-nipple-hover.nipple:after{border-bottom-color:#999;}#<uispace> .zlst.js-upperlist .nipple{top:auto;bottom:-9px;border-width:9px 9px 0;border-color:#c2c2c2 transparent transparent;}#<uispace> .zlst.js-upperlist .nipple:after{top:auto;bottom:1px;border-width:9px 9px 0;border-color:#fff transparent transparent;}#<uispace> .zlst.js-upperlist .js-nipple-hover.nipple:after{border-top-color:#999;border-bottom-color:transparent;}#<uispace> .zlst .zitm{padding:0 5px 0 40px;height:36px;line-height:36px;color:#444;font-size:16px;cursor:pointer;}#<uispace> .zlst .zitm:hover,#<uispace> .zlst .zitem.js-zhvr-910{color:#fff;background-color:#999;}#<uispace> .noSelect, #<uispace> .noSelect:hover{background-position:-230px -482px;}#<uispace>.js-noDownListWhenOne .zdwn,#<uispace>.js-noDownListWhenOne .zlst{display:none;}#<uispace>.js-noDownListWhenOne .ztxt{cursor:default;}#<uispace>.js-noSelect .ztxt,#<uispace>.js-noSelect .zdwn{cursor:default;}', bHu);
    p.sC = C();
    wS = p.sC.bi(P(N.ut).fc, true);
    Xx = p.sC.bw;
    wS.bq = function() {
        this.bHr();
        this.Y = document.cloneElement("div", "zitm thide");
        E.fy(this.Y, "js-zhvr-910");
        V.bHo(this.Y, "click", this.rF.bHk(this))
    };
    wS.bHC = function(I) {
        I = I || O;
        this.Hx = I.isTagSelect || false;
        this.Hw = I.isBlogSelect || false;
        this.bHo("onclick", I.onclick || F)
    };
    wS.ce = function(bHn) {
        this.bHq = bHn || O;
        var bg = this.bHq.t || this.bHq.n || this.bHq.v || " ";
        this.Y.title = bg;
        if ( !! this.Hx) {
            if (this.bHq.t == "使用过的标签" && this.bHq.v == "-1") {
                this.Y.style.display = "none"
            } else {
                this.Y.innerHTML = '<a href="#"><i>' + U.ew(bg) + "</i></a>"
            }
        } else if ( !! this.Hw) {
            if (this.bHq.t == "博客名称" && this.bHq.n == "博客名称" && this.bHq.v == "-1") {
                this.Y.style.display = "none"
            } else {
                this.Y.innerText = bg
            }
        } else {
            this.Y.innerText = bg
        }
    };
    wS.hY = function() {
        return this.bHq
    };
    wS.rF = function(bHm) {
        this.bh("onclick", this.bHq)
    };
    wS.cK = function() {
        this.Y.innerHTML = "";
        this.Y.style.display = "";
        this.cTg();
        this.dsl();
        Xx.cK.apply(this)
    };
    wS.dsk = function() {
        E.ba(this.Y, cTb)
    };
    wS.cTg = function() {
        E.bf(this.Y, cTb)
    };
    wS.coN = function(ca, bVZ) {
        var dsj = function(bVZ) {
            ca("mouseout", bVZ)
        }.bHk(this, bVZ);
        var dsi = function(bVZ) {
            ca("mouseover", bVZ)
        }.bHk(this, bVZ);
        V.bHo(this.Y, "mouseout", dsj);
        V.bHo(this.Y, "mouseover", dsi)
    };
    wS.dsl = function() {
        V.bJv(this.Y, "mouseout");
        V.bJv(this.Y, "mouseover")
    };
    p.jv = C();
    le = p.jv.bi(P(N.ui).ga, true);
    le.bq = function(bl, I) {
        this.eL = {
            onclick: this.DD.bHk(this)
        };
        this.bHr(bl, I)
    };
    le.bz = function(I) {
        I = I || O;
        this.Hx = I.isTagSelect || false;
        this.eL.isTagSelect = this.Hx;
        this.Hw = I.isBlogSelect || false;
        this.eL.isBlogSelect = this.Hw;
        this.Ho = I.items || [];
        this.bmB = I.showAvatar || false;
        this.XK = I.noSelect || false;
        this.dsh = I.noDownListWhenOne || false;
        p.jv.bw.bz.call(this, I);
        this.bHo("onchange", I.onchange || F);
        this.XL(I.items);
        this.lE(I.index);
        this.XM = I.zIndex;
        if (this.XM !== undefined) {
            this.Y.style.zIndex = this.XM;
            this.Y.setAttribute("bak_zIndex", this.XM)
        }
        if (!this.XK) {
            E.bf(this.XN, "noSelect");
            E.bf(this.Y, coM)
        } else {
            E.ba(this.XN, "noSelect");
            E.ba(this.Y, coM)
        }
        this.bmA = I.noHideListIfListShowed || false;
        this.bHo("onshowdownlist", I.onshowdownlist || F);
        this.bHo("onhidedownlist", I.onhidedownlist || F)
    };
    le.cK = function() {
        p.jv.bw.cK.call(this);
        this.cT = p.sC.db(this.cT)
    };
    le.XL = function(cf) {
        if ( !! this.dsh && (!cf || cf.length <= 1)) {
            E.ba(this.Y, cTc)
        } else {
            E.bf(this.Y, cTc)
        }
        p.sC.db(this.cT);
        if ( !! this.Hx) {
            if (!cf || cf.length <= 1) {
                this.bU.innerHTML = "使用过的标签";
                this.fS.innerHTML = '<div style="height:60px;line-height:60px;font-size:12px;color:#888;text-align:center;">暂未使用标签</div>'
            } else {
                this.fS.innerHTML = "";
                this.cT = p.sC.bG(cf, this.fS, this.eL)
            }
        } else if ( !! this.Hw) {
            if (!cf || cf.length <= 1) {
                this.bU.innerHTML = "无其他可选博客";
                this.fS.innerHTML = '<div style="height:60px;line-height:60px;font-size:12px;color:#888;text-align:center;">无其他可选博客</div>'
            } else {
                this.fS.innerHTML = "";
                this.cT = p.sC.bG(cf, this.fS, this.eL)
            }
        } else {
            this.cT = p.sC.bG(cf, this.fS, this.eL)
        }
        if ( !! this.cT && this.cT.length > 0) {
            if ( !! this.cT[0]) {
                this.cT[0].coN(this.coP.bHk(this))
            }
        }
    };
    le.coP = function(by, bVZ) {
        if ( !! bVZ && E.cr(this.bLN, cGv) || !bVZ && !E.cr(this.bLN, cGv)) {
            if (by == "mouseover") {
                E.ba(this.chh, cSY)
            } else {
                E.bf(this.chh, cSY)
            }
        }
    };
    le.lE = function(Q) {
        if (!this.cT) return;
        var bo = this.cT[Q || 0];
        if (!bo) return;
        this.chf = Q || 0;
        this.DD(bo.hY(), true)
    };
    le.cU = function() {
        return bHu
    };
    le.cM = function() {
        return '<div class="ztxt thide">&nbsp;</div><a hidefocus="true" href="#" class="zdwn">&#8711;</a><div class="zlst ' + XB + '"><span class="nipple" style="left:-9999px;"></span><div class="case"></div></div>'
    };
    le.cc = function() {
        var bHl = E.dE(this.Y);
        this.bU = bHl[0];
        this.XN = bHl[1];
        this.bLN = bHl[2];
        bHl = E.dE(this.bLN);
        this.chh = bHl[0];
        this.fS = bHl[1];
        E.bqd(this.bLN, Xz);
        var iA = this.bmz.bHk(this);
        V.bHo(this.Y, "click", iA);
        var cTO = function(bHm) {
            V.bb(bHm)
        }.bHk(this);
        V.bHo(this.fS, "click", cTO);
        V.bHo(this.chh, "click", cTO);
        V.bHo(document, "click", this.Hl.bHk(this))
    };
    le.bmz = function(bHm) {
        V.bb(bHm);
        if (!this.XK) {
            if (!E.cr(this.Y, HL)) {
                this.bmy();
                this.cFT();
                E.ba(this.Y, HL);
                this.Y.style.zIndex = "";
                this.cFM(cGv);
                this.bLN.style.visibility = "visible";
                this.bh("onshowdownlist")
            } else {
                if (!this.bmA) this.Hl()
            }
        }
    };
    le.cFM = function(bQw) {
        if ( !! bQw && E.cr(this.bLN, bQw)) {
            E.bf(this.bLN, bQw)
        }
    };
    le.cFT = function() {
        var cFJ = this.Y.clientWidth || 30;
        this.chh.style.left = cFJ + 16 + "px"
    };
    le.bmy = function() {
        var bHl = E.bj(document.body, XB) || [];
        for (var i = 0; i < bHl.length; i++) {
            if ( !! bHl[i] && !!bHl[i].parentNode) {
                bHl[i].style.visibility = "hidden";
                E.bf(bHl[i].parentNode, HL);
                var chc = this.Y.getAttribute("bak_zIndex");
                if (chc !== undefined) {
                    this.Y.style.zIndex = chc
                }
            }
        }
    };
    le.Hl = function() {
        var dsf = this.bLN.style.visibility;
        this.bLN.style.visibility = "hidden";
        E.bf(this.Y, HL);
        if (this.XM !== undefined) {
            this.Y.style.zIndex = this.XM
        }
        if (dsf != "hidden") {
            this.bh("onhidedownlist")
        }
    };
    le.DD = function(bHn, cFE) {
        if (!bHn) return;
        if (this.bmB) {
            this.bU.innerHTML = '<img src="' + (bHn.imgurl || bmC) + '" /><span class="thide">' + U.ew(bHn.t || bHn.n || bHn.v || " ") + "</span>"
        } else {
            this.bU.innerHTML = U.ew(bHn.t || bHn.n || bHn.v || " ")
        }
        this.fg = bHn;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHn.v) {
                Q = i;
                break
            }
        }
        this.cFz(this.chf, Q);
        this.chf = Q;
        this.Hl();
        this.bh("onchange", bHn.v || bHn.n || bHn.t || "", Q, bHn, cFE)
    };
    le.cFz = function(bGU, bjL) {
        if ( !! this.cT) {
            if ( !! this.cT[bGU] && bGU != bjL) this.cT[bGU].cTg();
            if ( !! this.cT[bjL]) this.cT[bjL].dsk()
        }
    };
    le.cF = function() {
        return this.fg
    };
    le.cFx = function(cFw) {
        this.XK = cFw || false;
        if (!this.XK) {
            E.bf(this.XN, "noSelect");
            E.bf(this.Y, coM)
        } else {
            E.ba(this.XN, "noSelect");
            E.ba(this.Y, coM)
        }
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    eI,
    Zd,
    bHu = "ui-" + U.cA(),
    Ze = "ui-" + U.cA();
    var Al = 20;
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;padding:0 40px 0 10px;border-style:solid;border-color:#dfdfdf;border-width:0 1px 1px 1px;color:#222;/*background:#fff url("http://l.bst.126.net/rsc/img/shadow-in.png") no-repeat;*/}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .f-iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .tokens{line-height:20px;padding:10px 0 10px 24px;}#<uispace> .tokens .token{float:left;height:20px;line-height:20px;padding:0 1px;margin-right:8px;color:#aaa;font-size:12px;white-space:nowrap;}#<uispace> .tokens .token:hover{text-decoration:line-through;cursor:pointer;}#<uispace> .tokens .token:before{content: "#";}#<uispace> .iptwrap{position:relative;float:left;}#<uispace> .iptwrap .taginput{position:relative;/*left:-1px;*/z-index:2;min-width:60px;height:20px;line-height:20px;padding:0;margin:0;background-color:transparent;background:url(http://l.bst.126.net/rsc/img/common/empty.png) 0 0 repeat;color:#333;border:0;outline:0;}#<uispace> .iptwrap .hiddenSpan{position:absolute;font-size:12px;visibility:hidden;white-space:nowrap;word-break:keep-all;}#<uispace> .iptwrap label{display:block;position:absolute;left:2px;top:0;z-index:1;width:240px;height:19px;line-height:19px;color:#ccc;font-size:14px;overflow:hidden;}#<uispace> .iptwrap .js-hidetips{display:none;}#<uispace> .taguseful{position:absolute;right:9px;top:10px;width:20px;height:20px;text-indent:-9999px;background:url("http://l.bst.126.net/rsc/img/newpublish/helpicon.png") 1px 1px no-repeat;}#<uispace> .taguseful:hover{background-position:1px -41px;}#<uispace> .usedtagarea{visibility:hidden;overflow:hidden;height:0;}#<uispace> .usedtagarea{transition:height 0.2s linear;-webkit-transition:height 0.2s linear;-moz-transition:height 0.2s linear;-o-transition:height 0.2s linear;}#<uispace> .usedtagarea .nousedtags{height:22px;line-height:22px;padding:0 0 7px 3px;color:#666;font-size:12px;}#<uispace> .usedtagarea .nousedtags a{color:#666;text-decoration:underline;}#<uispace> .forfocus{position:absolute;z-index:-1;width:0;height:0;overflow:hidden;opacity:0;filter:alpha(opacity=0);}', bHu);
    P(N.ui).fx("#<uispace>{padding:15px 0 8px 0;border-top:1px solid #eee;}#<uispace> .token2{float:left;height:22px;line-height:22px;padding:0 5px;margin:0 6px 6px 0;color:#fff;font-size:12px;white-space:nowrap;background-color:#aaa;cursor:pointer;}#<uispace> .token2{border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-o-border-radius:2px;}#<uispace> .token2:hover{background-color:#888;}", Ze);
    p.eG = C();
    eI = p.eG.bi(P(N.ui).ga, true);
    Zd = p.eG.bw;
    eI.bq = function(bl, I) {
        this.dL = bl;
        I = I || {};
        this.Al = I.maxCharsPerTag || Al;
        this.bHr(bl, I);
        V.bHo(this.Y, "click", this.bqx.bHk(this));
        V.bHo(this.gm, "blur", this.bqv.bHk(this));
        V.bHo(this.gm, "keydown", this.bqu.bHk(this));
        V.bHo(this.gm, "input", this.kF.bHk(this));
        V.bHo(this.gm, "propertychange", this.kF.bHk(this));
        V.bHo(this.Y, "mousedown",
        function(bHm) {
            V.bb(bHm)
        })
    };
    eI.cU = function() {
        return bHu + " tageditor"
    };
    eI.cM = function() {
        return '<div class="clearfix tokens ztag"><div class="iptwrap ztag"><input maxlength="' + this.Al + '" class="taginput ztag" /><label class="ztag">添加相关标签，用逗号或回车分隔</label></div></div><div class="usedtagarea ztag"></div><a class="taguseful" target="_blank" href="http://www.lofter.com/help#q=为日志添加标签有什么作用？" title="为日志添加标签有什么作用？">为日志添加标签有什么作用？</a><input type="text" class="forfocus ztag" />'
    };
    eI.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        this.pX = bHl[0];
        this.cVe = bHl[1];
        this.gm = bHl[2];
        this.bgR = bHl[3];
        this.cFl = bHl[4];
        this.dse = bHl[5]
    };
    eI.bz = function(I) {
        I = I || O;
        Zd.bz.call(this);
        this.bHo("onaddtag", I.onaddtag || F);
        this.bHo("ondeletetag", I.ondeletetag || F);
        this.bHo("onexceedmaxtagnum", I.onexceedmaxtagnum || F);
        this.bHo("onexceedmaxcharpertag", I.onexceedmaxcharpertag || F);
        this.bHo("ontageditorfocus", I.ontageditorfocus || F);
        if (I.tags) this.nI(I.tags);
        this.vc = I.maxTagNum || 10
    };
    eI.mM = function() {
        this.oq = true;
        this.gm.disabled = true
    };
    eI.yG = function() {
        this.oq = false;
        this.gm.disabled = false
    };
    eI.qw = function(bg) {
        var iz = U.bA(bg || this.gm.value);
        if (!iz) {
            return
        }
        if (iz.length > this.Al) {
            this.bh("onexceedmaxcharpertag", this.Al);
            return
        }
        if ( !! this.vc && this.vc > 0) {
            var bHl = E.dE(this.pX);
            if ( !! bHl && bHl.length > this.vc) {
                this.gm.value = "";
                this.bh("onexceedmaxtagnum", this.vc);
                return
            }
        }
        this.cVx(iz);
        this.bh("onaddtag", iz);
        this.gm.style.width = "60px"
    };
    eI.cVx = function(iz) {
        var bk = document.cloneElement("span", "token");
        bk.innerText = iz;
        V.bHo(bk, "click", this.ZO.bHk(this, bk, iz));
        this.gm.value = "";
        this.cVe.insertAdjacentElement("beforeBegin", bk);
        this.cpt()
    };
    eI.nI = function(ck) {
        this.FJ();
        if (!ck || ck.length < 1) {
            return
        }
        if (U.co(ck, "String")) {
            ck = ck.split(",")
        }
        var bk;
        for (var i = 0; i < ck.length; i++) {
            ck[i] = U.bA(ck[i]);
            if ( !! ck[i]) {
                this.cVx(ck[i])
            }
        }
    };
    eI.ZI = function(bg) {
        if (!bg) return;
        this.qw(bg)
    };
    eI.FJ = function() {
        var bHl = E.dE(this.pX) || [];
        for (var i = 0; i < bHl.length - 1; i++) {
            E.hE(bHl[i])
        }
        this.cpt()
    };
    eI.ne = function() {
        var tD;
        var bQ = [];
        var bHl = E.dE(this.pX) || [];
        for (var i = 0; i < bHl.length - 1; i++) {
            if ( !! bHl[i] && !!bHl[i].innerText) {
                bQ.push(bHl[i].innerText)
            }
        }
        return bQ
    };
    eI.ZO = function(bL, iz) {
        if (this.oq) return;
        iz = iz || "";
        E.hE(bL);
        this.bh("ondeletetag", iz);
        this.cpt()
    };
    eI.bqx = function(bHm) {
        if (this.oq) return;
        this.dse.focus();
        this.gm.focus();
        this.cFa = true;
        this.cEQ();
        if (this.cgW) this.cgW = window.clearTimeout(this.cgW);
        this.cgW = window.setTimeout(function() {
            this.gm.focus()
        }.bHk(this), 30);
        this.bh("ontageditorfocus")
    };
    eI.bqv = function(bHm) {
        V.bb(bHm);
        if (this.cgW) this.cgW = window.clearTimeout(this.cgW);
        this.qw();
        this.cFa = false;
        this.cEQ()
    };
    eI.cEQ = function() {
        if ( !! this.cEO) this.cEO = window.clearTimeout(this.cEO);
        this.cEO = window.setTimeout(this.dsd.bHk(this), 150)
    };
    eI.dsd = function() {
        if (this.cFa) {
            var eT = 0;
            if ( !! this.bUC) {
                eT = this.bUC.clientHeight || 0
            }
            if (eT > 0) {
                this.cFl.style.cssText = "visibility:visible;height:" + eT + "px"
            }
        } else {
            this.cFl.style.cssText = ""
        }
    };
    eI.bqu = function(bHm) {
        if (bHm.keyCode == 13) {
            V.bb(bHm);
            this.gm.value = U.bA(this.gm.value);
            if ( !! this.gm.value) {
                this.qw()
            }
        } else if (bHm.keyCode == 8) {
            if (!this.gm.value) {
                var bHl = E.dE(this.pX);
                if ( !! bHl && !!bHl[bHl.length - 2]) {
                    V.bb(bHm);
                    var iz = bHl[bHl.length - 2].innerText || "";
                    this.ZO(bHl[bHl.length - 2], iz)
                }
            }
        }
    };
    eI.kF = function(bHm) {
        var bg = this.gm.value;
        var dz = this.dsc(bg);
        if (dz + 10 > 60) {
            this.gm.style.width = dz + 10 + "px"
        } else {
            this.gm.style.width = "60px"
        }
        if ( !! bg) {
            bg = bg.replace(/，/gi, ",");
            bg = bg.replace(/;/gi, ",");
            bg = bg.replace(/；/gi, ",");
            var Q = bg.indexOf(",");
            if (Q > 0) {
                bg = U.bA(bg.substring(0, Q));
                if ( !! bg) {
                    this.qw(bg)
                }
            } else if (Q == 0) {
                this.gm.value = ""
            }
        }
        this.cpt()
    };
    eI.dsc = function(bg) {
        if (!this.cmQ) {
            this.cmQ = document.cloneElement("span", "hiddenSpan");
            this.cVe.insertAdjacentElement("beforeEnd", this.cmQ)
        }
        this.cmQ.innerText = bg || "";
        return this.cmQ.clientWidth || this.cmQ.offsettWidth || 0
    };
    eI.dsb = function(bl) {
        if (!bl) return;
        if (!this.bUC) {
            this.bUC = document.cloneElement("div", Ze + " clearfix usedTagWrap")
        }
        this.bUC.innerHTML = '<div class="nousedtags">暂无常用标签&nbsp;&nbsp;<a hidefocus="true" href="http://www.lofter.com/wall?act=qbview_20140126_01" target="_blank">点击查看热门标签</a></div>';
        bl.insertAdjacentElement("beforeEnd", this.bUC)
    };
    eI.qb = function(bl, ck, cdj, ca) {
        if (!bl) return;
        if (U.co(ck, "String")) {
            ck = U.bA(ck);
            if ( !! ck) {
                ck = ck.split(",")
            }
        }
        if (!ck || ck.length < 1) {
            if (!cdj) {
                this.dsb(bl)
            }
            return
        }
        ca = ca || this.bqt.bHk(this);
        if (!this.bUC) {
            this.bUC = document.cloneElement("div", Ze + " clearfix usedTagWrap")
        } else {
            this.bUC.innerHTML = ""
        }
        var bk;
        for (var i = 0; i < ck.length; i++) {
            ck[i] = U.bA(ck[i]);
            if ( !! ck[i]) {
                this.dsa(this.bUC, ck[i], ca)
            }
        }
        bl.insertAdjacentElement("beforeEnd", this.bUC)
    };
    eI.dsa = function(bl, iz, ca) {
        var bk = document.cloneElement("span", "token2");
        bk.innerText = iz;
        V.bHo(bk, "click",
        function(iz) {
            ca(iz)
        }.bHk(this, iz));
        bl.insertAdjacentElement("beforeEnd", bk)
    };
    eI.bqt = function(iz) {
        this.qw(iz)
    };
    eI.drZ = function(ck, cdj) {
        if ( !! ck || !cdj) {
            this.qb(this.cFl, ck, cdj)
        } else {
            this.cFa = false;
            this.cEQ()
        }
    };
    eI.cpt = function() {
        var bQ = this.ne();
        if ( !! this.gm.value || !!bQ && bQ.length > 0) {
            this.bZV()
        } else {
            this.bWG()
        }
    };
    eI.bWG = function() {
        E.bf(this.bgR, "js-hidetips")
    };
    eI.bZV = function() {
        E.ba(this.bgR, "js-hidetips")
    };
    eI.gc = function() {
        this.gm.focus()
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    JF,
    bgp,
    us,
    bgm;
    var bgl = "ccui-" + U.cA();
    var bgi = "js-moreinfoitem";
    var KU = {
        0 : "ccicon-0",
        1 : "ccicon-1",
        2 : "ccicon-2",
        3 : "ccicon-3",
        4 : "ccicon-4",
        5 : "ccicon-5",
        6 : "ccicon-6"
    };
    var bpp = {
        0 : "不使用原创授权",
        1 : "署名-非商业性使用-禁止演绎",
        2 : "署名-非商业性使用-相同方式共享",
        3 : "署名-非商业性使用",
        4 : "署名-禁止演绎",
        5 : "署名-相同方式共享",
        6 : "署名"
    };
    P(N.ui).fx("#<uispace>{}#<uispace> .ztxt{width:auto;height:30px;line-height:30px;margin-right:-5px;color:#999;font-size:14px;}#<uispace> .zdwn{margin:13px 10px 12px 10px;}#<uispace> .zlst{display:none;left:-31px;width:292px;height:224px;max-height:none;background:#fff;}#<uispace>.js-showlist .zlst{display:block;}#<uispace> .zlst.js-upperlist{top:auto;bottom:36px;}#<uispace> .ccicon{background:url(/rsc/img/ccommons/cc-icon24.png?004) 0 0 no-repeat;_background:url(/rsc/img/ccommons/cc-icon8.png?004) 0 0 no-repeat;}#<uispace> .ccicon-0{width:20px;background-position:-10px -5px;}#<uispace> .ccicon-1{width:64px;background-position:-10px -30px;}#<uispace> .ccicon-2{width:64px;background-position:-10px -57px;}#<uispace> .ccicon-3{width:42px;background-position:-10px -85px;}#<uispace> .ccicon-4{width:42px;background-position:-10px -113px;}#<uispace> .ccicon-5{width:42px;background-position:-10px -141px;}#<uispace> .ccicon-6{width:20px;background-position:-10px -169px;}#<uispace> .ztxt .ccicon{opacity:0.6;}#<uispace> .zlst .case{width:292px;}#<uispace> .zlst .zitm{height:28px;line-height:28px;padding:0 10px 0 30px;color:#444;}#<uispace> .zitm .ccicon{float:left;width:72px;height:100%;}#<uispace> .zitm .cctitle{float:left;width:180px;height:100%;overflow:hidden;font-size:12px;}#<uispace> .zlst .js-moreinfoitem{position:relative;zoom:1;cursor:default;}#<uispace> .js-moreinfoitem .moreinfo{position:absolute;left:0;top:0;width:292px;height:28px;background:#fff;}#<uispace> .js-moreinfoitem .moreinfo a{position:absolute;right:10px;top:0;height:16px;line-height:16px;font-size:10px;color:#666;text-decoration:underline;}#<uispace> .zlst .zitm:hover .ccicon-0,#<uispace> .zlst .item.js-zhvr-910 .ccicon-0{background-position:-10px -331px;}#<uispace> .zlst .zitm:hover .ccicon-1,#<uispace> .zlst .item.js-zhvr-910 .ccicon-1{background-position:-10px -356px;}#<uispace> .zlst .zitm:hover .ccicon-2,#<uispace> .zlst .item.js-zhvr-910 .ccicon-2{background-position:-10px -383px;}#<uispace> .zlst .zitm:hover .ccicon-3,#<uispace> .zlst .item.js-zhvr-910 .ccicon-3{background-position:-10px -411px;}#<uispace> .zlst .zitm:hover .ccicon-4,#<uispace> .zlst .item.js-zhvr-910 .ccicon-4{background-position:-10px -439px;}#<uispace> .zlst .zitm:hover .ccicon-5,#<uispace> .zlst .item.js-zhvr-910 .ccicon-5{background-position:-10px -467px;}#<uispace> .zlst .zitm:hover .ccicon-6,#<uispace> .zlst .item.js-zhvr-910 .ccicon-6{background-position:-10px -495px;}#<uispace>.js-noSelect .zdwn{visibility:hidden;}", bgl);
    p.Dt = C();
    JF = p.Dt.bi(p.sC, true);
    bgp = p.Dt.bw;
    JF.bq = function() {
        this.bHr()
    };
    JF.ce = function(bHn) {
        this.bHq = bHn || O;
        if (this.bHq.v != "7") {
            this.Y.innerHTML = '<span class="ccicon ' + KU[this.bHq.v] + '">&nbsp;</span><span class="cctitle">' + bpp[this.bHq.v] + "</span>"
        } else {
            E.ba(this.Y, bgi);
            this.Y.innerHTML = '<div class="moreinfo"><a class="moreinfolinlk" target="_blank" href="' + this.bHq.n + '">' + this.bHq.t + "</a></div>";
            this.beX = (E.bj(this.Y, "moreinfolinlk") || [])[0];
            if ( !! this.beX) {
                V.bHo(this.beX, "click",
                function(bHm) {
                    V.qK(bHm)
                }.bHk(this))
            }
        }
    };
    JF.cK = function() {
        E.bf(this.Y, bgi);
        bgp.cK.apply(this)
    };
    p.vG = C();
    us = p.vG.bi(p.jv, true);
    bgm = p.vG.bw;
    us.bq = function(bl, I) {
        this.bHr(bl, I)
    };
    us.bz = function(I) {
        I = I || O;
        bgm.bz.call(this, I);
        if (this.XK) {
            this.Y.title = I.hoverTips
        } else {
            this.Y.title = ""
        }
    };
    us.cU = function() {
        var bpt = bgm.cU.apply(this);
        return bgl + " " + bpt
    };
    us.cK = function() {
        p.vG.bw.cK.call(this);
        this.cT = p.Dt.db(this.cT)
    };
    us.XL = function(cf) {
        p.Dt.db(this.cT);
        this.cT = p.Dt.bG(cf, this.fS, this.eL);
        if ( !! this.cT && this.cT.length > 0) {
            if ( !! this.cT[0]) {
                this.cT[0].coN(this.coP.bHk(this))
            }
        }
    };
    us.lE = function(Q) {
        if ( !! Q && Q == -1) {
            this.DD();
            return
        }
        if (!this.cT) return;
        var bo = this.cT[Q || 0];
        if (!bo) return;
        this.DD(bo.hY())
    };
    us.DD = function(bHn) {
        if (!bHn) {
            this.bU.innerHTML = "授权方式";
            return
        }
        if ( !! KU[bHn.v]) {
            this.bU.innerHTML = '<div class="ccicon ' + KU[bHn.v] + '">&nbsp;</div>'
        } else {
            this.bU.innerHTML = "授权方式"
        }
        this.fg = bHn;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHn.v) {
                Q = i;
                break
            }
        }
        this.cFz(this.chf, Q);
        this.chf = Q;
        this.Hl();
        this.bh("onchange", bHn.v || bHn.n || bHn.t || "", Q)
    };
    us.cFT = function() {
        var cFJ = this.Y.clientWidth || 30;
        this.chh.style.left = cFJ + 7 + "px"
    };
    us.cFM = function(bQw) {
        if (!bQw) return;
        var dp = document.documentElement || document.body,
        FW = document.body || document.documentElement;
        var bMS = dp.scrollTop || FW.scrollTop || 0;
        var bUs = bMS + dp.clientHeight;
        var Zt = E.jO(this.Y);
        var bCp = Zt + this.Y.clientHeight;
        if (this.Y.clientHeight <= dp.clientHeight) {
            var ig = 10;
            var cpS = this.bLN.clientHeight;
            if (bUs - bCp > this.bLN.clientHeight + ig || Zt < cpS + ig) {
                E.bf(this.bLN, bQw)
            } else {
                E.ba(this.bLN, bQw)
            }
        } else {
            E.bf(this.bLN, bQw)
        }
    }
})(); (function() {
    var p = P("loft.w"),
    bKF,
    bHu = "ui-" + U.cA(),
    cHZ = ["日", "一", "二", "三", "四", "五", "六"],
    cDJ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    drY = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    var cIl = /^\d+$/;
    var cDs = -101;
    var cIp = 101;
    P(N.ui).fx('#<uispace>{width:190px;font-size:12px;text-align:center;border:1px solid #c0c0c0;}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .simpleBar,#<uispace> .simpleBar a{background:url("http://l.bst.126.net/rsc/img/calendar/calendaricon8.png") -9999px -9999px no-repeat;}#<uispace> .complexBar{display:none;height:26px;line-height:26px;padding:0 3px;cursor:default;background-color:#ccc;color:#fff;}#<uispace> .complexBar .zleft{float:left;}#<uispace> .complexBar .zright{float:right;}#<uispace> .complexBar .selmonth{width:80px;padding:2px 0 0 3px;}#<uispace> .complexBar .selyear{width:80px;padding-top:2px;}#<uispace> .complexBar .iptyear{width:40px;}#<uispace> .complexBar .btnyear{width:22px;}#<uispace> .complexBar .btnyear .yearup, #<uispace> .complexBar .btnyear .yeardown{display:block;width:16px;height:9px;line-height:9px;font-size:8px;cursor:pointer;}#<uispace> .complexBar .btnyear .yearup{background-position:-282px -445px;margin-bottom:2px;}#<uispace> .complexBar .btnyear .yeardown{background-position:-242px -424px;}#<uispace> .simpleBar{display:none;height:25px;background-color:#e6e6e6;background-position:0 -176px;}#<uispace> .simpleBar .zmonth{width:12px;height:12px;line-height:12px;padding:6px 0 7px 0;}#<uispace> .simpleBar .prevMonth{float:left;padding-left:30px;margin-right:-45px;}#<uispace> .simpleBar .nextMonth{float:right;padding-right:30px;margin-left:-45px;}#<uispace> .simpleBar a{display:block;width:100%;height:100%;text-indent:-9999px;}#<uispace> .simpleBar .prevMonth a{background-position:3px 2px;}#<uispace> .simpleBar .prevMonth a:hover{background-position:3px -22px;}#<uispace> .simpleBar .nextMonth a{background-position:3px -46px;}#<uispace> .simpleBar .nextMonth a:hover{background-position:3px -70px;}#<uispace> .simpleBar .ztip{width:100px;height:25px;line-height:25px;margin:0 45px;font-weight:bold;text-align:center;}#<uispace> .tablewrap{width:161px;padding:0 15px 0 14px;background:url("http://l.bst.126.net/rsc/img/calendar/bgline8.png") 0 27px no-repeat;}#<uispace> .table{table-layout:auto;width:100%;}#<uispace> .zcnt{border-collapse:collapse;border-spacing:0;}#<uispace> .zcnt .wkitm,#<uispace> .zcnt .itm{float:left;width:19px;height:19px;line-height:19px;}#<uispace> .zcnt .wkitm{padding:4px 1px 4px 3px;text-align:center;}#<uispace> .zcnt .itm{padding:2px;}#<uispace> .zcnt .itm .iday{display:block;width:17px;height:17px;background-color:#fff;border-width:1px 1px 1px 1px;border-style:solid;border-color:#FFF;cursor:pointer;}#<uispace> .zcnt .itm .iday:hover{color:#fff;background-color:#4e9fd4;border-color:#4e9fd4;}#<uispace> .zcnt .itm .iold{color:#aaa;}#<uispace> .zcnt .itm .inext{color:#aaa;}#<uispace> .zcnt .js-emptyitem{visibility:hidden;}#<uispace> .zcnt .js-weekend .iday{background-color:#fff;}#<uispace> .zcnt .js-zcurrent .iday{color:#fff;background-color:#4e9fd4;border-color:#4e9fd4;}#<uispace> .zcnt .js-today .iday{border-color:#4e9fd4;}#<uispace> .zcnt .js-disablepast .iday,#<uispace> .zcnt .js-disablepast .iday:hover{color:#aaa;background-color:#fff;border-color:#fff;cursor:default;}#<uispace> .selectMonth{color:#000;}#<uispace> .selectMonth .zlst{max-height:210px;}#<uispace> .selectMonth .zlst .wkitm{height:16px;line-height:16px;}', bHu);
    var cgN = function(bJc, bJb) {
        if (!bJc || !bJb) return null;
        if (bJb == 2 && (bJc % 400 == 0 || bJc % 4 == 0 && bJc % 100 != 0)) {
            return 29
        } else {
            return cDJ[bJb - 1]
        }
    };
    p.bJZ = C();
    bKF = p.bJZ.bi(P(N.ui).YJ, true);
    p.bJZ.bXd = function(bIE, tI, bRN) {
        bIE = U.bA(bIE);
        if (!bIE) return false;
        tI = tI || "yyyy/MM/dd";
        bRN = bRN || "/";
        var cdK = bIE.split(bRN);
        var bWX = tI.split(bRN);
        var dU = {};
        var bHL;
        if ( !! cdK && !!bWX && cdK.length == bWX.length && cdK.length <= 3) {
            for (var i = 0; i < cdK.length; i++) {
                if ( !! bWX[i]) {
                    if (!cdK[i] || !cIl.test(cdK[i])) return false;
                    dU[bWX[i].substring(0, 1)] = cdK[i]
                }
            }
            try {
                bHL = new Date(bIE);
                if (!bHL || isNaN(bHL) || bHL == "Invalid Date") {
                    return false
                }
            } catch(e) {
                return false
            }
            if (( !! dU["y"] ? bHL.getFullYear() == parseInt(dU["y"], 10) : true) && ( !! dU["M"] ? bHL.getMonth() + 1 == parseInt(dU["M"], 10) : true) && ( !! dU["d"] ? bHL.getDate() == parseInt(dU["d"], 10) : true)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    };
    p.bJZ.cqh = function(bJB, tI, bRN) {
        bJB = U.bA(bJB);
        if (!bJB) return false;
        tI = tI || "HH/mm/ss";
        bRN = bRN || ":";
        var bZZ = bJB.split(bRN);
        var bWX = tI.split(bRN);
        var dU = {};
        var bIf;
        if ( !! bZZ && !!bWX && bZZ.length == bWX.length && bZZ.length <= 3) {
            for (var i = 0; i < bZZ.length; i++) {
                if ( !! bWX[i]) {
                    if (!bZZ[i] || !cIl.test(bZZ[i])) return false;
                    dU[bWX[i].substring(0, 1)] = bZZ[i]
                }
            }
            try {
                bIf = new Date("2012/01/01 " + bJB);
                if (!bIf || isNaN(bIf) || bIf == "Invalid Date") {
                    return false
                }
            } catch(e) {
                return false
            }
            if (( !! dU["H"] ? bIf.getHours() == parseInt(dU["H"], 10) : true) && ( !! dU["m"] ? bIf.getMinutes() == parseInt(dU["m"], 10) : true) && ( !! dU["s"] ? bIf.getSeconds() == parseInt(dU["s"], 10) : true)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    };
    bKF.bq = function(bl, I) {
        this.cT = [];
        var drX = [{
            t: "一月",
            v: "1"
        },
        {
            t: "二月",
            v: "2"
        },
        {
            t: "三月",
            v: "3"
        },
        {
            t: "四月",
            v: "4"
        },
        {
            t: "五月",
            v: "5"
        },
        {
            t: "六月",
            v: "6"
        },
        {
            t: "七月",
            v: "7"
        },
        {
            t: "八月",
            v: "8"
        },
        {
            t: "九月",
            v: "9"
        },
        {
            t: "十月",
            v: "10"
        },
        {
            t: "十一月",
            v: "11"
        },
        {
            t: "十二月",
            v: "12"
        }];
        this.cDi = {
            "class": "selectMonth",
            items: drX,
            onchange: this.drW.bHk(this)
        };
        this.bHr(bl, I);
        drY = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        V.bHo(this.Y, "click", this.drV.bHk(this));
        if (B.dh && !!bl) bl.style.zoom = 1
    };
    bKF.drW = function(bJb) {
        if ( !! this.cgJ) {
            this.bJf = parseInt(bJb) || this.bJf;
            this.cIU(this.bIy);
            this.cad(this.bIy, this.bJf)
        }
    };
    bKF.drV = function() {
        if ( !! this.cgJ) this.cgJ.Hl()
    };
    bKF.cM = function() {
        var bZY = [];
        bZY.push('<div class="complexBar"><div class="zleft selmonth zbtag"></div><div class="zright selyear"><div class="zright btnyear"><a hidefocus="true" class="yearup zbtag" href="#">∧</a><a hidefocus="true" class="yeardown zbtag" href="#">∨</a></div><input type="text" class="zright iptyear zbtag" maxlength="4" /></div></div><div class="simpleBar"><div class="prevMonth zmonth"><a hidefocus="true" class="zsbtag" href="#">&lt;&lt;上月</a></div><div class="nextMonth zmonth"><a hidefocus="true" class="zsbtag" href="#">&gt;&gt;下月</a></div><div class="ztip zsbtag">&nbsp;</div></div><div class="tablewrap"><table class="table zcnt"><thead>');
        for (var i = 0; i < cHZ.length; i++) {
            bZY.push('<th class="wkitm">' + cHZ[i] + "</th>")
        }
        bZY.push("</thead><tbody>");
        for (var i = 0; i < 6; i++) {
            bZY.push("<tr>");
            for (var j = 0; j < 7; j++) {
                bZY.push('<td class="itm"><span class="iday ztag"></span></td>')
            }
            bZY.push("</tr>")
        }
        bZY.push("</tbody></table></div>");
        return bZY.join("")
    };
    bKF.cU = function() {
        return bHu
    };
    bKF.cc = function() {
        var bHl = E.dE(this.Y);
        this.cIY = bHl[0];
        this.cJb = bHl[1];
        this.cJd = bHl[2];
        bHl = E.bj(this.cIY, "zbtag");
        this.drS = bHl[0];
        this.drR = bHl[1];
        this.drQ = bHl[2];
        this.bXD = bHl[3];
        bHl = E.bj(this.cJb, "zsbtag");
        this.drP = bHl[0];
        this.drO = bHl[1];
        this.drN = bHl[2];
        V.bHo(this.drR, "click", this.drL.bHk(this));
        V.bHo(this.drQ, "click", this.drK.bHk(this));
        V.bHo(this.bXD, "blur", this.cJt.bHk(this));
        V.bHo(this.bXD, "keypress", this.drI.bHk(this));
        V.bHo(this.drP, "click", this.drH.bHk(this));
        V.bHo(this.drO, "click", this.drG.bHk(this));
        this.cT = E.bj(this.cJd, "ztag");
        V.bHo(this.cJd, "click", this.drF.bHk(this))
    };
    bKF.cJt = function() {
        var bJc = parseInt(this.bXD.value);
        if (!isNaN(bJc)) {
            this.bIy = bJc
        } else {
            this.bIy = this.cgF
        }
        this.bXD.value = this.bIy;
        this.cad(this.bIy, this.bJf)
    };
    bKF.drI = function(bHm) {
        if (bHm.keyCode == 13) {
            this.cJt()
        }
    };
    bKF.drL = function(bHm) {
        V.bb(bHm);
        var bJc = parseInt(this.bXD.value);
        if (!isNaN(bJc)) {
            this.bIy = bJc - 1
        } else {
            this.bIy = this.cgF
        }
        this.bXD.value = this.bIy;
        this.cad(this.bIy, this.bJf)
    };
    bKF.drK = function(bHm) {
        V.bb(bHm);
        var bJc = parseInt(this.bXD.value);
        if (bJc >= 0) {
            this.bIy = bJc + 1
        } else {
            this.bIy = this.cgF
        }
        this.bXD.value = this.bIy;
        this.cad(this.bIy, this.bJf)
    };
    bKF.bz = function(I) {
        I = I || O;
        this.cJD = I.isDisablePastDates || false;
        this.cCA = I.isShowCompleteDates || false;
        this.drB = I.isShowComplexBar || false;
        this.drA = I.isShowSimpleBar || false;
        if ( !! this.drB) {
            this.cIY.style.display = "block"
        }
        if ( !! this.drA) {
            this.cJb.style.display = "block"
        }
        this.bHo("onselect", I.onselect || F);
        this.cmo = new Date;
        this.Td = I.date || this.cmo;
        if (U.co(this.Td, "string")) {
            this.Td = new Date(this.Td)
        }
        this.cCl = "";
        this.cCj = "";
        this.cCe = "";
        if ( !! I.date && !!U.bA(I.date) && !!this.Td && !isNaN(this.Td) && this.Td != "Invalid Date") {
            this.cCl = this.Td.getFullYear();
            this.cCj = this.Td.getMonth() + 1;
            this.cCe = this.Td.getDate()
        }
        if (!this.Td || isNaN(this.Td) || this.Td == "Invalid Date") {
            this.Td = this.cmo
        }
        this.bIy = this.Td.getFullYear();
        this.bJf = this.Td.getMonth() + 1;
        this.dyy = this.Td.getDate();
        this.cgF = this.cmo.getFullYear();
        this.cJN = this.cmo.getMonth() + 1;
        this.cJO = this.cmo.getDate();
        this.cIU(this.bIy);
        this.dry(this.bJf);
        this.cad(this.bIy, this.bJf)
    };
    bKF.cIU = function(bJc) {
        this.bXD.value = parseInt(bJc) || this.cgF
    };
    bKF.dry = function(bJb) {
        this.cDi.index = parseInt(bJb) - 1;
        if (!this.cgJ) {
            if ( !! P(N.ui).jv) {
                this.cgJ = P(N.ui).jv.bG(this.drS, this.cDi)
            }
        } else {
            if ( !! this.cgJ.lE) {
                this.cgJ.lE(this.cDi.index)
            }
        }
    };
    bKF.cad = function(bJc, bJb, ci) {
        if (!bJc || !bJb) return;
        if (ci) {
            if (bJb + ci > 12) {
                this.bIy = bJc + Math.floor((bJb + ci) / 12);
                this.bJf = (bJb + ci) % 12
            } else if (bJb + ci < 1) {
                this.bIy = bJc - (Math.floor( - (bJb + ci) / 12) + 1);
                this.bJf = 12 + (bJb + ci) % 12
            } else {
                this.bIy = bJc;
                this.bJf = bJb + ci
            }
        } else {
            this.bIy = bJc;
            this.bJf = bJb
        }
        this.drx()
    };
    bKF.drx = function() {
        var drw = new Date(this.bIy, this.bJf - 1, 1),
        bKc = drw.getDay();
        bMA = bKc + cgN(this.bIy, this.bJf);
        this.drN.innerHTML = this.bIy + "年" + this.bJf + "月";
        for (var i = 0,
        fe = this.cT.length; i < fe; i++) {
            if (!this.cCA) {
                this.cT[i].innerText = i < bKc || i >= bMA ? "": i - bKc + 1;
                if (B.oc) {
                    if (E.cr(this.cT[i].parentNode, "js-emptyitem")) {
                        E.bf(this.cT[i].parentNode, "js-emptyitem")
                    }
                }
                if ( !! this.cT[i].innerText) {
                    if (E.cr(this.cT[i].parentNode, "js-emptyitem")) {
                        E.bf(this.cT[i].parentNode, "js-emptyitem")
                    }
                } else {
                    if (!E.cr(this.cT[i].parentNode, "js-emptyitem")) {
                        E.ba(this.cT[i].parentNode, "js-emptyitem")
                    }
                }
            } else {
                if (i < bKc) {
                    if (E.cr(this.cT[i], "inext")) {
                        E.bf(this.cT[i], "inext")
                    }
                    if (!E.cr(this.cT[i], "iold")) {
                        E.ba(this.cT[i], "iold")
                    }
                    if (this.bJf - 1 == 0) {
                        this.cT[i].innerText = i - bKc + cgN(this.bIy - 1, 12) + 1
                    } else {
                        this.cT[i].innerText = i - bKc + cgN(this.bIy, this.bJf - 1) + 1
                    }
                } else if (i >= bMA) {
                    if (E.cr(this.cT[i], "iold")) {
                        E.bf(this.cT[i], "iold")
                    }
                    if (!E.cr(this.cT[i], "inext")) {
                        E.ba(this.cT[i], "inext")
                    }
                    this.cT[i].innerText = i - bMA + 1
                } else {
                    if (E.cr(this.cT[i], "iold")) {
                        E.bf(this.cT[i], "iold")
                    }
                    if (E.cr(this.cT[i], "inext")) {
                        E.bf(this.cT[i], "inext")
                    }
                    this.cT[i].innerText = i - bKc + 1
                }
            }
            if (this.cJD) {
                this.drv(i, bKc, bMA)
            }
            if (E.cr(this.cT[i].parentNode, "js-zcurrent")) {
                E.bf(this.cT[i].parentNode, "js-zcurrent")
            }
            if (E.cr(this.cT[i].parentNode, "js-today")) {
                E.bf(this.cT[i].parentNode, "js-today")
            }
            if ((i % 7 == 0 || i % 7 == 6) && i >= bKc && i < bMA) {
                E.ba(this.cT[i].parentNode, "js-weekend")
            } else {
                E.bf(this.cT[i].parentNode, "js-weekend")
            }
            if (i % 7 == 0) {
                this.cT[i].parentNode.parentNode.style.display = ""
            }
            if (i % 7 == 0 && i >= bMA) {
                this.cT[i].parentNode.parentNode.style.display = "none";
                break
            }
        }
        this.dru(bKc, bMA);
        this.drt(bKc, bMA)
    };
    bKF.drv = function(i, bKc, bMA) {
        if (!bMA || !this.cT[i]) return;
        bKc = bKc || 0;
        var Q = this.cCc(this.cgF, this.cJN, this.cJO, bKc, bMA);
        if (Q > 0) {
            if (i < Q) {
                E.ba(this.cT[i].parentNode, "js-disablepast")
            } else {
                E.bf(this.cT[i].parentNode, "js-disablepast")
            }
        } else {
            E.bf(this.cT[i].parentNode, "js-disablepast")
        }
    };
    bKF.dru = function(bKc, bMA) {
        if ( !! this.cCl && !!this.cCj && !!this.cCe) {
            var Q = this.cCc(this.cCl, this.cCj, this.cCe, bKc, bMA);
            if ( !! this.cT[Q]) E.ba(this.cT[Q].parentNode, "js-zcurrent")
        }
    };
    bKF.drt = function(bKc, bMA) {
        if (!bMA) return;
        bKc = bKc || 0;
        var Q = this.cCc(this.cgF, this.cJN, this.cJO, bKc, bMA);
        if ( !! this.cT[Q]) E.ba(this.cT[Q].parentNode, "js-today")
    };
    bKF.cCc = function(bJc, bJb, bJJ, bKc, bMA) {
        var Q = cDs;
        if (!this.cCA) {
            if (bJc == this.bIy && bJb == this.bJf) {
                Q = bJJ + bKc - 1
            } else if (bJc > this.bIy || bJc == this.bIy && bJb > this.bJf) {
                Q = cIp
            } else {
                Q = cDs
            }
        } else {
            if (bJc == this.bIy && bJb == this.bJf) {
                Q = bJJ + bKc - 1
            } else if (bJc == this.bIy && this.bJf - bJb == 1 || this.bIy - bJc == 1 && this.bJf == 1 && bJb == 12) {
                if (bJb - 1 == 0) {
                    Q = bJJ - cgN(bJc - 1, 12) + bKc - 1
                } else {
                    Q = bJJ - cgN(bJc, bJb - 1) + bKc - 1
                }
            } else if (bJc == this.bIy && this.bJf - bJb == -1 || this.bIy - bJc == -1 && this.bJf == 12 && bJb == 1) {
                Q = bJJ + bMA
            } else if (bJc > this.bIy || bJc == this.bIy && bJb > this.bJf) {
                Q = cIp
            } else {
                Q = cDs
            }
        }
        return Q
    };
    bKF.drF = function(bHm) {
        var X = V.be(bHm);
        if (!this.cCA) {
            if (E.cr(X, "iday") && X.innerText != "" && (!this.cJD || !E.cr(X.parentNode, "js-disablepast"))) {
                this.cy();
                this.bh("onselect", new Date(this.bIy, this.bJf - 1, X.innerText))
            }
        } else {
            if (E.cr(X, "iday") && X.innerText != "") {
                this.cy();
                var cqI = parseInt(X.innerText),
                bHL;
                if (E.cr(X, "inext")) {
                    if (this.bJf - 1 == 11) {
                        bHL = new Date(this.bIy + 1, 0, cqI)
                    } else {
                        bHL = new Date(this.bIy, this.bJf, cqI)
                    }
                } else if (E.cr(X, "iold")) {
                    if (this.bJf - 1 == 0) {
                        bHL = new Date(this.bIy - 1, 11, cqI)
                    } else {
                        bHL = new Date(this.bIy, this.bJf - 2, cqI)
                    }
                } else {
                    bHL = new Date(this.bIy, this.bJf - 1, X.innerText)
                }
                this.bh("onselect", bHL)
            }
        }
    };
    bKF.drG = function(bHm) {
        V.bb(bHm);
        this.cad(this.bIy, this.bJf, 1)
    };
    bKF.drH = function(bHm) {
        V.bb(bHm);
        this.cad(this.bIy, this.bJf, -1)
    };
    bKF.dyz = function(bZX, I) {
        return p.bJZ.cKd(bZX, I)
    };
    p.bJZ.cKd = function(bZX, I) {
        if (!bZX || !U.co(bZX, "date")) return;
        I = I || {};
        var drr = I.yearOffset || 0;
        var bZW = I.monthOffset || 0;
        var cKg = I.msecondOffset || 0;
        var cgv = bZX.getFullYear() + drr;
        var bRC = bZX.getMonth() + 1;
        var cBz = bZX.getDate();
        if (bZW) {
            if (bRC + bZW > 12) {
                cgv = cgv + Math.floor((bRC + bZW) / 12);
                bRC = (bRC + bZW) % 12
            } else if (bRC + bZW < 1) {
                cgv = cgv - (Math.floor( - (bRC + bZW) / 12) + 1);
                bRC = 12 + (bRC + bZW) % 12
            } else {
                bRC = bRC + bZW
            }
        }
        var cKo = cgN(cgv, bRC);
        if (cBz > cKo) {
            cBz = cKo
        }
        var bIf = new Date(bZX);
        bIf.setYear(cgv);
        bIf.setMonth(bRC - 1);
        bIf.setDate(cBz);
        if (cKg) {
            try {
                var drp = bIf.getTime() + cKg;
                bIf = new Date(drp)
            } catch(e) {
                return null
            }
        }
        return bIf
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    bLE,
    crc,
    bQh,
    cro;
    var bSb = "定时发布";
    var crx = "js-timing-publish";
    var cKH = "ptui-" + U.cA();
    P(N.ui).fx('#<uispace>{}#<uispace> .ztxt{/*width:auto;*/width:5px;height:30px;line-height:30px;margin-right:-5px;}#<uispace> .zdwn{margin:13px 10px 12px 10px;}#<uispace> .zlst{display:none;left:-31px;width:190px;max-height:none;background:#fff;}#<uispace>.js-showlist .zlst{display:block;}#<uispace> .zlst .case{width:190px;}#<uispace> .zlst .zitm{padding:0 10px 0 35px;color:#444;}#<uispace> .zlst .zitm.js-timing-publish{height:auto;padding:0;overflow:visible;}#<uispace> .zlst .zitm.js-timing-publish:hover{background-color:#fff;color:#444;}#<uispace> .zlst .zitm.js-timing-publish label{display:block;height:36px;line-height:36px;padding:0 10px 0 35px;color:#444;}#<uispace> .zlst .zitm.js-timing-publish label:hover{color:#fff;background-color:#999;}#<uispace> .zlst .zitm.js-timing-publish .publishDateTime{display:none;width:190px;margin-top:7px;font-size:16px;background:#fff url("/rsc/img/shadow-in.png") 0 0 no-repeat;}#<uispace> .zlst .zitm.js-timing-publish .publishDateTime{border-style:solid;border-color:#cbcbcb;border-width:1px 0;}#<uispace> .zlst .zitm.js-timing-publish .publishDate{position:relative;zoom:1;z-index:8;float:left;width:116px;}#<uispace> .zlst .zitm.js-timing-publish .publishDate .dateInput{display:block;width:116px;height:38px;line-height:38px;text-align:center;font-size:16px;border:0;outline:none;}#<uispace> .zlst .zitm.js-timing-publish .publishTime{position:relative;zoom:1;z-index:10;float:right;width:72px;height:38px;border-left:1px solid #cbcbcb;}#<uispace> .zlst .zitm.js-timing-publish .timeInput{overflow:hidden;float:right;/*width:67px;*/width:66px;height:38px;line-height:38px;padding-right:6px;text-align:center;font-size:16px;border:0;outline:none;}#<uispace> .zlst .zitm.js-timing-publish .publishDate .calendarWrap .newpublishcalendar{position:static;border-style:solid;border-color:#cbcbcb;border-width:1px 0 0 0;}#<uispace> .zlst .zitm.js-timing-publish.js_selected_option .publishDateTime{display:block;}', cKH);
    p.clO = C();
    bLE = p.clO.bi(p.sC, true);
    crc = p.clO.bw;
    bLE.bq = function() {
        this.bHr()
    };
    bLE.bHC = function(I) {
        I = I || O;
        crc.bHC.call(this, I);
        this.bhw = I.post
    };
    bLE.ce = function(bHn) {
        this.bHq = bHn || O;
        var bg = this.bHq.t || this.bHq.n || this.bHq.v || " ";
        if (this.bHq.v == bSb) {
            E.ba(this.Y, crx);
            this.Y.innerHTML = '<label class="thide">' + bg + '</label><div class="clearfix publishDateTime typetag"><div class="publishDate"><input type="text" class="dateInput typetag" maxlength="20"><div class="calendarWrap typetag"></div></div><div class="publishTime"><input type="text" class="timeInput typetag" maxlength="10"></div></div>';
            this.dro()
        } else {
            this.Y.innerText = bg
        }
    };
    bLE.dro = function() {
        var bHl = E.bj(this.Y, "typetag");
        var Q = 0;
        this.czC = bHl[Q++];
        this.bIB = bHl[Q++];
        this.bXG = bHl[Q++];
        this.bIK = bHl[Q++];
        this.drn();
        V.bHo(this.bIB, "click", this.bPg.bHk(this));
        V.bHo(this.bIB, "blur", this.clL.bHk(this));
        V.bHo(this.bIK, "blur", this.cgo.bHk(this))
    };
    bLE.drn = function() {
        if ( !! this.bHq && this.bHq != "null") {
            var bIf = new Date;
            var bxd = this.bHq.publishDateTime || -1;
            if (bxd > 0) {
                bIf.setTime(bxd);
                if (!U.bA(this.bIB.value)) {
                    this.bIB.value = U.ws(bIf, "yyyy/MM/dd")
                }
                if (!U.bA(this.bIK.value)) {
                    this.bIK.value = U.ws(bIf, "HH:mm")
                }
            }
        }
        if (!U.bA(this.bIB.value) || !U.bA(this.bIK.value)) {
            var bIf = new Date;
            bIf = bIf.setTime(bIf.getTime() + 3 * 3600 * 1e3);
            if (!U.bA(this.bIB.value)) {
                this.bIB.value = U.ws(bIf, "yyyy/MM/dd")
            }
            if (!U.bA(this.bIK.value)) {
                this.bIK.value = U.ws(bIf, "HH:mm")
            }
        }
    };
    bLE.dyA = function() {};
    bLE.dyB = function() {};
    bLE.bPg = function(bHm) {
        V.bb(bHm);
        P("loft.w").bJZ.bE({
            isDisablePastDates: true,
            isShowCompleteDates: false,
            isShowSimpleBar: true,
            "class": "newpublishcalendar",
            date: this.bIB.value,
            parent: this.bXG,
            onselect: this.bPU.bHk(this)
        })
    };
    bLE.bPU = function(bHL) {
        this.bIB.value = U.ws(bHL, "yyyy/MM/dd");
        this.clL("", true)
    };
    bLE.clL = function(bHm, bVE) {
        if ( !! this.caI) this.caI = window.clearTimeout(this.caI);
        if ( !! bVE) {
            this.bUx(U.bA(this.bIB.value))
        } else {
            this.caI = window.setTimeout(this.bUx.bHk(this, U.bA(this.bIB.value)), 200)
        }
    };
    bLE.cgo = function(bHm, bVE) {
        if ( !! this.caM) this.caM = window.clearTimeout(this.caM);
        if ( !! bVE) {
            this.clI(U.bA(this.bIK.value))
        } else {
            this.caM = window.setTimeout(this.clI.bHk(this, U.bA(this.bIK.value)), 200)
        }
    };
    bLE.bUx = function(bIE) {
        this.cgo("", true);
        bIE = U.bA(bIE);
        if (!bIE) {
            E.bf(this.bIB, "js-errorDate");
            return
        } else if (!loft.w.bJZ.bXd(bIE)) {
            E.ba(this.bIB, "js-errorDate");
            return
        }
        var bIf = new Date(bIE);
        bIf.setHours(0, 0, 0, 0);
        var bVT = new Date;
        bVT.setHours(0, 0, 0, 0);
        if (bIf.getTime() + 5e3 < bVT.getTime()) {
            E.ba(this.bIB, "js-errorDate")
        } else {
            E.bf(this.bIB, "js-errorDate")
        }
    };
    bLE.clI = function(bJB) {
        bJB = U.bA(bJB);
        if (!bJB) {
            E.bf(this.bIK, "js-errorTime");
            return
        } else if (!loft.w.bJZ.cqh(bJB, "HH:mm")) {
            E.ba(this.bIK, "js-errorTime");
            return
        }
        var bIE = U.bA(this.bIB.value);
        if (!bIE || !loft.w.bJZ.bXd(bIE)) {
            E.bf(this.bIK, "js-errorTime");
            return
        }
        var bIf = new Date(bIE + " " + bJB);
        var bVT = new Date;
        if (bIf.getTime() + 5e3 < bVT.getTime()) {
            E.ba(this.bIK, "js-errorTime")
        } else {
            E.bf(this.bIK, "js-errorTime")
        }
    };
    bLE.rF = function(bHm) {
        if (this.bHq.v == bSb) {
            if (!U.bA(this.bIB.value) || !U.bA(this.bIK.value)) {
                var bIf = new Date;
                bIf = bIf.setTime(bIf.getTime() + 3 * 3600 * 1e3);
                if (!U.bA(this.bIB.value)) {
                    E.bf(this.bIB, "js-errorTime");
                    this.bIB.value = U.ws(bIf, "yyyy/MM/dd")
                }
                if (!U.bA(this.bIK.value)) {
                    E.bf(this.bIK, "js-errorTime");
                    this.bIK.value = U.ws(bIf, "HH:mm")
                }
            }
        }
        crc.rF.apply(this)
    };
    bLE.cK = function() {
        if (E.cr(this.Y, crx)) {
            E.bf(this.Y, crx)
        }
        this.Y.innerHTML = "";
        crc.cK.apply(this)
    };
    bLE.cyI = function() {
        if ( !! this.bIB) {
            return U.bA(this.bIB.value)
        }
    };
    bLE.clE = function(bIE) {
        if ( !! this.bIB) {
            this.bIB.value = bIE
        }
    };
    bLE.clB = function() {
        if ( !! this.bIK) {
            return U.bA(this.bIK.value)
        }
    };
    bLE.cya = function(bJB) {
        if ( !! this.bIK) {
            this.bIK.value = bJB
        }
    };
    p.cxO = C();
    bQh = p.cxO.bi(p.jv, true);
    cro = p.cxO.bw;
    bQh.bq = function(bl, I) {
        this.bHr(bl, I)
    };
    bQh.bz = function(I) {
        I = I || O;
        this.bhw = I.post || null;
        this.eL.post = this.bhw;
        cro.bz.call(this, I)
    };
    bQh.cU = function() {
        var bpt = cro.cU.apply(this);
        return cKH + " " + bpt
    };
    bQh.cK = function() {
        cro.cK.call(this);
        this.cT = p.clO.db(this.cT)
    };
    bQh.XL = function(cf) {
        p.clO.db(this.cT);
        this.cT = p.clO.bG(cf, this.fS, this.eL);
        if ( !! this.cT && this.cT.length > 0) {
            if ( !! this.cT[0]) {
                this.cT[0].coN(this.coP.bHk(this))
            }
            if ( !! this.cT[this.cT.length - 1]) {
                this.cT[this.cT.length - 1].coN(this.coP.bHk(this), true)
            }
        }
    };
    bQh.lE = function(Q) {
        if ( !! Q && Q == -1) {
            this.DD();
            return
        }
        if (!this.cT) return;
        var bo = this.cT[Q || 0];
        if (!bo) return;
        this.DD(bo.hY())
    };
    bQh.DD = function(bHn) {
        this.fg = bHn;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHn.v) {
                Q = i;
                break
            }
        }
        this.cFz(this.chf, Q);
        this.chf = Q;
        if (bHn.v != bSb) {
            this.Hl();
            this.clE("");
            this.cya("")
        }
        this.bh("onchange", bHn.v || bHn.n || bHn.t || "", Q)
    };
    bQh.cFT = function() {
        this.chh.style.left = "115px"
    };
    bQh.cyI = function() {
        if ( !! this.cT[2] && !!this.cT[2].clE) {
            return this.cT[2].cyI()
        }
    };
    bQh.clE = function(bIE) {
        if ( !! this.cT[2] && !!this.cT[2].clE) {
            this.cT[2].clE(bIE)
        }
    };
    bQh.clB = function() {
        if ( !! this.cT[2] && !!this.cT[2].clB) {
            return this.cT[2].clB()
        }
    };
    bQh.cya = function(bJB) {
        if ( !! this.cT[2] && !!this.cT[2].clB) {
            this.cT[2].cya(bJB)
        }
    };
    bQh.cFM = function(bQw) {
        if (!bQw) return;
        var dp = document.documentElement || document.body,
        FW = document.body || document.documentElement;
        var bMS = dp.scrollTop || FW.scrollTop || 0;
        var bUs = bMS + dp.clientHeight;
        var Zt = E.jO(this.Y);
        var bCp = Zt + this.Y.clientHeight;
        if (this.Y.clientHeight <= dp.clientHeight) {
            var ig = 10;
            var cpS = this.bLN.clientHeight;
            var bHl = E.bj(this.bLN, crx);
            if ( !! bHl && !!bHl[0]) {
                cpS = 400
            }
            if (bUs - bCp > this.bLN.clientHeight + ig || Zt < cpS + ig) {
                E.bf(this.bLN, bQw)
            } else {
                E.ba(this.bLN, bQw)
            }
        } else {
            E.bf(this.bLN, bQw)
        }
    }
})(); (function() {
    var p = P("loft.w"),
    bME,
    cLA,
    bHu = "ui-" + U.cA();
    var Li = ["1", "2", "3", "6", "5", "4", "7", "8", "10", "11"],
    bew = ["新浪微博", "网易微博", "QQ空间", "腾讯微博", "人人", "豆瓣", "Twitter", "Facebook", "flickr", "500px"];
    P(N.ui).fx('#<uispace>{}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .sitewrap{padding-bottom:1px;margin:0 -5px 0 -1px;}#<uispace> .sitewrap a{float:left;position:relative;zoom:1;z-index:1;width:24px;height:24px;margin:0 4px 8px 0;}#<uispace> .sitewrap em,#<uispace> .sitewrap b{background:url("http://l.bst.126.net/rsc/img/sitesyncmanager/siteicon24.png") 0 0 no-repeat;_background:url("http://l.bst.126.net/rsc/img/sitesyncmanager/siteicon8.png") 0 0 no-repeat;}#<uispace> .sitewrap a em{display:block;width:100%;height:100%;overflow:hidden;text-indent:-9999px;}#<uispace> .sitewrap .site1{background-position:1px 1px;}#<uispace> .sitewrap .js-sel .site1{background-position:1px -102px;}#<uispace> .sitewrap .site2{background-position:-27px 1px;}#<uispace> .sitewrap .js-sel .site2{background-position:-27px -102px;}#<uispace> .sitewrap .site3{background-position:-55px 1px;}#<uispace> .sitewrap .js-sel .site3{background-position:-55px -102px;}#<uispace> .sitewrap .site6{background-position:-83px 1px;}#<uispace> .sitewrap .js-sel .site6{background-position:-83px -102px;}#<uispace> .sitewrap .site5{background-position:-111px 1px;}#<uispace> .sitewrap .js-sel .site5{background-position:-111px -102px;}#<uispace> .sitewrap .site4{background-position:-139px 1px;}#<uispace> .sitewrap .js-sel .site4{background-position:-139px -102px;}#<uispace> .sitewrap .site7{background-position:-167px 1px;}#<uispace> .sitewrap .js-sel .site7{background-position:-167px -102px;}#<uispace> .sitewrap .site8{background-position:1px -31px;}#<uispace> .sitewrap .js-sel .site8{background-position:1px -130px;}#<uispace> .sitewrap .site10{background-position:-27px -31px;}#<uispace> .sitewrap .js-sel .site10{background-position:-27px -130px;}#<uispace> .sitewrap .site11{background-position:-55px -31px;}#<uispace> .sitewrap .js-sel .site11{background-position:-55px -130px;}#<uispace> .sitewrap .syncmore{background-position:-83px -31px;}#<uispace> .sitewrap .syncmore:hover{background-position:-83px -130px;}#<uispace> .sitewrap b{display:none;position:absolute;bottom:-3px;right:-4px;z-index:5;clear:both;width:10px;height:10px;overflow:hidden;cursor:pointer;background-position:0 -72px;}#<uispace> .sitewrap .js-sel2 b{display:block;}', bHu);
    p.csb = C();
    bME = p.csb.bi(P(N.ui).ga, true);
    cLA = p.csb.bw;
    bME.bq = function(bl, I) {
        this.ki = {};
        this.caU = {};
        this.kh = {};
        this.so = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.bHr(bl, I);
        this.dB();
        for (var i = 0; i < this.xQ.length; i++) {
            V.bHo(this.xQ[i], "click", this.bpG.bHk(this, i))
        }
    };
    bME.dB = function() {
        var bJ = P("loft.w.g");
        bJ.cbConnectSite = this.drl.bHk(this)
    };
    bME.ix = function(Q, bp) {
        var hj = Li[Q];
        var eT = 400,
        dz = 600;
        if (hj == "1") {
            eT = 760;
            dz = 900
        }
        var dn = (window.screen.height - eT - 200) / 2,
        cN = (window.screen.width - dz) / 2;
        if (dn < 0) dn = 0;
        if (cN < 0) cN = 0;
        if ( !! bp) {
            if (hj == "1") {
                J.gf(location.dwr, "SinaSiteBean", "cancelConnect", this.bI, hj)
            } else if (hj == "8") {
                J.gf(location.dwr, "FacebookSiteBean", "cancelConnect", this.bI, hj)
            } else if (hj == "5") {
                J.gf(location.dwr, "RenrenSiteBean", "cancelConnect", this.bI, hj)
            }
            window.open(bp, "关联", "height=" + eT + ",width=" + dz + ",top=" + dn + ",left=" + cN + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no")
        } else {
            E.bd("关联同步失败", true)
        }
    };
    bME.drl = function(rI, hj, rQ) {
        hj = hj || "";
        hj = hj + "";
        if ( !! rI) {
            if (hj == "1" || hj == "8" || hj == "5" || hj == "3" || hj == "4") {
                var Q = this.drk(hj);
                var bk = this.xQ[Q];
                if (!bk) return;
                E.bf(bk, "js-sel2");
                E.ba(bk, "js-sel");
                this.so[Q] = 1;
                bk.title = "点击取消同步" + bew[Q] + "（已同步帐号：" + rQ + "）"
            }
            E.bY("关联成功", true)
        } else {
            E.bd("关联失败,请稍后再试", true)
        }
    };
    window.cbConnectSite = function(rI, hj, rQ) {
        loft.w.g.cbConnectSite(rI, hj, rQ)
    };
    bME.drk = function(hj) {
        var Q = -1;
        for (var i = 0; i < Li.length; i++) {
            if (Li[i] == hj) {
                Q = i;
                break
            }
        }
        return Q
    };
    bME.bpG = function(Q, bHm) {
        var bk = this.xQ[Q];
        if (this.caU[this.bI] == "nobind") {
            return
        }
        V.bb(bHm);
        var bg = this.so[Q];
        if (bg == 2 && this.bhZ == 2) {
            E.bd("非管理员无权设置绑定", true);
            return
        }
        if (Q == 0 && bg == 2) {
            J.gf(location.dwr, "SinaSiteBean", "getOauth2AuthorUrl", this.bI, false, this.ix.bHk(this, Q));
            return
        } else if (Q == 7 && bg == 2) {
            J.gf(location.dwr, "FacebookSiteBean", "getAuthorUrl", this.bI, false, this.ix.bHk(this, Q));
            return
        } else if (Q == 4 && bg == 2) {
            J.gf(location.dwr, "RenrenSiteBean", "getAuthorUrl", this.bI, false, this.ix.bHk(this, Q));
            return
        } else if (Q == 2 && bg == 2) {
            J.gf(location.dwr, "QQSiteBean", "getAuthorUrl", this.bI, false, this.ix.bHk(this, Q));
            return
        } else if (Q == 5 && bg == 2) {
            J.gf(location.dwr, "DoubanSiteBean", "getAuthorUrl", this.bI, false, this.ix.bHk(this, Q));
            return
        }
        if ( !! bg) {
            E.bf(bk, "js-sel");
            bk.title = bk.title.replace("取消同步", "同步到")
        } else {
            E.ba(bk, "js-sel");
            bk.title = bk.title.replace("同步到", "取消同步")
        }
        this.so[Q] = !!bg ? 0 : 1
    };
    bME.bz = function(I) {
        I = I || O;
        cLA.bz.call(this);
        this.bI = I.blogId || 0;
        this.dr = I.blogName;
        this.bhZ = I.role || 2;
        this.lD = I.isDraftPost;
        this.bX = I.actionType || "NEW";
        this.nM = I.editorType || "text";
        this.drf = I.noSiteSync || false;
        this.dre = I.forceRefresh || false;
        if ( !! this.drf) {
            E.ba(this.Y.parentNode, "f-dn")
        } else {
            this.drd(this.bI, this.dre);
            this.cwF.href = this.bdu(this.dr) || "#"
        }
    };
    bME.cU = function() {
        return bHu + " sitesyncmanager"
    };
    bME.cM = function() {
        return '<div class="sitewrap clearfix"><a href="#" class="xtag"><em class="site1">新浪微博</em><b></b></a><a style="display:none;" href="#" class="xtag"><em class="site2">网易微博</em><b></b></a><a href="#" class="xtag"><em class="site3">QQ空间</em><b></b></a><a href="#" class="xtag"><em class="site6">腾讯微博</em><b></b></a><a href="#" class="xtag"><em class="site5">人人网</em><b></b></a><a href="#" class="xtag"><em class="site4">豆瓣</em><b></b></a><a href="#" class="xtag"><em class="site7">twitter</em><b></b></a><a href="#" class="xtag"><em class="site8">facebook</em><b></b></a><a href="#" class="xtag"><em class="site10">flickr</em><b></b></a><a href="#" class="xtag"><em class="site11">500px</em><b></b></a><a href="#" class="xtag" target="_blank" title="同步更多网站"><em class="syncmore">+</em><b></b></a></div>'
    };
    bME.cc = function() {
        var bHl = E.bj(this.Y, "xtag");
        var Q = 0;
        this.bKY = bHl[Q++];
        this.drc = bHl[Q++];
        this.Gx = bHl[Q++];
        this.cwu = bHl[Q++];
        this.Gz = bHl[Q++];
        this.Gy = bHl[Q++];
        this.cbk = bHl[Q++];
        this.drb = bHl[Q++];
        this.dra = bHl[Q++];
        this.dqY = bHl[Q++];
        this.cwF = bHl[Q++];
        this.xQ = [this.bKY, this.drc, this.Gx, this.cwu, this.Gz, this.Gy, this.cbk, this.drb, this.dra, this.dqY]
    };
    bME.drd = function(bc, bVF) {
        E.ba(this.Y.parentNode, "f-dn");
        if (bc <= 0) {
            return
        }
        var nB = this.ki[bc];
        if ( !! nB && !bVF) {
            this.cNd(bc, nB)
        } else {
            if (!this.kh[bc]) {
                this.kh[bc] = true;
                J.br(location.dwr, "SiteConnectInfoBean", "getConnectSites", bc, this.vN.bHk(this, bc))
            }
        }
    };
    bME.vN = function(bc, nB) {
        this.kh[bc] = false;
        if (!nB) nB = [];
        this.ki[bc] = nB;
        if (bc == this.bI) {
            this.cNd(bc, nB)
        }
    };
    bME.cNd = function(bc, nB) {
        var sF = nB.length;
        var cNi = true,
        cNl = 0;
        var hj, bdc = {},
        bcY = {},
        bcX = {},
        bcU = {};
        for (var i = 0; i < sF; i++) {
            hj = nB[i].siteType + "";
            bdc[hj] = nB[i].synchType;
            bcY[hj] = nB[i].accountName;
            bcX[hj] = nB[i].defaultSel;
            bcU[hj] = nB[i].extValue;
            if (this.nM == "photo" || hj != "10" && hj != "11") {
                cNi = false;
                cNl++
            }
        }
        var cws = Li.length;
        if (this.nM != "photo") {
            cws = cws - 2
        }
        if ( !! cNi) {
            this.caU[bc] = "nobind"
        } else if (cws == cNl) {
            this.caU[bc] = "allbind"
        } else {
            this.caU[bc] = "somebind"
        }
        for (var i = 0; i < this.xQ.length; i++) {
            var hj = Li[i],
            bg = bdc[hj],
            iq = bcY[hj],
            bpY = bcX[hj],
            jG = bew[i],
            bk = this.xQ[i];
            if (this.caU[bc] == "nobind") {
                this.so[i] = 0;
                bk.href = this.bdu(this.dr) || "#";
                bk.title = "点击同步到" + jG;
                bk.target = "_blank";
                if (this.nM != "photo" && (hj == "10" || hj == "11")) {
                    E.ba(bk, "f-dn")
                } else {
                    E.bf(bk, "f-dn js-sel js-sel2")
                }
                if (hj == "3") {
                    E.ba(bk, "f-dn")
                }
                continue
            } else {
                bk.removeAttribute("target");
                bk.removeAttribute("href")
            }
            if (this.nM != "photo" && (hj == "10" || hj == "11")) {
                this.so[i] = 0;
                E.ba(bk, "f-dn");
                continue
            }
            if (this.nM == "photo" && this.bX == "REBLOG" && (hj == "10" || hj == "11")) {
                this.so[i] = 0;
                E.ba(bk, "f-dn");
                continue
            }
            if (bg == 1) {
                E.bf(bk, "f-dn")
            } else {
                E.ba(bk, "f-dn")
            }
            if ((this.bX == "NEW" || this.bX == "REBLOG" || this.bX == "EDIT" && !!this.lD) && bg == 1 && !!bpY) {
                E.ba(bk, "js-sel");
                this.so[i] = 1;
                bk.title = "点击取消同步" + jG + "（已同步帐号：" + iq + "）"
            } else {
                E.bf(bk, "js-sel");
                bk.title = "点击同步到" + jG + "（已同步帐号：" + iq + "）";
                this.so[i] = 0
            }
            if (hj == "1" || hj == "8" || hj == "5" || hj == "3" || hj == "4") {
                E.bf(bk, "js-sel2");
                var bcw = bcU[hj];
                if (!bcw && hj == "4" && bg == 1) {
                    bcw = '{"expireTime":1}'
                }
                if ( !! bcw) {
                    if (hj == "3" && bcw.indexOf("{") < 0) {
                        bcw = '{"expireTime":1}'
                    }
                    if (hj == "4" && bcw.indexOf("{") < 0) {
                        bcw = '{"expireTime":1}'
                    }
                    var LF = U.bHx(bcw);
                    if ( !! LF && !!LF.expireTime && LF.expireTime <= (new Date).getTime()) {
                        E.bf(bk, "js-sel");
                        E.ba(bk, "js-sel2");
                        if (hj == "1") {
                            bk.title = "因新浪策略调整，微博同步设置已过期，请重新设置！"
                        } else if (hj == "8") {
                            bk.title = "因FaceBook策略调整，同步设置已过期，请重新设置！"
                        } else if (hj == "5") {
                            bk.title = "因人人网策略调整，同步设置已过期，请重新设置！"
                        } else if (hj == "3") {
                            bk.title = "因QQ空间策略调整，同步设置已过期，请重新设置！"
                        } else if (hj == "4") {
                            bk.title = "因豆瓣空间策略调整，同步设置已过期，请重新设置！"
                        }
                        this.so[i] = 2
                    }
                    if (hj == "3" && !!LF && !!LF.expireTime && LF.expireTime <= 13818708e5) {
                        E.bf(bk, "js-sel");
                        E.ba(bk, "js-sel2");
                        bk.title = "因QQ空间策略调整，同步设置已过期，请重新设置！";
                        this.so[i] = 2
                    }
                }
            }
        }
        if (this.caU[bc] == "somebind" && this.bhZ != 2) {
            E.bf(this.cwF, "f-dn")
        } else {
            E.ba(this.cwF, "f-dn")
        }
        if (this.caU[bc] == "nobind" && this.bhZ == 2) {
            E.ba(this.Y.parentNode, "f-dn")
        } else {
            E.bf(this.Y.parentNode, "f-dn")
        }
    };
    bME.bdu = function(bHK) {
        if ( !! bHK) {
            return "http://www.lofter.com/theme/" + bHK + "/?type=sync"
        }
        return ""
    };
    bME.Hm = function() {
        if (E.cr(this.Y.parentNode, "f-dn")) return "";
        var bu = "",
        hj;
        for (var i = 0; i < this.so.length; i++) {
            hj = Li[i];
            if (this.so[i] == 1) {
                bu += hj + ","
            }
        }
        return bu
    };
    bME.cNz = function() {
        if (E.cr(this.Y.parentNode, "f-dn")) return "";
        var cNF = [];
        for (var i = 0; i < this.so.length; i++) {
            if (this.so[i] == 2) {
                var iq = bew[i];
                if ( !! iq) cNF.push(iq)
            }
        }
        return cNF
    };
    bME.cNH = function() {
        var dY = {
            blogId: this.bI,
            blogName: this.dr,
            role: this.bhZ
        };
        return dY
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    pl,
    beO,
    bHu = "ui-" + U.cA();
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;z-index:12;width:60px;height:20px;color:#444;font-size:12px;font-family:"Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .uploadCover{position:absolute;left:0;top:0;width:25px;height:20px;visibility:hidden;background:url("http://l.bst.126.net/rsc/img/empty.png") 0 0 repeat;}', bHu);
    p.Db = C();
    pl = p.Db.bi(P(N.ui).ga, true);
    beO = p.Db.bw;
    pl.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I);
        this.fo = [];
        this.Lf = {};
        this.dB()
    };
    pl.dB = function() {
        var bJ = P("loft.w.g");
        bJ.cbUploadPhoto = this.Dd.bHk(this)
    };
    pl.bz = function(I) {
        I = I || O;
        beO.bz.call(this);
        this.ct = I.ueditor;
        if ( !! this.ct) {
            this.ct.addListener("sourcemodechanged", this.cwn.bHk(this))
        }
    };
    pl.cwn = function(by, cwg) {
        if ( !! cwg) {
            this.mM()
        } else {
            this.yG()
        }
    };
    pl.yG = function() {
        this.KN.style.visibility = "hidden"
    };
    pl.mM = function() {
        this.KN.style.visibility = "visible"
    };
    pl.cU = function() {
        return bHu + " editoruploadphoto"
    };
    pl.cM = function() {
        return '<div class="uploadCover ztag"></div><iframe class="ztag" width="25" scrolling="no" height="20" frameborder="0" border="0" allowtransparency="true" src="http://www.lofter.com/html/newpublish/uploadphoto.html?005"></iframe>'
    };
    pl.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        this.KN = bHl[0];
        this.Le = bHl[1]
    };
    pl.Dd = function(bH) {
        if ( !! this.Le) {
            this.Le.src = "about:blank";
            this.Le.src = loft.x.bM() + "/html/newpublish/uploadphoto.html?005"
        }
        bH = bH || {};
        if (bH.resultcode == 999) {
            var gz = {
                ow: bH.ow,
                oh: bH.oh,
                small: bH.userDef1Url || "",
                middle: bH.userDef2Url || "",
                orign: "",
                photoGarbageIds: bH.photoGarbageIds
            };
            this.fo.push(gz);
            if ( !! this.ct) {
                var beV = [],
                eJ = {};
                eJ.src = bH.userDef2Url;
                this.Lf[eJ.src] = bH.userDef1Url;
                beV.push(eJ);
                this.ct.focus();
                this.ct.execCommand("insertImage", beV);
                this.ct.execCommand("inserthtml", "<br />")
            }
        } else {
            alert("图片添加失败!")
        }
    };
    pl.bps = function(bpr) {
        var bHl = this.ct.document.getElementsByTagName("img");
        for (var i = 0; i < bHl.length; i++) {
            if ( !! bHl[i] && !!bHl[i].src && !!this.Lf[bHl[i].src] && !!bHl[i].tagName && bHl[i].tagName.toLowerCase() == "img") {
                bHl[i].setAttribute(bpr, this.Lf[bHl[i].src])
            }
        }
    };
    pl.Lc = function() {
        this.bps("smallsrc");
        return this.fo
    }
})();






//
(function() {
    var p = P("loft.m.newpublish.w"),
    bHD,
    cwb,
    uiId = "ui-" + U.cA();
    var mH = /<.*?>/gi;
    var bQK = "http://l.bst.126.net/rsc/img/ava/64.png" || "http://l.bst.126.net/rsc/img/newpublish/defavatar.png";
    var publishNow = "现在发布",
    publishAuto = "自动发布",
    publishSometime = "定时发布",
    saveDraft = "保存为草稿",
    privileges = "仅自己可见";
    
    P(N.ui).fx("#<uispace>{position:relative;z-index:100;zoom:1;width:674px;color:#444;font-size:12px;}#<uispace> .pleft{float:left;}#<uispace> .pright{float:right;}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .publishlayer .cCommonsArea{height:33px;}#<uispace> .publishlayer .siteSyncArea{float:right;}#<uispace> .m-mlist .w-img a{position:relative;z-index:10;}#<uispace> .m-mlist .w-img img{position:relative;z-index:10;}#<uispace> .m-mlist .w-img .blogavatar{position:absolute;left:0;top:0;z-index:1;width:64px;height:64px;background-size:cover;background-color:transparent;background-repeat:no-repeat;}#<uispace> .m-mlist .w-img .blogavatar{-webkit-transform-style:preserve-3d;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;}#<uispace> .m-mlist .w-img .blogavatar{transform:perspective(300px) rotateY(0deg);-webkit-transform:perspective(300px) rotateY(0deg);-moz-transform:perspective(300px) rotateY(0deg);-o-transform:perspective(300px) rotateY(0deg);}#<uispace> .m-mlist .w-img .newblogavatar{z-index:0;transform:perspective(300px) rotateY(180deg);-webkit-transform:perspective(300px) rotateY(180deg);-moz-transform:perspective(300px) rotateY(180deg);-o-transform:perspective(300px) rotateY(180deg);}#<uispace> .m-mlist .w-img a.js-useblogavatar img{visibility:hidden;}#<uispace> .m-mlist .w-img a.js-useblogavatar.js-animating .blogavatar{transition:transform 0.3s linear, z-index 0.3s linear;-webkit-transition:-webkit-transform 0.3s linear, z-index 0.3s linear;-moz-transition:-moz-transform 0.3s linear, z-index 0.3s linear;-o-transition:-o-transform 0.3s linear,z-index 0.3s linear;}#<uispace> .m-mlist .w-img a.js-useblogavatar.js-animating .blogavatar{z-index:0;transform:perspective(300px) rotateY(180deg);-webkit-transform:perspective(300px) rotateY(180deg);-moz-transform:perspective(300px) rotateY(180deg);-o-transform:perspective(300px) rotateY(180deg);}#<uispace> .m-mlist .w-img a.js-useblogavatar.js-animating .newblogavatar{z-index:1;transform:perspective(300px) rotateY(360deg);-webkit-transform:perspective(300px) rotateY(360deg);-moz-transform:perspective(300px) rotateY(360deg);-o-transform:perspective(300px) rotateY(360deg);}#<uispace> .actionBar .previewBtn{float:right;}#<uispace> .actionBar .publishArea{float:right;}#<uispace> .actionBar .publishBtn{float:left;overflow:hidden;}#<uispace> .actionBar .publishType{float:left;}#<uispace> .m-mlist .mlistcnt .isay{position:relative;}#<uispace> .m-mlist .mlistcnt .isay .overlayer{display:none;position:absolute;left:23px;right:2px;top:1px;bottom:3px;z-index:1000;background:rgba(255, 255, 255, 0.7);}", uiId);
    p.bWV = C();
    bHD = p.bWV.bi(P(N.ui).ga, true);
    cwb = p.bWV.bw;
    p.bWV.YV = function(bl, I) {
        I = I || {};
        if ( !! this.eb && !this.eb.bby()) {
            this.db(this.eb)
        }
        bl = bl || document.body;
        I.singleton = true;
        try {
            this.eb = p.bWV.bG(bl, I)
        } catch(e) {}
        return this.eb
    };
    p.bWV.db = function(hk) {
        if ( !! hk) hk.cOG(hk.bOW);
        p.bWV.bHr.db.call(this, hk)
    };
    bHD.bq = function(bl, I) {
        this.bHr(bl, I);
        this.dB();
        this.nW = {};
        V.bHo(document, "keydown", this.dqV.bHk(this), true);
        if (p.bIv.ie || p.bIv.ie11plus) {
            var cOV = document.cloneElement("input", "inputforfocus ");
            cOV.style.cssText = "positon:absolute;right:0;bottom:0;z-index:-1;opacity:0;color:transparent;with:0;height:0;overflow:hidden;";
            this.Y.insertAdjacentElement("beforeEnd", cOV)
        }
    };
    bHD.dqV = function(bHm) {
        if (!this.cwa()) {
            var bIu = bHm.which || bHm.keyCode;
            if (bIu == 74 || bIu == 75 || bIu == 72 || bIu == 76 || bIu == 83 || bIu == 68) {
                V.qK(bHm);
                return
            }
            if (bIu == 27 && E.be("atinput").style.visibility === "hidden") {
                this.ku()
            }
        }
    };
    bHD.dqU = function(bLA) {
        this.dqT(bLA);
        this.clh();
        this.dqS();
        this.cvX();
        this.cvV();
        this.cvU();
        this.cvR()
    };
    bHD.dqR = function(bN, bLA) {
        this.bhw = bN;
        this.cgd();
        this.dqU(bLA);
        if ( !! this.bhw && this.bhw != "null") {
            var Z = this.bhw.content || this.bhw.caption || this.bhw.answer;
            var eg = false;
            if (this.bX == "REBLOG") {
                Z = this.os();
                eg = true
            }
            if ( !! this.gt) {
                Z = this.ov(Z);
                eg = true
            }
            if ( !! Z && (this.bX == "EDIT" || this.bX == "REBLOG")) {
                this.csG(Z, eg, true)
            } else {
                this.csG(Z, eg)
            }
        }
    };
    bHD.cvL = function() {
        return this.dm
    };
    bHD.os = function() {
        if (!this.bhw || !this.bhw.blogInfo) return "";
        var Z = this.bhw.content || this.bhw.caption || "";
        var bHK = U.ew(this.bhw.blogInfo.blogNickName || this.bhw.blogInfo.blogName);
        var oy = loft.x.bM(this.bhw.blogInfo.blogName) + "/post/" + this.bhw.permalink;
        var hW = "<p><br></p>";
        if (B.da) {
            hW = "<p>&nbsp;</p>"
        }
        if (!Z) {
            return hW + '<p reblogfrom="reblogfrom">转载自：<a href="' + oy + '">' + bHK + "</a></p>"
        } else {
            return hW + '<p reblogfrom="reblogfrom"><a href="' + oy + '">' + bHK + ":</a></p><blockquote>" + Z + "</blockquote>" + hW
        }
    };
    bHD.ov = function(Z) {
        Z = Z || this.bhw.content || this.bhw.caption || "";
        if ( !! this.bhw && !!this.bhw.queuePost) {
            return Z
        }
        var kH = "";
        var oG = "";
        if ( !! this.csI) {
            kH = U.ew(this.csI.blogNickName || this.csI.blogName);
            oG = loft.x.bM(this.csI.blogName)
        }
        if ( !! kH) {
            Z = Z + '<p>来自：<a href="' + oG + '">' + kH + "</a></p>"
        }
        return Z
    };
    bHD.bHC = function(bl, I) {
        cwb.bHC.call(this, bl, I)
    };
    bHD.bz = function(I) {
        I = I || {};
        this.bRO = I.minFrameHeight || "";
        this.bRP = I.maxFrameHeight || "";
        this.cnG = I.autoHeightEnabled || false;
        this.bOW = I.js_activating;
        this.cvJ(I);
        this.bHo("ontempsavepost", I.ontempsavepost || F);
        this.bHo("oncancel", I.oncancel || F);
        this.bHo("onpublish", I.onpublish || F);
        this.bHo("onpreview", I.onpreview || F)
    };
    bHD.cvJ = function(I) {
        I = I || {};
        this.bPs = I.targetBlogInfo || {};
        this.brp = this.bPs.blogName || "";
        this.kq = I.blogList || [];
        this.bhw = I.post || null;
        this.cga = this.cga || I.lastCCType || -1;
        this.bVw = I.postOverNum || false;
        this.bGz = I.postType || "";
        this.bX = I.actionType || "";
        this.nM = I.editorType || "";
        this.cGz = I.ue_cfg_develop || false;
        this.coL = I.ue_js_version || "";
        this.gn = I.isCitePost;
        this.gt = I.isContribute;
        this.lD = I.isDraftPost;
        if (this.bX == "EDIT" && !!this.lD) {
            this.bKZ = true
        } else {
            this.bKZ = false
        }
        this.dqQ();
        this.csI = I.submiterBlogInfo || null;
        if (this.bX == "NEW") {
            this.sW = this.csP()
        }
    };
    bHD.csP = function() {
        var cQi = loft.x.wc(location.hash, "from", "#");
        var bp = location.href || "";
        if (bp.length >= 27 && bp.substring(0, 27) == "http://www.lofter.com/time/") {
            cQi = "blogPostQueue"
        }
        return cQi
    };
    bHD.dqQ = function(bHn) {
        if ( !! bHn && !!bHn.n && !!bHn.imgurl) {
            this.bPv.href = "http://" + bHn.n + ".lofter.com";
            this.bPv.title = bHn.t || bHn.n || "";
            this.bkb.src = bHn.imgurl || bQK;
            this.bZB = loft.x.eK(bHn.imgurl, 64) || bQK;
            this.cvA.style.backgroundImage = 'url("' + (this.bZB || bQK) + '")'
        } else {
            this.bPv.href = "http://" + this.bPs.blogName + ".lofter.com";
            this.bPv.title = this.bPs.blogNickName || this.bPs.blogName || "";
            this.bkb.src = this.bPs.bigAvaImg || bQK;
            this.bZB = loft.x.eK(this.bPs.bigAvaImg, 64) || bQK;
            this.cvA.style.backgroundImage = 'url("' + (this.bZB || bQK) + '")'
        }
    };
    bHD.cgd = function(cvt) {
        this.dm = this.brp;
        if ( !! this.bhw && this.bX != "REBLOG") {
            if ( !! this.bhw.blogName) {
                this.dm = this.bhw.blogName
            } else if ( !! this.bhw.blogInfo && !!this.bhw.blogInfo.blogName) {
                this.dm = this.bhw.blogInfo.blogName
            }
        }
        if (this.bX == "REBLOG" && !!this.bhw && !!this.bhw.blogInfo && !!this.bhw.blogInfo.blogName && this.dm == this.bhw.blogInfo.blogName) {
            if ( !! this.kq && !!this.kq[0] && !!this.kq[0].blogInfo && this.kq[0].blogInfo.blogName != this.bhw.blogInfo.blogName) {
                this.dm = this.kq[0].blogInfo.blogName || ""
            } else {
                this.dm = ""
            }
        }
        if (this.bX == "REBLOG") {
            var hT = U.ot("lastReblogTo");
            hT = hT || loft.c.nz.blogName || "";
            if (hT != this.bhw.blogInfo.blogName) {
                this.dm = hT
            } else {
                this.dm = ""
            }
        }
        this.bKG = publishNow;
        if ( !! this.bhw && this.bhw != "null") {
            if ( !! this.bhw.queuePost && this.bhw.queuePost.valid == 15 || this.bhw.queuePostType == 15) {
                this.bKG = publishSometime
            } else if ( !! this.bhw.queuePost && this.bhw.queuePost.valid == 16 || this.bhw.queuePostType == 16) {
                this.bKG = publishAuto
            } else if (!this.bhw.isContribute && !this.bhw.isPublished) {
                this.bKG = saveDraft
            } else if (this.bhw.allowView == "100") {
                this.bKG = privileges
            } else {
                this.bKG = publishNow
            }
        }
        if (this.sW == "blogPostQueue" && (!this.bhw || this.bhw == "null")) {
            this.bKG = publishAuto
        }
    };
    bHD.cU = function() {
        return "publishcommon " + uiId // 点击发布，弹出层的类型
    };
    bHD.cco = function(dqP) {
        if (this.csR) {
            E.bf(this.Y, this.csR)
        }
        this.csR = dqP || "";
        if (this.csR) {
            E.ba(this.Y, this.csR)
        }
    };
    bHD.cfY = function() {
        this.cco()
    };
    bHD.dqO = function(cj) {
        if ( !! cj && !E.cr(this.Y, cj)) {
            E.ba(this.Y, cj);
            this.cvo()
        }
    };
    bHD.cOG = function(cj) {
        if ( !! cj && E.cr(this.Y, cj)) {
            E.bf(this.Y, cj)
        }
    };
    bHD.cM = function() {
        var dqN = '<div class="publishlayer ztag"><div class="hdinfobar clearfix"><div class="publishTo ztag"></div><div class="reblogfrom f-thide ztag"></div></div><div class="publishMain ztag"></div><div class="editorWrap ztag"><div class="newPublishUEditor ztag"></div><div id="editor_uploadPhotoArea" class="editor_uploadPhotoArea"></div></div><div class="tagArea ztag"></div><div class="siteSyncArea ztag"></div><div class="clearfix cCommonsArea ztag"></div><div class="clearfix actionBar"><div class="publishArea" hidefocus="true"><button class="publishBtn f-noselect f-commonicon ztag" hidefocus="true"><span class="ztag">发&#12288;布</span></button><div class="publishType ztag"></div></div><button class="previewBtn f-noselect f-commonicon ztag" hidefocus="true"><span>预&#12288;览</span></button><button class="cancelBtn f-noselect f-commonicon ztag" hidefocus="true"><span>取&#12288;消</span></button></div></div>';
        var dc = '<div class="m-mlist"><div class="mlistimg"><div class="w-img"><a class="ztag" target="_blank"><img class="ztag" /><span class="blogavatar ztag"></span><span class="blogavatar newblogavatar ztag"></span></a></div></div><div class="mlistcnt"><div class="isay"><div class="isayt"><span class="isayc"></span></div><div class="isaym"><div class="publishlayerwrap">' + dqN + '</div></div><div class="isayb"></div><div class="overlayer ztag"></div></div></div></div>';
        return dc
    };
    bHD.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        var Q = 0;
        this.bPv = bHl[Q++];
        this.bkb = bHl[Q++];
        this.dqM = bHl[Q++];
        this.cvA = bHl[Q++];
        this.bIH = bHl[Q++];
        this.uj = bHl[Q++];
        this.cta = bHl[Q++];
        this.ckU = bHl[Q++];
        this.JL = bHl[Q++];
        this.dqL = bHl[Q++];
        this.Yp = bHl[Q++];
        this.dqK = bHl[Q++];
        this.dqJ = bHl[Q++];
        this.uh = bHl[Q++];
        this.ckO = bHl[Q++];
        this.bSA = bHl[Q++];
        this.qp = bHl[Q++];
        this.iO = bHl[Q++];
        this.cfW = bHl[Q++];
        V.bHo(this.iO, "click", this.ku.bHk(this));
        V.bHo(this.qp, "click", this.qN.bHk(this));
        V.bHo(this.uh, "click", this.nA.bHk(this))
    };
    bHD.cK = function() {
        cwb.cK.call(this)
    };
    bHD.dqH = function() {
        this.cK();
        E.hE(this.Y);
        delete this
    };
    bHD.cy = function() {
        this.Y.style.display = "none";
        this.cQN = false
    };
    bHD.cwa = function() {
        if (this.Y.style.display == "block") {
            return false
        }
        if (this.Y.style.display == "none") {
            return true
        }
        if (!E.cr(this.Y, "js-showpublishlayer")) {
            return true
        }
        return false
    };
    bHD.bE = function() {
        this.Y.style.display = "block";
        this.cvo()
    };
    bHD.cQO = function(chc, bB) {
        this.cfW.style.zIndex = chc || 1e3;
        if (bB !== undefined) {
            this.cfW.style.opacity = bB || 0
        } else {
            this.cfW.style.opacity = ""
        }
        this.cfW.style.display = "block"
    };
    bHD.cQP = function() {
        this.cfW.style.display = "none";
        this.cfW.style.zIndex = ""
    };
    bHD.ku = function() {
        this.dqG = false;
        this.bh("oncancel")
    };
    bHD.qN = function() {
        this.bh("onpreview")
    };
    bHD.nA = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        var I = {};
        if ( !! this.bOQ) {
            var bSC = this.bOQ.cNz();
            var bSD = this.bOQ.cNH();
            if ( !! bSC && !!bSC[0]) {
                I.expiredSites = bSC
            }
            I.syncBlogInfo = bSD
        }
        if ( !! this.bNU) {
            I.publishTypeData = this.bNU.cF()
        }
        this.bh("onpublish", I);
        this.dqG = false
    };
    bHD.dqF = function(I) {
        return this.dqE(I)
    };
    bHD.dqD = function() {
        if (!this.cfU()) return;
        if (!this.ct) return;
        var Z = this.ct.getContent();
        return Z
    };
    bHD.cuO = function(I) {
        if (!this.cfU()) return;
        I = I || O;
        var iX = I.noShowError || false;
        if (!this.ct) return;
        var Z = this.ct.getContent();
        Z = loft.x.mP(Z);
        Z = loft.x.jo(Z);
        if (this.bX == "REBLOG" && !!Z) {
            Z = loft.x.Gg(Z)
        }
        if ( !! Z && Z.replace(mH, "").length > 5e4) {
            if (!iX) E.bd("日志内容超过5万字，请精简！", true, false, false, true);
            return
        }
        if ( !! Z && Z.length > 2e5) {
            if (!iX) E.bd("日志中HTML代码超过20万字符，请精简！", true, false, false, true);
            return
        }
        return Z
    };
    bHD.dqE = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var Z = this.cuO(I);
        if (Z === undefined || Z === null) return;
        var bQ = this.cfT();
        var bc = "";
        var bHK = "";
        var bHn;
        if ( !! this.dF) {
            bHn = this.cRb();
            if ( !! bHn) {
                bc = bHn.v || "";
                bHK = bHn.n || ""
            }
        }
        bHn = this.bNU.cF();
        var mc = "0";
        var ccQ = false;
        var bQo = -1;
        var bWY = -1;
        if ( !! bHn && bHn.v == privileges) {
            mc = "100";
            ccQ = true
        } else if ( !! bHn && bHn.v == saveDraft) {} else if ( !! bHn && bHn.v == publishSometime) {
            bQo = 15;
            var bIE = this.bNU.cyI();
            var bJB = this.bNU.clB();
            if (!bIE) {
                if (!iX) E.bd("请输入定时发布的日期！", true, false, false, true);
                return
            } else if (!loft.w.bJZ.bXd(bIE)) {
                if (!iX) E.bd("时间设置错误，请重新设置再发布！", true, false, false, true);
                return
            }
            if (!bJB) {
                if (!iX) E.bd("请输入定时发布的时间！", true, false, false, true);
                return
            } else if (!loft.w.bJZ.cqh(bJB, "HH:mm")) {
                if (!iX) E.bd("时间设置错误，请重新设置再发布！", true, false, false, true);
                return
            }
            var ckH;
            try {
                ckH = new Date(bIE + " " + bJB)
            } catch(e) {
                return
            }
            bWY = ckH.getTime()
        } else if ( !! bHn && bHn.v == publishAuto) {
            bQo = 16
        } else {
            ccQ = true
        }
        var lU = "0";
        if ( !! this.hX) {
            bHn = this.hX.cF();
            if ( !! bHn) {
                lU = bHn.v || "0"
            }
        }
        var hd = {
            blogId: bc,
            blogName: bHK,
            content: Z,
            allowView: mc,
            isPublished: ccQ,
            cctype: lU,
            tag: bQ.join(","),
            syncSites: this.cuG()
        };
        if ( !! bQo && bQo != -1) {
            hd.queuePostType = bQo
        }
        if (bQo == 15) {
            var zV = new Date;
            if (!bWY) {
                if (!iX) E.bd("请输入定时发布的时间！", true, false, false, true);
                return
            } else if (bWY <= zV.getTime()) {
                if (!iX) E.bd("定时发布的时间不能早于当前时间！", true, false, false, true);
                return
            } else {
                hd.queuePostPublishTime = bWY
            }
        }
        return hd
    };
    bHD.cfT = function() {
        var bQ;
        if ( !! this.dV) {
            bQ = this.dV.ne()
        }
        return bQ || []
    };
    bHD.cRb = function() {
        if ( !! this.dF) {
            return this.dF.cF()
        }
    };
    bHD.clh = function() {
        if ( !! this.kq) {
            this.oF()
        }
    };
    bHD.oF = function(dqz, ub) {
        this.kq = dqz || this.kq;
        this.dm = ub || this.dm;
        var nD = 0;
        if ( !! this.kq && this.kq.length > 0) {
            var bo;
            var cf = [];
            for (var i = 0; i < this.kq.length; i++) {
                var dY = this.kq[i].blogInfo || {};
                if (this.bX == "REBLOG" && !!this.bhw && !!this.bhw.blogId && dY.blogId == this.bhw.blogId) {
                    continue
                }
                bo = {
                    t: dY.blogNickName,
                    n: dY.blogName,
                    v: dY.blogId,
                    imgurl: dY.bigAvaImg,
                    role: this.kq[i].role
                };
                if (this.bGz == 2) {
                    bo.isNeedImageStamp = dY.imageStamp;
                    bo.isNeedImageDigitStamp = dY.imageDigitStamp
                }
                cf.push(bo);
                if (bo.n == this.dm) {
                    nD = cf.length - 1
                }
            }
            var I = {
                noDownListWhenOne: true,
                noSelect: this.gt,
                index: nD,
                "class": "selpublishto",
                zIndex: 115,
                items: cf,
                onchange: this.uN.bHk(this),
                onshowdownlist: this.cub.bHk(this),
                onhidedownlist: this.ctR.bHk(this)
            };
            if (!this.dF) {
                this.dF = p.jv.bG(this.uj, I)
            } else {
                this.dF.bz(I)
            }
        }
    };
    bHD.uN = function(bc, Q, bHn, cFE) {
        bHn = bHn || O;
        var ctP = loft.x.eK(bHn.imgurl, 64) || bQK;
        if (!cFE) {
            this.cRv(ctP)
        } else {
            if (this.bZB !== ctP) {
                window.setTimeout(function() {
                    this.cRv(ctP)
                }.bHk(this), 600)
            }
        }
        this.bPv.href = "http://" + bHn.n + ".lofter.com";
        this.bPv.title = bHn.t || bHn.n || "";
        this.wx(bc);
        this.bXv()
    };
    bHD.dqS = function() {
        this.dqu()
    };
    bHD.dqu = function() {
        if (this.bX == "REBLOG" && !!this.bhw && !!this.bhw.blogInfo && !!this.bhw.blogInfo.blogName) {
            this.cta.innerText = "转载自 " + (this.bhw.blogInfo.blogNickName || this.bhw.blogInfo.blogName);
            this.cta.style.display = "block"
        } else {
            this.cta.innerText = "";
            this.cta.style.display = "none"
        }
    };
    bHD.dqT = function(bLA) {
        if (bLA) return;
        if (!this.bRq) {
            this.bRq = {
                parent: this.dqL,
                ue_cfg_develop: this.cGz,
                ue_js_version: this.coL,
                ongenueditor: this.dqt.bHk(this)
            };
            if (p.bIv.ie || p.bIv.ie11plus) {
                this.bRq.forceNew = true
            }
        }
        this.bRq.minFrameHeight = this.bRO || "";
        this.bRq.maxFrameHeight = this.bRP || "";
        this.bRq.autoHeightEnabled = this.cnG || false;
        this.cvo()
    };
    bHD.cfU = function() {
        return ! this.cwa() && E.cr(this.Y, this.bOW)
    };
    bHD.cvo = function() {
        if ( !! this.cQN) return;
        if (this.cfU() && !!this.bRq) {
            this.cQN = true;
            if (this.bRq.parent) {
                var bHl = E.bj(this.bRq.parent, "edui-editor") || [];
                for (var i = 0; i < bHl.length; i++) {
                    E.hv(bHl[i])
                }
            }
            if (!this.ctH) {
                this.ctH = p.bRG.coK(this.bRq)
            } else {
                this.ctH.coK(this.bRq);
                this.bIQ = this.ct.getContentTxt();
                this.bSI = []
            }
        }
    };
    bHD.chn = function(bPK, bOp) {
        this.bRO = bPK || 0;
        this.bRP = bOp || 0;
        if (this.bRO > this.bRP) {
            this.bRP = this.bRO
        }
        this.bRq.minFrameHeight = this.bRO || "";
        this.bRq.maxFrameHeight = this.bRP || "";
        if ( !! this.ctH) {
            this.ctH.chn(this.ct, this.bRO, this.bRP, true)
        }
    };
    bHD.dqq = function(tF) {
        tF = tF || this.ct;
        if (!tF) return;
        tF.addListener("fullscreenchanged", this.dqo.bHk(this));
        this.pd = p.Db.bG("editor_uploadPhotoArea", {
            ueditor: tF
        });
        V.bHo(window, "resize", this.cRR.bHk(this))
    };
    bHD.dqo = function(by, dyC) {
        this.cRR()
    };
    bHD.cRR = function(bHm) {
        var ctD = E.be("editor_uploadPhotoArea");
        if (!ctD) return;
        if (this.nM == "text" && E.cr(document.body, "js-ueditor-fullscreen")) {
            var dp = document.documentElement || document.body;
            var Az = dp.clientWidth;
            if (Az > 630) {
                ctD.style.left = (Az - 630) / 2 + 335 + "px"
            } else {
                ctD.style.left = 335 + "px"
            }
        } else {
            ctD.style.left = ""
        }
    };
    bHD.dqt = function(I) {
        if ( !! I && !!I.parent) {
            if ( !! I.uEditorInstance) {
                this.ct = I.uEditorInstance;
                this.dqq();
                this.ct.addListener("keyup", this.bZo.bHk(this));
                this.ct.addListener("keydown", this.ckB.bHk(this));
                V.bHo(document.body, "keydown", this.ckB.bHk(this, ""));
                this.ctZ();
                if (this.bX == "NEW" || !!this.bKZ) {
                    this.ct.addListener("afterselectionchange", this.wQ.bHk(this));
                    this.ct.addListener("afterexeccommand", this.wR.bHk(this))
                }
                if ( !! this.bQQ && this.bQQ.content !== undefined) {
                    this.csG(this.bQQ.content, this.bQQ.notend, this.bQQ.remember);
                    this.bQQ = undefined
                }
            } else if (I.code == -1) {} else if (I.code == -2) {} else {}
            this.bIQ = this.ct.getContentTxt();
            this.bSI = []
        }
    };
    bHD.wQ = function(bHm) {
        var by = "contentchange";
        this.bh("ontempsavepost", by)
    };
    bHD.wR = function() {
        this.bh("ontempsavepost")
    };
    bHD.ctZ = function() {
        loft.x.caG(this.ct)
    };
    bHD.csG = function(Z, eg, cSl) {
        if (!this.cfU()) {
            this.bQQ = {};
            this.bQQ.content = Z || "";
            this.bQQ.notend = eg;
            this.bQQ.remember = cSl;
            return
        }
        if ( !! this.ct) {
            try {
                this.ct.focus();
                Z = Z || "";
                if (Z === "") {
                    this.ct.setContent("<br>")
                } else {
                    this.ct.setContent(Z)
                }
                loft.x.Gh(this.ct, eg);
                this.cua = this.cuO({
                    noShowError: true
                });
            } catch(e) {}
        } else {
            this.bQQ = {};
            this.bQQ.content = Z || "";
            this.bQQ.notend = eg;
            this.bQQ.remember = cSl
        }
        if ( !! this.ct) {
            this.bIQ = this.ct.getContentTxt()
        } else {
            this.bIQ = ""
        }
        this.bSI = []
    };
    bHD.dqj = function() {
        return this.cua
    };
    bHD.ckB = function(by, bHm) {
        if (this.cwa()) return;
        if (!bHm) return;
        var bIu = bHm.which || bHm.keyCode;
        if (bHm.ctrlKey && bIu == 13) {
            if ( !! this.ct.ui && this.ct.ui.isFullScreen()) return;
            this.nA()
        }
    };
    bHD.bZo = function(by, bHm) {
        var bIu = bHm.which || bHm.keyCode;
        if (bIu !== 17 && bIu !== 86 && this.ct.getContentTxt().split("@").length === this.bIQ.split("@").length + 1) {
            var dqh = E.bj(document.body, "newPublishUEditor")[0],
            lL = dqh.getElementsByTagName("iframe")[0],
            cSu = lL.id;
            if ( !! loft.x.ceS(cSu) || loft.c.cm.userId <= 0) {
                this.bIQ = this.ct.getContentTxt();
                return
            }
            var bSG = new loft.w.caN(null, {
                textBody: this.ct.document.body,
                iframeId: cSu,
                noIframeOffset: true,
                cbDelTag: this.bSF.bHk(this)
            });
            this.bSI.push(bSG)
        }
        this.bIQ = this.ct.getContentTxt()
    };
    bHD.bSF = function() {
        this.bIQ = this.ct.getContentTxt()
    };
    bHD.dqe = function() {
        return this.ct
    };
    bHD.dqc = function() {
        if ( !! this.pd) {
            return this.pd.Lc()
        }
    };
    bHD.cvX = function() {
        this.bVo()
    };
    bHD.bVo = function(ck) {
        if ( !! this.bhw && this.bhw != "null") {
            ck = ck || this.bhw.tag
        }
        ck = ck || "";
        var I = {
            tags: ck,
            onexceedmaxtagnum: this.oD.bHk(this),
            onexceedmaxcharpertag: this.oA.bHk(this),
            ontageditorfocus: this.dpX.bHk(this)
        };
        if ( !! this.dV) {
            this.dV.nI(ck)
        } else {
            this.dV = P("loft.m.newpublish.w").eG.bG(this.Yp, I)
        }
    };
    bHD.oA = function(gC) {
        E.bd("标签长度不能超过" + gC + "个字。", true, false, false, true)
    };
    bHD.oD = function(gC) {
        E.bd("最多只能设置" + gC + "个标签。", true, false, false, true)
    };
    bHD.dpX = function() {
        var bc;
        if ( !! this.dF) {
            var bg = this.dF.cF();
            if ( !! bg) bc = bg.v || ""
        }
        this.cty(bc)
    };
    bHD.nI = function(ck) {
        if ( !! this.dV) {
            this.dV.nI(ck)
        }
    };
    bHD.cty = function(bc) {
        var dH, cdj;
        if ( !! bc && !!this.nW[bc]) {
            dH = this.nW[bc]["hotTags"];
            cdj = this.nW[bc]["hasTagInBlog "]
        }
        if ( !! this.dV) {
            this.dV.drZ(dH, cdj)
        }
    };
    bHD.dpW = function(bc) {
        this.cty()
    };
    bHD.wx = function(bc) {
        this.nW[bc] = this.nW[bc] || {};
        var dH = this.nW[bc]["hotTags"];
        if ( !! dH) {
            this.cty(bc)
        } else {
            J.br(location.dwr, "TagBean", "getBlogHotAndRecommendTags", bc, this.tW.bHk(this, bc))
        }
    };
    bHD.tW = function(bc, hZ) {
        this.ux(bc, hZ)
    };
    bHD.ux = function(bc, hZ) {
        if ( !! hZ) {
            this.nW[bc] = hZ;
            this.nW[bc]["hotTags"] = this.nW[bc]["hotTags"] || [];
            if (!this.nW[bc]["hotTags"] || this.nW[bc]["hotTags"].length < 1) {
                this.nW[bc]["hasTagInBlog"] = false
            }
            this.cty(bc)
        } else {
            this.nW[bc] = {
                hotTags: [],
                hasTagInBlog: false
            };
            this.dpW()
        }
    };
    bHD.cvV = function() {
        if (!this.kJ) {
            var ve = [{
                t: "0",
                v: "0"
            },
            {
                t: "1",
                v: "1"
            },
            {
                t: "2",
                v: "2"
            },
            {
                t: "3",
                v: "3"
            },
            {
                t: "4",
                v: "4"
            },
            {
                t: "5",
                v: "5"
            },
            {
                t: "6",
                v: "6"
            },
            {
                t: "了解更多",
                n: "http://www.lofter.com/CreativeCommons",
                v: "7"
            }];
            this.kJ = {
                index: 0,
                zIndex: 6,
                "class": "selccommons",
                items: ve,
                onchange: this.wL.bHk(this),
                onshowdownlist: this.cub.bHk(this),
                onhidedownlist: this.ctR.bHk(this)
            }
        }
        this.kJ.noSelect = this.gn || this.bX == "REBLOG";
        if ( !! this.kJ.noSelect) {
            this.kJ.hoverTips = "转载文章不可更改授权"
        }
        this.nU()
    };
    bHD.nU = function() {
        var Q = 0;
        if ( !! this.bhw && !!this.bhw.cctype) {
            try {
                Q = parseInt(this.bhw.cctype)
            } catch(e) {}
        }
        Q = Q || 0;
        if (this.bX == "NEW" && (!this.bhw || this.bhw == "null")) {
            Q = this.cga || -1
        }
        this.kJ.index = Q;
        if (!this.hX) {
            this.hX = p.vG.bG(this.dqJ, this.kJ)
        } else {
            this.hX.bz(this.kJ)
        }
    };
    bHD.wL = function(bg) {};
    bHD.cvU = function() {
        this.bXv()
    };
    bHD.cuA = function(bVF) {
        var bHn, bLo = {
            isDraftPost: this.lD,
            actionType: this.bX,
            editorType: this.nM
        };
        bLo.forceRefresh = !!bVF;
        if ( !! this.dF) {
            bHn = this.dF.cF();
            if ( !! bHn) {
                bLo.blogId = bHn.v || "";
                bLo.blogName = bHn.n || "";
                bLo.role = bHn.role
            }
        }
        if ( !! this.bNU) {
            bHn = this.bNU.cF();
            if ( !! bHn && bHn.v == privileges) {
                bLo.noSiteSync = true
            } else {
                bLo.noSiteSync = false
            }
        }
        return bLo
    };
    bHD.bXv = function(bVF) {
        var bLo = this.cuA(bVF);
        if (!this.bOQ) {
            this.bOQ = P("loft.w").csb.bG(this.dqK, bLo)
        } else {
            this.bOQ.bz(bLo)
        }
    };
    bHD.cuG = function() {
        var ckt = "";
        if ( !! this.bOQ) {
            ckt = this.bOQ.Hm()
        }
        return ckt
    };
    bHD.cTm = function() {
        this.bXv(true)
    };
    bHD.dB = function() {
        var bJ = P("loft.m.g");
        bJ.refreshSiteSync = this.cTm.bHk(this)
    };
    bHD.cvR = function() {
        this.cuD()
    };
    bHD.cuD = function(cuH) {
        this.bKG = cuH || this.bKG;
        var ckp = 0;
        var bKw;
        var bo;
        var cf = [];
        if (this.bGz != 5 && (this.bX == "NEW" || this.bX == "REBLOG")) {
            bKw = [publishNow, publishAuto, publishSometime, saveDraft, privileges]
        } else if (this.bX == "EDIT" && !!this.bhw && this.bhw != "null") {
            if (!this.bhw.isPublished) {
                if (this.bhw.isContribute) {
                    bKw = [publishNow, publishAuto, publishSometime, privileges]
                } else {
                    bKw = [publishNow, publishAuto, publishSometime, saveDraft, privileges]
                }
            } else {
                bKw = [publishNow, privileges]
            }
        } else {
            bKw = [publishNow, privileges]
        }
        for (var i = 0; i < bKw.length; i++) {
            bo = {
                t: bKw[i],
                n: bKw[i],
                v: bKw[i]
            };
            if (bo.n == publishSometime && !!this.bhw && this.bhw != "null") {
                if ( !! this.bhw.queuePost && this.bhw.queuePost.valid == 15) {
                    bo.publishDateTime = this.bhw.queuePost.publishTime
                } else if (this.bhw.queuePostType == 15) {
                    bo.publishDateTime = this.bhw.queuePostPublishTime
                }
            }
            cf.push(bo);
            if (bo.n == this.bKG) {
                ckp = i
            }
        }
        var I = {
            noSelect: false,
            index: ckp,
            "class": "selpublishtype",
            zIndex: 12,
            items: cf,
            onchange: this.cuI.bHk(this),
            onshowdownlist: this.cub.bHk(this),
            onhidedownlist: this.ctR.bHk(this)
        };
        if (!this.bNU) {
            this.bNU = p.cxO.bG(this.bSA, I)
        } else {
            this.bNU.bz(I)
        }
    };
    bHD.cuI = function(by, Q) {
        if (by == privileges) {
            this.ckO.innerText = "发布自己可见"
        } else {
            if (by == publishSometime) {
                this.ckO.innerText = "定时发布"
            } else if (by == publishAuto) {
                this.ckO.innerText = "加入队列"
            } else if (by == saveDraft) {
                this.ckO.innerText = "保存草稿"
            } else {
                this.ckO.innerText = "发　布"
            }
        }
        this.bXv()
    };
    bHD.dyD = function() {
        return this.ckU
    };
    bHD.bPA = function(bk) {
        if ( !! bk && !!this.ckU) {
            this.ckU.insertAdjacentElement("beforeEnd", bk)
        }
    };
    bHD.bOS = function() {
        if ( !! this.ckU) {
            this.ckU.innerHTML = ""
        }
    };
    bHD.cRv = function(bKf) {
        this.bkb.style.transition = "none";
        E.bf(this.bPv, "js-animating");
        E.bf(this.bPv, "js-useblogavatar");
        this.dqM.style.backgroundImage = 'url("' + (this.bZB || bQK) + '")';
        this.bZB = bKf;
        this.cvA.style.backgroundImage = 'url("' + (this.bZB || bQK) + '")';
        E.ba(this.bPv, "js-useblogavatar");
        window.setTimeout(function() {
            this.bkb.style.transition = ""
        }.bHk(this), 1);
        window.setTimeout(function() {
            E.ba(this.bPv, "js-animating")
        }.bHk(this), 300)
    };
    bHD.cTy = function() {
        this.bkb.style.visibility = "visible";
        E.bf(this.bPv, "js-useblogavatar");
        E.bf(this.bPv, "js-animating");
        var dpM = this.bPs.bigAvaImg || bQK;
        window.setTimeout(function() {
            this.bkb.style.visibility = ""
        }.bHk(this), 1);
        if (dpM !== this.bZB) {
            window.setTimeout(function() {}.bHk(this), 600)
        }
    };
    bHD.cdu = function(ckm) {
        if ( !! ckm) {
            E.bf(this.bPv.parentNode, "js-userimgscale")
        } else {
            E.ba(this.bPv.parentNode, "js-userimgscale")
        }
    };
    bHD.ctk = function() {
        this.cdu(true)
    };
    bHD.cuW = function(bVJ) {
        var eT = this.bIH.clientHeight || 0;
        if (eT < bVJ) eT = bVJ;
        this.bIH.parentNode.style.height = eT + "px";
        this.bIH.parentNode.style.minHeight = eT + "px";
        window.setTimeout(function() {
            this.bIH.parentNode.style.transition = "none";
            this.bIH.parentNode.style.height = "auto";
            window.setTimeout(function() {
                this.bIH.parentNode.style.minHeight = bVJ + "px";
                this.bIH.parentNode.style.transition = ""
            }.bHk(this), 1);
            this.bIH.parentNode.style.visibility = "visible";
            this.bIH.parentNode.style.overflow = "visible"
        }.bHk(this), 350)
    };
    bHD.cva = function() {
        var eT = this.bIH.clientHeight || 0;
        if (eT > 0) {
            this.bIH.parentNode.style.height = eT + "px"
        }
        this.bIH.parentNode.style.visibility = "hidden";
        this.bIH.parentNode.style.overflow = "hidden";
        this.bIH.parentNode.style.minHeight = 0;
        this.bIH.parentNode.style.height = ""
    };
    bHD.cvb = function(bVJ, ckm) {
        this.bE();
        window.setTimeout(this.cdu.bHk(this, ckm), 1);
        this.cuW(bVJ)
    };
    bHD.cvc = function(ca) {
        this.cTy();
        this.ctk();
        this.cva();
        window.setTimeout(function() {
            this.cy();
            ca()
        }.bHk(this), 350)
    };
    bHD.cTS = function() {
        this.bkb.style.transition = "none";
        this.bIH.parentNode.style.transition = "none";
        this.cdu();
        this.bIH.parentNode.style.visibility = "visible";
        this.bIH.parentNode.style.overflow = "visible";
        this.bIH.parentNode.style.height = "auto";
        window.setTimeout(function() {
            this.bkb.style.transition = "";
            this.bIH.parentNode.style.transition = ""
        }.bHk(this), 1);
        this.bE()
    };
    bHD.cTT = function() {
        this.cy()
    };
    bHD.cvf = function() {
        this.bkb.style.transition = "none";
        if ( !! this.bIH && !!this.bIH.parentNode) {
            this.bIH.parentNode.style.transition = "none"
        }
        this.cdu();
        if ( !! this.bIH && !!this.bIH.parentNode) {
            this.bIH.parentNode.style.opacity = "";
            this.bIH.parentNode.style.visibility = "visible";
            this.bIH.parentNode.style.overflow = "visible";
            this.bIH.parentNode.style.height = "auto"
        }
        window.setTimeout(function() {
            this.bkb.style.transition = "";
            if ( !! this.bIH && !!this.bIH.parentNode) {
                this.bIH.parentNode.style.transition = ""
            }
        }.bHk(this), 1);
        this.bE()
    };
    bHD.cvh = function() {
        if ( !! this.bIH && !!this.bIH.parentNode) {
            this.bIH.parentNode.style.overflow = "hidden";
            this.bIH.parentNode.style.height = "";
            this.bIH.parentNode.style.opacity = ""
        }
        this.cy()
    };
    bHD.cvj = function(bVJ) {
        window.setTimeout(this.cdu.bHk(this, false), 1);
        var eT = this.bIH.clientHeight || 0;
        if (eT < bVJ) eT = bVJ;
        var ca = function() {}.bHk(this);
        var cUf = {
            from: 56,
            to: eT,
            callback: ca
        };
        if (!this.bZN) {
            this.bZN = new(P("loft.m.newpublish.w").cQL)(this.bIH.parentNode, cUf)
        }
        this.bZN.fD(cUf);
        this.bIH.parentNode.style.visibility = "visible";
        this.bIH.parentNode.style.overflow = "visible"
    };
    bHD.cvk = function(ca) {
        this.cTy();
        this.ctk();
        if ( !! this.bZN) this.bZN.dsx({
            callback: ca
        })
    };
    bHD.bCu = function() {
        return this.Y
    };
    bHD.cub = function() {
        this.cQO(1e3, 0)
    };
    bHD.ctR = function() {
        this.cQP()
    };
    bHD.dpK = function(csZ) {
        this.cga = csZ
    }
})();







(function() {
    var p = P("loft.w"),
    bVW;
    p.csW = C();
    bVW = p.csW.bi(p.fr, true);
    bVW.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "过期提醒";
        this.bHr(bl, I);
        this.cwl(this.clz.bHk(this))
    };
    bVW.clz = function() {};
    bVW.bz = function(I) {
        this.ei.iI(I.title);
        this.ckd = I.expiredSites || [];
        if ( !! this.ckd[0]) {
            if (this.ckd.length > 1) {
                this.cUr.innerText = this.ckd[0] + "等" + this.ckd.length + "个帐号同步已过期，需重新设置"
            } else {
                this.cUr.innerText = this.ckd[0] + "帐号同步已过期，需重新设置"
            }
        }
        this.cUs = I.syncBlogInfo || {};
        this.ckc = I.cookieKey;
        this.bHo("onok", I.onok || F);
        this.bHo("oncc", I.oncc || F);
        this.bHo("onclose", I.onclose || F);
        p.csW.bw.bz.call(this, I);
        this.cUu.href = "http://www.lofter.com/theme/" + (this.cUs.blogName || loft.c.cm.blogName) + "/?type=sync"
    };
    bVW.cU = function() {
        return "syncExpiredTipWin"
    };
    bVW.cM = function() {
        return '<div class="layerm"><h4 class="warmt wtag">帐号同步已过期，需重新设置</h4></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" target="_blank" href="#" hidefocus="true">重新设置</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">继续发布</a></div>'
    };
    bVW.cc = function() {
        var bHl = E.bj(this.Y, "wtag");
        this.cUr = bHl[0];
        this.cUu = bHl[1];
        this.dpH = bHl[2];
        V.bHo(this.cUu, "click", this.ry.bHk(this));
        V.bHo(this.dpH, "click", this.gL.bHk(this))
    };
    bVW.ry = function(bHm) {
        if (this.cUs.role == 2) {
            V.bb(bHm);
            this.cy();
            E.bd("非管理员无权设置绑定", true)
        } else {
            V.qK(bHm);
            this.cy()
        }
    };
    bVW.gL = function(bHm) {
        V.bb(bHm);
        this.cy();
        if ( !! this.ckc) {
            var bQy = 10;
            U.ru(this.ckc, "1", null, bQy, "/")
        }
        this.bh("oncc")
    }
})(); (function() {
    var p = P("loft.w"),
    nv;
    var bHu = "ui-" + U.cA();
    P(N.ui).fx("#<uispace>{}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .errmsg{padding-bottom:10px;color:#E25151;}#<uispace> .imgwrap{float:left;width:80px;height:44px;padding-left:20px;}#<uispace> .imgwrap img{float:left;width:80px;height:44px;}#<uispace> .txtcode{float:left;text-align:center;vertical-align:middle;width:106px;height:44px;line-height:44px;font-size:16px;border:1px solid #C0C0C0;background:url(\"http://l.bst.126.net/rsc/img/shadow-in.png\") no-repeat scroll 0 0 #fff;}#<uispace> .changeimg{float:left;height:44px;line-height:44px;padding-left:20px;color:#5A8DCD;cursor:pointer;}", bHu);
    p.fu = C();
    nv = p.fu.bi(p.fr, true);
    nv.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "请输入验证码";
        this.bHr(bl, I)
    };
    p.fu.bGE = function() {
        return this.eb
    };
    p.fu.ky = function(fU) {
        if ( !! this.eb) {
            this.eb.ky(fU)
        }
    };
    p.fu.jK = function() {
        if ( !! this.eb) {
            this.eb.jK()
        }
    };
    nv.bz = function(I) {
        this.ei.iI(I.title);
        this.bHo("onok", I.onok || F);
        this.bHo("oncc", I.oncc || F);
        p.fu.bw.bz.call(this, I);
        this.jK();
        this.xk.value = "";
        this.bgw.innerText = ""
    };
    nv.cU = function() {
        return bHu
    };
    nv.cM = function() {
        return '<div class="layerm"><div class="errmsg thide wtag"></div><div class="clearfix"><input type="text" maxlength="4" class="txtcode wtag" /><div class="imgwrap"><img class="wtag" /></div><div class="changeimg wtag">换一张</div></div></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" href="#" hidefocus="true">确 定</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">取 消</a></div>'
    };
    nv.cc = function() {
        var bHl = E.bj(this.Y, "wtag");
        this.bgw = bHl[0];
        this.xk = bHl[1];
        this.bpf = bHl[2];
        this.bpg = bHl[3];
        this.zY = bHl[4];
        this.yU = bHl[5];
        V.bHo(this.zY, "click", this.ry.bHk(this));
        V.bHo(this.yU, "click", this.gL.bHk(this));
        V.bHo(this.bpg, "click", this.jK.bHk(this))
    };
    nv.ky = function(fU) {
        this.bgw.innerText = fU || ""
    };
    nv.jK = function() {
        var bph = "http://www.lofter.com/cap/captcha.jpgx?";
        this.bpf.src = bph + U.cA(5)
    };
    nv.ry = function(bHm) {
        V.bb(bHm);
        if (this.zp()) {
            this.bh("onok", this.xk.value)
        }
    };
    nv.zp = function() {
        this.xk.value = U.bA(this.xk.value);
        if (!this.xk.value) {
            this.ky("请输入验证码！");
            return false
        } else if (this.xk.value.length < 4) {
            this.ky("验证码不少于4位！");
            return false
        } else {
            this.ky("");
            return true
        }
    };
    nv.gL = function(bHm) {
        V.bb(bHm);
        this.cy();
        this.bh("oncc")
    }
})(); (function() {
    var p = P("loft.w"),
    bUD;
    p.csB = C();
    bUD = p.csB.bi(P(N.ut).gY);
    bUD.bq = function(I) {
        this.bHr();
        this.bZe = {};
        this.bMW = [];
        this.bz(I)
    };
    bUD.bz = function(I) {
        I = I || {};
        this.bfG = I.maxCkeyNum || 100;
        this.cvW = I.keepCkeyNum || Math.floor(this.bfG / 2);
        if (this.cvW >= this.bfG) {
            this.cvW = this.bfG - 1
        }
        this.cWa = I.cbClearCache || F
    };
    bUD.dpz = function(bO) {
        if (!bO) return;
        var sF = this.bMW.length;
        for (var i = 0; i < sF; i++) {
            if (this.bMW[i] == bO) {
                this.cWa(this.bMW[i]);
                delete this.bZe[bO];
                this.bMW.splice(i, 1)
            }
        }
    };
    bUD.bZc = function(bO, bMJ) {
        if ( !! bMJ && bMJ.length > 0) {
            this.cWe(bMJ)
        }
        if ( !! bO) {
            this.dpz(bO)
        }
        return this.bMW
    };
    bUD.dpy = function(bO) {
        if (!bO) return;
        if ( !! this.bZe[bO]) {
            this.dpx(bO);
            return
        }
        this.dpw();
        if (!this.bZe[bO]) {
            this.bZe[bO] = bO;
            this.bMW.push(bO)
        }
    };
    bUD.cjT = function(bO, bMJ) {
        if ( !! bMJ && bMJ.length > 0) {
            this.cWe(bMJ)
        }
        if ( !! bO) {
            this.dpy(bO)
        }
        return this.bMW
    };
    bUD.cWe = function(bMJ) {
        if ( !! bMJ && bMJ.length > 0) {
            this.bZe = {};
            this.bMW = [];
            var sF = Math.min(this.bfG, bMJ.length);
            for (var i = bMJ.length - sF; i < bMJ.length; i++) {
                if ( !! bMJ[i] && !this.bZe[bMJ[i]]) {
                    this.bMW.push(bMJ[i]);
                    this.bZe[bMJ[i]] = bMJ[i]
                }
            }
        }
    };
    bUD.dpw = function() {
        var bfB = [],
        sF = this.bMW.length;
        if (sF >= this.bfG) {
            for (var i = 0; i < sF; i++) {
                if (i + this.cvW < sF) {
                    this.cWa(this.bMW[i]);
                    delete this.bZe[this.bMW[i]]
                } else {
                    bfB.push(this.bMW[i])
                }
            }
            this.bMW = bfB
        }
    };
    bUD.dpx = function(bO) {
        var sF = this.bMW.length;
        for (var i = 0; i < sF; i++) {
            if (this.bMW[i] === bO) {
                this.bMW.splice(i, 1);
                break
            }
        }
        this.bMW.push(bO)
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    bHA,
    dpt;
    var mH = /<.*?>/gi;
    var cu = "rescued_post_" + loft.c.cm.userId;
    var cbM = "保存为草稿";
    var bOW = "js-activating";
    var cga = "";
    var bWM = "draft_rescued_keylist";
    var cjS = 24 * 3600 * 1e3;
    var bWP = "edit_rescued_keylist";
    p.cfF = C();
    bHA = p.cfF.bi(P(N.ut).gY);
    dpt = p.cfF.bw;
    bHA.bq = function(I) {
        this.bHr();
        this.bR = {
            type: "json",
            method: "POST",
            ctype: "application/x-www-form-urlencoded; charset=utf-8"
        };
        this.bz(I);
        this.un();
        V.bHo(window, "beforeunload", this.BK.bHk(this));
        this.bWW = {
            noShowError: true
        }
    };
    bHA.cK = function() {
        V.iJ(window, "beforeunload", this.BK.bHk(this));
        if ( !! this.bHH && (P("loft.m.newpublish.w").bIv.ie || P("loft.m.newpublish.w").bIv.ie11plus)) {
            this.bHH.dqH()
        }
        this.cWR = true;
        delete this
    };
    bHA.cwd = function() {
        var cwe = false;
        if ( !! this.cfE) {
            cwe = this.cWR && this.csv
        } else {
            cwe = this.cWR
        }
        return cwe
    };
    bHA.bz = function(I) {
        I = I || {};
        this.dL = I.parent = I.parent || document.body;
        this.bHo("onpostovernum", I.onpostovernum || F);
        this.bHo("onpostpublished", I.onpostpublished || F);
        this.bHo("onclosepublishlayer", I.onclosepublishlayer || F);
        this.bfZ = I.from;
        this.bGz = I.postType || 1;
        this.nM = I.editorType || "text";
        this.cwj = I.defaultHeight || 300;
        this.bX = I.actionType || "";
        this.cfE = I.enableAnimate || false;
        this.bPs = I.targetBlogInfo || {};
        this.brp = I.defaultPublishTo || this.bPs.blogName || "";
        this.bhw = I.post || null;
        this.bVw = I.postOverNum || false;
        this.bXb = I.submitUrl;
        if (!this.bXb) {
            if (this.bX == "EDIT" && !!this.bhw) {
                this.bXb = "http://www.lofter.com/edit/" + this.bhw.permalink
            } else if (this.bX == "REBLOG") {
                this.bXb = "http://www.lofter.com/reblog/" + this.bhw.permalink
            } else {
                this.bXb = "http://www.lofter.com/blog/" + this.brp + "/new/" + this.nM + "/"
            }
        }
        if ( !! this.bhw && (this.bhw.citeRootPostId || -1) > 0) {
            this.gn = true
        } else {
            this.gn = false
        }
        I.isCitePost = this.gn;
        if ( !! this.bhw && this.bhw != "null") {
            this.gt = this.bhw.isContribute && !this.bhw.isPublished
        } else {
            this.gt = false
        }
        I.isContribute = this.gt;
        this.lD = false;
        if ( !! this.bhw && this.bhw != "null") {
            this.lD = !this.bhw.isContribute && !this.bhw.isPublished
        }
        I.isDraftPost = this.lD;
        if (this.bX == "EDIT" && !!this.lD) {
            this.bKZ = true
        } else {
            this.bKZ = false
        }
        this.cjO = false;
        if ( !! this.bhw && this.bhw != "null") {
            this.cjO = !!this.bhw.isPublished
        }
        if (this.bX == "EDIT" && !!this.cjO) {
            this.bOz = true
        } else {
            this.bOz = false
        }
        this.cIb = false;
        if ( !! this.bhw && !!this.bhw.queuePost && (this.bhw.queuePost.valid == 15 || this.bhw.queuePost.valid == 16)) {
            this.cIb = true
        }
        this.cu = this.nM + "_" + cu;
        I.ontempsavepost = this.iD.bHk(this);
        I.oncancel = this.dps.bHk(this);
        I.onpreview = this.dpo.bHk(this);
        I.onpublish = this.dpn.bHk(this);
        this.bOW = bOW;
        I.js_activating = this.bOW;
        if (P("loft.m.newpublish.w").bIv.ie || P("loft.m.newpublish.w").bIv.ie11plus) {
            I.lastCCType = cga || I.lastCCType;
            this.bHH = new(P("loft.m.newpublish.w").bWV)(this.dL, I)
        } else {
            this.bHH = P("loft.m.newpublish.w").bWV.YV(this.dL, I)
        }
        if ( !! this.cfE) {
            this.dpm()
        } else {
            this.cvf()
        }
        this.cfC(false);
        this.bRO = I.minFrameHeight;
        this.bRP = I.maxFrameHeight;
        this.dpl();
        if (P("loft.m.newpublish.w").bIv.ie || P("loft.m.newpublish.w").bIv.ie11plus) {
            if ( !! this.caL) this.caL = window.clearTimeout(this.caL);
            this.caL = window.setTimeout(function() {
                var bXi = this.cwr(document.title);
                Q = bXi.indexOf("#");
                if (Q >= 0) {
                    bXi = bXi.substring(0, Q)
                }
                document.title = this.csq(bXi)
            }.bHk(this), 1e3)
        }
    };
    bHA.dpl = function() {
        var dpk = this.cIy(this.cwr(document.title)) || "LOFTER";
        var bLV = dpk;
        if (this.bGz == 1) {
            bLV = "文字 | " + bLV
        } else if (this.bGz == 2) {
            bLV = "图片 | " + bLV
        } else if (this.bGz == 3) {
            bLV = "音乐 | " + bLV
        } else if (this.bGz == 4) {
            bLV = "视频 | " + bLV
        } else {
            bLV = "文字 | " + bLV
        }
        if (this.bX == "NEW") {
            bLV = "发布" + bLV
        } else if (this.bX == "EDIT") {
            bLV = "编辑" + bLV
        } else if (this.bX == "REBLOG") {
            bLV = "转载" + bLV
        } else {
            bLV = "发布" + bLV
        }
        document.title = this.csq(bLV)
    };
    bHA.cwr = function(eM) {
        eM = eM || "";
        eM = eM.replace(" | 乐乎", "").replace("（乐乎）", "");
        return eM
    };
    bHA.csq = function(eM) {
        eM = U.bA(eM || "");
        if (eM == "LOFTER") {
            eM = "LOFTER（乐乎） - 每个人的理想国"
        } else if (eM.indexOf("|") < 0) {
            eM = eM.replace("] LOFTER", "] LOFTER（乐乎） - 每个人的理想国")
        } else {
            eM = eM.replace(" | LOFTER", " | LOFTER（乐乎） - 每个人的理想国").replace("] LOFTER", "] LOFTER（乐乎） - 每个人的理想国")
        }
        return eM
    };
    bHA.cIy = function(eM) {
        eM = U.bA(eM || "");
        var gG = "";
        if (!eM) return gG;
        var Q = eM.indexOf(" | ");
        if (Q >= 0) {
            gG = eM.substring(Q + 2)
        }
        Q = gG.indexOf("#");
        if (Q >= 0) {
            gG = gG.substring(0, Q)
        }
        return gG
    };
    bHA.un = function() {
        if (this.bX != "NEW") {
            if ( !! this.bhw) {
                if (this.bKZ) {
                    this.cjH = this.bhw;
                    this.cwA(this.bhw);
                    if (this.cjH != this.bhw) {
                        E.bY("丢失内容已恢复到编辑器中", true)
                    }
                } else if (this.bOz) {
                    this.cjG = this.bhw;
                    this.cwB(this.bhw);
                    if (this.cjG != this.bhw) {
                        E.bY("丢失内容已恢复到编辑器中", true)
                    }
                } else {
                    this.bJz(this.bhw)
                }
            } else {
                this.bJz(null)
            }
        } else {
            this.bLU()
        }
        this.cIK({
            post: this.bhw,
            actionType: this.bX,
            minFrameHeight: this.bRO,
            maxFrameHeight: this.bRP
        })
    };
    bHA.cIK = function(I) {
        this.chn(I.minFrameHeight, I.maxFrameHeight)
    };
    bHA.cwA = function(bN) {
        if ( !! P(N.ut).dC.kI) {
            P(N.ut).dC.kI(this.vD.bHk(this, bN))
        } else {
            this.bJz(bN)
        }
    };
    bHA.cwB = function(bN) {
        if ( !! P(N.ut).dC.kI) {
            P(N.ut).dC.kI(this.vD.bHk(this, bN))
        } else {
            this.bJz(bN)
        }
    };
    bHA.bLU = function() {
        if ( !! P(N.ut).dC.kI) {
            P(N.ut).dC.kI(this.vD.bHk(this))
        } else {
            this.bJz(null)
        }
    };
    bHA.vD = function(bN) {
        if (this.bX == "NEW") {
            this.dpj();
            if ( !! this.bhw && this.bhw != "null") {
                this.bJz(this.bhw)
            } else {
                this.bJz(null)
            }
            this.cwJ()
        } else if (this.bKZ) {
            this.cwM(bN);
            if ( !! this.bhw && this.bhw != "null") {
                this.bJz(this.bhw)
            } else {
                this.bJz(null)
            }
        } else if (this.bOz) {
            this.cwO(bN);
            if ( !! this.bhw && this.bhw != "null") {
                this.bJz(this.bhw)
            } else {
                this.bJz(null)
            }
        }
    };
    bHA.cwJ = function() {
        var bPi = loft.x.wc(this.bXb, "extraTags", "?");
        if (!bPi && !!location.hash) {
            bPi = loft.x.wc(location.hash, "extraTags", "#")
        }
        bPi = U.bA(bPi);
        if (!bPi || !this.bHH) return;
        if (bPi.indexOf("%") >= 0) {
            this.bHH.nI(decodeURIComponent(bPi))
        } else {
            this.bHH.nI(bPi)
        }
    };
    bHA.cwM = function(bN) {
        if (!bN) return;
        this.bMg = "draft_post_" + bN.id + "_" + loft.c.cm.userId;
        var bSY = P(N.ut).dC.qs(this.bMg) || {};
        var kA = bSY.post;
        var bDN = bSY.expires || 0;
        var zV = (new Date).getTime();
        if ( !! kA && zV >= bDN) {
            kA = null;
            P(N.ut).dC.hz(this.bMg);
            var bID = P(N.ut).dC.qs(bWM);
            this.bRd();
            if ( !! this.bKd) {
                this.bKd.bZc(this.bMg, bID)
            }
        }
        if ( !! kA) {
            try {
                this.bLv(kA)
            } catch(e) {}
        }
        this.bsM()
    };
    bHA.cwO = function(bN, bRA) {
        if (!bN) return;
        this.bLX = "edit_post_" + bN.id + "_" + loft.c.cm.userId;
        var bSY = P(N.ut).dC.qs(this.bLX) || {};
        var kA = bSY.post;
        var bDN = bSY.expires || 0;
        var zV = (new Date).getTime();
        if ( !! kA && zV >= bDN) {
            kA = null;
            P(N.ut).dC.hz(this.bLX);
            var bID = P(N.ut).dC.qs(bWP);
            this.bRd();
            if ( !! this.bKd) {
                this.bKd.bZc(this.bLX, bID)
            }
        }
        if ( !! kA) {
            try {
                this.bLv(kA)
            } catch(e) {}
        }
        this.bsM()
    };
    bHA.dpj = function() {
        var lY = U.ot(this.cu);
        var kA = P(N.ut).dC.qs(this.cu);
        if ( !! lY && !!kA) {
            try {
                this.bLv(kA)
            } catch(e) {}
        }
        if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
            this.bsM()
        }
    };
    bHA.bsM = F;
    bHA.bLv = function(kA) {
        this.cookiePostData = kA;
        this.bhw = this.cookiePostData
    };
    bHA.bJz = function(bN, bLA) {
        if ( !! bN && bN != "null") {
            this.bYL(this.bOW)
        }
        if ( !! this.bHH) {
            this.bHH.dqR(bN, bLA)
        }
    };
    bHA.BK = function(bHm) {
        if (!this.bXE) {
            if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
                this.uX()
            } else if (this.bKZ) {
                this.uX()
            } else if (this.bOz) {
                this.uX()
            }
        }
    };
    bHA.cco = function(cj) {
        if ( !! this.bHH) {
            this.bHH.cco(cj)
        }
    };
    bHA.cfY = function() {
        if ( !! this.bHH) {
            this.bHH.cfY()
        }
    };
    bHA.bYL = function(cj) {
        if ( !! this.bHH) {
            this.bHH.dqO(cj)
        }
    };
    bHA.csj = function(cj) {
        if ( !! this.bHH) {
            this.bHH.cOG(cj)
        }
    };
    bHA.bPA = function(bk) {
        if ( !! this.bHH && !!bk) {
            this.bHH.bPA(bk)
        }
    };
    bHA.bOS = function() {
        if ( !! this.bHH) {
            this.bHH.bOS()
        }
        this.cK()
    };
    bHA.cJn = function() {
        if ( !! this.bHH) {
            return this.bHH.dqc()
        }
    };
    bHA.dyE = function() {
        var Z;
        if ( !! this.bHH) {
            Z = this.bHH.dqD()
        }
        return Z
    };
    bHA.bKA = function(I) {
        var Z;
        if ( !! this.bHH) {
            Z = this.bHH.cuO(I)
        }
        return Z
    };
    bHA.ns = function(Z, eg) {
        if ( !! this.bHH) {
            this.bHH.csG(Z, eg)
        }
    };
    bHA.hl = function() {
        if ( !! this.bHH) {
            var tF = this.bHH.dqe();
            if ( !! tF) {
                var og = tF.queryCommandState("source");
                if (og == 1) {
                    tF.execCommand("source")
                }
            }
        }
    };
    bHA.gU = function(I) {
        var hd;
        if ( !! this.bHH) {
            hd = this.bHH.dqF(I)
        }
        return hd
    };
    bHA.dph = function() {
        var bQ;
        if ( !! this.bHH) {
            bQ = this.bHH.cfT()
        }
        return bQ || []
    };
    bHA.dpg = function() {
        if ( !! this.bHH) {
            return this.bHH.cRb()
        }
    };
    bHA.cxi = function(I) {
        if ( !! I && !!I.expiredSites) {
            var bSC = I.expiredSites;
            var bSD = I.syncBlogInfo;
            var cbr = "";
            var bNR = "";
            if ( !! bSD && !!bSD.blogId) {
                cbr = "nosyncexpiredtipwin_" + bSD.blogId;
                bNR = U.ot(cbr)
            }
            if (bNR != "1" && !!bSC && !!bSC[0]) {
                this.bTc(1e3, 0);
                loft.w.csW.bE({
                    parent: document.body,
                    nocover: true,
                    expiredSites: bSC,
                    title: "过期提醒",
                    syncBlogInfo: bSD,
                    cookieKey: cbr,
                    oncc: this.cfv.bHk(this, I),
                    onok: function() {
                        this.bNN()
                    }.bHk(this),
                    onclose: function() {
                        this.bNN()
                    }.bHk(this)
                });
                return
            }
        }
        this.cfv(I)
    };
    bHA.cfv = function(I) {
        var bHn = I.publishTypeData;
        if ( !! bHn && bHn.v == cbM) {
            this.ti()
        } else {
            this.nA()
        }
    };
    bHA.nA = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        this.hl();
        this.bR.data = this.gU(this.cxx);
        if (!this.bR.data) {
            return
        }
        this.vR()
    };
    bHA.cvL = function(bN) {
        if ( !! this.bHH) {
            return this.bHH.cvL()
        }
    };
    bHA.vR = function() {
        this.dm = this.cvL();
        if (this.bX == "EDIT" && this.bR.data.blogName != this.dm && !!this.bhw && !!this.bhw.postCount) {
            if ( !! this.gn) {
                if ((this.bhw.postCount.responseCount || 0) > 0) {
                    this.bTc(1e3, 0);
                    loft.w.eD.bE({
                        parent: document.body,
                        nocover: true,
                        title: "发布文章",
                        c1: "如果将该文章发布到其他博客，其中的评论将丢失，是否发布？",
                        onok: this.kl.bHk(this),
                        oncc: function() {
                            this.bNN()
                        }.bHk(this),
                        onclose: function() {
                            this.bNN()
                        }.bHk(this)
                    });
                    return
                }
            } else {
                var tX = (this.bhw.postCount.responseCount || 0) + (this.bhw.postCount.favoriteCount || 0) + (this.bhw.postCount.reblogCount || 0);
                if (tX > 0) {
                    this.bTc(1e3, 0);
                    loft.w.eD.bE({
                        parent: document.body,
                        nocover: true,
                        title: "发布文章",
                        c1: "如果将该文章发布到其他博客，其中的热度和评论将丢失，是否发布？",
                        onok: this.kl.bHk(this),
                        oncc: function() {
                            this.bNN()
                        }.bHk(this),
                        onclose: function() {
                            this.bNN()
                        }.bHk(this)
                    });
                    return
                }
            }
        }
        this.kl()
    };
    bHA.kl = function() {
        if ( !! this.bVw && this.bX == "NEW") {
            this.bTc(1e3, 0);
            loft.w.fu.bE({
                parent: document.body,
                nocover: true,
                title: "请输入验证码",
                onok: function(dW) {
                    this.bga(dW)
                }.bHk(this),
                oncc: function() {
                    this.bNN()
                }.bHk(this),
                onclose: function() {
                    this.bNN()
                }.bHk(this)
            })
        } else {
            this.bga()
        }
    };
    bHA.bga = function(dW) {
        this.oP(dW)
    };
    bHA.oP = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.bTc();
        if ( !! this.bR.data.answer) {
            if ( !! this.bR.data.onlyAnswer) {
                loft.x.bHt("qbask_20121211_04")
            } else {
                loft.x.bHt("qbask_20121211_05")
            }
        }
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.cjx.bHk(this, this.bR.data);
        this.bVr(this.bXb, this.bR)
    };
    bHA.cjx = function(bHn, bZ) {
        E.gI(true);
        this.bNN();
        if ( !! bZ && bZ.r == 1) {
            this.bPN(bHn, bZ.id, this.bR.data.blogId)
        } else if ( !! bZ && bZ.r == -4) {
            E.bd("您提交的内容中含敏感词！", true, false, false, true)
        } else if ( !! bZ && bZ.r == -3) {
            loft.w.fu.jK();
            loft.w.fu.ky("验证码错误！");
            this.bVw = true;
            this.bh("onpostovernum", this.bVw);
            return
        } else if ( !! bZ && bZ.r == -30) {
            E.bd("定时日志数量超过限制！", true, false, false, true)
        } else if ( !! bZ && bZ.r == -31) {
            E.bd("定时日志设置的发布时间已经小于服务器当前时间！", true, false, false, true)
        } else if ( !! bZ && bZ.r == -98) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, false, false, true)
        } else if ( !! bZ && bZ.r == -99) {
            loft.x.kX()
        } else if ( !! bZ && bZ.r == -100) {
            E.bd("您发得太快了，请休息一下。", true, false, false, true)
        } else if ( !! bZ && bZ.r == -202) {
            E.bd("每次最多允许@100个人！", true, false, false, true)
        } else {
            E.bd("发布失败，请检查网络或重新登录！", true, false, false, true)
        }
        loft.w.fu.cy()
    };
    bHA.ti = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        this.hl();
        this.bR.data = this.gU(this.cxy);
        if (!this.bR.data) return;
        if ( !! this.bVw && this.bX == "NEW") {
            this.bTc(1e3, 0);
            loft.w.fu.bE({
                parent: document.body,
                nocover: true,
                title: "请输入验证码",
                onok: function(dW) {
                    this.oI(dW)
                }.bHk(this),
                oncc: function() {
                    this.bNN()
                }.bHk(this),
                onclose: function() {
                    this.bNN()
                }.bHk(this)
            })
        } else {
            this.oI()
        }
    };
    bHA.oI = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.bTc();
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.ur.bHk(this, this.bR.data);
        this.bVr(this.bXb, this.bR)
    };
    bHA.ur = function(bHn, bZ) {
        var bHK = bHn.blogName;
        E.gI(true);
        this.bNN();
        if ( !! bZ && bZ.r == 1) {
            this.bPN(bHn, bZ.id, this.bR.data.blogId);
            if ( !! bZ.postOverNum) {
                this.bVw = true;
                this.bh("onpostovernum", this.bVw)
            }
        } else if ( !! bZ && bZ.r == -4) {
            E.bd("您提交的内容中含敏感词！", true, false, false, true)
        } else if ( !! bZ && bZ.r == -3) {
            loft.w.fu.jK();
            loft.w.fu.ky("验证码错误！");
            this.bVw = true;
            this.bh("onpostovernum", this.bVw)
        } else if ( !! bZ && bZ.r == -98) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, false, false, true)
        } else if ( !! bZ && bZ.r == -99) {
            loft.x.kX()
        } else if ( !! bZ && bZ.r == -100) {
            E.bd("您发得太快了，请休息一下。", true, false, false, true)
        } else {
            E.bd("保存草稿失败，请检查网络或重新登录！", true, false, false, true)
        }
    };
    bHA.ku = function(bHm) {
        this.hl();
        if (this.bKZ) {
            if (this.cjH != this.bhw) {} else {
                var bN = this.cjH;
                if (!this.jN(bN)) {
                    this.bPN();
                    return
                }
            }
        } else if (this.bOz) {
            if (this.cjG != this.bhw) {} else {
                var bN = this.cjG;
                if (!this.jN(bN)) {
                    this.bPN();
                    return
                }
            }
        } else {
            if (!this.jN()) {
                this.bPN();
                return
            }
        }
        this.bTc(1e3, 0);
        loft.w.eD.bE({
            parent: document.body,
            nocover: true,
            title: "文档未保存",
            c1: "未保存的内容将丢失， 要继续吗？",
            onok: function() {
                this.bPN()
            }.bHk(this),
            oncc: function() {
                this.bNN()
            }.bHk(this),
            onclose: function() {
                this.bNN()
            }.bHk(this)
        })
    };
    bHA.bVr = function(cbD, bKR) {
        if (!cbD) {
            if ( !! P("loft.c").cre || !!P("loft.c").crf) {
                loft.x.th("提交地址不能为空")
            }
            return
        }
        if (this.bX != "REBLOG" && ( !! P("loft.c").cre || !!P("loft.c").crf)) {
            if (!this.cxA(bKR)) return
        }
        if (this.bX == "REBLOG") {
            var hT = bKR.data.blogName;
            U.ru("lastReblogTo", hT, "www.lofter.com", 30, "/")
        }
        J.rl(cbD, bKR)
    };
    bHA.cxA = function(bKR) {
        bKR = bKR || {};
        bKR.data = bKR.data || {};
        if (this.nM == "photo") {
            if (!bKR.data.photoInfo || bKR.data.photoInfo == "null") {
                loft.x.th("图片没有持久化");
                return false
            }
        } else if (this.nM == "music") {
            if ( !! this.kL) {
                var cft = this.kL.Jw();
                var gZ = U.ii(bKR.data.photoInfo || "null");
                if ( !! cft && cft.length > 0) {
                    if (!gZ || gZ.length <= 0) {
                        loft.x.th("图片没有持久化");
                        return false
                    }
                }
            }
        } else if (this.nM == "video") {} else {
            var bT = this.cJn();
            var gZ = U.bHx(bKR.data.photoInfo || "null");
            if ( !! bT && bT.length > 0) {
                if (!gZ || bT.length > gZ.length) {
                    loft.x.th("图片没有持久化");
                    return false
                }
            }
        }
        return true
    };
    bHA.csP = function() {
        if ( !! this.bHH) {
            return this.bHH.csP()
        }
    };
    bHA.dpf = function(bHn, dR, bc) {
        if ( !! this.bHH) {
            var bHl = E.bj(this.bHH.bCu(), "inputforfocus");
            if ( !! bHl[0]) bHl[0].focus()
        }
    };
    bHA.bPN = function(bHn, dR, bc) {
        if (p.bIv.ie || p.bIv.ie11plus) {
            this.dpf()
        }
        this.iE = true;
        this.cfs();
        this.bh("onclosepublishlayer", this.cfC.bHk(this));
        if ( !! bHn) {
            this.doZ(bHn.cctype);
            var RR = {
                actionType: this.bX,
                isContribute: this.gt,
                isDraftPost: this.lD,
                isAutoPublish: this.cIb,
                isCitePost: this.gn
            };
            bHn.id = dR;
            this.bh("onpostpublished", bHn, RR, this.cfC.bHk(this));
            if (this.csP() == "blogPostQueue" && !bHn.isPublished && (bHn.queuePostType == 15 || bHn.queuePostType == 16) || !!bHn.isPublished && this.bX == "NEW") {
                this.cfr(dR, bc)
            }
            this.doY(bHn);
            this.cxU()
        }
        if ( !! this.cfE) {
            this.doW()
        } else {
            window.setTimeout(this.cvh.bHk(this), 300)
        }
        this.bNN();
        P("loft.m.newpublish.w").cJK();
        var bXi = this.cIy(this.cwr(document.title)) || "LOFTER";
        if (P("loft.m.newpublish.w").bIv.ie || P("loft.m.newpublish.w").bIv.ie11plus) {
            if ( !! this.caL) this.caL = window.clearTimeout(this.caL);
            this.caL = window.setTimeout(function(bXi) {
                document.title = this.csq(bXi)
            }.bHk(this, bXi), 1e3)
        } else {
            document.title = this.csq(bXi)
        }
    };
    bHA.cfC = function(doV) {
        this.doT = doV
    };
    bHA.doS = function() {
        return this.doT
    };
    bHA.cxU = function(bHn) {
        if ( !! this.bHH) {
            this.bHH.cTm()
        }
    };
    bHA.doY = function(bHn) {
        if (!bHn) return;
        var by;
        if (!bHn.isPublished && (bHn.queuePostType == 15 || bHn.queuePostType == 16)) {
            by = "postQueueCount"
        } else if ( !! bHn.isPublished && this.bX == "NEW") {
            by = "postCount"
        } else if (!bHn.isPublished && this.bX == "NEW") {
            by = "draftCount"
        }
        if ( !! P("loft.g").updateRightSide) {
            try {
                P("loft.g").updateRightSide(by, 1)
            } catch(e) {}
        }
    };
    bHA.doZ = function(csZ) {
        cga = csZ;
        if ( !! this.bHH) {
            this.bHH.dpK(csZ)
        }
    };
    bHA.cfs = function() {
        if ( !! this.hI) {
            this.hI = window.clearTimeout(this.hI)
        }
        if (this.bX == "NEW") {
            U.ir(this.cu, null, "/");
            this.bXE = true;
            P(N.ut).dC.hz(this.cu);
            if ( !! P("loft.m.dashboard").bOn) {
                P("loft.m.dashboard").bOn.crW()
            }
            if ( !! P("loft.m.blog").bOT) {
                P("loft.m.blog").bOT.crW()
            }
        } else if (this.bKZ) {
            this.bXE = true;
            if ( !! this.bMg) {
                P(N.ut).dC.hz(this.bMg);
                var bID = P(N.ut).dC.qs(bWM);
                this.bRd();
                if ( !! this.bKd) {
                    this.bKd.bZc(this.bMg, bID)
                }
                this.bMg = null
            }
        } else if (this.bOz) {
            this.bXE = true;
            if ( !! this.bLX) {
                P(N.ut).dC.hz(this.bLX);
                var bID = P(N.ut).dC.qs(bWP);
                this.bRd();
                if ( !! this.bKd) {
                    this.bKd.bZc(this.bLX, bID)
                }
                this.bLX = null
            }
        }
    };
    bHA.uX = function() {
        if (this.bX == "NEW") {
            if ( !! this.hI) this.hI = clearTimeout(this.hI);
            var bHn = this.gU(this.bWW);
            this.cbP(bHn)
        } else if (this.bKZ) {
            if ( !! this.hI) this.hI = clearTimeout(this.hI);
            var bN = this.gU(this.bWW);
            this.cxZ(bN)
        } else if (this.bOz) {
            if ( !! this.hI) this.hI = clearTimeout(this.hI);
            var bN = this.gU(this.bWW);
            this.cye(bN)
        }
    };
    bHA.bRd = function() {
        if (!this.bKd) {
            this.cji = {
                maxCkeyNum: 10,
                keepCkeyNum: 9,
                cbClearCache: function(bx) {
                    P(N.ut).dC.hz(bx)
                }.bHk(this)
            };
            this.bKd = new loft.w.csB(this.cji)
        }
    };
    bHA.cxZ = function(bN) {
        if (!bN) return;
        this.bRd();
        var bID = P(N.ut).dC.qs(bWM) || [];
        bID = this.bKd.cjT(this.bMg, bID);
        P(N.ut).dC.wE(bWM, bID);
        var bDN = (new Date).getTime() + cjS;
        var bHn = {
            post: bN,
            expires: bDN
        };
        P(N.ut).dC.wE(this.bMg, bHn)
    };
    bHA.cye = function(bN) {
        if (!bN) return;
        this.bRd();
        var bID = P(N.ut).dC.qs(bWP) || [];
        bID = this.bKd.cjT(this.bLX, bID);
        P(N.ut).dC.wE(bWP, bID);
        var bDN = (new Date).getTime() + cjS;
        var bHn = {
            post: bN,
            expires: bDN
        };
        P(N.ut).dC.wE(this.bLX, bHn)
    };
    bHA.cbP = function(bHn) {
        if ( !! bHn) {
            var bQy = 1;
            U.ru(this.cu, this.bPQ, null, bQy, "/");
            P(N.ut).dC.wE(this.cu, bHn)
        } else {
            U.ir(this.cu, null, "/");
            P(N.ut).dC.hz(this.cu)
        }
    };
    bHA.iD = function(by) {
        if ( !! this.bXE) {
            if ( !! this.hI) {
                this.hI = window.clearTimeout(this.hI)
            }
            return
        }
        if (by == "contentchange" && !this.cyg) {
            this.cyg = true;
            return
        }
        if (! (this.bX == "NEW" || this.bKZ)) {
            return
        }
        if (!this.hI) {
            this.hI = window.setTimeout(this.uX.bHk(this), 200)
        }
    };
    bHA.il = function(df, bQ) {
        if (!df || !bQ || bQ.length <= 0) return false;
        for (var i = 0; i < bQ.length; i++) {
            if (bQ[i] == df) return true;
            if (df == "next gen") {
                if (encodeURIComponent(bQ[i]).toLowerCase() == encodeURIComponent(df) || encodeURIComponent(bQ[i]).toLowerCase() == "next%c2%a0gen") return true
            }
            if (df == "app首页交给你" && bQ[i] && bQ[i].toLowerCase() == df) {
                return true
            }
        }
        return false
    };
    bHA.bNY = function(df, bQ) {
        if (!df || !bQ || bQ.length <= 0) return false;
        for (var i = 0; i < bQ.length; i++) {
            if (bQ[i] == df) {
                bQ.splice(i, 1)
            }
            if (df == "next gen") {
                if (encodeURIComponent(bQ[i]).toLowerCase() == encodeURIComponent(df) || encodeURIComponent(bQ[i]).toLowerCase() == "next%c2%a0gen") {
                    bQ.splice(i, 1)
                }
            }
        }
        return bQ
    };
    bHA.dps = function(I) {
        this.ku()
    };
    bHA.dpo = function(I) {
        this.qN()
    };
    bHA.dpn = function(I) {
        this.cxi(I)
    };
    bHA.qN = function() {
        this.hl();
        var bHn = this.gU({
            isPreview: true
        });
        if (!bHn) return;
        this.eo = this.doR();
        if (!this.eo) return;
        this.eo.action = loft.x.bM(bHn.blogName) + "/post/preview";
        this.eo["postType"].value = this.bGz || 1;
        this.eo["previewParams"].value = P("loft.x").gW(bHn);
        this.eo.submit()
    };
    bHA.doR = function() {
        if (!this.eo) {
            var cfl = document.createElement("form");
            cfl.target = "_blank";
            cfl.method = "post";
            cfl.style.cssText = "display:block;";
            cfl.innerHTML = '<input type="hidden" value="" name="postType"><input type="hidden" value="" name="previewParams">';
            this.dL.insertAdjacentElement("beforeEnd", cfl);
            return cfl
        } else {
            return this.eo
        }
    };
    bHA.os = function() {
        if ( !! this.bHH) {
            return this.bHH.os()
        }
    };
    bHA.ov = function() {
        if ( !! this.bHH) {
            return this.bHH.ov()
        }
    };
    bHA.cfU = function() {
        if ( !! this.bHH) {
            return this.bHH.cfU()
        }
    };
    bHA.chn = function(bPK, bOp) {
        if ( !! this.bHH) {
            return this.bHH.chn(bPK, bOp)
        }
    };
    bHA.jN = F;
    var cym = /<br(\s)*>|<br(\s)*\/>/gi;
    bHA.cjf = function(Z) {
        if ( !! Z) {
            Z = Z.replace(cym, "<br>")
        }
        return Z
    };
    bHA.cyn = function() {
        if ( !! this.bHH) {
            return this.bHH.dqj()
        }
    };
    bHA.bVM = function(FK) {
        var cys = this.cyn();
        var Z = this.bKA({
            noShowError: true
        });
        if (cys == Z) return true;
        if (this.bX == "REBLOG") {
            FK = this.os()
        }
        if ( !! this.gt) {
            FK = this.ov(FK)
        }
        FK = loft.x.mP(FK);
        FK = loft.x.jo(FK);
        if (this.bX == "REBLOG" && !!FK) {
            FK = loft.x.Gg(FK)
        }
        Z = this.cjf(Z);
        FK = this.cjf(FK);
        if (Z == FK) {
            return true
        } else {
            return false
        }
    };
    bHA.dyF = function() {
        this.doI();
        window.setTimeout(function() {
            E.ba(this.dL, "js-showpublishlayer");
            this.cvb()
        }.bHk(this), 500)
    };
    bHA.dyG = function() {
        var ca = function() {
            E.bf(this.dL, "js-showpublishlayer");
            this.cfY();
            this.csj(this.bOW);
            this.bOS()
        }.bHk(this);
        this.cvc(ca);
        window.setTimeout(this.doH.bHk(this), 500)
    };
    bHA.doI = function() {
        var bPT = E.be("publishPostBar");
        if ( !! bPT) {
            bPT.style.zIndex = "100";
            E.ba(bPT, "js-coverShow")
        }
        E.nu(0);
        this.csv = false;
        window.setTimeout(E.nu.bHk(null, 75), 100)
    };
    bHA.doH = function() {
        E.nu(0);
        window.setTimeout(function() {
            E.hG();
            this.csv = true;
            var bPT = E.be("publishPostBar");
            if ( !! bPT) {
                bPT.style.zIndex = "";
                E.bf(bPT, "js-coverShow")
            }
        }.bHk(this), 300)
    };
    bHA.cdu = function(ckm) {
        if ( !! this.bHH) {
            this.bHH.cdu(ckm)
        }
    };
    bHA.ctk = function() {
        if ( !! this.bHH) {
            this.bHH.ctk()
        }
    };
    bHA.cuW = function() {
        if ( !! this.bHH) {
            this.bHH.cuW(this.cwj)
        }
    };
    bHA.cva = function() {
        if ( !! this.bHH) {
            this.bHH.cva()
        }
    };
    bHA.cvb = function(bVJ) {
        if ( !! this.bHH) {
            this.bHH.cvb(this.cwj)
        }
    };
    bHA.cvc = function(ca) {
        if ( !! this.bHH) {
            this.bHH.cvc(ca)
        }
    };
    bHA.cTS = function() {
        if ( !! this.bHH) {
            this.bHH.cTS()
        }
    };
    bHA.cTT = function() {
        if (this.doS()) {
            this.cfC(false);
            return
        }
        if ( !! this.bHH) {
            this.bHH.cTT()
        }
        E.bf(this.dL, "js-showpublishlayer");
        this.cfY();
        this.csj(this.bOW);
        this.bOS();
        this.cfC(false)
    };
    bHA.cvf = function() {
        if ( !! this.bHH) {
            this.bHH.cvf()
        }
    };
    bHA.cvh = function() {
        if ( !! this.bHH) {
            this.bHH.cvh()
        }
        E.bf(this.dL, "js-showpublishlayer");
        this.cfY();
        this.csj(this.bOW);
        this.bOS();
        this.cfC(false)
    };
    bHA.dpm = function() {
        this.doG()
    };
    bHA.doW = function() {
        var ca = function() {
            this.cfY();
            this.csj(this.bOW);
            if (! (p.bIv.ie || p.bIv.ie11plus)) {
                this.bOS()
            }
            this.doE()
        }.bHk(this);
        this.doD(ca)
    };
    bHA.doG = function() {
        E.ba(document.body, "js-bodyCoverShow");
        E.nu(0);
        this.csv = false;
        this.bNc = E.be("preOpenCoverForPublish");
        if ( !! this.bNc && this.bNc.style.display != "none") {
            this.bNc.style.opacity = 1
        } else {
            window.setTimeout(E.nu.bHk(null, 75), 10)
        }
        window.setTimeout(function() {
            this.doB();
            this.doA()
        }.bHk(this), 20)
    };
    bHA.doy = function() {
        this.dox();
        this.bNc = E.be("preOpenCoverForPublish");
        if ( !! this.bNc && this.bNc.style.display != "none") {
            this.bNc.style.opacity = 0;
            window.setTimeout(function() {
                this.bNc.style.display = "none"
            }.bHk(this), 200)
        }
        E.nu(0);
        window.setTimeout(function() {
            if (p.bIv.ie || p.bIv.ie11plus) {
                this.bOS()
            }
            E.hG();
            this.csv = true;
            E.bf(document.body, "js-bodyCoverShow")
        }.bHk(this), 300)
    };
    bHA.doA = function(dow) {
        var btc = 350;
        if ( !! dow) btc = 0;
        E.ba(this.dL, "js-showpublishlayer");
        var bPT = E.be("publishPostBar");
        if ( !! bPT) {
            bPT.style.opacity = 0;
            window.setTimeout(function() {
                bPT.style.visibility = "hidden";
                this.dot()
            }.bHk(this), btc)
        }
    };
    bHA.doE = function() {
        var bPT = E.be("publishPostBar");
        if ( !! bPT) {
            bPT.style.cssText = ""
        }
        E.bf(this.dL, "js-showpublishlayer");
        window.setTimeout(function() {
            this.doy()
        }.bHk(this), 200)
    };
    bHA.dot = function() {
        this.cvj()
    };
    bHA.doD = function(ca) {
        this.cvk(ca)
    };
    bHA.cvj = function() {
        if ( !! this.bHH) {
            this.bHH.cvj(this.cwj)
        }
    };
    bHA.cvk = function(ca) {
        if ( !! this.bHH) {
            this.bHH.cvk(ca)
        }
    };
    bHA.doB = function() {
        if ( !! this.bHH) {
            this.bHH.bE()
        }
    };
    bHA.dox = function() {
        if ( !! this.bHH) {
            this.bHH.cy()
        }
    };
    bHA.bTc = function(chc, bB) {
        if ( !! this.bHH) {
            this.bHH.cQO(chc, bB)
        }
    };
    bHA.bNN = function() {
        if ( !! this.bHH) {
            this.bHH.cQP()
        }
    };
    bHA.cfr = function(dR, bc) {
        var cbD = location.href || "";
        var Lt = this.bPs.blogId || "";
        var cLI = this.bPs.blogName || "";
        var dos = "http://www.lofter.com/blog/" + cLI;
        if ( !! cLI && cbD.indexOf(dos) === 0 && Lt != bc) {
            return
        }
        var dor = "http://www.lofter.com/tag/";
        if (this.bX == "REBLOG" && cbD.indexOf(dor) === 0) {
            return
        }
        if ( !! dR && !!bc) {
            J.br(location.dwr, "TrackBean", "getTrackItem", dR, bc, this.ccd.bHk(this))
        } else {
            this.ccd(null)
        }
    };
    bHA.ccd = function(bHJ) {
        if (!bHJ || !bHJ.post) return;
        if ( !! P("loft.m.dashboard").bOn && !!P("loft.m.dashboard").bOn.bVS) {
            var bN = bHJ.post;
            if (bN.viewRank == 0 && bHJ.followed > 0 && (!bN.blogSettings || bN.blogSettings.securityRank == 0)) {
                P("loft.m.dashboard").bOn.bVS.bTi(bHJ, true)
            }
        }
        if ( !! P("loft.m.blog").bOT && !!P("loft.m.blog").bOT.bYB) {
            P("loft.m.blog").bOT.bYB.bTi(bHJ, true)
        }
        if ( !! P("loft.m.blog").bYA && !!P("loft.m.blog").bYA.crP) {
            P("loft.m.blog").bYA.crP.bTi(bHJ, false)
        }
        if ( !! P("loft.m.search").Vs && !!P("loft.m.search").Vs.cMb) {
            P("loft.m.search").Vs.cMb.bTi(bHJ, true)
        }
    }
})(); (function() {
    var p = P("loft.m.newpublish"),
    dyJ,
    dyK,
    dP,
    bMN;
    p.cyK = C();
    dyL = p.cyK.bi(P("loft.m.newpublish.w").bWV, true);
    dyM = p.cyK.bw;
    p.cyK.bq = function(bl, I) {
        this.bHr(bl, I)
    };
    p.beh = C();
    dP = p.beh.bi(loft.m.newpublish.w.cfF, true);
    bMN = p.beh.bw;
    p.beh.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    dP.bq = function(I) {
        I = I || {};
        this.bHr(I)
    };
    dP.bz = function(I) {
        I = I || {};
        this.bPQ = "new/text/";
        I.autoHeightEnabled = true;
        I.minFrameHeight = 190;
        I.maxFrameHeight = 190;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        I.maxFrameHeight = qx - 112 - 80 - 300;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bMN.bz.call(this, I);
        this.bHB = I.goPublishData;
        I.goPublishData = null;
        if (!this.bHH) {}
        this.crO = E.be("editor_uploadPhotoArea");
        if ( !! this.crO) {
            this.crO.style.display = "none"
        }
        this.cco("js-postText");
        this.bYL("js-activating");
        this.bPA();
        window.setTimeout(function() {
            if ( !! this.crO) {
                this.crO.style.display = ""
            }
        }.bHk(this), 800)
    };
    dP.dom = function(bN, bLA) {
        if ( !! bLA || !this.ccp) return;
        if (!this.oN) {
            this.oN = document.cloneElement("input", "");
            this.oN.type = "text";
            this.oN.setAttribute("maxlength", 50);
            this.cff = document.cloneElement("label", "");
            this.cff.innerText = "标题（可不填）";
            this.ccp.insertAdjacentElement("beforeEnd", this.oN);
            this.ccp.insertAdjacentElement("beforeEnd", this.cff);
            V.bHo(this.oN, "input", this.kF.bHk(this))
        }
        if ( !! bN && bN != "null") {
            this.oN.value = bN.title || "";
            if ( !! this.oN.value) this.bZV()
        }
    };
    dP.kF = function(bHm) {
        var bg = this.oN.value;
        if ( !! bg) {
            this.bZV()
        } else {
            this.bWG()
        }
    };
    dP.bLU = function() {
        var bHT = (this.bHB || O).from || "";
        if ( !! this.bHB && this.bHB != "null") {
            this.bhw = {
                isPublished: true
            };
            var eM = this.bHB.title || "";
            try {
                eM = decodeURIComponent(eM)
            } catch(e) {}
            this.bhw.title = eM;
            var Z = this.bHB.content || "";
            try {
                Z = decodeURIComponent(Z)
            } catch(e) {}
            var kO = this.bHB.source || "";
            var bIn = this.bHB.sourceUrl || "";
            if (bHT == "weibo") {
                if ( !! bIn) {
                    Z = Z + '<p>分享自网易微博（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "bbs") {
                if ( !! bIn) {
                    Z = Z + '<p>分享自网易论坛（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "pp") {
                if ( !! bIn) {
                    Z = Z + '<p>分享自网易摄影（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "news") {
                if ( !! bIn) {
                    Z = Z + '<p>分享自网易新闻（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "163") {
                if ( !! bIn) {
                    Z = Z + '<p>分享自网易（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "BLOGPOST") {
                if ( !! kO && !!bIn) {
                    Z = Z + '<p>来源：<a href="' + bIn + '">' + kO + "</a></p>"
                }
            } else if (bHT == "163hot") {
                if ( !! bIn) {
                    Z = Z + '<p>分享自网易热（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            }
            this.bhw.content = Z;
            if (this.bHB.from) {
                this.bhw.from = this.bHB.from
            }
            if (this.bHB.thirdId) {
                this.bhw.thirdId = this.bHB.thirdId
            }
            if ( !! this.bHB.tag) {
                this.bhw.tag = this.bHB.tag
            }
            this.cookiePostData = this.bhw;
            this.bJz(this.bhw);
            this.bHB = null
        } else {
            bMN.bLU.call(this)
        }
    };
    dP.bPA = function() {
        if (!this.ccp) {
            this.ccp = document.cloneElement("div", "blogTittle");
            bMN.bPA.call(this, this.ccp)
        }
    };
    dP.bOS = function() {
        this.oN = E.hE(this.oN);
        this.cff = E.hE(this.cff);
        this.ccp = E.hE(this.ccp);
        bMN.bOS.call(this)
    };
    dP.cK = function() {
        V.bJv(this.oN, "keydown");
        bMN.cK.call(this)
    };
    dP.bWG = function() {
        E.bf(this.cff, "js-hidetips")
    };
    dP.bZV = function() {
        E.ba(this.cff, "js-hidetips")
    };
    dP.gU = function(I) {
        I = I || O;
        var iX = I.noShowError || false;
        var hd;
        var eM = U.bA(this.oN.value);
        hd = bMN.gU.call(this, I);
        if ( !! hd) {
            hd.title = eM;
            var Z = hd.content;
            if (!eM && !Z) {
                if (!iX) E.bd("请输入日志内容！", true, false, false, true);
                return
            }
            var bT = null;
            if (this.bX != "REBLOG") {
                bT = this.cJn();
                if ( !! bT) {
                    Z = hd.content = this.bKA(I)
                }
                if ( !! this.rX && !this.bsL) {
                    if ( !! bT) {
                        this.bsL = true
                    } else {
                        bT = []
                    }
                    for (var i = 0; i < this.rX.length && !!this.rX[i]; i++) {
                        bT.push(this.rX[i])
                    }
                }
            }
            hd.photoInfo = U.ii(bT)
        }
        if ( !! hd && !!this.bhw && !!this.bhw.from) {
            hd.from = this.bhw.from
        }
        if ( !! hd && !!this.bhw && !!this.bhw.thirdId) {
            hd.thirdId = this.bhw.thirdId
        }
        return hd
    };
    dP.bJz = function(bN, bLA) {
        this.dom(bN, bLA);
        bMN.bJz.call(this, bN, bLA)
    };
    dP.bsM = function() {
        V.bHo(this.oN, "keydown", this.iD.bHk(this))
    };
    dP.bLv = function(kA) {
        bMN.bLv.call(this, kA);
        if ( !! this.cookiePostData && !!this.cookiePostData.photoInfo) {
            this.rX = U.bHx(this.cookiePostData.photoInfo)
        }
    };
    dP.bPN = function(bHn, dR, bc) {
        bMN.bPN.call(this, bHn, dR, bc)
    };
    dP.jN = function(bN) {
        bN = bN || this.bhw;
        if (this.bX == "NEW" || !bN || bN == "null") {
            var sc = U.bA(this.oN.value);
            var Z = this.bKA({
                noShowError: true
            });
            if (!sc && !Z) {
                return false
            }
        } else {
            var bsN = U.bA(bN.title || "");
            var FK = bN.content || "";
            var sc = U.bA(this.oN.value);
            if (bsN == sc && this.bVM(FK)) {
                return false
            }
        }
        return true
    }
})(); (function() {
    var p = P(N.ui),
    bJl,
    bHu = "ui-" + U.cA();
    p.fx("#<uispace>{position:absolute;top:0;left:0;}#<uispace> .zhdl{position:absolute;width:10px;background:#0000cd;}#<uispace> .zmvr{display:none;position:absolute;width:20px;height:20px;border:1px solid #aaa;background:#eee;}", bHu);
    p.bUn = C();
    bJl = p.bUn.bi(p.Sa, true);
    bJl.bq = function(bl, I) {
        this.bTS = {
            length: 0
        };
        this.bHr(bl, I)
    };
    bJl.bz = function(I) {
        p.bUn.bw.bz.call(this, I);
        I = I || O;
        this.li = I.box;
        this.bTn = I.selected || "";
        if ( !! I.ranged && !this.ciO) this.ciO = p.dyN.bG(document.body, {
            onrangechange: this.dok.bHk(this)
        })
    };
    bJl.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL) return;
        this.cNb();
        this.gH()
    };
    bJl.gH = function() {
        p.bUn.bw.gH.call(this);
        if ( !! this.ciO) this.ciO.mM(false);
        if (!this.li && !!this.cB[0]) this.li = [this.cB[0].offsetWidth, this.cB[0].offsetHeight];
        this.bYz = [Math.ceil(this.dL.clientHeight / this.li[1]), Math.floor(this.dL.clientWidth / this.li[0])];
        this.cyN[0].style.height = this.li[1] + "px"
    };
    bJl.cK = function() {
        if ( !! this.ciO) this.ciO.mM(true)
    };
    bJl.cU = function() {
        return bHu
    };
    bJl.cM = function() {
        return '<div class="zhdl">&nbsp;</div><div class="zmvr">&nbsp;</div>'
    };
    bJl.cc = function() {
        p.bUn.bw.cc.call(this);
        this.cyN = E.dE(this.Y);
        V.bHo(document, "mousedown", this.cfd.bHk(this))
    };
    bJl.cNb = function() {
        this.fl = [E.tz(this.dL), E.jO(this.dL)]
    };
    bJl.cyW = function(crb, cqS) {
        return [Math.min(Math.floor(cqS / this.li[1]), this.bYz[0]), Math.min(Math.floor(crb / this.li[0]), this.bYz[1])]
    };
    bJl.cyX = function(bt) {
        return !! this.bTS[bt]
    };
    bJl.cNh = function(bt) {
        if (!this.bTS[bt]) return;
        E.bf(bt, this.bTn);
        delete this.bTS[bt];
        this.bTS.length--
    };
    bJl.czb = function(bt) {
        if (this.bTS[bt]) return;
        E.ba(bt, this.bTn);
        this.bTS[bt] = true;
        this.bTS.length++
    };
    bJl.cfd = function() {
        this.ciF = null;
        for (var p in this.bTS) if (p != "length") this.cNh(p)
    };
    bJl.YH = function(bBf) {
        if ( !! bBf) B.da ? E.DX(document.body, false) : E.ba(document.body, this.BW);
        else B.da ? E.DX(document.body, true) : E.bf(document.body, this.BW)
    };
    bJl.jY = function(bHm) {
        this.czf = true;
        V.bb(bHm);
        this.YH(true);
        var bt = V.be(bHm, this.bBh.bHk(this)).id;
        if (!bHm.ctrlKey && !bHm.shiftKey && !this.cyX(bt)) this.cfd();
        if (!bHm.shiftKey) {
            this.ciF = bt;
            this.czb(bt)
        } else {
            this.ciF = this.ciF || bt;
            for (var i = 0,
            l = this.cB.length,
            fC = 0,
            cfb, crK; i < l; i++) {
                cfb = this.cB[i].id;
                crK = this.ciF == bt && cfb == bt;
                if (crK) fC++;
                if (cfb == this.ciF || cfb == bt) {
                    crK = true;
                    fC++
                }
                crK || fC == 1 ? this.czb(cfb) : this.cNh(cfb)
            }
        }
    };
    bJl.yd = function(bHm) {
        if (!this.czf || !this.bTS.length) return;
        if (!this.cNu) {
            this.cNb();
            this.cNu = true
        }
        this.czj = false;
        var sm = V.IO(bHm) - this.fl[0],
        pD = V.vS(bHm) - this.fl[1] + (this.bFA ? this.bFA.scrollTop: 0),
        ceY = this.cyW(sm, pD);
        if (ceY[0] < 0 || ceY[0] >= this.bYz[0] || ceY[1] < 0 || ceY[1] >= this.bYz[1]) {
            E.hv(this.Y);
            return
        }
        this.dL.appendChild(this.Y);
        var cY = this.cyN[1].style;
        cY.top = pD + 20 + "px";
        cY.left = sm + 10 + "px";
        cY.visibility = "visible";
        var cY = this.cyN[0].style;
        cY.visibility = "hidden";
        var Q = ceY[0] * this.bYz[1] + ceY[1],
        cN,
        dn;
        this.czr = sm % this.li[0] > this.li[0] / 2;
        this.bWn = this.cB[Q];
        if (!this.bWn) {
            this.czr = true;
            this.bWn = this.cB[this.cB.length - 1]
        }
        if (this.cyX(this.bWn.id)) return;
        dn = this.bWn.offsetTop;
        cN = this.bWn.offsetLeft;
        if (this.czr) cN += this.li[0];
        cY.top = dn + "px";
        cY.left = cN - 5 + "px";
        cY.visibility = "visible";
        this.czj = true
    };
    bJl.EK = function(bHm) {
        if (!this.czf || !this.bTS.length) return;
        this.czf = false;
        this.cNu = false;
        this.YH(false);
        E.hv(this.Y);
        if (!this.czj) return;
        this.czj = false;
        var bn = [];
        for (var i = 0,
        l = this.cB.length; i < l; i++) if (this.cyX(this.cB[i].id)) bn.push(this.cB[i]);
        this.bWn.insertAdjacentElement(this.czr ? "afterEnd": "beforeBegin", bn[0]);
        this.bWn = bn[0];
        for (var i = 1,
        l = bn.length; i < l; i++) {
            this.bWn.insertAdjacentElement("afterEnd", bn[i]);
            this.bWn = bn[i]
        }
        this.Br();
        this.bh("onchange")
    };
    bJl.dok = function(cN, dn, dz, eT) {
        this.cfd();
        dn += !this.bFA ? 0 : this.bFA.scrollTop;
        dn -= this.fl[1];
        cN -= this.fl[0];
        var lo = this.cyW(cN, dn),
        iB = this.cyW(cN + dz, dn + eT);
        for (var i = Math.max(0, lo[0]), IW; i <= iB[0] && i < this.bYz[0]; i++) {
            IW = i * this.bYz[1];
            for (var j = Math.max(0, lo[1]), bo; j <= iB[1] && j < this.bYz[1]; j++) {
                bo = this.cB[IW + j];
                if (!bo) break;
                this.czb(bo.id)
            }
        }
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    bJl,
    ccJ,
    bHu = "ui-" + U.cA();
    P(N.ui).fx('#<uispace>{position:absolute;top:0;left:-2px;}#<uispace> .zhdl{position:absolute;width:9px;min-height:104px;background:url("http://l.bst.126.net/rsc/img/newpublish/sortstub.png") 0px -2px no-repeat;}#<uispace> .zmvr{display:none;position:absolute;width:20px;height:20px;border:1px solid #aaa;background:#eee;}', bHu);
    p.bUn = C();
    bJl = p.bUn.bi(P(N.ui).bUn, true);
    ccJ = p.bUn.bw;
    bJl.bq = function(bl, I) {
        this.bHr(bl, I)
    };
    bJl.bz = function(I) {
        I = I || O;
        this.dL = I.parent;
        ccJ.bz.call(this, I);
        this.bHo("ondragsortitem", I.ondragsortitem || F);
        this.bHo("ondropsortitem", I.ondropsortitem || F)
    };
    bJl.cU = function() {
        return bHu
    };
    bJl.mM = function() {
        this.bUq = true
    };
    bJl.yG = function() {
        this.bUq = false
    };
    bJl.cCH = function(bHm) {
        if ( !! this.bUq) return;
        ccJ.cCH.call(this, bHm)
    };
    bJl.jY = function(bHm) {
        this.bh("ondragsortitem", this.dL);
        if ( !! this.bUq) return;
        ccJ.jY.call(this, bHm)
    };
    bJl.yd = function(bHm) {
        if ( !! this.bUq) return;
        ccJ.yd.call(this, bHm)
    };
    bJl.EK = function(bHm) {
        this.bh("ondropsortitem", this.dL);
        if ( !! this.bUq) return;
        ccJ.EK.call(this, bHm);
        this.cfd()
    };
    bJl.cfd = function(bHm) {
        if ( !! this.bUq) return;
        ccJ.cfd.call(this, bHm)
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    bUr,
    czs,
    bHu = "ui-" + U.cA();
    P(N.ui).fx("#<uispace>{position:absolute;left:-138px;top:43px;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .editdescwrap{width:332px;height:74px;padding:10px;background-color:#fff;border:1px solid #c2c2c2;}#<uispace> .editdescwrap .nipple{position:absolute;top:-9px;left:180px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #c2c2c2;/*border-color:transparent;*/border-image:none;}#<uispace> .editdescwrap .nipple:after{content:\"\";position:absolute;top:1px;left:-9px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #fff transparent;border-image:none;}#<uispace> .editdescwrap .desciptwrap{margin-bottom:10px;}#<uispace> .editdescwrap .descinput{width:310px;height:30px;line-height:30px;padding:5px 10px;color:#999;border:1px solid #ededed;outline:none;}#<uispace> .editdescwrap .updatedesc{float:right;width:60px;height:26px;background-position:-8px -912px;color:#888;border:none;outline:none;}", bHu);
    p.crD = C();
    bUr = p.crD.bi(P(N.ui).ga, true);
    czs = p.crD.bw;
    bUr.bq = function(bl, I) {
        this.bHr(bl, I);
        V.bHo(document, "click", this.cit.bHk(this))
    };
    bUr.bHC = function(bl, I) {
        czs.bHC.call(this, bl, I)
    };
    bUr.cit = function(bHm) {
        if (!this.lN) {
            return
        }
        var doh = V.be(bHm,
        function(X) {
            return X == this.Y
        }.bHk(this));
        if (!doh) {
            this.crt(bHm)
        } else {}
    };
    bUr.db = function() {
        E.hv(this.Y);
        if (this.lN) {
            this.bh("onclosedesclayer", this.dL, U.bA(this.czY.value))
        }
        p.crD.db(this)
    };
    bUr.bz = function(I) {
        I = I || O;
        czs.bz.call(this, I);
        this.dL = I.parent;
        this.czY.value = I.photodesc || "";
        this.bHo("onupdatedesc", I.onupdatedesc || F);
        this.bHo("onclosedesclayer", I.onclosedesclayer || F)
    };
    bUr.cU = function() {
        return bHu + " editphotodesc"
    };
    bUr.cM = function() {
        return '<div class="editdescwrap"><span class="nipple"></span><div class="desciptwrap"><input class="descinput ztag" maxlength=500 /></div><div class="m-btns f-cb"><button type="submit" class="btn ztag"><span>提　交</span></button></div></div>'
    };
    bUr.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        this.czY = bHl[0];
        this.dog = bHl[1];
        V.bHo(this.dog, "click", this.crt.bHk(this))
    };
    bUr.crt = function(bHm) {
        this.bh("onupdatedesc", this.dL, U.bA(this.czY.value));
        this.db()
    }
})(); (function() {
    var p = P("loft.w"),
    ho;
    p.Cs = C();
    ho = p.Cs.bi(P(N.ut).gY);
    p.Cs.bHk = function(I) {
        if (!window.XMLHttpRequest) return null;
        var brG = new XMLHttpRequest;
        if ( !! brG.upload && !!I && !!I.uploadUrl) {
            return new p.Cs(I)
        } else {
            return null
        }
    };
    ho.bq = function(I) {
        this.bHr();
        this.Uv = I.selectFile;
        this.Cg = I.dragContainer || document;
        if ( !! this.Uv) V.bHo(this.Uv, "change", this.crs.bHk(this));
        if (this.Cg == document) {
            V.bHo(this.Cg, "drop", this.Na.bHk(this, true))
        } else {
            V.bHo(this.Cg, "drop", this.Na.bHk(this, false));
            V.bHo(document, "dragover", this.brK.bHk(this));
            V.bHo(document, "drop", this.brL.bHk(this));
            V.bHo(document, "mouseover", this.brM.bHk(this))
        }
        V.bHo(document, "dragenter", this.brN.bHk(this));
        this.bz(I)
    };
    ho.cK = function() {
        if ( !! this.Uv) V.iJ(this.Uv, "change", this.crs.bHk(this));
        if (this.Cg == document) {
            V.iJ(this.Cg, "drop", this.Na.bHk(this, true))
        } else {
            V.iJ(this.Cg, "drop", this.Na.bHk(this, false));
            V.iJ(document, "dragover", this.brK.bHk(this));
            V.iJ(document, "drop", this.brL.bHk(this));
            V.iJ(document, "mouseover", this.brM.bHk(this))
        }
        V.iJ(document, "dragenter", this.brN.bHk(this));
        this.bz(null);
        delete this
    };
    ho.brM = function(bHm) {
        if (!this.Hj) this.Hj = setTimeout(this.brP.bHk(this), 100)
    };
    ho.bGq = function(go, bHm) {
        if ( !! go) V.bb(bHm)
    };
    ho.bGp = function(go, bHm) {
        if ( !! go) V.bb(bHm)
    };
    ho.Na = function(go, bHm) {
        if ( !! go) V.bb(bHm);
        this.bhm(bHm)
    };
    ho.bnb = function(bHm) {
        this.Na(false, bHm)
    };
    ho.brN = function(bHm) {
        V.bb(bHm);
        this.bh("ondocdragenter")
    };
    ho.brK = function(bHm) {
        V.bb(bHm)
    };
    ho.brP = function(bHm) {
        if ( !! this.Hj) this.Hj = clearTimeout(this.Hj);
        this.bh("ondocdragleave")
    };
    ho.brL = function(bHm) {
        V.bb(bHm);
        this.bh("ondocdrop")
    };
    ho.bz = function(I) {
        I = I || {};
        this.brS = I.isExceedMaxPhotoNum || F;
        this.doe = I.getAvailablePhotoNum || F;
        this.bYv = I.maxFileSize || 20 * 1024 * 1024;
        this.brT = I.cbUploadStart || F;
        this.brU = I.cbUploadProgress || F;
        this.brV = I.cbUploadComplete || F;
        this.bgY = I.cbUploadError || F;
        this.brX = I.uploadUrl || "";
        this.brY = I.fileField || "Filedata";
        this.bHo("ondocdragenter", I.ondocdragenter || F);
        this.bHo("ondocdragleave", I.ondocdragleave || F);
        this.bHo("ondocdrop", I.ondocdrop || F);
        this.bHo("onexceedmaxfilesize", I.onexceedmaxfilesize || F)
    };
    ho.dnW = function(dnV) {
        if ( !! this.Uv) V.iJ(this.Uv, "change", this.crs.bHk(this));
        this.Uv = dnV;
        if ( !! this.Uv) V.bHo(this.Uv, "change", this.crs.bHk(this))
    };
    ho.crs = function(bHm) {
        this.bhm(bHm, 2)
    };
    ho.bhm = function(bHm, bIk) {
        this.cOv = bIk || 1;
        var Hi = bHm.target.files || bHm.dataTransfer.files;
        if (!Hi || !Hi[0]) {
            return
        }
        if (!this.bsa(Hi[0].type)) {
            return
        }
        if (this.brS()) return;
        this.crl = false;
        if (Hi.length == 1) {
            var f = Hi[0];
            f = this.bsb(f);
            this.bsc(f)
        } else {
            var gC = this.doe() || 0;
            if (gC > 1) {
                loft.x.bHt("qbdtfb_20150714_01");
                this.crl = true
            }
            this.dnT(Hi, gC);
            loft.x.bHt("qbdtfb_20150112_01")
        }
    };
    ho.dnT = function(Hi, gC) {
        for (var i = 0; i < Hi.length; i++) {
            if (gC > 0 && !!Hi[i] && Hi[i].size <= this.bYv && this.bsa(Hi[i].type)) {
                window.setTimeout(function(bgV) {
                    this.bsc(bgV)
                }.bHk(this, Hi[i]), 30 * i);
                gC--
            }
        }
    };
    ho.bsb = function(bgV) {
        if (bgV.size > this.bYv) {
            this.bh("onexceedmaxfilesize");
            return null
        }
        return bgV
    };
    ho.bsc = function(bgV) {
        this.dnS(bgV)
    };
    ho.dyP = function(bgV) {
        if (!bgV) return;
        var bIk = this.cOv;
        var xhr = new XMLHttpRequest,
        formData = new FormData,
        gk = "tastId-" + U.cA();
        formData.append(this.brY, bgV);
        if (xhr.upload) {
            this.bse(gk, bgV.size);
            V.bHo(xhr.upload, "progress", this.bsf.bHk(this, gk));
            V.bHo(xhr, "load", this.bsg.bHk(this, gk, bIk));
            V.bHo(xhr, "error", this.bsh.bHk(this, gk, bIk));
            V.bHo(xhr, "abort", this.bsi.bHk(this, gk, bIk));
            xhr.open("POST", this.brX, true);
            xhr.send(formData)
        }
    };
    ho.bse = function(gk, chQ) {
        this.brT(gk, "", chQ)
    };
    ho.bsf = function(gk, bHm) {
        var pc = parseInt(bHm.loaded / bHm.total * 100);
        this.brU(gk, pc)
    };
    ho.bsg = function(gk, bIk, bHm) {
        bIk = bIk || 1;
        this.brV(gk, bHm.target.responseText, bIk);
        try {
            var bH = "var photodata4log=" + bHm.target.responseText;
            eval(bH || "null");
            if (!photodata4log || photodata4log.resultcode != 999) {
                var du = U.ii(bHm);
                du = "completeerrorevent: " + du;
                J.br(location.dwr, "LoggerBean", "print", du, F)
            }
        } catch(e) {}
    };
    ho.bsh = function(gk, bIk, bHm) {
        bIk = bIk || 1;
        this.bgY(gk, 0, 0, bIk);
        try {
            var du = U.ii(bHm);
            du = "failevent: " + du;
            J.br(location.dwr, "LoggerBean", "print", du, F)
        } catch(e) {}
    };
    ho.bsi = function(gk, bIk, bHm) {
        bIk = bIk || 1;
        this.bgY(gk, 0, 0, bIk)
    };
    ho.bsa = function(by) {
        switch (by) {
        case "image/jpeg":
        case "image/png":
        case "image/gif":
        case "image/bmp":
        case "image/jpg":
            return true;
        default:
            return false
        }
    };
    ho.dnS = function(bgV) {
        if (!bgV) return;
        var bIk = this.cOv;
        var xhr = new XMLHttpRequest,
        formData = new FormData,
        gk = "tastId-" + U.cA();
        var gG = "jpg";
        var bLK = bgV.name || "";
        if ( !! bLK) {
            var cd = bLK.split(".") || [];
            gG = cd[cd.length - 1] || "jpg"
        }
        gG = gG.toLowerCase();
        J.br(location.dwr, "ImageBean", "genTokens", gG, "", "", "", "",
        function(cAT) {
            cAT = cAT || [];
            var ceI = cAT[0];
            if (!ceI || !ceI.objectName || !ceI.uploadToken) {
                E.bd("token获取失败！", true);
                return
            }
            formData.append("Object", ceI.objectName);
            formData.append("x-nos-token", ceI.uploadToken);
            formData.append("file", bgV);
            if (xhr.upload) {
                this.bse(gk, bgV.size);
                V.bHo(xhr.upload, "progress", this.bsf.bHk(this, gk));
                V.bHo(xhr, "load", this.dnR.bHk(this, gk, bIk));
                V.bHo(xhr, "error", this.dnQ.bHk(this, gk, bIk));
                V.bHo(xhr, "abort", this.dnO.bHk(this, gk, bIk));
                xhr.open("POST", "http://nos.netease.com/" + ceI.bucketName, true);
                xhr.send(formData)
            }
        }.bHk(this))
    };
    ho.dnR = function(gk, bIk, bHm) {
        bIk = bIk || 1;
        try {
            var bH = "var photodata4log=" + bHm.target.responseText;
            eval(bH || "null");
            if (!photodata4log || !photodata4log.bucketName || !photodata4log.objectName) {
                this.bgY(gk, 0, 0, bIk);
                var du = "nos_completeerrorevent: " + bHm.target.responseText;
                J.br(location.dwr, "LoggerBean", "print", du, F);
                if (this.crl) {
                    loft.x.bHt("qbdtfb_20150714_02")
                }
            } else {
                var bK = 999;
                var py = photodata4log.ow || 0;
                var Oe = photodata4log.oh || 0;
                var cqT = "http://nos.netease.com/" + photodata4log.bucketName + "/" + photodata4log.objectName;
                var dnN = cqT + "?imageView&thumbnail=164y164";
                var dnM = cqT + "?imageView&thumbnail=500x0";
                var dnK = cqT + "?imageView&thumbnail=1680x0";
                var dnJ = {
                    resultcode: 999,
                    rw: py,
                    rh: Oe,
                    ow: py,
                    oh: Oe,
                    raw: cqT,
                    userDef1Url: dnN,
                    userDef2Url: dnM,
                    userDef3Url: dnK
                };
                var dnI = U.ii(dnJ);
                this.brV(gk, dnI, bIk)
            }
        } catch(e) {
            this.bgY(gk, 0, 0, bIk);
            var du = "nos_completeerrorevent: " + bHm.target.responseText;
            J.br(location.dwr, "LoggerBean", "print", du, F);
            if (this.crl) {
                loft.x.bHt("qbdtfb_20150714_02")
            }
        }
    };
    ho.dnQ = function(gk, bIk, bHm) {
        bIk = bIk || 1;
        this.bgY(gk, 0, 0, bIk);
        try {
            var du = "nos_failevent: " + bHm.target.responseText;
            J.br(location.dwr, "LoggerBean", "print", du, F)
        } catch(e) {}
        if (this.crl) {
            loft.x.bHt("qbdtfb_20150714_02")
        }
    };
    ho.dnO = function(gk, bIk, bHm) {
        bIk = bIk || 1;
        this.bgY(gk, 0, 0, bIk)
    }
})(); (function() {
    var chI = "html5uploadfailcountkey";
    var dnG = function(cqM) {
        var bg = parseInt(U.ot(chI)) || 0;
        bg++;
        U.ru(chI, bg, "www.lofter.com", 365 * 100, "/");
        cqM = E.be(cqM);
        if (bg >= 3 && !!cqM) {
            E.bf(cqM, "js-usehtml5upload")
        }
    };
    var dnF = function() {
        var bg = parseInt(U.ot(chI)) || 0;
        if (bg > -10) bg--;
        U.ru(chI, bg, "www.lofter.com", 365 * 100, "/")
    };
    var cBL = function() {
        if (loft.x.ceQ()) return false;
        var bg = parseInt(U.ot(chI)) || 0;
        if (bg >= 2) {
            return true
        }
    };
    var ceC = function() {
        if (ceC.isSupport !== undefined) {
            return ceC.isSupport
        }
        var cBN = false;
        if ( !! window.XMLHttpRequest) {
            var brG = new XMLHttpRequest;
            if ( !! brG && !!brG.upload) {
                cBN = true
            }
        }
        ceC.isSupport = cBN;
        return cBN
    };
    var bYm = function(cG) {
        cG = cG || "";
        return cG.replace(/#/g, "@")
    };
    var bWQ = function(bId) {
        bId = bId || "";
        if (bId.slice( - 8) === "@163.com") return bId.replace("@163.com", "");
        if (bId.slice( - 8) === "@126.com") return bId.replace("@126.com", "@126");
        else if (bId.slice( - 8) === "@188.com") return bId.replace("@188.com", "@188");
        else if (bId.slice( - 13) === "@popo.163.com") return bId.replace("@popo.163.com", ".popo");
        else if (bId.slice( - 12) === "@vip.163.com") return bId.replace("@vip.163.com", ".vip");
        else if (bId.slice( - 9) === "@yeah.net") return bId.replace("@yeah.net", "@yeah");
        else if (bId.slice( - 5) === "@game") return bId;
        else if (bId.slice( - 12) === "@vip.126.com") return bId;
        return bYm(bId)
    };
    var dnE = function() {
        if ( !! window.uploadProxyDomain) return;
        if (!loft.c.cm || !loft.c.cm.email) return;
        var bIT = bWQ(loft.c.cm.email);
        if ( !! bIT) {
            var bp = "http://upload.photo.163.com/" + bIT + "/proxydomain?responsetype=js";
            J.Ty(bp, F)
        }
    };
    var bYl = "fastestuploadproxydomainkey";
    var bTw = -1;
    var coe = {
        "http://tuploadbj.ph.126.net/detectspeed?": "uploadbj",
        "http://uuploadbj.ph.126.net/detectspeed?": "uploadbj",
        "http://uploadhz.ph.126.net/detectspeed?": "upload",
        "http://tuploadgz.ph.126.net/detectspeed?": "uploadgz",
        "http://uuploadgz.ph.126.net/detectspeed?": "uploadgz"
    };
    var bNa = function(bp, bKV, bIT, brG) {
        if (!bp) return;
        if (!brG) brG = new XMLHttpRequest;
        var bIo = (new Date).getTime();
        brG.addEventListener("load", bTz.bHk(this, bp, bIo, true), false);
        brG.addEventListener("error", bTz.bHk(this, bp, bIo), false);
        brG.addEventListener("abort", bTz.bHk(this, bp, bIo), false);
        bp = bp + bIT;
        brG.open("POST", bp, true);
        brG.send(bKV)
    };
    var bTz = function(bp, bIo, cod) {
        if ( !! cod) {
            var rD = (new Date).getTime() - bIo;
            if (bTw == -1 || rD < bTw) {
                bTw = rD;
                window.uploadProxyDomain = coe[bp];
                var bQe = window.uploadProxyDomain + "|" + (new Date).getTime();
                U.ru(bYl, bQe, null, 100, "/")
            }
        }
    };
    var cnT = function() {
        var bQe = U.ot(bYl);
        if ( !! bQe) {
            var bYj = bQe.split("|");
            window.uploadProxyDomain = bYj[0] || "";
            var bYi = bYj[1] || 0;
            var bge = (new Date).getTime() - bYi;
            if (bYi > 0 && bge < 864e5 * 5) return
        }
        if (!window.XMLHttpRequest) return;
        var brG = new XMLHttpRequest;
        if (!brG.upload) return;
        var bKV = cnS();
        var bIT = bWQ(loft.c.cm.email);
        var bNh = ["http://tuploadbj.ph.126.net/detectspeed?", "http://uuploadbj.ph.126.net/detectspeed?", "http://uploadhz.ph.126.net/detectspeed?", "http://tuploadgz.ph.126.net/detectspeed?", "http://uuploadgz.ph.126.net/detectspeed?"];
        bNa(bNh[0], bKV, bIT, brG);
        bNa(bNh[1], bKV, bIT);
        bNa(bNh[2], bKV, bIT);
        bNa(bNh[3], bKV, bIT);
        bNa(bNh[4], bKV, bIT)
    };
    var cnS = function() {
        var cnR = "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest";
        var bYg = [];
        for (var i = 0; i < 180; i++) {
            bYg.push(cnR)
        }
        return bYg.join("")
    };
    cnT();
    var p = P("loft.m.newpublish.w"),
    cS,
    Vv,
    bHu = "ui-" + U.cA();
    var cqH = "http://l.bst.126.net/rsc/img/common/empty.png";
    var Vy = "js_isCitePost";
    var Vx = "js-singlePhoto";
    var cqF = "js-moreThanOnePhoto";
    var Io = "js-exceedMaxPhotoNum";
    var dnC = "js-uploaderror";
    var cnD = "js-photouploading";
    var cCk = "js-photorotateing";
    var cdH = "js-photouploadingflag";
    var cQw = "js-photoitemhover";
    var cqB = "js-hasimgdesc";
    var dnB = "js-sortselected";
    var cQz = "js-onsortdraging";
    var xJ = 10;
    var bTF = 20;
    var cqw = 667;
    var hh = bYm(loft.c.cm.email || "");
    var tx = ".photo.163.com/anony/web/upload/userdefinesize?email=" + hh + "&sitefrom=lofterblog&userdefinesize=164x164x1x90;500x10000x0x96;1680x10000x0x96;";
    var VB = ".photo.163.com/anony/imgoperate/cropuserdefinesize?sitefrom=lofterblog&userdefinesize=164x164x1x90;500x10000x0x96;1680x10000x0x96&imgurl=";
    var bnY = ".photo.163.com/anony/imgoperate/cropuserdefinesize?sitefrom=lofterblog&userdefinesize=164x164x1x90;500x10000x0x96;1680x10000x0x96&stamptype=lofter&imgurl=";
    var Lo = location.dirhost + "/rsc/img/common/empty.png";
    var oX = location.dirhost + "/rsc/swf/";
    if (B.da) {
        oX = "http://www.lofter.com/rsc/swf/"
    }
    var xr = E.ft('<div id="${id}" class="photoItem"><div class="move">&nbsp;</div><div class="itemWrap"><img class="ztag" onload="loft.np.w.g.onImgLoad(this)" src="${imgurl}" smallsrc="${smallsrc|default:\'\'}" middlesrc="${middlesrc|default:\'\'}" ><div class="operatebar"><span class="operate remove f-pbicon" onclick="loft.np.w.g.removeItem(\'${id}\',event)" hidefocus="true">删除</span><div class="operate imgdesc"><input class="hiddendesc ztag" type="hidden" value="${caption}" /><span class="editdesc f-pbicon" onclick="loft.np.w.g.editPhotoDesc(\'${id}\',this,event)" hidefocus="true">添加描述</span></div><span class="operate clockwise f-pbicon" onclick="loft.np.w.g.clockwiseRotate(\'${id}\',event)" hidefocus="true">旋转</span></div><div class="uploadinfo ztag"><div class="infoicon f-pbicon"></div><div class="infotext ztag"></div></div><div style="display:none" class="hidepartimg ztag" hidefocus="true">其余部分发布后可完整显示</div><div class="sortcover">&nbsp;</div></div></div>');
    var bXo = function(bk) {
        var bJw = {};
        var bHl = E.bj(bk, "ztag") || [];
        var Q = 0;
        bJw["imgNode"] = bHl[Q++];
        bJw["hiddenDesc"] = bHl[Q++];
        bJw["uploadInfo"] = bHl[Q++];
        bJw["infoText"] = bHl[Q++];
        bJw["hidePartImg"] = bHl[Q++];
        return bJw
    };
    P(N.ui).fx('#<uispace>{color:#444;font-size:12px;font-family:"Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .photowrap{}#<uispace> .photowrap .photoList{padding-bottom:4px;margin:-4px -10px 0 0;}#<uispace> .photowrap .addPhotoBar{position:relative;z-index:1;width:500px;height:312px;background:#fff url("http://l.bst.126.net/rsc/img/newpublish/firstaddbg.png") 0 0 no-repeat;}#<uispace> .photowrap .addPhotoBar:hover,#<uispace> .photowrap .addPhotoBar.js-flashhover{background-color:#f8f8f8;}#<uispace> .addPhotoBar .dropPhotoArea{position:absolute;left:0;right:0;top:-10px;bottom:-10px;z-index:15;}#<uispace> .addPhotoBar .dropPhotoArea .tipcover{position:relative;left:0;top:0;z-index:11;width:100%;height:100%;background-color:#000;opacity:0.5;filter:alpha(opacity=50);}#<uispace> .addPhotoBar .dropPhotoArea .tipmsg,#<uispace> .addPhotoBar .dropPhotoArea .tiptxt{position:absolute;left:0;right:0;top:50%;z-index:12;height:70px;line-height:70px;margin-top:-35px;text-align:center;font-size:24px;color:#fff;}#<uispace> .addPhotoBar .dropPhotoArea .tipmsg{display:none;}#<uispace> .photowrap .addPhotoBar .flashwrap{position:relative;left:0;top:0;z-index:10;width:100%;height:100%;overflow:hidden;/*opacity:0;*/opacity:0.001;}#<uispace> .photowrap .addPhotoBar .flashwrap object,#<uispace> .photowrap .addPhotoBar .flashwrap embed{/*opacity:0;*/opacity:0.001;}#<uispace> .photowrap .addPhotoBar .addbtn{position:absolute;left:197px;top:135px;z-index:5;width:100px;height:80px;}#<uispace> .photowrap .addPhotoBar .addbtn .addicon{width:51px;height:43px;/*margin:0 auto;*/margin-left:24px;background-position:-2px -497px;}#<uispace> .photowrap .addPhotoBar .addbtn .addtext{height:35px;line-height:35px;color:#aaa;font-size:14px;text-align:center;}#<uispace> .photowrap .flashinfo{display:none;width:500px;height:80px;line-height:80px;background:#ededed;opacity:0.5;}#<uispace> .photowrap .flashinfo .infoicon{}#<uispace> .photowrap .flashinfo .infotext{color:#666;font-size:13px;text-align:center;}#<uispace> .photowrap .flashinfo .infotext a{color:#333;}#<uispace> .photowrap .photoList .photoItem{position:relative;z-index:100;float:left;width:96px;height:96px;padding:4px 5px 0 0;}#<uispace> .photowrap .photoList .photoItem.js-photoitemhover{z-index:99999;}#<uispace> .photowrap .photoList .photoItem .itemWrap{position:relative;z-index:10;width:100%;height:100%;}#<uispace> .photowrap .photoList .photoItem .move{display:none;position:absolute;left:0;top:4px;z-index:20;width:96px;height:66px;cursor:move;opacity:0;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .move{display:block;}#<uispace> .photowrap .photoList .photoItem img{display:block;width:96px;height:96px;}#<uispace> .photowrap .photoList .photoItem .uploadinfo{display:none;position:absolute;left:50%;top:50%;z-index:5;width:50px;height:50px;margin:-25px 0 0 -25px;}#<uispace> .photowrap .photoList .photoItem .uploadinfo .infoicon{width:100%;height:100%;background-position:-4px -690px;}#<uispace> .photowrap .photoList .photoItem .uploadinfo .infotext{position:absolute;left:50%;top:50%;width:60px;height:20px;line-height:20px;margin:-10px 0 0 -30px;color:#333;font-size:12px;text-align:center;}#<uispace> .photowrap .photoList .photoItem .operatebar{display:none;position:absolute;right:0;top:0;z-index:10;height:30px;margin-left:-10px;}#<uispace> .photowrap .photoList .photoItem:hover .operatebar,#<uispace> .photowrap .photoList .photoItem.js-photoitemhover .operatebar{display:block;}#<uispace> .photowrap .photoList .photoItem .operatebar .operate{float:right;width:30px;height:30px;margin-left:3px;text-indent:-9999px;cursor:pointer;}#<uispace> .photowrap .photoList .photoItem .operatebar .imgdesc{display:none;text-indent:0;cursor:default;}#<uispace> .photowrap .photoList .photoItem .operatebar .imgdesc .editdesc{float:right;width:30px;height:30px;text-indent:-9999px;cursor:pointer;}#<uispace> .photowrap .photoList .photoItem .operatebar .remove{background-position:-1px -208px;}#<uispace> .photowrap .photoList .photoItem .operatebar .imgdesc .editdesc{background-position:-1px -304px;}#<uispace> .photowrap .photoList .photoItem.js-hasimgdesc .operatebar .imgdesc .editdesc{background-position:-69px -304px;}#<uispace> .photowrap .photoList .photoItem .operatebar .clockwise{background-position:-1px -400px;}#<uispace> .photowrap .photoList .photoItem .sortcover{display:none;position:absolute;left:0;top:0;z-index:15;width:96px;height:96px;background-color:#fff;opacity:0.5;}#<uispace> .photowrap .photoList .photoItem.js-sortselected{}#<uispace> .photowrap .photoList .photoItem.js-sortselected .sortcover{display:block;}#<uispace> .photowrap.js-singlePhoto{}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem{float:none;width:500px;height:auto;padding:0;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem .itemWrap{min-height:30px;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem img{width:auto;height:auto;max-width:500px;margin:0 auto;/*width:500px;height:auto;*/}#<uispace> .photowrap.js-singlePhoto .addPhotoBar,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar{height:50px;margin-top:20px;background:#fff url("http://l.bst.126.net/rsc/img/newpublish/goonaddbg.png") 0 0 no-repeat;}#<uispace> .photowrap.js-singlePhoto .addPhotoBar .addbtn,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar .addbtn{left:210px;top:10px;widh:100px;height:30px;line-height:30px;}#<uispace> .photowrap.js-singlePhoto .addPhotoBar .addbtn .addicon,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar .addbtn .addicon{position:absolute;left:0;top:6px;width:20px;height:20px;margin-left:0;background-position:-1px -606px;}#<uispace> .photowrap.js-singlePhoto .addPhotoBar .addbtn .addtext,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar .addbtn .addtext{position:absolute;left:28px;top:0;height:30px;line-height:30px;}#<uispace> .photowrap.js-moreThanOnePhoto .photoItem .operatebar .imgdesc{display:block;}#<uispace> .photowrap .photoItem.js-uploaderror .itemWrap,#<uispace> .photowrap .photoItem.js-photouploading .itemWrap{background-color:#f3f3f3;}#<uispace> .photowrap .photoItem.js-uploaderror .operatebar .imgdesc,#<uispace> .photowrap .photoItem.js-uploaderror .operatebar .clockwise,#<uispace> .photowrap .photoItem.js-photouploading .operatebar .imgdesc,#<uispace> .photowrap .photoItem.js-photouploading .operatebar .clockwise{display:none;}#<uispace> .photowrap .photoItem.js-photouploading .uploadinfo{display:block;}#<uispace> .photowrap.js-singlePhoto .photoItem.js-uploaderror img,#<uispace> .photowrap.js-singlePhoto .photoItem.js-photouploading img{height:312px;}#<uispace> .photowrap.js-singlePhoto .photoItem.js-photouploading .uploadinfo .infoicon{}#<uispace> .photowrap .photoItem.js-uploaderror .uploadinfo{display:block;}#<uispace> .photowrap .photoItem.js-uploaderror .uploadinfo .infoicon{background-position:1px -803px;}#<uispace> .photowrap .photoItem.js-uploaderror .uploadinfo .infotext{top:58px;opacity:0.5;font-size:13px;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .operatebar{top:auto;bottom:0;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem .itemWrap{max-height:' + cqw + 'px;overflow:hidden;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem .itemWrap .hidepartimg{position:absolute;left:0;bottom:0;z-index:10;width:500px;height:60px;line-height:60px;color:#ccc;font-size:16px;text-align:center;background:url("http://l.bst.126.net/rsc/img/newpublish/hidepartimg.png") 0 0 no-repeat;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .itemWrap .hidepartimg{visibility:hidden;}#<uispace> .photowrap.js-exceedMaxPhotoNum .addPhotoBar{height:0;margin-bottom:-20px;border:none;}#<uispace> .photowrap.js-exceedMaxPhotoNum .addPhotoBar .addbtn{display:none;}#<uispace> .photowrap.js-exceedMaxPhotoNum .addPhotoBar .dropPhotoArea{visibility:hidden;}#<uispace> .photowrap.js_isCitePost .addPhotoBar{display:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem .move{display:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem .itemWrap .operatebar,#<uispace> .photowrap.js_isCitePost .photoList .photoItem:hover .itemWrap .operatebar,#<uispace> .photowrap.js_isCitePost .photoList .photoItem.js-photoitemhover .itemWrap .operatebar{display:none;}#<uispace> .photowrap .photoList.js-onsortdraging .photoItem .operatebar,#<uispace> .photowrap .photoList.js-onsortdraging .photoItem:hover .operatebar,#<uispace> .photowrap .photoList.js-onsortdraging .photoItem.js-photoitemhover .operatebar{display:none;}#<uispace> .photowrap.js_isCitePost{position:relative;z-index:100;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem{display:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem:first-child{display:block;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem img{width:96px;height:96px;margin:0;max-width:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem .itemWrap .hidepartimg{display:none;}#<uispace> .photowrap.js_isCitePost .totalphoto{display:none;position:absolute;left:71px;top:71px;z-index:120;width:20px;height:20px;line-height:20px;}#<uispace> .photowrap.js_isCitePost .totalphoto .totalbg,#<uispace> .photowrap.js_isCitePost .totalphoto .totalnum{position:absolute;left:0;top:0;width:100%;height:100%;}#<uispace> .photowrap.js_isCitePost .totalphoto .totalbg{opacity:0.5;filter:alpha(opacity=50);background-position:-65px -313px;}#<uispace> .photowrap.js_isCitePost .totalphoto .totalnum{overflow:hidden;text-align:center;white-space:nowrap;color:#fff;font-size:10px;}#<uispace> .photowrap .addPhotoBar .addphotobarcover{display:none;}#<uispace> .photowrap .photoList .photoItem .move{opacity:0.0001;background:url("http://l.bst.126.net/rsc/img/empty.png") 0 0 repeat;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .operatebar{background:url("http://l.bst.126.net/rsc/img/empty.png") 0 0 repeat;}#<uispace> .html5flashcontainer{width:100%;height:100%;}#<uispace> .m-html5imgupload{display:none;width:100%;height:100%;cursor:pointer;background:url(http://l.bst.126.net/rsc/img/common/empty.png) 0 0 repeat;}#<uispace> .m-html5imgupload .imguploadbtn{width:100%;height:100%;}#<uispace> .m-html5imgupload .imguploadinputwrap{width:0;height:0;overflow:hidden;}#<uispace> .m-html5imgupload .imguploadinput{width:100%;height:100%;cursor:pointer;}#<uispace> .js-usehtml5upload .m-flashimgupload{width:0;height:0;overflow:hidden;}#<uispace> .js-usehtml5upload .m-html5imgupload{display:block;}', bHu);
    var VE = {
        "-100": "IO异常",
        "-101": "上传失败！可能因代理服务器导致上传错误",
        "-102": "数据解析异常",
        "-103": "上传失败！可能因网络不稳定导致上传错误",
        "-104": "上传超时",
        0 : "单个文件过长",
        1 : "包段的content type错误",
        2 : "网络超时",
        3 : "数据包整体过长",
        4 : "不支持的编码形式",
        5 : "相册不存在",
        6 : "上传包格式错误",
        7 : "相册内照片过多",
        12 : "图片文件格式错误",
        13 : "SID错误",
        14 : "上传临时文件无法获取异常",
        15 : "MD5计算错误",
        16 : "UFS 系统插入异常",
        17 : "Cache文件更新并提交异常",
        18 : "上传者权限错误",
        19 : "头像文件大小错误",
        20 : "相片不存在",
        21 : "您上传的图片中含有不恰当词汇",
        22 : "空间总容量超限异常",
        23 : "该帐号受到上传限制，每月最多可上传200MB",
        24 : "上传受到限制，可能是由于你在博客发布违规内容所导致",
        25 : "当前插件不是最新版本，请升级新版后再进行上传",
        400 : "请求错误",
        401 : "资源禁用，您的相册正在迁移中，稍后重试",
        403 : "资源禁用",
        404 : "资源无法读取",
        500 : "内部错误",
        506 : "登录信息异常，请重新登录",
        1e4: "图片上传发生未知异常"
    };
    p.CH = C();
    cS = p.CH.bi(P(N.ui).ga, true);
    Vv = p.CH.bw;
    cS.bq = function(bl, I) {
        I = I || {};
        this.tx = "http://upload" + tx;
        this.VB = "http://upload" + VB;
        this.bnY = "http://upload" + bnY;
        this.cCZ();
        this.dB();
        this.fo = [];
        this.im = {};
        this.Lr = {
            tag: "photoItem",
            handler: "move",
            selected: dnB,
            ondragsortitem: this.dnA.bHk(this),
            ondropsortitem: this.dnz.bHk(this)
        };
        this.bHr(bl, I);
        this.oK = {};
        this.sI = {};
        this.cmL = {};
        this.bTI = {};
        this.bnM();
        this.Wa();
        if (!this.gn && this.bX != "REBLOG" && !!loft.w.Cs) {
            var bnW = {
                uploadUrl: this.tx + "&responsetype=json",
                selectFile: null,
                tipContainer: this.bnV,
                dragContainer: this.Cg,
                ondocdragenter: this.bnU.bHk(this),
                ondocdragleave: this.bnT.bHk(this),
                ondocdrop: this.bnS.bHk(this),
                isExceedMaxPhotoNum: this.bnR.bHk(this),
                getAvailablePhotoNum: this.dny.bHk(this),
                maxFileSize: bTF * 1024 * 1024,
                onexceedmaxfilesize: this.cDg.bHk(this),
                cbUploadStart: this.zg.bHk(this),
                cbUploadProgress: this.Kg.bHk(this),
                cbUploadComplete: this.bnQ.bHk(this),
                cbUploadError: this.zM.bHk(this)
            };
            if (ceC() && !cBL()) {
                this.dnw = E.be("imguploadbtn");
                this.bXW = E.be("imguploadinput");
                this.dnv = E.be("imguploadinputwrap");
                bnW.selectFile = this.bXW;
                V.bHo(this.dnw, "click",
                function(bHm) {
                    V.bb(bHm);
                    this.bXW.value = "";
                    if ( !! this.bXW.value) {
                        V.bJv(this.bXW);
                        E.hE(this.bXW);
                        this.dnv.innerHTML = '<input id="imguploadinput2" class="imguploadinput" type="file" accept="image/*" multiple="">';
                        this.bXW = E.be("imguploadinput2");
                        if ( !! this.bnP) {
                            this.bnP.dnW(this.bXW)
                        }
                    }
                    this.bXW.click()
                }.bHk(this))
            }
            this.bnP = loft.w.Cs.bHk(bnW)
        }
    };
    cS.dnA = function(cmu) {
        if ( !! cmu) {
            E.ba(cmu, cQz)
        }
    };
    cS.dnz = function(cmu) {
        if ( !! cmu) {
            E.bf(cmu, cQz)
        }
    };
    cS.cCZ = function() {
        window.uploadProxyDomain = window.uploadProxyDomain || "";
        if ( !! window.uploadProxyDomain) {
            this.tx = "http://" + window.uploadProxyDomain + tx;
            this.VB = "http://" + window.uploadProxyDomain + VB;
            this.bnY = "http://" + window.uploadProxyDomain + bnY;
            return
        }
        if (!loft.c.cm || !loft.c.cm.email) return;
        var bIT = bWQ(loft.c.cm.email);
        if ( !! bIT) {
            var bp = "http://upload.photo.163.com/" + bIT + "/proxydomain?responsetype=js";
            J.Ty(bp,
            function() {
                window.uploadProxyDomain = window.uploadProxyDomain || "upload";
                this.tx = "http://" + window.uploadProxyDomain + tx;
                this.VB = "http://" + window.uploadProxyDomain + VB;
                this.bnY = "http://" + window.uploadProxyDomain + bnY
            }.bHk(this))
        }
    };
    cS.bHC = function(bl, I) {
        Vv.bHC.call(this, bl, I);
        var zI = this.cms();
        if (zI > 1) {
            window.setTimeout(function() {
                this.zi()
            }.bHk(this), 500)
        }
    };
    cS.cK = function() {
        if ( !! this.bnP) {
            this.bnP = this.bnP.cK()
        }
        this.FI.innerHTML = "";
        this.tw.style.csstext = "";
        this.FI.style.csstext = "";
        E.bf(this.tw, Vx);
        E.bf(this.tw, cqF);
        E.bf(this.tw, Io);
        E.bf(this.Y, "js-animateState0  js-animateState1  js-animateState2  js-animateState3  js-animateState4  js-animateState5");
        Vv.cK.call(this)
    };
    cS.bz = function(I) {
        I = I || O;
        Vv.bz.call(this);
        this.Cg = I.dragContainer;
        this.xJ = I.maxPhotoNum || xJ;
        this.cfE = I.enableAnimate || false;
        this.bX = I.actionType || "";
        this.gn = I.isCitePost || false;
        this.gt = I.isContribute || false;
        if ( !! this.gn || this.bX == "REBLOG") {
            E.ba(this.tw, Vy)
        } else {
            E.bf(this.tw, Vy)
        }
        var fq, hg;
        if (U.co(I.photoLinks, "string")) {
            try {
                fq = U.bHx(I.photoLinks)
            } catch(e) {}
        } else {
            fq = I.photoLinks
        }
        if ( !! I.photoCaptions && U.co(I.photoCaptions, "string")) {
            try {
                hg = U.bHx(I.photoCaptions)
            } catch(e) {}
        } else {
            hg = I.photoCaptions
        }
        if ( !! I.photoLinks) this.Lu(fq, hg);
        this.bHo("onuploadstart", I.onuploadstart || F);
        this.bHo("onchoosephoto", I.onchoosephoto || F);
        this.bHo("onremovephoto", I.onremovephoto || F);
        this.bHo("oneditphotodesc", I.oneditphotodesc || F);
        this.bHo("onclosephotodesc", I.onclosephotodesc || F)
    };
    cS.cU = function() {
        return bHu + " photomanager"
    };
    cS.cM = function() {
        var bmI = this.bmH();
        if (ceC() && !cBL()) {
            bmI = '<div id="html5flashcontainer" class="html5flashcontainer js-usehtml5upload"><div id="html5imgupload" class="m-html5imgupload"><div id="imguploadbtn" class="imguploadbtn"></div><div id="imguploadinputwrap" class="imguploadinputwrap"><input id="imguploadinput" class="imguploadinput" type="file" accept="image/*" multiple=""></div></div>' + '<div class="m-flashimgupload">' + bmI + "</div></div>"
        }
        return '<div class="photowrap ztag"><div class="photoList clearfix ztag"></div><div class="addPhotoBar ztag"><div style="display:none" class="dropPhotoArea ztag"><div class="tipcover">&nbsp;</div><div class="tiptxt ztag">拖放图片到这里，直接上传</div><div class="tipmsg">最多只能上传10张图片</div></div><div class="flashwrap">' + bmI + '</div><div class="addbtn ztag"><div class="addicon f-pbicon ztag"></div><div class="addtext ztag">添加一张图片</div></div><div class="addphotobarcover"></div></div><div class="flashinfo ztag"><div class="infoicon f-pbicon"></div><div class="infotext ztag"></div></div><div class="totalphoto ztag"><span class="icon2-8 totalbg"></span><span class="totalnum ztag"></span></div></div>'
    };
    cS.bmH = function() {
        this.ces = "flashId_" + U.cA();
        return '<object id="obj_' + this.ces + '" name="obj_' + this.ces + '" hidefocus="true" height="312" width="500" type="application/x-shockwave-flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + oX + "flash_upload_basic.swf?v=" + (new Date).getTime() + '"><param name="quality" value="high"><param name="allowscriptaccess" value="always"><param name="wmode" value="transparent"><param name="flashvars" value="compressQuality=96&width=90&height=30&cbNameSpace=loft.np.w.g&maxWidth=1680&maxHeight=10000&uploadExif=true&uploadUrl=' + encodeURIComponent(this.tx) + '"><embed id="' + this.ces + '" name="' + this.ces + '" hidefocus="true" height="312" width="500" flashvars="compressQuality=96&width=90&height=30&cbNameSpace=loft.np.w.g&maxWidth=1680&maxHeight=10000&uploadExif=true&uploadUrl=' + encodeURIComponent(this.tx) + '" allowscriptaccess="always" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="' + oX + 'flash_upload_basic.swf?v=20140618"></object>'
    };
    cS.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        var Q = 0;
        this.tw = bHl[Q++];
        this.FI = bHl[Q++];
        this.bGO = bHl[Q++];
        this.Gk = bHl[Q++];
        this.bnV = bHl[Q++];
        this.boM = bHl[Q++];
        this.dyQ = bHl[Q++];
        this.cRC = bHl[Q++];
        this.cpY = bHl[Q++];
        this.cer = bHl[Q++];
        this.cRJ = bHl[Q++];
        this.dns = bHl[Q++]
    };
    cS.Wa = function() {
        if ( !! this.LS) this.LS = window.clearTimeout(this.LS);
        var bne = this.bnd;
        if (B.da || B.coJ) {
            this.kK = window["obj_" + this.ces]
        } else {
            this.kK = document[this.ces]
        }
        if (!this.kK && !bne) {
            this.LS = window.setTimeout(this.Wa.bHk(this), 100)
        } else if ( !! this.kK) {
            try {
                this.kK.style.display = "block";
                this.bnD()
            } catch(e) {}
        }
    };
    cS.cDH = function() {
        if (p.completeFlashVersion !== undefined && !U.co(p.completeFlashVersion, "undefined")) return p.completeFlashVersion;
        var ed = 0,
        MA = "";
        try {
            ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (ed) {
                MA = ed.GetVariable("$version")
            }
        } catch(e) {
            ed = navigator.plugins["Shockwave Flash"];
            if (ed) {
                MA = ed.description
            }
        }
        p.completeFlashVersion = MA;
        return MA
    };
    cS.bnr = function() {
        if (p.flashVersion !== undefined && !U.co(p.flashVersion, "undefined")) return p.flashVersion;
        var ed = 0,
        MA = 0;
        try {
            ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (ed) {
                MA = +ed.GetVariable("$version").match(/\d+/)
            }
        } catch(e) {
            ed = navigator.plugins["Shockwave Flash"];
            if (ed) {
                MA = +ed.description.match(/\d+/)
            }
        }
        p.flashVersion = MA;
        return MA
    };
    cS.bnD = function() {
        if (ceC() && !cBL()) {
            return
        }
        var bnv = "<span>当前浏览器没有安装FLASH，无法上传图片，请更换其他浏览器，或&nbsp;</span>";
        var bnt = '<a target="_blank" href="http://get.adobe.com/cn/flashplayer/ ">直接安装&gt;&gt;</a>';
        var bGL = "<span>当前FLASH版本较低，升级可以提升图片上传速度及图片质量。</span>";
        var bGN = '<a target="_blank" href="http://get.adobe.com/cn/flashplayer/ ">点击升级&gt;&gt;</a>';
        var Bz = this.bnr() || 0;
        if (Bz == 0 && !B.oc) {
            this.cer.innerHTML = bnv + bnt;
            var bnh = U.ot("no-flashveriontipclosed") || "0";
            if (bnh != "1") {
                this.cpY.style.display = "block"
            } else {
                this.cpY.style.display = "none"
            }
            this.boM.style.opacity = "0.5";
            return
        } else {
            this.boM.style.opacity = ""
        }
        if (Bz < 11 && !B.oc) {
            var bng = U.ot("flashveriontipclosed") || "0";
            if (bng != "1") {
                this.cer.innerHTML = bGL + bGN;
                this.ym.style.display = "block"
            } else {
                this.cpY.style.display = "none"
            }
        } else {
            this.cpY.style.display = "none"
        }
    };
    cS.dB = function() {
        var bJ = P("loft.np.w.g");
        bJ.getUploadUrl = this.zK.bHk(this);
        bJ.uploadStart = this.zg.bHk(this);
        bJ.uploadComplete = this.zf.bHk(this);
        bJ.uploadError = this.zM.bHk(this);
        bJ.showProgress = this.Kg.bHk(this);
        bJ.removeItem = this.bmY.bHk(this);
        bJ.setSwfIsReady = this.bmW.bHk(this);
        bJ.isReady = this.bmV.bHk(this);
        bJ.printFlashLog = this.th.bHk(this);
        bJ.onImgLoad = this.bmU.bHk(this);
        bJ.mouseOver = this.Kv.bHk(this);
        bJ.mouseOut = this.Kw.bHk(this);
        bJ.clockwiseRotate = this.bmT.bHk(this);
        bJ.cbPhotoRotateCB = this.Mj.bHk(this);
        bJ.editPhotoDesc = this.dnq.bHk(this);
        bJ.cbMakeImageStamp = this.bmQ.bHk(this)
    };
    cS.bmU = function(bk) {
        if (!bk) return;
        var dz = bk.width || bk.naturalWidth || 1;
        var eT = bk.height || bk.naturalHeight || 1;
        var bJw = bXo(bk.parentNode);
        var cEx = bJw["hidePartImg"];
        if (!cEx) return;
        var bMK = eT;
        if (dz > 500) {
            bMK = 500 * eT / dz
        }
        if (bMK > cqw) {
            cEx.style.display = ""
        } else {
            cEx.style.display = "none"
        }
        var cEy = dz,
        cEz = bMK;
        if (cEy > 500) cEy = 500;
        if (cEz > cqw) cEz = cqw;
        if (bk.src != cqH && bk.src != loft.x.bJR(cqH, 96, 96, true)) {
            window.setTimeout(function(bk) {
                bk.style.opacity = 1;
                window.setTimeout(function() {
                    E.bf(bk.parentNode.parentNode, cnD)
                }.bHk(this), 200)
            }.bHk(this, bk), 210)
        }
        this.cEA({
            imgNode: bk,
            photoItemWidth: cEy,
            photoItemHeight: cEz
        })
    };
    cS.cEA = function(I) {
        var bHl = E.bj(this.FI, "photoItem");
        this.FI.style.overflow = "";
        if (!bHl || bHl.length <= 0 || !bHl[0]) {
            this.FI.style.height = 0
        } else if (bHl.length == 1) {
            if (this.gn || this.bX == "REBLOG") {
                this.FI.style.height = "100px";
                this.tw.style.height = "100px"
            } else {
                if (E.cr(bHl[0], cdH)) {
                    this.FI.style.height = "312px";
                    this.tw.style.height = ""
                } else {
                    if ( !! I && I.photoItemHeight) {
                        this.FI.style.height = I.photoItemHeight + "px";
                        this.tw.style.height = I.photoItemHeight + 73 + "px"
                    } else {
                        if ( !! bHl[0].clientHeight) {
                            this.FI.style.height = bHl[0].clientHeight + "px";
                            this.tw.style.height = bHl[0].clientHeight + 73 + "px"
                        }
                    }
                }
            }
        } else {
            if (this.gn || this.bX == "REBLOG") {
                this.FI.style.height = "100px";
                this.tw.style.height = "100px"
            } else {
                if (bHl.length < 6) {
                    this.FI.style.height = "100px";
                    this.tw.style.height = "173px"
                } else {
                    if (this.gn || this.bX == "REBLOG") {
                        this.FI.style.height = "100px";
                        this.tw.style.height = "100px"
                    } else {
                        this.FI.style.height = "200px";
                        if (bHl.length == 10) {
                            this.tw.style.height = "220px"
                        } else {
                            this.tw.style.height = "273px"
                        }
                    }
                }
            }
        }
        if ( !! this.cEC) this.cEC = window.clearTimeout(this.cEC);
        this.cEC = window.setTimeout(function(I) {
            this.FI.style.overflow = "visible";
            var zI = this.caS() || 0;
            if (zI > 1) this.zi()
        }.bHk(this, I), 200)
    };
    cS.th = function(du) {
        var du = "photoupload_" + du;
        J.br(location.dwr, "LoggerBean", "print", du, F)
    };
    cS.cEE = function() {
        J.br(location.dwr, "LoggerBean", "upload")
    };
    cS.cEF = function(bKs) {
        if ( !! bKs) bKs.userAgent = navigator.userAgent || "";
        J.br(location.dwr, "LoggerBean", "uploadFail", bKs)
    };
    cS.cEH = function(bt) {
        if (this.bTI[bt] == "uploading") {
            J.br(location.dwr, "LoggerBean", "uploadCancel")
        }
    };
    cS.bmW = function() {
        this.bnd = true
    };
    cS.bmV = function() {
        return this.bmN
    };
    cS.bnM = function() {
        this.bmN = true
    };
    cS.Kv = function(Kx) {};
    cS.Kw = function(Kx) {};
    cS.bmK = function(bt) {
        var rD = (new Date).getTime() - this.sI[bt];
        this.th("timeout " + "costTime:" + rD + " id:" + bt)
    };
    cS.zK = function() {
        return this.tx
    };
    cS.zg = function(bt, boB, chQ) {
        var zI = this.cms();
        if (zI <= 0) {
            this.dnn(bt, boB)
        } else {
            this.dnm(bt, boB)
        }
        this.sI[bt] = (new Date).getTime();
        this.oK[bt] = window.setInterval(this.bmK.bHk(this, bt), 4e4);
        this.cmL[bt] = chQ || 0;
        this.bTI[bt] = "uploading";
        this.cEE()
    };
    cS.dnm = function(bt, boB) {
        var zI = this.cms();
        if (zI < 2) {
            this.tw.style.opacity = 0
        }
        window.setTimeout(function(bt, boB) {
            this.dnl(bt, boB);
            window.setTimeout(function(bt, boB) {
                if (this.tw.style.opacity == 0) {
                    this.tw.style.opacity = 1
                }
            }.bHk(this, bt, boB), 100)
        }.bHk(this, bt, boB), 200)
    };
    cS.dnl = function(bt, boB) {
        this.im[bt] = {};
        var bk = this.WS(bt, null);
        var zI = this.caS() || 0;
        if (zI > 1) {
            if (zI == 6) this.cEA()
        }
        this.bh("onuploadstart")
    };
    cS.dnn = function(bt, boB) {
        this.tw.style.height = "";
        E.ba(this.Y, "js-animateState0");
        window.setTimeout(function(bt, boB) {
            E.ba(this.Y, "js-animateState1")
        }.bHk(this, bt, boB), 10);
        window.setTimeout(function(bt, boB) {
            this.dnk(bt, boB)
        }.bHk(this, bt, boB), 200)
    };
    cS.dnk = function(bt, boB) {
        this.im[bt] = {};
        var bk = this.WS(bt, null);
        var zI = this.caS() || 0;
        if (zI > 1) {}
        window.setTimeout(function() {
            E.ba(this.Y, "js-animateState2")
        }.bHk(this), 10);
        window.setTimeout(function() {
            E.ba(this.Y, "js-animateState3");
            window.setTimeout(function() {
                E.ba(this.Y, "js-animateState4");
                this.bh("onuploadstart")
            }.bHk(this), 20)
        }.bHk(this), 200)
    };
    cS.Kg = function(bt, gC) {
        gC = gC || 0;
        if (gC > 100) gC = 100;
        var gK = E.be(bt);
        if ( !! gK) {
            var bJw = bXo(gK);
            var cei = bJw["uploadInfo"];
            var bXT = bJw["infoText"];
            if ( !! cei) {
                cei.title = ""
            }
            if ( !! bXT) {
                bXT.innerText = (gC || 0) + "%"
            }
        }
    };
    cS.zf = function(bt, bK, bH, bIk) {
        if (bK == 999 && !!bH) {
            this.bTI[bt] = "ok"
        } else {
            this.bTI[bt] = "fail"
        }
        window.setTimeout(function(bt, bK, bH, bIk) {
            this.dnh(bt, bK, bH, bIk)
        }.bHk(this, bt, bK, bH, bIk), 600)
    };
    cS.dnh = function(bt, bK, bH, bIk) {
        if ( !! this.oK[bt]) this.oK[bt] = window.clearInterval(this.oK[bt]);
        var gK = E.be(bt);
        if ( !! gK) {
            E.bf(gK, cdH);
            var zI = this.cms();
            if (zI < 2) {
                E.bf(gK, cnD)
            } else {}
            var bJw = bXo(gK);
            var nt = bJw["imgNode"];
            if (bK == 999 && !!bH) {
                bH = this.Mo(bH);
                if ( !! nt) {
                    nt.setAttribute("smallsrc", bH.userDef1Url || Lo);
                    nt.setAttribute("middlesrc", bH.userDef2Url || Lo);
                    this.caS()
                }
                E.ba(this.Y, "js-animateState5");
                var gz = {
                    id: bt,
                    ow: bH.ow,
                    oh: bH.oh,
                    small: bH.userDef1Url || "",
                    middle: bH.userDef2Url || "",
                    orign: bH.userDef3Url || "",
                    photoGarbageIds: bH.photoGarbageIds
                };
                if ( !! bH.raw) {
                    gz.raw = bH.raw;
                    gz.rw = bH.rw;
                    gz.rh = bH.rh
                }
                this.fo.push(gz);
                this.im[bt]["state"] = 0;
                this.im[bt][0] = gz;
                this.bh("onchoosephoto", gz);
                if (bIk == 2) {
                    dnF()
                }
            } else {
                this.zM(bt, bK, 0, bIk)
            }
        } else {
            this.th("id:" + bt + " , 本地htm节点错误：" + bK)
        }
    };
    cS.zM = function(gk, vU, PF, bIk) {
        this.bTI[gk] = "fail";
        var rD = (new Date).getTime() - this.sI[gk];
        var bKs = {};
        bKs.taskId = gk;
        bKs.uploadType = bIk || 0;
        bKs.failType = vU || 0;
        bKs.httpCode = PF || 0;
        bKs.fileSize = this.cmL[gk];
        bKs.flashVer = this.cDH();
        bKs.costTime = rD;
        bKs.uploadUrl = this.tx;
        this.cEF(bKs);
        window.setTimeout(function(gk, vU, PF, bIk) {
            this.dng(gk, vU, PF, bIk)
        }.bHk(this, gk, vU, PF, bIk), 600);
        if (bIk == 2 && vU == 0 && PF == 0) {
            dnG("html5flashcontainer")
        }
    };
    cS.dng = function(gk, vU, PF, bIk) {
        if ( !! this.oK[gk]) this.oK[gk] = window.clearInterval(this.oK[gk]);
        var gK = E.be(gk);
        if ( !! gK) {
            var Mt = VE[vU] || "上传失败";
            var dc = Mt + "！错误码：" + (vU || 0) + ",httpcode:" + (PF || 0);
            var bJw = bXo(gK);
            var cei = bJw["uploadInfo"];
            var bXT = bJw["infoText"];
            if ( !! cei) {
                cei.title = dc
            }
            if ( !! bXT) {
                bXT.innerText = "上传失败"
            }
            E.bf(gK, cdH);
            E.dt(gK, cnD, dnC)
        } else {
            this.th("id:" + gk + " , 本地htm节点错误：" + vU)
        }
    };
    cS.bmY = function(bt, bHm) {
        bHm = bHm ? bHm: window.event;
        if ( !! bHm) V.bb(bHm);
        if ( !! this.bXY) {
            this.bXY = this.bXY.db(this.bXY)
        }
        if ( !! this.oK[bt]) this.oK[bt] = window.clearInterval(this.oK[bt]);
        this.cEH(bt);
        var zI = this.cms();
        if (zI > 0 && !!this.bXZ) {
            this.bXZ = window.clearTimeout(this.bXZ);
            E.ba(this.Y, "js-animateState0  js-animateState3")
        }
        if (zI == 1) {
            this.dnf(bt)
        } else {
            this.dne(bt, zI)
        }
    };
    cS.dne = function(bt, zI) {
        if (zI < 3) {
            this.tw.style.height = "";
            this.tw.style.opacity = 0
        } else {
            var bk = E.be(bt);
            if ( !! bk) bk.style.opacity = 0
        }
        window.setTimeout(function(bt) {
            this.cUa(bt);
            window.setTimeout(function(bt) {
                if (this.tw.style.opacity == 0) {
                    this.tw.style.opacity = 1
                }
            }.bHk(this, bt), 200)
        }.bHk(this, bt), 200)
    };
    cS.dnf = function(bt) {
        this.tw.style.height = "";
        this.tw.style.opacity = 0;
        E.bf(this.Y, "js-animateState5");
        window.setTimeout(function(bt) {
            E.bf(this.Y, "js-animateState4");
            window.setTimeout(function(bt) {
                E.bf(this.Y, "js-animateState3");
                E.bf(this.Y, "js-animateState2");
                window.setTimeout(function(bt) {
                    this.cUa(bt);
                    this.tw.style.opacity = 1
                }.bHk(this, bt), 150)
            }.bHk(this, bt), 200)
        }.bHk(this, bt), 200)
    };
    cS.cUa = function(bt) {
        this.bmJ(bt);
        this.cEA()
    };
    cS.bmJ = function(bt) {
        for (var i = 0; i < this.fo.length; i++) {
            if (this.fo[i].id == bt) {
                this.fo.splice(i, 1);
                break
            }
        }
        var gK = E.be(bt);
        if (!gK) return;
        var bHl = E.bj(gK, "ztag");
        if (E.cr(gK, cdH)) {
            if ( !! this.kK && !!this.kK.cancleTask) {
                try {
                    this.kK.cancleTask(bt)
                } catch(e) {}
            }
        }
        E.hE(gK);
        var zI = this.caS() || 0;
        E.bf(this.Y, "js-animateState1");
        if (zI > 1) this.zi();
        this.bh("onremovephoto")
    };
    cS.Mo = function(bH) {
        if ( !! bH && !!bH.raw) {
            return bH
        }
        var sL = U.bA(bH.ourl || "");
        var bJe = (bH.photoGarbageIds || "").split(",");
        if (! ( !! sL && sL.length > 4 && sL.substring(sL.length - 4) == ".gif")) {
            var cbj = this.cFb(bH, bJe);
            if ( !! cbj) {
                bH = cbj.photo;
                bJe = cbj.gIds
            }
        }
        if ( !! sL && sL.length > 4 && sL.substring(sL.length - 4) == ".gif") {
            bH.userDef2Url = sL;
            bH.userDef3Url = sL;
            var Xa = "";
            for (var i = 0; i < bJe.length; i++) {
                var bo = bJe[i].split(":");
                if (bo[0].toLowerCase() == "ourl") {
                    Xa = bo[1]
                }
            }
            for (var i = 0; i < bJe.length; i++) {
                var bo = bJe[i].split(":");
                if (bo[0].toLowerCase() == "userdef2url" || bo[0].toLowerCase() == "userdef3url") {
                    bo[1] = Xa || -1
                }
                bJe[i] = bo.join(":")
            }
        } else {
            if ( !! sL && sL != "http://") {
                for (var i = 0; i < bJe.length; i++) {
                    var bo = bJe[i].split(":");
                    if (bo[0].toLowerCase() == "ourl") {
                        bo[1] = -1
                    }
                    bJe[i] = bo.join(":")
                }
            }
        }
        bH.photoGarbageIds = bJe.join(",");
        return bH
    };
    cS.cFb = function(bH, bJe) {
        var bTG = U.bA(bH.userDef3Url || "");
        if ( !! bTG && bTG.length > 4 && bTG.substring(bTG.length - 4) == ".gif") {
            bH.userDef2Url = bTG;
            for (var i = 0; i < bJe.length; i++) {
                var bo = bJe[i].split(":");
                if (bo[0].toLowerCase() == "userdef2url") {
                    bo[1] = -1
                }
                bJe[i] = bo.join(":")
            }
            return {
                photo: bH,
                gIds: bJe
            }
        }
    };
    cS.WS = function(bt, bH) {
        var MH = Lo;
        var cFd = Lo;
        var cFm = Lo;
        var bF = "";
        if ( !! bH) {
            var gz = {
                id: bt,
                caption: bH.caption || "",
                ow: bH.ow,
                oh: bH.oh,
                small: bH.small || bH.userDef1Url || "",
                middle: bH.middle || bH.userDef2Url || "",
                orign: bH.orign || bH.userDef3Url || ""
            };
            if ( !! bH.photoGarbageIds) {
                gz.photoGarbageIds = bH.photoGarbageIds
            }
            if ( !! bH.isImgStamped) {
                gz.isImgStamped = bH.isImgStamped
            }
            if ( !! bH.raw) {
                gz.raw = bH.raw;
                gz.rw = bH.rw;
                gz.rh = bH.rh;
                gz.rotate = bH.rotate || 0
            }
            this.fo.push(gz);
            MH = loft.x.bJR(gz.middle, 96, 96, true) || MH;
            cFd = gz.small || cFd;
            cFm = gz.middle || cFm;
            bF = U.ew(U.bA(gz.caption || ""))
        }
        var bk = E.eY(E.dG(xr, {
            id: bt,
            imgurl: MH,
            smallsrc: cFd,
            middlesrc: cFm,
            caption: bF
        }));
        if ( !! bk) {
            if (!bH) {
                var bJw = bXo(bk);
                var nt = bJw["imgNode"];
                var bXT = bJw["infoText"];
                bXT.innerText = "0%";
                E.ba(bk, cnD);
                E.ba(bk, cdH);
                bk.style.opacity = 0;
                window.setTimeout(function() {
                    bk.style.opacity = ""
                }.bHk(this, bk), 100)
            } else {
                E.bf(bk, cnD);
                E.bf(bk, cdH)
            }
            if ( !! bF) {
                E.ba(bk, cqB)
            } else {
                E.bf(bk, cqB)
            }
        }
        this.FI.insertAdjacentElement("beforeEnd", bk);
        return bk
    };
    cS.cms = function() {
        var bHl = E.bj(this.FI, "photoItem") || [];
        return bHl.length || 0
    };
    cS.caS = function() {
        var bHl = E.bj(this.FI, "photoItem") || [];
        if (bHl.length <= 0) {
            E.bf(this.tw, Vx);
            E.bf(this.tw, cqF);
            E.bf(this.tw, Io);
            this.cRC.innerHTML = "添加一张图片";
            return 0
        } else {
            this.cRC.innerHTML = "继续添加"
        }
        if (bHl.length >= this.xJ) {
            E.ba(this.tw, Io)
        } else {
            E.bf(this.tw, Io)
        }
        if (bHl.length == 1) {
            E.dt(this.tw, cqF, Vx)
        } else {
            if (this.cfE && E.cr(this.tw, Vx)) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0
            }
            E.dt(this.tw, Vx, cqF)
        }
        this.dnd(bHl);
        return bHl.length || 0
    };
    cS.dnd = function(bT) {
        if (!bT || bT.length <= 0) return;
        for (var i = 0; i < bT.length; i++) {
            if ( !! bT[i]) {
                var bJw = bXo(bT[i]);
                var nt = bJw["imgNode"];
                var cei = bJw["uploadInfo"];
                var bXT = bJw["infoText"];
                if ( !! nt) {
                    if (bT.length == 1 && !this.gn && this.bX != "REBLOG") {
                        var bKf = nt.getAttribute("middlesrc") || Lo;
                        if (nt.src !== bKf) {
                            nt.src = bKf
                        }
                    } else {
                        var bKf = loft.x.bJR(nt.getAttribute("middlesrc"), 96, 96, true) || Lo;
                        if (nt.src !== bKf) {
                            nt.src = bKf
                        }
                    }
                }
            }
        }
    };
    cS.bmT = function(bt) {
        var di = parseInt(this.im[bt]["state"] || 0);
        var bH = this.im[bt][0];
        if (!bH) {
            E.bd("图片上传完成后才能旋转！", true, false, false, true);
            return
        }
        if (!this.im[bt][di]) {
            return
        }
        E.ef("图片旋转中...", true, true, false, true);
        this.WM(bt);
        di = (di + 1) % 4;
        if (!this.im[bt][di]) {
            if ( !! bH.raw) {
                var bNC = di * 90;
                var gz = {
                    id: bt,
                    ow: bH.ow,
                    oh: bH.oh
                };
                gz.rotate = bNC;
                gz.raw = bH.raw;
                gz.rw = bH.rw;
                gz.rh = bH.rh;
                gz.small = bH.raw + "?imageView&thumbnail=164y164&rotate=" + bNC;
                gz.middle = bH.raw + "?imageView&thumbnail=500x0&rotate=" + bNC;
                gz.orign = bH.raw + "?imageView&thumbnail=1680x0&rotate=" + bNC;
                this.Mj(di, bt, 999, gz, true);
                return
            }
            var bp = this.VB + bH.orign + "&rotatedegree=" + di * 90;
            if ( !! this.kK && !!this.kK.clockwiseRotate) {
                try {
                    this.kK.clockwiseRotate(bt, bp, di, "cbPhotoRotateCB")
                } catch(e) {}
            } else {
                E.bd("旋转失败！", true, false, false, true);
                this.Ml(bt)
            }
        } else {
            this.Mj(di, bt, 999, this.im[bt][di], true)
        }
    };
    cS.WM = function(bt) {
        var gK = E.be(bt);
        if ( !! gK) {
            E.ba(gK, cCk)
        }
    };
    cS.Ml = function(bt) {
        var gK = E.be(bt);
        if ( !! gK) {
            E.bf(gK, cCk)
        }
    };
    cS.Mj = function(di, bt, bK, bH, bmM) {
        E.gI(true);
        var gK = E.be(bt);
        if ( !! gK) {
            var gz;
            if (bK == 999 && !!bH) {
                if (!bmM && !!bH.userDef1Url) {
                    bH = this.Mo(bH);
                    gz = {
                        id: bt,
                        ow: bH.ow,
                        oh: bH.oh,
                        small: bH.userDef1Url || "",
                        middle: bH.userDef2Url || "",
                        orign: bH.userDef3Url || "",
                        photoGarbageIds: bH.photoGarbageIds
                    };
                    if (!this.im[bt][0].photoGarbageIds) {
                        gz.isImgStamped = true
                    }
                } else {
                    gz = bH;
                    gz.id = bt
                }
                var bJw = bXo(gK);
                var nt = bJw["imgNode"];
                if ( !! nt) {
                    nt.setAttribute("smallsrc", gz.small || Lo);
                    nt.setAttribute("middlesrc", gz.middle || Lo);
                    this.caS()
                }
                this.bmL(gz);
                this.im[bt]["state"] = di;
                this.im[bt][di] = gz;
                this.bh("onchoosephoto", gz)
            } else {
                E.bd("旋转失败！", true, false, false, true)
            }
        }
        this.Ml(bt)
    };
    cS.bmL = function(gz) {
        if (!gz || !gz.id) return;
        for (var i = 0; i < this.fo.length; i++) {
            if (this.fo[i].id == gz.id) {
                this.fo[i] = gz;
                break
            }
        }
    };
    cS.dnq = function(bt, As, bHm) {
        V.bb(bHm);
        if (!As || !As.parentNode || !As.parentNode.parentNode || !As.parentNode.parentNode.parentNode || !As.parentNode.parentNode.parentNode.parentNode) return;
        var bNE = As.parentNode;
        var cFr = As.parentNode.parentNode.parentNode;
        var gK = As.parentNode.parentNode.parentNode.parentNode;
        var bJw = bXo(cFr);
        var bYn = bJw["hiddenDesc"];
        var cUL = "";
        if ( !! bYn) {
            cUL = bYn.value || ""
        }
        var I = {
            imgDescNode: bNE,
            photodesc: cUL,
            singleton: true,
            onupdatedesc: this.crt.bHk(this),
            onclosedesclayer: this.dnc.bHk(this)
        };
        if ( !! this.bXY) {
            this.bXY = this.bXY.db(this.bXY)
        }
        this.bXY = p.crD.bG(bNE, I);
        if ( !! this.pZ) this.pZ.mM();
        E.ba(gK, cQw);
        if (B.da) {
            E.ba(this.tw, "js-hasphotoitemhover")
        }
        this.bh("oneditphotodesc")
    };
    cS.crt = function(bNE, jG) {
        var gK;
        if ( !! bNE) {
            var bYn = E.bj(bNE, "hiddendesc")[0];
            if ( !! bYn) {
                bYn.value = jG || ""
            }
        }
        if ( !! bNE && !!bNE.parentNode && !!bNE.parentNode.parentNode && !!bNE.parentNode.parentNode.parentNode) {
            gK = bNE.parentNode.parentNode.parentNode
        }
        if ( !! jG) {
            E.ba(gK, cqB);
            E.bY("图片描述已提交", true, false, false, true)
        } else {
            E.bf(gK, cqB)
        }
    };
    cS.dnc = function(bNE, jG) {
        var gK, cFr;
        if ( !! bNE && !!bNE.parentNode && !!bNE.parentNode.parentNode && !!bNE.parentNode.parentNode.parentNode) {
            cFr = bNE.parentNode.parentNode;
            gK = bNE.parentNode.parentNode.parentNode;
            E.bf(gK, cQw)
        }
        if ( !! this.pZ) this.pZ.yG();
        if (B.da) {
            E.bf(this.tw, "js-hasphotoitemhover")
        }
        this.bh("onclosephotodesc")
    };
    cS.bmE = function(IZ) {
        if (!IZ) return 0;
        var fC = 0;
        if (IZ.length > 0) {
            var bHl;
            for (var i = 0; i < IZ.length; i++) {
                if ( !! IZ[i] && (E.cr(IZ[i], cdH) || E.cr(IZ[i], cCk))) {
                    fC++;
                    break
                }
            }
        }
        return fC
    };
    cS.zi = function() {
        if (!this.pZ) {
            this.pZ = p.bUn.bG(this.FI, this.Lr)
        } else {
            this.pZ.gH()
        }
    };
    cS.Lu = function(jh, MC) {
        jh = jh || [];
        MC = MC || [];
        for (var i = 0; i < jh.length && i < this.xJ; i++) {
            jh[i].caption = MC[i] || "";
            var bt = jh[i].id || "photoId-" + U.cA();
            this.WS(bt, jh[i]);
            this.im[bt] = {};
            this.im[bt]["state"] = 0;
            this.im[bt][0] = jh[i];
            var cUZ = jh[i].orign || "";
            var cby;
            if (loft.x.ceZ(cUZ)) {
                cby = loft.x.dwG(cUZ, jh[i]);
                if ( !! cby && !!cby["imageView"]) {
                    jh[i].raw = cby.raw;
                    jh[i].rotate = cby["imageView"]["rotate"] || 0
                }
            }
            if ( !! jh[i].raw) {
                var di = (jh[i].rotate || 0) / 90;
                this.im[bt]["state"] = di;
                this.im[bt][di] = jh[i];
                if (di != 0) {
                    var bH = jh[i];
                    var gz = {
                        id: bt,
                        ow: bH.ow,
                        oh: bH.oh
                    };
                    gz.rotate = 0;
                    gz.raw = bH.raw;
                    gz.rw = bH.rw;
                    gz.rh = bH.rh;
                    var dyT = loft.x.cKf(cby, 500);
                    var dyU = loft.x.cKf(cby, 1680);
                    gz.small = bH.raw + "?imageView&thumbnail=164y164";
                    gz.middle = bH.raw + "?imageView&thumbnail=500x0";
                    gz.orign = bH.raw + "?imageView&thumbnail=1680x0";
                    this.im[bt][0] = gz
                }
            }
        }
        if ( !! this.gn || this.bX == "REBLOG") {
            if (jh.length > 1) {
                this.dns.innerText = jh.length;
                this.cRJ.style.display = "block"
            } else {
                this.cRJ.style.display = "none"
            }
        }
        var zI = this.caS() || 0;
        if (zI > 0) {
            this.tw.style.height = "auto";
            E.ba(this.Y, "js-animateState1  js-animateState2  js-animateState4  js-animateState5");
            if ( !! this.bXZ) {
                this.bXZ = window.clearTimeout(this.bXZ)
            }
            this.bXZ = window.setTimeout(function() {
                this.bXZ = window.clearTimeout(this.bXZ);
                E.ba(this.Y, "js-animateState0  js-animateState3")
            }.bHk(this), 1500)
        }
    };
    cS.vl = function() {
        var bHn = {};
        var IV = {};
        for (var i = 0; !! this.fo && i < this.fo.length; i++) {
            IV[this.fo[i].id] = this.fo[i]
        }
        var bHl = E.bj(this.FI, "photoItem") || [];
        if (bHl.length == 0) {
            bHn.code = -1;
            return bHn
        }
        if (bHl.length > 0 && this.bmE(bHl) > 0) {
            bHn.code = -2;
            return bHn
        }
        var cf = [];
        for (var k = 0; k < bHl.length; k++) {
            var jG = "";
            var bJw = bXo(bHl[k]);
            var bYn = bJw["hiddenDesc"];
            if ( !! bYn) {
                jG = bYn.value || ""
            }
            if ( !! IV[bHl[k].id]) {
                IV[bHl[k].id].caption = jG;
                cf.push(IV[bHl[k].id])
            }
        }
        bHn.code = 1;
        bHn.photos = cf;
        return bHn
    };
    cS.bmD = function(bT, tJ, I) {
        I = I || {};
        var wf = I.stampString;
        var bc = I.blogId;
        this.Xs = tJ;
        if ( !! this.kK && !!this.kK.postUploadCrossDomain && ( !! wf || !!bc)) {
            this.fo = bT || [];
            this.yo = {};
            this.Xu = this.fo.length;
            try {
                for (var i = 0; i < this.fo.length; i++) {
                    var sL = this.fo[i].orign || "";
                    if ( !! sL && sL.length > 4 && sL.substring(sL.length - 4).toLowerCase() == ".gif") {
                        this.bYw();
                        continue
                    }
                    if (loft.x.ceZ(sL)) {
                        this.bYw();
                        continue
                    }
                    if (!this.fo[i].photoGarbageIds || !!this.fo[i].isImgStamped) {
                        this.bYw();
                        continue
                    }
                    var bt = this.fo[i].id || "photoId-" + U.cA();
                    this.fo[i].id = bt;
                    this.yo[bt] = this.fo[i];
                    var bp = this.bnY + this.fo[i].orign;
                    if ( !! wf) {
                        bp = bp + "&stampstring=" + wf
                    }
                    if ( !! bc) {
                        bp = bp + "&loftdigitmark=" + bc
                    }
                    this.kK.postUploadCrossDomain(bt, bp, "", "cbMakeImageStamp")
                }
            } catch(e) {}
        } else {
            this.Xs()
        }
    };
    cS.bmQ = function(di, bt, bK, bH) {
        if (bK == 999 && !!bH) {
            if ( !! bH.userDef1Url) {
                bH = this.Mo(bH);
                if ( !! this.yo[bt]) {
                    this.yo[bt].small = bH.userDef1Url || "";
                    this.yo[bt].middle = bH.userDef2Url || "";
                    this.yo[bt].orign = bH.userDef3Url || "";
                    this.yo[bt].photoGarbageIds = bH.photoGarbageIds;
                    this.yo[bt].isImgStamped = true
                }
            }
        }
        this.bYw()
    };
    cS.bYw = function() {
        this.Xu--;
        if (this.Xu == 0) {
            var gZ = U.ii(this.fo);
            this.Xs(gZ)
        }
    };
    cS.bnU = function() {
        this.Gk.style.display = "block"
    };
    cS.bnT = function() {
        this.Gk.style.display = "none"
    };
    cS.bnS = function() {
        this.Gk.style.display = "none"
    };
    cS.bnc = function(bHm) {
        this.bnP.bnb(bHm);
        this.Gk.style.display = "none"
    };
    cS.bnQ = function(bt, bH, bIk) {
        var photodata;
        if ( !! bH) {
            bH = "var photodata=" + bH;
            eval(bH || "null")
        }
        if (!photodata || photodata.resultcode != 999) {
            if (!photodata) {
                photodata = {
                    resultcode: 1e4
                }
            }
            this.zM(bt, photodata.resultcode || 0, 0, bIk);
            if (photodata.resultcode == 3) {
                E.bd("图片不能超过" + bTF + "M！", true, false, false, true)
            }
            return
        }
        this.zf(bt, 999, photodata, bIk)
    };
    cS.bnR = function() {
        if (E.cr(this.tw, Io)) {
            E.bd("您最多只能上传" + (this.xJ || 10) + "张图片！", true, false, false, true);
            return true
        } else {
            return false
        }
    };
    cS.dny = function() {
        var bHl = E.bj(this.FI, "photoItem") || [];
        return this.xJ - bHl.length
    };
    cS.cDg = function(cbG) {
        cbG = (cbG || 0) / (1024 * 1024) || bTF;
        E.bd("图片不能超过" + cbG + "M！", true, false, false, true)
    }
})(); (function() {
    var p = P("loft.m.newpublish"),
    cW,
    bLB;
    var cVu = 150,
    cVv = 150;
    p.bgL = C();
    cW = p.bgL.bi(loft.m.newpublish.w.cfF, true);
    bLB = p.bgL.bw;
    p.bgL.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    cW.bq = function(I) {
        I = I || {};
        this.bHr(I);
        this.cxy = {
            isPreview: false,
            autoSubmitMethod: this.ti.bHk(this)
        };
        this.cxx = {
            isPreview: false,
            autoSubmitMethod: this.nA.bHk(this)
        };
        this.bWW = {
            isPreview: true,
            noShowError: true
        }
    };
    cW.bz = function(I) {
        I = I || {};
        this.bPQ = "new/photo/";
        I.minFrameHeight = cVu;
        I.maxFrameHeight = cVv;
        I.autoHeightEnabled = true;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        var bTp = 660;
        I.maxFrameHeight = qx - 112 - 80 - bTp;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bLB.bz.call(this, I);
        this.bMU = I.mydomains || {};
        this.bHB = I.goPublishData;
        I.goPublishData = null;
        var cVA;
        if ( !! this.bHH) {
            cVA = this.bHH.bCu()
        }
        this.Nb = {
            enableAnimate: this.cfE,
            actionType: this.bX,
            isCitePost: this.gn,
            isContribute: this.gt,
            dragContainer: cVA,
            onuploadstart: this.dmU.bHk(this),
            oneditphotodesc: this.dmT.bHk(this),
            onclosephotodesc: this.dmS.bHk(this)
        };
        if (this.bX == "NEW" || !!this.bKZ) {
            this.Nb.onchoosephoto = this.bsr.bHk(this);
            this.Nb.onremovephoto = this.bss.bHk(this)
        }
        this.cco("js-postPhoto");
        if (this.bX != "NEW") {
            this.bYL(this.bOW)
        }
        this.bPA()
    };
    cW.cIK = function(I) {
        if ( !! I && !!I.post) {
            var dp = document.documentElement || document.body;
            var qx = dp.clientHeight || 0;
            var bTp = 590;
            if (I.actionType == "REBLOG") {
                bTp = 449
            } else {
                var fq;
                if ( !! I.post.photoLinks && U.co(I.post.photoLinks, "string")) {
                    try {
                        fq = U.bHx(I.post.photoLinks)
                    } catch(e) {}
                } else {
                    fq = I.post.photoLinks
                }
                if ( !! fq && fq.length > 0) {
                    if (fq.length == 1 && !!fq[0]) {
                        var dz = fq[0].ow;
                        var eT = fq[0].oh;
                        var bMK = eT;
                        if (dz > 500) {
                            bMK = 500 * eT / dz
                        }
                        if (bMK > 667) {
                            bMK = 667
                        }
                        bTp = 349 + bMK
                    } else if (fq.length < 6) {
                        bTp = 449
                    } else {
                        bTp = 549
                    }
                }
            }
            var bPK = I.minFrameHeight || cVu;
            var bOp = qx - 112 - 80 - bTp;
            bOp = bOp || cVv;
            if (bOp < bPK) {
                bOp = bPK
            }
            I.minFrameHeight = bPK;
            I.maxFrameHeight = bOp;
            this.chn(bPK, bOp)
        }
    };
    cW.bLU = function() {
        var bHT = (this.bHB || O).from || "";
        if ( !! this.bHB && this.bHB.code == "999") {
            var bH = this.bHB;
            var gz = {
                ow: bH.ow,
                oh: bH.oh,
                small: bH.userDef1Url || "",
                middle: bH.userDef2Url || "",
                orign: bH.userDef3Url || ""
            };
            if ( !! bH.photoGarbageIds) {
                gz.photoGarbageIds = bH.photoGarbageIds
            }
            this.bhw = {
                isPublished: true,
                photoLinks: [gz],
                photoCaptions: null
            };
            var bF = this.bHB.content || "";
            try {
                bF = decodeURIComponent(bF)
            } catch(e) {}
            var kO = this.bHB.source || "";
            var bIn = this.bHB.sourceUrl || "";
            if (bHT == "weibo") {
                if ( !! bIn) {
                    bF = bF + '<p>分享自网易微博（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "bbs") {
                if ( !! bIn) {
                    bF = bF + '<p>分享自网易论坛（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "pp") {
                if ( !! bIn) {
                    bF = bF + '<p>分享自网易摄影（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else if (bHT == "l63") {
                if ( !! bIn) {
                    bF = bF + '<p>分享自网易（<a href="' + bIn + '">查看原文</a>）</p>'
                }
            } else {
                if ( !! kO && !!bIn) {
                    bF = bF + '<p>来源：<a href="' + bIn + '">' + kO + "</a></p>"
                }
            }
            this.bhw.caption = bF;
            if (this.bHB.from) {
                this.bhw.from = this.bHB.from
            }
            if (this.bHB.thirdId) {
                this.bhw.thirdId = this.bHB.thirdId
            }
            if ( !! this.bHB.tag) {
                this.bhw.tag = this.bHB.tag
            }
            this.cookiePostData = this.bhw;
            this.bJz(this.bhw);
            this.bHB = null
        } else {
            bLB.bLU.call(this)
        }
    };
    cW.cbP = function(bHn) {
        bLB.cbP.call(this, bHn);
        if ( !! bHn) {}
    };
    cW.dmT = function() {
        this.bTc(1e3, 0)
    };
    cW.dmS = function() {
        this.bNN()
    };
    cW.dmU = function() {
        if (this.bX == "NEW" && !this.dmQ) {
            this.dmQ = true;
            this.bYL(this.bOW)
        }
    };
    cW.bsr = function(Eb) {
        this.iD()
    };
    cW.bss = function() {
        this.iD()
    };
    cW.dmP = function() {
        if (!this.ced) return;
        if (!this.gy) {
            this.gy = P("loft.m.newpublish.w").CH.bG(this.ced, this.Nb);
            if (! ( !! this.gn || this.bX == "REBLOG")) {
                if ( !! this.gy) {
                    var ff = this.gy.vl() || {};
                    var bT = ff.photos;
                    if ( !! bT) bT = P("loft.x").gW(bT);
                    this.cFy = bT
                }
            }
        } else {
            this.gy.bz(this.Nb)
        }
    };
    cW.bPA = function() {
        if (!this.ced) {
            this.ced = document.cloneElement("div", "pmanagerwrap");
            bLB.bPA.call(this, this.ced)
        }
    };
    cW.bOS = function() {
        if ( !! this.gy) {
            this.gy.cK()
        }
        this.ced = E.hE(this.ced);
        bLB.bOS.call(this)
    };
    cW.cK = function() {
        bLB.cK.call(this)
    };
    cW.dmO = function(bN) {
        if ( !! bN) {
            var fq, hg;
            if ( !! bN && !!bN.photoLinks) {
                fq = bN.photoLinks;
                hg = bN.photoCaptions
            }
            this.Nb.photoLinks = fq;
            this.Nb.photoCaptions = hg || ""
        } else {
            this.Nb.photoLinks = "";
            this.Nb.photoCaptions = ""
        }
        this.dmP()
    };
    cW.beS = function(bT, tJ, I) {
        I = I || {};
        if ( !! bT && bT.length > 0 && ( !! I["isNeedImageStamp"] || !!I["isNeedImageDigitStamp"])) {
            var wf;
            if ( !! I["isNeedImageStamp"]) {
                var cec = this.bMU[this.bR.data.blogId + ""] || this.bR.data.blogName + ".lofter.com";
                wf = (this.bR.data.blogNickName || this.bR.data.blogName || "未命名") + " / " + cec;
                if (loft.x.ty(wf) < 45) {
                    wf = encodeURIComponent(wf)
                } else {
                    wf = ""
                }
            }
            var bc;
            if ( !! I["isNeedImageDigitStamp"]) {
                bc = this.bR.data.blogId
            }
            if ( !! wf || !!bc) {
                I["stampString"] = wf || "";
                I["blogId"] = bc || "";
                this.gy.bmD(bT, tJ, I)
            } else {
                tJ()
            }
        }
    };
    cW.bga = function(dW) {
        var ff, bT = null;
        if (this.bX != "REBLOG" && !!this.gy) {
            ff = this.gy.vl() || {};
            bT = ff.photos
        }
        var bQ = this.dph();
        if (this.bX != "REBLOG" && (this.sW == "kuang" || this.il("框不住", bQ))) {
            if ( !! this.bhw && this.bhw != "null") {
                if (this.il("框不住", bQ)) {
                    if (!this.il("框不住", this.bst)) {
                        bQ = this.bNY("框不住", bQ);
                        this.bR.data.tag = bQ.join(",")
                    }
                }
                this.oP(dW);
                return
            }
            if ( !! bT && !!bT[0]) {
                if (bT[0].ow < 900) {
                    E.ef("日志中图片小于最小尺寸，无法生成效果预览图！（最小宽度*最小高度：900px*440px)", true, true, false, true);
                    if (this.il("框不住", bQ)) {
                        bQ = this.bNY("框不住", bQ);
                        this.bR.data.tag = bQ.join(",")
                    }
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else if (bT[0].oh < 440) {
                    E.ef("日志中图片小于最小尺寸，无法生成效果预览图！（最小宽度*最小高度：900px*440px)", true, true, false, true);
                    if (this.il("框不住", bQ)) {
                        bQ = this.bNY("框不住", bQ);
                        this.bR.data.tag = bQ.join(",")
                    }
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else {
                    if (this.sW == "kuang" && !this.il("框不住", bQ)) {
                        this.dV.ZI("框不住");
                        bQ = this.dV.ne() || [];
                        this.bR.data.tag = bQ.join(",")
                    }
                    this.oP(dW)
                }
            } else {
                E.ef("您添加的图片不符合话题要求，无法生成效果预览图!", true, true, false, true);
                window.setTimeout(this.oP.bHk(this, dW), 3e3)
            }
        } else if ((!this.bhw || this.bhw == "null") && this.il("首页交给你", bQ)) {
            if ( !! bT && !!bT[0]) {
                if (bT[0].ow < 1e3) {
                    E.ef("日志中图片宽度小于1000px，无法生成个人登录页！（最小宽度*最小高度：1000px*600px)", true, true, false, true);
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else if (bT[0].oh < 600) {
                    E.ef("日志中图片高度小于600px，无法生成个人登录页！（最小宽度*最小高度：1000px*600px)", true, true, false, true);
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else {
                    this.oP(dW)
                }
            } else {
                E.ef("您添加的图片不符合话题要求，将无法生成个人登录页!", true, true, false, true);
                window.setTimeout(this.oP.bHk(this, dW), 3e3)
            }
        } else if (this.bX == "NEW" && this.il("app首页交给你", bQ)) {
            this.bR.data.isNeedImageStamp = false;
            if ( !! bT && !!bT[0]) {
                if (bT[0].ow < 320) {
                    E.ef("日志中图片宽度小于320px，可能影响最终效果！（最小宽度*最小高度：320px*480px)", true, true, false, true);
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else if (bT[0].oh < 480) {
                    E.ef("日志中图片高度小于480px，可能影响最终效果！（最小宽度*最小高度：320px*480px)", true, true, false, true);
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else {
                    this.oP(dW)
                }
            } else {
                E.ef("图片未达尺寸要求，可能影响最终效果!", true, true, false, true);
                window.setTimeout(this.oP.bHk(this, dW), 3e3)
            }
        } else if (this.bX == "NEW" && this.il("巅峰视界", bQ)) {
            this.bR.data.isNeedImageStamp = false;
            if ( !! bT && !!bT[0]) {
                if (bT[0].ow < 1024) {
                    E.ef("日志中图片宽度小于1024px，无法生成效果预览图！（最小宽度*最小高度：1024px*698px)", true, true, false, true);
                    bQ = this.bNY("巅峰视界", bQ);
                    this.bR.data.tag = bQ.join(",");
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else if (bT[0].oh < 698) {
                    E.ef("日志中图片高度小于698px，无法生成效果预览图！（最小宽度*最小高度：1024px*698px)", true, true, false, true);
                    bQ = this.bNY("巅峰视界", bQ);
                    this.bR.data.tag = bQ.join(",");
                    window.setTimeout(this.oP.bHk(this), 3e3)
                } else {
                    this.oP(dW)
                }
            } else {
                E.ef("图片未达尺寸要求，可能影响最终效果!", true, true, false, true);
                window.setTimeout(this.oP.bHk(this, dW), 3e3)
            }
        } else {
            this.oP(dW)
        }
    };
    cW.oP = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.bTc();
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.cjx.bHk(this, this.bR.data);
        if ((this.bX == "NEW" || this.bX == "EDIT" && !this.gt) && ( !! this.bR.data.isNeedImageStamp || !!this.bR.data.isNeedImageDigitStamp)) {
            var tJ = this.beW.bHk(this);
            var I = {};
            if ( !! this.bR.data.isNeedImageStamp) I["isNeedImageStamp"] = true;
            if ( !! this.bR.data.isNeedImageDigitStamp) I["isNeedImageDigitStamp"] = true;
            this.beS(this.bR.data.photoItemsForImageStamp, tJ, I)
        } else {
            this.beW()
        }
    };
    cW.beW = function(gZ) {
        if ( !! gZ) {
            this.bR.data.photoInfo = gZ
        }
        this.bVr(this.bXb, this.bR)
    };
    cW.oI = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.bTc();
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.ur.bHk(this, this.bR.data);
        if ((this.bX == "NEW" || this.bX == "EDIT" && !this.gt) && ( !! this.bR.data.isNeedImageStamp || !!this.bR.data.isNeedImageDigitStamp)) {
            var tJ = this.beJ.bHk(this);
            var I = {};
            if ( !! this.bR.data.isNeedImageStamp) I["isNeedImageStamp"] = true;
            if ( !! this.bR.data.isNeedImageDigitStamp) I["isNeedImageDigitStamp"] = true;
            this.beS(this.bR.data.photoItemsForImageStamp, tJ, I)
        } else {
            this.beJ()
        }
    };
    cW.beJ = function(gZ) {
        if ( !! gZ) {
            this.bR.data.photoInfo = gZ
        }
        this.bVr(this.bXb, this.bR)
    };
    cW.ku = function(bHm) {
        if (this.uu) this.uu = window.clearInterval(this.uu);
        E.gI(true);
        bLB.ku.call(this, bHm)
    };
    cW.nA = function(bHm) {
        if (this.cwd()) {
            E.gI(true);
            return
        }
        bLB.nA.call(this, bHm)
    };
    cW.ti = function(bHm) {
        if (this.cwd()) {
            E.gI(true);
            return
        }
        bLB.ti.call(this, bHm)
    };
    cW.gU = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var beG = I.autoSubmitMethod || false;
        var hd;
        var ff, bT = null;
        if ( !! this.gy) {
            ff = this.gy.vl() || {};
            bT = ff.photos;
            if (!nw && !iX && !!bT) {
                for (var i = 0; i < bT.length; i++) {
                    if ( !! bT[i] && !!bT[i].raw) {
                        delete bT[i].small;
                        delete bT[i].middle;
                        delete bT[i].orign;
                        delete bT[i].photoGarbageIds
                    }
                }
            }
        }
        if ( !! ff) {
            if (!iX) {
                if (ff.code == 1) {
                    if (!bT || bT.length < 1) {
                        E.bd("您还没有添加任何图片！", true, false, false, true);
                        return
                    }
                } else if (ff.code == -2) {
                    if (beG) {
                        E.ef("等待中，上传或旋转完成后自动发布...", true, true, false, true);
                        if (!this.uu) {
                            this.uu = window.setInterval(beG, 1e3)
                        }
                    } else {
                        E.bd("您有图片还在上传中！", true, false, false, true)
                    }
                    return
                } else if (ff.code == -1) {
                    E.bd("您还没有添加任何图片！", true, false, false, true);
                    return
                } else {
                    E.bd("您还没有添加任何图片！", true, false, false, true);
                    return
                }
            }
        }
        if (this.uu && !iX) this.uu = window.clearInterval(this.uu);
        hd = bLB.gU.call(this, I);
        var bF;
        if ( !! hd) {
            hd.caption = hd.content;
            hd.content = "";
            bF = hd.caption
        }
        if ( !! ff) {
            if ( !! iX) {
                if ((!bT || bT.length < 1) && !bF) return
            }
        }
        if (!nw) {
            if ( !! hd) {
                hd.photoInfo = U.ii(bT)
            }
        } else {
            var fq = [],
            hg = [];
            if ( !! bT && bT.length > 0) {
                for (var i = 0; i < bT.length; i++) {
                    hg.push(bT[i].caption || "")
                }
            }
            if ( !! hd) {
                hd.photoLinks = bT;
                hd.photoCaptions = hg
            }
        }
        var Nr;
        var bVL;
        var xy;
        var bHn = this.dpg();
        if ( !! bHn) {
            Nr = bHn.isNeedImageStamp || false;
            bVL = bHn.isNeedImageDigitStamp || false;
            xy = bHn.t || ""
        }
        if (!nw && !iX && (this.bX == "NEW" || this.bX == "EDIT" && !this.gt) && !!hd && ( !! Nr || !!bVL)) {
            if ( !! Nr) hd.isNeedImageStamp = Nr;
            if ( !! bVL) hd.isNeedImageDigitStamp = bVL;
            hd.blogNickName = xy;
            hd.photoItemsForImageStamp = bT || []
        }
        if ( !! hd && !!this.bhw && !!this.bhw.from) {
            hd.from = this.bhw.from
        }
        if ( !! hd && !!this.bhw && !!this.bhw.thirdId) {
            hd.thirdId = this.bhw.thirdId
        }
        return hd
    };
    cW.bJz = function(bN, bLA) {
        if (!bLA) {
            this.dmO(bN)
        }
        bLB.bJz.call(this, bN, bLA)
    };
    cW.bLv = function(kA) {
        bLB.bLv.call(this, kA)
    };
    cW.bPN = function(bHn, dR, bc) {
        bLB.bPN.call(this, bHn, dR, bc)
    };
    cW.jN = function(bN) {
        bN = bN || this.bhw;
        if (this.bX == "NEW" || !bN || bN == "null") {
            var bF = this.bKA({
                noShowError: true
            });
            if ( !! bF) {
                return true
            }
            var ff, bT = null;
            if ( !! this.gy) {
                ff = this.gy.vl() || {};
                bT = ff.photos;
                if ( !! ff) {
                    if (ff.code == 1) {
                        if (!bT || bT.length < 1) {
                            return false
                        }
                    } else if (ff.code == -2) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        } else {
            var ge = bN.caption;
            var bF = this.bKA({
                noShowError: true
            });
            if (! (this.bX == "REBLOG" || this.gn)) {
                var ff, bT = null;
                if ( !! this.gy) {
                    ff = this.gy.vl() || {};
                    bT = ff.photos;
                    if ( !! bT) bT = P("loft.x").gW(bT)
                }
                if (bT != this.cFy) {
                    return true
                }
            }
            if (this.bVM(ge)) {
                return false
            }
        }
        return true
    }
})(); (function() {
    var p = P("loft.m.newpublish.w"),
    hr,
    fm,
    bgd,
    bHu = "ui-" + U.cA();
    var Jz = /\+/g;
    var bpn = 40;
    var oX = location.dirhost + "/rsc/swf/";
    var xr = E.ft('<embed flashvars="type=${type|escape}&loop=${loop|escape}&autoPlay=${auto|escape}&url=${listenUrl|escape}&title=${title|escape}&namespace=loft.w.g" src="${playerSrc|escape}" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="258" height="33"></embed>');
    var ciR = location.cloudMusicFlashUrl || "http://s1.music.126.net/style/swf/LofterMusicPlayer.swf";
    var ciN = E.ft('<embed flashvars="loop=${loop|escape}&autoPlay=${auto|escape}&url=${listenUrl|escape}&trackId=${trackId|escape}&trackName=${trackName|escape}&artistName=${artistName|escape}" src="${playerSrc|escape}" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="257" height="34"></embed>');
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;width:100%;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .musicResult{width:100%;}#<uispace> .musicResult .w-ttl{position:relative;zoom:1;padding-bottom:10px;font-weight:normal;}#<uispace> .musicResult .w-ttl small{font-size:12px;}#<uispace> .musicResult .inputListWrap{position:relative;zoom:1;border:1px solid #C0C0C0;}#<uispace> .musicResult .srchInputWrap{font-size:16px;background:url("http://l.bst.126.net/rsc/img/shadow-in.png") 0 0 no-repeat;}#<uispace> .musicResult .searchInput{font-size:24px;height:30px;padding:7px;line-height:30px;}#<uispace> .musicResult .searchInput{width:536px;padding-left:42px;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 999px 999px;background-color:transparent;background-position:10px -520px;border:none;outline:none;}#<uispace> .musicResult .resultArea{position:absolute;left:-1px;top:44px;width:100%;border:1px solid #c0c0c0;background-color:#fff;box-shadow:0px 22px 55px -30px rgba(0,0,0,.7);-moz-box-shadow:0px 22px 55px -30px rgba(0,0,0,.7);}#<uispace> .resultArea .musiclist{font-size:16px;}#<uispace> .musicfooter{position:relative;zoom:1;height:29px;border-bottom:1px solid #fff;text-align:right;background:#ebebeb;font-size:12px;line-height:29px;}#<uispace> .musicinfo{float:right;width:440px;padding-left:10px;color:#777;}#<uispace> .musicpager{float:left;font-size:14px;}#<uispace> .prevpage,#<uispace> .nextpage{float:left;height:19px;line-height:19px;padding:5px 10px;color:#7594B3;cursor:pointer;}#<uispace> .musicpager .sep{float:left;margin:0 1px;}#<uispace> .musicpager a:hover{color:#3366cc;}#<uispace> .musicPreview{/*padding:15px;background-color:#eee;-moz-border-radius:5px 5px 5px 5px;*/}#<uispace> .rechoose{position:relative;zoom:1;z-index:2;float:right;width:16px;height:16px;outline:none;cursor:pointer;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 999px 999px;overflow:hidden;text-indent:-20000px;background-position:0 0;}#<uispace> .previewImg{float:left;max-width:150px;padding-right:20px;_width:150px;}#<uispace> .musicitm{display:block;width:560px;height:24px;line-height:24px;padding:5px 10px;cursor:pointer;background:url("http://l.bst.126.net/rsc/img/x.png") repeat-x 999px 9999px;}#<uispace> .musicitm:hover{color:#fff;/*color:#fff;text-decoration:none;background-position:0 0;*/}#<uispace> .js-itmhoverbg{color:#fff;text-decoration:none;background-position:0 0;}#<uispace> .musicitm .artist,#<uispace> .musicitm .album{color:#777;}#<uispace> .musicitm .musicsep{margin:0 15px;color:#777;}#<uispace> .js-itmhoverbg .artist,#<uispace> .js-itmhoverbg .album,#<uispace> .js-itmhoverbg .musicsep{color:#fff;}#<uispace> .embedWrap{position:relative;zoom:1;z-index:1;}#<uispace> .flashLink{position:absolute;left:0;top:0;width:32px;height:32px;}#<uispace> .musicinfo a{color:#7594B3;}#<uispace> .musicinfo a:hover{color:#3366cc;}', bHu);
    p.qT = C();
    hr = p.qT.bi(P(N.ut).fc, true);
    var DQ = E.gD('<a href="#" class="itm thide"><span class="song ztag"></span><span class="musicsep">—</span><span class="artist ztag"></span><span class="musicsep">—</span><span class="album ztag"></span></a>');
    hr.bq = function() {
        this.bHr(DQ);
        this.bpm();
        var bHl = E.bj(this.Y, "ztag");
        this.bpl = bHl[0];
        this.bpk = bHl[1];
        this.ciC = bHl[2];
        V.bHo(this.Y, "click", this.xp.bHk(this))
    };
    hr.bHC = function(I) {
        this.gg(false);
        this.bHo("onchoose", I.onchoose)
    };
    hr.xp = function(bHm) {
        V.bb(bHm);
        this.bh("onchoose", this.bHq)
    };
    hr.bpj = function() {
        this.bh("onchoose", this.bHq)
    };
    hr.bpm = function() {
        V.bHo(this.Y, "mouseover", this.KM.bHk(this))
    };
    hr.KM = function() {
        var bHl = E.dE(this.Y.parentNode) || [];
        for (var i = 0; i < bHl.length; i++) {
            this.gg(false, bHl[i])
        }
        this.gg(true)
    };
    var Hh = function(hU, X, cj) {
        X = E.be(X);
        if (!X) return;
        hU = !!hU;
        hU ? E.ba(X, cj) : E.bf(X, cj)
    };
    hr.gg = function(hU, X, cj) {
        X = X || this.Y;
        cj = cj || "crt";
        Hh(hU, X, cj)
    };
    hr.bpi = function(X, cj) {
        X = X || this.Y;
        cj = cj || "crt";
        return E.cr(X, cj)
    };
    hr.ce = function(bHn) {
        p.qT.bw.ce.call(this, bHn);
        try {
            this.bpl.innerHTML = decodeURIComponent((this.bHq.song_name || "").replace(Jz, "%20"));
            this.bpk.innerHTML = decodeURIComponent((this.bHq.artist_name || "").replace(Jz, "%20"));
            this.ciC.innerHTML = decodeURIComponent((this.bHq.album_name || "").replace(Jz, "%20"))
        } catch(e) {
            this.bpl.innerHTML = this.bHq.song_name || "";
            this.bpk.innerHTML = this.bHq.artist_name || "";
            this.ciC.innerHTML = this.bHq.album_name || ""
        }
    };
    p.KK = C();
    fm = p.KK.bi(P(N.ui).ga, true);
    bgd = p.KK.bw;
    fm.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I);
        V.bHo(this.dd, "input", this.kF.bHk(this));
        V.bHo(this.dd, "propertychange", this.kF.bHk(this));
        if (B.da) {
            var bYK = parseInt(B.Ud);
            if ( !! bYK && bYK >= 9) {
                V.bHo(this.dd, "keyup", this.kF.bHk(this))
            }
        }
        V.bHo(this.nG, "click", this.kY.bHk(this));
        V.bHo(this.JH, "click", this.EL.bHk(this));
        V.bHo(this.JI, "click", this.bpe.bHk(this));
        V.bHo(this.dd, "paste", this.cFF.bHk(this));
        V.bHo(this.dd, "keydown", this.cFI.bHk(this), true);
        V.bHo(this.dd, "blur", this.cFK.bHk(this));
        this.dB();
        this.eL = {
            charset: "utf-8"
        };
        V.bHo(document, "keydown", this.mW.bHk(this));
        V.bHo(document, "click", this.cit.bHk(this));
        this.KJ = {};
        this.bJT = {};
        this.bLW = {};
        this.bIA = [];
        this.bfG = 100
    };
    fm.cFF = function(bHm) {
        window.setTimeout(function() {
            this.ccf(this.dd.value)
        }.bHk(this), 100)
    };
    fm.cFI = function(bHm) {
        var bIu = bHm && (bHm.which || bHm.keyCode) || 0;
        if (bIu == 13) {
            this.ccf(this.dd.value)
        }
    };
    fm.cFK = function(bHm) {
        this.ccf(this.dd.value)
    };
    fm.cFR = function(bp) {
        bp = U.bA(bp);
        var bSX;
        if ( !! bp && (bp.indexOf("http://music.163.com/#/song?") == 0 || bp.indexOf("http://music.163.com/#/m/song?") == 0)) {
            bSX = loft.x.wc(bp, "id", "?")
        }
        return bSX
    };
    fm.ccf = function(bp) {
        var bSX = this.cFR(bp);
        if (!bSX) return;
        var Ei = "http://s.music.163.com/api/song/get?id=" + bSX + "&callback=loft.w.g.cbGetCloudMusicData";
        this.eL.onerror = this.chP.bHk(this);
        J.Iv(Ei, this.eL)
    };
    fm.chP = function(bHn) {
        if ( !! bHn && bHn.code == 200 && !!bHn.result && !!bHn.result.song) {
            var bJW = [bHn.result.song];
            var bhb = this.chO(bJW);
            if ( !! bhb && !!bhb[0]) {
                this.dd.value = "";
                this.xp(bhb[0])
            }
        }
    };
    fm.bHg = function(bO, SO) {
        if ( !! this.bLW[bO]) {
            this.ccm(bO)
        }
        SO = SO || Math.floor(this.bfG / 2);
        var bfB = [],
        sF = this.bIA.length;
        if (sF >= this.bfG) {
            for (var i = 0; i < sF; i++) {
                if (i + SO < sF) {
                    this.bLW[this.bIA[i]] = "";
                    this.bJT[this.bIA[i]] = ""
                } else {
                    bfB.push(this.bIA[i])
                }
            }
            this.bIA = bfB
        }
        if (!this.bLW[bO]) {
            this.bLW[bO] = bO;
            this.bIA.push(bO)
        }
    };
    fm.ccm = function(bO) {
        var sF = this.bIA.length;
        for (var i = 0; i < sF; i++) {
            if (this.bIA[i] === bO) {
                this.bIA.splice(i, 1);
                break
            }
        }
        this.bIA.push(bO)
    };
    fm.cit = function() {
        var ccn = U.bA(this.dd.value);
        if (!ccn) {
            this.cdZ()
        }
    };
    fm.bpd = function() {
        if (!this.bpb()) {
            this.dd.focus()
        }
    };
    fm.mW = function(bHm) {
        var bK = bHm.keyCode;
        if (bK == 38 || bK == 40) {
            V.bb(bHm);
            if (this.KH.style.display == "none") return;
            this.pz(bK - 39)
        }
        if (bK == 13) {
            V.bb(bHm);
            this.bC = this.bgE();
            if (this.bC >= 0) {
                var bo = this.kZ[this.bC];
                if ( !! bo) bo.bpj()
            }
        }
    };
    fm.pz = function(fW) {
        if (!this.kZ || this.kZ.length <= 0) return;
        this.bC = this.bgE();
        if (this.bC >= 0) {
            var bo = this.kZ[this.bC];
            if ( !! bo) bo.gg(false);
            this.bC = (this.bC + fW) % this.kZ.length;
            if (this.bC < 0) this.bC = this.kZ.length - 1
        } else {
            if (fW > 0) {
                this.bC = 0
            } else {
                this.bC = this.kZ.length - 1
            }
        }
        var bo = this.kZ[this.bC];
        if ( !! bo) bo.gg(true)
    };
    fm.bgE = function() {
        if (!this.kZ) return - 1;
        for (var i = 0; i < this.kZ.length; i++) {
            if (this.kZ[i].bpi()) {
                return i
            }
        }
        return - 1
    };
    fm.EL = function(bHm) {
        V.bb(bHm);
        if (this.tB <= 1) {
            E.ba(this.JH, "disb")
        } else {
            this.KG(this.cdY, this.tB - 1)
        }
    };
    fm.bpe = function(bHm) {
        V.bb(bHm);
        if (this.tB >= this.KA) {
            E.ba(this.JI, "disb")
        } else {
            this.KG(this.cdY, this.tB + 1)
        }
    };
    fm.dB = function() {
        var bJ = P("loft.w.g");
        bJ.cbFuncSearchMusic = this.cGb.bHk(this);
        bJ.cbGetCloudMusicData = this.chP.bHk(this)
    };
    fm.bz = function(I) {
        I = I || O;
        bgd.bz.call(this);
        this.Ec = I.isNotInlandIp || false;
        this.wP = I.mode || "";
        this.bHq = I.data || null;
        if (!this.wP && !!this.bHq) {
            this.wP = "preview"
        }
        if (this.wP == "preview") {
            this.nG.style.display = "none"
        } else {
            this.nG.style.display = ""
        }
        if ( !! this.bHq) {
            this.xp(this.bHq)
        }
        this.Kz = I.limit || 8;
        this.bHo("onchoose", I.onchoose || F);
        this.bHo("onrechoose", I.onrechoose || F)
    };
    fm.cGn = function() {
        E.ba(this.JX, "js-showResultArea");
        var eT = this.boQ.clientHeight || 0;
        eT += 48;
        this.JX.style.height = eT + "px"
    };
    fm.cdZ = function() {
        this.JX.style.height = 0;
        E.bf(this.JX, "js-showResultArea")
    };
    fm.kF = function(bHm) {
        var bx = U.bA(this.dd.value);
        if (!bx) {
            if ( !! this.cv) this.cv = window.clearTimeout(this.cv);
            this.cdZ(); !! this.cnd && (this.cnd.style.display = "");
            return
        } !! this.cnd && (this.cnd.style.display = "none");
        if ( !! this.cv) this.cv = window.clearTimeout(this.cv);
        this.cv = window.setTimeout(this.KG.bHk(this, bx, 1), 500)
    };
    fm.KG = function(bx, ja) {
        if (!bx || !ja || ja < 0) {
            return
        }
        bx = encodeURIComponent(bx);
        if ( !! this.Ec) {
            this.boY(bx, ja)
        } else {
            this.cGr(bx, ja)
        }
    };
    fm.boU = function(bx, ja) {
        var bO = ja + "_" + bx;
        if (!this.bJT[bO]) {
            this.bJT[bO] = "loading";
            var Ei = "http://kuang.xiami.com/app/nineteen/search/key/" + bx + "/logo/1/page/" + ja + "?callback=loft.w.g.cbFuncSearchMusic(" + ja + ")";
            this.eL.onerror = this.cGs.bHk(this, bx, ja);
            J.Iv(Ei, this.eL)
        } else if (this.bJT[bO] == "loading") {
            return
        } else {
            this.Ky(bx, ja, this.bJT[bO])
        }
    };
    fm.cGr = function(bx, ja) {
        var bO = ja + "_" + bx;
        if (!this.bJT[bO]) {
            this.bJT[bO] = "loading";
            var ci = (ja - 1) * this.Kz;
            var cGt = encodeURIComponent(bx);
            var Ei = "http://s.music.163.com/search/get/?src=lofter&type=1&filterDj=false&s=" + bx + "&limit=" + this.Kz + "&offset=" + ci + "&callback=loft.w.g.cbFuncSearchMusic(" + ja + ',"' + cGt + '")';
            this.eL.onerror = this.Ky.bHk(this, bx, ja);
            J.Iv(Ei, this.eL)
        } else if (this.bJT[bO] == "loading") {
            return
        } else {
            this.Ky(bx, ja, this.bJT[bO])
        }
    };
    fm.cGu = function(bx, ja, bOV) {
        bOV = bOV || {};
        if (bOV.code != 200 || !bOV.result) {
            bOV.result = {}
        }
        var eB = bOV.result.songCount || 0;
        var bJW = bOV.result.songs || [];
        var bhb = this.chO(bJW) || [];
        var bIz = {};
        bIz.key = bx;
        bIz.total = eB;
        bIz.results = bhb;
        this.Ky(bx, ja, bIz)
    };
    fm.chO = function(bJW) {
        bJW = bJW || [];
        var bhb = [];
        for (var i = 0; i < this.Kz && i < bJW.length && !!bJW[i]; i++) {
            var bo = {
                type: "cloudmusic",
                song_id: bJW[i].id,
                song_name: encodeURIComponent(bJW[i].name)
            };
            var bNz = bJW[i].artists;
            var bWp = "";
            var bWo = "";
            for (var k = 0; k < bNz.length && !!bNz[k] && !!bNz[k].id; k++) {
                if (!bWp) {
                    bWp = bNz[k].id
                } else {
                    bWp += "、" + bNz[k].id
                }
                if ( !! bNz[k].name) {
                    if (!bWo) {
                        bWo = bNz[k].name
                    } else {
                        bWo += "、" + bNz[k].name
                    }
                }
            }
            bo.artist_id = bWp;
            bo.artist_name = encodeURIComponent(bWo);
            var ccH = bJW[i].album || O;
            bo.album_id = ccH.id || "";
            bo.album_name = encodeURIComponent(ccH.name || "");
            bo.album_logo = ccH.picUrl || "";
            bo.listenUrl = bJW[i].audio || "";
            bhb.push(bo)
        }
        return bhb
    };
    fm.cGs = function() {
        J.br(location.dwr, "OtherBean", "xiamiDisabledAlert", false, F)
    };
    fm.boY = function(bx, ja) {
        if ( !! this.KJ[bx]) {
            this.Ku(bx, ja, this.KJ[bx])
        } else {
            var Ei = "http://mp3.163.com/s/musicSearch.s?n=" + bx + "&offset=0&filterDj=false&limit=" + bpn + "&utf8=1";
            this.eL.onload = this.Ku.bHk(this, bx, ja);
            this.eL.onerror = this.Ku.bHk(this, bx, ja);
            J.Iv(Ei, this.eL)
        }
    };
    fm.Ku = function(bx, ja, uv) {
        var ci = (ja - 1) * this.Kz;
        if (!uv) {
            this.KJ[bx] = window["__o"];
            uv = window["__o"];
            window["__o"] = null
        }
        if ( !! uv) {
            var eB = uv.length || 0;
            var bhb = [];
            for (var i = 0; i < this.Kz && ci + i < uv.length; i++) {
                var bo = {
                    song_name: uv[ci + i].name,
                    artist_name: uv[ci + i].author
                };
                bhb.push(bo)
            }
            var bIz = {};
            bIz.key = bx;
            bIz.total = eB;
            bIz.results = bhb;
            this.Ky(bx, ja, bIz)
        }
    };
    fm.cGb = function(ja, bx) {
        return this.bpa.bHk(this, ja, bx)
    };
    fm.bpa = function(ja, bx, bHn) {
        if (!bx && !!bHn.key) {
            bx = encodeURIComponent(bHn.key)
        }
        if ( !! bHn && !!bx) {
            this.cGu(bx, ja, bHn)
        }
    };
    fm.Ky = function(bx, ja, bIz) {
        var bO = ja + "_" + bx;
        var ccn = encodeURIComponent(U.bA(this.dd.value));
        if (!bIz) {
            this.bJT[bO] = "";
            return
        } else if (!this.bJT[bO] || this.bJT[bO] == "loading") {
            this.bJT[bO] = bIz
        }
        if ( !! bIz && bx == ccn) {
            bIz.total = bIz.total || 0;
            this.lx.innerText = bIz.total;
            this.cdY = decodeURIComponent(bx || "");
            this.tB = ja || 0;
            this.KA = Math.floor((bIz.total - 1) / this.Kz) + 1;
            if (this.tB <= 1) {
                E.ba(this.JH, "disb")
            } else {
                E.bf(this.JH, "disb")
            }
            if (this.tB >= this.KA) {
                E.ba(this.JI, "disb")
            } else {
                E.bf(this.JI, "disb")
            }
            if ( !! this.kZ) this.kZ = p.qT.db(this.kZ);
            if (bIz.total > 0 && !!bIz.results && bIz.results.length > 0) {
                this.kZ = p.qT.bG(bIz.results, this.boQ, {
                    onchoose: this.xp.bHk(this)
                })
            }
            this.cGn(this.kZ)
        }
        this.bHg(bO)
    };
    fm.xp = function(bHn) {
        bHn = bHn || {};
        this.cdZ();
        this.KH.style.display = "none";
        this.kw.style.display = "block";
        window.setTimeout(function() {
            E.ba(this.kw, "js-showMusicPreview")
        }.bHk(this), 10);
        if (bHn.type === "music163") {
            this.uW.style.display = "none";
            this.boO(bHn)
        } else if (bHn.type == "cloudmusic") {
            this.cGA(bHn)
        } else {
            this.uW.style.display = "";
            this.uW.src = bHn.album_logo || location.dirhost + "/rsc/img/video-thumb.png";
            this.bhi = '<embed height="33" width="257" wmode="transparent" type="application/x-shockwave-flash" src="http://www.xiami.com/widget/0_' + bHn.song_id + '/singlePlayer.swf">';
            this.Ks.innerHTML = this.bhi;
            bHn.song_name = (bHn.song_name || "").replace(Jz, "%20");
            bHn.artist_name = (bHn.artist_name || "").replace(Jz, "%20");
            this.lG = bHn;
            this.bh("onchoose", bHn)
        }
    };
    fm.cGA = function(bHn) {
        this.uW.style.display = "";
        if ( !! bHn.album_logo) {
            this.uW.src = bHn.album_logo + "?param=150x150x1"
        } else {
            this.uW.src = location.dirhost + "/rsc/img/video-thumb.png"
        }
        var dc = E.dG(ciN, {
            loop: 0,
            auto: "false",
            trackId: bHn.song_id || "",
            trackName: bHn.song_name || "",
            artistName: bHn.artist_name || "",
            listenUrl: bHn.listenUrl || "",
            playerSrc: ciR
        });
        this.Ks.innerHTML = dc;
        bHn.song_name = (bHn.song_name || "").replace(Jz, "%20");
        bHn.artist_name = (bHn.artist_name || "").replace(Jz, "%20");
        this.lG = bHn;
        this.bh("onchoose", bHn)
    };
    fm.boO = function(bHn) {
        var Ei = "http://mp3.163.com/s/urlSearch.s?n=" + bHn.song_name + "&a=" + bHn.artist_name + "&legal=true&utf8=1";
        this.eL.onload = this.Uh.bHk(this, bHn);
        this.eL.onerror = this.Uh.bHk(this, bHn);
        J.Iv(Ei, this.eL)
    };
    fm.Uh = function(bHn) {
        if ( !! window["__o"] && !!window["__o"][0]) {
            bHn.listenUrl = window["__o"][0];
            var Pk = oX + "blog_music_player.swf";
            bHn.type = "music163";
            var dc = E.dG(xr, {
                type: bHn.type,
                loop: 0,
                auto: "false",
                title: bHn.song_name || "",
                listenUrl: bHn.listenUrl || "",
                playerSrc: Pk
            });
            dc += '<a class="flashLink" href="' + loft.x.bM() + '">&nbsp;</a>';
            this.Ks.innerHTML = dc;
            window["__o"] = null;
            this.lG = bHn;
            this.bh("onchoose", bHn)
        } else {
            this.Ks.innerHTML = "";
            E.bd("音乐不存在！", true);
            window.setTimeout(this.kY.bHk(this), 500)
        }
    };
    fm.kY = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        E.bf(this.kw, "js-showMusicPreview");
        window.setTimeout(function() {
            this.uA()
        }.bHk(this), 200)
    };
    fm.uA = function() {
        this.dd.value = "";
        this.cnd.style.display = "block";
        this.kw.style.display = "none";
        this.KH.style.display = "block";
        this.cdZ();
        this.lG = null;
        this.bh("onrechoose")
    };
    fm.bpb = function() {
        if (this.kw.style.display == "block") {
            return true
        } else {
            return false
        }
    };
    fm.Ko = function() {
        return this.lG || null
    };
    fm.bGF = function() {
        return this.bhi || ""
    };
    fm.cU = function() {
        return bHu + " xiamimusic"
    };
    fm.cM = function() {
        return '<div class="w-schdpw blk ztag"><div class="vsearch"><div class="vsearchwrap"><span class="icn">&nbsp;</span><input type="text" class="ztag"><label class="ztag">请用歌名、专辑、艺术家搜索</label></div></div><div class="list ztag"><div class="ztag" style="width:498px;"></div><div class="page f-cb"><a class="lnk disb ztag" href="#">上一页</a><a class="lnk ztag" href="#">下一页</a><span class="info">共有<span class="ztag">0</span>首相关歌曲（来自<a target="_blank" href="http://music.163.com">网易云音乐</a>）</span></div></div></div><div style="display:none;" class="m-rst blk ztag"><div class="rst"><div class="rstwrap f-cb"><div class="w-mimg"><img class="ztag"/></div><div class="music ztag"><embed width="257" height="33" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" quality="high" wmode="transparent" menu="false" src="http://img.xiami.com/widget/2093281_1770321115_/singlePlayer.swf" /></div><a class="w-close2 ztag" title="关闭">关闭</a></div></div></div>'
    };
    fm.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        this.KH = bHl[0];
        this.dd = bHl[1];
        this.cnd = bHl[2];
        this.JX = bHl[3];
        this.boQ = bHl[4];
        this.JH = bHl[5];
        this.JI = bHl[6];
        this.lx = bHl[7];
        this.kw = bHl[8];
        this.uW = bHl[9];
        this.Ks = bHl[10];
        this.nG = bHl[11]
    }
})();

//发布音乐
(function() {
    var p = P("loft.m.newpublish.w"),
    gj,
    Um,
    bHu = "ui-" + U.cA();
    var oX = location.dirhost + "/rsc/swf/";
    var xr = E.ft('<embed flashvars="type=${type|escape}&loop=${loop|escape}&autoPlay=${auto|escape}&url=${listenUrl|escape}&title=${title|escape}&namespace=loft.w.g" src="${playerSrc|escape}" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="258" height="33"></embed>');
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;width:100%;}#<uispace> .pleft{float:left;}#<uispace> .pright{float:right;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .addDiyMusic{position:relative;zoom:1;z-index:1;width:100%;height:30px;}#<uispace> .addDiyMusic .flashwrap{position:absolute;left:0;top:0;}#<uispace> .addDiyMusic .addMusicBtn{width:88px;height:30px;line-height:30px;text-decoration:none;background:url("http://l.bst.126.net/rsc/img/btn.png") no-repeat 0 -280px;}#<uispace> .addDiyMusic .js-hover-addMusicBtn{background-position:-98px -280px;}#<uispace> .addDiyMusic .addMusicBtn span{display:block;padding-left:28px;color:#fff;text-align:left;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 10px -339px;}#<uispace> .addDiyMusic .prompt{height:30px;line-height:30px;margin-left:10px;color:#777;}#<uispace> .js-hideflash{height:0;overflow:hidden;visibility:hidden;border:none;margin:0;}#<uispace> .js-hideflash .flashwrap{}#<uispace> .js-hideflash .addMusicBtn{display:none;}#<uispace> .js-hideflash .prompt{display:none;}#<uispace> .musicPreview{position:relative;zoom:1;left:0;top:1;z-index:10;min-height:33px;_height:33px;/*line-height:22px;padding:10px;background-color:#ebebeb;*/}#<uispace> .musicPreview .uploadingWrap{padding:12px 0 15px 0;}#<uispace> .musicPreview .uploading{height:15px;padding:1px 0 0 21px;white-space:normal;line-height:15px;color:#aaa;background:url("http://l.bst.126.net/rsc/img/loading.gif") no-repeat 0 -44px;}#<uispace> .rechoose{position:absolute;right:0;top:0;width:16px;height:16px;outline:none;cursor:pointer; overflow:hidden;text-indent:-20000px;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 0 0;}#<uispace> .coverWrap{margin-right:-184px;}#<uispace> .coverImg{float:left;width:164px;height:164px;}#<uispace> .musicembed{margin-left:184px;}#<uispace> .musicPreview a{color:#5A8DCD;}#<uispace> .musicPreview a:hover{color:#7594b3;text-decoration:none;}#<uispace> .previewWithoutCover .uploadCover{margin:15px 0 0 15px;}#<uispace> .previewWithCover .embedWrap2{margin-bottom:10px;}#<uispace> .previewWithCover .reUploadCover{height:24px;overflow:hidden;}#<uispace> .previewWithCover .deleteCover{height:22px;line-height:22px;}#<uispace> .embedWrap1,#<uispace> .embedWrap2{position:relative;zoom:1;}#<uispace> .embedWrap1 .flashLink,#<uispace> .embedWrap2 .flashLink{position:absolute;left:0;top:0;width:32px;height:32px;}', bHu);
    p.Kp = C();
    gj = p.Kp.bi(P(N.ui).ga, true);
    Um = p.Kp.bw;
    gj.bq = function(bl, I) {
        I = I || {};
        this.Kq = I.v || "";
        this.bHr(bl, I);
        this.dB();
        V.bHo(this.dmM, "click", this.kY.bHk(this));
        V.bHo(this.cJU, "click", this.kY.bHk(this));
        V.bHo(this.nG, "click", this.kY.bHk(this));
        V.bHo(this.Kr, "click", this.boH.bHk(this))
    };
    gj.boH = function(bHm) {
        V.bb(bHm);
        this.lG.small_cover = "";
        this.lG.middle_cover = "";
        this.Kj(this.lG)
    };
    gj.dB = function() {
        var bJ = P("loft.w.g");
        bJ.getUploadUrl = this.zK.bHk(this);
        bJ.uploadStart = this.zg.bHk(this);
        bJ.uploadComplete = this.zf.bHk(this);
        bJ.showProgress = this.Kg.bHk(this);
        bJ.redirect = this.boF.bHk(this);
        bJ.cbUploadCover = this.boD.bHk(this);
        bJ.mouseOver = this.Kv.bHk(this);
        bJ.mouseOut = this.Kw.bHk(this)
    };
    gj.Kv = function(Kx) {
        E.ba(this.Uz, "js-hover-addMusicBtn")
    };
    gj.Kw = function(Kx) {
        E.bf(this.Uz, "js-hover-addMusicBtn")
    };
    gj.boD = function(bH) {
        if ( !! this.Ej) {
            this.Ej.src = "about:blank";
            this.UB()
        }
        if ( !! this.Ee) {
            this.Ee.src = "about:blank";
            this.UD()
        }
        bH = bH || {};
        if (bH.resultcode == 999) {
            var gz = {
                photoGarbageIds: bH.photoGarbageIds
            };
            this.Up.push(gz);
            if ( !! this.lG) {
                this.lG.small_cover = bH.userDef1Url || "";
                this.lG.middle_cover = bH.userDef2Url || "";
                this.Kj(this.lG)
            }
        } else {
            alert("图片格式不正确")
        }
    };
    gj.boF = function() {
        window.open(loft.x.bM())
    };
    gj.zK = function() {
        var boC = "http://www.lofter.com/loft/musicupload/copyright?v=" + this.Kq;
        return boC
    };
    gj.zg = function(bt, boB) {
        E.ba(this.KC, "js-hideflash");
        this.KD.style.display = "none";
        this.KE.style.display = "none";
        this.kw.style.display = "block";
        window.setTimeout(function() {
            E.ba(this.kw, "js-showMusicPreview")
        }.bHk(this), 10);
        this.UJ.style.display = "block";
        this.UK.innerHTML = "正在上传音频文件...0%";
        this.cKi.style.width = "0";
        this.cGF = true;
        this.bh("onuploading")
    };
    gj.zf = function(bt, fk, xf) {
        if ( !! fk) fk = U.bHx(fk);
        if (!this.cGF) return;
        this.cGF = false;
        if ( !! fk && !!fk.fileId && fk.fileId > 0 && fk.code == 0 && (fk.type == "diy" || fk.type == "copyright") && !!fk.listenUrl) {
            window.setTimeout(function() {
                E.bf(this.kw, "js-showMusicPreview");
                window.setTimeout(function() {
                    this.Kj(fk)
                }.bHk(this), 200)
            }.bHk(this), 500)
        } else if ( !! fk && fk.code == 1) {
            E.bd(xf || "音乐文件大小超过100M！", true);
            this.kY()
        } else if ( !! fk && fk.code == 4) {
            E.bd(xf || "文件大小异常！", true);
            this.kY()
        } else if ( !! fk && fk.code == 6) {
            E.bd(xf || "文件格式错误！", true);
            this.kY()
        } else if ( !! fk && fk.code == 7) {
            this.ep.innerHTML = '(上传容量已满 <a style="text-decoration:underline;" target="_blank" href="http://www.lofter.com/help#feedback&from=diymusic">申请容量</a>)';
            this.kY();
            window.setTimeout(function() {
                this.bor.style.visibility = "hidden"
            }.bHk(this), 1e3);
            this.dmL.style.zIndex = 10
        } else if ( !! fk && fk.code == 8) {
            E.bd(xf || "非原创音乐！", true);
            this.kY()
        } else if ( !! fk && fk.code == 2) {
            E.bd(xf || "服务器出现错误！", true);
            this.kY()
        } else {
            E.bd(xf || "上传失败，请重新添加音乐！", true);
            this.kY()
        }
    };
    gj.Kj = function(fk) {
        this.lG = fk;
        this.UJ.style.display = "none";
        E.ba(this.KC, "js-hideflash");
        this.kw.style.display = "block";
        window.setTimeout(function() {
            E.ba(this.kw, "js-showMusicPreview")
        }.bHk(this), 10);
        var Pk = oX + "blog_music_player.swf";
        var dc = E.dG(xr, {
            type: fk.type,
            loop: 0,
            auto: "false",
            title: fk.song_name || "",
            listenUrl: fk.listenUrl || "",
            playerSrc: Pk
        });
        dc += '<a class="flashLink" href="' + loft.x.bM() + '">&nbsp;</a>';
        if (fk.type != "music163" && ( !! fk.small_cover || !!fk.middle_cover)) {
            this.KD.style.display = "none";
            this.KE.style.display = "block";
            this.boA.src = fk.small_cover || fk.middle_cover;
            this.boz.innerHTML = dc;
            if (this.bX != "REBLOG" && !this.gn) {
                this.Kr.style.display = "";
                this.UD()
            } else {
                this.Kr.style.display = "none";
                this.KL.style.display = "none";
                this.dmK.style.display = "none"
            }
        } else {
            this.KE.style.display = "none";
            this.KD.style.display = "block";
            this.boy.innerHTML = dc;
            if (fk.type != "music163" && this.bX != "REBLOG" && !this.gn) {
                this.UB()
            } else {}
        }
        if (this.bX == "REBLOG" || !!this.gn) {
            this.nG.style.display = this.cJU.style.display = "none"
        }
        this.bh("onuploadmusic", fk)
    };
    gj.UB = function() {
        if (!this.Ej) {
            this.KN.innerHTML = '<iframe scrolling="no" height="24" frameborder="0" width="58" allowtransparency="true" border="0"></iframe>';
            this.Ej = this.KN.getElementsByTagName("iframe")[0];
            this.Ej.src = loft.x.bM() + "/html/uploadcover.html?type=upload&source=newpublish"
        } else {
            this.Ej.src = loft.x.bM() + "/html/uploadcover.html?type=upload&source=newpublish"
        }
    };
    gj.UD = function() {
        if (!this.Ee) {
            this.KL.innerHTML = '<iframe scrolling="no" height="24" frameborder="0" width="88" allowtransparency="true" border="0"></iframe>';
            this.Ee = this.KL.getElementsByTagName("iframe")[0];
            this.Ee.src = loft.x.bM() + "/html/uploadcover.html?type=reupload&source=newpublish"
        } else {
            this.Ee.src = loft.x.bM() + "/html/uploadcover.html?type=reupload&source=newpublish"
        }
    };
    gj.Kg = function(bt, gC) {
        gC = gC || 0;
        this.UK.innerHTML = "正在上传音频文件..." + gC + "%";
        this.cKi.style.width = gC + "%"
    };
    gj.bz = function(I) {
        I = I || O;
        Um.bz.call(this);
        this.wP = I.mode || "";
        this.bHq = I.data || null;
        this.bX = I.actionType || "";
        this.gn = I.isCitePost || false;
        this.Up = I.coverItems || [];
        if (!this.wP && !!this.bHq) {
            this.wP = "preview"
        }
        if (this.wP == "preview") {
            this.nG.style.display = "none"
        } else {
            this.nG.style.display = ""
        }
        if ( !! this.bHq) {
            this.Kj(this.bHq)
        }
        this.bHo("onuploading", I.onuploading || F);
        this.bHo("onrechoose", I.onrechoose || F);
        this.bHo("onuploadmusic", I.onuploadmusic || F)
    };
    gj.kY = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        this.cGF = false;
        E.bf(this.kw, "js-showMusicPreview");
        window.setTimeout(function() {
            this.uA()
        }.bHk(this), 200)
    };
    gj.uA = function() {
        this.lG = null;
        this.kw.style.display = "none";
        E.bf(this.KC, "js-hideflash");
        this.bh("onrechoose")
    };
    gj.cU = function() {
        return bHu + " diymusic"
    };
    gj.cM = function() {
        var bov = '<object height="49" width="498" type="application/x-shockwave-flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="flash_music_upload"><param name="movie" value="' + oX + 'flash_music_upload.swf?20120725"><param name="quality" value="Low"><param name="allowscriptaccess" value="always"><param name="wmode" value="transparent"><param name="flashvars" value="width=226&height=30&cbNameSpace=loft.w.g"><embed height="49" width="498" flashvars="width=226&height=30&cbNameSpace=loft.w.g" allowscriptaccess="always" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="Low" src="' + oX + 'flash_music_upload.swf?20120725" id="flash_music_upload"></object>';
        return '<div style="position:relative" class="m-upload blk ztag"><div class="ztag" style="position:absolute;top:0px;left:140px;z-index:-1;"><a class="btn ztag" href="#">上传原创音乐</a><span class="hint ztag">(仅支持mp3格式)</span></div><div class="flashwrap ztag">' + bov + '</div></div><div class="musicPreview ztag" style="display:none;"><div class="m-uploading blk ztag"><span class="hint ztag">上传中...</span><a class="w-close2 ztag" title="关闭">关闭</a><span class="probar ztag">&nbsp;</span></div><div class="m-rst blk ztag"><div class="rst"><div class="rstwrap f-cb"><div class="w-mimg ztag"></div><div class="music ztag"></div><a class="w-close2 ztag" title="关闭">关闭</a></div></div></div><div class="m-rst m-rst-oprt blk ztag"><div class="rst"><div class="rstwrap f-cb"><div class="w-mimg"><img class="ztag"/><span class="layer ztag">&nbsp;</span><div class="lnks"><a href="#" class="ztag">删除封面</a><a href="#" class="ztag">修改封面</a></div></div><div class="music ztag"></div><a class="w-close2 ztag" title="关闭">关闭</a></div></div></div></div>'
    };
    gj.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        var Q = 0;
        this.KC = bHl[Q++];
        this.dmL = bHl[Q++];
        this.Uz = bHl[Q++];
        this.ep = bHl[Q++];
        this.bor = bHl[Q++];
        this.kw = bHl[Q++];
        this.UJ = bHl[Q++];
        this.UK = bHl[Q++];
        this.dmM = bHl[Q++];
        this.cKi = bHl[Q++];
        this.KD = bHl[Q++];
        this.KN = bHl[Q++];
        this.boy = bHl[Q++];
        this.cJU = bHl[Q++];
        this.KE = bHl[Q++];
        this.boA = bHl[Q++];
        this.dmK = bHl[Q++];
        this.Kr = bHl[Q++];
        this.KL = bHl[Q++];
        this.boz = bHl[Q++];
        this.nG = bHl[Q++];
        V.bHo(this.boA.parentNode, "mouseover",
        function() {
            E.ba(this.boA.parentNode, "js-hovercover")
        }.bHk(this));
        V.bHo(this.boA.parentNode, "mouseout",
        function() {
            E.bf(this.boA.parentNode, "js-hovercover")
        }.bHk(this))
    };
    gj.Ko = function() {
        return this.lG || null
    };
    gj.Jw = function() {
        if (this.KE.style.display != "none") {
            return this.Up || null
        } else {
            return null
        }
    }
})();

(function() {
    var p = P("loft.m.newpublish.w"),
    iM,
    UY,
    bHu = "ui-" + U.cA();
    P(N.ui).fx("#<uispace>{position:relative;zoom:1;z-index:22;width:100%;color:#444;font-size:12px;font-family:\"Hiragino Sans GB\",arial,Microsoft YaHei,微软雅黑,simsun,宋体;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}", bHu);
    p.Jt = C();
    iM = p.Jt.bi(P(N.ui).ga, true);
    UY = p.Jt.bw;
    iM.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I)
    };
    iM.bop = function(I) {
        I = I || {};
        this.KT = {
            isNotInlandIp: this.Ec,
            mode: I.mode,
            onchoose: this.boh.bHk(this),
            onrechoose: this.bog.bHk(this)
        };
        this.DE = {
            mode: I.mode,
            v: this.Kq,
            onuploading: this.bof.bHk(this),
            onrechoose: this.boe.bHk(this),
            onuploadmusic: this.bod.bHk(this)
        };
        if ( !! this.bHq) {
            if (this.bHq.type == "diy" || this.bHq.type == "copyright" || this.bHq.type == "music163") {
                if ( !! I.coverItems) {
                    this.DE.coverItems = I.coverItems
                }
            }
        }
        this.boa();
        this.bob();
        if ( !! this.xA && !this.bHq) {
            this.xA.bpd()
        }
    };
    iM.bob = function() {
        if (this.bTR.style.display == "none") return;
        this.DE.data = this.bHq;
        this.DE.actionType = this.bX;
        this.DE.isCitePost = this.gn;
        if (!this.xD) {
            this.xD = p.Kp.bG(this.bTR, this.DE)
        } else {
            this.xD.bHC(this.bTR, this.DE)
        }
    };
    iM.boa = function() {
        if (this.wK.style.display == "none") return;
        this.KT.data = this.bHq;
        if (!this.xA) {
            this.xA = p.KK.bG(this.wK, this.KT)
        } else {
            this.xA.bHC(this.wK, this.KT)
        }
    };
    iM.bof = function() {
        this.wK.style.display = "none"
    };
    iM.boe = function() {
        this.wK.style.display = "block";
        this.bHq = null;
        this.bh("onclearmusic")
    };
    iM.bod = function() {
        this.bh("onchoosemusic")
    };
    iM.boh = function() {
        this.bTR.style.display = "none";
        this.bh("onchoosemusic")
    };
    iM.bog = function() {
        if (this.Lh) this.bTR.style.display = "block";
        this.bHq = null;
        this.bh("onclearmusic")
    };
    iM.bz = function(I) {
        I = I || O;
        UY.bz.call(this);
        this.Ec = I.isNotInlandIp || false;
        this.Kq = I.v || "";
        this.bHq = I.data || null;
        this.bX = I.actionType || "";
        this.gn = I.isCitePost || false;
        this.Lh = I.allowUploadDIYMusic || false;
        this.bTR.style.display = this.Lh ? "block": "none";
        if ( !! this.bHq) {
            if (this.bHq.type == "diy" || this.bHq.type == "copyright" || this.bHq.type == "music163") {
                this.bTR.style.display = "block";
                this.wK.style.display = "none"
            } else {
                this.bTR.style.display = "none";
                this.wK.style.display = "block"
            }
        }
        this.bHo("onchoosemusic", I.onchoosemusic || F);
        this.bHo("onclearmusic", I.onclearmusic || F);
        this.bop(I)
    };
    iM.cU = function() {
        return bHu + " musicmanager"
    };
    iM.cM = function() {
        return '<div class="m-audioarea f-cb ztag"><div class="searchArea ztag"></div><div class="uploadArea ztag"></div></div>'
    };
    iM.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        var Q = 0;
        this.Vn = bHl[Q++];
        this.wK = bHl[Q++];
        this.bTR = bHl[Q++]
    };
    iM.Iz = function() {
        var bHn = null;
        if ( !! this.xA) {
            bHn = this.xA.Ko()
        }
        if (!bHn && !!this.xD) {
            bHn = this.xD.Ko()
        }
        return bHn
    };
    iM.Jw = function() {
        if ( !! this.bTR && this.bTR.style.display == "block") {
            if ( !! this.xD) {
                return this.xD.Jw()
            }
        } else {
            return null
        }
    }
})();

// 发布音乐
(function() {
    var p = P("loft.m.newpublish"),
    dD,
    bNi;
    p.bci = C();
    dD = p.bci.bi(loft.m.newpublish.w.cfF, true);
    bNi = p.bci.bw;
    p.bci.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    dD.bq = function(I) {
        I = I || {};
        this.bHr(I)
    };
    dD.xp = function(bF) {
        this.bYL("js-activating");
        this.iD()
    };
    dD.bqK = function() {
        this.iD()
    };
    dD.bz = function(I) {
        I = I || {};
        this.bPQ = "new/music/";
        I.minFrameHeight = 150;
        I.maxFrameHeight = 150;
        I.autoHeightEnabled = true;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        var bTp = 400;
        I.maxFrameHeight = qx - 112 - 80 - bTp;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bNi.bz.call(this, I);
        this.bHB = I.goPublishData;
        I.goPublishData = null;
        this.Lh = !!I.allowUploadDIYMusic;
        this.dmJ = I.flashSessionCookie || "";
        var bN = this.bhw || {};
        this.yy = {
            isNotInlandIp: false,
            v: this.dmJ,
            data: bN.embed,
            actionType: this.bX,
            isCitePost: this.gn,
            allowUploadDIYMusic: this.Lh
        };
        if (this.bX == "NEW" || !!this.bKZ) {
            this.yy.onchoosemusic = this.xp.bHk(this);
            this.yy.onclearmusic = this.bqK.bHk(this)
        }
        this.cco("js-postMusic");
        if (this.bX != "NEW") {
            this.bYL("js-activating")
        }
        this.bPA()
    };
    dD.cLl = function() {
        if (!this.bRe) {
            this.bRe = document.cloneElement("div", "vmanagerwrap")
        }
        if (!this.kL) {
            this.kL = P("loft.m.newpublish.w").Jt.bG(this.bRe, this.yy)
        } else {
            this.kL.bz(this.yy)
        }
    };
    dD.bLU = function() {
        if ( !! this.bHB && !!this.bHB.data && this.bHB.data.code == 200) {
            this.bhw = {
                isPublished: true
            };
            var bF = this.bHB.content || "";
            try {
                bF = decodeURIComponent(bF)
            } catch(e) {}
            this.bhw.caption = bF;
            if (this.bHB.from) {
                this.bhw.from = this.bHB.from
            }
            if (this.bHB.thirdId) {
                this.bhw.thirdId = this.bHB.thirdId
            }
            if ( !! this.bHB.tag) {
                this.bhw.tag = this.bHB.tag
            }
            var cO = U.ii(this.bHB.embed || null);
            this.bhw.embed = cO;
            this.cookiePostData = this.bhw;
            this.bJz(this.bhw);
            this.bHB = null;
            window["_gaq"].push(["_trackEvent", "云音乐分享到LOFTER", "分享单曲", ""])
        } else {
            bNi.bLU.call(this)
        }
    };
    dD.bPA = function() {
        if (!this.bRe) {
            this.coy(null);
            bNi.bPA.call(this, this.bRe)
        }
    };
    dD.bOS = function() {
        if ( !! this.Gl) {
            this.Gl.cK()
        }
        this.bRe = E.hE(this.bRe);
        bNi.bOS.call(this)
    };
    dD.cK = function() {
        bNi.cK.call(this)
    };
    dD.gU = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var hd;
        var cO = "",
        gZ = "";
        if (( !! nw || this.bX != "REBLOG") && !!this.kL) {
            cO = P("loft.x").gW(this.kL.Iz());
            var Id = this.kL.Jw() || [];
            if ( !! Id[Id.length - 1]) {
                gZ = [Id[Id.length - 1]]
            }
            if ( !! gZ && gZ.length > 0) {
                gZ = U.ii(gZ)
            } else {
                gZ = ""
            }
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if (!iX) {
                E.bd("请添加音乐！", true, false, false, true);
                return
            }
        }
        hd = bNi.gU.call(this, I);
        var bF;
        if ( !! hd) {
            hd.caption = hd.content;
            hd.content = "";
            bF = hd.caption
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if ( !! iX) {
                if (!bF) return
            }
        }
        if ( !! hd) {
            hd.embed = cO;
            hd.photoInfo = gZ
        }
        if ( !! hd && !!this.bhw && !!this.bhw.from) {
            hd.from = this.bhw.from
        }
        if ( !! hd && !!this.bhw && !!this.bhw.thirdId) {
            hd.thirdId = this.bhw.thirdId
        }
        return hd
    };
    dD.coy = function(cO, cnK) {
        if ( !! cO) {
            this.yy.data = cO;
            this.yy.mode = cnK || "preview";
            this.cLl()
        } else {
            this.yy.data = "";
            this.yy.mode = "";
            this.cLl()
        }
    };
    dD.bJz = function(bN, bLA) {
        if ( !! bN && bN.embed != "") {
            try {
                this.cookieMusicEmbed = U.bHx(decodeURIComponent(bN.embed))
            } catch(e) {
                try {
                    var dU = U.bHx(bN.embed);
                    for (var k in dU) {
                        if ( !! dU[k]) dU[k] = decodeURIComponent(dU[k])
                    }
                    this.cookieMusicEmbed = dU
                } catch(e2) {
                    this.cookieMusicEmbed = null
                }
            }
        } else {
            this.cookieMusicEmbed = null
        }
        if ( !! this.gt || this.bX == "REBLOG" || this.gn) {
            this.coy(this.cookieMusicEmbed, "preview")
        } else {
            this.coy(this.cookieMusicEmbed, "editable");
            if ( !! this.kL) {
                this.cHh = P("loft.x").gW(this.kL.Iz())
            }
        }
        bNi.bJz.call(this, bN, bLA)
    };
    dD.bLv = function(kA) {
        bNi.bLv.call(this, kA)
    };
    dD.bPN = function(bHn, dR, bc) {
        bNi.bPN.call(this, bHn, dR, bc);
        this.coy()
    };
    dD.jN = function(bN) {
        bN = bN || this.bhw;
        if (this.bX == "NEW" || !bN || bN == "null") {
            var bF = this.bKA({
                noShowError: true
            });
            if ( !! bF) {
                return true
            }
            var cO;
            if ( !! this.kL) {
                cO = P("loft.x").gW(this.kL.Iz())
            }
            if (!cO || cO == "null") {
                return false
            }
        } else {
            var ge = bN.caption;
            var bF = this.bKA({
                noShowError: true
            });
            if (! ( !! this.gt || this.bX == "REBLOG" || this.gn)) {
                var cO;
                if ( !! this.kL) {
                    cO = P("loft.x").gW(this.kL.Iz())
                }
                if (cO != this.cHh) {
                    return true
                }
            }
            if (this.bVM(ge)) {
                return false
            }
        }
        return true
    }
})();

// 发布视频
(function() {
    var p = P("loft.m.newpublish.w"),
    gO,
    bfb,
    bHu = "ui-" + U.cA();
    var La = /\.swf$/;
    var oj = [{
        r: /\.(?:swf|flv)(?=\?|$)/i,
        t: 'pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" quality="high" allowscriptaccess="never"'
    },
    {
        r: /\.(?:rm|rmvb|rt|ra|rp|rv|mov|qt|aac|m4a|m4p|ssm|sdp|3gp|amr|awb|3g2|divx)(?=\?|$)/i,
        t: 'type="audio/x-pn-realaudio-plugin" controls="ImageWindow,ControlPanel,StatusBar"'
    },
    {
        r: /\.(?:mp3|avi|asf|wmv|wma|mpg|mpeg|wax|asx|wm|wmx|wvx|wav|mpv|mps|m2v|m1v|mpe|mpa|mp4|m4e|mp2|mp1|au|aif|aiff|mid|midi|rmi)(?=\?|$)/i,
        t: 'type="application/x-mplayer2" showcontrols="1" showaudiocontrols="1" showstatusbar="1" enablecontextmenu="1"'
    }],
    Dm = [{
        r: /tudou\.com.*\/[a-z]\/[^\/]+?$/i
    },
    {
        r: /56\.com.*\/([^\/]+?)\.html/i,
        s: "http://player.56.com/$1.swf"
    },
    {
        r: /ku6\.com.*\/([^\/]+?)\.html/i,
        s: "http://player.ku6.com/refer/$1/v.swf"
    },
    {
        r: /youku\.com.*id_(.*?)\.html$/i,
        s: "http://player.youku.com/player.php/sid/$1/v.swf"
    },
    {
        r: /v\.163\.com.*\/([^\/]+?)\.html/i,
        s: "http://img1.cache.netease.com/flvplayer081128/~false~0085_$1~.swf"
    }];
    P(N.ui).fx("#<uispace>{}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .videoarea{height:61px;overflow:hidden;}#<uispace> .videoarea .vsearch{padding:10px;background:#ededed;}#<uispace> .videoarea .vsearch .vsearchwrap{position:relative;border:1px solid #dfdfdf;}#<uispace> .videoarea .vsearch input{position:relative;z-index:10;width:458px;height:30px;line-height:30px;padding:4px 10px;margin:0;color:#333;font-size:14px;border:none;background-color:transparent;background:url(http://l.bst.126.net/rsc/img/common/empty.png) 0 0 repeat;outline:none;}#<uispace> .videoarea .vsearch label{position:absolute;left:12px;top:0;z-index:5;line-height:40px;line-height:40px;color:#ccc;font-size:14px;}#<uispace> .videoarea .searchinfo{visiblility:hidden;position:relative;width:100%;height:0px;overflow:hidden;opacity:0;}#<uispace> .videoarea .searchinfo .infoicon{position:absolute;left:220px;top:10px;width:40px;height:40px;}#<uispace> .videoarea .searchinfo .infotext{height:26px;line-height:26px;padding:50px 20px 4px 0;color:#333;text-align:center;background:#ededed;opacity:0.5;}#<uispace> .videoarea .videoshow{position:relative;height:0px;overflow:hidden;visibility:hidden;opacity:0;}#<uispace> .videoarea .videoshow .videowrap{}#<uispace> .videoarea .videoshow .rechoose{position:absolute;right:0;top:0;z-index:10;width:30px;height:30px;background-position:-1px -208px;cursor:pointer;}#<uispace> .videoarea.js-searching,#<uispace> .videoarea.js-addrerror{height:141px;}#<uispace> .videoarea.js-searching .searchinfo{visibility:visible;height:80px;opacity:1;}#<uispace> .videoarea.js-searching .searchinfo .infoicon{background-position:0 -102px;}#<uispace> .videoarea.js-addrerror .searchinfo{visibility:visible;height:80px;opacity:1;}#<uispace> .videoarea.js-addrerror .searchinfo .infoicon{background-position:0 0;}#<uispace> .videoarea.js-showvideo{height:305px;}#<uispace> .videoarea.js-showvideo .searchinfo,#<uispace> .videoarea.js-showvideo .vsearch{display:none;}#<uispace> .videoarea.js-showvideo .videoshow{visibility:visible;height:305px;opacity:1;}", bHu);
    var bsQ = E.ft('<object width="${width}" height="${height}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"><param name="movie" value="${src}"><param name="wmode" value="transparent"><param name="quality" value="high"><param name="flashvars" value="${flashvars|escape}"><embed width="${width}" height="${height}" src="${src}" flashvars="${flashvars|escape}"  menu="false" wmode="transparent" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></object>');
    var cHk = E.ft('<object width="${width}" height="${height}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0"><param name="movie" value="http://www.lofter.com/rsc/swf/video/lofterVideoPlayer.swf"><param name="wmode" value="transparent"><param name="quality" value="high"><param name="allowFullScreen" value="true"><param name="flashvars" value="${flashvars|escape}"><embed width="${width}" height="${height}"  src="http://www.lofter.com/rsc/swf/video/lofterVideoPlayer.swf" flashvars="${flashvars|escape}" allowFullScreen="true" menu="false" wmode="transparent" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></object>');
    var KQ = function(bp) {
        var mN = {
            flash: false,
            url: bp
        };
        if (oj[0].r.test(bp)) {
            return mN
        }
        for (var i = 0,
        l = Dm.length,
        hn; i < l; i++) {
            hn = Dm[i];
            if ( !! hn.r.test(bp)) {
                mN.flash = true;
                mN.url = !hn.s ? bp: hn.s.replace("$1", RegExp.$1);
                return mN
            }
        }
        return mN
    };
    var KS = function(bp, cHm) {
        if (!bp) return "";
        if (cHm) return oj[0].t;
        for (var i = 0,
        l = oj.length; i < l; i++) {
            if (oj[i].r.test(bp)) return oj[i].t
        }
        return ""
    };
    p.KZ = C();
    gO = p.KZ.bi(P(N.ui).ga, true);
    bfb = p.KZ.bw;
    p.KZ.cHs = function(bRv, bws, by) {
        if (by == "uservideo" || !!bRv.match(/\.mp4$/i)) {
            return E.dG(cHk, {
                width: 500,
                height: 500,
                flashvars: "controlbar=none&skin=http://www.lofter.com/rsc/swf/video/skin/skin.zip&file=" + bRv + "&image=" + bws
            })
        } else {
            var mN = KQ(bRv) || {},
            bp = mN.url || "",
            dz = 500,
            eT = 300;
            if (bp.indexOf("http://player.yinyuetai.com") == 0) {
                var cHv = bp.substring(bp.length - 6);
                if (cHv = "/a.swf") {
                    bp = bp.substring(0, bp.length - 6) + "/v.swf"
                }
            }
            return E.dG(bsQ, {
                src: bp,
                width: dz,
                height: eT,
                flashvars: ""
            })
        }
    };
    gO.bq = function(bl, I) {
        I = I || {};
        this.lZ = {};
        this.bHr(bl, I);
        V.bHo(this.pe, "input", this.kF.bHk(this));
        V.bHo(this.pe, "blur", this.KY.bHk(this));
        V.bHo(this.nG, "click", this.kY.bHk(this))
    };
    gO.kF = function(bHm) {
        this.KX();
        var bg = this.pe.value;
        if ( !! bg) {
            this.bZV()
        } else {
            this.bWG()
        }
    };
    gO.bWG = function() {
        E.bf(this.cMg, "js-hidetips")
    };
    gO.bZV = function() {
        E.ba(this.cMg, "js-hidetips")
    };
    gO.bz = function(I) {
        I = I || O;
        bfb.bz.call(this, I);
        this.bHq = I.data || null;
        this.jb = I.caption || "";
        this.wP = I.mode || "editable";
        if (this.wP == "preview") {
            this.nG.style.display = "none"
        }
        this.bHB = I.goPublishData;
        I.goPublishData = null;
        this.bHo("onchoose", I.onchoose || F);
        this.bHo("onrechoose", I.onrechoose || F);
        if ( !! this.bHB && !!this.bHB.videourl) {
            var bHT = (this.bHB || O).from || "";
            this.pe.value = this.bHB.videourl;
            this.kF();
            setTimeout(function(bHT) {
                this.KY(null, bHT)
            }.bHk(this, bHT), 0);
            this.bHB = null
        } else if ( !! this.bHq) {
            this.cHy(this.bHq, this.jb)
        } else {
            window.setTimeout(function() {
                this.pe.focus()
            }.bHk(this), 800)
        }
    };
    gO.cU = function() {
        return bHu + " videomanager"
    };
    gO.cM = function() { // js-postVideo 发布视频
        //return '<div class="videoarea ztag"><div class="vsearch ztag"><div class="vsearchwrap"><input type="text" class="ztag"><label class="ztag">贴入视频地址，支持土豆、优酷、乐视、bilibili等网站</label></div></div><div class="searchinfo ztag"><div class="infoicon f-pbicon ztag"></div><div class="infotext ztag"></div></div><div class="videoshow ztag"><div class="videowrap ztag"></div><div class="rechoose f-pbicon ztag"></div></div></div>'
        return '<iframe width="100%" height="700px;" frameborder="0" src="/article/add1"></iframe>';
    };
    gO.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        var Q = 0;
        this.cdB = bHl[Q++];
        this.dyV = bHl[Q++];
        this.pe = bHl[Q++];
        this.cMg = bHl[Q++];
        this.dyY = bHl[Q++];
        this.dza = bHl[Q++];
        this.cer = bHl[Q++];
        this.dmI = bHl[Q++];
        this.cMs = bHl[Q++];
        this.nG = bHl[Q++]
    };
    gO.kY = function(bHm) {
        V.bb(bHm);
        this.uA()
    };
    gO.uA = function() {
        this.oZ = null;
        this.pe.value = "";
        this.dmH();
        this.bh("onrechoose")
    };
    gO.KY = function(bHm, bHT) {
        this.oZ = null;
        this.KX();
        var ks = U.bA(this.pe.value);
        if (!ks) {
            return false
        }
        this.dmG();
        if (La.test(ks)) {}
        J.br(location.dwr, "PostBean", "videoSearch", ks, this.KW.bHk(this, bHT), this.KV.bHk(this))
    };
    gO.KW = function(bHT, bHn) {
        window.setTimeout(function(bHT, bHn) {
            if ( !! bHn) {
                if (bHn.code == 0) {
                    var bF = bHn.video_desc || bHn.video_name || "";
                    if ( !! bF) {
                        bF = "<p>" + bF + "</p>"
                    }
                    if ( !! bHT) bHn.from = bHT;
                    this.cHy(bHn, bF)
                } else {
                    this.qO(bHn.msg)
                }
            } else {
                this.qO()
            }
        }.bHk(this, bHT, bHn), 300)
    };
    gO.KV = function() {
        this.qO("不支持的视频地址!")
    };
    gO.cHy = function(bHn, bF) {
        if ( !! bHn && !!bHn.flashurl) {
            this.oZ = {
                flashurl: bHn.flashurl || "",
                video_img_url: bHn.video_img_url || "",
                originUrl: bHn.originUrl || ""
            };
            if ( !! bHn.from) this.oZ.from = bHn.from;
            this.cMs.innerHTML = p.KZ.cHs(bHn.flashurl, bHn.video_img_url, bHn.type || "");
            E.dt(this.cdB, "js-searching js-addrerror", "js-showvideo");
            this.bh("onchoose", bF || bHn.video_desc || bHn.video_name || "");
            if (bHn.type == "uservideo" || !!bHn.flashurl.match(/\.mp4$/i)) {
                this.cdB.style.height = this.dmI.style.height = "505px";
                this.nG.style.display = "none";
                this.oZ.type = "uservideo"
            }
        } else {
            this.qO()
        }
    };
    gO.qO = function(fU) {
        E.dt(this.cdB, "js-searching js-showvideo", "js-addrerror");
        this.cer.innerText = fU || "不支持的视频地址"
    };
    gO.KX = function() {
        E.bf(this.cdB, "js-addrerror");
        this.cer.innerText = ""
    };
    gO.dmG = function(fU) {
        E.dt(this.cdB, "js-addrerror js-showvideo", "js-searching");
        this.cer.innerText = fU || "正在搜索视频"
    };
    gO.dzc = function() {
        E.bf(this.cdB, "js-searching")
    };
    gO.dmH = function() {
        E.bf(this.cdB, "js-addrerror js-searching js-showvideo");
        if (this.pe.value == "") {
            this.bWG();
            this.cMs.innerHTML = ""
        }
    };
    gO.bfX = function() {
        return this.oZ
    };
    gO.KR = function(bp) {
        return KQ(bp)
    };
    gO.bpo = function(ks) {
        if (!this.Jp(ks)) {
            this.qO("不支持的视频地址!");
            this.pe.focus();
            return false
        } else {
            var bHn = {
                flashurl: this.lZ.url || "",
                video_img_url: ""
            };
            this.cHy(bHn);
            return true
        }
    };
    gO.Jp = function(ks) {
        var mN = this.KR(ks) || {},
        bp = mN.url,
        xt = KS(bp, mN.flash);
        this.lZ.url = bp;
        this.lZ.plugin = xt;
        if (!bp || bp.search("'|\"") >= 0 || !xt) {
            return false
        }
        return true
    }
})();

//
(function() {
    var p = P("loft.m.newpublish"),
    cC,
    bNy;
    p.bdM = C();
    cC = p.bdM.bi(loft.m.newpublish.w.cfF, true);
    bNy = p.bdM.bw;
    p.bdM.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    cC.bq = function(I) {
        I = I || {};
        this.Yz = {
            isCitePost: this.gn,
            onchoose: this.bmk.bHk(this),
            onrechoose: this.bmj.bHk(this)
        };
        this.bHr(I)
    };
    cC.bmk = function(bF) {
        this.bYL(this.bOW);
        var Z = this.bKA({
            noShowError: true
        });
        Z = loft.x.mP(Z);
        Z = loft.x.jo(Z);
        if (!Z) {
            this.ns(bF || "")
        }
        this.iD()
    };
    cC.bmj = function() {
        this.iD()
    };
    cC.bz = function(I) {
        I = I || {};
        this.bPQ = "new/video/";
        I.minFrameHeight = 150;
        I.maxFrameHeight = 150;
        I.autoHeightEnabled = true;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        var bTp = 581;
        I.maxFrameHeight = qx - 112 - 80 - bTp;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bNy.bz.call(this, I);
        this.bHB = I.goPublishData;
        this.Yz.goPublishData = this.bHB;
        I.goPublishData = null;
        this.cco("js-postVideo");
        if (this.bX != "NEW") {
            this.bYL(this.bOW)
        }
        this.bPA()
    };
    cC.bLU = function() {
        if ( !! this.bHB && !!this.bHB.videourl) {
            this.bJz();
            this.cHN();
            this.bHB = null;
            this.Yz.goPublishData = null
        } else {
            bNy.bLU.call(this)
        }
    };
    cC.cMW = function() {
        if (!this.bRe) return;
        if (!this.Yn) {
            this.Yn = P("loft.m.newpublish.w").KZ.bG(this.bRe, this.Yz)
        } else {
            this.Yn.bz(this.Yz)
        }
    };
    cC.bPA = function() {
        if (!this.bRe) {
            this.bRe = document.cloneElement("div", "vmanagerwrap");
            bNy.bPA.call(this, this.bRe)
        }
    };
    cC.bOS = function() {
        if ( !! this.Yn) {
            this.Yn.cK()
        }
        this.bRe = E.hE(this.bRe);
        bNy.bOS.call(this)
    };
    cC.cK = function() {
        bNy.cK.call(this)
    };
    cC.gU = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var hd;
        var cO = "";
        if ( !! this.Yn) {
            cO = P("loft.x").gW(this.Yn.bfX())
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if (!iX) {
                E.bd("请添加视频！", true, false, false, true);
                return
            }
        }
        hd = bNy.gU.call(this, I);
        var bF;
        if ( !! hd) {
            hd.caption = hd.content;
            hd.content = "";
            bF = hd.caption
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if ( !! iX) {
                if (!bF) return
            }
        }
        if ( !! hd) {
            hd.embed = cO
        }
        var cdI = this.Yn.bfX();
        if ( !! hd && !!cdI && !!cdI.from) {
            hd.from = cdI.from
        }
        return hd
    };
    cC.cHN = function(cO, cnK) {
        if ( !! cO) {
            this.Yz.data = cO;
            this.Yz.mode = cnK || "preview";
            this.cMW()
        } else {
            this.Yz.data = "";
            this.Yz.mode = "";
            this.cMW()
        }
    };
    cC.bJz = function(bN, bLA) {
        if (!bLA) {
            if ( !! bN && bN.embed != "") {
                try {
                    this.cookieVideoEmbed = U.bHx(decodeURIComponent(bN.embed))
                } catch(e) {
                    this.cookieVideoEmbed = null
                }
            } else {
                this.cookieVideoEmbed = null
            }
            if ( !! this.gt || this.bX == "REBLOG" || this.gn) {
                this.cHN(this.cookieVideoEmbed, "preview")
            } else {
                this.cHN(this.cookieVideoEmbed, "editable");
                if ( !! this.Yn) {
                    this.cHK = P("loft.x").gW(this.Yn.bfX())
                }
            }
        }
        bNy.bJz.call(this, bN, bLA)
    };
    cC.bLv = function(kA) {
        bNy.bLv.call(this, kA)
    };
    cC.bPN = function(bHn, dR, bc) {
        bNy.bPN.call(this, bHn, dR, bc)
    };
    cC.jN = function(bN) {
        bN = bN || this.bhw;
        if (this.bX == "NEW" || !bN || bN == "null") {
            var bF = this.bKA({
                noShowError: true
            });
            if ( !! bF) {
                return true
            }
            var cO, cdF;
            if ( !! this.Yn) {
                cdF = this.Yn.bfX()
            }
            if (this.bX != "REBLOG" && !!cdF) {
                cO = P("loft.x").gW(cdF)
            }
            if (!cO || cO == "null") {
                return false
            }
        } else {
            var ge = bN.caption;
            var bF = this.bKA({
                noShowError: true
            });
            if (! ( !! this.gt || this.bX == "REBLOG" || this.gn)) {
                var cO;
                if ( !! this.Yn) {
                    cO = P("loft.x").gW(this.Yn.bfX())
                }
                if (cO != this.cHK) {
                    return true
                }
            }
            if (this.bVM(ge)) {
                return false
            }
        }
        return true
    }
})();

(function() {
    var p = P("loft.m.newpublish"),
    bTV,
    dmC;
    p.bZU = C();
    bTV = p.bZU.bi(P(N.ut).gY);
    dmC = p.bZU.bw;
    p.bZU.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    p.bZU.cdP = function(I, bHm) {
        this.eb = this.YV(I);
        if ( !! this.eb) {
            this.eb.cdP(I, bHm)
        }
    };
    bTV.bq = function(I) {
        I = I || {};
        this.bHr(I);
        this.bz(I)
    };
    bTV.bz = function(I) {
        I = I || {};
        I.onpostovernum = this.dmB.bHk(this, I)
    };
    bTV.dmB = function(I) {
        if ( !! I) {
            I.postOverNum = true
        }
    };
    bTV.dmx = function(I, chz) {
        I = I || {};
        chz = chz || P("loft.c").bOj;
        if (!chz) return;
        var chC = ["goPublishData", "allowUploadDIYMusic", "v", "isAdvancedBrowser", "targetBlogInfo", "lastCCType", "postOverNum", "blogList", "submiterBlogInfo", "ue_cfg_develop", "ue_js_version", "mydomains"];
        for (var i = 0; i < chC.length; i++) {
            if (I[chC[i]] === undefined || typeof I[chC[i]] === "undefined") {
                I[chC[i]] = chz[chC[i]]
            }
        }
    };
    bTV.cdP = function(I, bHm) {
        I = I || {};
        this.dmx(I);
        if ( !! I.post) {
            I.postType = I.post.type || 1;
            var dmw = {
                1 : "text",
                2 : "photo",
                3 : "music",
                4 : "video"
            };
            I.editorType = dmw[I.postType] || "text"
        }
        if ( !! this.chG && !this.chG.cwd()) {
            if ( !! bHm) V.bb(bHm);
            return
        }
        if (I.editorType == "text") {
            I.defaultHeight = 470;
            this.chG = new p.beh(I)
        } else if (I.editorType == "photo") {
            I.defaultHeight = 415;
            this.chG = new p.bgL(I)
        } else if (I.editorType == "music") {
            if ( !! I.allowUploadDIYMusic) {
                I.defaultHeight = 253
            } else {
                I.defaultHeight = 183
            }
            this.chG = new p.bci(I)
        } else if (I.editorType == "video") {
            I.defaultHeight = 175;
            this.chG = new p.bdM(I)
        }
        if (I.actionType == "REBLOG") {
            window.setTimeout(this.dmu.bHk(this, I), 900)
        }
        window.setTimeout(this.dms.bHk(this, I), 1e3)
    };
    bTV.dms = function(I) {
        var cNo = -1,
        cNq = -1;
        if (I.actionType == "REBLOG" && !!I && !!I.post) {
            cNo = I.post.blogId;
            cNq = I.post.id
        }
        J.br(location.dwr, "PostBean", "checkAuthority", cNo, cNq, false, this.dmr.bHk(this))
    };
    bTV.dmr = function(bHn) {
        if ( !! bHn && bHn > 0) return;
        if (bHn == -1) {
            E.bd("暂时无法发布文章，请检查网络或重新登录！", true, true, false, true)
        } else if (bHn == -2) {
            E.bd("操作失败，请帐号解封后再试！", true, true, false, true)
        } else if (bHn == -3) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, true, false, true)
        } else {
            E.bd("暂时无法发布文章，请检查网络或重新登录！", true, true, false, true)
        }
        window.setTimeout(function() {
            E.gI(true)
        }.bHk(this), 5e3)
    };
    bTV.dmu = function(I) {
        var bc, dR;
        if ( !! I && !!I.post) {
            bc = I.post.blogId;
            dR = I.post.id
        }
        if ( !! bc && !!dR) {
            J.br(location.dwr, "PostBean", "isCitedByUser", bc, dR, this.dmq.bHk(this))
        }
    };
    bTV.dmq = function(bHn) {
        if (!bHn) return;
        var cNt = bHn["cited"];
        var bSh = bHn["citedBlogNickname"];
        if (bSh.length > 20) {
            bSh = bSh.substring(0, 20) + "..."
        }
        if (cNt == "hasCited") {
            E.bd("已经转载该文章到：" + bSh, true)
        } else if (cNt == "hasQueueCited") {
            E.bd("该文章已在 " + bSh + " 中设为定时发布！", true)
        }
    }
})();

(function() {
    var p = P("loft.m.newpublish.w"),
    bTW;
    p.bZM = C();
    bTW = p.bZM.bi(P(N.ut).gY, true);
    p.bZM.YV = function(I) {
        if ( !! this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    bTW.bq = function(I) {
        this.bHr();
        this.bNx = {
            "class": "w-pagelayer-publish",
            html: "",
            isNeedAnimation: true,
            opacity: 75,
            bgcolor: "#000",
            noDocClickDestroy: true
        };
        this.bz(I)
    };
    bTW.bz = function(I) {
        I = I || {};
        this.cow = I.editReblogFromPersonalPage;
        if ( !! this.cow) {
            this.bNc = E.be("preOpenCoverForPublish");
            if ( !! this.bNc && this.bNc.style.display != "none") {
                this.bNx.opacity = 0
            } else {
                this.bNx.opacity = 75
            }
        } else {
            this.bNx.opacity = 75
        }
        this.bKD = window.netease.lofter.widget.pageLayer.YV(document.body, this.bNx);
        this.cdw = I.redirectToUrl;
        this.bHG = I.publishOptions;
        this.dmp = I.needClearParamInUrl;
        this.bfZ = I.from || "";
        this.er = I.tag || "";
        this.bHo("onitemdelete", I.onitemdelete || F);
        this.bHo("onitemupdate", I.onitemupdate || F);
        this.bHo("onpublishlayerclose", I.onpublishlayerclose || F);
        var cND = document.cloneElement("div", "layerContainer");
        this.bKD.setHtmlContent(cND);
        this.dml(cND)
    };
    bTW.dml = function(bl) {
        this.bHG.parent = bl;
        this.bHG.onclosepublishlayer = this.dmj.bHk(this);
        this.bHG.onpostpublished = this.dmf.bHk(this);
        loft.m.newpublish.bZU.cdP(this.bHG)
    };
    bTW.dmj = function(cmj) {
        this.bh("onpublishlayerclose");
        if ( !! this.cdw) {
            this.gE();
            if ( !! cmj) {
                try {
                    cmj(true)
                } catch(e) {}
            }
            return
        } else {
            this.bKD.destroy();
            if ( !! this.cow && !!this.bNc) {
                this.bNc.style.display = "none"
            }
            if ( !! this.dmp) {
                P("loft.m.newpublish.w").dtg()
            }
        }
    };
    bTW.dmf = function(bN, RR, cmj) {
        this.bh("onpublishlayerclose", bN, RR);
        if ( !! this.cdw) {
            this.gE();
            if ( !! cmj) {
                try {
                    cmj(true)
                } catch(e) {}
            }
            return
        } else {
            this.bKD.destroy()
        }
        if (RR.actionType == "NEW" || RR.actionType == "REBLOG") return;
        if ( !! RR.isAutoPublish) {
            location.reload();
            return
        }
        var dme = this.bHG.post.blogId;
        if ( !! RR.isContribute || RR.isDraftPost && ( !! bN.isPublished || bN.queuePostType == 15 || bN.queuePostType == 16) || dme != bN.blogId && (this.bfZ == "bloglist" || this.bfZ == "draftlist") || this.dmd(bN)) {
            this.bh("onitemdelete", this.bHG.post)
        } else {
            this.cfr(bN.id, bN.blogId)
        }
    };
    bTW.gE = function() {
        if ( !! this.cdw) {
            var bp = this.cdw;
            if (bp.indexOf("http://www.lofter.com/control") >= 0 || bp.indexOf("http://reg.www.lofter.com/crossdomain.jsp") >= 0 || bp === location.href) {
                bp = loft.x.bM()
            }
            location.href = bp
        } else {}
    };
    bTW.dmd = function(bN) {
        if (this.bfZ == "tag" || this.bfZ == "hot") {
            if (bN.allowView == "100") {
                return true
            }
            if ( !! this.er) {
                var dmb = bN.tag || "",
                dma = dmb.split(","),
                Q = U.fO(dma, this.er);
                return Q == -1
            }
        }
        return false
    };
    bTW.cfr = function(dR, bc) {
        if ( !! dR && !!bc) {
            J.br(location.dwr, "TrackBean", "getTrackItem", dR, bc, this.ccd.bHk(this))
        } else {
            this.ccd(null)
        }
    };
    bTW.ccd = function(cNR) {
        if ( !! cNR) {
            this.bh("onitemupdate", cNR)
        }
    }
})(); (function() {
    var u = P(N.ut);
    var p = P("loft.m.dashboard"),
    Iw = 400,
    Cw = 300,
    rS = 500,
    CE = 164,
    buZ = 60 * 60 * 24 * 7 * 1e3,
    bua = 225,
    btZ = 320,
    rj = {},
    cI,
    eA,
    dzh,
    xO,
    uH,
    xN,
    hr,
    xM,
    bQP;
    var Jz = /\+/g;
    var bNw = function(bHn) {
        var Z = "";
        if (!bHn) return Z;
        if (bHn.type === 1) {
            Z = loft.x.bOY(bHn.content)
        } else if (bHn.type === 5) {
            Z = loft.x.bOY(bHn.answer)
        } else {
            Z = loft.x.bOY(bHn.caption)
        }
        return Z
    };
    var dlX = function(cOg, cGX) {
        cGX = cGX || "imgsrc";
        if ( !! cOg) {
            var dN = cOg.getElementsByTagName("img");
            var sF = (dN || O).length || 0;
            if ( !! dN && sF > 0) {
                for (var i = 0; i < sF; i++) {
                    if (!dN[i]) continue;
                    var In = dN[i].getAttribute(cGX);
                    if ( !! In && dN[i].src != In) {
                        dN[i].src = In;
                        dN[i].removeAttribute(this.bgy)
                    }
                }
            }
        }
    };
    p.iL = C();
    cI = p.iL.bi(u.fc, true);
    p.iL.btY = function(btX) {
        if ( !! this.eO) return this.eO;
        this.eO = "js-" + U.cA(6);
        return E.gD(E.dG(btX, {
            xtag: this.eO
        }), this.eO)
    };
    cI.bq = function(Tz) {
        this.eO = this.constructor.btY(Tz);
        this.bHr(this.eO);
        this.constructor.hb = null;
        this.bMe = this.cmr.bHk(this)
    };
    cI.ce = function(bHn) {
        p.iL.bw.ce.call(this, bHn);
        this.Of(false)
    };
    cI.cmr = function(dA) {
        var bNW = "icontag" + dA,
        bHl = E.bj(document.body, bNW);
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.width = bHl[i].style.marginLeft = bHl[i].style.opacity = 0
        }
        this.bJY("qbrecom_20140225_03")
    };
    cI.bJY = function(dlV) {
        if ( !! window.isInDashboard && !this.bHq.sharerBlogInfo && !this.bHq.followed) {
            loft.x.bHt(dlV)
        }
    };
    cI.hS = function(bHm, btW) {
        V.bb(bHm);
        var rP = E.cr(this.Y, "m-icnt-all");
        this.Zb = !rP;
        if (rP) {
            if (this.bHq.type == 2) {
                var iH = E.bj(this.Y, "exif");
                for (var l = iH.length; l--; E.bf(iH[l], "exif-open"), iH[l].style.display = "none");
            }
            E.bf(this.Y, "m-icnt-all");
            if (!btW) this.bh("oncollapse")
        } else {
            E.ba(this.Y, "m-icnt-all");
            if (this.bHq.type == 2) this.IU(bHm, true, !!this.eU ? this.eU.orign: null, !!this.eU ? this.eU.ow: 0, !!this.eU ? this.eU.oh: 0)
        }
        this.Of(!rP);
        return ! rP
    };
    cI.Of = function(fZ) {
        var Z;
        Z = bNw(this.bHq);
        if (!this.fN || !!this.rH && !( !! location.href.match(/http:\/\/www\.lofter\.com\/(hot|ad3)/ig) && this.bHq.type === 1)) return;
        this.Cw = Z.replace(/<.*?>/gi, "").length;
        if ( !! fZ) {
            if (this.bHq.type <= 3 && this.Cw <= Cw) {
                this.fN.parentNode.style.display = "none"
            } else {
                this.fN.parentNode.style.display = "";
                this.fN.innerText = "收起";
                E.dt(this.fN, "w-more-open", "w-more-close")
            }
        } else {
            if (this.Cw > Cw) {
                this.fN.parentNode.style.display = "";
                this.fN.innerText = "展开";
                E.dt(this.fN, "w-more-close", "w-more-open")
            } else {
                this.fN.parentNode.style.display = "none"
            }
        }
    };
    cI.bHC = function(I) {
        I = I || O;
        this.bHo("oncollapse", I.oncollapse || F);
        this.rH = !!I.expand;
        this.bKy = !!I.iself
    };
    cI.xK = function(fZ) {
        var tM = this.jS;
        var bF = bNw(this.bHq);
        if (!bF || !this.bHq.digest) return;
        if ( !! fZ) {
            this.jS.style.display = "none";
            this.bKQ.style.display = "block"
        } else {
            this.bKQ.style.display = "none";
            this.jS.style.display = "block"
        }
    };
    cI.CK = function() {};
    
    // 鼠标经过图片，就会进入此函数。调用它的函数是 uH.bdn = function (bHm, gu)
    cI.IU = function(bHm, gu, fV, py, Oe) {
        var X = V.be(bHm,
        function(CL) {
            return CL.className == "imgc"
        }),
        eJ,
        iH,
        Oa = 0,
        Jh = 0;
        py = py || 1;
        Oe = Oe || 1;
        if (!X) return;
        iH = E.dE(X, "exif");
        if (!iH || !iH.length) {
            if (!gu || !this.Zb) return;
            if (!fV) {
                eJ = X.getElementsByTagName("IMG")[0];
                if (!eJ) return;
                fV = eJ.getAttribute("large");
                Oa = eJ.clientHeight || 0;
                Jh = eJ.clientWidth || 0
            } else {
                Jh = py > rS ? rS: py;
                Oa = Jh * Oe / py
            }
            if (Oa < bua || Jh < btZ) return;
            this.Om(fV, X)
        } else {
            if (E.cr(iH[0], "exif-open")) return;
            iH[0].style.display = !!gu && !!this.Zb ? "": "none"
        }
    };
    cI.Om = function(fV, X) {
        if (!fV || !X) return;
        var bx = U.bcq(fV),
        bg = rj[bx];
        if (!bg) {
            if (!/\.(?:jpg|jpeg)$/.test(fV) && !loft.x.ceZ(fV)) {
                rj[bx] = "none";
                return
            }
            rj[bx] = "loading";
            J.br(location.dwr, "ImageBean", "getExif", fV, this.Cu.bHk(this, X, bx))
        } else {
            if (U.co(bg, "string") && (bg === "loading" || bg === "none")) {
                return
            } else {
                this.Cu(X, bx, bg)
            }
        }
    };
    cI.Cu = function(bl, bx, iH) {
        rj[bx] = iH || "none";
        if (!iH) return;
        bl.insertAdjacentHTML("beforeEnd", E.dG("m-track-jst-exif", iH))
    };
    cI.lg = function(go) {
        var g = P("loft.m");
        if (!go) {
            if ( !! g.playingItem && U.co(g.playingItem.lg, "function")) {
                g.playingItem.lg(true)
            }
            g.playingItem = this
        } else {
            if (g.playingItem === this) g.playingItem = null
        }
    };
    cI.cK = function() {
        var g = P("loft.m");
        if (g.playingItem === this) g.playingItem = null;
        p.iL.bw.cK.call(this)
    };
    cI.bVj = function(CL) {
        if (CL.nodeType == Node.ELEMENT_NODE) {
            var Ai = CL.getElementsByTagName("a"),
            i = 0,
            l = Ai.length;
            for (; i < l; i++) {
                if ( !! Ai[i].getAttribute("loftermentionblogId")) {
                    V.bHo(Ai[i], "mouseover", this.bHF.bHk(this, true, Ai[i], parseInt(Ai[i].getAttribute("loftermentionblogId"))));
                    V.bHo(Ai[i], "mouseout", this.bHF.bHk(this, false, Ai[i], parseInt(Ai[i].getAttribute("loftermentionblogId"))));
                    continue
                }
                if ( !! this.bHq.citeParentBlogInfo) {
                    if (Ai[i].innerText.indexOf(this.bHq.citeParentBlogInfo.blogNickName) === 0 && Ai[i].href === this.bHq.citeParentBlogInfo.homePageUrl + "/post/" + this.bHq.citeParentPermalink) {
                        V.bHo(Ai[i], "mouseover", this.bHF.bHk(this, true, Ai[i], this.bHq.citeParentBlogId));
                        V.bHo(Ai[i], "mouseout", this.bHF.bHk(this, false, Ai[i], this.bHq.citeParentBlogId));
                        continue
                    }
                }
                if ( !! this.bHq.citeRootBlogInfo) {
                    if (Ai[i].href.replace(/\/$/i, "") === loft.x.GX(this.bHq.citeRootBlogInfo.blogName, this.bHq.citeRootPostId, this.bHq.citeRootBlogId)) {
                        V.bHo(Ai[i], "mouseover", this.bHF.bHk(this, true, Ai[i], this.bHq.citeRootBlogId));
                        V.bHo(Ai[i], "mouseout", this.bHF.bHk(this, false, Ai[i], this.bHq.citeRootBlogId));
                        continue
                    }
                }
                if ( !! this.bHq.publisherMainBlogInfo) {
                    if (Ai[i].innerText === this.bHq.publisherMainBlogInfo.blogNickName && Ai[i].href.replace(/\/$/i, "") === this.bHq.publisherMainBlogInfo.homePageUrl.replace(/\/$/i, "")) {
                        V.bHo(Ai[i], "mouseover", this.bHF.bHk(this, true, Ai[i], this.bHq.publisherUserId));
                        V.bHo(Ai[i], "mouseout", this.bHF.bHk(this, false, Ai[i], this.bHq.publisherUserId));
                        continue
                    }
                }
            }
        }
    };
    cI.bHF = function(gu, CL, dA, bHm) {
        if (!loft.g.dousercard) return;
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu, {
                onFollowSucc: this.bMe
            })
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHm)
    };
    p.NZ = C();
    eA = p.NZ.bi(p.iL, true);
    eA.bq = function(bx) {
        this.bHr("m-track-jst-0");
        var bHl = E.bj(this.Y, this.eO),
        Q = 0;
        this.Zy = bHl[Q++];
        this.Jq = bHl[Q++];
        this.CS = bHl[Q++];
        this.xG = bHl[Q++];
        this.cOR = bHl[Q++];
        this.dzi = bHl[Q++];
        this.cOT = bHl[Q++];
        this.vh = E.bj(this.xG, "sela");
        this.fN = bHl[Q++];
        this.ZF = bHl[Q++];
        this.fz = bHl[Q++];
        this.bLm = bHl[Q++];
        this.ZG = bHl[Q++];
        this.Jx = bHl[Q++];
        this.cdU = bHl[Q++];
        this.btV = bHl[Q++];
        this.NY = bHl[Q++];
        this.cdV = bHl[Q++];
        this.ZL = bHl[Q++];
        this.CY = bHl[Q++];
        this.JC = bHl[Q++];
        this.bRH = bHl[Q++];
        this.JD = bHl[Q++];
        this.JO = bHl[Q++];
        this.JN = bHl[Q++];
        this.bJu = bHl[Q++];
        this.De = bHl[Q++];
        this.Dc = bHl[Q++];
        this.NX = bHl[Q++];
        this.dg = bHl[Q++];
        this.er = bHl[Q++];
        this.cPL = bHl[Q++];
        this.NV = bHl[Q++];
        this.NU = bHl[Q++];
        this.NT = bHl[Q++];
        this.cPP = bHl[Q++];
        this.vq = bHl[Q++];
        this.vr = bHl[Q++];
        this.bKt = bHl[Q++];
        this.NS = bHl[Q++];
        this.bUT = bHl[Q++];
        this.lw = bHl[Q++];
        this.Df = bHl[Q++];
        this.btT = bHl[Q++];
        this.btS = bHl[Q++];
        this.ccj = bHl[Q++];
        if (B.dh) {
            V.bHo(this.fN.parentNode.parentNode, "mouseover", this.Du.bHk(this, true));
            V.bHo(this.fN.parentNode.parentNode, "mouseout", this.Du.bHk(this, false))
        }
        V.bHo(this.NX, "click", this.btR.bHk(this));
        V.bHo(this.De, "click", this.btQ.bHk(this));
        V.bHo(this.bJu, "click", this.chV.bHk(this));
        V.bHo(this.JN, "click", this.btP.bHk(this));
        V.bHo(this.JO, "click", this.btO.bHk(this));
        V.bHo(this.lw, "click", this.btN.bHk(this));
        V.bHo(this.lw, "mouseover", this.baE.bHk(this, true));
        V.bHo(this.lw, "mouseout", this.baE.bHk(this, false));
        V.bHo(this.NT, "click", this.btM.bHk(this));
        V.bHo(this.Df, "click", this.baH.bHk(this));
        V.bHo(this.NS, "click", this.btL.bHk(this));
        V.bHo(this.bKt, "click", this.btG.bHk(this));
        V.bHo(this.vr, "click", this.btF.bHk(this));
        V.bHo(this.vq, "click", this.btD.bHk(this));
        V.bHo(this.bUT, "click", this.cFG.bHk(this));
        V.bHo(this.fz, "mouseover", this.baY.bHk(this, true, this.fz, null));
        V.bHo(this.fz, "mouseout", this.baY.bHk(this, false, this.fz, null));
        V.bHo(this.bLm, "click", this.ccc.bHk(this, 0));
        V.bHo(this.cdU, "click", this.ccc.bHk(this, 1));
        V.bHo(this.cdV, "click", this.ccc.bHk(this, 2));
        V.bHo(this.NU, "click", this.cca.bHk(this));
        V.bHo(this.NV, "click", this.cca.bHk(this));
        V.bHo(this.cPP, "click", this.dlT.bHk(this));
        this.dw = {
            oncollapse: this.btB.bHk(this),
            ondelask: this.bTO.bHk(this),
            onaddblack: this.cFB.bHk(this)
        };
        this.pg = {
            act: this.bKt.parentNode,
            oncmtupdate: this.bbb.bHk(this)
        }
    };
    eA.bTO = function(bMD, bc) {
        this.bh("ondelask", bMD, bc)
    };
    eA.cFB = function(bHK, xy) {
        this.bh("onblack", bHK, xy)
    };
    eA.btB = function() {
        var DJ = E.jO(this.Y),
        NN = document.documentElement.scrollTop || document.body.scrollTop;
        if (DJ < NN) {
            document.documentElement.scrollTop = document.body.scrollTop = DJ
        }
    };
    eA.Du = function(gu) {
        if ( !! gu) E.ba(this.fN.parentNode.parentNode, "isay-open");
        else E.bf(this.fN.parentNode.parentNode, "isay-open")
    };
    eA.baE = function(gu, bHm) {
        if ( !! gu) {
            if ( !! this.xs) {
                this.lw.innerText = "取消推荐"
            }
        } else {
            if ( !! this.xs) {
                this.lw.innerText = "已推荐"
            }
        }
        V.bb(bHm)
    };
    eA.baY = function(gu, CL, dA, bHm) {
        V.bb(bHm);
        if (!loft.g.dousercard) return;
        var JZ = {
            onFollowSucc: this.bMe
        };
        if (this.bHq.post.type === 5) {
            dA = dA || this.bHq.post.blogInfo.blogId
        } else {
            dA = dA || this.bHq.post.blogId
        }
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu, JZ)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
    };
    eA.btM = function(bHm) {
        V.bb(bHm);
        this.bh("ondelete", this.bHq.post.id || 0, this.bHq.post.blogId || 0)
    };
    eA.btR = function(bHm) {
        V.bb(bHm);
        this.bh("onrecommend", this.bHq.post.id, this.bHq.post.blogId, this.bHq.recommendState)
    };
    eA.btQ = function(bHm) {
        V.bb(bHm);
        this.bh("onrecommend", this.bHq.post.id, this.bHq.post.blogId, this.bHq.recommendState, true)
    };
    eA.chV = function(bHm) {
        V.bb(bHm);
        if ( !! E.cr(this.bJu, "j-nohover")) {
            return
        }
        this.bh("ondegradepost", this.bHq.post.id, this.bHq.post.blogId)
    };
    eA.btP = function(bHm) {
        V.bb(bHm);
        var NM = window.confirm("您确认过滤这篇文章？");
        if (!NM) return;
        this.bh("onfilterpost", this.bHq.post.id, this.bHq.post.blogId)
    };
    eA.btO = function(bHm) {
        V.bb(bHm);
        var NM = window.confirm("您确认屏蔽该用户？");
        if (!NM) return;
        this.bh("onforbidblog", this.bHq.post.blogId)
    };
    eA.bbl = function(di, df, sO, ciZ) {
        this.bHq.recommendState = di || 0;
        this.JD.style.display = !!this.sP || this.bVP === true ? "": "none";
        this.De.innerText = di === 2 ? "不推": "重推";
        if ( !! this.sP && this.bbp >= 0) {
            this.NX.innerText = !!di ? "去精": "加精";
            this.Dc.parentNode.style.display = "none";
            if ( !! di) {
                sO = sO || this.bHq.recommendTagPost;
                if ( !! sO && !!sO.editorUserId) {
                    this.Dc.src = loft.x.eK(sO.editorAvaImg, 14);
                    this.Dc.parentNode.href = loft.x.bM(sO.editorName);
                    this.Dc.parentNode.title = sO.editorNickname + "（" + U.ws(sO.publishTime, "yyyy-MM-dd HH:mm") + "）";
                    this.Dc.parentNode.style.display = ""
                }
            }
            if (this.sP === 2 || this.sP === 1) {
                this.De.parentNode.style.display = "";
                if (di > 0 || !!this.bHq.recommendTagPost && !!this.bHq.recommendTagPost.autoPostData) {
                    this.JN.parentNode.style.display = this.JO.parentNode.style.display = "none"
                } else {
                    this.JN.parentNode.style.display = this.JO.parentNode.style.display = ""
                }
                if ( !! df && di == 0 && this.bJu.parentNode.style.display == "none") {
                    this.JN.parentNode.style.display = this.JO.parentNode.style.display = ""
                }
            }
            if (this.bRi <= 0 && !this.bRu) this.De.parentNode.style.display = "none";
            if (this.bHq.recommendTagPost && !!this.bHq.recommendTagPost.autoPostData) {
                var bKP = this.bHq.recommendTagPost.autoPostData;
                if (!df) {
                    if (bKP.autoPostType == 3 || bKP.autoPostType == 4) {
                        E.ba(this.bJu, "j-nohover")
                    }
                    this.bJu.innerHTML = bKP.kopValue.toFixed(2).replace(/(\.00|0)$/ig, "");
                    this.bJu.title = "( 谱" + bKP.kopValue.toFixed(2).replace(/(\.00|0)$/ig, "") + " | 精" + bKP.recommendCount + " | 降" + bKP.degradeCount + " | 滤" + bKP.filterCount + " )";
                    this.bJu.parentNode.style.display = ""
                } else if ( !! df) {
                    if ( !! ciZ) {
                        this.bJu.parentNode.style.display = "none";
                        if (this.sP === 2 || this.sP === 1) {
                            this.JN.parentNode.style.display = this.JO.parentNode.style.display = ""
                        }
                    } else {
                        di != 0 ? E.ba(this.bJu, "j-nohover") : E.bf(this.bJu, "j-nohover")
                    }
                }
            }
            if ( !! this.bHq.misc && !df) {
                try {
                    var EA = U.bHx(this.bHq.misc);
                    if ( !! EA && !!EA["new"]) {
                        this.JD.insertAdjacentHTML("beforeBegin", '<span style="color:red;" title="来自新用户文章">　•</span>')
                    }
                    if ( !! EA && !!EA["goodblog"]) {
                        this.JD.insertAdjacentHTML("beforeBegin", '<span style="color:blue;" title="来自推荐博客">　•</span>')
                    }
                } catch(e) {}
            }
        } else if ((this.sP == 2 || this.sP == 1) && this.bbp < 0 || this.bVP === true) {
            this.NX.parentNode.style.display = "none";
            if (this.bRi <= 0 && !this.bRu) this.De.parentNode.style.display = "none";
            this.JO.parentNode.style.display = this.JN.parentNode.style.display = ""
        } else {
            this.JD.style.display = "none"
        }
        if (!df) {
            if (!P("loft.m.search.g").rtagId) {
                this.NX.style.display = "none"
            }
            return
        }
        var bbt = this.er.getElementsByTagName("A"),
        X,
        Q = U.fO(bbt,
        function(CL) {
            return CL.innerText.toLowerCase() === df.toLowerCase()
        });
        if (Q != -1) {
            X = bbt[Q];
            if (this.bbp >= 0) {
                if ( !! di) {
                    E.ba(X, "w-jing");
                    X.href = loft.x.bM() + "/tag/" + encodeURIComponent(df) + "?first=" + this.bHq.post.permalink;
                    X.title = "日志在该标签下列为精选";
                    E.hv(X.parentNode);
                    this.er.insertAdjacentElement("afterBegin", X.parentNode)
                } else {
                    E.bf(X, "w-jing");
                    X.href = loft.x.bM() + "/tag/" + encodeURIComponent(df);
                    X.title = ""
                }
            }
        }
        if (!P("loft.m.search.g").rtagId) {
            this.NX.style.display = "none"
        }
    };
    eA.DS = function(eF, bHm) {
        V.bb(bHm);
        if ( !! this.bKy) {
            this.bh("onlogincb", this.bHq.post.blogPageUrl);
            return
        }
        var cG = loft.c.cm.visitorEmail;
        if ( !! cG) {
            loft.w.EC.bE({
                parent: document.body,
                email: cG,
                target: eF
            })
        } else {
            loft.w.ED.bE({
                parent: document.body,
                target: eF
            })
        }
    };
    eA.btN = function(bHm) {
        V.bb(bHm);
        if (!loft.c.cm.userId) {
            if (P("loft.m.search.g").inTagSearchNologin) {
                loft.x.bHt("qbfdlbq_20141217_06");
                window.setTimeout(function() {
                    this.DS(location.href)
                }.bHk(this), 300)
            } else {
                this.DS(X.href)
            }
            return
        }
        if ( !! loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        if (!this.bTj || !!this.bbz) return;
        this.bbz = true;
        this.bh("onshare", this.bHq.post.id || 0, this.bHq.post.blogId || 0, !this.xs, this.btA.bHk(this));
        if (!this.xs) {
            this.bJY("qbselect_20121207_05")
        }
    };
    eA.btL = function(bHm) {
        var X = V.be(bHm);
        if (!loft.c.cm.userId) {
            V.bb(bHm);
            if (P("loft.m.search.g").inTagSearchNologin) {
                loft.x.bHt("qbfdlbq_20141217_08");
                window.setTimeout(function() {
                    this.DS(location.href)
                }.bHk(this), 300)
            } else {
                this.DS(X.href)
            }
            return
        }
        this.cca(bHm, "REBLOG");
        this.bJY("qbselect_20121207_04")
    };
    eA.btA = function(bbB, bbC, btz) {
        this.bbz = false;
        if (!btz) {
            if (bbB) {
                if ( !! bbC) {
                    this.JC.innerText = loft.c.cm.blogNickName || "";
                    this.JC.href = loft.x.bM(loft.c.cm.blogName);
                    this.CY.style.display = "";
                    this.CY.parentNode.style.display = ""
                }
                this.lw.parentNode.style.width = "36px";
                if (B.dh) {
                    this.lw.parentNode.style.width = "48px"
                }
                this.lw.innerText = "已推荐";
                this.xs = true;
                E.ba(this.bRH, "f-dn")
            } else {
                if ( !! bbC) {
                    this.CY.style.display = "none"
                }
                this.xs = false;
                this.lw.parentNode.style.width = "";
                this.lw.innerText = "推荐";
                if ( !! E.cr(this.bRH, "f-dn")) {
                    E.bf(this.bRH, "f-dn")
                }
            }
            this.NK(bbB ? 1 : -1)
        }
    };
    eA.baH = function(bHm) {
        V.bb(bHm);
        if (!loft.c.cm.userId) {
            if (P("loft.m.search.g").inTagSearchNologin) {
                loft.x.bHt("qbfdlbq_20141217_07");
                window.setTimeout(function() {
                    this.DS(location.href)
                }.bHk(this), 300)
            } else {
                this.DS(location.href)
            }
            return
        }
        if ( !! loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        if (!this.NL || !!this.bbG) return;
        this.bbG = true;
        var hM = this.bHq.liked;
        if ( !! hM) {
            E.bf(this.Df, "w-icn-0b-do-anim");
            E.ba(this.Df, "w-icn-0b-anim")
        } else {
            E.bf(this.Df, "w-icn-0b-anim");
            E.ba(this.Df, "w-icn-0b-do-anim")
        }
        this.bbJ(!hM);
        this.bh("onlike", this.bHq.post.id || 0, this.bHq.post.blogId || 0, hM);
        if (!hM) {
            this.bJY("qbselect_20121207_03")
        }
    };
    eA.btD = function(bHm) {
        V.bb(bHm);
        this.bh("onblack", this.bHq.post.publisherMainBlogInfo.blogName || "", this.bHq.post.publisherMainBlogInfo.blogNickName || "")
    };
    eA.NJ = function(hM, bty) {
        this.bbG = false;
        this.bHq.liked = !!hM;
        this.bbJ(hM, !!bty)
    };
    eA.NK = function(on) {
        on = on || 0;
        this.mO.favoriteCount += on;
        var bbT = this.mO.favoriteCount + this.mO.reblogCount + this.mO.shareCount;
        if (bbT < 0) {
            bbT = 0
        }
        this.vr.innerText = "热度(" + bbT + ")";
        if ( !! bbT) {
            this.vr.parentNode.style.display = "";
            if (this.vr.parentNode.parentNode.offsetWidth > 240) {
                this.er.style.width = 500 - this.Df.parentNode.parentNode.offsetWidth + "px"
            }
        } else {
            this.vr.parentNode.style.display = "none"
        }
    };
    eA.bbb = function(on) {
        this.mO.responseCount += on;
        if (this.mO.responseCount < 0) {
            this.mO.responseCount = 0
        }
        if ( !! this.mO.responseCount) {
            this.bKt.innerText = "评论(" + this.mO.responseCount + ")"
        } else {
            this.bKt.innerText = "评论"
        }
        if (on > 0) {
            this.bJY("qbselect_20121207_06")
        }
    };
    eA.bbJ = function(hM) {
        if ( !! hM) {
            E.ba(this.Df, "w-icn-0b-do")
        } else {
            E.bf(this.Df, "w-icn-0b-do")
        }
        this.Df.title = !!hM ? "取消喜欢": "喜欢"
    };
    var bOR = false;
    eA.btG = function(bHm) {
        V.bb(bHm);
        if (!loft.c.cm.userId && !this.mO.responseCount) {
            if (P("loft.m.search.g").inTagSearchNologin) {
                loft.x.bHt("qbfdlbq_20141217_05");
                window.setTimeout(function() {
                    this.DS(location.href)
                }.bHk(this), 300)
            } else {
                this.DS(X.href)
            }
            return
        }
        if (!loft.c.cm.userId && P("loft.m.search.g").inTagSearchNologin) {
            loft.x.bHt("qbfdlbq_20141217_05")
        }
        if ( !! bOR) return;
        bOR = true;
        window.setTimeout(function() {
            bOR = false
        },
        350);
        if ( !! this.fK && !!this.fK.lN) {
            this.fK = P("loft.w").lT.db(this.fK)
        } else {
            if ( !! this.jl && !!this.jl.lN) this.jl = P("loft.w").mZ.db(this.jl);
            if ( !! this.bKk && !!this.bKk.lN) {
                this.bKk = P("loft.w").bQY.db(this.bKk)
            }
            this.pg.isedit = this.lm;
            this.pg.pid = this.bHq.post.id;
            this.pg.bid = this.bHq.post.blogId;
            this.pg.followTime = this.bHq.followed;
            this.pg.commentRank = this.bHq.post.blogInfo.commentRank;
            this.pg.count = this.mO.responseCount || 0;
            this.pg.isReblog = this.bHq.post.citeRootPostId > 0;
            this.pg.isanonymous = !loft.c.cm.userId;
            this.pg.onanonymousclick = this.DS.Eo(this, location.href);
            this.fK = P("loft.w").lT.bG(this.btS, this.pg)
        }
    };
    eA.btF = function(bHm) {
        V.bb(bHm);
        if (!loft.c.cm.userId && P("loft.m.search.g").inTagSearchNologin) {
            loft.x.bHt("qbfdlbq_20141217_04")
        }
        if (!this.bbZ) this.bbZ = this.mO.favoriteCount + this.mO.reblogCount + this.mO.shareCount;
        if ( !! this.jl && !!this.jl.lN) {
            this.jl = P("loft.w").mZ.db(this.jl)
        } else {
            if ( !! this.fK && !!this.fK.lN) {
                this.fK = P("loft.w").lT.db(this.fK)
            }
            if ( !! this.bKk && !!this.bKk.lN) {
                this.bKk = P("loft.w").bQY.db(this.bKk)
            }
            this.jl = P("loft.w").mZ.bG(this.btT, {
                act: this.vr.parentNode,
                pid: this.bHq.post.id,
                bid: this.bHq.post.blogId,
                type: this.bHq.post.type,
                count: this.bbZ
            })
        }
    };
    eA.cFG = function(bHm) {
        V.bb(bHm);
        if ( !! this.bKk && !!this.bKk.lN) {
            this.bKk = P("loft.w").bQY.db(this.bKk)
        } else {
            if ( !! this.fK && !!this.fK.lN) {
                this.fK = P("loft.w").lT.db(this.fK)
            }
            if ( !! this.jl && !!this.jl.lN) {
                this.jl = P("loft.w").mZ.db(this.jl)
            }
            var dlS = this.btL.bHk(this);
            this.bKk = P("loft.w").bQY.bG(this.ccj, {
                shareTo: this.bUT.parentNode,
                post: this.bHq.post,
                reblogUrl: this.NS.href,
                onActReblog: dlS
            })
        }
    };
    eA.bHC = function(I) {
        this.bHo("onshare", I.onshare || F);
        this.bHo("onlike", I.onlike || F);
        this.bHo("onfollow", I.onfollow || F);
        this.bHo("ondelete", I.ondelete || F);
        this.bHo("onupdate", I.onupdateitem || F);
        this.bHo("onblack", I.onblack || F);
        this.bHo("onrecommend", I.onrecommend || F);
        this.bHo("ondegradepost", I.ondegradepost || F);
        this.bHo("onfilterpost", I.onfilterpost || F);
        this.bHo("onforbidblog", I.onforbidblog || F);
        this.bHo("ondelask", I.ondelask || F);
        this.bHo("onlogincb", I.onlogincb || F);
        this.bHo("oncontripass", I.oncontripass || F);
        this.tO = I.targetBlogId || 0;
        this.sP = I.recommenderRole || 0;
        this.bbp = I.rtagRank || 0;
        this.bRi = I.wallPostNum || 0;
        this.bRu = I.interestDomainTag || false;
        this.rH = !!I.expand;
        this.bKy = !!I.iself;
        this.cpp = !!I.expandPages;
        this.bVP = !!I.isActivityTagEditor;
        this.bKX = I.topconfig || P("loft.c").bOj || {};
        this.bJr = I.tag || "";
        this.dlR = I.isTimeBlog || false;
        this.bHG = {
            from: this.bKX.from,
            targetBlogInfo: this.bKX.targetBlogInfo,
            flashSessionCookie: this.bKX.v,
            lastCCType: this.bKX.lastCCType,
            postOverNum: this.bKX.postOverNum,
            blogList: this.bKX.blogList,
            ue_cfg_develop: this.bKX.ue_cfg_develop,
            ue_js_version: this.bKX.ue_js_version,
            allowUploadDIYMusic: !!this.bKX.allowUploadDIYMusic
        };
        this.bHG.mydomains = this.bKX.mydomains || {};
        this.cRd = !!I.newpublish;
        if ( !! this.cRd && !!loft.m.newpublish.w.bRG && !loft.m.newpublish.w.bRG.exedPreLoading) {
            loft.m.newpublish.w.bRG.exedPreLoading = true;
            var cbg = {
                ue_cfg_develop: this.bKX.ue_cfg_develop,
                ue_js_version: this.bKX.ue_js_version
            };
            window.setTimeout(function() {
                loft.m.newpublish.w.bRG.YV(cbg)
            }.bHk(this), 1)
        }
    };
    eA.cK = function() {
        if ( !! this.bHq.repeat) {
            E.bf(this.Y, "m-mlist-self")
        }
        this.NH = this.iG.db(this.NH);
        p.NZ.bw.cK.call(this)
    };
    eA.btx = function(bN) {
        var bcd, dlQ = this.iG;
        bN.type = bN.type || 1;
        switch (bN.type) {
        case 1:
            this.iG = p.DU;
            break;
        case 2:
            try {
                bcd = U.bHx(bN.photoLinks).length
            } catch(e) {}
            this.iG = bcd > 1 ? p.EV: p.NG;
            break;
        case 3:
            this.iG = p.qT;
            break;
        case 4:
            this.iG = p.bRf;
            break;
        case 5:
            this.iG = p.ckg;
            break;
        case 6:
            this.iG = p.cRk;
            break;
        default:
            this.iG = null
        }
        try {
            if ( !! this.iG) {
                this.dw.expand = !!this.rH;
                this.dw.iself = !!this.bKy;
                this.dw.expandPages = !!this.cpp;
                if ( !! this.NH) {
                    if (this.NH instanceof this.iG) {
                        this.NH.ce(bN)
                    } else {
                        dlQ.db(this.NH);
                        this.NH = this.iG.bG(bN, this.dg, this.dw)
                    }
                } else {
                    this.NH = this.iG.bG(bN, this.dg, this.dw);
                    if (bN.type === 6) {
                        var cki = this.dg.parentNode.parentNode.parentNode.parentNode;
                        E.ba(cki, "f-trans2");
                        cki.style.height = "361px";
                        cki.style.opacity = 1;
                        cki.style.display = "block";
                        cki.style.overflow = "hidden"
                    }
                }
                if ( !! this.rH && bN.type == 2) this.NF()
            }
        } catch(e) {
            alert(e)
        }
    };
    eA.NF = function() {
        this.NH.hS(null, true)
    };
    eA.bct = function(bN, bp) {
        bN = bN || this.bHq.post;
        bp = bp || loft.x.bM(bN.blogInfo.blogName);
        if ( !! this.bHq.repeat || !!this.bKy) {
            E.ba(this.Y, "m-mlist-self")
        } else {
            E.bf(this.Y, "m-mlist-self");
            if ( !! bN && bN.type == 5 && !bN.answer && !!bN.anonymous) {
                this.Jq.src = loft.x.eK();
                this.Jq.parentNode.removeAttribute("href");
                this.Jq.parentNode.style.cursor = "default";
                this.xG.style.display = "none"
            } else if ( !! bN && bN.type == 6) {
                this.Jq.src = loft.x.eK(bN.blogInfo.bigAvaImg);
                this.Jq.parentNode.href = bN.blogInfo.bigAvaUrl + "&act=qbcnxh_20150804_03&t=" + (new Date).getTime();
                this.xG.style.display = "none"
            } else {
                this.Jq.src = loft.x.eK(bN.blogInfo.bigAvaImg);
                this.Jq.parentNode.href = bp;
                this.Jq.parentNode.style.cursor = "";
                if (!this.isMouseOverRegistered) {
                    V.bHo(this.Zy, "mouseover", this.baY.bHk(this, true, this.Zy, null));
                    V.bHo(this.Zy, "mouseout", this.baY.bHk(this, false, this.Zy, null));
                    this.isMouseOverRegistered = true
                }
            }
            if ( !! bN.publisherMainBlogInfo && bN.publisherMainBlogInfo.blogId != bN.blogInfo.blogId && bN.blogInfo.blogName != "i" && bN.blogInfo.blogName != "loftcam") {
                this.CS.src = loft.x.eK(bN.publisherMainBlogInfo.bigAvaImg, 45);
                this.CS.parentNode.href = loft.x.bM(bN.publisherMainBlogInfo.blogName);
                V.bHo(this.CS, "mouseover", this.baY.bHk(this, true, this.CS, bN.publisherMainBlogInfo.blogId));
                V.bHo(this.CS, "mouseout", this.baY.bHk(this, false, this.CS, bN.publisherMainBlogInfo.blogId))
            } else {
                this.CS.parentNode.parentNode.style.display = "none"
            }
        }
    };
    eA.ce = function(bHn) {
        if (!bHn) retrun;
        if ( !! bHn.novisible) {
            this.Y.style.display = "none";
            return
        } else {
            this.Y.style.display = ""
        }
        var bJ = P("loft.m.ditem.g");
        if ( !! bHn.promote) {
            if (!bJ.blackTrackPromote) {
                bJ.blackTrackPromote = function(dlP, cpC, cpG) {
                    J.br(location.dwr, "TrackBean", "updateUserBlackTrackPromote", dlP, cpC,
                    function(cpC, cpG, bu) {
                        if (cpC == "nocare" && !!cpG) {
                            cpG.style.display = "none"
                        }
                        if ( !! bu) {}
                    }.bHk(this, cpC, cpG))
                }
            }
            if (!bJ.onWinScroll) {
                var cpH;
                var cRr = bHn;
                var cpJ = this.Y;
                var cEN = function() {
                    if (!cpJ) return;
                    var qx = document.documentElement.clientHeight || 0;
                    var bud = E.jO(cpJ);
                    var eT = cpJ.clientHeight || 0;
                    var kj = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    var bMS = kj;
                    var bUs = bMS + qx;
                    var Zt = bud;
                    var bCp = Zt + eT;
                    var bu = -999;
                    if (bCp < bMS) {
                        bu = -1
                    } else if (Zt > bUs) {
                        bu = 1
                    } else {
                        bu = 0
                    }
                    if (bu === 0) {
                        cEN.isExced = true;
                        loft.m.ditem.g.blackTrackPromote(cRr.trackAppPromoteId || 0, "lookonce", cpJ);
                        loft.x.bHt("qbpcdashboardcontentad" + (cRr.trackAppPromoteId || 0) + "_2015729_01")
                    }
                };
                bJ.onWinScroll = function(bHm) {
                    if ( !! cEN.isExced) {
                        V.iJ(window, "scroll", bJ.onWinScroll);
                        return
                    }
                    if (cpH) cpH = window.clearTimeout(cpH);
                    cpH = window.setTimeout(function() {
                        cEN()
                    },
                    200)
                }
            }
            V.iJ(window, "scroll", bJ.onWinScroll);
            V.bHo(window, "scroll", bJ.onWinScroll);
            var cRt = (E.bj(this.Y, "nocare-hvlayer") || [])[0];
            if ( !! cRt) {
                cRt.onclick = function(bHn) {
                    loft.m.ditem.g.blackTrackPromote(bHn.trackAppPromoteId || 0, "nocare", this.Y)
                }.bHk(this, bHn)
            }
            E.ba(this.Y, "js-promote-itm")
        } else {
            E.bf(this.Y, "js-promote-itm")
        }
        this.bHq = bHn;
        var bN = bHn.post,
        bp = loft.x.bM(bN.blogInfo.blogName);
        if ( !! bN && bN.type == 5) {
            bN.canAsk = bHn.canAsk
        }
        this.btx(bHn.post || {});
        this.NJ( !! bHn.liked, true);
        try {
            this.bHq.miscJSON = U.bHx(this.bHq.misc)
        } catch(e) {}
        this.bct(bN, bp);
        this.ckA(bN, bp);
        var bcv = loft.x.bM() + "/reblog/" + bN.permalink || "";
        this.NS.href = !!loft.c.cm.userId ? bcv: loft.x.Ru(bcv);
        this.mO = bN.postCount || O;
        this.NK(0);
        this.bbb(0);
        this.btv(bN.tag, bN.recommendTags);
        this.btu(bN);
        if ( !! bN.isPublished && bN.allowView == 0) {
            this.fN.href = bp + "/post/" + bN.permalink || "";
            this.fN.title = "查看全文 - " + loft.x.qB(bN.publishTime || 0);
            var btt = bN.blogInfo.commentRank == 10 || bN.blogInfo.commentRank == 11;
            this.bKt.parentNode.style.display = btt ? "": "none";
            this.fN.style.display = "";
            this.ZF.style.display = "none";
            this.fN.onclick = function() {
                loft.x.bHt("qbckqw_20150213_01")
            }
        } else {
            this.bKt.parentNode.style.display = "none";
            this.fN.style.display = "";
            this.fN.style.cursor = "default";
            this.fN.title = loft.x.qB(bN.publishTime || 0);
            this.fN.onclick = function() {
                return false
            }
        }
        var bcC = !!bN.isPublished && bN.allowView >= 100;
        this.ZL.style.display = bcC ? "": "none";
        if (bcC) {
            this.ZL.parentNode.style.display = ""
        }
        this.bbl( !! bHn.recommendTagPost && bHn.recommendTagPost["status"] >= 0 ? bHn.recommendTagPost["status"] == 0 ? 2 : 1 : 0);
        if (bN.type === 6) {
            this.Df.parentNode.parentNode.parentNode.style.display = "none";
            E.ba(this.fN.parentNode.parentNode, "guslk-area")
        }
        if (this.Df.parentNode.parentNode.offsetWidth > 240) {
            this.er.style.width = 500 - this.Df.parentNode.parentNode.offsetWidth + "px"
        }
        this.dlM(bN, bp)
    };
    eA.dlM = function(bN, bp) {
        if ( !! this.dlR) {
            if ( !! bN.queuePost && !!bN.queuePost.publishTime) {
                this.cOR.style.display = "block";
                var bHL = U.ws(bN.queuePost.publishTime, "MM/dd HH:mm").split(" ");
                this.cOT.innerHTML = "<strong>" + bHL[0] + "</strong>" + bHL[1]
            }
            if (bN.valid === 16) {
                E.ba(this.cOT, "time-1");
                this.Y.id = "qpostid" + bN.id;
                E.ba(this.Y, "canDragging")
            } else {
                E.hE(this.cPL)
            }
            this.ZF.style.display = "";
            this.fN.style.display = this.vr.parentNode.style.display = this.bKt.parentNode.style.display = this.NS.parentNode.style.display = this.lw.parentNode.style.display = this.Df.parentNode.style.display = "none";
            this.Zy.style.display = "none";
            E.bf(this.Y, "m-mlist-self")
        } else {
            this.Zy.style.display = "";
            this.cPP.parentNode.style.display = this.cOR.style.display = this.cPL.style.display = "none"
        }
    };
    eA.ckA = function(bN, bp) {
        if (this.tO === bN.blogId) {
            this.fz.style.display = this.bLm.style.display = "none"
        } else if (bN.type === 6) {
            this.fz.parentNode.style.display = "none"
        } else {
            this.fz.href = this.Jq.parentNode.href = bp;
            this.fz.innerText = bN.blogInfo.blogNickName || "";
            if (!this.bKy) {
                this.bLm.title = "关注 " + bN.blogInfo.blogNickName || "";
                E.ba(this.bLm, "icontag" + bN.blogInfo.blogId);
                this.bLm.style.display = this.bHq.followed ? "none": ""
            } else {
                this.bLm.style.display = "none"
            }
        }
        this.btV.style.display = this.NY.style.display = this.cdV.style.display = "none";
        if ( !! bN.citeParentBlogInfo) {
            this.ZG.style.display = this.Jx.style.display = "";
            if (!this.bKy) {
                var cRB = 1;
                try {
                    cRB = parseInt(this.bHq.miscJSON.parentFollowed)
                } catch(e) {}
                this.cdU.style.display = cRB === 1 ? "none": "";
                this.cdU.title = "关注 " + bN.citeParentBlogInfo.blogNickName || "";
                E.ba(this.cdU, "icontag" + bN.citeParentBlogInfo.blogId)
            } else {
                this.cdU.style.display = "none"
            }
            this.Jx.href = loft.x.GX(bN.citeParentBlogInfo.blogName, bN.citeParentPostId, bN.citeParentBlogId);
            this.Jx.innerText = bN.citeParentBlogInfo.blogNickName || "";
            V.bHo(this.Jx, "mouseover", this.baY.bHk(this, true, this.Jx, bN.citeParentBlogId));
            V.bHo(this.Jx, "mouseout", this.baY.bHk(this, false, this.Jx, bN.citeParentBlogId));
            if (bN.citeRootBlogId != bN.citeParentBlogId && !!bN.citeRootBlogInfo) {
                this.btV.style.display = this.NY.style.display = "";
                if (!this.bKy) {
                    this.cdV.style.display = parseInt(this.bHq.miscJSON.rootFollowed) != 1 ? "": "none";
                    this.cdV.title = "关注 " + bN.citeRootBlogInfo.blogNickName || "";
                    E.ba(this.cdV, "icontag" + bN.citeRootBlogInfo.blogId)
                } else {
                    this.cdV.style.display = "none"
                }
                this.NY.innerText = bN.citeRootBlogInfo.blogNickName || "";
                this.NY.href = loft.x.GX(bN.citeRootBlogInfo.blogName, bN.citeRootPostId, bN.citeRootBlogId);
                V.bHo(this.NY, "mouseover", this.baY.bHk(this, true, this.NY, bN.citeRootBlogId));
                V.bHo(this.NY, "mouseout", this.baY.bHk(this, false, this.NY, bN.citeRootBlogId))
            }
        } else {
            this.ZG.style.display = this.Jx.style.display = this.cdU.style.display = "none";
            if (this.tO === bN.blogId) this.fz.parentNode.style.display = "none"
        }
        this.xs = !!this.bHq.shared;
        if ( !! this.bHq.sharerBlogInfo) {
            var bcu = this.bHq.sharerBlogInfo;
            this.JC.innerText = bcu.blogNickName || "";
            this.JC.href = loft.x.bM(bcu.blogName);
            this.CY.style.display = "";
            this.CY.parentNode.style.display = "";
            V.bHo(this.JC, "mouseover", this.baY.bHk(this, true, this.JC, bcu.blogId));
            V.bHo(this.JC, "mouseout", this.baY.bHk(this, false, this.JC, bcu.blogId))
        }
        if (this.xs) {
            this.lw.parentNode.style.width = "36px";
            if (B.dh) {
                this.lw.parentNode.style.width = "48px"
            }
            this.lw.innerText = "已推荐"
        }
        var bcC = !!bN.isPublished && bN.allowView >= 100;
        var dlL = bN.citeParentBlogId || bN.citeRootBlogId;
        if ( !! this.bHq.loftRecom && !bcC && !dlL && !!loft.c.cm.userId && this.bHq.followed == 0 && !this.bHq.sharerBlogInfo) {
            var ckI = location.href || "";
            ckI = ckI.split("#")[0] || "";
            ckI = ckI.split("?")[0] || "";
            if ( !! ckI.match(/(www.lofter.com\/dashboard)|(www.lofter.com)[\/]?$/ig)) {
                this.bRH.style.display = "";
                this.bJY("qbrecom_20140225_01")
            } else {
                this.bRH.style.display = "none"
            }
        } else {
            this.bRH.style.display = "none"
        }
    };
    eA.bcA = function() {
        var jw = !!this.bHq.followed,
        bHK = this.bHq.post.blogInfo.blogName || "",
        bc = this.bHq.post.blogInfo.blogId || 0;
        this.xj = jw;
        this.vh[0].href = loft.x.bM() + "/favblog?bn=" + bHK + "&act=dashboardlike_20130725";
        this.vh[1].href = loft.x.bM() + "/explore?type=follow&bid=" + bc + "&act=dashboardfollow_20130725";
        this.vh[2].href = loft.x.bM() + "/message/" + bHK + "/?target=dashboard";
        this.vh[3].innerText = jw ? "取消关注": "关注";
        if ( !! jw) {
            E.dt(this.vh[3], "sel3", "sel2")
        } else {
            E.dt(this.vh[3], "sel2", "sel3")
        }
        if ( !! this.bHq.showLike) {
            this.vh[0].parentNode.style.display = ""
        } else {
            this.vh[0].parentNode.style.display = "none"
        }
        if ( !! this.bHq.showFollow) {
            this.vh[1].parentNode.style.display = ""
        } else {
            this.vh[1].parentNode.style.display = "none"
        }
    };
    eA.kc = function(bHm) {
        V.bb(bHm);
        if ( !! this.bLm) {
            var bNW = "icontag" + this.bHq.post.blogInfo.blogId,
            bHl = E.bj(document.body, bNW);
            for (var i = 0; i < bHl.length; i++) {
                bHl[i].style.width = bHl[i].style.marginLeft = bHl[i].style.opacity = 0
            }
        }
        this.bh("onfollow", this.bHq.post.blogId, !!this.xj)
    };
    eA.ccc = function(by, bHm) {
        var bn = V.be(bHm).className.split(" "),
        bNW;
        for (var i = 0; i < bn.length; i++) {
            if (bn[i].indexOf("icontag") >= 0) {
                bNW = bn[i];
                break
            }
        }
        var Lt, X = V.be(bHm),
        bHl = E.bj(document.body, bNW);
        V.bb(bHm);
        if (!loft.c.cm.userId) {
            this.DS(location.href);
            return
        }
        if ( !! loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        for (var i = 0; i < bHl.length; i++) {
            bHl[i].style.width = bHl[i].style.marginLeft = bHl[i].style.opacity = 0
        }
        switch (by) {
        case 0:
            Lt = this.bHq.post.blogId;
            break;
        case 1:
            Lt = this.bHq.post.citeParentBlogId;
            break;
        case 2:
            Lt = this.bHq.post.citeRootBlogId;
            break
        }
        this.bh("onfollow", Lt, false);
        this.bJY("qbrecom_20140225_03")
    };
    eA.bts = function(bN, Fe) {
        if ( !! Fe) {
            this.vq.parentNode.style.display = "";
            this.NV.parentNode.style.display = ""
        } else {
            this.vq.parentNode.style.display = "none";
            this.NV.parentNode.style.display = "none"
        }
    };
    eA.btu = function(bN) {
        var io = loft.c.jg,
        i = 0,
        l = io.length,
        ND = false;
        for (; i < l; i++) {
            if (io[i].blogId === bN.blogId) {
                if (io[i].role === 1 || io[i].role === 10 || bN.publisherUserId === loft.c.cm.userId || !!bN.isContribute) {
                    ND = true;
                    break
                }
            }
        }
        this.lm = ND;
        var Fe = !!bN.isContribute && !bN.isPublished;
        if ( !! ND) {
            this.NU.parentNode.style.display = Fe ? "none": "";
            this.NT.parentNode.style.display = ""
        } else {
            this.NU.parentNode.style.display = this.NT.parentNode.style.display = "none"
        }
        var bcO = !!bN.isPublished && bN.allowView == 0;
        this.bto = bcO && (loft.c.jg.length > 1 || bN.blogId != loft.c.cm.userId);
        if ( !! bN && bN.type == 5) {
            this.bto = false
        }
        this.NL = bcO && (bN.publisherUserId != loft.c.cm.userId || !!bN.isContribute);
        this.bTj = bcO && bN.blogId != loft.c.cm.userId;
        this.NS.parentNode.style.display = this.bto ? "": "none";
        this.Df.parentNode.style.display = this.NL ? "": "none";
        this.lw.parentNode.style.display = this.bTj ? "": "none";
        this.bts(bN, Fe);
        this.NU.href = this.NV.href = loft.x.bM() + "/edit/" + bN.permalink;
        var bcC = !!bN.isPublished && bN.allowView >= 100;
        if (bcC || !!bN && bN.type == 5) {
            this.bUT.parentNode.style.display = "none"
        } else {
            this.bUT.parentNode.style.display = ""
        }
        if ( !! this.ccj && !!this.ccj.parentNode) {
            if (!this.bto) {
                E.ba(this.ccj.parentNode, "js-reblogdisabled")
            } else {
                E.bf(this.ccj.parentNode, "js-reblogdisabled")
            }
        }
    };
    eA.cca = function(bHm, HG) {
        if (!this.cRd || this.bHq.post.type == 5) return;
        HG = HG || "EDIT";
        V.bb(bHm);
        var X = V.be(bHm);
        var I = this.bHG;
        I.actionType = HG;
        I.post = this.bHq.post;
        I.submitUrl = X.href;
        var bJK = {};
        bJK.publishOptions = I;
        bJK.onitemdelete = this.cRT.bHk(this);
        bJK.onitemupdate = this.cRU.bHk(this);
        bJK.from = this.bKX.from || "";
        bJK.tag = this.bJr || "";
        P("loft.m.newpublish.w").bZM.YV(bJK)
    };
    eA.dlT = function(bHm) {
        V.bb(bHm);
        this.bh("oncontripass", this.bHq.post.id || 0, this.bHq.post.blogId || 0)
    };
    eA.cRT = function(bN) {
        this.bh("ondelete", bN.id || 0, bN.blogId || 0, true)
    };
    eA.cRU = function(bHn) {
        if ( !! this.NH && !!this.NH.Y && E.cr(this.NH.Y, "m-icnt-all")) {
            this.NH.hS()
        }
        this.bh("onupdate", this.bHq.post.id, bHn)
    };
    eA.btv = function(df, bcQ) {
        df = U.ew(df) || "";
        if (!df || !df.length) {
            this.er.style.display = "none";
            return
        }
        this.er.style.display = "";
        var ck = df.split(","),
        i = 0,
        l = ck.length,
        fv = [],
        Q,
        Fh = !!bcQ ? bcQ.slice(0) : null;
        for (; i < l; i++) {
            if (ck[i] == "我在LOFTER") {
                var yk = loft.x.bM() + "/tag/" + encodeURIComponent(ck[i]);
                if (P("loft.m.search.g").inTagSearchNologin) {
                    yk = yk + "?act=qbfdlbq_20141217_03"
                }
                fv.push('<span class="opti w-liang"><a ' + ( !! this.bKy ? 'target="_blank"': "") + ' href="' + yk + '"><span>' + ck[i] + "</span></a></span>");
                break
            }
            Q = -1;
            if ( !! Fh && !!Fh.length) {
                Q = U.fO(Fh, ck[i].toLowerCase())
            }
            if (Q == -1) {
                var ckY = U.fO(loft.c.ccv, U.Ua(ck[i].toLowerCase()));
                if (ckY >= 0 && this.bHq.post.citeParentPostId <= 0) {
                    var yk = loft.x.bM() + "/tag/" + encodeURIComponent(U.Ua(ck[i])) + "?first=" + this.bHq.post.permalink;
                    if (P("loft.m.search.g").inTagSearchNologin) {
                        yk = yk + "&act=qbfdlbq_20141217_03"
                    }
                    fv.unshift('<span class="opti"><a ' + ( !! this.bKy ? 'target="_blank"': "") + ' title="日志参与了该标签下的话题" class="w-liang" href="' + yk + '"><span>' + ck[i] + "</span></a></span>")
                } else {
                    var yk = loft.x.bM() + "/tag/" + encodeURIComponent(U.Ua(ck[i]));
                    if (P("loft.m.search.g").inTagSearchNologin) {
                        yk = yk + "?act=qbfdlbq_20141217_03"
                    }
                    fv.push('<span class="opti"><a ' + ( !! this.bKy ? 'target="_blank"': "") + ' href="' + yk + '"><span>' + ck[i] + "</span></a></span>")
                }
            } else {
                Fh.splice(Q, 1);
                var yk = loft.x.bM() + "/tag/" + encodeURIComponent(U.Ua(ck[i])) + "?first=" + this.bHq.post.permalink;
                if (P("loft.m.search.g").inTagSearchNologin) {
                    yk = yk + "&act=qbfdlbq_20141217_03"
                }
                fv.unshift('<span class="opti"><a ' + ( !! this.bKy ? 'target="_blank"': "") + ' title="日志在该标签下列为精选" class="w-jing" href="' + yk + '"><span>' + ck[i] + "</span></a></span>")
            }
        }
        this.er.innerHTML = fv.join("");
        var cRZ = this.er.children,
        bo, cEt;
        for (i = 0, l = cRZ.length; i < l; i++) {
            bo = cRZ[i],
            cEt = bo.children[0].innerText;
            V.bHo(bo, "mouseover", this.bVl.bHk(this, true, bo, cEt));
            V.bHo(bo, "mouseout", this.bVl.bHk(this, false, bo, cEt))
        }
    };
    eA.bVl = function(gu, CL, df, bHm) {
        if ( !! gu) {
            loft.g.dousercard(CL, 0, gu, {
                tag: df,
                jst: "m-usercard-jst-2",
                cardHeight: 205
            })
        } else {
            loft.g.dousercard(CL, 0, gu)
        }
        V.bb(bHm)
    };
    p.cRk = C();
    bRY = p.cRk.bi(p.iL, true);
    bRY.bq = function() {
        this.bHr("m-track-jst-guesslike");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.dlI = bHl[i++];
        this.dlH = bHl[i++];
        this.dlD = bHl[i++];
        this.cSh = bHl[i++];
        this.dlx = bHl[i++];
        this.dlw = bHl[i++];
        this.dlv = bHl[i++];
        this.dlu = bHl[i++];
        this.dlt = bHl[i++];
        this.dls = bHl[i++];
        this.cSn = bHl[i++];
        this.dlr = bHl[i++];
        this.dlq = bHl[i++];
        this.dlo = bHl[i++];
        this.dll = bHl[i++];
        this.cEe = false;
        this.cEd = false;
        V.bHo(this.dlI, "click", this.dlj.bHk(this));
        V.bHo(this.dlx, "click", this.cSx.bHk(this));
        V.bHo(this.dlr, "click", this.cSx.bHk(this));
        V.bHo(this.dlu, "click", this.kc.bHk(this));
        V.bHo(this.dll, "click", this.kc.bHk(this))
    };
    bRY.dlj = function(bHm) {
        V.bb(bHm);
        loft.x.bHt("qbcnxh_20150804_01");
        var cEc = E.be("guess-like").parentNode.parentNode.parentNode.parentNode.parentNode;
        J.br(location.dwr, "TrackBean", "closeInsertRecommendBlog",
        function(df) {
            cEc.style.height = 0;
            cEc.style.opacity = 0;
            setTimeout(function() {
                cEc.style.display = "none"
            },
            300)
        })
    };
    bRY.cSx = function(bHm) {
        var fV = bHm.srcElement || bHm.target;
        if (fV.id === "no-interest1") {
            J.br(location.dwr, "UserBean", "addBlackList4RecommendBlog", this.cls, this.dlh.bHk(this))
        } else {
            J.br(location.dwr, "UserBean", "addBlackList4RecommendBlog", this.clt, this.dlg.bHk(this))
        }
    };
    bRY.dlh = function(df) {
        if (df === true) {
            J.br(location.dwr, "TrackBean", "getRecommendBlogs", 2, this.cSN.bHk(this))
        }
    };
    bRY.dlg = function(df) {
        if (df === true) {
            J.br(location.dwr, "TrackBean", "getRecommendBlogs", 2, this.cSQ.bHk(this))
        }
    };
    bRY.kc = function(bHm) {
        loft.x.bHt("qbcnxh_20150804_02");
        var fV = bHm.currentTarget || bHm.srcElement || bHm.target;
        var dlf = E.cr(bHm.srcElement, "fol1");
        if (dlf) {
            fV = bHm.srcElement.parentNode
        }
        if (!this.cEe && fV.id === "guslk-follow1") {
            J.br(location.dwr, "UserBean", "followBlog", this.cls, this.dkZ.bHk(this));
            this.cEe = true
        } else if (!this.cEd && fV.id === "guslk-follow2") {
            J.br(location.dwr, "UserBean", "followBlog", this.clt, this.dkX.bHk(this));
            this.cEd = true
        }
    };
    bRY.dkZ = function(bK) {
        this.cEe = false;
        if ( !! bK && (bK > 0 || bK == -2)) {
            E.ba(E.be("guslk-follow1"), "f-dn");
            E.bf(E.be("guslk-actived1"), "f-dn");
            J.br(location.dwr, "TrackBean", "getRecommendBlogs", 2, this.cSN.bHk(this))
        } else {
            if (bK == -100) {
                alert("您关注得太快了，请休息一下。", true)
            } else if (bK == -6) {
                alert("关注失败，您关注博客的总数已经超过限制。", true)
            } else if (bK == -7) {
                alert("加密博客，无法关注！", true)
            } else if (bK == -8) {
                alert("由于用户权限设置，您无法关注该用户！", true)
            } else if (bK == -1e3) {
                alert("关注失败，请登录后再试", true)
            } else if (bK <= 0) {
                alert("关注失败，错误码: " + bK, true)
            }
        }
    };
    bRY.dkX = function(bK) {
        this.cEd = false;
        if ( !! bK && (bK > 0 || bK == -2)) {
            E.ba(E.be("guslk-follow2"), "f-dn");
            E.bf(E.be("guslk-actived2"), "f-dn");
            J.br(location.dwr, "TrackBean", "getRecommendBlogs", 2, this.cSQ.bHk(this))
        } else {
            if (bK == -100) {
                alert("您关注得太快了，请休息一下。", true)
            } else if (bK == -6) {
                alert("关注失败，您关注博客的总数已经超过限制。", true)
            } else if (bK == -7) {
                alert("加密博客，无法关注！", true)
            } else if (bK == -8) {
                alert("由于用户权限设置，您无法关注该用户！", true)
            } else if (bK == -1e3) {
                alert("关注失败，请登录后再试", true)
            } else if (bK <= 0) {
                alert("关注失败，错误码: " + bK, true)
            }
        }
    };
    bRY.cSN = function(bHn) {
        for (var i = 0,
        len = bHn.length; i < len; i++) {
            if (bHn[i].blogId === this.clt || bHn[i].blogId === this.cls) {
                bHn.splice(i, 1);
                len = bHn.length;
                i--
            }
        }
        if (bHn.length === 0) {
            E.be("guess-like").parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
            return
        }
        var bYR = E.be("col-1");
        bYR.style.opacity = 0;
        setTimeout(function() {
            E.bj(bYR, "avg")[0].src = loft.x.eK(bHn[0].blogInfo.bigAvaImg);
            E.bj(bYR, "avglink")[0].href = bHn[0].blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
            E.bj(bYR, "nick")[0].innerHTML = U.ew(bHn[0].blogInfo.blogNickName);
            E.bj(bYR, "nick")[0].href = bHn[0].blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
            E.bj(bYR, "daren")[0].innerHTML = "";
            E.bj(bYR, "favor")[0].innerHTML = bHn[0].likedCount;
            bHn[0].posts = bHn[0].posts.slice(0, 3);
            for (i = 0, len = bHn[0].posts.length; i < len; i++) {
                bHn[0].posts[i].image = loft.x.bJR(bHn[0].posts[i].image, 80, 80, 1, 1)
            }
            var cDU = E.eY(E.dG("m-track-jst-blogs", {
                url: bHn[0].blogInfo.homePageUrl,
                posts: bHn[0].posts
            }));
            this.cDT.innerHTML = "";
            this.cDT.insertAdjacentElement("beforeEnd", cDU);
            E.ba(E.be("guslk-actived1"), "f-dn");
            E.bf(E.be("guslk-follow1"), "f-dn");
            bYR.style.opacity = 1
        }.bHk(this), 300);
        this.cls = bHn[0].blogId
    };
    bRY.cSQ = function(bHn) {
        for (var i = 0,
        len = bHn.length; i < len; i++) {
            if (bHn[i].blogId === this.cls || bHn[i].blogId === this.clt) {
                bHn.splice(i, 1);
                len = bHn.length;
                i--
            }
        }
        if (bHn.length === 0) {
            E.be("guess-like").parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
            return
        }
        var bXN = E.be("col-2");
        bXN.style.opacity = 0;
        setTimeout(function() {
            E.bj(bXN, "avg")[0].src = loft.x.eK(bHn[0].blogInfo.bigAvaImg);
            E.bj(bXN, "avglink")[0].href = bHn[0].blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
            E.bj(bXN, "nick")[0].innerHTML = U.ew(bHn[0].blogInfo.blogNickName);
            E.bj(bXN, "nick")[0].href = bHn[0].blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
            E.bj(bXN, "daren")[0].innerHTML = "";
            E.bj(bXN, "favor")[0].innerHTML = bHn[0].likedCount;
            bHn[0].posts = bHn[0].posts.slice(0, 3);
            for (i = 0, len = bHn[0].posts.length; i < len; i++) {
                bHn[0].posts[i].image = loft.x.bJR(bHn[0].posts[i].image, 80, 80, 1, 1)
            }
            var cDS = E.eY(E.dG("m-track-jst-blogs", {
                url: bHn[0].blogInfo.homePageUrl,
                posts: bHn[0].posts
            }));
            this.cDR.innerHTML = "";
            this.cDR.insertAdjacentElement("beforeEnd", cDS);
            E.ba(E.be("guslk-actived2"), "f-dn");
            E.bf(E.be("guslk-follow2"), "f-dn");
            bXN.style.opacity = 1
        }.bHk(this), 300);
        this.clt = bHn[0].blogId
    };
    bRY.ce = function(bHn) {
        var bRb = bHn.recomBlogs[0],
        bQZ = bHn.recomBlogs[1];
        this.cDT = E.be("articles1");
        this.cDR = E.be("articles2");
        this.cls = bRb.blogId;
        this.clt = bQZ.blogId;
        bRb.posts = bRb.posts.slice(0, 3);
        for (var i = 0,
        len = bRb.posts.length; i < len; i++) {
            bRb.posts[i].image = loft.x.bJR(bRb.posts[i].image, 80, 80, 1, 1)
        }
        bQZ.posts = bQZ.posts.slice(0, 3);
        for (i = 0, len = bQZ.posts.length; i < len; i++) {
            bQZ.posts[i].image = loft.x.bJR(bQZ.posts[i].image, 80, 80, 1, 1)
        }
        var cDU = E.eY(E.dG("m-track-jst-blogs", {
            url: bRb.blogInfo.homePageUrl,
            posts: bRb.posts
        }));
        this.cDT.insertAdjacentElement("beforeEnd", cDU);
        var cDS = E.eY(E.dG("m-track-jst-blogs", {
            url: bQZ.blogInfo.homePageUrl,
            posts: bQZ.posts
        }));
        this.cDR.insertAdjacentElement("beforeEnd", cDS);
        this.dlD.src = loft.x.eK(bRb.blogInfo.bigAvaImg);
        this.dlH.href = bRb.blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
        this.cSh.innerHTML = U.ew(bRb.blogInfo.blogNickName);
        this.cSh.href = bRb.blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
        this.dlw.innerHTML = "";
        this.dlv.innerHTML = bRb.likedCount;
        this.dls.src = loft.x.eK(bQZ.blogInfo.bigAvaImg);
        this.dlt.href = bQZ.blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
        this.cSn.innerHTML = U.ew(bQZ.blogInfo.blogNickName);
        this.cSn.href = bQZ.blogInfo.homePageUrl + "?act=qbcnxh_20150804_04&t=" + (new Date).getTime();
        this.dlq.innerHTML = "";
        this.dlo.innerHTML = bQZ.likedCount
    };
    p.DU = C();
    xO = p.DU.bi(p.iL, true);
    xO.bq = function() {
        this.bHr("m-track-jst-text");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.hL = bHl[i++];
        this.bD = bHl[i++];
        this.jS = bHl[i++];
        this.bKQ = bHl[i++];
        this.fN = bHl[i++];
        this.Fj = this.hS.bHk(this);
        V.bHo(this.bD, "click", this.Fj);
        V.bHo(this.fN, "click", this.Fj)
    };
    xO.hS = function(bHm) {
        var fZ = p.DU.bw.hS.call(this, bHm);
        if ( !! fZ) {
            this.NC(true);
            this.jS.style.display = "none";
            this.bKQ.style.display = "block"
        } else {
            this.NC(false);
            this.bKQ.style.display = "none";
            this.jS.style.display = "block"
        }
    };
    xO.NC = function(NB) {
        NB = NB || !this.bD.src;
        this.bD.parentNode.parentNode.style.display = !!NB ? "none": ""
    };
    xO.bde = function() {
        this.jS.innerHTML = this.bHq.digest || ""
    };
    xO.ce = function(bHn) {
        p.DU.bw.ce.call(this, bHn);
        var qM = U.bHx(bHn.firstImageUrl);
        if ( !! qM && qM.length > 1 && !!qM[1]) {
            this.bD.parentNode.parentNode.style.maxHeight = "300px";
            E.oT(this.bD.parentNode.parentNode, "height", 300, false);
            this.bD.parentNode.parentNode.style.maxWidth = this.bD.style.maxWidth = "164px";
            this.bD.parentNode.parentNode.style.width = this.bD.style.width = "auto";
            E.oT(this.bD, "width", 164, false);
            E.oT(this.bD.parentNode.parentNode, "width", 164, false);
            this.bD.src = qM[1];
            this.CK();
            this.NC(false)
        } else {
            this.NC(true)
        }
        this.hL.innerText = bHn.title || "";
        this.hL.style.display = !!bHn.title ? "": "none";
        this.bde();
        this.bKQ.innerHTML = bNw(this.bHq) || "";
        if (this.bKQ.nodeType == Node.ELEMENT_NODE) {
            var dN = this.bKQ.getElementsByTagName("img"),
            i = 0,
            l = dN.length;
            for (; i < l; V.bHo(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++);
        }
        this.bVj(this.jS);
        this.bVj(this.bKQ)
    };
    p.NG = C();
    uH = p.NG.bi(p.iL, true);
    uH.bq = function() {
        this.bHr("m-track-jst-sphoto");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.bD = bHl[i++];
        this.oW = this.bD.parentNode.parentNode.parentNode;
        this.Fp = bHl[i++];
        this.NA = bHl[i++];
        this.jS = bHl[i++];
        this.bKQ = bHl[i++];
        this.fN = bHl[i++];
        var fZ = this.hS.bHk(this);
        V.bHo(this.bD, "click", fZ);
        V.bHo(this.Fp, "click", fZ);
        V.bHo(this.fN, "click", fZ);
        V.bHo(this.NA, "click", this.xi.bHk(this));
        V.bHo(this.oW, "mouseover", this.bdn.Eo(this, true));
        V.bHo(this.oW, "mouseout", this.bdn.Eo(this, false))
    };
    uH.bdn = function(bHm, gu) {
        this.IU(bHm, !!gu, this.eU.orign || "", this.eU.ow || 0, this.eU.oh || 0)
    };
    uH.hS = function(bHm, bti) {
        if ( !! this.rH && !bti) {
            this.xi(bHm);
            return
        }
        var fZ = p.NG.bw.hS.call(this, bHm);
        this.xK(fZ);
        if ( !! fZ) {
            if (this.eU.ow > rS) {
                this.NA.parentNode.style.display = "";
                this.bD.style.width = rS + "px"
            } else {
                this.bD.style.width = this.eU.ow + "px"
            }
            this.oW.style.width = "auto";
            this.Ny(true)
        } else {
            if (this.eU.ow <= 145) {
                this.oW.style.width = this.bD.style.width = this.eU.ow + "px"
            } else {
                this.oW.style.width = this.bD.style.width = CE + "px"
            }
            this.NA.parentNode.style.display = "none";
            this.Ny()
        }
    };
    uH.Ny = function(bth) {
        if ( !! this.btg && !bth) {
            this.Fp.innerText = this.eU.ow < 164 ? "": "查看完整图片";
            this.Fp.parentNode.style.display = "";
            this.oW.style.height = Iw + "px"
        } else {
            this.Fp.parentNode.style.display = "none";
            this.oW.style.height = "auto"
        }
    };
    uH.xi = function(bHm) {
        V.bb(bHm);
        if (this.eU.ow <= rS) return;
        P("loft.w").nX.bG(document.body, {
            singleton: true,
            photos: [this.eU],
            cctype: this.bHq.cctype || 0,
            contextValue: loft.x.Rh(this.bHq),
            authorId: this.bHq.blogId
        });
        if (P("loft.m.search.g").inTagSearchNologin) {
            loft.x.bHt("qbfdlbq_20141217_02")
        }
    };
    uH.ce = function(bHn) {
        p.DU.bw.ce.call(this, bHn);
        var qM = U.bHx(bHn.firstImageUrl);
        this.eU = U.bHx(bHn.photoLinks)[0];
        if (!this.eU) {
            return
        }
        if ( !! qM && qM.length > 1 && !!qM[1]) {
            this.bD.src = qM[1];
            if (this.eU.ow <= 145) {
                this.oW.style.width = this.bD.style.width = this.eU.ow + "px"
            } else {
                this.oW.style.width = this.bD.style.width = CE + "px"
            }
            this.CK()
        } else {
            this.oW.style.display = "none"
        }
        this.jS.innerHTML = bHn.digest || "";
        this.bKQ.innerHTML = bNw(this.bHq) || "";
        if (this.bKQ.nodeType == Node.ELEMENT_NODE) {
            var dN = this.bKQ.getElementsByTagName("img"),
            i = 0,
            l = dN.length;
            for (; i < l; V.bHo(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++);
        }
        this.bVj(this.jS);
        this.bVj(this.bKQ);
        this.btg = this.eU.oh > Iw * this.eU.ow / CE;
        this.Ny()
    };
    p.EV = C();
    xN = p.EV.bi(p.iL, true);
    xN.bq = function() {
        this.bHr("m-track-jst-mphoto");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.ceq = bHl[i++];
        this.jS = bHl[i++];
        this.bKQ = bHl[i++];
        this.fN = bHl[i++];
        V.bHo(this.ceq, "click", this.hS.bHk(this));
        V.bHo(this.fN, "click", this.hS.bHk(this));
        V.bHo(this.ceq, "mouseover", this.IU.Eo(this, true));
        V.bHo(this.ceq, "mouseout", this.IU.Eo(this, false))
    };
    xN.xi = function(Q) {
        P("loft.w").nX.bG(document.body, {
            singleton: true,
            index: Q || 0,
            photos: this.Nx,
            cctype: this.bHq.cctype || 0,
            contextValue: loft.x.Rh(this.bHq),
            authorId: this.bHq.blogId
        });
        if (P("loft.m.search.g").inTagSearchNologin) {
            loft.x.bHt("qbfdlbq_20141217_02")
        }
    };
    xN.ce = function(bHn) {
        var wp = U.bHx(bHn.photoLinks) || O,
        bta = U.bHx(bHn.photoCaptions) || O,
        i,
        l;
        this.Nx = wp || [];
        p.EV.bw.ce.call(this, bHn);
        this.bdz = U.cA(6);
        var g = P("loft.m.g.mp" + this.bdz);
        g.photoshow = this.xi.bHk(this);
        this.CK();
        this.jS.innerHTML = bHn.digest || "";
        this.bKQ.innerHTML = bNw(this.bHq) || "";
        if (this.bKQ.nodeType == Node.ELEMENT_NODE) {
            var dN = this.bKQ.getElementsByTagName("img"),
            i = 0,
            l = dN.length;
            for (; i < l; V.bHo(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++);
        }
        this.bVj(this.jS);
        this.bVj(this.bKQ);
        for (i = 0, l = wp.length; i < l; i++) {
            wp[i].ow = wp[i].ow || 280;
            wp[i].oh = wp[i].oh || 500
        }
        this.ceq.innerHTML = E.dG("m-track-jst-mphoto-photo", {
            expand: !!this.rH,
            spescape: loft.x.bzz,
            photos: wp,
            captions: bta,
            gid: this.bdz,
            iself: this.bKy
        });
        this.DY = E.dE(this.ceq);
        if ( !! this.DY && !!this.DY[1]) {
            if (!this.bKy) {
                loft.w.Ie.Qq(this.DY[1].getElementsByTagName("img"), E.jO(this.ceq), {
                    diff: 100
                })
            }
        }
        this.bdC();
        if ( !! this.cpp) {
            this.rH = true
        }
    };
    xN.bHC = function(I) {
        p.EV.bw.bHC.call(this, I);
        this.bKy = I.iself;
        this.cpp = I.expandPages;
        if ( !! this.cpp) {
            this.rH = false
        }
    };
    xN.hS = function(bHm, bti) {
        V.bb(bHm);
        if ( !! this.DY && !!this.DY[1]) {
            dlX(this.DY[1])
        }
        if ( !! this.rH && !bti) {
            this.xi();
            return
        }
        var X = V.be(bHm),
        fZ;
        if (!X || X.tagName == "IMG" || X.className == "totalnum" || X.parentNode.className == "more") {
            fZ = p.EV.bw.hS.call(this);
            this.xK(fZ);
            if ( !! this.DY && !!this.DY[1]) {
                this.DY[0].style.display = !!fZ ? "none": "";
                this.DY[1].style.display = !!fZ ? "": "none"
            }
            this.bdC( !! fZ)
        }
    };
    xN.bdC = function(qF) {
        if (!this.DY || !this.DY[0]) return;
        var bsY = this.Nx[0].oh > Iw * this.Nx[0].ow / CE;
        if (bsY && !qF) {
            this.DY[0].style.height = Iw + "px"
        } else {
            this.DY[0].style.height = "auto"
        }
    };
    p.qT = C();
    hr = p.qT.bi(p.iL, true);
    hr.bq = function() {
        this.bHr("m-track-jst-music");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.bD = bHl[i++];
        this.jS = bHl[i++];
        this.wr = bHl[i++];
        this.qG = bHl[i++];
        this.bxn = bHl[i++];
        this.cay = bHl[i++];
        this.cql = bHl[i++];
        this.cet = bHl[i++];
        this.fN = bHl[i++];
        var fZ = this.hS.bHk(this);
        V.bHo(this.fN, "click", fZ);
        V.bHo(this.bD.parentNode, "click", fZ);
        V.bHo(this.qG, "click", this.bsW.bHk(this));
        V.bHo(this.bD, "error", this.bsV.bHk(this))
    };
    hr.bsV = function(bHm) {
        var fV = this.bdK(2);
        if ( !! fV && this.bD.src !== fV) this.bD.src = fV
    };
    hr.ce = function(bHn) {
        p.qT.bw.ce.call(this, bHn);
        this.lg(true);
        this.CK();
        var cO, bGm;
        try {
            cO = U.bHx(bHn.embed)
        } catch(e) {
            cO = U.qr(bHn.embed)
        }
        if (!cO) {
            return
        }
        this.FF = cO;
        this.bsP = cO.album_logo || "";
        this.dJ = cO.type || "";
        var bdU = this.bdK(4);
        if ( !! bdU) this.bD.src = bdU;
        this.bD.parentNode.parentNode.style.display = !!bdU ? "": "none";
        this.cql.innerHTML = bHn.digest || "";
        this.cet.innerHTML = bNw(this.bHq) || "";
        if (this.cet.nodeType == Node.ELEMENT_NODE) {
            var dN = this.cet.getElementsByTagName("img");
            for (var l = dN.length; l--;) {
                E.oT(dN[l], "width", 500);
                V.bHo(dN[l], "click", this.hS.bHk(this))
            }
        }
        this.bVj(this.cql);
        this.bVj(this.cet);
        this.bxn.innerText = this.bMs(cO.song_name || "");
        if ( !! cO.artist_name) {
            this.cay.innerText = " - " + this.bMs(cO.artist_name || "")
        }
        this.bsO = "http://img.xiami.com/widget/0_" + cO.song_id + "_/singlePlayer.swf";
        if (this.dJ == "diy" || this.dJ == "copyright" || this.dJ == "music163") {
            E.dt(this.qG, "w-player-2", "w-player-1")
        } else if (this.dJ == "cloudmusic") {
            E.dt(this.qG, "w-player-1", "w-player-2")
        } else {
            E.bf(this.qG, "w-player-1");
            E.bf(this.qG, "w-player-2")
        }
    };
    hr.bMs = function(tM) {
        try {
            var bXz = tM.replace(Jz, "%20");
            return decodeURIComponent(bXz)
        } catch(e) {
            return tM
        }
    };
    hr.bsW = function(bHm) {
        V.bb(bHm);
        this.lg()
    };
    hr.lg = function(go) {
        p.qT.bw.lg.call(this, !!go);
        var DZ, dc;
        if (!go) {
            if (!this.gi) {
                if (this.dJ == "diy" || this.dJ == "copyright" || this.dJ == "music163") {
                    DZ = "autoPlay=true&url=" + this.FF.listenUrl + "&title=" + this.bMs(this.FF.song_name || "");
                    dc = E.dG("m-track-jst-flash", {
                        src: location.dirhost + "/rsc/swf/blog_music_player.swf",
                        width: 257,
                        height: 33,
                        flashvars: DZ
                    })
                } else if (this.dJ == "cloudmusic") {
                    DZ = "loop=false&autoPlay=true&url=" + this.FF.listenUrl + "&trackId=" + this.FF.song_id + "&trackName=" + (this.FF.song_name || "") + "&artistName=" + (this.FF.artist_name || "");
                    dc = E.dG("m-track-jst-flash", {
                        src: location.cloudMusicFlashUrl,
                        width: 257,
                        height: 34,
                        flashvars: DZ
                    })
                } else {
                    dc = E.dG("m-track-jst-flash", {
                        src: this.bsO,
                        width: 257,
                        height: 33,
                        flashvars: ""
                    })
                }
                this.gi = E.eY(dc)
            }
            this.wr.appendChild(this.gi);
            this.qG.style.display = "none"
        } else {
            E.hE(this.gi);
            delete this.gi;
            this.qG.style.display = ""
        }
    };
    hr.hS = function(bHm) {
        V.bb(bHm);
        var rP = E.cr(this.Y, "m-icnt-all");
        if (rP) {
            E.bf(this.Y, "m-icnt-all")
        } else {
            E.ba(this.Y, "m-icnt-all")
        }
        if (!rP) {
            this.bD.style.maxWidth = rS + "px";
            this.bD.style.width = "auto"
        } else {
            this.bD.style.width = CE + "px";
            this.bh("oncollapse")
        }
        this.xK(!rP);
        this.Of(!rP)
    };
    hr.xK = function(fZ) {
        var bF = bNw(this.bHq);
        if (!bF || !this.bHq.digest) return;
        if ( !! fZ) {
            this.cql.style.display = "none";
            this.cet.style.display = "block"
        } else {
            this.cet.style.display = "none";
            this.cql.style.display = "block"
        }
    };
    hr.bdK = function(by) {
        if (this.dJ == "diy" || this.dJ == "copyright" || this.dJ == "music163") {
            if (by == 2) return this.FF.small_cover || "";
            else return this.FF.middle_cover || ""
        } else if (this.dJ == "cloudmusic") {
            if (by == 2) {
                return loft.x.bJR(this.bsP, 500, 500)
            } else {
                return loft.x.bJR(this.bsP.replace(/\?.+$/, ""), 500, 500)
            }
        } else {
            return this.bsP.replace(/^(.+_)[\d]\.jpg$/, "$1" + by + ".jpg")
        }
    };
    p.bRf = C();
    xM = p.bRf.bi(p.iL, true);
    xM.bq = function() {
        this.bHr("m-track-jst-video");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.bD = bHl[i++];
        this.jS = bHl[i++];
        this.bKQ = bHl[i++];
        this.fN = bHl[i++];
        V.bHo(this.fN, "click", this.hS.bHk(this));
        V.bHo(this.bD.parentNode, "click", this.hS.bHk(this))
    };
    xM.ce = function(bHn) {
        p.bRf.bw.ce.call(this, bHn);
        if ( !! this.gi) {
            this.lg(true)
        }
        this.CK();
        var cO;
        try {
            cO = U.bHx(bHn.embed)
        } catch(e) {
            cO = U.qr(bHn.embed)
        }
        if (!cO) {
            return
        }
        this.jS.innerHTML = bHn.digest || "";
        this.bKQ.innerHTML = bNw(this.bHq) || "";
        if (this.bKQ.nodeType == Node.ELEMENT_NODE) {
            var dN = this.bKQ.getElementsByTagName("img"),
            i = 0,
            l = dN.length;
            for (; i < l; V.bHo(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++);
        }
        this.bVj(this.jS);
        this.bVj(this.bKQ);
        this.bD.src = this.bQV = cO.video_img_url || location.dirhost + "/rsc/img/video/blank.png";
        this.Nu = this.Nt(cO.flashurl);
        this.caj = cO.type || "";
        if (this.cev()) {
            this.bD.style.height = "164px"
        }
    };
    xM.hS = function(bHm) {
        V.bb(bHm);
        this.lg()
    };
    xM.Nt = function(fV) {
        if (/^(http:\/\/www\.tudou\.com\/[^\/]+\/[^\/]+?\/)([^\/]+?\/)?(v\.swf)$/i.test(fV)) {
            if (!RegExp.$2) {
                return RegExp.$1 + "&autoPlay=true/" + RegExp.$3
            } else {
                return RegExp.$1 + "$autoPlay=true&" + RegExp.$2 + RegExp.$3
            }
        }
        return fV
    };
    xM.lg = function(go) {
        var fZ = p.bRf.bw.hS.call(this, null, !!go);
        this.xK(fZ);
        go = !fZ;
        p.bRf.bw.lg.call(this, go);
        if (!go) {
            if (!this.gi) {
                if (this.cev()) {
                    if ( !! document.createElement("video").canPlayType && !!document.createElement("video").canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) {
                        this.gi = E.eY(E.dG("m-track-jst-ht5video", {
                            src: this.Nu,
                            imgsrc: this.bQV,
                            width: rS,
                            height: 400,
                            vtag: "ht5vtag"
                        }));
                        var bHl = E.bj(this.gi, "ht5vtag");
                        this.bIp = {
                            video: bHl[0],
                            btn: bHl[1],
                            load: bHl[2],
                            mask: bHl[3]
                        };
                        V.bHo(this.bIp.mask, "click", this.bTH.bHk(this));
                        V.bHo(this.bIp.video, "ended", this.bNL.bHk(this, 0));
                        V.bHo(this.bIp.video, "play", this.bNL.bHk(this, 1));
                        V.bHo(this.bIp.video, "error", this.bXt.bHk(this));
                        if (navigator.userAgent.toLowerCase().indexOf("ipad") > 0) {
                            this.cv = setTimeout(function() {
                                this.bIp.video.play();
                                this.cv = null
                            }.bHk(this), 1e3)
                        }
                    } else {
                        this.gi = E.eY(E.dG("m-track-jst-loftflash", {
                            flashvars: "isAutoPlay=true",
                            src: this.Nu,
                            imgsrc: this.bQV,
                            width: rS,
                            height: 400
                        }))
                    }
                } else {
                    this.gi = E.eY(E.dG("m-track-jst-flash", {
                        flashvars: "isAutoPlay=true",
                        src: this.Nu,
                        width: rS,
                        height: 400
                    }))
                }
            }
            this.bD.parentNode.parentNode.appendChild(this.gi);
            this.bD.parentNode.style.display = "none"
        } else {
            E.hE(this.gi);
            if ( !! this.bIp) {
                this.bIp = null
            }
            delete this.gi;
            this.bD.parentNode.style.display = ""
        }
    };
    xM.bTH = function(bHm) {
        V.bb(bHm);
        var bIZ = this.bIp.video,
        bwg = this.bIp.btn;
        if ( !! bIZ.paused) {
            bIZ.play();
            E.ba(bwg, "f-dn")
        } else {
            bIZ.pause();
            E.bf(bwg, "f-dn")
        }
    };
    xM.bNL = function(fW, bHm) {
        var bwg = this.bIp.btn,
        bQM = this.bIp.load;
        if ( !! fW) {
            if ( !! this.cv) {
                window.clearTimeout(this.cv);
                this.cv = null
            }
            E.ba(bQM, "f-dn");
            E.ba(bwg, "f-dn")
        } else {
            E.bf(bwg, "f-dn")
        }
    };
    xM.bXt = function() {
        this.bIp = null;
        var bk = E.eY(E.dG("m-track-jst-loftflash", {
            flashvars: "isAutoPlay=true",
            src: this.Nu,
            imgsrc: this.bQV,
            width: rS,
            height: 400
        }));
        E.hE(this.gi);
        this.gi = bk;
        this.bD.parentNode.parentNode.appendChild(this.gi)
    };
    xM.cev = function() {
        if (this.caj == "uservideo" || !!this.Nu.match(/\.mp4/i)) {
            return true
        } else {
            return false
        }
    };
    p.ckg = C();
    bQP = p.ckg.bi(p.iL, true);
    bQP.bq = function() {
        this.bHr("m-track-jst-askanswer");
        var bHl = E.bj(this.Y, this.eO),
        i = 0;
        this.bYf = bHl[i++];
        this.cUD = bHl[i++];
        this.dkO = bHl[i++];
        this.cUI = bHl[i++];
        this.cqA = bHl[i++];
        this.dkN = bHl[i++];
        this.cCJ = bHl[i++];
        this.bD = bHl[i++];
        this.jS = bHl[i++];
        this.fN = bHl[i++];
        this.cna = bHl[i++];
        this.dkM = bHl[i++];
        this.dkK = bHl[i++];
        this.bUS = bHl[i++];
        this.dkJ = bHl[i++];
        this.dkI = bHl[i++];
        this.dkH = bHl[i++];
        this.dkG = bHl[i++];
        this.dkF = bHl[i++];
        this.Fj = this.hS.bHk(this);
        V.bHo(this.bD, "click", this.Fj);
        V.bHo(this.fN, "click", this.Fj);
        V.bHo(this.dkK, "click", this.bTO.bHk(this));
        V.bHo(this.dkH, "click", this.bTO.bHk(this));
        V.bHo(this.dkI, "click", this.cFB.bHk(this))
    };
    bQP.bHC = function(I) {
        p.ckg.bw.bHC.call(this, I);
        this.bHo("ondelask", I.ondelask || F);
        this.bHo("onaddblack", I.onaddblack || F)
    };
    bQP.bTO = function(bHm) {
        V.bb(bHm);
        loft.w.eD.bE({
            parent: document.body,
            title: "删除问答",
            c1: "确定删除这个问答吗？",
            onok: function() {
                this.dkE(this.bHq.id || "", this.bHq.blogId || "")
            }.bHk(this)
        })
    };
    bQP.dkE = function(bMD, bc) {
        J.br(location.dwr, "PostBean", "deleteAsk", bMD, bc, this.dkD.bHk(this, bMD, bc))
    };
    bQP.dkD = function(bMD, bc, bZ) {
        if ( !! bZ) {
            this.bh("ondelask", bMD, bc)
        } else {}
    };
    bQP.cFB = function(bHm) {
        V.bb(bHm);
        this.bh("onaddblack", this.bHq.publisherMainBlogInfo.blogName || "", this.bHq.publisherMainBlogInfo.blogNickName || "")
    };
    bQP.hS = function(bHm) {
        var fZ = p.ckg.bw.hS.call(this, bHm);
        if ( !! fZ) {
            this.NC(true);
            this.jS.innerHTML = bNw(this.bHq);
            if (this.jS.nodeType == Node.ELEMENT_NODE) {
                var dN = this.jS.getElementsByTagName("img"),
                i = 0,
                l = dN.length;
                for (; i < l; V.bHo(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++);
            }
        } else {
            if (this.jS.nodeType == Node.ELEMENT_NODE) {
                var dN = this.jS.getElementsByTagName("img"),
                i = 0,
                l = dN.length;
                for (; i < l; V.iJ(dN[i], "click", this.Fj), i++);
            }
            this.NC(false);
            this.bde()
        }
    };
    bQP.NC = function(NB) {
        NB = NB || !this.bD.src;
        this.bD.parentNode.parentNode.style.display = !!NB ? "none": ""
    };
    bQP.bde = function() {
        this.jS.innerHTML = this.bHq.digest || ""
    };
    bQP.ce = function(bHn) {
        if (!bHn) return;
        p.ckg.bw.ce.call(this, bHn);
        if ( !! bHn.answer) {
            E.bf(this.Y, "js-askItem");
            this.dkC(bHn)
        } else {
            E.ba(this.Y, "js-askItem");
            this.dky(bHn)
        }
        this.bde()
    };
    bQP.dkC = function(bHn) {
        if ( !! bHn && !!bHn.isPublished && bHn.allowView == 0) {
            this.cUD.innerText = "回答并发布"
        } else {
            this.cUD.innerText = "仅回答"
        }
        var qM = U.bHx(bHn.firstImageUrl);
        if ( !! qM && qM.length > 1 && !!qM[1]) {
            this.bD.parentNode.parentNode.style.maxHeight = "300px";
            E.oT(this.bD.parentNode.parentNode, "height", 300, false);
            this.bD.parentNode.parentNode.style.maxWidth = this.bD.style.maxWidth = "164px";
            this.bD.parentNode.parentNode.style.width = this.bD.style.width = "auto";
            E.oT(this.bD, "width", 164, false);
            E.oT(this.bD.parentNode.parentNode, "width", 164, false);
            this.bD.src = qM[1];
            this.CK()
        } else {
            this.NC(true)
        }
        if ( !! bHn.canAsk) {
            this.cna.parentNode.style.display = ""
        } else {
            this.cna.parentNode.style.display = "none"
        }
        if ( !! bHn.blogInfo) {
            this.bYf.href = loft.x.bM(bHn.blogInfo.blogName);
            this.bYf.innerText = bHn.blogInfo.blogNickName || bHn.blogInfo.blogName || "";
            this.cna.style.display = "";
            this.cna.href = "http://www.lofter.com/ask/" + bHn.blogInfo.blogName + "/new/#from=dashboard";
            this.dkM.innerText = "向 " + (bHn.blogInfo.blogNickName || bHn.blogInfo.blogName || "") + " 提问";
            V.bHo(this.bYf, "mouseover", this.bHF.bHk(this, true, this.bYf, this.bHq.blogInfo.blogId));
            V.bHo(this.bYf, "mouseout", this.bHF.bHk(this, false, this.bYf, this.bHq.blogInfo.blogId))
        } else {
            this.bYf.href = "#";
            this.bYf.innerText = "";
            this.cna.style.display = "none"
        }
        this.dkO.innerHTML = loft.x.bzz(bHn.question || "");
        if (!bHn.anonymous && !!bHn.questionerBlogInfo) {
            this.cCJ.parentNode.style.display = "none";
            this.cqA.parentNode.style.display = "block";
            this.cUI.src = loft.x.eK(bHn.questionerBlogInfo.bigAvaImg, 20);
            this.cqA.innerText = bHn.questionerBlogInfo.blogNickName || bHn.questionerBlogInfo.blogName || "匿名";
            this.cqA.href = this.cUI.parentNode.href = loft.x.bM(bHn.questionerBlogInfo.blogName)
        } else {
            this.cqA.parentNode.style.display = "none";
            this.cCJ.parentNode.style.display = "block";
            this.dkN.src = "/rsc/img/ava/30.png";
            this.cCJ.innerText = "匿名提问"
        }
    };
    bQP.dky = function(bHn) {
        if (!bHn.anonymous && !!bHn.questionerBlogInfo) {
            E.bf(this.bUS.parentNode.parentNode, "js-anonyask");
            this.bUS.href = loft.x.bM(bHn.questionerBlogInfo.blogName);
            this.bUS.innerText = bHn.questionerBlogInfo.blogNickName || bHn.questionerBlogInfo.blogName || "匿名";
            V.bHo(this.bUS, "mouseover", this.bHF.bHk(this, true, this.bUS, bHn.questionerBlogInfo.blogId));
            V.bHo(this.bUS, "mouseout", this.bHF.bHk(this, false, this.bUS, bHn.questionerBlogInfo.blogId))
        } else {
            this.bUS.removeAttribute("href");
            this.bUS.innerText = "匿名";
            E.ba(this.bUS.parentNode.parentNode, "js-anonyask")
        }
        this.dkJ.innerHTML = loft.x.bzz(bHn.question || "");
        this.dkG.href = "http://www.lofter.com/answer/" + bHn.blogId + "/" + bHn.id;
        this.dkF.href = "http://www.lofter.com/answer/" + bHn.blogId + "/" + bHn.id + "#type=publish"
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    fF;
    p.qy = C();
    fF = p.qy.bi(P(N.fw).lu);
    fF.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I);
        this.dka = I.enableBigPager || false;
        this.bNd = I.pagerwidget;
        this.czd = I.webPageName || "";
        if ( !! this.bNd && this.czd == "tagSearch") {
            this.djY = true
        }
        this.czc = function(bUF, bQa, tX) { (I.setTotalCount || F)(bUF, bQa, tX);
            this.bgv = tX || 0
        }.bHk(this);
        this.ciH = I.refreshPagerWidget || F;
        this.bsJ = !!I.dashboard;
        this.Y = bl;
        this.bRp = I.firstPermalink || "";
        this.bfZ = I.from || "";
        this.xc = (I.page || 0) + 1;
        this.ql = I.empty || "";
        this.Ns = I.guide || null;
        this.cyP = I.pageNewMode || false;
        this.bes = this.uD.bHk(this);
        this.bI = I.targetBlogId || 0;
        this.beu = loft.c.cm.mainBlogId || 0;
        this.dl = I.tcache || new(P("loft.d").bfJ);
        this.dl.bHo("ontracklistload", this.bsI.bHk(this));
        this.dl.bHo("onrecommend", this.bsG.bHk(this));
        this.dl.bHo("ondegradepost", this.ciP.bHk(this));
        this.dl.bHo("onfilterpost", this.bsF.bHk(this));
        this.dl.bHo("onforbidblog", this.bsE.bHk(this));
        this.nm = new(P("loft.d").up);
        this.nm.bHo("onlike", this.Nq.bHk(this));
        this.nm.bHo("ondelete", this.bsD.bHk(this));
        this.nm.bHo("onshare", this.bsC.bHk(this));
        this.nm.bHo("oncontripass", this.ciT.bHk(this));
        this.tK = new(P("loft.d").AS)({
            followFrom: "followfrom" + this.bfZ
        });
        this.tK.bHo("onfollow", this.nn.bHk(this));
        this.tK.bHo("unfollow", this.nn.bHk(this));
        this.bUi = false;
        if ( !! I.istime) {
            this.bUi = true
        }
        if ( !! I.cbdashloaded) {
            this.cyG = true
        }
        this.rp = new loft.d.vz({
            onaddblacklist: this.nV.bHk(this)
        });
        this.cP = {
            targetBlogId: I.targetBlogId || 0,
            recommenderRole: I.recommenderRole || 0,
            rtagRank: I.rtagRank || 0,
            wallPostNum: I.wallPostNum || 0,
            interestDomainTag: I.interestDomainTag || false,
            expand: !!I.expand,
            iself: !!I.iself,
            expandPages: !!I.expandPages,
            isActivityTagEditor: !!I.isActivityTagEditor,
            topconfig: I.pageconfig || I || {},
            tag: I.tag || "",
            isTimeBlog: !!I.istime,
            newpublish: P("loft.m.newpublish.w").bMy(),
            onlike: this.Np.bHk(this),
            ondelete: this.pV.bHk(this),
            onfollow: this.kc.bHk(this),
            onblack: this.rz.bHk(this),
            onrecommend: this.bsB.bHk(this),
            ondegradepost: this.ciX.bHk(this),
            onfilterpost: this.bsA.bHk(this),
            onforbidblog: this.bsz.bHk(this),
            onshare: this.bsy.bHk(this),
            oncontripass: this.ciY.bHk(this),
            ondelask: this.bTO.bHk(this),
            onlogincb: this.ccb.bHk(this),
            onupdateitem: this.bAk.bHk(this)
        };
        this.iG = p.NZ;
        V.bHo(document, "keydown", this.Cf.bHk(this));
        if (!I.tagSearchNologin) {
            this.beT(this.czc)
        } else {
            this.beU.style.display = "none";
            this.cZ = (new p.beY(bl, I)).bsx()
        }
        V.bHo(window, "beforeunload",
        function(bHm) {
            if ( !! this.cfk) this.cfk = window.clearTimeout(this.cfk)
        }.bHk(this))
    };
    fF.dzl = function(cq) {
        this.dl.uP(cq, this.bRp, true)
    };
    fF.djW = function(bQc, ca) {
        this.iG.db(this.cZ);
        this.beU.style.display = "";
        this.dl.dkq(bQc, 20,
        function(bMQ, bUJ) {
            this.xc = bMQ || 1;
            for (var i = bMQ; i <= bUJ; i++) {
                this.beT(ca)
            }
            this.ciH(this.xc, this.bfD)
        }.bHk(this))
    };
    fF.djV = function(cq, ca) {
        this.iG.db(this.cZ);
        this.beU.style.display = "";
        this.xc = (cq || 0) + 1;
        this.beT(ca)
    };
    var Oq = [66, 72, 74, 75, 76, 84, 98, 104, 106, 107, 108, 116];
    fF.Cf = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode),
        Q = U.fO(Oq, rB);
        if (Q == -1) return;
        var X = V.be(bHm);
        if (X.tagName == "INPUT" || X.tagName == "TEXTAREA" || bHm.ctrlKey || bHm.altKey || bHm.shiftKey || !!E.cr(X, "noshortkey")) return;
        Q = Q % 6;
        switch (Q) {
        case 0:
            break;
        case 1:
            this.Gc(0, "open");
            break;
        case 2:
            this.Gc(1);
            break;
        case 3:
            this.Gc( - 1);
            break;
        case 4:
            this.Gc(0, "fav");
            break;
        case 5:
            break
        }
    };
    fF.Gc = function(ig, Gd) {
        var NN = document.documentElement.scrollTop || document.body.scrollTop,
        ci = 5,
        qx = document.documentElement.clientHeight,
        DJ, i = 0,
        l = this.cZ.length,
        bo, bfd = 0,
        wJ;
        for (; i < l; i++) {
            bo = this.cZ[i];
            DJ = E.jO(bo.Y);
            if (DJ > NN + ci) {
                bfd = i - 1;
                break
            }
        }
        if (ig == 1 && bfd == 0 && NN + ci >= E.jO(this.cZ[l - 1].Y)) {
            bfd = l - 1
        }
        wJ = bfd + ig;
        if (wJ < 0) {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            return
        }
        if (wJ >= l) wJ = l - 1;
        var kj = document.documentElement.scrollTop = document.body.scrollTop = E.jO(this.cZ[wJ].Y) - ci;
        if (ig === 0) {
            Gd = Gd || "";
            if ("fav" === Gd) {
                this.cZ[wJ].baH()
            } else if ("open" === Gd) {
                this.cZ[wJ].NF()
            }
        }
        var Nl = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        if (ig == 1 && wJ == l - 1 && kj + qx <= Nl - 10) {
            this.beT()
        }
    };
    fF.Np = function(bt, bc, hM) {
        if (!hM) {
            this.nm.bfg(bt, bc)
        } else {
            this.nm.bfi(bt, bc)
        }
    };
    fF.Nq = function(hM, bHn) {
        if ( !! bHn) {
            if (bHn.id == -100 || bHn.id == -10) {
                if (bHn.id == -100) E.bd("您喜欢得太快了，请休息一下。");
                else if (bHn.id == -10) E.bd("由于用户权限设置，您无法喜欢该文章！");
                hM = false;
                var Ef = bHn.favoritedPostIdCitedFrom || 0,
                bIj = bHn.favoritedPostId || 0,
                i = 0,
                l = this.cZ.length,
                bN;
                for (; i < l; i++) {
                    bN = this.cZ[i].hY().post || {};
                    if ( !! bN.citeRootPostId && (bN.citeRootPostId == Ef || bN.citeRootPostId === bIj) || bN.id == bIj || bN.id === Ef) {
                        this.cZ[i].NJ(hM)
                    }
                }
            } else {
                var Ef = bHn.favoritedPostIdCitedFrom || 0,
                bIj = bHn.favoritedPostId || 0,
                i = 0,
                l = this.cZ.length,
                bN;
                for (; i < l; i++) {
                    bN = this.cZ[i].hY().post || {};
                    if ( !! bN.citeRootPostId && (bN.citeRootPostId == Ef || bN.citeRootPostId === bIj) || bN.id == bIj || bN.id === Ef) {
                        this.cZ[i].NJ(hM);
                        this.cZ[i].NK(hM ? 1 : -1)
                    }
                }
                var No = E.be("gsdfavcount");
                if ( !! No) No.innerText = parseInt(No.innerText) + (hM ? 1 : -1);
                if (this.bfZ == "tag") {
                    try {
                        window["_gaq"].push(["_trackEvent", "动态流标签页", "喜欢量"])
                    } catch(e) {}
                }
            }
        }
    };
    fF.bsy = function(dR, bc, bsw, ld) { !! bsw ? this.nm.bvE(dR, bc, ld) : this.nm.bvA(dR, bc, ld)
    };
    fF.bsC = function(bfl, ld, bHn) {
        if (bHn > 0) {
            if ( !! bfl) {
                E.bY("推荐成功", true)
            } else {
                E.bY("取消推荐成功", true)
            }
        } else if (bHn == 0) {
            E.bd("操作失败", true)
        } else if (bHn == -1) {
            E.bd("由于用户权限设置，您无法推荐该文章！", true)
        } else if (bHn == -2) {
            E.bd("您今天已经推荐了100篇，请明天再推荐。", true)
        }
        ld(bfl, this.bsJ, bHn <= 0)
    };
    fF.kc = function(bc, jw) { !! jw ? this.tK.OP(bc) : this.tK.OS(bc)
    };
    fF.nn = function(bc, jw, bK) {
        var bHn;
        if ( !! bK && bK > 0) {
            if ( !! jw) {
                E.bY("关注成功", true);
                if (this.bfZ == "tag") {
                    try {
                        window["_gaq"].push(["_trackEvent", "动态流标签页", "关注量"])
                    } catch(e) {}
                }
            } else {
                E.bY("取消关注成功", true)
            }
            for (var i = 0,
            l = this.cZ.length; i < l; i++) {
                bHn = this.cZ[i].hY();
                if (bHn.post.blogId == bc) {
                    bHn.followed = !!jw;
                    this.cZ[i].bcA()
                }
            }
            if ( !! loft.g.dousercard) {
                loft.g.dousercard(null, null, null, {
                    doDelFunc: true,
                    flag: bc,
                    changeFollow: true,
                    followStatus: jw
                })
            }
        } else {
            loft.x.bKv(bK)
        }
    };
    fF.rz = function(Bs, gR) {
        loft.w.eD.bE({
            parent: document.body,
            title: "加入黑名单",
            c1: "确定将 " + (gR || "") + " 加入黑名单吗？",
            c2: "加入黑名单后，您还可以去帐号设置管理黑名单",
            onok: function() {
                this.rp.yY(Bs)
            }.bHk(this)
        })
    };
    fF.nV = function(bHn) {
        if ( !! bHn) {
            if (bHn.id == -1e3) {
                alert("您尚未登录");
                return
            }
            if (bHn.id == -999) {
                return
            }
            if (bHn.id > 0) {
                E.bY("加入黑名单成功！", true)
            } else if (bHn.id == -2) {
                E.bd("黑名单已经存在")
            } else if (bHn.id == -10) {
                E.bd("您输入的博客地址不是用户的默认博客地址,无法加入黑名单")
            } else if (bHn.id == -11) {
                E.bd("不允许加自己帐号为黑名单")
            } else if (bHn.id == -997) {
                E.bd("您输入的博客地址有误")
            }
        }
    };
    fF.pV = function(bt, bc, djU) {
        if (!djU) {
            loft.w.eD.bE({
                parent: document.body,
                title: "删除文章",
                c1: "确定删除这篇文章吗？",
                onok: function() {
                    this.nm.bvN(bt, bc)
                }.bHk(this)
            })
        } else {
            this.bsD(bt)
        }
    };
    fF.bsD = function(bHn) {
        if ( !! bHn && bHn > 0) {
            this.uQ(bHn)
        } else {}
        if (!this.cZ || !this.cZ.length) this.bfn()
    };
    fF.ciY = function(bt, bc) {
        this.nm.czH(bt, bc)
    };
    fF.ciT = function(bHn) {
        if ( !! bHn && bHn == 1) {
            location.href = "http://www.lofter.com/"
        } else if (bHn < 0) {
            E.bd("发布失败！", true)
        }
    };
    fF.uQ = function(dR) {
        var Q = U.fO(this.cZ,
        function(bo) {
            return bo.hY().post.id === dR
        }),
        is,
        Nn,
        En,
        Nm;
        if (Q >= 0) {
            is = this.cZ[Q + 1];
            Nn = this.cZ[Q - 1];
            if ( !! is) {
                En = is.hY().post;
                if ( !! Nn) {
                    Nm = Nn.hY().post;
                    if (Nm.blogInfo.blogId === En.blogInfo.blogId && Nm.publisherMainBlogInfo.blogId === En.publisherMainBlogInfo.blogId) {
                        if ( !! Nm && Nm.type == 5 && !Nm.answer && !!Nm.anonymous || !!En && En.type == 5 && !En.answer && !!En.anonymous) {
                            is.hY().repeat = false
                        } else {
                            is.hY().repeat = true
                        }
                    } else {
                        is.hY().repeat = false
                    }
                } else {
                    is.hY().repeat = this.cP.targetBlogId === En.blogInfo.blogId && loft.c.cm.mainBlogId === En.publisherMainBlogInfo.blogId
                }
                if (!this.bUi) {
                    is.bct()
                }
            }
            this.iG.db(this.cZ.splice(Q, 1))
        }
    };
    fF.bAk = function(dR, cfo) {
        var Q = U.fO(this.cZ,
        function(bo) {
            return bo.hY().post.id === dR
        }),
        cKG,
        is,
        Nn,
        bPa,
        En,
        Nm;
        if (Q >= 0) {
            cKG = this.cZ[Q];
            Nn = this.cZ[Q - 1];
            is = this.cZ[Q + 1];
            bPa = cfo.post;
            if ( !! Nn) {
                Nm = Nn.hY().post;
                if (Nm.blogInfo.blogId === bPa.blogInfo.blogId && Nm.publisherMainBlogInfo.blogId === bPa.publisherMainBlogInfo.blogId) {
                    if ( !! Nm && Nm.type == 5 && !Nm.answer && !!Nm.anonymous || !!bPa && bPa.type == 5 && !bPa.answer && !!bPa.anonymous) {
                        cfo.repeat = false
                    } else {
                        cfo.repeat = true
                    }
                } else {
                    cfo.repeat = false
                }
            } else {
                cfo.repeat = this.cP.targetBlogId === bPa.blogInfo.blogId && loft.c.cm.mainBlogId === bPa.publisherMainBlogInfo.blogId
            }
            cKG.ce(cfo);
            if ( !! is) {
                En = is.hY().post;
                if (bPa.blogInfo.blogId === En.blogInfo.blogId && bPa.publisherMainBlogInfo.blogId === En.publisherMainBlogInfo.blogId) {
                    if ( !! bPa && bPa.type == 5 && !bPa.answer && !!bPa.anonymous || !!En && En.type == 5 && !En.answer && !!En.anonymous) {
                        is.hY().repeat = false
                    } else {
                        is.hY().repeat = true
                    }
                } else {
                    is.hY().repeat = false
                }
                is.bct()
            }
        }
    };
    fF.bsB = function(dR, bc, di, wY) {
        if ( !! this.bfw) return;
        this.bfw = true;
        if (!wY) {
            if (!di) {
                this.dl.bgW(dR, bc)
            } else {
                this.dl.bhl(dR, bc)
            }
        } else {
            if (di === 2) {
                this.dl.bhl(dR, bc, true)
            } else {
                this.dl.bgW(dR, bc, true)
            }
        }
    };
    fF.bsG = function(di, dR, df, wY, bHn) {
        this.bfw = false;
        if ( !! bHn) {
            if (bHn.id == -3) {
                E.bd("已被机器推荐，不能被加精！", true);
                return
            }
            if (bHn.id == -103 && !!wY) {
                E.bd("该标签下的文章不允许重推！", true);
                return
            }
            var Gp = !!di ? !!wY ? "重推": "加精": !!wY ? "不推": "去精";
            E.bY("文章" + Gp + "成功!", true);
            var Q = U.fO(this.cZ,
            function(bo) {
                return bo.hY().post.id === dR
            });
            if (Q >= 0) {
                this.cZ[Q].bbl(( !! di ? 1 : 0) + ( !! wY ? 1 : 0), df, U.co(bHn, "object") ? bHn: null)
            }
        }
    };
    fF.ciX = function(dR, bc) {
        this.dl.chZ(dR, bc)
    };
    fF.ciP = function(dR, df, bHn) {
        if ( !! bHn) {
            if (bHn == 1) {
                E.bY("文章降级成功！", true)
            } else if (bHn == -2) {
                E.bY("文章已经降级！", true)
            }
            if ( !! location.href.match(/www\.lofter\.com\/tag\/[^\/]+\/excellent$/ig)) {
                this.uQ(dR)
            } else {
                var Q = U.fO(this.cZ,
                function(bo) {
                    return bo.hY().post.id === dR
                });
                if (Q >= 0) {
                    this.cZ[Q].bbl(0, df, U.co(bHn, "object") ? bHn: null, true)
                }
            }
        } else {
            E.bd("文章降级失败！", true)
        }
    };
    fF.bsA = function(dR, bc) {
        this.dl.bvk(dR, bc)
    };
    fF.bsF = function(dR, bHn) {
        if ( !! bHn) {
            this.uQ(dR);
            E.bY("文章过滤成功！", true)
        } else {
            E.bd("文章过滤失败！", true)
        }
    };
    fF.bsz = function(bc) {
        this.dl.bvi(bc)
    };
    fF.bsE = function(bc, bHn) {
        if ( !! bHn) {
            E.bY("屏蔽博客成功！", true)
        } else {
            E.bd("屏蔽博客失败！", true)
        }
    };
    fF.bsI = function(bHn, Pa) {
        this.cQ = false;
        this.yB.style.display = "none";
        this.beU.style.display = "none";
        if ( !! this.cfk) this.cfk = window.clearTimeout(this.cfk);
        if ( !! bHn && !!bHn.length) {
            if ( !! this.Ns && !!this.Ns.style) this.Ns.style.display = "";
            this.bfD = bHn.length < this.dl.Et() && !Pa;
            this.xc += 1;
            var i = 0,
            l = bHn.length,
            tQ, bn;
            for (; i < l; i++) {
                tQ = bHn[i];
                if (!tQ || tQ.post.valid == 32) {
                    bHn.splice(i, 1);
                    l = bHn.length;
                    i--;
                    continue
                }
                if ( !! this.bUi && tQ.post.valid != 15 && tQ.post.valid != 16) {
                    if (l == 1) {
                        this.bfD = true;
                        if (!this.cZ) {
                            this.bfn()
                        }
                        return
                    }
                    bHn.splice(i, 1);
                    l = bHn.length;
                    i--;
                    continue
                }
                if ((this.bfZ === "userlikepage" || this.bfZ === "userSharepage") && (!tQ.normalBlog || !!tQ.post.isPublished && tQ.post.allowView >= 100)) {
                    bHn.splice(i, 1);
                    l = bHn.length;
                    i--;
                    continue
                }
                if (tQ.post.blogInfo.blogId == this.bI && tQ.post.publisherMainBlogInfo.blogId == this.beu) {
                    if ( !! tQ.post && tQ.post.type == 5 && !tQ.post.answer && !!tQ.post.anonymous) {
                        tQ.repeat = false;
                        this.bI = -1;
                        this.beu = -1
                    } else {
                        tQ.repeat = true
                    }
                } else {
                    if ( !! tQ.post && tQ.post.type == 5 && !tQ.post.answer && !!tQ.post.anonymous) {
                        this.bI = -1;
                        this.beu = -1
                    } else {
                        this.bI = tQ.post.blogInfo.blogId;
                        this.beu = tQ.post.publisherMainBlogInfo.blogId
                    }
                    tQ.repeat = false
                }
            }
            try {
                bn = this.iG.bG(bHn, this.Y, this.cP)
            } catch(e) {}
            if ( !! bn) {
                if ( !! this.cZ) {
                    this.cZ = this.cZ.concat(bn)
                } else {
                    this.cZ = bn
                }
                if ( !! this.bUi || !!this.cyG) {
                    this.bh("cbloaded")
                }
            } else if ( !! Pa) {
                this.bfD = false;
                this.xc += 1;
                this.beT()
            }
        } else if ( !! bHn && !bHn.length && !!Pa || !bHn && !!Pa) {
            this.bfD = false;
            this.xc += 1;
            this.beT()
        } else if (!bHn) {
            this.bfD = true;
            this.cfk = window.setTimeout(function(Pa) {
                this.cfq(!Pa)
            }.bHk(this, Pa), 2e3)
        } else {
            this.bfD = true;
            if (!this.cZ) {
                this.bfn()
            }
        }
        this.ciH(this.xc, this.bfD)
    };
    fF.bfn = function() {
        if (!this.ql) return;
        this.Y.appendChild(E.eY('<div id="listEmptyItem" class="m-mlist"><div class="mlistcnt"><div class="isay"><div class="isayt3"></div><div class="isaym3"><div class="m-end m-end-2"><h2>' + this.ql + '</h2></div></div><div class="isayb"></div></div></div></div>'))
    };
    fF.cfq = function(djT) {
        this.Y.appendChild(E.eY('<div class="m-mlist"><div class="mlistcnt"><div class="isay"><div class="isayt3"></div><div class="isaym3"><div class="m-end m-end-2"><h2>' + (djT ? "系统繁忙，请稍后再试 ": "暂无内容") + '</h2></div></div><div class="isayb"></div></div></div></div>'))
    };
    fF.beT = function(ca) {
        if ( !! this.cQ || !!this.bfD) {
            if ( !! this.dka && !this.cQ && !!this.bfD) {
                if (this.bgv > this.xc * 20) {
                    this.cKM();
                    this.dl.uP(this.xc, this.bRp, false, ca)
                } else {
                    this.beU.style.display = "none";
                    if ( !! ca && U.co(ca, "function")) ca(this.bfD);
                    this.ciH(this.xc, this.bfD)
                }
            }
            return
        }
        this.cQ = true;
        if ( !! this.cZ) this.yB.style.display = "";
        this.cKM();
        this.dl.uP(this.xc, this.bRp, false, ca)
    };
    fF.cKM = function() {
        if (this.xc == 1) {
            loft.x.bHt("qbbqtj_20141229_01")
        } else if (this.xc == 2) {
            loft.x.bHt("qbbqtj_20141229_02")
        } else if (this.xc == 3) {
            loft.x.bHt("qbbqtj_20141229_03")
        } else if (this.xc == 4) {
            loft.x.bHt("qbbqtj_20141229_04")
        } else if (this.xc == 5) {
            loft.x.bHt("qbbqtj_20141229_05")
        }
    };
    fF.bE = function() {
        p.qy.bw.bE.call(this);
        if (this.cyP == false) V.bHo(window, "scroll", this.bes)
    };
    fF.cy = function() {
        p.qy.bw.cy.call(this);
        V.iJ(window, "scroll", this.bes)
    };
    fF.ke = function() {
        this.yB = E.be("loadmore");
        this.beU = E.be("loadfirst")
    };
    fF.uD = function(bHm) {
        var Nl = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
        kj = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        qx = document.documentElement.clientHeight;
        if (kj + qx >= Nl - 10) {
            if (this.djY && this.bNd) {
                if (this.xc > 1 && (this.xc - 1) % 5 != 0) {
                    this.beT()
                } else {}
            } else {
                this.beT()
            }
        }
    };
    fF.bTO = function(bMD, bc) {
        if ( !! bMD && bMD > 0) {
            this.uQ(bMD)
        } else {}
        if (!this.cZ || !this.cZ.length) this.bfn()
    };
    fF.ccb = F;
    fF.bTi = function(bHn, bl, pa) {
        if (!bHn || !bHn.post) return;
        var I = loft.x.GD(this.cP);
        I.before = pa;
        var bo = this.iG.bG(bHn, bl, I);
        this.cZ = this.cZ || [];
        this.cZ.unshift(bo);
        var cKN = E.be("listEmptyItem");
        if ( !! cKN) {
            E.hE(cKN)
        }
        this.bAk(bHn.post.id, bHn)
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    wI,
    ml;
    p.bce = C();
    wI = p.bce.bi(P(N.ut).fc, true);
    var DQ = E.gD('<li><h3 class="ztag"></h3><div class="f-cb"><div class="w-img2"><img class="ztag" src="http://l.bst.126.net/rsc/img/ava/64.png"></div><div class="gcnt"><p class="ztag"></p><div><a class="w-vsbtn w-vsbtn-1 ztag" href="#">关注</a><a href="#" class="ztag unfb s-fc3" style="display:none;">取消关注</a></div></div></div></li>');
    wI.bq = function() {
        this.bHr(DQ);
        var bHl = E.bj(this.Y, "ztag"),
        Q = 0;
        this.bv = new(P("loft.d").EY)({});
        this.Jb = bHl[Q++];
        this.bkb = bHl[Q++];
        this.pS = bHl[Q++];
        this.Qj = bHl[Q++];
        this.Qk = bHl[Q++];
        V.bHo(this.Qj, "click", this.wC.bHk(this, true));
        V.bHo(this.Qk, "click", this.wC.bHk(this, false))
    };
    wI.bHC = function(I) {
        I = I || O;
        this.Mu = !!I.lazy;
        this.bHo("onfollow", I.onfollow || F)
    };
    wI.ce = function(bHn) {
        this.bHq = bHn || O;
        this.Jb.innerHTML = U.ew(this.bHq.blogNickName);
        this.bkb.src = this.bHq.showImg;
        this.pS.innerHTML = U.ew(this.bHq.description);
        var bka = this.bv.OU();
        this.bck( !! bka[this.bHq.blogId])
    };
    wI.bjZ = function() {
        return !! this.bv.OU()[this.bHq.blogId]
    };
    wI.wC = function(nC, bHm) {
        if ( !! bHm) V.bb(bHm);
        this.bv.bvg(this.bHq.blogId, nC);
        this.bck(nC);
        if ( !! bHm) this.bh("onfollow")
    };
    wI.bck = function(nC) {
        if ( !! nC) {
            this.Qj.style.display = "none";
            this.Qk.style.display = ""
        } else {
            this.Qj.style.display = "";
            this.Qk.style.display = "none"
        }
    };
    p.bcm = C();
    ml = p.bcm.bi(P(N.fw).lu);
    ml.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I);
        this.Y = bl;
        this.bjV = 6;
        this.Am = I.userId;
        this.bHo("onfinishfollow", I.onfinishfollow || F);
        this.dq = {
            oitem: {
                icase: this.kq,
                onfollow: this.bjU.bHk(this)
            },
            opage: {
                pcase: null,
                index: 1,
                type: 1
            },
            ocache: {
                number: 10,
                ckey: "goodBlog",
                allcount: this.bjV
            },
            onempty: this.bjT.bHk(this),
            onloading: this.bjS.bHk(this),
            onafterchange: this.bjQ.bHk(this)
        };
        this.bv = new(P("loft.d").EY)({});
        this.eh = new(P(N.ut).nP)(E.dE(this.bcs), {
            onchange: this.Qr.bHk(this),
            selected: "j-crt"
        });
        this.vk = false;
        V.bHo(this.He, "click", this.bjP.bHk(this, true));
        V.bHo(this.bjO, "click", this.Qv.bHk(this, false))
    };
    ml.ke = function() {
        var bk = E.mF("m-guide-ntp-2");
        var bHl = E.bj(bk, "ztag"),
        te = 0;
        this.bcs = bHl[te++];
        this.bjN = bHl[te++];
        this.He = bHl[te++];
        this.kq = bHl[te++];
        this.bjO = bHl[te++];
        return bk
    };
    ml.Qr = function(bjL, bGU) {
        if (!this.bcD) {
            this.bcD = true
        } else {
            return false
        }
        var fb = E.dE(this.bcs)[bjL],
        Q = 0;
        Q = fb.id.indexOf("-");
        this.bjI = parseInt(fb.id.substring(Q + 1));
        this.bGV = 1;
        this.bjG();
        this.bcD = false
    };
    ml.bjG = function() {
        this.bv.Bh("goodBlog");
        this.dq.ocache.cyid = this.bjI;
        if ( !! this.cB) {
            this.cB.bz(this.dq);
            this.cB.qR(this.bv)
        } else {
            this.cB = new(P(N.fw).jt)(p.bce, this.bv, this.dq)
        }
    };
    ml.bjP = function(bHm) {
        V.bb(bHm);
        if (!this.bcH) {
            this.bcH = true
        } else {
            return false
        }
        if ( !! this.cB) {
            var cf = this.cB.yv();
            if ( !! cf) {
                for (var i = 0; i < cf.length; i++) {
                    cf[i].wC(!this.vk, null)
                }
            }
            this.vk = !this.vk;
            this.He.innerText = this.vk ? "全部取消": "全部关注"
        }
        this.bcH = false
    };
    ml.Qv = function(bHm) {
        V.bb(bHm);
        this.bh("onfinishfollow")
    };
    ml.bjU = function() {
        this.bjN.innerHTML = "已关注了" + this.bv.bvh() + "个主页";
        this.vk = this.QB()
    };
    ml.bjT = function() {
        this.dq.oitem.icase.innerHTML = '<div class="ehint s-fc2"></div>';
        this.vk = this.QB()
    };
    ml.bjS = function() {
        this.dq.oitem.icase.innerHTML = '<div class="ehint s-fc2">精彩博客加载中···</div>'
    };
    ml.bjQ = function() {
        this.vk = this.QB()
    };
    ml.QB = function() {
        if (!this.bcJ) {
            this.bcJ = true
        } else {
            return false
        }
        var bu = false;
        if ( !! this.cB) {
            var cf = this.cB.yv(),
            QC = 0;
            if (!cf) cf = [];
            for (var i = 0; i < cf.length; i++) {
                if (cf[i].bjZ()) {
                    QC++
                }
            }
            if (QC != 0 && QC == cf.length) {
                this.He.innerText = "全部取消";
                bu = true
            } else {
                this.He.innerText = "全部关注"
            }
        }
        this.bcJ = false;
        return bu
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    iR,
    dQ,
    FB = 1,
    bcN = 2,
    yM = 3,
    bjF = [78, 216, 360, 500],
    Fu = [150, 80, 74, 94];
    bjE = ["发布您的第一篇文章！", "上传您喜欢的图片！", "分享您爱听的音乐！", "分享您喜欢的视频！"];
    bjD = ["用一句简单的文字，记录您的灵感和生活", "仅是一张照片，也可以让您的博客变得精彩", "分享音乐，让音符表达您的情绪", "添加一段精彩的视频，与您的朋友分享快乐"];
    p.jL = C();
    dQ = p.jL.bi(P("loft").w.fr, true);
    dQ.bq = function(bl, I) {
        I = I || {};
        I.title = "上传头像";
        I.onbeforeclose = this.gL.bHk(this);
        this.bI = I.blogId;
        this.mQ = I.imgurl;
        this.bHr(bl, I);
        this.dB()
    };
    dQ.bz = function(I) {
        this.ei.iI(I.title);
        this.oU({
            onok: I.onOK
        });
        this.bHo("oncc", I.oncc || F);
        p.jL.bw.bz.call(this, I)
    };
    dQ.cM = function() {
        return '<div class="layerm"><object id="ava_upload" name="ava_upload" width="650" height="415" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0"><param name="movie" value="' + location.dirhost + '/rsc/swf/UploadAvator.swf"><param name="wmode" value="transparent"><param name="quality" value="high"><param name="allowscriptaccess" value="always"><param name="FlashVars" value="bavaurl=' + this.mQ + '" /><embed id="ava_upload" name="ava_upload" width="650" height="415" allowscriptaccess ="always" FlashVars="bavaurl=' + this.mQ + '" src="' + location.dirhost + '/rsc/swf/UploadAvator.swf" menu="false" wmode="transparent" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></object></div>'
    };
    dQ.cc = function() {};
    dQ.dB = function() {
        var bJ = P("loft.g");
        bJ.updateOwnAva = this.bPj.bHk(this)
    };
    dQ.cU = function() {
        return p.jL.bw.cU.call(this) + " guide-layer guide-upd"
    };
    dQ.gL = function(bHm) {
        V.bb(bHm);
        this.bh("oncc")
    };
    dQ.bPj = function(hP) {
        if (hP.resultcode != 999 || !hP.userDef1Url) {
            E.bd("图片上传失败，请重试", true)
        } else {
            var imageUrl = hP.userDef1Url;
            var fileId = /userdef1url:(\d+)/.exec(hP.photoGarbageIds)[1];
            J.br(location.dwr, "BlogSettingBean", "updateBlogAvator", this.bI, imageUrl, fileId, this.Cb.bHk(this, imageUrl))
        }
    };
    dQ.Cb = function(bp, ey) {
        if (!ey) {
            E.bd("头像保存失败，请重试", true)
        } else {
            E.bY("头像更新成功", true);
            this.cy();
            this.bh("oncc");
            this.bh("onok", bp)
        }
    };
    p.QJ = C();
    ni = p.QJ.bi(P("loft.w").fr, true);
    ni.bq = function(bl, I) {
        I = I || {};
        I.title = "设置您的博客";
        I.onbeforeclose = this.kN.bHk(this);
        this.bHr(bl || document.body, I);
        E.ba(this.ei.fP, "layerlink s-fc3");
        E.bf(this.ei.fP, "w-close2");
        this.ei.fP.innerHTML = "跳过"
    };
    ni.bz = function(I) {
        I = I || {};
        this.bHo("oncloseava", I.oncloseava || F);
        p.QJ.bw.bz.call(this, I);
        this.bcV.value = I.nickname;
        this.dr = I.blogName;
        this.bI = I.blogId;
        if ( !! I.avaImg && U.bA(I.avaImg).length > 0) {
            this.kW.src = I.avaImg
        }
        V.bHo(this.bjB, "click", this.bjz.bHk(this));
        V.bHo(this.bjy, "click", this.bjx.bHk(this))
    };
    ni.cM = function() {
        this.mo = "id-" + U.cA(4);
        return '<div class="m-layer-2"><div class="layerm"><div class="m-newblog m-newblog-inlayer f-cb"><div class="newblog"><h5 class="nbtt">博客名称：</h5><div class="w-inputxt nbinput1"><input class="ztag" maxLength=20 /></div><h5 class="nbtt">博客头像：</h5><div class="m-upface f-cb"><div class="upfaceimg"><div class="w-img2"><img class="ztag" src="http://l.bst.126.net/rsc/img/ava/64.png" /></div></div><div class="upfacecnt"><p>支持jpg、gif、png格式，图片小于10M</p><div><a class="w-sbtn w-sbtn-1" href="#"><span class="w-iuar ztag">上传头像</span></a></div></div></div></div><div class="show"><img src="http://l.bst.126.net/rsc/img/img01.jpg" /></div></div></div><div class="layerb"><a href="#" class="w-sbtn w-sbtn-l ztag">下一步,选择模板</a></div></div>'
    };
    ni.cc = function() {
        var bHl = E.bj(this.Y, "ztag"),
        i = 0;
        this.bcV = bHl[i++];
        this.kW = bHl[i++];
        this.bjB = bHl[i++];
        this.bjy = bHl[i++]
    };
    ni.cU = function() {
        return "m-layer-2 guide-avaw guide-layer"
    };
    ni.QP = function() {
        if (!this.ox) {
            var bHl = E.bj(document.body, "guide-avaw");
            if ( !! bHl && bHl.length > 0) {
                this.ox = bHl[0]
            }
        }
        return this.ox
    };
    ni.bjz = function(bHm) {
        V.bb(bHm);
        if (!this.ox) {
            this.QP()
        }
        if ( !! this.ox) {
            E.bf(this.ox, "guide-layer")
        }
        p.jL.bE({
            parent: document.body,
            nocover: true,
            nohack: true,
            imgurl: this.kW.src,
            blogId: this.bI,
            onOK: this.bPj.bHk(this),
            oncc: this.bjw.bHk(this)
        });
        this.QS = true;
        this.cy()
    };
    ni.bPj = function(bp) {
        if (!this.ox) {
            this.QP()
        }
        if ( !! this.ox) {
            E.ba(this.ox, "guide-layer")
        }
        this.kW.src = bp;
        this.QS = false;
        this.bE()
    };
    ni.bjw = function() {
        if (!this.ox) {
            this.QP()
        }
        if ( !! this.ox) {
            E.ba(this.ox, "guide-layer")
        }
        this.QS = false;
        this.bE()
    };
    ni.bjx = function(bHm) {
        V.bb(bHm);
        if ( !! this.QT) return;
        var bg = U.bA(this.bcV.value);
        if (bg.length > 0) {
            this.QT = true;
            J.br(location.dwr, "BlogSettingBean", "updateBlogNicknameWithGuide", this.bI, bg, FB, this.bjv.bHk(this))
        } else {
            E.bd("昵称不能为空！", true);
            this.QT = false
        }
    };
    ni.bjv = function(bu) {
        if (bu >= 0) {
            location.href = loft.x.bM() + "/theme/" + this.dr + "/?type=guide"
        } else {
            this.QT = false;
            if (bu == -9) {
                E.bd("昵称不正确，请重新输入！", true)
            } else {
                E.bd("昵称保存失败，请刷新重试", true)
            }
        }
    };
    ni.kN = function(bHm) {
        V.bb(bHm);
        if ( !! this.QS) return;
        J.br(location.dwr, "UserBean", "updateGuide", FB, F);
        this.bh("oncloseava")
    };
    p.QV = C();
    yL = p.QV.bi(P("loft.w").fr, true);
    yL.bq = function(bl, I) {
        I = I || {};
        I.title = "";
        I.onbeforeclose = this.kN.bHk(this);
        this.bHr(bl || document.body, I);
        E.ba(this.ei.fP, "layerlink s-fc3");
        E.bf(this.ei.fP, "w-close2");
        this.ei.fP.innerHTML = "跳过"
    };
    yL.bz = function(I) {
        I = I || {};
        this.bHo("oncloseintro", I.oncloseintro || F);
        this.bC = I.index;
        this.bju.style.left = bjF[this.bC] + "px";
        this.bjs.innerHTML = bjE[this.bC];
        this.bjr.innerHTML = bjD[this.bC];
        p.QV.bw.bz.call(this, I)
    };
    yL.cM = function() {
        this.mo = "id-" + U.cA(4);
        return '<div><div class="layerm layerm-2"><div class="infoc"><h2 class="ztag"></h2><p class="ztag"></p></div></div><span class="layerarr ztag">&nbsp;</span></div>'
    };
    yL.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        this.bjs = bHl[0];
        this.bjr = bHl[1];
        this.bju = bHl[2]
    };
    yL.cU = function() {
        return "guide-infow"
    };
    yL.kN = function(bHm) {
        V.bb(bHm);
        J.br(location.dwr, "UserBean", "updateGuide", yM, F);
        this.bh("oncloseintro")
    };
    p.Ra = C();
    tL = p.Ra.bi(P("loft.w").fr, true);
    tL.bq = function(bl, I) {
        I = I || {};
        I.title = "发现更多精彩的博客和内容";
        I.onbeforeclose = this.kN.bHk(this);
        this.bHr(bl || document.body, I);
        E.ba(this.ei.fP, "layerlink s-fc3");
        E.bf(this.ei.fP, "w-close2");
        this.ei.fP.innerHTML = "跳过";
        this.bv = new(P("loft.d").EY)({});
        this.bGW = new p.bcm(this.bjp, {
            onfinishfollow: this.Qv.bHk(this)
        })
    };
    tL.bz = function(I) {
        I = I || {};
        this.bHo("onclosefollow", I.onclosefollow || F);
        p.Ra.bw.bz.call(this, I)
    };
    tL.cM = function() {
        this.mo = "id-" + U.cA(4);
        return '<div class="ztag"></div>'
    };
    tL.cc = function() {
        var bHl = E.bj(this.Y, "ztag");
        this.bjp = bHl[0]
    };
    tL.cU = function() {
        return "m-layer m-layer-2 guide-followw"
    };
    tL.Qv = function(bHm) {
        V.bb(bHm);
        this.cy()
    };
    tL.kN = function(bHm) {
        V.bb(bHm);
        var ik = this.bjo();
        this.bh("onclosefollow", ik)
    };
    tL.bjo = function() {
        var io = this.bv.OU();
        if (!io) {
            return []
        }
        var ik = [];
        for (var bg in io) {
            if ( !! bg) {
                ik.push(bg)
            }
        }
        return ik
    };
    p.bjn = C();
    iR = p.bjn.bi(P(N.ut).gY);
    iR.bq = function(I) {
        this.bHr();
        this.gF = I || {};
        this.yC = this.gF.guide;
        if (this.yC >= bcN) return;
        this.Ri = E.mF("m-guide-ntp-1");
        document.body.appendChild(this.Ri);
        if (this.yC == FB) {
            this.Rj(this.gF.lis, true)
        }
        if (this.yC < yM) {}
        if (!this.bdv) {
            this.bdv = this.Rk.bHk(this);
            V.bHo(window, "resize", this.bdv)
        }
        if (this.yC < FB) {
            this.bjm()
        } else if (this.yC < bcN) {
            this.Rm(0)
        } else if (this.yC < yM) {}
    };
    iR.bjm = function() {
        p.QJ.bE({
            nocover: true,
            nohack: true,
            oncloseava: this.bjl.bHk(this),
            blogId: this.gF.blogId,
            blogName: this.gF.blogName,
            nickname: this.gF.nickname,
            avaImg: this.gF.avaImg
        })
    };
    iR.Rm = function(Q) {
        E.ba(this.gF.nav, "m-nav2-z");
        p.QV.bE({
            nomove: true,
            nocover: true,
            nohack: true,
            index: Q,
            oncloseintro: this.bjk.bHk(this)
        });
        this.Rk()
    };
    iR.bGY = function() {
        E.bf(this.gF.nav, "m-nav2-z");
        E.ba(this.gF.gbt, "m-menu-z");
        p.Ra.bE({
            nomove: true,
            nocover: true,
            nohack: true,
            onclosefollow: this.bji.bHk(this)
        });
        this.Rk()
    };
    iR.Rk = function() {
        this.Rr = E.bj(document.body, "guide-infow")[0];
        this.Rs = E.bj(document.body, "guide-followw")[0];
        if ( !! this.Rr) {
            this.Rr.style.top = Fu[0] + E.jO(this.gF.main, this.HI) + "px";
            this.Rr.style.left = Fu[1] + E.tz(this.gF.main, this.HI) + "px"
        }
        if ( !! this.Rs) {
            this.Rs.style.top = Fu[2] + E.jO(this.gF.side, this.HI) + "px";
            this.Rs.style.left = Fu[3] + E.tz(this.gF.main, this.HI) + "px"
        }
    };
    iR.HI = function(X) {
        return X == document.body
    };
    iR.Rj = function(ol, Rv) {
        for (var i = 0; i < ol.length; i++) {
            if ( !! Rv) {
                if (i == 0) {
                    V.bHo(ol[i], "click", this.bdI.bHk(this))
                } else {
                    V.bHo(ol[i], "mouseover", this.bjh.bHk(this, i - 1));
                    V.bHo(ol[i], "click", this.bjg.bHk(this, ol[i].href))
                }
            } else {
                V.bJv(ol[i], "mouseover");
                V.bJv(ol[i], "click")
            }
        }
    };
    iR.bjh = function(Q, bHm) {
        V.bb(bHm);
        this.Rm(Q)
    };
    iR.bjf = function(ol, Rv) {
        for (var i = 0; i < ol.length; i++) {
            if ( !! Rv) {
                V.bHo(ol[i], "click", this.bdI.bHk(this))
            } else {
                V.bJv(ol[i], "click")
            }
        }
    };
    iR.bjg = function(yk, bHm) {
        V.bb(bHm);
        J.gf(location.dwr, "UserBean", "updateGuide", yM, this.bjd.bHk(this, yk))
    };
    iR.bjd = function(yk) {
        location.href = yk
    };
    iR.bdI = function(bHm) {
        V.bb(bHm)
    };
    iR.bjl = function() {
        this.Rj(this.gF.lis, true);
        this.Rm(0)
    };
    iR.bjk = function() {
        this.Rj(this.gF.lis, false);
        E.bf(this.gF.nav, "m-nav2-z");
        E.hE(this.Ri)
    };
    iR.bji = function(ik) {
        this.bjf(this.gF.gbl, false);
        E.bf(this.gF.gbt, "m-menu-z");
        E.hE(this.Ri);
        if (ik.length > 0) {
            E.ef("正在添加关注...", false, true, false);
            J.br(location.dwr, "UserBean", "followBlogsFromGuide", ik, yM, this.bjc.bHk(this))
        } else {
            J.br(location.dwr, "UserBean", "updateGuide", yM, F)
        }
    };
    iR.bjc = function() {
        E.bY("关注添加成功！", true, false, false);
        location.reload()
    }
})(); (function() {
    var p = P("loft.m.activitytag");
    var bZd, cgr, bal, bak;
    p.clX = C();
    bZd = p.clX.bi(P(N.ut).fc, true);
    var eO = E.gD('<div class="cont"><div class="txt"><a href="" class="tit xtag" target="_blank"></a><span class="f-fs0 s-fc2 tit2"><strong class="xtag"></strong><strong class="xtag">发起人：<a href="#" target="_blank" class="sname xtag"></a></strong></span><i class="w-icnwm w-icnwm-1 xtag">&nbsp;</i></div><div class="list xtag"></div></div>');
    bZd.bq = function() {
        this.bHr(eO);
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.bJr = bHl[i++];
        this.crp = bHl[i++];
        this.clW = bHl[i++];
        this.crr = bHl[i++];
        this.dgu = bHl[i++];
        this.dg = bHl[i];
        this.cZ = [];
        V.bHo(this.clW, "mouseover", this.bHF.bHk(this, true, this.clW));
        V.bHo(this.clW, "mouseout", this.bHF.bHk(this, false, this.clW))
    };
    bZd.bHC = function(I) {
        I = I || {};
        this.bLM = I.size || 125;
        this.dzI = !!I.hidedate;
        this.dgs = !!I.hidejoinpostnum;
        this.bWI = I.tongji || "";
        this.bfZ = I.from || ""
    };
    bZd.ce = function(bHn) {
        p.clX.bw.ce.call(this, bHn);
        var bem = "http://www.lofter.com/tag/" + encodeURIComponent(bHn.tagName);
        if ( !! this.bWI) {
            bem += "?" + this.bWI
        }
        this.ji = bem;
        this.bJr.href = bem;
        this.bJr.innerText = bHn.tagName || "";
        this.dgu.style.display = this.bHq.type == 1 ? "": "none";
        this.crp.innerText = bHn.joinedPostNum + "参与";
        if (this.bfZ === "radar" || this.bfZ === "getNewActivityTags" || this.bfZ === "getHotActivityTags") {
            this.clW.style.display = "none"
        } else {
            this.crr.href = "http://" + bHn.blogInfo.blogName + ".lofter.com";
            this.crr.innerText = bHn.blogInfo.blogNickName
        }
        if (bHn.hideCreator) {
            this.crr.parentNode.style.display = "none"
        }
        this.crp.style.display = !!this.dgs ? "none": "";
        if (bHn.recentPosts.length > 2) {
            var l;
            if (this.bfZ === "getNewActivityTags") {
                l = 3
            } else {
                l = Math.min(bHn.recentPosts.length, 6)
            }
            for (var i = 0; i < l; i++) {
                this.cZ.push(this.btK(bHn.recentPosts[i], bHn.tagName))
            }
        }
    };
    bZd.dzJ = function(bHm) {
        if (bHm.target != this.crr) location.href = this.ji
    };
    bZd.bHF = function(gu, CL, bHm) {
        if (!loft.g.dousercard) return;
        if ( !! gu) {
            loft.g.dousercard(CL, this.bHq.blogInfo.blogId, gu, {
                boxWidth: 120
            })
        } else {
            loft.g.dousercard(CL, this.bHq.blogInfo.blogId, gu)
        }
        V.bb(bHm)
    };
    bZd.cK = function() {
        p.clX.bw.cK.dgn(this)
    };
    bZd.btK = function(bN, iz) {
        if (bN.type == 1) {
            return p.NP.bG(bN, this.dg, {
                size: this.bLM,
                tagName: iz
            })
        } else {
            return p.NO.bG(bN, this.dg, {
                size: this.bLM,
                tagName: iz
            })
        }
    };
    p.cry = C();
    cgr = p.cry.bi(P(N.ut).fc, true);
    var DQ = E.gD('<div class="cont"><div class="brandlogo"><a href="" class="xtag" target="_blank"><img src="" class="xtag" /></a></div><div class="list f-cb xtag"></div><div class="f-cb"><span class="f-fl f-fs1"><a href="" class="s-fc2 xtag" target="_blank"></a></span><span class="f-fr f-fs1 s-fc2 f-fw0 xtag"></span></div></div>');
    cgr.bq = function() {
        this.bHr(DQ);
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.dgm = bHl[i++];
        this.dgl = bHl[i++];
        this.dg = bHl[i++];
        this.cOy = bHl[i++];
        this.crp = bHl[i++];
        this.cZ = []
    };
    cgr.bHC = function(I) {
        I = I || {};
        this.bLM = I.size || 92;
        this.bWI = I.tongji || ""
    };
    cgr.ce = function(bHn) {
        p.cry.bw.ce.call(this, bHn);
        var bem = "http://www.lofter.com/tag/" + encodeURIComponent(bHn.tagName);
        if ( !! this.bWI) {
            bem += "?" + this.bWI
        }
        this.ji = bem;
        this.dgm.href = this.cOy.href = bem;
        this.dgl.src = bHn.imageUrl;
        this.cOy.innerText = bHn.tagName || "";
        this.crp.innerText = bHn.joinedPostNum + "参与";
        if (bHn.recentPosts.length > 2) {
            l = Math.min(bHn.recentPosts.length, 4);
            for (var i = 0; i < l; i++) {
                this.cZ.push(this.btK(bHn.recentPosts[i], bHn.tagName))
            }
        }
    };
    cgr.cK = function() {
        p.cry.bw.cK.dgn(this)
    };
    cgr.btK = function(bN, iz) {
        if (bN.type == 1) {
            return p.NP.bG(bN, this.dg, {
                size: this.bLM,
                tagName: iz,
                tongji: "&act=qbppk_20141105_05"
            })
        } else {
            return p.NO.bG(bN, this.dg, {
                size: this.bLM,
                tagName: iz,
                tongji: "&act=qbppk_20141105_05"
            })
        }
    };
    p.NO = C();
    bal = p.NO.bi(P(N.ut).fc, true);
    var bns = E.gD('<a href="#" target="_blank"><span class="item"><img class="xtag"/><span class="icover"></span><span class="w-type xtag" style="display:none;"></span></span></a>');
    bal.bq = function() {
        this.bHr(bns);
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.bD = bHl[i++];
        this.brC = bHl[i++]
    };
    bal.bHC = function(I) {
        I = I || {};
        this.bLM = I.size || 125;
        this.bJr = I.tagName;
        this.bWI = I.tongji || ""
    };
    bal.ce = function(bHn) {
        p.NO.bw.ce.call(this, bHn);
        this.Y.href = "http://www.lofter.com/tag/" + encodeURIComponent(this.bJr) + "?first=" + bHn.permalink + this.bWI;
        this.bD.style.visibility = bHn.type == 3 || bHn.type == 4 ? "hidden": "visible";
        var cOz = this.czD(bHn) || "";
        this.brC.style.display = bHn.type == 2 ? "none": "";
        this.brC.className = bHn.type == 3 ? "w-type": "w-type w-type-1";
        V.bHo(this.bD, "load", loft.x.dwR.Eo(this, this.bLM));
        if ( !! cOz) {
            this.bD.src = cOz
        }
    };
    bal.czD = function(bHn) {
        var bPG;
        try {
            bPG = U.bHx(bHn.firstImageUrl)
        } catch(e) {}
        if ( !! bPG && !!bPG.length) {
            return bPG[0]
        }
        return null
    };
    p.NP = C();
    bak = p.NP.bi(P(N.ut).fc, true);
    var dgk = E.gD('<a href="#" target="_blank"><span class="item"><span class="itemtxt"><strong class="xtag"></strong><span class="xtag"></span></span><span class="icover"></span></span></a>');
    bak.bq = function() {
        this.bHr(dgk);
        var bHl = E.bj(this.Y, "xtag"),
        i = 0;
        this.hL = bHl[i++];
        this.btU = bHl[i++]
    };
    bak.bHC = function(I) {
        I = I || {};
        this.bJr = I.tagName;
        this.bWI = I.tongji || ""
    };
    bak.ce = function(bHn) {
        p.NP.bw.ce.call(this, bHn);
        this.Y.href = "http://www.lofter.com/tag/" + encodeURIComponent(this.bJr) + "?first=" + bHn.permalink + this.bWI;
        this.hL.innerText = bHn.title || "";
        this.btU.innerHTML = (bHn.digest || "").replace(/<.*?>/g, "")
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    bdO = .8,
    AP,
    mf;
    var cOF = 20;
    var clM = "keyOfSavedKeys";
    var cOH = function(bx) {
        if (!bx) return;
        var cgn = encodeURIComponent(bx);
        var bWL = P(N.ut).dC.qs(clM) || "";
        var bWU = bWL.split(";") || [];
        var sF = bWU.length;
        for (var i = 0; i < sF - 1; i++) {
            if (bWU[i] == cgn) return bx
        }
        return
    };
    var dgh = function(bx) {
        if (!bx) return;
        var cgn = encodeURIComponent(bx);
        var bWL = P(N.ut).dC.qs(clM) || "";
        var cOM = cOH(bx);
        if (!cOM) {
            var bWU = bWL.split(";") || [];
            var sF = bWU.length;
            if (sF > cOF) {
                for (var i = 0; i < sF - cOF - 1; i++) {
                    dgg(bWU[i])
                }
            }
            if (!bWL) {
                bWL = cgn
            } else {
                bWL += ";" + cgn
            }
        }
        P(N.ut).dC.wE(clM, bWL)
    };
    var dgg = function(bx) {
        if (!bx) return;
        var cgn = encodeURIComponent(bx);
        var bWL = P(N.ut).dC.qs(clM) || "";
        var cOM = cOH(bx);
        var cOO = [];
        var bWU = bWL.split(";") || [];
        var sF = bWU.length;
        for (var i = 0; i < sF - 1; i++) {
            if (bWU[i] != cgn) {
                cOO.push(bWU[i])
            } else {
                P(N.ut).dC.hz(bx)
            }
        }
        P(N.ut).dC.wE(clM, cOO.join(";"))
    };
    p.bdS = C();
    AP = p.bdS.bi(P(N.ut).hx);
    AP.bq = function(I) {
        this.bHr(I);
        this.bjb = (I.radarAdPercent || 0) / 100;
        this.dgf = (I.radarActivityTagPercent || 0) / 100;
        this.cOQ = I.noAppLogin || false;
        if ( !! this.cOQ) this.dgd = decodeURIComponent(U.ot("lofterradardbanner")) || ""
    };
    AP.RE = function(RF, dzK) {
        var mD = Math.random();
        RF = !!RF;
        if (!RF) {
            if (mD < this.bjb && !this.cOU) {
                J.br(location.dwr, "TrackBean", "getRandomActivityItem", false, this.bja.bHk(this));
                return
            } else if (mD < this.bjb + this.dgf && !this.cyQ) {
                J.br(location.dwr, "ActivityTagBean", "getActivityTagForRadar", this.cOW.bHk(this));
                return
            }
            if ( !! this.cOQ && mD <= .8 && this.dgd !== "settrue") {
                this.bh("onLoadDldBanner");
                return
            }
        }
        E.bf(E.be("radarlnk"), "f-dn");
        E.ba(E.be("radarlnk-actived"), "f-dn");
        
        //我增加的
        if(null != E.be("rblogmod")){
            E.be("rblogmod").style.opacity = 1;
        }
        if (!this.dga) {
            J.br(location.dwr, "TrackBean", "getRadarItemsNew",
            function(bHn) {
                if (!bHn || !bHn.length) {
                    this.dga = true
                }
                this.bh("onradarlistload", bHn)
            }.bHk(this));
            return
        }
        if (!this.cOU) {
            J.br(location.dwr, "TrackBean", "getRandomActivityItem", false, this.bja.bHk(this));
            return
        }
        if (!this.cyQ) {
            J.br(location.dwr, "ActivityTagBean", "getActivityTagForRadar", this.cOW.bHk(this));
            return
        }
    };
    AP.bja = function(bHn) {
        bHn = bHn || {};
        var bem = bHn.linkUrl;
        if (!bem || !bHn.imageUrl) {
            this.cOU = true;
            this.RE(true)
        } else {
            this.bh("onactload", bHn)
        }
    };
    AP.cOW = function(bHn) {
        bHn = bHn || {};
        var iz = bHn.tagName;
        if (!bHn || !iz) {
            this.cyQ = true;
            this.RE(true)
        } else {
            var fC = P(N.ut).dC.qs(iz);
            if ( !! fC) fC = parseInt(fC) || 0;
            if (fC >= 5) {
                this.cyQ = true;
                this.RE(true);
                return
            }
            P(N.ut).dC.wE(iz, fC + 1);
            dgh(iz);
            this.bh("onactivitytagload", bHn)
        }
    };
    AP.biZ = function() {
        J.br(location.dwr, "TrackBean", "showRadarType", this.bh.bHk(this, "onshouldshowmobileorsyncad"))
    };
    p.RK = C();
    mf = p.RK.bi(P(N.fw).lu);
    mf.bq = function(bl, I) {
        I = I || {};
        this.bHr(bl, I);
        this.bfZ = I.from || "";
        this.dfY = I.newRegistUser || false;
        this.dl = new p.bdS({
            radarAdPercent: I.radarAdPercent || 30,
            radarActivityTagPercent: I.radarActivityTagPercent || 30,
            noAppLogin: I.noAppLogin || false
        });
        this.dl.bHo("onradarlistload", this.biX.bHk(this));
        this.dl.bHo("onactload", this.biW.bHk(this));
        this.dl.bHo("onactivitytagload", this.dfW.bHk(this));
        this.dl.bHo("onshouldshowmobileorsyncad", this.biV.bHk(this));
        this.dl.bHo("onLoadDldBanner", this.dfU.bHk(this));
        this.nm = new(P("loft.d").up);
        this.nm.bHo("onlike", this.Nq.bHk(this));
        this.tK = new(P("loft.d").AS)({
            onfollow: this.nn.bHk(this),
            unfollow: this.nn.bHk(this)
        });
        this.bKX = I.pageconfig || P("loft.c").bOj || {};
        this.bHG = {
            targetBlogInfo: this.bKX.targetBlogInfo,
            flashSessionCookie: this.bKX.v,
            lastCCType: this.bKX.lastCCType,
            postOverNum: this.bKX.postOverNum,
            blogList: this.bKX.blogList,
            ue_cfg_develop: this.bKX.ue_cfg_develop,
            ue_js_version: this.bKX.ue_js_version,
            allowUploadDIYMusic: !!this.bKX.allowUploadDIYMusic
        };
        P("m");
        window.m.refreshRadar = this.bee.bHk(this)
    };
    mf.Np = function(bHm) {
        V.bb(bHm);
        if (!this.bef) {
            if ( !! loft.c.cm.isForbidUser) {
                loft.x.kX();
                return
            }
            this.nm.bfg(this.ic, this.bI)
        } else {
            this.nm.bfi(this.ic, this.bI)
        }
    };
    mf.Nq = function(hM, bHn) {
        if ( !! bHn) {
            if (bHn.id == -100) {
                E.bd("您喜欢得太快了，请休息一下。")
            } else if (bHn.id == -10) {
                E.bd("由于用户权限设置，您无法喜欢该文章！")
            } else {
                this.bef = hM; !! hM ? E.dt(this.sX, "oprti-3", "oprti-1") : E.dt(this.sX, "oprti-1", "oprti-3")
            }
        }
    };
    mf.bE = function() {
        if ( !! this.dfY) {
            this.dl.RE(true);
            return
        }
        this.cQ = true;
        this.dl.RE()
    };
    mf.biV = function(bu) {
        var bHn = {};
        bu = bu || 1;
        if (bu == 2 || bu == 3) {
            this.dl.RE(true)
        } else {
            this.dl.RE()
        }
    };
    mf.kc = function(bHm) {
        V.bb(bHm);
        loft.x.bHt("qblddr_20150204_03");
        if (!this.cPn) {
            this.cPn = true;
            if ( !! loft.c.cm.isForbidUser) {
                loft.x.kX();
                return
            }
            this.tK.dkb(this.bI, this.bHY, 3, 1);
            window["_gaq"].push(["_trackEvent", "PC端雷达位", "关注量"])
        }
    };
    mf.nn = function(bHn, jw, bK) {
        if ( !! bK && bK > 0) {
            if ( !! jw) {
                E.ba(E.be("radarlnk"), "f-dn");
                E.bf(E.be("radarlnk-actived"), "f-dn");
                E.be("rblogmod").style.opacity = 0;
                setTimeout(function() {
                    this.dl.RE(true)
                }.bHk(this), 500)
            }
        } else {
            loft.x.bKv(bK)
        }
    };
    mf.cMG = function(bHm) {
        var cbd = P("loft.m.newpublish.w").bMy();
        if (!cbd) return;
        V.bb(bHm);
        var X = V.be(bHm);
        var I = this.bHG;
        I.actionType = "REBLOG";
        I.post = this.bHq.post;
        I.submitUrl = X.href;
        var bJK = {};
        bJK.publishOptions = I;
        P("loft.m.newpublish.w").bZM.YV(bJK)
    };
    mf.biX = function(bHn) {
        this.cQ = false;
        if ( !! bHn && !!bHn.length) {
            bHn = bHn[0] || {};
            this.bHq = bHn;
            var hf = "/explore/?type=interest&interest=" + encodeURIComponent(bHn.domainName) + "&fbid=" + bHn.blogId;
            this.bI = bHn.blogId;
            this.bHY = bHn.domainId || 0;
            this.bqW.href = hf + "&act=qblddr_20150204_01";
            this.IF.src = loft.x.eK(bHn.avaImg);
            this.fz.innerText = bHn.blogNickName || "";
            this.fz.href = hf + "&act=qblddr_20150204_01";
            this.bVQ.innerText = bHn.recReason || "";
            this.dL.style.display = "";
            var bk = E.eY(E.dG("m-jst-blogposts", {
                posts: bHn.postDatas || [],
                link: hf + "&act=qblddr_20150204_02",
                imgResize: loft.x.bJR
            }));
            if ( !! this.cyd) this.cyd.innerHTML = "";
            this.cyd.insertAdjacentElement("beforeEnd", bk)
        } else {
            this.dL.style.display = "none";
            if (!this.dfN) {
                this.dfN = true;
                this.dl.RE(false, true)
            }
        }
        this.cPn = false;
        loft.x.bHt("qblddr_20150204_04")
    };
    mf.biW = function(bHn) {
        if ( !! bHn) {
            this.Y.style.display = "none";
            var bem = bHn.linkUrl || "",
            ben = bHn.imageUrl || "";
            if (!bem || !ben) return;
            var bk = E.mF("m-radar-ntp-1"),
            bHl = E.bj(bk, "xtag"),
            i = 0;
            bHl[0].src = ben;
            bHl[0].parentNode.href = bem;
            this.dL.appendChild(bk);
            this.dL.style.display = ""
        }
    };
    mf.dzL = function(bem) {
        location.href = bem
    };
    mf.dfW = function(bHn) {
        if ( !! bHn) {
            this.Y.style.display = "none";
            var bk = E.mF("m-radar-ntp-2"),
            bHl = E.bj(bk, "xtag"),
            i = 0;
            var dfL = P("loft.m.activitytag").clX;
            dfL.bG(bHn, bHl[0], {
                size: 96,
                hidedate: true,
                tongji: "act=qbactivitytag_20130704_02",
                from: "radar"
            });
            bHl[0].style.cursor = "pointer";
            this.dL.appendChild(bk);
            this.dL.style.display = "";
            V.bHo(bHl[0], "click",
            function(bHm) {
                V.bb(bHm);
                P(N.ut).dC.wE(bHn.tagName, 5);
                location.href = "http://www.lofter.com/tag/" + encodeURIComponent(bHn.tagName) + "?act=qbactivitytag_20130704_02"
            })
        } else {
            this.dl.RE(true)
        }
    };
    mf.ke = function() {
        var bk = E.mF("m-radar-ntp-4"),
        bHl = E.bj(bk, "xtag"),
        i = 0;
        if(null != bHl){
            this.bqW = bHl[i++];
            this.IF = bHl[i++];
            this.fz = bHl[i++];
            this.bVQ = bHl[i++];
            this.cyd = bHl[i++];
            this.ou = bHl[i++];
        }
        V.bHo(this.ou, "click", this.kc.bHk(this));
        return bk
    };
    mf.dfU = function() {
        this.Y.style.display = "none";
        var bk = E.mF("m-radar-ntp-3");
        this.dL.appendChild(bk);
        this.dL.style.display = "";
        V.bHo(bk, "click",
        function(bHm) {
            V.bb(bHm);
            U.ru("lofterradardbanner", "settrue", ".lofter.com", 300, "/");
            location.href = "http://www.lofter.com/app?act=qbyclyd_20141229_04"
        });
        loft.x.bHt("qbyclyd_20141229_03")
    };
    mf.bee = function() {
        var dn = E.jO(this.fG),
        Bo;
        if (dn < 552) Bo = "cover-3";
        else if (dn < 600) Bo = "cover-2";
        else if (dn < 656) Bo = "cover-1";
        else Bo = "cover-0";
        this.fG.className = "cover " + Bo
    };
    mf.bHF = function(gu, CL, dA, bHm) {
        dA = dA || this.bHq.blogId;
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu, {
                onFollowSucc: this.bMe,
                onUnFollowSucc: this.bPC
            });
            this.HW(this.hH.parentNode, gu)
        } else {
            loft.g.dousercard(CL, dA, gu);
            this.HW(this.hH.parentNode, gu)
        }
        V.bb(bHm)
    };
    mf.bRV = function(dA, bNV) {
        this.hH.style.display = "none";
        this.RP = true;
        E.ba(this.xj.parentNode, "js-followed")
    };
    mf.bUM = function(dA, bNV) {
        this.hH.style.display = "";
        this.RP = false;
        E.bf(this.xj.parentNode, "js-followed")
    };
    mf.HW = function(X, gu) {
        if (X === this.Iu.parentNode) {
            X.style.display = !!gu && (!this.bHq || this.bHq.blogId !== loft.c.cm.userId) ? "": "none"
        } else {
            if ( !! this.bHq && this.bHq.blogId === loft.c.cm.userId) {
                this.hH.style.display = "none";
                return
            }
            if ( !! gu) {
                if ( !! this.RP) {
                    this.hH.style.display = "none"
                }
                if (B.dh) {
                    E.ba(this.Im, "js-user-hover")
                }
            } else {
                if (B.dh) {
                    E.bf(this.Im, "js-user-hover")
                }
            }
        }
    }
})(); (function() {
    var p = P("loft.d"),
    sH,
    xB;
    p.Tj = C();
    sH = p.Tj.bi(P(N.fw).bLr);
    sH.bq = function(I) {
        I = I || {};
        this.bHr(I);
        this.bEA = I.ckey || ""
    };
    sH.OP = function(bc) {
        J.br(location.dwr, "UserBean", "unFollowBlog", bc || 0, this.bh.bHk(this, "unfollow", bc))
    };
    sH.wC = function(bc) {
        J.br(location.dwr, "UserBean", "followBlog", bc || 0, this.bh.bHk(this, "onfollow"))
    };
    sH.pQ = function(I, ca) {
        ca(I.allcount)
    };
    sH.kB = function(I, ca) {
        J.br(location.dwr, "UserBean", "getUserFollowingList", 1e4, I.offset, I.ckey == "following_1" ? true: false, ca)
    };
    sH.bEB = function(bx) {
        this.rm = bx
    };
    sH.Tk = function(bx, dx, ci) {
        bx = bx.toLowerCase();
        var bn = this.nE(this.bEA),
        bu = [];
        for (var i = 0; i < bn.length; i++) {
            try {
                var Ae = bn[i].blogInfo.blogNickName.toLowerCase()
            } catch(e) {}
            if (Ae.indexOf(bx) != -1) {
                bu.push(bn[i]);
                continue
            }
            bn[i].blogInfo.pyBlogNickName = bn[i].blogInfo.pyBlogNickName || P("loft.w").Pt.bcI(Ae, "\t");
            if (bn[i].blogInfo.pyBlogNickName.indexOf(bx) != -1) {
                bu.push(bn[i]);
                continue
            }
        }
        ci = ci || 0;
        if (ci >= bu.length) return null;
        return bu.slice(ci, dx || 0)
    };
    p.VA = C();
    xB = p.VA.bi(p.Tj);
    xB.bq = function(I) {
        this.bHr(I);
        this.ex = "blog-idx";
        this.Js = I.dataFilter || O
    };
    xB.bEF = function(Gp) {
        this.hm = Gp;
        this.ex = "blog-idx-" + Gp
    };
    xB.pQ = function(I, ca) {
        var vQ = this;
        J.br(location.dwr, "UserBean", "searchBlog", this.hm, 20, I.offset || 0,
        function(bHn) {
            if ( !! bHn) {
                vQ.Js(bHn, 20, I.offset || 0);
                vQ.bgO(bHn);
                vQ.Jd(bHn.blogInfoList, "id", vQ.ex, 0);
                ca(bHn.totalCount)
            } else {
                ca(0)
            }
        })
    };
    xB.kB = function(I, ca) {
        var vQ = this;
        J.br(location.dwr, "UserBean", "searchBlog", this.hm, I.limit, I.offset,
        function(bHn) {
            if ( !! bHn) {
                vQ.Js(bHn, I.limit, I.offset);
                vQ.bgO(bHn);
                ca(bHn.blogInfoList)
            }
        })
    };
    xB.bgO = function(bu) {
        if (!bu || !bu.blogInfoList || !bu.followedList) return;
        var i = 0,
        bn = bu.blogInfoList,
        l = bn.length,
        Tl = bu.followedList;
        if (!l) return;
        for (; i < l; i++) {
            bn[i].isunfollow = !Tl[i]
        }
    }
})(); (function() {
    var p = P("loft.w"),
    zF,
    zB,
    zt;
    var JV = '<div class="m-layer3"><div class="layerc"><div class="layerbgt zflg"></div><div class="layerbgm"><div class="layert" style="cursor:default;"><a href="#" class="w-close2 zflg">关闭</a></div><div class="zflg"></div></div><div class="layerbgb"></div></div></div>';
    var cc = function() {
        var bHl = E.bj(this.Y, "zflg");
        this.yh = bHl[0];
        this.fP = bHl[1];
        this.nJ = bHl[2];
        E.DX(bHl[1].parentNode);
        V.bHo(this.fP, "click", this.rR.bHk(this));
        P(N.ui).fx("#<uispace>{border:none;}", this.cU())
    };
    p.zq = C();
    zt = p.zq.bi(p.nr, true);
    zt.cM = function() {
        return JV
    };
    zt.cU = function() {
        return "a-scale a-scale-layer"
    };
    zt.bE = function() {
        p.zq.bw.bE.call(this, arguments);
        E.ba(this.Y, "a-scale-do")
    };
    zt.rR = function(bHm) {
        if ( !! bHm) V.bb(bHm);
        E.bf(this.Y, "a-scale-do");
        window.setTimeout(p.zq.bw.rR.bHk(this), 300)
    };
    p.ED = C();
    zF = p.ED.bi(p.fr, true);
    zF.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "";
        I.wclass = p.zq;
        this.bHr(bl, I);
        this.cwl(this.clz.bHk(this))
    };
    zF.clz = function() {
        if ( !! this.bYZ) {
            try {
                this.bYZ()
            } catch(e) {}
        }
    };
    zF.bz = function(I) {
        if ( !! I.title) this.ei.iI(I.title);
        this.bwL.href = "/regurs?target=" + encodeURIComponent(I.target);
        this.bwM.href = "/?target=" + encodeURIComponent(I.target);
        p.ED.bw.bz.call(this, I);
        this.bYZ = I.closeWinCallback
    };
    zF.cM = function() {
        return '<div class="layerm"><p class="f-fs2">登录LOFTER之后，您可以继续操作，还可以记录生活、<br>分享创作，找到志趣相投的朋友。</p><p class="f-fs2 s-fc1">网易邮箱可直接登录。</p></div><div class="layerb"><a href="/regurs" class="w-bbtn w-bbtn-0 wtag">注  册</a><a href="/" class="w-bbtn wtag">登  录</a></div>'
    };
    zF.cc = function() {
        var bHl = E.bj(this.Y, "wtag");
        this.bwL = bHl[0];
        this.bwM = bHl[1]
    };
    p.EC = C();
    zB = p.EC.bi(p.fr, true);
    zB.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "";
        I.wclass = p.zq;
        this.bHr(bl, I);
        this.cwl(this.clz.bHk(this))
    };
    zB.clz = function() {
        if ( !! this.bYZ) {
            try {
                this.bYZ()
            } catch(e) {}
        }
    };
    zB.bz = function(I) {
        if ( !! I.title) this.ei.iI(I.title);
        this.bwN.innerText = "HI，" + I.email;
        this.Bx.href = "/reg?target=" + encodeURIComponent(I.target);
        p.EC.bw.bz.call(this, I);
        this.bYZ = I.closeWinCallback
    };
    zB.cM = function() {
        return '<div class="layerm"><p class="f-fs3 s-fc12 wtag">HI，dingding@163.com</p><p class="f-fs2">快速激活LOFTER，您可以继续操作，还可以记录生活、<br>分享创作，找到志趣相投的朋友。</p></div><div class="layerb"><a href="/reg" class="w-bbtn w-bbtn-4 wtag">开始LOFTER之旅</a><a href="/logout.do" class="link s-fc2 f-fs1">更换注册邮箱</a></div>'
    };
    zB.cc = function() {
        var bHl = E.bj(this.Y, "wtag");
        this.bwN = bHl[0];
        this.Bx = bHl[1]
    }
})(); (function() {
    var p = P("loft.w"),
    g = P("loft.g"),
    bJt,
    duD = false,
    cxN = null,
    bZa = null,
    bZb = null,
    cv = null;
    g.dousercard = function(CL, dA, gu, cgl) {
        if ( !! cgl && !!cgl.doDelFunc) {
            var cp = cgl.isTag === true ? bZb: bZa;
            if ( !! cp) {
                cp.duC(cgl);
                return
            }
        }
        if ( !! gu) {
            if ( !! cv) return;
            cv = window.setTimeout(function(CL, dA) {
                if (CL === cxN) {
                    return
                } else {
                    cxN = CL
                }
                var I = cgl || {};
                I.elem = CL || null;
                I.blogId = dA || 0;
                if ( !! I.tag) {
                    if (!bZb) {
                        bZb = new loft.w.cxX(document.body, I)
                    } else {
                        bZb.bnH(I)
                    }
                } else {
                    if (!bZa) {
                        bZa = new loft.w.cxY(document.body, I)
                    } else {
                        bZa.bnH(I)
                    }
                }
                window.clearTimeout(cv);
                cv = null
            }.bHk(this, CL, dA), 300)
        } else {
            window.clearTimeout(cv);
            cv = null
        }
    };
    g.hideusercard = function(CL, dA, gu, cgl) {
        if ( !! bZa && !!bZa.bPP) bZa.bPP(true);
        bZa = null;
        if ( !! bZb && !!bZb.bPP) bZb.bPP(true);
        bZb = null
    };
    window.drawStatisticImg = function(bJU) {
        loft.x.bHt(bJU)
    };
    p.cxY = C();
    bJt = p.cxY.bi(P(N.ut).gY);
    bJt.bq = function(bl, I) {
        this.bHr();
        var I = I || {};
        this.gF = I;
        this.bKi = {};
        this.bqC = "";
        this.xL = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.fM = 0;
        this.gh = 0;
        this.duB = this.duA();
        this.cgm = this.duz();
        this.czk = !(B.da && document.documentMode < 8);
        this.bnH(I);
        V.bHo(document.body, "click", this.cIg.bHk(this))
    };
    bJt.duA = function() {
        var czL = /(msie\s|trident.*rv:)([\w.]+)/,
        czK = navigator.userAgent.toLowerCase();
        if (czL.exec(czK) != null) {
            return true
        } else {
            return false
        }
    };
    bJt.duz = function() {
        var s = document.createElement("p").style;
        return supportsTransitions = "transition" in s || "WebkitTransition" in s || "MozTransition" in s || "msTransition" in s || "OTransition" in s
    };
    bJt.bnH = function(I) {
        this.crH = I.elem || null;
        this.bI = I.blogId || 0;
        this.FP = I.jst || "m-usercard-jst-1";
        this.czq = I.boxWidth || 0;
        this.duy = I.boxHeight || 0;
        this.czw = I.isRepostDWR || false;
        this.cIz = I.cardHeight || 257;
        this.crC = !!I.recType ? I.recType: undefined;
        this.bHY = !!I.domainId ? I.domainId: undefined;
        this.crz = !!I.positionId ? I.positionId: undefined;
        this.iJ("onfollowsucc");
        this.iJ("onunfollowsucc");
        this.iJ("onloadnextbloglist");
        this.bHo("onfollowsucc", I.onFollowSucc || F);
        this.bHo("onunfollowsucc", I.onUnFollowSucc || F);
        this.bHo("onloadnextbloglist", I.onLoadNextBlogList || F);
        this.clQ = this.bqC;
        this.dux(this.crH);
        if ( !! E.bj(document.body, "usercard").length > 0) {
            this.bLn = E.bj(document.body, "usercard")[0];
            this.bHC()
        } else {
            if ( !! this.duB) {
                this.duw()
            }
            this.cbo();
            V.bHo(document.body, "mousemove", this.czW.bHk(this))
        }
    };
    bJt.duw = function() {
        var bIW, hy, bk, fW = true;
        bIW = window.getSelection ? window.getSelection() : document.selection;
        if ( !! bIW.createRange) {
            hy = bIW.createRange();
            bk = hy.parentElement()
        } else {
            hy = bIW.getRangeAt(0);
            hy.collapse(true);
            bk = bIW.anchorNode
        }
        while (fW) {
            if (!bk || bk.nodeType === 1 && (bk.tagName.toLowerCase() === "div" || bk.tagName.toLowerCase() === "body")) {
                fW = false
            } else {
                bk = bk.parentNode
            }
        }
        if ( !! bk && bk.tagName.toLowerCase() !== "body") {
            bk.blur()
        }
    };
    bJt.dux = function(CL) {
        var cbE;
        if ( !! this.czq && CL.offsetWidth < this.czq) {
            cbE = CL.offsetWidth
        } else {
            cbE = this.czq || CL.offsetWidth
        }
        var box = CL.getBoundingClientRect(),
        doc = CL.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        docWidth = docElem.clientWidth || body.clientWidth || 0,
        dn = box.top + (self.pageYOffset || docElem.scrollTop),
        cN = box.left + (self.pageXOffset || docElem.scrollLeft),
        cIW = this.duy || CL.offsetHeight,
        cIX = cN + cbE,
        jk = "";
        this.gh = box.top > 300 ? dn - this.cIz: dn + cIW + 10;
        this.fM = docWidth - box.left - cbE / 2 - 370 > 100 ? cN + cbE / 2 - 86 : cN + cbE / 2 - 366;
        this.xL.left = this.fM < cN ? this.fM: cN;
        this.xL.right = this.fM + 450 < cIX ? cIX: this.fM + 450;
        if (box.top > 300) {
            this.xL.top = this.gh;
            this.xL.bottom = dn + cIW
        } else {
            this.xL.top = dn;
            this.xL.bottom = this.gh + this.cIz - 10
        }
        if (box.top > 300) {
            this.bqC = "up-";
            this.gh -= 23
        } else {
            this.bqC = "down-";
            this.gh += 7
        }
        if (docWidth - box.left - cbE / 2 - 370 > 100) {
            this.bqC += "left"
        } else {
            this.bqC += "right"
        }
    };
    bJt.lA = function() {
        J.br(location.dwr, "BlogBean", "getResembleBlog", this.bI,
        function(bTb) {
            if (bTb.length === 0) {
                loft.x.bHt("qbxsdr_20150814_01")
            } else {
                loft.x.bHt("qbxsdr_20150810_01")
            }
            this.it = bTb;
            this.duu()
        }.bHk(this))
    };
    bJt.duu = function() {
        if ( !! this.KP) {
            window.clearTimeout(this.KP)
        }
        if ( !! this.bKi[this.bI] && !this.czw) {
            return
        } else {
            J.br(location.dwr, "BlogBean", "getBlogStatNew", this.bI, this.cJl.bHk(this, this.bI, this.it))
        }
    };
    bJt.cJl = function(dA, kk, bHn) {
        window["_gaq"].push(["_trackEvent", "个人名片", "弹出量"]);
        if (this.bI !== dA) return;
        if (!this.bKi[this.bI] || !!this.czw) {
            this.bKi[this.bI] = bHn;
            this.bKi[this.bI].drlist = this.it
        } else {
            bHn.blackId = this.bKi[this.bI].blackId || null;
            bHn.inBlackList = this.bKi[this.bI].inBlackList || false
        }
        var bHn = bHn,
        bV = bHn.postList;
        for (var i = 0,
        l = bV.length; i < l; i++) {
            if (bV[i].type > 1) {
                if ( !! bHn.postList[i].firstImageUrl && U.bHx(bHn.postList[i].firstImageUrl).length > 0) {
                    var qS = U.bHx(bHn.postList[i].firstImageUrl)[0];
                    if ( !! qS) {
                        if (bV[i].type == 3 && qS.indexOf("xiami") >= 0) {
                            qS = qS.replace("_1.jpg", "_4.jpg")
                        }
                        bV[i].showimages = "http://imgsize.ph.126.net/?imgurl=" + qS + "_130x98x1.jpg";
                        if (qS.indexOf("http://imgsize.ph.126.net/?imgurl") >= 0) {
                            bV[i].showimages = qS
                        }
                    }
                }
            }
        }
        var cJz = false,
        bkd = !!loft.c.cm.userId,
        dut = location.href;
        if (!bHn.FavoritePostCount && bHn.FavoritePostCount !== 0) {
            cJz = true
        }
        var bk = E.eY(E.dG("m-usercard-jst", {
            data: bHn,
            blogid: this.bI,
            posts: bV,
            issubblog: cJz,
            arrow: this.bqC,
            isLogin: bkd,
            localHref: dut,
            rankNum: bHn.askSetting + bHn.msgRank,
            drlist: kk,
            subStr: loft.x.AD
        }));
        this.bLn.innerHTML = bk.innerHTML;
        var bHl = E.bj(this.bLn, "ftag"),
        i = 0;
        this.czX = bHl[i++];
        this.bRQ = bHl[i++];
        this.bPE = bHl[i++];
        this.bUH = bHl[i++];
        this.zZ = E.be("ucmsg");
        this.clU = E.be("ucask");
        this.cgq = E.be("ucblack");
        if ( !! loft.c.cm.userId && loft.c.cm.userId !== this.bI) {
            if ( !! bHn.following) {
                this.bPE.style.display = ""
            } else {
                this.bUH.style.display = ""
            }
            V.bHo(this.bPE, "mouseover", this.cJW.bHk(this, true));
            V.bHo(this.bPE, "mouseout", this.cJW.bHk(this, false));
            V.bHo(this.bPE, "click", this.bEZ.bHk(this));
            V.bHo(this.bUH, "click", this.kc.bHk(this))
        } else if (!loft.c.cm.userId) {
            this.bUH.style.display = "";
            V.bHo(this.bUH, "click", this.Fq.bHk(this))
        } else {
            this.czX.style.display = "none"
        }
        V.bHo(this.czX, "click", this.dus.bHk(this));
        if ( !! this.zZ) {
            V.bHo(this.zZ, "click", this.cKa.bHk(this, this.zZ.href, "msg"))
        }
        if ( !! this.clU) {
            V.bHo(this.clU, "click", this.cKa.bHk(this, this.clU.href, "ask"))
        }
        this.rp = new loft.d.vz({
            onaddblacklist: this.nV.bHk(this),
            onremoveblacklist: this.bEo.bHk(this)
        });
        if ( !! this.cgq && !!bHn && !!bHn.blogname) {
            V.bHo(this.cgq, "click",
            function(bHm) {
                V.bb(bHm);
                this.dur(bHn.blogname, bHn.name)
            }.bHk(this))
        }
    };
    bJt.dur = function(bHK, xy) {
        xy = xy || bHK;
        if (this.cgq.innerText === "加黑") {
            loft.w.eD.bE({
                parent: document.body,
                title: "加入黑名单",
                c1: "确定将 " + (xy || "") + " 加入黑名单吗？",
                c2: "加入黑名单之后，动态和标签页将不再显示" + (xy || "") + "发布或推荐的内容，" + "对方也不能向您发布评论、投稿和私信。您还可以去帐号设置管理黑名单。",
                onok: function() {
                    this.rp.yY(bHK)
                }.bHk(this)
            });
            loft.x.bHt("qbjh_20150227_01")
        } else if (this.cgq.innerText === "取消加黑") {
            if ( !! this.Xi) return;
            this.Xi = true;
            this.rp.bxZ(this.bKi[this.bI].blackId || 0)
        }
    };
    bJt.nV = function(bHn) {
        loft.x.bHt("qbjh_20150227_02");
        if ( !! bHn) {
            if (bHn.id == -1e3) {
                alert("您尚未登录");
                return
            }
            if (bHn.id == -999) {
                return
            }
            if (bHn.id > 0) {
                this.bKi[this.bI].blackId = bHn.id;
                this.bKi[this.bI].inBlackList = true;
                this.bKi[this.bI].following = false;
                this.bPE.style.display = "none";
                this.bUH.style.display = "";
                this.cgq.innerText = "取消加黑";
                E.bY("加入黑名单成功！", true)
            } else if (bHn.id == -2) {
                E.bd("黑名单已经存在")
            } else if (bHn.id == -10) {
                E.bd("您输入的博客地址不是用户的默认博客地址,无法加入黑名单")
            } else if (bHn.id == -11) {
                E.bd("不允许加自己帐号为黑名单")
            } else if (bHn.id == -997) {
                E.bd("您输入的博客地址有误")
            }
        }
    };
    bJt.bEo = function(bt, bHn) {
        this.Xi = false;
        if ( !! bHn) {
            if (bHn == 1) {
                this.rp.Bf(null, bt);
                this.bKi[this.bI].blackId = null;
                this.bKi[this.bI].inBlackList = false;
                this.cgq.innerText = "加黑";
                E.bY("成功移除黑名单！", true)
            } else {
                E.bd("移除黑名单失败", true)
            }
        }
    };
    bJt.Fq = function(bHm) {
        V.bb(bHm);
        var cG = loft.c.cm.visitorEmail;
        if ( !! cG) {
            loft.w.EC.bE({
                parent: document.body,
                email: cG,
                target: location.href
            })
        } else {
            loft.w.ED.bE({
                parent: document.body,
                target: location.href
            })
        }
    };
    bJt.cJW = function(fW) {
        if ( !! fW) {
            this.bPE.children[0].innerText = "取消关注";
            E.ba(this.bPE, "u-btn2-dis")
        } else {
            this.bPE.children[0].innerText = "已关注";
            E.bf(this.bPE, "u-btn2-dis")
        }
    };
    bJt.bEZ = function(bHm) {
        V.bb(bHm);
        J.br(location.dwr, "UserBean", "unFollowBlog", this.bI, this.nn.bHk(this, false))
    };
    bJt.kc = function(bHm) {
        V.bb(bHm);
        if ( !! this.crC && !!this.bHY && !!this.crz) {
            J.br(location.dwr, "UserBean", "followBlog", this.bI, this.bHY, this.crz, 1, this.nn.bHk(this, true))
        } else {
            J.br(location.dwr, "UserBean", "followBlog", this.bI, this.nn.bHk(this, true))
        }
    };
    bJt.nn = function(fW, bK) {
        window["_gaq"].push(["_trackEvent", "个人名片", "关注按钮点击"]);
        if ( !! bK && bK > 0) {
            if ( !! fW) {
                window["_gaq"].push(["_trackEvent", "个人名片", "关注量"]);
                this.bUH.style.display = "none";
                this.bPE.style.display = "";
                E.bY("关注成功", true);
                this.bKi[this.bI].following = true;
                this.bh("onfollowsucc", this.bI, this.crH, this.crC || 0)
            } else {
                this.bPE.style.display = "none";
                this.bUH.style.display = "";
                E.bY("取消关注成功", true);
                this.bKi[this.bI].following = false;
                this.bh("onunfollowsucc", this.bI, this.crH, this.crC || 0)
            }
        } else {
            loft.x.bKv(bK)
        }
    };
    bJt.duq = function(fW, dA) {
        if ( !! fW) {
            this.bUH.style.display = "none";
            this.bPE.style.display = "";
            this.bKi[dA].following = true
        } else {
            this.bPE.style.display = "none";
            this.bUH.style.display = "";
            this.bKi[dA].following = false
        }
        this.cKv = fW
    };
    bJt.dyj = function(bHm) {
        var cmc = V.be(bHm),
        yk = cmc.href || cmc.parentNode.href;
        if (!yk || yk.indexOf("lofter.com/post") < 0) {
            V.bb(bHm)
        }
        this.cAC(false)
    };
    bJt.dus = function(bHm) {
        V.bb(bHm);
        this.cAC(null)
    };
    bJt.cAC = function(fW) {
        if (this.bRQ.style.display !== "none" || fW === false) {
            if (!this.cgm) {
                this.bRQ.style.display = "none"
            } else {
                this.bRQ.style.top = "50px";
                this.bRQ.style.opacity = "0";
                this.bRQ.style.filter = "alpha(opacity=0)";
                this.KP = setTimeout(function() {
                    this.bRQ.style.display = "none"
                }.bHk(this), 300)
            }
        } else {
            this.bRQ.style.display = "";
            setTimeout(function() {
                this.bRQ.style.top = "40px";
                this.bRQ.style.opacity = "1"
            }.bHk(this), 10)
        }
    };
    bJt.cKa = function(yk, cKD, bHm) {
        V.bb(bHm);
        if (cKD === "msg") {
            window["_gaq"].push(["_trackEvent", "个人名片", "点击私信"])
        } else if (cKD === "ask") {
            window["_gaq"].push(["_trackEvent", "个人名片", "点击提问"])
        }
        window.open(yk)
    };
    bJt.cIg = function(bHm) {
        if (E.bj(document.body, "usercard").length > 0 && this.bRQ.style.display !== "none") {
            var cmc = V.be(bHm),
            yk = cmc.href || cmc.parentNode.href;
            if (!yk || yk.indexOf("lofter.com/post") < 0) {
                V.bb(bHm)
            }
            this.cAC(false)
        }
    };
    bJt.cbo = function() {
        if (!E.bj(document.body, "usercard").length > 0) {
            var bk = E.eY(E.dG(this.FP, {
                arrow: this.bqC,
                tag: this.er || ""
            }));
            bk.style.top = this.gh + "px";
            bk.style.left = this.fM + "px";
            this.bLn = bk;
            if (!this.cgm) {
                this.bLn.style.display = "none"
            }
            document.body.appendChild(bk)
        } else {
            var dup = E.be("ucarrow");
            E.dt(dup, "arrow-" + this.clQ, "arrow-" + this.bqC);
            this.bLn.style.top = this.gh + "px";
            this.bLn.style.left = this.fM + "px"
        }
        if (this.czk) {
            document.body.style.height = "auto"
        }
        this.cv = window.setTimeout(this.cKF.bHk(this), 10);
        this.cAF = false
    };
    bJt.cKF = function() {
        if ( !! this.bKi[this.bI] && !this.czw) {
            this.cJl(this.bI, this.bKi[this.bI].drlist, this.bKi[this.bI])
        }
        if (!this.cgm) {
            this.bLn.style.display = ""
        }
        E.ba(this.bLn, this.bqC);
        this.KP = window.setTimeout(function() {
            this.lA()
        }.bHk(this), "250")
    };
    bJt.bPP = function(cAR) {
        this.cAF = true;
        if ( !! this.cv) {
            window.clearTimeout(this.cv)
        }
        if (!this.cgm) {
            this.bLn.style.display = "none"
        }
        E.bf(this.bLn, this.clQ || this.bqC);
        if (this.czk) {
            document.body.style.height = "100%"
        }
        V.bJv(this.bLn);
        V.bJv(this.czX);
        V.bJv(this.bPE);
        V.bJv(this.bUH);
        if ( !! this.zZ) {
            V.bJv(this.zZ)
        }
        if ( !! this.clU) {
            V.bJv(this.clU)
        }
        if ( !! cAR) {
            this.cme = window.setTimeout(this.oO.bHk(this), "200")
        }
    };
    bJt.bHC = function() {
        if ( !! this.cme) {
            window.clearTimeout(this.cme)
        }
        V.bJv(document.body, "mousemove");
        this.bPP();
        this.duo = window.setTimeout(function() {
            this.bLn.innerHTML = E.eY(E.dG(this.FP, {
                arrow: this.clQ,
                tag: this.er || ""
            })).innerHTML;
            E.bf(this.bLn, "usercard-1");
            this.cbo()
        }.bHk(this), "250");
        V.bHo(document.body, "mousemove", this.czW.bHk(this))
    };
    bJt.oO = function() {
        V.bJv(document.body, "mousemove");
        E.hE(this.bLn);
        duD = true;
        cxN = null
    };
    bJt.czW = function(bHm) {
        if ( !! this.bRQ && this.bRQ.style.display !== "none") {
            return
        }
        var crb = bHm.pageX || bHm.clientX,
        cqS = bHm.pageY || bHm.clientY + document.documentElement.scrollTop;
        if (crb < this.xL.left || crb > this.xL.right || cqS < this.xL.top || cqS > this.xL.bottom) {
            if (!this.cAF) {
                this.bPP(true)
            }
            if ( !! this.bKi[this.bI] && this.bKi[this.bI].following == true || !!this.cKv) {
                this.bh("onloadnextbloglist", this.crH, this.crC || 0)
            }
            this.cKv = null
        }
    };
    bJt.duC = function(JZ) {
        if ( !! this.bKi[JZ.flag]) {
            if (JZ.changeFollow) {
                this.duq(JZ.followStatus, JZ.flag);
                return
            }
        }
    };
    p.cxX = C();
    cch = p.cxX.bi(p.cxY, true);
    cch.bnH = function(I) {
        this.er = I.tag || "";
        p.cxX.bw.bnH.call(this, I)
    };
    cch.cKF = function() {
        if ( !! this.bKi[this.er]) {
            this.cKR(this.er, this.bKi[this.er])
        }
        if (!this.cgm) {
            this.bLn.style.display = ""
        }
        E.ba(this.bLn, this.bqC);
        this.KP = window.setTimeout(function() {
            this.dun()
        }.bHk(this), "250")
    };
    cch.dun = function() {
        if ( !! this.KP) {
            window.clearTimeout(this.KP)
        }
        if ( !! this.bKi[this.er]) {
            return
        } else {
            J.br(location.dwr, "TagBean", "getTagCardStat", this.er, this.cKR.bHk(this, this.er))
        }
    };
    cch.cKR = function(df, bHn) {
        window["_gaq"].push(["_trackEvent", "标签名片", "弹出"]);
        if (this.er !== df) return;
        if (!this.bKi[this.er]) {
            this.bKi[this.er] = bHn
        }
        var bHn = bHn,
        bV = bHn.postList || [];
        for (var i = 0,
        l = bV.length; i < l; i++) {
            if (bV[i].type > 1) {
                if ( !! bHn.postList[i].firstImageUrl && U.bHx(bHn.postList[i].firstImageUrl).length > 0) {
                    var qS = U.bHx(bHn.postList[i].firstImageUrl)[0];
                    if ( !! qS) {
                        if (bV[i].type == 3 && qS.indexOf("xiami") >= 0) {
                            qS = qS.replace("_1.jpg", "_4.jpg")
                        }
                        bV[i].showimages = "http://imgsize.ph.126.net/?imgurl=" + qS + "_130x98x1.jpg";
                        if (qS.indexOf("http://imgsize.ph.126.net/?imgurl") >= 0) {
                            bV[i].showimages = qS
                        }
                    }
                }
            }
            bV[i].tagUrl = "http://www.lofter.com/tag/" + encodeURIComponent(this.er) + "?first=" + bV[i].permalink
        }
        var bk = E.eY(E.dG("m-usercard-jst-3", {
            posts: bV,
            arrow: this.bqC
        })),
        bHl = E.bj(this.bLn, "ztag"),
        cBD = bHl[0],
        cmg = bHl[1],
        dum = bHl[2];
        cBD.style.display = "none";
        if (E.cr(bk, "tctag")) {
            cmg.innerHTML = bk.outerHTML
        } else {
            cmg.innerHTML = bk.innerHTML
        }
        dum.href = "http://www.lofter.com/tag/" + encodeURIComponent(this.er)
    };
    cch.bPP = function(cAR) {
        this.cAF = true;
        if ( !! this.cv) {
            window.clearTimeout(this.cv)
        }
        if (!this.cgm) {
            this.bLn.style.display = "none"
        }
        E.bf(this.bLn, this.clQ || this.bqC);
        if (this.czk) {
            document.body.style.height = "100%"
        }
        if ( !! cAR) {
            this.cme = window.setTimeout(this.oO.bHk(this), "200")
        }
    };
    cch.cIg = function(bHm) {
        return
    };
    cch.bHC = function() {
        if ( !! this.cme) {
            window.clearTimeout(this.cme)
        }
        V.bJv(document.body, "mousemove");
        this.bPP();
        this.duo = window.setTimeout(function() {
            this.bLn.innerHTML = E.eY(E.dG(this.FP, {
                arrow: this.clQ,
                tag: this.er || ""
            })).innerHTML;
            E.ba(this.bLn, "usercard-1");
            this.cbo()
        }.bHk(this), "250");
        V.bHo(document.body, "mousemove", this.czW.bHk(this))
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    pf;
    var dhl = "http://l.bst.126.net/rsc/img/notice/sys.png";
    p.bhe = C();
    bhg = p.bhe.bi(P(N.ut).hx);
    bhg.brJ = function(pP, DK) {
        J.br(location.dwr, "BlogBean", "getUnreadNoticeInfo", pP, DK, this.bh.bHk(this, "ongetnewnotice"))
    };
    bhg.brI = function(bc) {
        J.br(location.dwr, "BlogBean", "clearNoticeCount", bc || 0, this.bh.bHk(this, "onclearnotice"))
    };
    p.MX = C();
    pf = p.MX.bi(P(N.fw).lu);
    pf.bq = function(bl, I) {
        I = I || O;
        this.bHr(bl, I);
        this.tO = !!I.isSingleBlog ? I.targetBlogId || 0 : 0;
        var bHn = [1, 2];
        var hQ = loft.c.jg.slice(0),
        i = 0,
        l = hQ.length,
        pP = [],
        DK = [],
        fC = 0;
        var Hr = 0,
        cgT = 0,
        cgS = 0;
        var oC = {};
        for (; i < l; i++) {
            var dhk = hQ[i].newNoticeCount + hQ[i].newResponseNoticeCount;
            hQ[i].newNoticeCount = dhk;
            if (hQ[i].blogId == loft.c.cm.userId) {
                Hr = hQ[i].newRecommendNoticeCount;
                cgT = hQ[i].newActivityTagNoticeCount;
                cgS = hQ[i].newArtNoticeCount;
                oC = hQ[i]
            }
            if (hQ[i].newNoticeCount <= 0 || !!this.tO && hQ[i].blogId != this.tO) {
                hQ.splice(i, 1);
                i--;
                l = hQ.length
            } else {
                if (hQ[i].newNoticeCount < 0) {
                    hQ[i].newNoticeCount = 0
                }
                pP.push(hQ[i].blogId);
                DK.push(hQ[i].newNoticeCount);
                hQ[i].start = fC;
                fC += hQ[i].newNoticeCount > 5 ? 5 : hQ[i].newNoticeCount
            }
        }
        if (Hr > 0 && (!I.isSingleBlog || this.tO == loft.c.cm.userId)) {
            hQ[hQ.length] = {
                blogId: -1,
                blogName: loft.c.cm.blogName,
                blogNickName: "推荐的文章",
                newNoticeCount: Hr,
                start: fC,
                mainBlogNickName: oC.blogNickName || ""
            };
            fC += Hr > 3 ? 3 : Hr;
            pP.push( - 1);
            DK.push(Hr)
        }
        if (cgT > 0 && (!I.isSingleBlog || this.tO == loft.c.cm.userId)) {
            hQ[hQ.length] = {
                blogId: -2,
                blogName: loft.c.cm.blogName,
                blogNickName: "话题",
                newNoticeCount: cgT,
                start: fC,
                mainBlogNickName: oC.blogNickName || "",
                bigAvaImg: oC.bigAvaImg || ""
            };
            fC += cgT > 3 ? 3 : cgT;
            pP.push( - 2);
            DK.push(cgT)
        }
        if (cgS > 0 && (!I.isSingleBlog || this.tO == loft.c.cm.userId)) {
            hQ[hQ.length] = {
                blogId: -3,
                blogName: loft.c.cm.blogName,
                blogNickName: "ART",
                newNoticeCount: cgS,
                start: fC,
                mainBlogNickName: oC.blogNickName || "",
                bigAvaImg: oC.bigAvaImg || ""
            };
            fC += cgS > 3 ? 3 : cgS;
            pP.push( - 3);
            DK.push(cgS)
        }
        if ( !! hQ.length) {
            this.Un = hQ;
            this.rp = new loft.d.vz({
                onaddblacklist: this.nV.bHk(this),
                onremovefollowed: this.cmi.bHk(this)
            });
            this.MW = new loft.d.up({
                onaddcmt: this.MV.bHk(this)
            });
            this.cEj = new loft.d.Tj({
                onfollow: this.nn.bHk(this)
            });
            this.Hv = new p.bhe;
            this.Hv.bHo("ongetnewnotice", this.MU.bHk(this));
            this.Hv.bHo("onclearnotice", this.brH.bHk(this));
            this.eL = {
                blogCount: this.Un.length,
                addblacklist: this.MT.bHk(this),
                onfollow: this.kc.bHk(this),
                onreply: this.lJ.bHk(this),
                onremovefol: this.bWr.bHk(this)
            };
            this.Hv.brJ(pP, DK)
        }
    };
    pf.MU = function(bHn) {
        if ( !! bHn) {
            if (!bHn.unReadNotices.length) {
                this.Y.style.display = "none";
                return
            }
            this.eL.notices = bHn.unReadNotices;
            this.cZ = p.HB.bG(this.Un, this.gs, this.eL);
            this.Y.style.display = ""
        } else {
            this.Y.style.display = "none"
        }
    };
    pf.kc = function(bc) {
        this.cEj.wC(bc)
    };
    pf.nn = function(bc) {
        E.bY("关注成功!")
    };
    pf.MT = function(bHK, xy) {
        loft.w.eD.bE({
            parent: document.body,
            title: "加入黑名单",
            c1: "确定将 " + (xy || "") + " 加入黑名单吗？",
            c2: "加入黑名单之后，动态和标签页将不再显示" + (xy || "") + "发布或推荐的内容，" + "对方也不能向您发布评论、投稿和私信。您还可以去帐号设置管理黑名单。",
            onok: function() {
                this.rp.yY(bHK)
            }.bHk(this)
        })
    };
    pf.nV = function(bHn) {
        if ( !! bHn) {
            if (bHn.id == -1e3) {
                alert("您尚未登录");
                return
            }
            if (bHn.id == -999) {
                return
            }
            if (bHn.id > 0) {
                E.bY("加入黑名单成功！", true)
            } else if (bHn.id == -2) {
                E.bd("黑名单已经存在")
            } else if (bHn.id == -10) {
                E.bd("您输入的博客地址不是用户的默认博客地址,无法加入黑名单")
            } else if (bHn.id == -11) {
                E.bd("不允许加自己帐号为黑名单")
            } else if (bHn.id == -997) {
                E.bd("您输入的博客地址有误")
            }
        }
    };
    pf.bWr = function(bc, cmp, gR) {
        loft.w.eD.bE({
            parent: document.body,
            title: "移除粉丝",
            c1: "确定移除 " + (gR || "") + " 对您的关注吗？",
            onok: function() {
                this.rp.cuX(bc, cmp)
            }.bHk(this)
        })
    };
    pf.cmi = function(bHn) {
        if ( !! bHn) {
            if (bHn == -1e3) {
                alert("您尚未登录");
                return
            }
            if (bHn > 0) {
                E.bY("移除粉丝成功", true)
            } else if (bHn == -2) {
                E.bd("已经移除粉丝")
            } else if (bHn == -100) {
                E.bd("还没有权限")
            } else {
                E.bd("移除粉丝失败")
            }
        } else {
            E.bd("移除粉丝失败")
        }
    };
    pf.lJ = function(Z, dR, bc, bQp, rs, rq) {
        this.MW.dkf(Z, dR, bc, bQp, rs, !!rq)
    };
    pf.MV = function(bHn) {
        if ( !! bHn) {
            if (bHn.id == -10) {
                E.bd("对不起，您没有权限发表评论。", true)
            } else if (bHn.id == -11) {
                E.bd("对不起，由于用户设置，您没有权限发表评论", true)
            } else if (bHn.id == -15) {
                E.bd("该文章已删除，不能回复评论！")
            } else if (bHn.id == -16) {
                E.bd("该评论已删除，不能回复评论！")
            } else if (bHn.id == -17) {
                E.bd("每次最多允许@60个人！")
            } else if (bHn.id == -100) {
                E.bd("您发布得太快了，请休息一下。")
            } else if (bHn.id == -199) {
                E.bd("您提交的内容中含敏感词！", true)
            } else E.bY("回复评论成功!", true)
        } else {
            E.bd("回复评论失败!", true)
        }
    };
    pf.ke = function() {
        var bk = E.mF("m-notice-ntp-0"),
        bHl = E.bj(bk, "mtag");
        if(bHl != null){
            this.gs = bHl[0];
            this.fP = bHl[1];
        }
        V.bHo(this.fP, "click", this.kN.bHk(this));
        return bk
    };
    pf.kN = function(bHm) {
        V.bb(bHm);
        this.Hv.brI()
    };
    pf.brH = function(bHn) {
        if ( !! bHn) {
            this.Y.style.marginTop = -(this.Y.clientHeight + 16) + "px";
            E.bf(this.Y, "a-slide-do");
            window.setTimeout(function() {
                this.cZ = p.HB.db(this.cZ);
                this.Y.style.display = "none"
            }.bHk(this), 300)
        }
    };
    p.HB = C();
    MS = p.HB.bi(P(N.ut).fc, true);
    var Di = E.gD('<div class="m-cmt m-cmt-1"><div class="cmtu"><h4 class="itag">某某某</h4></div><ul class="itag"></ul><div class="cmtmore" style="display:none;"><a class="w-more itag" href="#">共&nbsp;15&nbsp;条未读提醒</a></div></div>');
    MS.bq = function() {
        this.bHr(Di);
        var bHl = E.bj(this.Y, "itag");
        this.hJ = bHl[0];
        this.gs = bHl[1];
        this.pj = bHl[2]
    };
    MS.bHC = function(I) {
        this.brF = I.notices;
        this.brE = I.blogCount || 0;
        this.MR = I.addblacklist || F;
        this.cDZ = I.onremovefol || F;
        this.cDY = I.onfollow || F;
        this.bHo("onreply", I.onreply || F)
    };
    MS.ce = function(bHn) {
        p.HB.bw.ce.call(this, bHn);
        var cDX = bHn.blogId < 0 ? 3 : 5;
        var MQ = bHn.start || 0,
        fC = bHn.newNoticeCount > cDX ? cDX: bHn.newNoticeCount,
        bS = this.brF.slice(MQ, MQ + fC);
        if (!bS || !bS.length) {
            this.Y.style.display = "none";
            return
        }
        this.hJ.innerText = bHn.blogNickName || "";
        this.CU = p.bVD.bG(bS, this.gs, {
            singleLine: true,
            blogInfo: bHn,
            onfollow: this.cDY,
            addblacklist: this.MR,
            onremovefol: this.cDZ,
            onreply: this.bh.bHk(this, "onreply")
        });
        this.hJ.parentNode.style.display = this.brE <= 1 ? "none": "";
        if (bHn.newNoticeCount > cDX) {
            this.pj.innerHTML = "共&nbsp;" + bHn.newNoticeCount + "&nbsp;条未读提醒";
            this.pj.href = "/notice/" + bHn.blogName;
            if (bHn.blogId == -1) {
                this.pj.href = this.pj.href + "?recomend"
            }
            if (bHn.blogId == -2) {
                this.pj.parentNode.insertAdjacentHTML("afterBegin", '<a class="w-more w-more-1" href="/setting" target="_blank">通知设置</a>');
                this.pj.href = this.pj.href + "?activity"
            }
            if (bHn.blogId == -3) {
                this.pj.parentNode.insertAdjacentHTML("afterBegin", '<a class="w-more w-more-1" href="/setting" target="_blank">通知设置</a>');
                this.pj.href = this.pj.href + "?art"
            }
            this.pj.parentNode.style.display = ""
        } else {
            this.pj.parentNode.style.display = "none"
        }
    };
    p.bVD = C();
    mb = p.bVD.bi(P(N.ut).fc, true);
    var brD = E.gD('<li><div class="cmti itag"><div class="w-img2 w-img2-4 itag"><a href="#" target="_blank"><img class="itag"></a><span class="w-icn3 w-icn3-1 itag">&nbsp;</span></div><div class="cmtcnt"><div class="cmthot itag"></div><div class="cmticn"><a href="#" target="_blank" hidefocus="true"><img class="itag" src="/rsc/img/cmthot/icon3.png" /></a></div><div class="cmtopt"><a class="cmtj s-fc2 itag" href="#" hidefocus="true" style="display:none;">移除粉丝</a><a class="cmtj s-fc2 itag" href="#" hidefocus="true" style="visibility:hidden;">加黑</a><a class="cmtj s-fc2 itag" href="#" style="display:none;" hidefocus="true">关注</a><a class="s-fc1 itag" href="#" style="display:none;" hidefocus="true">回复</a><a class="s-fc1 itag" href="#" style="display:none;" hidefocus="true">延长时间</a></div><div class="cmtcmt cmtcmt-1 itag" style="display:none"></div></div></div></li>');
    mb.bq = function() {
        this.bHr(brD);
        var bHl = E.bj(this.Y, "itag"),
        i = 0;
        this.gs = bHl[i++];
        this.bNg = bHl[i++];
        this.bD = bHl[i++];
        this.cFA = bHl[i++];
        this.zZ = bHl[i++];
        this.bSO = bHl[i++];
        this.ccV = bHl[i++];
        this.rW = bHl[i++];
        this.hH = bHl[i++];
        this.uU = bHl[i++];
        this.cLy = bHl[i++];
        this.fK = bHl[i++];
        V.bHo(this.Y, "mouseover", this.cLz.bHk(this, true));
        V.bHo(this.Y, "mouseout", this.cLz.bHk(this, false));
        V.bHo(this.ccV, "click", this.bWr.bHk(this));
        V.bHo(this.rW, "click", this.brB.bHk(this));
        V.bHo(this.hH, "click", this.kc.bHk(this));
        V.bHo(this.uU, "click", this.lJ.bHk(this));
        V.bHo(this.cLy, "click", this.dhf.bHk(this));
        V.bHo(this.bSO, "error", this.dhe.bHk(this));
        this.bZh = 0;
        V.bHo(this.bNg, "mouseover", this.bHF.bHk(this, true, this.bNg, null));
        V.bHo(this.bNg, "mouseout", this.bHF.bHk(this, false, this.bNg, null));
        var iZ = [];
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;喜欢了${yours}${postLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;从${reblogLink}&nbsp;&nbsp;转载了${yours}${postLink}${targetPostLink}'));
        iZ.push(E.ft('<a {if !!userUrl}href="${userUrl}"{else}style="text-decoration:none;cursor:default;"{/if} target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;评论了${yours}${postLink}'));
        iZ.push(E.ft('<a {if !!userUrl}href="${userUrl}"{else}style="text-decoration:none;cursor:default;"{/if} target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;在${commentPostLink}&nbsp;&nbsp;中回复了您&nbsp;&nbsp;'));
        iZ.push(E.ft('祝贺您在&nbsp;&nbsp;<a href="${userUrl}" target="_blank">${blogNickName}</a>&nbsp;&nbsp;的投稿${postLink}&nbsp;&nbsp;已成功发布！'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;关注了&nbsp;&nbsp;<a href="${blogInfo.userUrl}" target="_blank">${blogInfo.blogNickName|escape}</a>'));
        iZ.push(E.ft('欢迎&nbsp;&nbsp;<a href="${userUrl}" target="_blank">${blogNickName}</a>&nbsp;&nbsp;成为&nbsp;&nbsp;<a href="${blogInfo.userUrl}" target="_blank">${blogInfo.blogNickName|escape}</a>&nbsp;&nbsp;的新成员！'));
        iZ.push(E.ft('恭喜&nbsp;&nbsp;<a href="${userUrl}" target="_blank">${blogNickName}</a>&nbsp;&nbsp;成为&nbsp;&nbsp;<a href="${blogInfo.userUrl}" target="_blank">${blogInfo.blogNickName|escape}</a>&nbsp;&nbsp;的管理员！'));
        iZ.push(E.ft('{if tagRank<0}${yours}${postLink}&nbsp;&nbsp;符合标签&nbsp;&nbsp;<a href="/tag/${encodeURIComponent(tagName)}?first=${postPermalink}">${tagName}</a>&nbsp;&nbsp;的内容主题，被LOFTER添加了该标签。<br><span>为文章添加合适的标签，将会吸引更多读者。</span>{else}${yours}${postLink}&nbsp;&nbsp;在标签&nbsp;&nbsp;<a class="mstag" href="/tag/${encodeURIComponent(tagName)}?first=${postPermalink}">${tagName}</a>&nbsp;&nbsp;中被列入精选。{if !!updatePost}<br><span>LOFTER已为您添加标签&nbsp;&nbsp;<a href="/tag/${tagName}?first=${postPermalink}">${tagName}</a>&nbsp;&nbsp;，为文章添加标签将吸引更多读者。</span>{/if}{/if}'));
        iZ.push(E.ft('恭喜，${yours}博客&nbsp;&nbsp;<a href="${userUrl}" target="_blank">${blogNickName}</a>&nbsp;&nbsp;成为了LOFTER的&nbsp;&nbsp;<a href="/explore/${tagName}">官方推荐博客</a>'));
        iZ.push(E.ft("系统消息：${content}"));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;推荐了${yours}${postLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;喜欢了${yours}${postLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;从${reblogLink}&nbsp;&nbsp;转载了${yours}${postLink}${targetPostLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;评论了${yours}${postLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;推荐了${yours}${postLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;从${reblogLink}&nbsp;&nbsp;转载了${yourContriBlog}${postLink}${targetPostLink}&nbsp;&nbsp;${content}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;喜欢了${yourContriBlog}${postLink}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;评论了${yourContriBlog}${postLink}&nbsp;&nbsp;${content}'));
        iZ.push(E.ft('<a {if !!userUrl}href="${userUrl}"{else}style="text-decoration:none;cursor:default;"{/if} target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;在${yourContriBlog}${commentPostLink}&nbsp;&nbsp;中回复了您&nbsp;&nbsp;${content}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;推荐了${yourContriBlog}${postLink}'));
        iZ.push(E.ft('{if tagRank<-1}${yourContriBlog}${postLink}&nbsp;&nbsp;符合标签&nbsp;&nbsp;<a href="/tag/${encodeURIComponent(tagName)}?first=${postPermalink}">${tagName}</a>&nbsp;&nbsp;的内容主题，被LOFTER添加了该标签。<br><span>为文章添加合适的标签，将会吸引更多读者。{else}${yourContriBlog}${postLink}&nbsp;&nbsp;在标签&nbsp;&nbsp;<a href="/tag/${tagName}?first=${postPermalink}">${tagName}</a>&nbsp;&nbsp;中被列入精选。{/if}'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;发起了&nbsp;<a class="mstag" href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}">话题：${tagName}</a>'));
        iZ.push(E.ft('您提交的&nbsp;<a href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}" class="mstag">话题：${tagName}</a>&nbsp;已通过审核'));
        iZ.push(E.ft('您发起的话题"${tagName}"已下线{if !!auditInfo}，原因是"${auditInfo}"{/if}。'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;推荐了&nbsp;<a class="mstag" href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}">话题：${tagName}</a>'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;推荐了您发起的&nbsp;<a class="mstag" href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}">话题：${tagName}</a>'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;参与了您发起的&nbsp;<a class="mstag" href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}">话题：${tagName}</a>'));
        iZ.push(E.ft('您发起的<a class="mstag" href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}">话题：${tagName}</a>即将到期，目前已有${blogNum}人参加，您可以延长话题结束时间'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;在${postLink}&nbsp;&nbsp;中提到了您'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;在${postLink}&nbsp;&nbsp;的评论中提到了您'));
        iZ.push(E.ft("您的话题申请已提交成功，请耐心等待审核，审核通过后将收到通知。"));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;发售了 &nbsp;&nbsp;<a href="${productLink}" target="_blank">${productName}</a>'));
        iZ.push(E.ft('您的&nbsp;&nbsp;<a href="${productLink}" target="_blank">${productName}</a>&nbsp;&nbsp;被推荐到ART的 &nbsp;&nbsp;<a href="${productRecommendLink}" target="_blank">${productRecommendName}</a>'));
        iZ.push(E.ft('您的&nbsp;&nbsp;<a href="${productLink}" target="_blank">${productName}</a>&nbsp;&nbsp;被推荐到ART的&nbsp;&nbsp;<a href="/art" target="_blank">首页</a>'));
        iZ.push(E.ft('<a href="${userUrl}" target="_blank" title="${title}">${blogNickName}</a>&nbsp;&nbsp;推荐了&nbsp;<a class="mstag" href="http://www.lofter.com/tag/${encodeURIComponent(tagName)}">标签：${tagName}</a>'));
        this.brA = iZ;
        this.bMe = this.cmr.bHk(this);
        this.bPC = this.cCT.bHk(this)
    };
    mb.bHF = function(gu, CL, dA, bHm) {
        dA = dA || this.bZh || this.bHq.blogId;
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu, {
                onFollowSucc: this.bMe,
                onUnFollowSucc: this.bPC
            })
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHm)
    };
    mb.cmr = function() {
        if (this.bHq.type === 6) {
            this.hH.innerText = "已关注"
        }
    };
    mb.cCT = function() {
        if (this.bHq.type === 6) {
            this.hH.innerText = "关注"
        }
    };
    mb.bVl = function(gu, CL, df, bHm) {
        if ( !! gu) {
            loft.g.dousercard(CL, 0, gu, {
                tag: df,
                jst: "m-usercard-jst-2",
                cardHeight: 205
            })
        } else {
            loft.g.dousercard(CL, 0, gu)
        }
        V.bb(bHm)
    };
    mb.ce = function(bHn) {
        p.bVD.bw.ce.call(this, bHn);
        if (bHn.index > 0) {
            E.ba(this.Y, "cmtsp")
        }
        var Z = U.bHx(bHn.content) || O,
        brz = loft.x.bM(Z.blogName);
        if (bHn.type == 30 && !!Z.commentBlogName) {
            Z.blogName = Z.commentBlogName;
            Z.blogNickName = Z.commentBlogNickName;
            Z.bigAvaImg = Z.commentBlogAvaImage;
            brz = loft.x.bM(Z.blogName)
        }
        this.dg = Z;
        if (bHn.type == 11 || bHn.type == 24 || bHn.type == 25 || bHn.type == 29 || bHn.type == 32 || bHn.type == 34 || bHn.type == 35) {
            this.bD.src = loft.x.eK(this.bW.bigAvaImg, 24);
            this.bD.parentNode.href = loft.x.bM(this.bW.blogName);
            this.bZh = this.bW.blogId
        } else {
            if (!Z.blogName) {
                this.bD.parentNode.removeAttribute("href");
                this.bD.parentNode.style.cursor = "default"
            } else if (Z.blogName.indexOf("http://") == 0) {
                this.bD.parentNode.href = Z.blogName
            } else {
                this.bD.parentNode.href = brz
            }
            this.bZh = bHn.actUserId;
            this.bD.src = loft.x.eK(Z.bigAvaImg, 24)
        }
        this.bZh = this.bZh > 0 ? this.bZh: this.bHq.blogId;
        Z.blogNickName = U.ew(Z.blogNickName);
        Z.blogNickName = Z.blogNickName || "";
        Z.blogNickName = Z.blogNickName.replace(/<br\s*\/?>/ig, " ");
        Z.blogInfo = this.bW;
        if (!Z.blogName) {
            Z.userUrl = ""
        } else if (Z.blogName.indexOf("http://") == 0) {
            Z.userUrl = Z.blogName
        } else {
            Z.userUrl = loft.x.bM(Z.blogName)
        }
        Z.permalink = Z.postUrl;
        Z.commentPermalink = loft.x.bM(Z.commentBlogName) + "/post/" + (Z.postPermalink || "");
        Z.postTypeText = loft.x.WD(Z.postType);
        Z.postLink = this.UW(Z);
        Z.commentPostLink = this.UW(Z, true);
        Z.yours = bHn.blogId === loft.c.cm.userId ? "您的": "";
        if (bHn.type == 9 || bHn.type == 22) {
            if (!Z.tagRank) {
                Z.tagRank = 0
            }
            if (bHn.type == 9) {
                this.zZ.style.width = "420px"
            } else {
                this.zZ.style.width = "380px"
            }
            if (Z.yours === "") {
                Z.postLink = Z.postLink.replace("&nbsp;&nbsp;", "")
            }
        } else if (bHn.type === 6) {
            this.zZ.style.width = "280px";
            this.ccV.style.display = "";
            this.ccV.style.visibility = "hidden"
        } else {
            this.zZ.removeAttribute("style")
        }
        Z.yourContriBlog = "";
        if (bHn.type >= 17 && bHn.type <= 22) {
            Z.yourContriBlog = "您投稿给 " + this.cLH(Z.commentBlogName, Z.commentBlogNickName) + " 的"
        }
        if (bHn.type == 2 || bHn.type == 17 || bHn.type == 14) {
            Z.reblogLink = this.cLH(Z.citeParentBlogName, Z.citeParentBlogNickName)
        }
        if (bHn.actUserId > 0) Z.title = loft.x.AD(Z.blogNickName, 20, true) + " - " + loft.x.qB(bHn.publishTime);
        else Z.title = loft.x.AD(Z.blogInfo.blogNickName, 20, true) + " - " + loft.x.qB(bHn.publishTime);
        this.bD.parentNode.title = Z.title;
        if (bHn.type == 2 || bHn.type == 14 || bHn.type == 17) Z.targetPostLink = this.bry(Z.toPostUrl, Z.toBlogNickName);
        if ( !! Z.isShared || bHn.type == 13 || bHn.type == 14 || bHn.type == 15) {
            if (Z.yours == "您的") {
                Z.yours = "您推荐的"
            }
            if (bHn.type == 2 && !!bHn.blogInfo) {
                bHn.blogInfo.userUrl = bHn.blogInfo.homePageUrl;
                Z.blogInfo = bHn.blogInfo
            }
        }
        if (bHn.type == 33 || bHn.type == 34 || bHn.type == 35) {
            Z.productLink = "/art/product-" + Z.productId + (bHn.type == 33 ? "?act=qbart_20140703_03&s=art02": "");
            Z.productName = U.ew(Z.productName);
        }
        if (bHn.type == 34) {
            if (Z.productType == 1) {
                Z.productRecommendLink = "/art/print";
                Z.productRecommendName = "框画精选"
            } else {
                Z.productRecommendLink = "/art/postcard";
                Z.productRecommendName = "明信片精选"
            }
        }
        var dc = E.dG(this.brA[bHn.type - 1], Z);
        if (bHn.type == 3 || bHn.type == 15 || bHn.type == 4 || (bHn.type == 2 || bHn.type == 14) && !!Z.content) {
            if (bHn.type == 2 || bHn.type == 14) {
                this.fK.innerHTML = !!Z.toPostUrl ? '<a href="' + Z.toPostUrl + '" target="_blank" title="浏览文章">' + Z.content + "</a>": Z.content
            } else this.fK.innerHTML = loft.x.dxb(Z.content);
            this.fK.style.display = "";
            this.uU.style.display = bHn.type != 2 && bHn.type != 14 ? "": "none"
        } else {
            this.uU.style.display = "none";
            this.fK.style.display = "none"
        }
        if (bHn.type === 29) {
            this.rW.style.display = "none";
            this.cLy.style.display = ""
        }
        this.zZ.innerHTML = dc;
        if (bHn.type === 9 || bHn.type >= 23 && bHn.type <= 29 || bHn.type === 36) {
            var ck = E.bj(this.zZ, "mstag");
            if ( !! ck && ck.length > 0 && !!Z.tagName) {
                V.bHo(ck[0], "mouseover", this.bVl.bHk(this, true, ck[0], Z.tagName));
                V.bHo(ck[0], "mouseout", this.bVl.bHk(this, false, ck[0], Z.tagName));
                if (bHn.type !== 9) {
                    V.bHo(this.bSO, "mouseover", this.bVl.bHk(this, true, this.bSO, Z.tagName));
                    V.bHo(this.bSO, "mouseout", this.bVl.bHk(this, false, this.bSO, Z.tagName))
                }
            }
        }
        var cDF = this.zZ.children;
        if (cDF.length > 0 && this.bD.parentNode.href.replace(/\/$/i, "") === cDF[0].href.replace(/\/$/i, "")) {
            cpX = cDF[0];
            V.bHo(cpX, "mouseover", this.bHF.bHk(this, true, cpX, this.bZh));
            V.bHo(cpX, "mouseout", this.bHF.bHk(this, false, cpX, this.bZh))
        }
        this.brx(bHn.type);
        this.rW.style.display = loft.c.cm.userId == this.bHq.actUserId || this.bHq.actUserId <= 0 || bHn.type === 9 || bHn.type == 34 || bHn.type == 35 ? "none": "";
        if (bHn.type === 28 && !!Z.targetBlogId && bHn.actUserId != Z.targetBlogId) {
            this.rW.style.display = "none"
        }
        var followed = parseInt(Z.followed);
        this.hH.style.display = !!followed ? "": "none";
        if (followed == 1) {
            this.hH.innerText = "已关注"
        } else if (followed == 2) {
            this.hH.innerText = "关注"
        }
        if (bHn.type === 36) {
            this.bSO.src = loft.x.bJR(this.bHq.thumbnail || dhl, 24, 24, 1, true)
        } else {
            this.bSO.src = loft.x.bJR(this.bHq.thumbnail, 24, 24, 1, true) || "/rsc/img/cmthot/icon1.png"
        }
        var cLK = this.dhd(Z);
        if ( !! cLK) {
            this.bSO.parentNode.href = cLK
        } else {
            V.bHo(this.bSO.parentNode, "click", V.bb);
            this.bSO.parentNode.style.cursor = "default"
        }
        if (!this.MP) E.bf(this.fK, "cmtcmt-1")
    };
    mb.dhd = function(Z) {
        var bp;
        switch (this.bHq.type) {
        case 1:
        case 2:
        case 3:
        case 5:
        case 9:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 21:
        case 22:
        case 30:
        case 31:
            bp = Z.permalink;
            break;
        case 4:
        case 20:
            bp = Z.commentPermalink;
            break;
        case 6:
        case 7:
        case 8:
        case 10:
            bp = Z.blogInfo.userUrl;
            break;
        case 23:
        case 24:
        case 26:
        case 27:
        case 28:
        case 29:
            bp = "http://www.lofter.com/tag/" + encodeURIComponent(Z.tagName);
            break;
        case 33:
        case 34:
        case 35:
            bp = "http://www.lofter.com/art/product-" + Z.productId + (this.bHq.type == 33 ? "?act=qbart_20140703_03&s=art02": "");
            break;
        case 36:
            bp = "http://www.lofter.com/tag/" + encodeURIComponent(Z.tagName);
            break
        }
        return bp
    };
    mb.UW = function(Z, brw) {
        var yz = !!brw ? Z.commentPermalink: Z.permalink;
        if ( !! Z.postTitle) {
            return '&nbsp;&nbsp;<a target="_blank" href="' + yz + '">' + Z.postTypeText + "：" + U.ew(Z.postTitle) + "</a>"
        } else {
            return '&nbsp;&nbsp;<a target="_blank" href="' + yz + '">' + Z.postTypeText + "</a>"
        }
    };
    mb.bry = function(brv, Vd) {
        if ( !! Vd) return '&nbsp;&nbsp;到&nbsp;&nbsp;<a target="_blank" href="' + brv + '">' + Vd + "</a>";
        else return ""
    };
    mb.cLH = function(bHK, xy) {
        return '&nbsp;&nbsp;<a target="_blank" href="' + loft.x.bM(bHK) + '">' + U.ew(xy) + "</a>"
    };
    mb.bHC = function(I) {
        E.bf(this.Y, "cmtsp");
        this.MP = !!I.singleLine;
        this.bW = I.blogInfo || O;
        if (this.bW.blogId == -1) {
            this.bW.blogNickName = this.bW.mainBlogNickName
        }
        this.bW.userUrl = loft.x.bM(this.bW.blogName);
        this.bHo("onaddblacklist", I.addblacklist || F);
        this.bHo("onreply", I.onreply || F);
        this.bHo("onfollow", I.onfollow || F);
        this.bHo("onremovefol", I.onremovefol || F)
    };
    mb.bWr = function(bHm) {
        V.bb(bHm);
        this.bh("onremovefol", this.bHq.blogId, this.bHq.actUserId, U.Ua(this.dg.blogNickName))
    };
    mb.brB = function(bHm) {
        V.bb(bHm);
        this.bh("onaddblacklist", this.dg.blogName, U.Ua(this.dg.blogNickName))
    };
    mb.cLP = function(Qs) {
        this.rW.style.visibility = !!Qs ? "visible": "hidden"
    };
    mb.cLQ = function(Qs) {
        this.ccV.style.visibility = !!Qs ? "visible": "hidden"
    };
    mb.kc = function(bHm) {
        V.bb(bHm);
        if (this.hH.innerText != "关注") return;
        this.hH.innerText = "已关注";
        if ( !! loft.g.dousercard) {
            loft.g.dousercard(null, null, null, {
                doDelFunc: true,
                flag: this.bHq.actUserId,
                changeFollow: true,
                followStatus: true
            })
        }
        this.bh("onfollow", this.bHq.actUserId)
    };
    mb.cLz = function(dhc, bHm) {
        V.bb(bHm);
        if (dhc) {
            E.ba(this.Y, "j-hover");
            if ( !! this.cDC) this.cDC = window.clearTimeout(this.cDC);
            this.cDB = window.setTimeout(this.cLP.bHk(this, true), 500);
            if ( !! this.cDA) this.cDA = window.clearTimeout(this.cDA);
            this.cDz = window.setTimeout(this.cLQ.bHk(this, true), 500)
        } else {
            E.bf(this.Y, "j-hover");
            if ( !! this.cDB) this.cDB = window.clearTimeout(this.cDB);
            this.cDC = window.setTimeout(this.cLP.bHk(this, false), 30);
            if ( !! this.cDz) this.cDz = window.clearTimeout(this.cDz);
            this.cDA = window.setTimeout(this.cLQ.bHk(this, false), 30)
        }
    };
    mb.lJ = function(bHm) {
        V.bb(bHm);
        if (!this.of || this.of.bby() || this.of.bru() != this.bHq.id) {
            if ( !! this.MP) E.bf(this.fK, "cmtcmt-1");
            this.of = p.uo.bG(this.gs, {
                onreply: this.brt.bHk(this),
                singleton: true,
                isReblog: !!this.dg.isReblog,
                postId: this.dg.postId,
                blogId: this.dg.blogId || this.bW.blogId,
                replyToUserId: this.bHq.actUserId,
                replyToResponseId: this.dg.commentId || 0,
                noticeId: this.bHq.id || 0,
                onbeforedestroy: this.brs.bHk(this)
            })
        } else {
            this.of = p.uo.db(this.of)
        }
    };
    mb.brs = function() {
        if (this.MP) E.ba(this.fK, "cmtcmt-1")
    };
    mb.brt = function(Z, dR, bc, bQp, rs, rq) {
        this.bh("onreply", Z, dR, bc, bQp, rs, !!rq)
    };
    mb.dhf = function(bHm) {
        V.bb(bHm);
        if (this.bHq.type != 29) {
            return
        }
        if ( !! this.dha) {
            E.bd("话题时间已延长，请勿重复操作")
        }
        J.br(location.dwr, "TagBean", "postponeActivityTag", this.dg.actId || 0, this.dgZ.bHk(this))
    };
    mb.dhe = function(bHm) {
        if (this.dg.postType === 1) {
            this.bSO.src = "http://imgsize.ph.126.net/?enlarge=true&imgurl=http://l.bst.126.net/rsc/img/notice/text.png?1_24x24x1.jpg"
        }
    };
    mb.dgZ = function(bHn) {
        if ( !! bHn) {
            E.bY("该话题结束时间已延长30天", true);
            this.dha = true
        } else {
            E.bd("话题时间已延长，请勿重复操作")
        }
    };
    mb.brx = function(by) {
        var iQ = 6;
        switch (by) {
        case 1:
        case 13:
        case 18:
            iQ = 5;
            break;
        case 2:
        case 14:
        case 17:
            iQ = 3;
            break;
        case 3:
        case 4:
        case 15:
        case 19:
        case 20:
            iQ = 4;
            break;
        case 6:
            iQ = 1;
            break;
        case 5:
            iQ = 7;
            break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 22:
        case 24:
        case 25:
            iQ = 6;
            break;
        case 12:
        case 16:
        case 21:
        case 26:
        case 27:
        case 36:
            iQ = 2;
            break;
        case 23:
        case 28:
        case 29:
            iQ = 8;
            break;
        case 30:
        case 31:
            iQ = 9;
            break
        }
        this.cFA.className = "w-icn3 w-icn3-" + iQ
    };
    p.uo = C();
    pC = p.uo.bi(P(N.ui).ga, true);
    pC.bq = function(bl, I) {
        this.wd = !!I.isReblog;
        this.bHr(bl, I)
    };
    pC.bz = function(I) {
        I = I || O;
        p.uo.bw.bz.call(this, I);
        this.ic = I.postId || 0;
        this.bI = I.blogId || 0;
        this.brr = I.noticeId || 0;
        this.wd = !!I.isReblog;
        this.ccA = I.replyToResponseId || 0;
        this.bRK = I.replyToUserId || 0;
        this.cg.innerHTML = "";
        this.bHo("onreply", I.onreply || F); !! this.wd ? E.ba(this.Y, "cmtadd-tbu") : E.bf(this.Y, "cmtadd-tbu");
        this.jr = false
    };
    pC.cK = function() {
        p.uo.bw.cK.apply(this, arguments);
        E.bf(this.Y, "cmtadd-tbu");
        E.bf(this.ju, "w-tbu-sel")
    };
    pC.bru = function() {
        return this.brr
    };
    pC.cM = function() {
        return '<div contentEditable="true" class="w-inputxt noshortkey rtag" maxlength="200" style="height:auto;min-height:20px;"></div><button class="w-bbtn w-bbtn-0 rtag" hidefocus="true">回　复</button><a title="点击图标，同时评论给原作者" class="w-tbu rtag">同时评论给原作者</a>'
    };
    pC.cU = function() {
        return "cmtadd f-cb"
    };
    pC.cc = function() {
        var bHl = E.bj(this.Y, "rtag");
        this.cg = bHl[0];
        this.cX = bHl[1];
        this.ju = bHl[2];
        loft.x.AL(this.cg, this.fd.bHk(this));
        V.bHo(this.cX, "click", this.fd.bHk(this));
        V.bHo(this.ju, "click", this.brq.bHk(this));
        V.bHo(this.cg, "keyup", this.cnz.bHk(this));
        this.bIQ = "";
        this.bSI = []
    };
    pC.brq = function(bHm) {
        V.bb(bHm);
        this.jr = !this.jr; !! this.jr ? E.ba(this.ju, "w-tbu-sel") : E.bf(this.ju, "w-tbu-sel");
        this.ju.title = !!this.jr ? "点击图标，取消评论同步": "点击图标，同时评论给原作者"
    };
    pC.cnz = function(bHm) {
        var rB = bHm && (bHm.which || bHm.keyCode);
        if (rB == 86) {
            var ck = this.cg.children,
            l = ck.length;
            if (l == 0) {
                this.bIQ = this.cg.innerText;
                return
            }
            for (var i = l - 1; i > -1; i--) {
                if (ck[i].tagName === "A" && !!E.cr(ck[i], "f-atbox") && ck[i].innerText.indexOf("@") >= 0) {
                    if (ck[i].children.length > 0) {
                        ck[i].innerHTML = ck[i].innerText
                    }
                    continue
                } else {
                    ck[i].outerHTML = ck[i].innerText
                }
            }
        } else if (rB !== 17 && rB !== 86 && this.cg.innerText.split("@").length === this.bIQ.split("@").length + 1) {
            if ( !! loft.x.ceS() || loft.c.cm.userId <= 0) {
                this.bIQ = this.cg.innerText;
                return
            }
            V.bb(bHm);
            var bSG = new loft.w.caN(null, {
                textBody: this.cg,
                cbDelTag: this.bSF.bHk(this)
            });
            this.bSI.push(bSG)
        }
        this.bIQ = this.cg.innerText
    };
    pC.bSF = function() {
        this.bIQ = this.cg.innerText
    };
    pC.fd = function(bHm) {
        V.bb(bHm);
        if ( !! loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        var bg = U.bA(this.cg.innerHTML.replace(/<[\/]?div>/ig, ""));
        if ( !! bg) {
            this.bh("onreply", bg, this.ic, this.bI, this.ccA, this.bRK, !!this.jr);
            this.cg.innerHTML = "";
            this.bIQ = "";
            p.uo.db(this)
        } else {
            this.cg.focus();
            E.bd("请输入评论内容", true)
        }
    };
    pC.fs = function() {
        p.uo.bw.fs.apply(this, arguments);
        this.cg.focus()
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    fJ;
    p.beC = C();
    rk = p.beC.bi(P("loft.w").cV, true);
    rk.bq = function() {
        this.bHr();
        this.Bu = E.be("dashboradRecomFollowArea");
        this.By = E.be("dashboradRecomFollowList");
        this.bOg = null;
        if (!this.Bu || !this.By) return;
        this.BC = [];
        this.cgk = [];
        this.dB();
        this.BE = 3;
        this.cxu = 0;
        this.Si(0);
        this.bMe = this.bRV.bHk(this);
        this.bPC = this.bUM.bHk(this);
        this.dfI = this.dfH.bHk(this)
    };
    rk.dB = function() {
        var bJ = P("loft.m.g");
        bJ.doFollow = this.zP.bHk(this);
        bJ.doDel = this.dfG.bHk(this)
    };
    rk.zP = function(bL, bc, bHv, by) {
        if ( !! this.BC[bc] && this.BC[bc] == true) {
            return
        }
        if (by == 5) {
            loft.x.bHt("qbdsbbk_20150114_04")
        } else {
            loft.x.bHt("qbdsbbk_20150114_02")
        }
        this.BC[bc] = true;
        if (E.cr(bL, "w-icn2-2")) {} else {
            this.zN(bL, bc, bHv, 1)
        }
    };
    rk.dfG = function(bL, bc, by) {
        if ( !! this.BC[bc] && this.BC[bc] == true) {
            return
        }
        if (by == 5) {
            loft.x.bHt("qbdsbbk_20150114_03")
        } else {
            loft.x.bHt("qbdsbbk_20150114_01")
        }
        this.bOg = bL.parentNode.parentNode.parentNode.parentNode.parentNode;
        this.BC[bc] = true;
        for (var i = 0; i < 3; i++) {
            if (this.cgk[i] == bc) {
                this.cgk[3] = i
            }
        }
        var by = by == 5 ? 2 : 1;
        this.dfF(bL, bc, by)
    };
    rk.zN = function(bL, bc, bHv, by) {
        if (by == 5) {
            J.br(location.dwr, "UserBean", "followBlog", bc || 0, bHv || 0, 2, by || 0, this.zL.bHk(this, bL, bc))
        } else {
            J.br(location.dwr, "UserBean", "followBlogWithFrom", bc || 0, "dashboardRec", this.zL.bHk(this, bL, bc))
        }
    };
    rk.zL = function(bL, bc, bK) {
        if ( !! bK && bK > 0) {
            E.bY("关注成功", true);
            E.ba(bL, "f-dn");
            if ( !! loft.g.dousercard) {
                loft.g.dousercard(null, null, null, {
                    doDelFunc: true,
                    flag: bc,
                    changeFollow: true,
                    followStatus: true
                })
            }
        } else {
            loft.x.bKv(bK)
        }
        this.BC[bc] = false
    };
    rk.zO = function(bL, bc) {
        J.br(location.dwr, "UserBean", "unFollowBlog", bc || 0, this.zE.bHk(this, bL, bc))
    };
    rk.zE = function(bL, bc, bK) {
        if ( !! bK && bK > 0) {
            E.bY("取消关注成功", true);
            bL.title = "添加关注";
            E.bf(bL, "w-icn2-2");
            if ( !! loft.g.dousercard) {
                loft.g.dousercard(null, null, null, {
                    doDelFunc: true,
                    flag: bc,
                    changeFollow: true,
                    followStatus: false
                })
            }
        }
        this.BC[bc] = false
    };
    rk.Si = function(by, fC) {
        J.br(location.dwr, "UserBean", "getRecommendBlogListNew", fC || this.BE, by, this.Sj.bHk(this, by))
    };
    rk.Sj = function(by, bn) {
        var bLj, bo;
        if ( !! bn && bn.length < 1 && !this.bOg) {
            return
        }
        if ( !! bn && bn.length == 1 && by > 0 && !!this.bOg) {
            for (var i = 0; i < bn.length; i++) {
                if (this.cgk[i] == bn[0].blogInfo.blogId) {
                    if (this.cxu >= 20) {
                        E.hE(this.bOg);
                        return
                    }
                    this.cxu++;
                    this.Si(by, 1);
                    return
                }
            }
            this.cxu = 0;
            this.cgk[this.cgk[3]] = bn[0].blogInfo.blogId;
            var bk = E.eY(E.dG("m-jst-1", {
                c: bn
            }));
            V.bJv(this.bOg, "mouseover");
            V.bJv(this.bOg, "mouseout");
            this.bOg.innerHTML = bk.innerHTML;
            V.bHo(this.bOg, "mouseover", this.bHF.bHk(this, true, this.bOg, bn[0].blogInfo.blogId, bn[0].domainId || 0, bn[0].recType || 0));
            V.bHo(this.bOg, "mouseout", this.bHF.bHk(this, false, this.bOg, bn[0].blogInfo.blogId, bn[0].domainId || 0, bn[0].recType || 0));
            this.BC[bn[0].blogInfo.blogId] = false;
            bLj = this.bOg.children
        } else if ( !! bn && bn.length > 0 && by == 0) {
            this.Bu.style.display = "block";
            var bk = E.eY(E.dG("m-jst-1", {
                c: bn
            }));
            this.By.insertAdjacentElement("afterBegin", bk);
            bLj = this.By.children[0].children;
            for (var i = 0; i < bn.length; i++) {
                if ( !! bn[i] && !!bn[i].blogInfo) {
                    this.cgk[i] = bn[i].blogInfo.blogId;
                    bo = bLj[i];
                    V.bHo(bo, "mouseover", this.bHF.bHk(this, true, bo, bn[i].blogInfo.blogId, bn[i].domainId || 0, bn[i].recType || 0));
                    V.bHo(bo, "mouseout", this.bHF.bHk(this, false, bo, bn[i].blogInfo.blogId, bn[i].domainId || 0, bn[i].recType || 0))
                }
            }
        } else if ( !! bn && bn.length == 0 && !!this.bOg) {
            if ( !! this.dfE) {
                E.hE(this.bOg);
                if (this.By.children.length === 0) {
                    E.hE(this.Bu)
                }
                return
            }
            this.dfE = true;
            if (by == 2) {
                this.Si(1, 1)
            } else {
                this.Si(2, 1)
            }
        }
        this.dfD(E.bj(this.bOg, "etag"))
    };
    rk.bHF = function(gu, CL, dA, bHv, cgh, bHm) {
        if ( !! gu) {
            loft.g.dousercard(CL, dA, gu, {
                onFollowSucc: this.bMe,
                onLoadNextBlogList: this.dfI,
                onUnFollowSucc: this.bPC,
                domainId: bHv,
                positionId: 2,
                recType: cgh || 0
            })
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHm)
    };
    rk.dfH = function(CL, cgh) {
        if ( !! this.cv) {
            window.clearTimeout(this.cv);
            this.cv = null
        }
        this.cv = window.setTimeout(function() {
            this.bOg = CL;
            var by = cgh == 5 ? 2 : 1;
            this.Si(by, 1)
        }.bHk(this), 300)
    };
    rk.bRV = function(dA, bNV, cgh) {
        var eF = E.bj(bNV, "w-icn2");
        if ( !! eF[0]) {
            E.ba(eF[0], "f-dn")
        }
        if ( !! cgh && cgh == 5) {
            loft.x.bHt("qbdsbbk_20150114_04")
        } else {
            loft.x.bHt("qbdsbbk_20150114_02")
        }
    };
    rk.bUM = function(dA, bNV) {
        var eF = E.bj(bNV, "w-icn2");
        if ( !! eF[0]) {
            E.bf(eF[0], "f-dn")
        }
    };
    rk.dfD = function(CL) {
        if (B.da && B.Ud < "8.0") {
            if ( !! CL && !!CL[0]) {
                for (var i = 0; i < CL[0].childNodes.length; i++) {
                    var node = CL[0].childNodes[i];
                    if (node.nodeType == 3 && !/\S/.test(node.nodeValue)) {
                        node.parentNode.removeChild(node)
                    }
                }
            }
            if (B.dh) {
                var bn = E.bj(this.By, "itag"),
                cPV = E.bj(this.By, "dtag");
                for (var i = 0; i < bn.length; i++) {
                    if (bn[i].offsetWidth > 126) {
                        bn[i].style.width = "126px"
                    }
                }
                for (var i = 0; i < cPV.length; i++) {
                    E.fy(cPV[i], "j-hover")
                }
            }
        }
    };
    rk.dfF = function(bL, bc, by) {
        J.br(location.dwr, "UserBean", "addBlackList4RecommendBlog", bc || 0, this.dfx.bHk(this, bL, bc, by))
    };
    rk.dfx = function(bL, bc, by, bK) {
        if (bK == true) {
            this.Si(by, 1);
            return
        }
        this.BC[bc] = false
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    csg,
    cwW;
    p.cwV = C();
    cwW = p.cwV.bi(P("loft.w").cV, true);
    cwW.bq = function() {
        this.bHr();
        this.cPZ = E.be("recommendActivityTag");
        this.dfw = E.be("recommendActivityTagBox");
        if (!this.cPZ) return;
        this.dfv()
    };
    cwW.dfv = function() {
        J.br(location.dwr, "ActivityTagBean", "getActivityItemForDashboard",
        function(bHn) {
            if ( !! bHn && bHn.length > 0) {
                bHn[0].first = true;
                p.cwS.bG(bHn, this.dfw);
                this.cPZ.style.display = ""
            }
        }.bHk(this))
    };
    p.cwS = C();
    csg = p.cwS.bi(P(N.ut).fc, true);
    var eO = E.gD('<li class="first"><a href="#" class="mi xtag"><span class="icn icn-4"></span><span class="txt"><span class="us xtag"></span><span class="s-fc2 f-fs0 xtag"></span></span></a></li>');
    csg.bq = function() {
        this.bHr(eO);
        var bHl = E.bj(this.Y, "xtag");
        this.Bx = bHl[0];
        this.cap = bHl[1];
        this.dfr = bHl[2];
        V.bHo(this.Y, "mouseover", this.bVl.bHk(this, true, this.Y));
        V.bHo(this.Y, "mouseout", this.bVl.bHk(this, false, this.Y))
    };
    csg.ce = function(bHn) {
        p.cwS.bw.ce.call(this, bHn);
        this.bHq = bHn;
        this.Y.className = !!bHn.first ? "first": "";
        this.cap.innerText = bHn.tagName || "";
        this.dfr.innerText = bHn.joinedPostNum + "参与";
        this.Bx.href = "http://www.lofter.com/activity?act=qbactivitytag_20130704_01&first=" + encodeURIComponent(bHn.tagName)
    };
    csg.bVl = function(gu, CL, bHm) {
        if ( !! gu) {
            loft.g.dousercard(CL, 0, gu, {
                tag: this.bHq.tagName,
                jst: "m-usercard-jst-2",
                cardHeight: 205
            })
        } else {
            loft.g.dousercard(CL, 0, gu)
        }
        V.bb(bHm)
    }
})(); (function() {
    var p = P("loft.w"),
    cgP;
    var ckc = "ipadclientdownloadtipkey";
    p.cmA = C();
    cgP = p.cmA.bi(P(N.ut).gY);
    cgP.bq = function(I) {
        this.bHr()
    };
    cgP.dB = function() {
        var bJ = P("loft.w.g");
        bJ.closeIpadClientTip = this.dgU.bHk(this)
    };
    cgP.dgU = function() {
        var bQy = 365 * 100;
        U.ru(ckc, "1", null, bQy, "/");
        if ( !! this.bWa) {
            this.bWa.style.display = "none"
        }
    };
    cgP.dzA = function() {
        if (loft.x.ceQ()) {
            var bg = U.ot(ckc);
            if ( !! bg) return;
            if (loft.x.dwU() && loft.x.dwT() >= "6") {} else {
                var cqi = E.be("lofterheadbar");
                if (!cqi) return;
                this.dgS();
                var cDo = document.cloneElement("div", "headbarwrap g-hdwrap");
                cqi.insertAdjacentElement("beforeBegin", cDo);
                E.hv(cqi);
                cDo.insertAdjacentElement("beforeEnd", cqi);
                this.bWa = document.cloneElement("div", "w-ipadtipbar f-trans");
                this.bWa.style.height = "0";
                this.bWa.style.overflow = "hidden";
                this.bWa.style.visibility = "hidden";
                this.bWa.innerHTML = '<div class="ipadtipbar"><a class="installIpad" hidefocus="true" href="https://itunes.apple.com/cn/app/lofter-wang-yi-qing-bo-ke/id629778124" target="_blank">点击安装最新版iPad客户端</a><a class="closetip" onclick="loft.w.g.closeIpadClientTip();return false;" hidefocus="true" href="#">关闭</a></div>';
                cDo.insertAdjacentElement("beforeBegin", this.bWa);
                window.setTimeout(function() {
                    this.bWa.style.visibility = "";
                    this.bWa.style.height = "50px"
                }.bHk(this), 5e3)
            }
        }
    };
    cgP.dgS = function() {
        P(N.ui).fx('.w-ipadtipbar{height:50px;line-height:50px;background:#2a3136;box-shadow:inset 0 0 3px 0px rgba(0,0,0,0.3);}.w-ipadtipbar .ipadtipbar{position:relative;zoom:1;width:928px;margin:0 auto;text-align:left;}.w-ipadtipbar .installIpad{color:#fff;font-size:14px;}.w-ipadtipbar .closetip{position:absolute;top:15px;right:0;width:20px;height:20px;background:url("/rsc/img/ipadtip/ipadtipclose24.png") 1px 1px no-repeat;_background:url("/rsc/img/ipadtip/ipadtipclose8.png") 1px 1px no-repeat;text-indent:-9999px;}.f-trans{transition:all 0.3s linear;-webkit-transition:all 0.3s linear;-moz-transition:all 0.3s linear;-o-transition:all 0.3s linear;}')
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    bMY;
    p.bOn = C();
    bMY = p.bOn.bi(P("loft.w").cV, true);
    bMY.bq = function() {
        this.bHr();
        this.dK();
        if ( !! this.bHp.tag) {
            this.bHp.tcache = new(P("loft.d").qe)({
                type: 1,
                tag: this.bHp.tag || ""
            });
            this.bHp.empty = "无搜索结果"
        }
        this.bHp.guide = this.biQ;
        this.bHp.dashboard = true;
        this.bHp.from = "dashboard";
        this.Sm = new p.qy(this.Jn, this.bHp);
        this.Sm.bHo("cbloaded", this.cwz.bHk(this));
        this.Sm.bE();
        this.CU = new p.MX(this.MG, {
            targetBlogId: this.bHp.targetBlogId
        });
        this.So = new p.RK(this.BL, {
            newRegistUser: this.bHp.NewRegistUser || false,
            pageconfig: this.bHp,
            radarAdPercent: this.bHp.radarAdPercent,
            radarActivityTagPercent: this.bHp.radarActivityTagPercent,
            from: "dashboard",
            noAppLogin: this.bHp.noAppLogin || false
        });
        this.So.bE();
        this.bPD = new loft.w.bm.lH(null, {
            targetid: this.bHp.targetBlogId
        });
        loft.x.Rn();
        new p.beC(null, {});
        new p.cwV(null, {});
        new loft.w.cmA;
        this.cno()
    };
    bMY.cwz = function() {
        if ( !! this.bSW && !this.clm) {
            this.bSW.style.display = "";
            this.bSW.style.opacity = 1;
            this.bSW.style.filter = "alpha(opacity=100)";
            this.clm = true
        }
    };
    bMY.bGZ = function(cD, vw) {
        if ( !! cD) {
            cD.m = cD.m || "0"
        } else {
            return
        }
        if ( !! vw) {
            vw.m = vw.m || ""
        } else {
            vw = {};
            vw.m = ""
        }
        if ( !! vw.m) E.bf("tab_" + vw.m, "js-selected");
        this.yq = cD;
        E.ba("tab_" + this.yq.m, "js-selected")
    };
    bMY.dK = function() {
        this.Jn = E.be("main");
        this.BL = E.be("radarbox");
        this.hm = E.be("searchbox");
        this.Ix = E.be("rside");
        this.MG = E.be("noticetip");
        this.biQ = E.be("guide-track");
        var bHl = E.bj(this.Jn, "m-nav2");
        if(null != bHl){
            this.biO = bHl[0];
        }
        
        //我改动的部分
        if(null != this.biO){
            this.bHe = this.biO.getElementsByTagName("a");
        }
        
        this.biJ();
        this.bSW = E.be("newguide-1") || E.be("newguide-2");
        if ( !! this.bSW) {
            this.bHp.cbdashloaded = true;
            this.clm = false
        }
        this.cQk = E.be("appdownloadbanner");
        this.cwo = E.be("appdownloadbannerslide");
        this.cQm = E.be("appdownloadbannerclose");
        if ( !! this.cQk && this.cwo && this.cQm) {
            V.bHo(this.cQm, "click", this.dfq.bHk(this));
            window["_gaq"].push(["_trackEvent", "引导新用户下载APP", "图片的展示"])
        }
    };
    bMY.dfq = function(bHm) {
        V.bb(bHm);
        J.br(location.dwr, "UserBean", "closeDashboardAppDownload", this.dfo.bHk(this));
        this.cwo.style.marginTop = "-120px";
        window.setTimeout(function() {
            this.cwo.style.display = "none";
            this.cQk.style.display = "none"
        }.bHk(this), 300)
    };
    bMY.dfo = function(bu) {
        if ( !! bu) {}
    };
    bMY.biJ = function() {
        J.br(location.dwr, "UserBean", "loadBulletin", this.biI.bHk(this))
    };
    bMY.biI = function(bulletin) {
        if ( !! bulletin) {
            this.FQ = E.be("bulletinTipArea");
            if (!this.FQ) return;
            var bHl = E.bj(this.FQ, "ztag");
            this.biA = bHl[0];
            this.SA = bHl[1];
            this.biy = bHl[2];
            this.biA.innerText = bulletin.title;
            if ( !! bulletin.url) this.SA.href = bulletin.url;
            else this.SA.style.display = "none";
            this.FQ.style.display = "block";
            V.bHo(this.biy, "click", this.biw.bHk(this));
            V.bHo(this.SA, "click", this.bff.bHk(this))
        } else {}
        if ( !! P(N.ut).dC.kI) {
            P(N.ut).dC.kI(this.bRw.bHk(this))
        }
    };
    bMY.bff = function() {
        J.br(location.dwr, "UserBean", "updateBulletinLoadTime")
    };
    bMY.biw = function(bHm) {
        V.bb(bHm);
        this.FQ.style.display = "none";
        this.bff()
    };
    bMY.MF = function() {
        this.qh = E.be("tempSaveTipArea");
        if (!this.qh) return;
        var bHl = this.qh.getElementsByTagName("a");
        this.ME = bHl[0];
        this.MD = bHl[1];
        V.bHo(this.MD, "click", this.MB.bHk(this));
        var cu = "rescued_post_" + loft.c.cm.userId;
        var lY = U.ot(cu);
        var kA = P(N.ut).dC.qs(cu);
        if ( !! lY && !!kA) {
            if (lY.length >= 7 && lY.substring(0, 7) == "answer/") {
                this.ME.href = "http://www.lofter.com/" + lY + "#rescuedFlag=1"
            } else {
                this.ME.href = "http://www.lofter.com/blog/" + this.bHp.blogName + "/" + lY + "#rescuedFlag=1"
            }
            this.qh.style.display = "block"
        } else {}
    };
    bMY.MB = function(bHm) {
        V.bb(bHm);
        var cu = "rescued_post_" + loft.c.cm.userId;
        U.ir(cu, null, "/");
        P(N.ut).dC.hz(cu);
        this.qh.style.display = "none"
    };
    bMY.bRw = function() {
        var bHQ = P("loft.m.newpublish.w").cht();
        var bXs = ["text", "photo", "music", "video"];
        var bRA = "rescued_post_" + loft.c.cm.userId;
        var lY, kA;
        for (var i = 0; i < 4; i++) {
            var bx = bXs[i] + "_" + bRA;
            lY = U.ot(bx);
            kA = P(N.ut).dC.qs(bx);
            if ( !! bHQ[i]) {
                var bSL = (bHQ[i].getElementsByTagName("em") || [])[0];
                if ( !! lY && !!kA) {
                    if (!P("loft.m.newpublish.w").bMy()) {
                        bHQ[i].href = "http://www.lofter.com/blog/" + this.bHp.blogName + "/" + lY
                    }
                    var bXw = bSL || document.cloneElement("em", "browsersavetip");
                    bHQ[i].insertAdjacentElement("beforeEnd", bXw);
                    var dfn = P(N.ut).dC.qs(bx + "_old");
                    if (U.ii(dfn) !== U.ii(kA)) {
                        E.bY("丢失内容已保存到文章发布器中", true);
                        P(N.ut).dC.wE(bx + "_old", kA)
                    }
                } else {
                    if ( !! bSL) {
                        E.hE(bSL)
                    }
                }
            }
        }
    };
    bMY.che = function() {
        return this.bHp
    };
    bMY.bTi = function(bHn, pa) {
        if (!this.bPB) {
            var bZf = E.be("loadfirst");
            if (!bZf) return;
            this.bPB = document.cloneElement("div", "appendPostParent");
            bZf.insertAdjacentElement("afterEnd", this.bPB)
        }
        if ( !! this.Sm && !!this.bPB) {
            this.Sm.bTi(bHn, this.bPB, pa)
        }
    };
    bMY.cno = function() {
        var bJy = loft.x.wc(location.hash, "publish", "#");
        if (!P("loft.m.newpublish.w").bMy() || !this.bHp.isAdvancedBrowser) {
            var bHQ = P("loft.m.newpublish.w").cht();
            if ( !! bHQ) {
                for (var i = 0; i < 4; i++) {
                    if ( !! bHQ[i]) {
                        bHQ[i].href = bHQ[i].getAttribute("bakhref") || bHQ[i].href
                    }
                }
            }
            if (bJy == "text") {
                if ( !! bHQ[0] && !!bHQ[0].href) {
                    location.href = bHQ[0].href
                }
            } else if (bJy == "photo") {
                if ( !! bHQ[1] && !!bHQ[1].href) {
                    location.href = bHQ[1].href
                }
            } else if (bJy == "music") {
                if ( !! bHQ[2] && !!bHQ[2].href) {
                    location.href = bHQ[2].href
                }
            } else if (bJy == "video") {
                if ( !! bHQ[3] && !!bHQ[3].href) {
                    location.href = bHQ[3].href
                }
            }
        }
    };
    p.bOn.bVS = new p.bOn;
    p.bOn.crW = function() {
        if ( !! p.bOn.bVS) {
            p.bOn.bVS.bRw()
        }
    }
})(); (function() {
    var p = P("loft.m.dashboard"),
    bQS;
    p.cQu = C();
    bQS = p.cQu.bi(P(N.ut).gY);
    bQS.bq = function(I) {
        if (!P("loft.m.newpublish.w").bMy()) {
            return
        }
        I = I || {};
        this.bHr();
        if ( !! p.bOn.bVS) {
            this.bHp = p.bOn.bVS.che()
        }
        this.bHp = this.bHp || P("loft.c").bOj || {};
        this.cnm = E.be("publishPostBar");
        var bHl = E.bj(this.cnm, "publishlink") || []; // banner的四个图标的点击事件
        var Q = 0;
        this.cnk = bHl[Q++];
        this.cnj = bHl[Q++];
        this.cnh = bHl[Q++];
        this.cng = bHl[Q++];
        this.cnf = E.be("publishBarArea") || document.body;
        this.bHG = {
            parent: this.cnf,
            targetBlogInfo: this.bHp.targetBlogInfo,
            lastCCType: this.bHp.lastCCType,
            postOverNum: this.bHp.postOverNum,
            blogList: this.bHp.blogList,
            ue_cfg_develop: this.bHp.ue_cfg_develop,
            ue_js_version: this.bHp.ue_js_version,
            allowUploadDIYMusic: !!this.bHp.allowUploadDIYMusic
        };
        if (this.bHp.goPublishData && this.bHp.goPublishData != "null") {
            this.bHG.goPublishData = this.bHp.goPublishData;
            this.bHp.goPublishData = null
        }
        this.cow = this.bHp.editReblogFromPersonalPage;
        V.bHo(this.cnk, "click", this.bZv.bHk(this));
        V.bHo(this.cnj, "click", this.bZq.bHk(this));
        V.bHo(this.cnh, "click", this.bZp.bHk(this));
        V.bHo(this.cng, "click", this.bZn.bHk(this));
        var cbg = {
            ue_cfg_develop: this.bHp.ue_cfg_develop,
            ue_js_version: this.bHp.ue_js_version
        };
        window.setTimeout(function() {
            loft.m.newpublish.w.bRG.YV(cbg)
        }.bHk(this), 10);
        var bJy = loft.x.wc(location.hash, "publish", "#");
        if (bJy == "text") {
            this.bLD = window.setTimeout(this.bZv.bHk(this), 1e3)
        } else if (bJy == "photo") {
            this.bLD = window.setTimeout(this.bZq.bHk(this), 1e3)
        } else if (bJy == "music") {
            this.bLD = window.setTimeout(this.bZp.bHk(this), 1e3)
        } else if (bJy == "video") {
            this.bLD = window.setTimeout(this.bZn.bHk(this), 1e3)
        }
        this.dfm()
    };
    bQS.dfm = function() {
        var HG = loft.x.wc(location.href, "type", "?");
        var yz = loft.x.wc(location.href, "permalink", "?");
        var cge = loft.x.wc(location.hash, "redirectTo", "#");
        var bLc = this.dfj(yz);
        if ( !! bLc) {
            if ( !! bLc.postId && !!bLc.blogId) {
                P("loft.m.newpublish.w").cJK();
                if (HG == "EDIT") {
                    if (this.dfh(bLc.blogId)) {
                        this.cfr(bLc.postId, bLc.blogId, HG, cge);
                        return
                    }
                } else if (HG == "REBLOG") {
                    this.cfr(bLc.postId, bLc.blogId, HG, cge);
                    return
                }
            }
        }
        this.cvT()
    };
    bQS.dfh = function(bc) {
        if (!bc) return false;
        var cle = false;
        var cvP = loft.c.jg || [];
        for (var i = 0; i < cvP.length; i++) {
            if ( !! cvP[i] && cvP[i].blogId === bc) {
                cle = true;
                break
            }
        }
        return cle
    };
    bQS.cvT = function() {
        this.bNc = E.be("preOpenCoverForPublish");
        if ( !! this.bNc && this.bNc.style.display != "none") {
            this.bNc.style.display = "none"
        }
    };
    bQS.cfr = function(dR, bc, HG, cge) {
        if ( !! dR && !!bc) {
            J.br(location.dwr, "TrackBean", "getTrackItem", dR, bc, this.ccd.bHk(this, HG, cge))
        } else {
            this.cvT()
        }
    };
    bQS.ccd = function(HG, cge, bHJ) {
        if ( !! bHJ && !!bHJ.post) {
            var cvO = loft.x.GD(this.bHG);
            cvO.post = bHJ.post;
            cvO.actionType = HG || "";
            var I = {};
            I.redirectToUrl = cge;
            I.publishOptions = cvO;
            I.needClearParamInUrl = true;
            I.editReblogFromPersonalPage = this.cow;
            window.setTimeout(function() {
                P("loft.m.newpublish.w").bZM.YV(I)
            }.bHk(this), 100)
        } else {
            this.cvT()
        }
    };
    bQS.dfj = function(yz) {
        if (!yz) return;
        var bLc = {};
        var Q = yz.indexOf("_");
        if (Q > 0 && Q < yz.length) {
            try {
                bLc.blogId = parseInt(yz.substring(0, Q), 16);
                bLc.postId = parseInt(yz.substring(Q + 1, yz.length), 16)
            } catch(e) {}
        }
        return bLc
    };
    bQS.bPy = function(I, bHm) {
        if ( !! this.bLD) this.bLD = window.clearTimeout(this.bLD);
        loft.m.newpublish.bZU.cdP(I, bHm)
    };
    bQS.bZv = function(bHm) {
        if ( !! bHm) V.qK(bHm);
        this.bHG.postType = 1;
        this.bHG.editorType = "text";
        this.bHG.actionType = "NEW";
        this.bHG.enableAnimate = true;
        this.bPy(this.bHG, bHm)
    };
    bQS.bZq = function(bHm) {
        if ( !! bHm) V.qK(bHm);
        this.bHG.postType = 2;
        this.bHG.editorType = "photo";
        this.bHG.actionType = "NEW";
        this.bHG.enableAnimate = true;
        this.bHG.mydomains = this.bHp.mydomains || {};
        this.bPy(this.bHG, bHm)
    };
    bQS.bZp = function(bHm) {
        if ( !! bHm) V.qK(bHm);
        this.bHG.postType = 3;
        this.bHG.editorType = "music";
        this.bHG.actionType = "NEW";
        this.bHG.enableAnimate = true;
        this.bHG.allowUploadDIYMusic = !!this.bHp.allowUploadDIYMusic;
        this.bHG.flashSessionCookie = this.bHp.v || "";
        this.bPy(this.bHG, bHm)
    };
    bQS.bZn = function(bHm) {
        if ( !! bHm) V.qK(bHm);
        this.bHG.postType = 4;
        this.bHG.editorType = "video";
        this.bHG.actionType = "NEW";
        this.bHG.enableAnimate = true;
        this.bPy(this.bHG, bHm)
    };
    new p.cQu
})()