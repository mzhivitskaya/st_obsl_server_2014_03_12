function Slide23() {
    var self = this;

    var man = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;
    var timeout4 = null;

    var king1 = null;
    var king2 = null;

    var sign = null;

    var count = null;

    var balloon = null;

    this.showFrame0 = function () {
        disableAllTransitions();

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide23_man")).
            setLocation(800, 220);
        self.container.addChild(man);

        man.moveTo(560, 220, 1000, 0 ,null, function() {});

        king1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide23_king1")).
            setLocation(-300, 170);
        self.container.addChild(king1);

        king1.moveTo(30, 170, 1000, 0 ,null, function() {});


        timeout1 = setTimeout(function() {
            enableAllTransitions();

            balloon = new Balloon().
                setSize(340, 150).          //установка ширины/высоты
                setText("При использовании стандартов обслуживания в своей повседневной работе вы сможете <b>удержать клиента</b> – самого важного человека в магазине. Ведь именно он <b>приносит доход</b>!").       //задание текста в баллоне
                setCoords(240, 100).        //установка координат правого верхнего угла
                addButton(clickButton).
                addTail(560, 300, 470, 510).
                setLayer(self.container).
                createBalloon(500);

        },1500);
    };

    function clickButton() {

        disableAllTransitions();

        balloon.destroyBalloon(500);

        timeout2 = setTimeout(function() {

            man.moveTo(220, 220, 1000, 0 ,null, function() {});
            king1.moveTo(90, 170, 1000, 0 ,null, function() {});

            sign = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide23_sign")).
                setLocation(210, 80).
                setAlpha(0);
            self.container.addChild(sign);

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time , 1000);

            sign.addBehavior(showAlphaBeh);

            var rotationBeh = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time + 1000, 10000).
                setValues(0 * Math.PI / 180,-360 * Math.PI / 180,.5, .5).
                setCycle(true);
            sign.addBehavior(rotationBeh);
        },1000);

        timeout1 = setTimeout(function() {

            self.container.removeChild(king1);

            king2 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide23_king2")).
                setLocation(90, 170);
            self.container.addChild(king2);

            self.container.setZOrder(king2, 0);
            self.container.setZOrder(man, 1);



        },2000);

        timeout3 = setTimeout(function() {

            balloon = new Balloon().
                setSize(270, 240).          //установка ширины/высоты
                setText("Один мудрый управленец рекомендовал своим сотрудникам следующее: «Думая о покупателе говорите себе: «<b>Я не могу без вас, вы не можете без меня!</b>» Эта цитата отражает точно взаимоотношения между сотрудниками магазина и покупателями").       //задание текста в баллоне
                setCoords(470, 100).        //установка координат правого верхнего угла
                addButton(clickButton2).
                setLayer(self.container).
                createBalloon(1000);

        },2500);

        timeout4 = setTimeout(function() {

            enableAllTransitions();
        },5000);
    }

    function clickButton2() {

        disableAllTransitions();

        balloon.destroyBalloon(500);

        man.moveTo(-290, 220, 1500, 0 ,null, function() {});
        king2.moveTo(-420, 170, 1500, 0 ,null, function() {});

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time , 1000);

        sign.addBehavior(hideAlphaBeh);

        timeout1 = setTimeout(function() {
            appManager.showNextSlide();
            enableAllTransitions();
        },2000);

    }
}
Slide23.prototype = new Slide;