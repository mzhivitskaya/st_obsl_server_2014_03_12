function Slide19() {
    var self = this;

    var man = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;
    var timeout4 = null;

    var cloud1 = null;

    var cloud_count1 = null;
    var cloud_count2 = null;
    var cloud_count3 = null;
    var cloud_count4 = null;
    var cloud_count5 = null;

    var queen = null;
    var queen2 = null;

    var sign = null;

    var count = null;

    var balloon = null;


    this.showFrame0 = function () {
        disableAllTransitions();

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_man")).
            setLocation(800, 200);
        self.container.addChild(man);

        man.moveTo(560, 200, 1000, 0 ,null, function() {});

        queen = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_queen")).
            setLocation(-300, 190);
        self.container.addChild(queen);

       queen.moveTo(20, 190, 1000, 0 ,null, function() {});

        sign = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_sign")).
            setLocation(-100, 260);
        self.container.addChild(sign);

        sign.moveTo(220, 260, 1000, 0 ,null, function() {});

        cloud1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_cloud1")).
            setLocation(200, 80)
            .setAlpha(0);
        self.container.addChild(cloud1);

        cloud_count1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_cloud_count1")).
            setLocation(155, 100)
            .setAlpha(0);
        self.container.addChild(cloud_count1);

        cloud_count2 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_cloud_count2")).
            setLocation(155, 100)
            .setAlpha(0);
        self.container.addChild(cloud_count2);

        cloud_count3 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_cloud_count3")).
            setLocation(155, 100)
            .setAlpha(0);
        self.container.addChild(cloud_count3);

        cloud_count4 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_cloud_count4")).
            setLocation(155, 100)
            .setAlpha(0);
        self.container.addChild(cloud_count4);

        cloud_count5 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide19_cloud_count5")).
            setLocation(155, 100)
            .setAlpha(0);
        self.container.addChild(cloud_count5);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time + 1000 , 1000);

        cloud1.addBehavior(showAlphaBeh);


        timeout1 = setTimeout(function() {
            enableAllTransitions();

            balloon = new Balloon().
                setSize(250, 100).          //установка ширины/высоты
                setText("<b>Направленный конфликт</b> - это конфликт, который имеет <b>четкий предмет</b>").       //задание текста в баллоне
                setCoords(300, 420).        //установка координат правого верхнего угла
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
        },1000);

        var rotationBeh = new CAAT.Behavior.RotateBehavior().
            setFrameTime(scene.time + 2000, 500).
            setValues(0 * Math.PI / 180, -45 * Math.PI / 180,.5, .5);
       sign.addBehavior(rotationBeh);

        timeout1 = setTimeout(function() {

           self.container.removeChild(queen);

            queen2 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide19_queen2")).
                setLocation(20, 190);
            self.container.addChild(queen2);
        },2000);

        timeout3 = setTimeout(function() {

            man.moveTo(260, 200, 1000, 0 ,null, function() {});
            sign.moveTo(200, 260, 1000, 0 ,null, function() {});

            balloon = new Balloon().
                setSize(290, 400).          //установка ширины/высоты
                setText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;").       //задание текста в баллоне
                setCoords(490, 123).        //установка координат правого верхнего угла
                addButton(clickButton2).
                setLayer(self.container).
                createBalloon(1000);
            count =0;

        },2500);

        timeout4 = setTimeout(function() {

            enableAllTransitions();
        },5000);
    }

    function clickButton2() {

        disableAllTransitions();

        if (count == 0 )
        {
            count++;

            balloon.changeText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;<br>• внимательно выслушать;");



            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 1)
        {
            count++;

            balloon.changeText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;<br>• внимательно выслушать;<br>• повторить суть жалобы и убедиться, что вы поняли ее правильно;");

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count1.addBehavior(showAlphaBeh);

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 2)
        {
            count++;
            self.container.removeChild(cloud_count1);
            balloon.changeText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;<br>• внимательно выслушать;<br>• повторить суть жалобы и убедиться, что вы поняли ее правильно;<br>• извиниться;");

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count2.addBehavior(showAlphaBeh);

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else if (count == 3)
        {
            count++;

            self.container.removeChild(cloud_count2);

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count3.addBehavior(showAlphaBeh);

            balloon.changeText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;<br>• внимательно выслушать;<br>• повторить суть жалобы и убедиться, что вы поняли ее правильно;<br>• извиниться;<br>• согласиться с покупателем;");

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else if (count == 4)
        {
            count++;

            self.container.removeChild(cloud_count3);
            balloon.changeText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;<br>• внимательно выслушать;<br>• повторить суть жалобы и убедиться, что вы поняли ее правильно;<br>• извиниться;<br>• согласиться с покупателем;<br>• признать справедливость чувств, которые испытывает клиент;");

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count4.addBehavior(showAlphaBeh);

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else if (count == 5)
        {
            count++;


            self.container.removeChild(cloud_count4);
            balloon.changeText("<b>Алгоритм решения направленного конфликта:</b><br>• отвести покупателя в сторону;<br>• внимательно выслушать;<br>• повторить суть жалобы и убедиться, что вы поняли ее правильно;<br>• извиниться;<br>• согласиться с покупателем;<br>• признать справедливость чувств, которые испытывает клиент;<br>• по возможности, устранить источник недовольства  покупателя  в его присутствии, либо рассказать, что вы собираетесь предпринять, чтобы исправить ситуацию");

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 1000);

            cloud_count5.addBehavior(showAlphaBeh);

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else
        {
            count++;
            balloon.destroyBalloon(500);


            self.container.removeChild(cloud_count5);

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
Slide19.prototype = new Slide;