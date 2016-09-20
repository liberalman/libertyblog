// https://github.com/chukong/cocos-docs/blob/master/tutorial/framework/html5/how-to-make-a-cat-game/zh.md
cc.game.onStart = function(){
    // 1.设置浏览器meta来适配屏幕，引擎内部会根据屏幕大小来设置meta的viewport值，会达到更好的屏幕适配效果。
    cc.view.adjustViewPort(true);

    // 2.针对手机浏览器和PC浏览器启用不同的分辨率适配策略。
    if (cc.sys.isMobile)
        cc.view.setDesignResolutionSize(320,500,cc.ResolutionPolicy.FIXED_WIDTH);
    else
        cc.view.setDesignResolutionSize(320,480,cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    // 3.load resources 预加载图片声音等资源。 cc.LoaderScene.preload会生成一个“加载中 x％”的界面，等待资源加载结束后，调用第二个参数传入的匿名函数。 对于基于html的游戏，页面是放在服务器端供浏览器下载的，为了获得流畅的用户体验，cc.LoaderScene.preload让浏览器先把远程服务器的资源缓存到本地。需要预加载的资源定义在src/Resources.js文件中。
    cc.LoaderScene.preload(resources, function () {
        // 4.启动游戏的第一个场景。
        gameScene = new GameScene();
        cc.director.runScene(gameScene);
    }, this);
};

cc.game.run();