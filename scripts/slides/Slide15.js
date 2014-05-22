function Slide15() {
    var self = this;


    var man = null;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;

    var carriage1 = null;
    var carriage2 = null;
    var carriage3 = null;
    var carriage4 = null;
    var carriage5 = null;

    var cloud1 = null;
    var cloud2 = null;
    var cloud3 = null;

    var count = null;
    var infoPanel = null;

    var balloon = null;

    var infoTexts = [
        "<b>Ошибки сотрудников магазина:</b><br> •	оправдываются;",
        "<b>Ошибки сотрудников магазина:</b><br> •	оправдываются;<br>•	проявляют безразличие, игнорируют  покупателя;",
        "<b>Ошибки сотрудников магазина:</b><br> •	оправдываются;<br>•	проявляют безразличие, игнорируют  покупателя;<br>•	не выслушав претензию покупателя, предлагают решение проблемы;",
        "<b>Ошибки сотрудников магазина:</b><br> •	оправдываются;<br>•	проявляют безразличие, игнорируют  покупателя;<br>•	не выслушав претензию покупателя, предлагают решение проблемы;<br>•	спорят с покупателем, грубят ему"
    ];

    this.showFrame0 = function () {

        disableAllTransitions();

        count = 0;

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide15_man")).
            setLocation(1000, 100);
        self.container.addChild(man);

        man.moveTo(500, 100, 2500, 0 ,null, function() {});

        carriage1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide15_carriage1")).
            setLocation(810, 280);
        self.container.addChild(carriage1);

        carriage1.moveTo(310, 280, 2500, 0 ,null, function() {});


        timeout1 = setTimeout(function() {
            enableAllTransitions();

            cloud1 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_cloud1")).
                setLocation(275, 125);
            self.container.addChild(cloud1);

            balloon = new Balloon().
                setSize(260, 260).          //установка ширины/высоты
                setText( "<b>Ошибки сотрудников магазина:</b><br>•	оправдываются;").       //задание текста в баллоне
                setCoords(25, 270).        //установка координат правого верхнего угла
                addButton(clickButton).     //добавление кнопки. агрумент - коллбэк-функция
                setLayer(self.container).
                createBalloon(500);



        },2500);
    };

    function clickButton() {
        disableAllTransitions();
        if (count ==0 )
        {
            count++;
            self.container.removeChild(carriage1);
            self.container.removeChild(cloud1);

            carriage2 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_carriage2")).
                setLocation(320, 280);
            self.container.addChild(carriage2);

            balloon.changeText( "<b>Ошибки сотрудников магазина:</b><br>•	оправдываются;<br>•	проявляют безразличие, игнорируют  покупателя;");

            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 1)
        {
            count++;
            self.container.removeChild(carriage2);

            carriage3 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_carriage3")).
                setLocation(310, 280);
            self.container.addChild(carriage3);

            balloon.changeText( "<b>Ошибки сотрудников магазина:</b><br>•	оправдываются;<br>•	проявляют безразличие, игнорируют  покупателя;<br>•	не выслушав претензию покупателя, предлагают решение проблемы;");
            cloud2 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_cloud2")).
                setLocation(275, 125);
            self.container.addChild(cloud2);



            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else   if (count == 2)
        {
            count++;
            self.container.removeChild(carriage3);
            self.container.removeChild(cloud2);

            carriage4 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_carriage4")).
                setLocation(300, 280);
            self.container.addChild(carriage4);

            cloud3 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_cloud3")).
                setLocation(275, 125);
            self.container.addChild(cloud3);

            balloon.changeText( "<b>Ошибки сотрудников магазина:</b><br>•	оправдываются;<br>•	проявляют безразличие, игнорируют  покупателя;<br>•	не выслушав претензию покупателя, предлагают решение проблемы;<br>•	спорят с покупателем, грубят ему");


            timeout2 = setTimeout(function() {
                enableAllTransitions();
            },1000);
        }
        else
        {
            count++;
            balloon.destroyBalloon(1000);
            self.container.removeChild(carriage4);
            self.container.removeChild(cloud3);

            carriage5 = new CAAT.Actor().
                setBackgroundImage(director.getImage("slide15_carriage5")).
                setLocation(320, 360);
            self.container.addChild(carriage5);

            carriage5.moveTo( 320, 280, 500, 0 ,null, function() {});

            timeout3 = setTimeout(function() {

                man.moveTo(1000, 100, 2500, 0 ,null, function() {});
                carriage5.moveTo(810, 280, 2500, 0 ,null, function() {});

            },500);




            timeout2 = setTimeout(function() {
                enableAllTransitions();
                appManager.showNextSlide();
            },2500);

        }
    }
}
Slide15.prototype = new Slide;