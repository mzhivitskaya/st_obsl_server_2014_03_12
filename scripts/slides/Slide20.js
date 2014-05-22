function Slide20() {
    var self = this;

    var man = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;
    var timeout4 = null;

    var cloud1 = null;

    var queen = null;
    var queen2 = null;
    var cloud_count1 = null;
    var cloud_count0 = null;

    var sign = null;

    var count = null;

    var balloon = null;

    this.showFrame0 = function () {


        disableAllTransitions();

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide20_man")).
            setLocation(800, 200);
        self.container.addChild(man);

        man.moveTo(560, 200, 1000, 0 ,null, function() {});

        queen = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide20_queen")).
            setLocation(-300, 190);
        self.container.addChild(queen);

        queen.moveTo(20, 190, 1000, 0 ,null, function() {});

        cloud1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide20_cloud1")).
            setLocation(200, 80)
            .setAlpha(0);
        self.container.addChild(cloud1);

        cloud_count1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide20_cloud_count1")).
            setLocation(125, 80)
            .setAlpha(0);
        self.container.addChild(cloud_count1);

        cloud_count0 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide20_cloud_count0")).
            setLocation(155, 100)
            .setAlpha(0);
        self.container.addChild(cloud_count0);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time + 1000 , 1000);

        cloud1.addBehavior(showAlphaBeh);


        timeout1 = setTimeout(function() {
            enableAllTransitions();

            balloon = new Balloon().
                setSize(310, 150).          //установка ширины/высоты
                setText("<b>Ненаправленный конфликт</b> – конфликт, который <b>не имеет предмета</b>.<br>Персонал должен внимательно выслушать Покупателя, не перебивая его").       //задание текста в баллоне
                setCoords(255, 385).        //установка координат правого верхнего угла
                addButton(clickButton).
                setLayer(self.container).
                createBalloon(1000);

        },2500);

    };
    function clickButton() {
        disableAllTransitions();

        balloon.destroyBalloon(500);

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time , 1000);

        cloud1.addBehavior(hideAlphaBeh);

        timeout2 = setTimeout(function() {

            man.moveTo(280, 200, 1000, 0 ,null, function() {});

            sign = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide20_sign")).
                setLocation(500, 240);
            self.container.addChild(sign);

            sign.moveTo(220, 240, 1000, 0 ,null, function() {});

        },1000);

        timeout1 = setTimeout(function() {

            self.container.removeChild(queen);

            queen2 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide20_queen2")).
                setLocation(20, 190);
            self.container.addChild(queen2);


        },2000);

        timeout3 = setTimeout(function() {

            man.moveTo(260, 200, 1000, 0 ,null, function() {});
            sign.moveTo(200, 240, 1000, 0 ,null, function() {});

            balloon = new Balloon().
                setSize(270, 260).          //установка ширины/высоты
                setText("<b>Решение ненаправленного конфликта.</b><br>Необходимо:<br>• не вступать с покупателем в дискуссию;").       //задание текста в баллоне
                setCoords(500, 180).        //установка координат правого верхнего угла
                addButton(clickButton2).
                setLayer(self.container).
                createBalloon(1000);
            count = 0;
        },2500);

        timeout4 = setTimeout(function() {

            enableAllTransitions();
        },5000);
    }


    function clickButton2() {

        disableAllTransitions();

        if (count ==0 )
        {
            count++;


            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count0.addBehavior(showAlphaBeh);

        balloon.changeText("<b>Решение ненаправленного конфликта.</b><br>Необходимо:<br>• не вступать с покупателем в дискуссию;<br>• дать ему возможность выговориться;");


            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 1)
        {
            count++;
            self.container.removeChild(cloud_count0);
            balloon.changeText("<b>Решение ненаправленного конфликта.</b><br>Необходимо:<br>• не вступать с покупателем в дискуссию;<br>• дать ему возможность выговориться;<br>• сообщить, что его предложения и замечания, обязательно будут учтены");


            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count1.addBehavior(showAlphaBeh);

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else
        {
            balloon.destroyBalloon(500);
            self.container.removeChild(cloud_count1);
            man.moveTo(-300, 200, 1500, 0 ,null, function() {});
            sign.moveTo(-360, 260, 1500, 0 ,null, function() {});

            queen2.moveTo(-540, 190, 1500, 0 ,null, function() {});

            timeout1 = setTimeout(function() {
                appManager.showNextSlide();
                enableAllTransitions();
            },2000);
        }
    }

}
Slide20.prototype = new Slide;