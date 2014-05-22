function Slide16() {
    var self = this;


    var man = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;

    var sign1 = null;
    var sign2 = null;
    var sign3 = null;
    var sign4 = null;
    var sign5 = null;
    var sign6 = null;

    var count = null;


    var infoTexts = [
        "under construction",
        "text"
    ];

    var balloon = null;

    var infoPanel = null;

    this.showFrame0 = function () {

        disableAllTransitions();

        count = 0;

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide16_man")).
            setLocation(1000, 220);
        self.container.addChild(man);

        man.moveTo(550, 220, 2500, 0 ,null, function() {});


        balloon = new Balloon().
                       setSize(330, 125).          //установка ширины/высоты
                       setText("Обращайтесь к покупателю на <br>«<b>Вы</b>», независимо от его возраста и социального положения (внешнего вида)").       //задание текста в баллоне
                       setCoords(440, 75).        //установка координат правого верхнего угла
                       addTail(560, 240,520,540 ).          //добавление хвоста баллона с координатами острия
                       addButton(clickButton).     //добавление кнопки. агрумент - коллбэк-функция
            setLayer(self.container).
            createBalloon(500);


        timeout1 = setTimeout(function() {
            enableAllTransitions();

            sign1 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide16_sign1")).
                setLocation(100, 200);
            self.container.addChild(sign1);

            var scaleBeh =  new CAAT.Behavior.ScaleBehavior().
                setValues(2,1,2,1,.5, .5).
                setFrameTime(scene.time, 1000);

            sign1.addBehavior(scaleBeh);

            sign1.moveTo(215, 115, 1000, 0 ,null, function() {});


        },2500);


    };

    function clickButton() {

        disableAllTransitions();

        if (count ==0 )
        {
            count++;

            sign2 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide16_sign2")).
                setLocation(100, 200);
            self.container.addChild(sign2);

            balloon.changeText("<b>Не торопите Покупателя</b> и не навязывайте ему своё мнение");

            var scaleBeh =  new CAAT.Behavior.ScaleBehavior().
                setValues(2,1,2,1,.5, .5).
                setFrameTime(scene.time, 1000);

            sign2.addBehavior(scaleBeh);

            sign2.moveTo(130, 256, 1000, 0 ,null, function() {});


            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 1)
        {
            count++;

            sign3 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide16_sign3")).
                setLocation(100, 200);
            self.container.addChild(sign3);

            balloon.changeText("Не забывайте о хорошем настроении!");


            var scaleBeh =  new CAAT.Behavior.ScaleBehavior().
                setValues(2,1,2,1,.5, .5).
                setFrameTime(scene.time, 1000);

            sign3.addBehavior(scaleBeh);

            sign3.moveTo(297, 256, 1000, 0 ,null, function() {});

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 2)
        {
            count++;

            sign4 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide16_sign4")).
                setLocation(100, 200);
            self.container.addChild(sign4);

            balloon.changeText("<b>Нельзя спорить</b> с Покупателем!");

            var scaleBeh =  new CAAT.Behavior.ScaleBehavior().
                setValues(2,1,2,1,.5, .5).
                setFrameTime(scene.time, 1000);

            sign4.addBehavior(scaleBeh);

            sign4.moveTo(45, 397, 1000, 0 ,null, function() {});


            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else if (count == 3)
        {
            count++;

            sign5 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide16_sign5")).
                setLocation(100, 200);
            self.container.addChild(sign5);

            balloon.changeText("Во время разговора <b>не используйте профессиональный сленг,</b> непонятный покупателю");

            var scaleBeh =  new CAAT.Behavior.ScaleBehavior().
                setValues(2,1,2,1,.5, .5).
                setFrameTime(scene.time, 1000);

            sign5.addBehavior(scaleBeh);

            sign5.moveTo(215, 397, 1000, 0 ,null, function() {});

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else if (count == 4)
        {
            count++;

            sign6 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide16_sign6")).
                setLocation(100, 200);
            self.container.addChild(sign6);

            balloon.changeText("Не обращайтесь к Покупателю с высокомерием и пренебрежением. Не проявляйте озлобленность, раздражительность, равнодушие к проблемам покупателя");

            var scaleBeh =  new CAAT.Behavior.ScaleBehavior().
                setValues(2,1,2,1,.5, .5).
                setFrameTime(scene.time, 1000);

            sign6.addBehavior(scaleBeh);

            sign6.moveTo(375, 397, 1000, 0 ,null, function() {});

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else
        {
            count++;

            balloon.destroyBalloon(1000);

            var hideAlphaBeh = new CAAT.AlphaBehavior().
                setValues(1, 0).
                setFrameTime(scene.time , 1000);

            sign1.addBehavior(hideAlphaBeh);
            sign2.addBehavior(hideAlphaBeh);
            sign3.addBehavior(hideAlphaBeh);
            sign4.addBehavior(hideAlphaBeh);
            sign5.addBehavior(hideAlphaBeh);
            sign6.addBehavior(hideAlphaBeh);

            man.moveTo(1000, 220, 2500, 0 ,null, function() {});


            timeout2 = setTimeout(function() {
                enableAllTransitions();
                appManager.showNextSlide();
            },2500);

        }
    }
}
Slide16.prototype = new Slide;