/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 22.08.13
 * Time: 14:29
 *
 * Class ScreenManager
 */
function ScreenManager() {
    var dbgTxt = null;
    var partNameText = null;
    var slideNameText = null;
    var mask = null;

    this.startupScreenManager = function () {
        createSceneMask();
        createBackLayer();
        createTopLayer();
        if (DEBUG) createDebugText();

        return this;
    };

    function createSceneMask() {
        mask = new CAAT.Path().
            beginPath(0, 0).
            addLineTo(SCREEN_WIDTH, 0).
            addLineTo(SCREEN_WIDTH, SCREEN_HEIGHT).
            addLineTo(0, SCREEN_HEIGHT).
            addLineTo(0, 0).
            endPath();

        scene.setClip(true, mask);
        mask.setLocation(0, 0);
    }

    function createBackLayer() {
        backLayer = new CAAT.ActorContainer().
            setBounds(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT).
            setGlobalAlpha(true).
            setAlpha(0);
        scene.addChild(backLayer);
    }

    function createTopLayer() {
        topLayer = new CAAT.ActorContainer().
            setBounds(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT).
            setGlobalAlpha(true).
            setAlpha(0);
        topLayer.mouseEnabled = false;
        scene.addChild(topLayer);
    }

    this.createBaseGUI = function () {
        var leftSide = new CAAT.Actor().
            setBackgroundImage(director.getImage("gui_left_side")).
            setLocation(0, 0);
        var rightSide = new CAAT.Actor().
            setBackgroundImage(director.getImage("gui_right_side")).
            setLocation(SCREEN_WIDTH - director.getImage("gui_right_side").width, 0);
        var top = new CAAT.Actor().
            setBackgroundImage(director.getImage("gui_top")).
            setLocation(0, 0);
        var bottom = new CAAT.Actor().
            setBackgroundImage(director.getImage("gui_bottom")).
            setLocation(0, SCREEN_HEIGHT - director.getImage("gui_bottom").height);

        topLayer.addChild(leftSide);
        topLayer.addChild(rightSide);
        topLayer.addChild(top);
        topLayer.addChild(bottom);

        partNameText = new CAAT.TextActor().
            setFont("14px DINRoundPro-Medium").
            setTextAlign("left").
            setText("").
            setLocation(217, 6).
            setTextFillStyle("white").
            setOutlineColor("#aaa").
            setOutline(false);

        slideNameText = new CAAT.TextActor().
            setFont("18px DINRoundPro-Medium").
            setTextAlign("left").
            setText("").
            setLocation(217, 35).
            setTextFillStyle("#663333").
            setOutlineColor("#aaa").
            setOutline(false);

        topLayer.addChild(partNameText);
        topLayer.addChild(slideNameText);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, 1500);

        topLayer.addBehavior(showAlphaBeh);
        backLayer.addBehavior(showAlphaBeh);

        menu = new Menu().startupMenu();
    };

    this.setPartNameText = function(txt) {
        partNameText.setText(txt);
    };

    this.setSlideNameText = function(txt) {
        slideNameText.setText(txt);
    };

    function createDebugText() {
        dbgTxt = new CAAT.UI.Label().
            setBounds( 100,10,500,300).
            setStyle( "default",    {
                font        : "Courier New",
                fontSize    : 12,
                fill        : '#000',
                tabSize     : 0
            }).
            setText("<style=default>debug:</style>");

        topLayer.addChild(dbgTxt.setLocation(10, 100).setAlpha(0));
    }

    this.addDbgTxt = function(txt) {
        var tmp = dbgTxt.text;
        tmp += "<br>";
        tmp += txt;

        dbgTxt.setText(tmp);
    };

    this.onResize = function() {
        if (window.innerWidth < SCREEN_WIDTH || window.innerHeight < SCREEN_HEIGHT) {
            scale = window.innerWidth / SCREEN_WIDTH;

            if (window.innerHeight / SCREEN_HEIGHT < scale) scale = window.innerHeight / SCREEN_HEIGHT;
        } else scale = 1;

        scene.setScaleAnchored(scale, scale, 0, 0);
    };
}
