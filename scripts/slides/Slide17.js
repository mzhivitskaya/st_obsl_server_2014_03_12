function Slide17() {
    var self = this;


    var main_pic = null;

    var next_button = null;
    var ok_orange1 = null;
    var ok_orange2 = null;
    var ok_orange3 = null;
    var ok_orange4 = null;
    var ok_orange5 = null;
    var ok_orange6 = null;
    var ok_orange7 = null;
    var ok_orange8 = null;
    var ok_orange9 = null;
    var ok_orange10 = null;

    var btnNext = null;

    var buttonQestSprite = null;
    var btnQest = null;

    var btn1OPressed = null;
    var btn2OPressed = null;
    var btn3OPressed = null;
    var btn4OPressed = null;
    var btn5OPressed = null;
    var btn6OPressed = null;
    var btn7OPressed = null;
    var btn8OPressed = null;
    var btn9OPressed = null;
    var btn10OPressed = null;

    var transparent = null;
    var wrong = null;
    var right = null;
    var info = null;

    this.showFrame0 = function () {

        disableAllTransitions();

        main_pic = new CAAT.ActorContainer().
            setBackgroundImage(director.getImage("slide17_main_pic")).
            setLocation(33, 800);
        self.container.addChild(main_pic);

        main_pic.moveTo(33, 100, 600, 200, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            main_pic.emptyBehaviorList();
        });

        addOkButtons();
        addNextBtn();
        addQBtn();

        setTimeout(function(){
            enableAllTransitions();
        },600);
    };

    function addQBtn(){
        buttonQestSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("slide17_qest_button"), 1, 2).
            addAnimation("idle", [0], 300).
            addAnimation("over", [1], 300);

        btnQest = new CAAT.Actor().
            setBackgroundImage(buttonQestSprite).
            setLocation(630,470).
            setAlpha(0);
        self.container.addChild(btnQest);
        btnQest.playAnimation("idle");

        btnQest.mouseEnter = function() {
            document.body.style.cursor = "pointer";
            btnQest.playAnimation("over");
        };
        btnQest.mouseExit = function() {
            document.body.style.cursor = "default";
            btnQest.playAnimation("idle");
        };
        btnQest.mouseClick = function() {
            showInfo();

            setTimeout(function(){
                self.container.removeChild(transparent);
            },6000);

        }

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time , 600);


        btnQest.addBehavior(showAlphaBeh);

    }

    function addNextBtn(){

        var buttonNextSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("slide17_next_button"), 1, 3).
            addAnimation("idle", [0], 300).
            addAnimation("over", [2], 300);

        btnNext = new CAAT.Actor().
            setBackgroundImage(buttonNextSprite).
            setLocation(710, 470).
            setAlpha(0)
            // .setRotationAnchored(90 * Math.PI / 180, .5, .5)
        ;
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

            if( (btn1OPressed == false) &&  (btn2OPressed == true) && (btn3OPressed == true) && (btn4OPressed == true) &&  (btn5OPressed == true) && (btn6OPressed == true) && (btn7OPressed == false) && (btn8OPressed == false) && (btn9OPressed == true) && (btn10OPressed == true))
            {
                disableAllTransitions();

                showRightAnswerWindow();

                var hideAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(1, 0).
                    setFrameTime(scene.time + 3000, 1000);
                main_pic.addBehavior(hideAlphaBeh);
                btnNext.addBehavior(hideAlphaBeh);
                btnQest.addBehavior(hideAlphaBeh);

                ok_orange1.addBehavior(hideAlphaBeh);
                ok_orange2.addBehavior(hideAlphaBeh);
                ok_orange3.addBehavior(hideAlphaBeh);
                ok_orange4.addBehavior(hideAlphaBeh);
                ok_orange5.addBehavior(hideAlphaBeh);
                ok_orange6.addBehavior(hideAlphaBeh);
                ok_orange7.addBehavior(hideAlphaBeh);
                ok_orange8.addBehavior(hideAlphaBeh);
                ok_orange9.addBehavior(hideAlphaBeh);
                ok_orange10.addBehavior(hideAlphaBeh);


                setTimeout( function (){
                    appManager.showNextSlide();
                    enableAllTransitions();
                }, 4000);
                setTimeout(function(){
                    self.container.removeChild(transparent);
                },3000);

            }

            else {
                showWrongAnswerWindow();

                disableAllTransitions();

                btn1OPressed = false;
                btn2OPressed = false;
                btn3OPressed = false;
                btn4OPressed = false;
                btn5OPressed = false;
                btn6OPressed = false;
                btn7OPressed = false;
                btn8OPressed = false;
                btn9OPressed = false;
                btn10OPressed = false;

                ok_orange1.playAnimation("zero");
                ok_orange2.playAnimation("zero");
                ok_orange3.playAnimation("zero");
                ok_orange4.playAnimation("zero");
                ok_orange5.playAnimation("zero");
                ok_orange6.playAnimation("zero");
                ok_orange7.playAnimation("zero");
                ok_orange8.playAnimation("zero");
                ok_orange9.playAnimation("zero");
                ok_orange10.playAnimation("zero");

                setTimeout(function(){
                    self.container.removeChild(transparent);
                    enableAllTransitions();
                },3000);



            }
        };

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time , 600);


        btnNext.addBehavior(showAlphaBeh);
    }

    function addOkButtons(){

        var okOrangeSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("slide17_ok_button"), 1, 2).
            addAnimation("zero", [0], 300).
            addAnimation("ok", [1], 300);

        ok_orange1 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(305, 120);
        main_pic.addChild(ok_orange1);

        ok_orange1.playAnimation("zero");
        ok_orange1.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange1.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn1OPressed = false;

        ok_orange1.mouseClick = function() {
            if (btn1OPressed){
                ok_orange1.playAnimation("zero");
                btn1OPressed = false;
            }
            else{
                ok_orange1.playAnimation("ok");
                btn1OPressed = true;
            }
        };

        //2
        ok_orange2 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(305, 183);
        main_pic.addChild(ok_orange2);

        ok_orange2.playAnimation("zero");
        ok_orange2.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange2.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn2OPressed = false;

        ok_orange2.mouseClick = function() {
            if (btn2OPressed){
                ok_orange2.playAnimation("zero");
                btn2OPressed = false;
            }
            else{
                ok_orange2.playAnimation("ok");
                btn2OPressed = true;
            }
        };

        //3

        ok_orange3 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(305, 246);
        main_pic.addChild(ok_orange3);

        ok_orange3.playAnimation("zero");
        ok_orange3.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange3.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn3OPressed = false;

        ok_orange3.mouseClick = function() {
            if (btn3OPressed){
                ok_orange3.playAnimation("zero");
                btn3OPressed = false;
            }
            else{
                ok_orange3.playAnimation("ok");
                btn3OPressed = true;
            }
        };

        //4
        ok_orange4 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(305, 311);
        main_pic.addChild(ok_orange4);

        ok_orange4.playAnimation("zero");
        ok_orange4.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange4.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn4OPressed = false;

        ok_orange4.mouseClick = function() {
            if (btn4OPressed){
                ok_orange4.playAnimation("zero");
                btn4OPressed = false;
            }
            else{
                ok_orange4.playAnimation("ok");
                btn4OPressed = true;
            }
        };

//5
        ok_orange5 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(305, 373);
        main_pic.addChild(ok_orange5);

        ok_orange5.playAnimation("zero");
        ok_orange5.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange5.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn5OPressed = false;

        ok_orange5.mouseClick = function() {
            if (btn5OPressed){
                ok_orange5.playAnimation("zero");
                btn5OPressed = false;
            }
            else{
                ok_orange5.playAnimation("ok");
                btn5OPressed = true;
            }
        };

        //6

        ok_orange6 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(700, 40);
        main_pic.addChild(ok_orange6);

        ok_orange6.playAnimation("zero");
        ok_orange6.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange6.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn6OPressed = false;

        ok_orange6.mouseClick = function() {
            if (btn6OPressed){
                ok_orange6.playAnimation("zero");
                btn6OPressed = false;
            }
            else{
                ok_orange6.playAnimation("ok");
                btn6OPressed = true;
            }
        };

        //7

        ok_orange7 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(700, 106);
        main_pic.addChild(ok_orange7);

        ok_orange7.playAnimation("zero");
        ok_orange7.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange7.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn7OPressed = false;

        ok_orange7.mouseClick = function() {
            if (btn7OPressed){
                ok_orange7.playAnimation("zero");
                btn7OPressed = false;
            }
            else{
                ok_orange7.playAnimation("ok");
                btn7OPressed = true;
            }
        };

        //8

        ok_orange8 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(700, 168);
        main_pic.addChild(ok_orange8);

        ok_orange8.playAnimation("zero");
        ok_orange8.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange8.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn8OPressed = false;

        ok_orange8.mouseClick = function() {
            if (btn8OPressed){
                ok_orange8.playAnimation("zero");
                btn8OPressed = false;
            }
            else{
                ok_orange8.playAnimation("ok");
                btn8OPressed = true;
            }
        };


        //9

        ok_orange9 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(700, 231);
        main_pic.addChild(ok_orange9);

        ok_orange9.playAnimation("zero");
        ok_orange9.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange9.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn9OPressed = false;

        ok_orange9.mouseClick = function() {
            if (btn9OPressed){
                ok_orange9.playAnimation("zero");
                btn9OPressed = false;
            }
            else{
                ok_orange9.playAnimation("ok");
                btn9OPressed = true;
            }
        };

        //10

        ok_orange10 = new CAAT.Actor().
            setBackgroundImage(okOrangeSprite).
            setLocation(700, 292);
        main_pic.addChild(ok_orange10);

        ok_orange10.playAnimation("zero");
        ok_orange10.mouseEnter = function() {
            document.body.style.cursor = "pointer";
        };
        ok_orange10.mouseExit = function() {
            document.body.style.cursor = "default";
        };

        btn10OPressed = false;

        ok_orange10.mouseClick = function() {
            if (btn10OPressed){
                ok_orange10.playAnimation("zero");
                btn10OPressed = false;
            }
            else{
                ok_orange10.playAnimation("ok");
                btn10OPressed = true;
            }
        };





    }

    function showRightAnswerWindow()
    {
        transparent = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide17_transparent")).
            setLocation(0, 0);
        self.container.addChild(transparent);

        right = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide17_right")).
            setLocation(220, 800)
            .setAlpha(0);
        self.container.addChild(right);

        right.moveTo(220, 350, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            right.emptyBehaviorList();
        });

        setTimeout(function(){
            right.moveTo(220, 800, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
                right.emptyBehaviorList();
            });
        },2750);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, 250);

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time + 2750, 250);

        right.addBehavior(showAlphaBeh);
        right.addBehavior(hideAlphaBeh);
    }

    function showWrongAnswerWindow()
    {

        transparent = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide17_transparent")).
            setLocation(0, 0);
        self.container.addChild(transparent);

        wrong = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide17_wrong")).
            setLocation(220, 800)
            .setAlpha(0);
        self.container.addChild(wrong);

        wrong.moveTo(220, 350, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            wrong.emptyBehaviorList();
        });

        setTimeout(function(){
            wrong.moveTo(220, 800, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
                wrong.emptyBehaviorList();
            });
        },2750);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, 250);

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time + 2750, 250);
        wrong.addBehavior(showAlphaBeh);
        wrong.addBehavior(hideAlphaBeh);
    }


    function showInfo()
    {
        transparent = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide17_transparent")).
            setLocation(0, 0);
        self.container.addChild(transparent);

        info = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide17_info")).
            setLocation(220, 800)
            .setAlpha(0);
        self.container.addChild(info);

        info.moveTo(220, 250, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            info.emptyBehaviorList();
        });

        setTimeout(function(){
            info.moveTo(220, 800, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
                info.emptyBehaviorList();
            });
        },5750);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, 250);

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time + 2750, 250);

        info.addBehavior(showAlphaBeh);
        info.addBehavior(hideAlphaBeh);
    }

}
Slide17.prototype = new Slide;