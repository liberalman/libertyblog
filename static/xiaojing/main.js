// https://github.com/chukong/cocos-docs/blob/master/tutorial/framework/html5/how-to-make-a-cat-game/zh.md
cc.game.onStart = function(){
    // 1.���������meta��������Ļ�������ڲ��������Ļ��С������meta��viewportֵ����ﵽ���õ���Ļ����Ч����
    cc.view.adjustViewPort(true);

    // 2.����ֻ��������PC��������ò�ͬ�ķֱ���������ԡ�
    if (cc.sys.isMobile)
        cc.view.setDesignResolutionSize(320,500,cc.ResolutionPolicy.FIXED_WIDTH);
    else
        cc.view.setDesignResolutionSize(320,480,cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    // 3.load resources Ԥ����ͼƬ��������Դ�� cc.LoaderScene.preload������һ���������� x�����Ľ��棬�ȴ���Դ���ؽ����󣬵��õڶ���������������������� ���ڻ���html����Ϸ��ҳ���Ƿ��ڷ������˹���������صģ�Ϊ�˻���������û����飬cc.LoaderScene.preload��������Ȱ�Զ�̷���������Դ���浽���ء���ҪԤ���ص���Դ������src/Resources.js�ļ��С�
    cc.LoaderScene.preload(resources, function () {
        // 4.������Ϸ�ĵ�һ��������
        gameScene = new GameScene();
        cc.director.runScene(gameScene);
    }, this);
};

cc.game.run();