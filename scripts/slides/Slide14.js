function Slide14() {
    var self = this;

    var man1 = null;
    var man2 = null;
    var man3 = null;
    var diagramm = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;

    var count = null;


this.showFrame0 = function () {

    disableAllTransitions();

    count = 0;

    man1 = new CAAT.Actor().
        setBackgroundImage(director.getImage("slide14_man1")).
        setLocation(-410, 90);
    self.container.addChild(man1);

    man1.moveTo(110, 90, 2500, 0 ,null, function() {});

    diagramm = new CAAT.Actor().
        setBackgroundImage(director.getImage("slide14_diagramm")).
        setLocation(800, 190);
    self.container.addChild(diagramm);

    var rotationBeh = new CAAT.Behavior.RotateBehavior().
        setFrameTime(scene.time, 2500).
        setValues(120 * Math.PI / 180, 0 * Math.PI / 180,.5, .5);
    diagramm.addBehavior(rotationBeh);

    diagramm.moveTo(380, 190, 2500, 0 ,null, function() {});

    timeout1 = setTimeout(function() {
        enableAllTransitions();

        var buttonNextSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("gui_next_btn"), 1, 2).
            addAnimation("idle", [0], 300).
            addAnimation("over", [1], 300);
        btnNext = new CAAT.Actor().
            setBackgroundImage(buttonNextSprite).
            setLocation(700, 90).
            setRotationAnchored(90 * Math.PI / 180, .5, .5);
        self.container.addChild(btnNext);
        btnNext.playAnimation("idle");

        btnNext.mouseEnter = function() {
            document.body.style.cursor = "pointer";
            btnNext.playAnimation("over");
        };
        btnNext.mouseExit = function() {
            document.body.style.cursor = "default";
            btnNext.playAnimation("idle");
        };
        btnNext.mouseClick = function() {

            disableAllTransitions();
            if (count == 0)
            {
                count++;
                self.container.removeChild(man1);

                man2 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide14_man2")).
                    setLocation(110, 90);
                self.container.addChild(man2);

                var rotationBeh2 = new CAAT.Behavior.RotateBehavior().
                    setFrameTime(scene.time, 2500).
                    setValues(0 * Math.PI / 180, -120 * Math.PI / 180,.5, .5);
                diagramm.addBehavior(rotationBeh2);


                timeout2 = setTimeout(function() {
                    enableAllTransitions();
                },2500);

            }
            else if(count == 1)
            {
                count++;
                self.container.removeChild(man2);

                man3 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide14_man3")).
                    setLocation(110, 90);
                self.container.addChild(man3);

                var rotationBeh3 = new CAAT.Behavior.RotateBehavior().
                    setFrameTime(scene.time, 2500).
                    setValues(-120 * Math.PI / 180, -240 * Math.PI / 180,.5, .5);
                diagramm.addBehavior(rotationBeh3);


                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },2500);

            }
            else
            {
                self.container.removeChild(btnNext);
                man3.moveTo(810, 90, 2500, 0 ,null, function() {});

                var rotationBeh4 = new CAAT.Behavior.RotateBehavior().
                    setFrameTime(scene.time, 2500).
                    setValues(-240 * Math.PI / 180, -360 * Math.PI / 180,.5, .5);
                diagramm.addBehavior(rotationBeh4);

                diagramm.moveTo(-580, 190, 2500, 0 ,null, function() {});

                timeout3 = setTimeout(function() {
                    appManager.showNextSlide();
                    enableAllTransitions();
                },2500);
            }
        };
    },2500);




};

function clickInfoPanelBtn() {
    appManager.showNextSlide();
}
}
Slide14.prototype = new Slide;