/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 28.08.13
 * Time: 15:57
 *
 * Class Man
 */
function Man() {
    this.container = null;
    this.actor = null;

    var width = 0;
    var height = 0;

    var isSmall = false;
    var isInteractive = false;
    var haveIdea = false;
    var ideasSide = 0;
    var color = null;

    var manActor = null;
    var tieActor = null;
    var ideaActor = null;

    this.startupMan = function (small, interactive, idea, ideaSide, clr) {
        isSmall = small;
        isInteractive = interactive;
        haveIdea = idea;
        ideasSide = ideaSide;
        color = clr;

        width = director.getImage("gui_man_big").width;
        height = director.getImage("gui_man_big").height;

        this.container = new CAAT.ActorContainer().
            setBounds(0, 0, width, height).
            setGlobalAlpha(true).
            setAlpha(0);

        createManActor(this.container);
        if (haveIdea && !isSmall) createIdea(this.container);
        if (isInteractive) addInteractiveListeners();

        this.actor = manActor;

        return this;
    };

    function createManActor(container) {
        manActor = new CAAT.Actor();

        if (isSmall) {
            manActor.setBackgroundImage(director.getImage("gui_man_small"));
            container.addChild(manActor.setLocation(0, 62));
        } else {
            manActor.setBackgroundImage(director.getImage("gui_man_big"));
            container.addChild(manActor.setLocation(0, 0));
        }

        if (!isSmall) createTie(container);
    }

    function createTie(container) {
        var tieImg = new CAAT.SpriteImage().
            initialize(director.getImage("gui_ties"), 1, 3).
            addAnimation("orange", [0], FPS).
            addAnimation("brown", [1], FPS).
            addAnimation("green", [2], FPS);

        tieActor = new CAAT.Actor().
            setBackgroundImage(tieImg);

        tieActor.playAnimation(color);

        container.addChild(tieActor.setLocation(42, 68));
    }

    function createIdea(container) {
        var ideaImg = new CAAT.SpriteImage().
            initialize(director.getImage("gui_ideas"), 1, 3).
            addAnimation("orange", [0], FPS).
            addAnimation("brown", [1], FPS).
            addAnimation("green", [2], FPS);

        ideaActor = new CAAT.Actor();//.
        if (ideasSide == 1) {
            ideaActor.setBackgroundImage(ideaImg).setImageTransformation(CAAT.Foundation.SpriteImage.TR_FLIP_HORIZONTAL);
            container.addChild(ideaActor.setLocation(-2, -27));
        } else {
            ideaActor.setBackgroundImage(ideaImg);
            container.addChild(ideaActor.setLocation(81, -27));
        }

        ideaActor.playAnimation(color);
    }

    this.showMan = function(t) {
        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, t);

        this.container.addBehavior(showAlphaBeh);
    };

    this.showIdea = function(t) {
        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, t);

        ideaActor.addBehavior(showAlphaBeh);
    };

    this.hideIdea = function(t) {
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time, t);

        ideaActor.addBehavior(hideAlphaBeh);
    };

    function addInteractiveListeners() {
        manActor.mouseEnter = mouseEnter;
        manActor.mouseExit = mouseExit;

        if (tieActor) {
            tieActor.mouseEnter = mouseEnter;
            tieActor.mouseExit = mouseExit;
        }
        if (ideaActor) {
            ideaActor.mouseEnter = mouseEnter;
            ideaActor.mouseExit = mouseExit;
        }

        function mouseEnter() {
            document.body.style.cursor = "pointer";
            if (isSmall) increase();
        }

        function mouseExit() {
            document.body.style.cursor = "default";
            if (isSmall) decrease();
        }
    }

    function increase() {
        var t = 150;

        var scaleBeh0 = new CAAT.Behavior.ScaleBehavior().
            setValues(1, 1.5, 1, 1.5 , .5, .5).
            setFrameTime(scene.time, t);
        var scaleBeh1 = new CAAT.Behavior.ScaleBehavior().
            setValues(1.5, .9, 1.5, .9 , .5, .5).
            setFrameTime(scene.time + t, t);
        var scaleBeh2 = new CAAT.Behavior.ScaleBehavior().
            setValues(.9, 1.2, .9, 1.2 , .5, .5).
            setFrameTime(scene.time + 2 * t, t);

        manActor.addBehavior(scaleBeh0);
        manActor.addBehavior(scaleBeh1);
        manActor.addBehavior(scaleBeh2);
    }

    function decrease() {
        var t = 150;

        var scaleBeh0 = new CAAT.Behavior.ScaleBehavior().
            setValues(1.2, .8, 1.2, .8 , .5, .5).
            setFrameTime(scene.time, t);
        var scaleBeh1 = new CAAT.Behavior.ScaleBehavior().
            setValues(.8, 1.1, .8, 1.1 , .5, .5).
            setFrameTime(scene.time + t, t);
        var scaleBeh2 = new CAAT.Behavior.ScaleBehavior().
            setValues(1.1, 1, 1.1, 1 , .5, .5).
            setFrameTime(scene.time + 2 * t, t);

        manActor.addBehavior(scaleBeh0);
        manActor.addBehavior(scaleBeh1);
        manActor.addBehavior(scaleBeh2);
    }

    this.increase = function() {increase();};
    this.decrease = function() {decrease();};

    this.setSmall = function () {
        isSmall = true;

        manActor.setBackgroundImage(director.getImage("gui_man_small"));
        manActor.setLocation(0, 62);
        this.container.removeChild(tieActor);
        if (haveIdea) this.container.removeChild(ideaActor);
    };

    this.setBig = function() {
        isSmall = false;

        manActor.setBackgroundImage(director.getImage("gui_man_big"));
        manActor.setLocation(0, 0);
        createTie(this.container);
        if (haveIdea) createIdea(this.container);
    };

    this.destroyMan = function() {
        manActor.mouseEnter = null;
        manActor.mouseExit = null;

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time, 250);
        this.container.addBehavior(hideAlphaBeh);

        var obj = this;
        setTimeout(function() {obj.container.emptyChildren();}, 260);
    };
}
