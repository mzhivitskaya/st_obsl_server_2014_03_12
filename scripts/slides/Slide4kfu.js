/**
 * Created by NotePad on 21.02.14.
 */
function Slide4kfu() {
    var self = this;
    var balloon = null;
    var count = null;
    var man = null;
    var stairs = null;
    var um = null;
    var um2 = null;
    var cup = null;

    this.showFrame0 = function () {

        disableAllTransitions();

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide4kfu_man")).
            setLocation(470, 150).
            setAlpha(0);
        self.container.addChild(man);

        stairs = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide4kfu_stairs")).
            setLocation(270, 600);
        self.container.addChild(stairs);

        um = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide4kfu_um")).
            setLocation(-150, 390);
        self.container.addChild(um);

        um2 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide4kfu_um2")).
            setLocation(654, 85).
            setAlpha(0);
        self.container.addChild(um2);

        cup = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide4kfu_cup")).
            setLocation(700, 180).
            setAlpha(0);
        self.container.addChild(cup);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time , 500);

        man.addBehavior(showAlphaBeh);

        balloon = new Balloon().
            setSize(430, 130).          //установка ширины/высоты
            setText("<b>Ключевые Факторы Успеха</b> – это приоритеты в ежедневной работе. Это элементы нашей жизни или работы, которым следует уделять особое и постоянное внимание, добиваясь в них максимальных результатов. КФУ для каждой должности свои").       //задание текста в баллоне
            setCoords(30, 100).        //установка координат правого верхнего угла
            addTail(450, 270,360,385 ).          //добавление хвоста баллона с координатами острия
            setLayer(self.container).
            addButton(clickBtn).
            createBalloon(500);
        count = 0;

        var   timeout00 = setTimeout(function() {
            enableAllTransitions();
        },4000);

    };

    function clickBtn() {
       disableAllTransitions();
        if(count == 0){

            count++;
            balloon.changeText("Для примера рассмотрим Ключевые Факторы Успеха <b>Управляющего Магазина</b>");

            var   timeout0 = setTimeout(function() {
                enableAllTransitions();
            },2000);

        } else if(count == 1){

            balloon.destroyBalloon(500);

            man.moveTo(870, 150, 700, 0 , null);

            var   timeoutSt = setTimeout(function() {
                stairs.moveTo(270, 250, 1000, 0 , null);
            },800);

            var   timeoutUm = setTimeout(function() {
                um.moveTo(100, 390, 600, 0 , null);
            },2000);

            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 2600 , 500);
            cup.addBehavior(showAlphaBeh);

            var   timeoutB = setTimeout(function() {
                balloon = new Balloon().
                    setSize(330, 130).          //установка ширины/высоты
                    setText("Команда набрана, обучена и выполняет поставленные УМ задачи. Все сотрудники соблюдают стандарты ДИКСИ").       //задание текста в баллоне
                    setCoords(30, 100).        //установка координат правого верхнего угла
                    setLayer(self.container).
                    addButton(clickBtn2).
                    createBalloon(500);
            },3100);

            count = 0;

            var   timeout1 = setTimeout(function() {
                enableAllTransitions();
            },4000);
        }
    }

    function clickBtn2(){
        disableAllTransitions();

        if(count == 0){
            count++;
            balloon.changeText("Покупателю оказывается высокий сервис всеми сотрудниками");

            var path = new CAAT.Path().
                beginPath(100, 390).
                addQuadricTo(190, 180, 280, 345, 'blue').
                // addQuadricTo(263, 100, 128, 140, 'blue').
                endPath();
            var pathBeh = new CAAT.PathBehavior().
                setPath(path).
                setFrameTime(scene.time+ 500, 1000);
            um.addBehavior(pathBeh);

            var   timeout0 = setTimeout(function() {
                enableAllTransitions();
            },2000);
        } else if (count == 1){

            count++;
            balloon.changeText("УМ раскрывает потенциал сотрудников, развивает Таланты, способствует карьерному росту");

            var path2 = new CAAT.Path().
                beginPath(280, 345).
                addQuadricTo(330, 115, 380, 280, 'blue').
                // addQuadricTo(263, 100, 128, 140, 'blue').
                endPath();
            var pathBeh2 = new CAAT.PathBehavior().
                setPath(path2).
                setFrameTime(scene.time+ 500, 1000);
            um.addBehavior(pathBeh2);

            var   timeout1 = setTimeout(function() {
                enableAllTransitions();
            },2000);

        } else if (count == 2){

            count++;
            balloon.changeText("В магазине корректные остатки, оптимальные запасы для бесперебойных продаж, осуществляются меры по предотвращению потерь");

            var path3 = new CAAT.Path().
                beginPath(380, 280).
                addQuadricTo(430, 50, 480, 215, 'blue').
                // addQuadricTo(263, 100, 128, 140, 'blue').
                endPath();
            var pathBeh3 = new CAAT.PathBehavior().
                setPath(path3).
                setFrameTime(scene.time+ 500, 1000);
            um.addBehavior(pathBeh3);

            var   timeout3 = setTimeout(function() {
                enableAllTransitions();
            },2000);

        }else if (count == 3){

            count++;
            balloon.changeText("УМ реализует задачи согласно распорядкам дня, недели, месяца");

            var path4 = new CAAT.Path().
                beginPath(480, 215).
                addQuadricTo(530,-15, 580, 150, 'blue').
                // addQuadricTo(263, 100, 128, 140, 'blue').
                endPath();
            var pathBeh4 = new CAAT.PathBehavior().
                setPath(path4).
                setFrameTime(scene.time+ 500, 1000);
            um.addBehavior(pathBeh4);

            var   timeout4 = setTimeout(function() {
                enableAllTransitions();
            },2000);

        }else if (count == 4){

            count++;
            var path5 = new CAAT.Path().
                beginPath(580, 150).
                addQuadricTo(630,-80, 680, 85, 'blue').
                // addQuadricTo(263, 100, 128, 140, 'blue').
                endPath();
            var pathBeh5 = new CAAT.PathBehavior().
                setPath(path5).
                setFrameTime(scene.time+ 500, 1000);
            um.addBehavior(pathBeh5);


            var  timeoutChangeUm = setTimeout(function() {
                um2.setAlpha(1);
                um.setAlpha(0);
            },1650);

            var rotationBeh = new CAAT.Behavior.RotateBehavior().
                setFrameTime(scene.time + 1500, 500).
                setValues(0, -38 * Math.PI / 180, -1, 1);
            cup.addBehavior(rotationBeh);


            var   timeoutHide = setTimeout(function() {
                balloon.destroyBalloon(500);
                um2.moveTo(800, 85, 500, 0 , null);
                cup.moveTo(846, 180, 500, 0 , null);
            },2500);

            var hideAlphaBeh = new CAAT.AlphaBehavior().
                setValues(1, 0).
                setFrameTime(scene.time + 2500 , 500);
            stairs.addBehavior(hideAlphaBeh);

            var   timeout5 = setTimeout(function() {
                enableAllTransitions();
                appManager.showNextSlide();
            },3300);

        }


    }
}
Slide4kfu.prototype = new Slide;
