function Slide6() {

    var self = this;
    var infoPanel = null;
    var items = {};
    var curStep = 0;
    var balloon = null;
    var count = null;
   // var manText = null;
    var man = null;
    var manTipBack = null;
    var smileMetrBack = null;
    var smile1 = null;
    var smile2 = null;
    var smile3 = null;
    var smileArrow = null;
    var timeout1 = null;
    var manText1 = null;
    var manText2 = null;
    var manText3 = null;
    var manText4 = null;
    var manText5 = null;
    var manText6 = null;
    var manText7 = null;
    var manText8 = null;

    this.showFrame0 = function () {
        disableAllTransitions();

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_man")).
            setLocation(80, 140).
            setAlpha(0);
        self.container.addChild(man);

        manTipBack = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_tip11")).
            setLocation(278, 96).
            setAlpha(0);
        self.container.addChild(manTipBack);

        manText1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text1")).
            setLocation(340, 130).
            setAlpha(0);
        self.container.addChild(manText1);

        manText2 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text2")).
            setLocation(308, 122).
            setAlpha(0);
        self.container.addChild(manText2);

        manText3 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text3")).
            setLocation(312, 130).
            setAlpha(0);
        self.container.addChild(manText3);

        manText4 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text4")).
            setLocation(330, 122).
            setAlpha(0);
        self.container.addChild(manText4);

        manText5 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text5")).
            setLocation(330, 122).
            setAlpha(0);
        self.container.addChild(manText5);

        manText6 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text6")).
            setLocation(320, 130).
            setAlpha(0);
        self.container.addChild(manText6);

        manText7 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text7")).
            setLocation(311, 122).
            setAlpha(0);
        self.container.addChild(manText7);

        manText8 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_text8")).
            setLocation(358, 130).
            setAlpha(0);
        self.container.addChild(manText8);

        smileMetrBack = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_smileMetr")).
            setLocation(346, 255).
            setAlpha(0);
        self.container.addChild(smileMetrBack);

        smile1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_smile1")).
            setLocation(373, 353).
            setAlpha(0);
        self.container.addChild(smile1);

        smile2 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_smile2")).
            setLocation(507, 266).
            setAlpha(0);
        self.container.addChild(smile2);

        smile3 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_smile3")).
            setLocation(641, 353).
            setAlpha(0);
        self.container.addChild(smile3);

        smileArrow = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide6_smileArrow")).
            setLocation(533, 344).
            setAlpha(0);
        self.container.addChild(smileArrow);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time , 500);

        man.addBehavior(showAlphaBeh);

        balloon = new Balloon().
            setSize(280, 120).          //установка ширины/высоты
            setText("Сотрудник при обслуживании покупателя на кассе обязательно должен полностью озвучивать Речевой модуль кассира").       //задание текста в баллоне
            setCoords(300, 100).        //установка координат правого верхнего угла
            addTail(340, 250,370,395 ).          //добавление хвоста баллона с координатами острия
            setLayer(self.container).
            createBalloon(500);


        self.sleep(6500, frame0step1);
    };

    function  frame0step1() {
        balloon.destroyBalloon(500);
        count = 0;

        timeout1 = setTimeout(function() {

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time , 500);

            var showAlphaBeh0 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +500, 0);

            var rotationBeh = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time + 400, 0).
                setValues(0, -Math.PI/2, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh);

            manTipBack.addBehavior(showAlphaBeh);
            smileMetrBack.addBehavior(showAlphaBeh);
            smile1.addBehavior(showAlphaBeh);
            smile2.addBehavior(showAlphaBeh);
            smile3.addBehavior(showAlphaBeh);
            smileArrow.addBehavior(showAlphaBeh0);

            var showAlphaBeh2 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 500);
            manText1.addBehavior(showAlphaBeh2);

            timeout1 = setTimeout(function() {
                enableAllTransitions();

                bubbleScale(smile1,1.2, 0, 200,.5,.5);

                balloon = new Balloon().
                    setSize(394, 110).          //установка ширины/высоты
                    setText("Начать общение с покупателем необходимо доброжелательной улыбкой и приветствием").       //задание текста в баллоне
                    setCoords(346, 429).        //установка координат правого верхнего угла
                    setLayer(self.container).
                    addButton(clickButton).
                    createBalloon(0);
                },500);



        },1500);


    }
    function clickButton() {
        disableAllTransitions();

        if(count == 0 ){
            count++;
            balloon.changeText("Предложить покупателю выложить товар для сканирования, если он еще этого не сделал");

            self.container.removeChild(manText1);

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText2.addBehavior(showAlphaBeh);

            var rotationBeh0 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues( -Math.PI/2, -65 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh0);

            var   timeout1 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        } else if(count == 1 ){
            count++;
            balloon.changeText("Доброжелательно предложить пакет для упаковки:");

            self.container.removeChild(manText2);

            var showAlphaBeh2 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText3.addBehavior(showAlphaBeh2);

            var rotationBeh1 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues( -65 * Math.PI / 180 , -40 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh1);

            var   timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        } else if(count == 2 ){
            count++;
            balloon.changeText("· если покупатель <b>уже взял пакет</b>, то предложение 'Вам ещё пакет нужен?' уточняет достаточно ли покупателю тех пакетов, которые он уже взял самостоятельно;");

            var   timeoutA = setTimeout(function() {
                enableAllTransitions();
            },2000);

        }else  if(count == 3 ){
            count++;

            balloon.changeText("· если покупатель <b>ещё не взял пакет</b>, то предложение 'Вам ещё пакет нужен?' уточняет  нужен ли покупателю  пакет для упаковки выбранных товаров");

            var   timeoutB = setTimeout(function() {
                enableAllTransitions();
            },2000);

        }else if(count == 4 ){
            count++;

            balloon.changeText("Предложить покупателю купить товар по<br>акции");
            self.container.removeChild(manText3);

            var showAlphaBeh3 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText4.addBehavior(showAlphaBeh3);

            var rotationBeh2 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues( -40 * Math.PI / 180 , -15 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh2);

            var   timeout3 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        } else if(count == 5 ){
            count++;
            balloon.changeText("Четко озвучить покупателю итоговую сумму покупки");
            self.container.removeChild(manText4);

            var showAlphaBeh4 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText5.addBehavior(showAlphaBeh4);

            var rotationBeh3 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues( -15 * Math.PI / 180 , 10 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh3);

            bubbleScale(smile2, 1.2, 100, 200,.5,.5);

            var   timeout4 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        } else if(count == 6 ){
            count++;
            balloon.changeText("Пересчитать полученные от покупателя деньги, держа их у него на виду. Четко назвать полученную сумму");

            self.container.removeChild(manText5);

            var showAlphaBeh6 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText6.addBehavior(showAlphaBeh6);

            var rotationBeh4 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues(10 * Math.PI / 180 , 35 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh4);

            var   timeout5 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        } else if(count == 7 ){
            count++;
            balloon.changeText("Проговорить сумму сдачи, передать сдачу покупателю одновременно с погашенным чеком");
            self.container.removeChild(manText6);

            var showAlphaBeh7 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText7.addBehavior(showAlphaBeh7);

            var rotationBeh5 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues(35 * Math.PI / 180 , 60 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh5);

            var   timeout6 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        } else if(count == 8 ){
            count++;
            balloon.changeText("Завершить обслуживание улыбкой и выражением благодарности за  покупку");

            self.container.removeChild(manText7);

            var showAlphaBeh8 = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time +200 , 500);
            manText8.addBehavior(showAlphaBeh8);

            var rotationBeh6 = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time , 500).
                setValues(60 * Math.PI / 180 , 90 * Math.PI / 180, 0.5, 0.9);
            smileArrow.addBehavior(rotationBeh6);

            bubbleScale(smile3, 1.2, 200, 200,.5,.5);

            var   timeout7 = setTimeout(function() {
                enableAllTransitions();
            },1000);

        }else if(count == 9 ){
            count++;
            balloon.destroyBalloon(0);

            self.container.removeChild(manText8);

            var hideAlphaBeh8 = new CAAT.AlphaBehavior().
                setValues(1, 0).
                setFrameTime(scene.time , 1000);
            manText8.addBehavior(showAlphaBeh8);


            man.addBehavior(hideAlphaBeh8);
            manTipBack.addBehavior(hideAlphaBeh8);
            smile1.addBehavior(hideAlphaBeh8);
            smile2.addBehavior(hideAlphaBeh8);
            smile3.addBehavior(hideAlphaBeh8);
            smileArrow.addBehavior(hideAlphaBeh8);
            smileMetrBack.addBehavior(hideAlphaBeh8);


            var   timeout8 = setTimeout(function() {
                enableAllTransitions();
                appManager.showNextSlide();
            },1000);

        }


            }

}
Slide6.prototype = new Slide;