function Slide18() {
    var self = this;

    var man = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;

    var mirror1 = null;
    var mirror2 = null;
    var mirror3 = null;
    var mirror4 = null;
    var mirror5 = null;
    var mirror6 = null;
    var mirror7 = null;


    var count = null;

    var balloon = null;

    this.showFrame0 = function () {

        disableAllTransitions();

        count = 0;

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide18_man")).
            setLocation(-210, 180);
        self.container.addChild(man);

        man.moveTo(60, 180, 1000, 0 ,null, function() {});

        mirror1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide18_mirror1")).
            setLocation(340, 80)
            .setAlpha(0);
        self.container.addChild(mirror1);


        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time , 2500);

        mirror1.addBehavior(showAlphaBeh);

        timeout1 = setTimeout(function() {
            enableAllTransitions();

           addNext();


        },2500);


    };

    function addNext(){

        var buttonNextSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("gui_next_btn"), 1, 2).
            addAnimation("idle", [0], 300).
            addAnimation("over", [1], 300);
        btnNext = new CAAT.Actor().
            setBackgroundImage(buttonNextSprite).
            setLocation(700, 450).
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

                mirror2 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide18_mirror2")).
                    setLocation(340, 80)
                    .setAlpha(0);
                self.container.addChild(mirror2);


                var showAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(0, 1).
                    setFrameTime(scene.time , 1000);

                mirror2.addBehavior(showAlphaBeh);

                timeout2 = setTimeout(function() {
                    enableAllTransitions();
                },1000);

            }
            else if(count == 1)
            {
                count++;

                mirror3 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide18_mirror3")).
                    setLocation(340, 80)
                    .setAlpha(0);
                self.container.addChild(mirror3);


                var showAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(0, 1).
                    setFrameTime(scene.time , 1000);

                mirror3.addBehavior(showAlphaBeh);


                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },1000);

            }
            else if(count == 2)
            {
                count++;

                mirror4 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide18_mirror4")).
                    setLocation(340, 80)
                    .setAlpha(0);
                self.container.addChild(mirror4);


                var showAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(0, 1).
                    setFrameTime(scene.time , 1000);

                mirror4.addBehavior(showAlphaBeh);


                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },1000);

            }

            else if(count == 3)
            {
                count++;

                mirror5 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide18_mirror5")).
                    setLocation(340, 80)
                    .setAlpha(0);
                self.container.addChild(mirror5);


                var showAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(0, 1).
                    setFrameTime(scene.time , 1000);

                mirror5.addBehavior(showAlphaBeh);


                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },1000);

            }
            else if(count == 4)
            {
                count++;

                mirror6 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide18_mirror6")).
                    setLocation(340, 80)
                    .setAlpha(0);
                self.container.addChild(mirror6);


                var showAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(0, 1).
                    setFrameTime(scene.time , 1000);

                mirror6.addBehavior(showAlphaBeh);


                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },1000);

            }
            else if(count == 5)
            {
                count++;

                mirror7 = new CAAT.Actor().
                    setBackgroundImage(director.getImage("slide18_mirror7")).
                    setLocation(340, 80)
                    .setAlpha(0);
                self.container.addChild(mirror7);


                var showAlphaBeh = new CAAT.AlphaBehavior().
                    setValues(0, 1).
                    setFrameTime(scene.time , 1000);

                mirror7.addBehavior(showAlphaBeh);


                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },1000);

            }
            else if (count == 6)
            {
                self.container.removeChild(mirror2);
                self.container.removeChild(mirror3);
                self.container.removeChild(mirror4);
                self.container.removeChild(mirror5);
                self.container.removeChild(mirror6);
                count++;


                mirror1.moveTo(800, 80, 1000, 0 ,null, function() {});
                mirror7.moveTo(800, 80, 1000, 0 ,null, function() {});

                man.moveTo(200, 180, 1000, 0 ,null, function() {});

                balloon = new Balloon().
                    setSize(330, 130).          //установка ширины/высоты
                    setText("Мир не приносит ни добра, ни зла сам по себе. Все происходящее вокруг нас – всего лишь отражение наших собственных мыслей, чувств, желаний, поступков. <b>Мир – это большое зеркало</b>").       //задание текста в баллоне
                    setCoords(400, 85).        //установка координат правого верхнего угла
                    addTail(420, 270,440,460 ).          //добавление хвоста баллона с координатами острия
                    setLayer(self.container).
                    createBalloon(1000);

                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },2500);
            }
            else if (count == 7)
            {

                count++;

                balloon.changeText("Наша предвзятость, неоправданная раздражительность может вызвать ответную агрессию у наших покупателей");



                timeout3 = setTimeout(function() {
                    enableAllTransitions();
                },2500);
            }

            else
            {
                man.moveTo(800, 180, 2500, 0 ,null, function() {});

                balloon.destroyBalloon(500);
                self.container.removeChild(btnNext);

                timeout3 = setTimeout(function() {
                    appManager.showNextSlide();
                    enableAllTransitions();
                },2500);

            }
        };
    }

    function clickInfoPanelBtn() {
        appManager.showNextSlide();
    }
}
Slide18.prototype = new Slide;