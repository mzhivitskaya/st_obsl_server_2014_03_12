function Slide21() {
    var self = this;

    var main_pic = null;

    var paper1 = null;
    var paper2 = null;
    var paper3 = null;
    var paper4 = null;
    var pencil = null;

    var btnNext = null;
    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;
    var timeout4 = null;
    var timeout5 = null;
    var timeout6 = null;
    var timeout7 = null;

    var count = null;
    var number = null;

    this.showFrame0 = function () {

        disableAllTransitions();


        main_pic = new CAAT.ActorContainer().
            setBackgroundImage(director.getImage("slide21_main_pic")).
            setLocation(40, 800);
        self.container.addChild(main_pic);

        main_pic.moveTo(40, 80, 600, 200, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            main_pic.emptyBehaviorList();
        });


        setTimeout(function(){
            enableAllTransitions();
            addNext();
            addPaper();
        },1200);

    };

    function addNext(){

        var buttonNextSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("gui_next_btn"), 1, 2).
            addAnimation("idle", [0], 300).
            addAnimation("over", [1], 300);
        btnNext = new CAAT.Actor().
            setBackgroundImage(buttonNextSprite).
            setLocation(650, 370).
            setRotationAnchored(90 * Math.PI / 180, .5, .5);
        main_pic.addChild(btnNext);
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

            main_pic.moveTo(40, 800, 600, 0 ,null, function() {});

            timeout1 = setTimeout(function() {
                appManager.showNextSlide();
                enableAllTransitions();
            },1000);
        };
    }

    var addPaper = function(){

        paper1 = new CAAT.Actor().
            setBackgroundImage("slide21_paper1").
            setLocation(460, 340)
            .setAlpha(0);
        main_pic.addChild(paper1);

        paper1.setAlpha(1);

        paper2 = new CAAT.Actor().
            setBackgroundImage("slide21_paper2").
            setLocation(460, 340)
            .setAlpha(0);
        main_pic.addChild(paper2);

        paper3 = new CAAT.Actor().
            setBackgroundImage("slide21_paper3").
            setLocation(460, 340)
            .setAlpha(0);
        main_pic.addChild(paper3);

        paper4 = new CAAT.Actor().
            setBackgroundImage("slide21_paper4").
            setLocation(460, 340)
            .setAlpha(0);
        main_pic.addChild(paper4);

        pencil = new CAAT.Actor().
            setBackgroundImage("slide21_pencil").
            setLocation(470, 320);
        main_pic.addChild(pencil);

        pencil.moveTo(520, 320, 1200, 0 ,null, function() {});

        timeout2 = setTimeout(function() {
            paper2.setAlpha(1);
            pencil.moveTo(470, 335, 600, 0 ,null, function() {});
        }, (1200));

        timeout3 = setTimeout(function() {

            pencil.moveTo(520, 335, 1200, 0 ,null, function() {});
        },(1800));

        timeout4 = setTimeout(function() {
            paper3.setAlpha(1);
            pencil.moveTo(470, 350, 600, 0 ,null, function() {});
        },(3000));

        timeout5= setTimeout(function() {

            pencil.moveTo(520, 350, 1200, 0 ,null, function() {});
        },(3600));

        timeout6 = setTimeout(function() {
            paper4.setAlpha(1);
            pencil.moveTo(520, 320, 1200, 0 ,null, function() {});
        },(4800));






    }

    this.destroyIt = function() {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        clearTimeout(timeout6);
        clearTimeout(timeout7);

    };
}
Slide21.prototype = new Slide;