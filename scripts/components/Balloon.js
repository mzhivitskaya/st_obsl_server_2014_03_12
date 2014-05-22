/**
 * @fileOverview    новый баллон для текстов. доработанный, измененный с хвостом и тд
 *
 * @copyright MediuM, Minsk
 * @author vadim savelev
 * @date 04.12.13
 * @time 15:37
 * @version 1.0.0
 *
 * @example
 *
 * создание и настройка баллона:
 *
 *      var balloon = new Balloon().
 *          setSize(350, 150).          //установка ширины/высоты
 *          setText("some text").       //задание текста в баллоне
 *          setCoords(200, 200).        //установка координат правого верхнего угла
 *          addTail(300, 425).          //добавление хвоста баллона с координатами острия
 *          addButton(clickButton).     //добавление кнопки. агрумент - коллбэк-функция
 *          createBalloon(1000);        //создание и проявление баллона на сцене (в аргументе время выполнения в мс. по умолчанию = 500мс)
 *
 * также можно использовать различные допметоды (в аргументе время выполнения метода в мс. по умолчанию = 500мс):
 *
 *      balloon.showBalloon(1000);      //показать баллон. если есть хвост и кнопка, то проявляет и их
 *      balloon.hideBalloon(1000);      //спрятать баллон. если есть хвост и кнопка, то прячет и их
 *      balloon.showTail(1000);         //показать хвост
 *      balloon.hideTail(1000);         //спрятать хвост
 *      balloon.showButton(1000);       //показать кнопку
 *      balloon.hideButton(1000);       //спрятать кнопку
 *
 * для уничтожения баллона и удаления его со сцены (в аргументе время выполнения метода в мс. по умолчанию = 500мс):
 *
 *      balloon.destroyBalloon(1000);
 */

/**
 * конструктор класса баллона
 * @constructor
 */
function Balloon() {
    var x = 200,                                    //координаты левого верхнего угла баллона
        y = 200,

        width = 400,                                //ширина баллона
        height = 200,                               //высота баллона

        radius = 15,                                //радиус закругления баллона

        text = "no text",                           //текст в баллоне

        backColor = "#cccccc",                      //цвет подложки
        txtColor = "#663333",                       //цвет текста

        layer = backLayer,                          //слой, в котором будет отрисован баллон. если слой отличен от backLayer, воспользуйтесь методом setLayer()

        container = new CAAT.ActorContainer(),      //отображаемые элементы баллона
        textLabel = null,
        tail = null,
        button = null,

        tailAnchor = 0,                             //якорь привязки хвоста баллона

    //флаги
        haveTail = false,                           //наличие хвоста
        haveButton = false;                         //наличие кнопки

    /**
     * установка координат левого верхнего угла баллона
     * @param xCoord {number}    координата x
     * @param yCoord {number}    координата y
     * @returns {Balloon}
     */
    this.setCoords = function(xCoord, yCoord) {
        x = xCoord;
        y = yCoord;

        return this;
    };

	/**
	 * установка слоя дял добавления в него ьаллона
	 * @param balloonLayer {object}  слой
	 * @returns {Balloon}
	 */
	this.setLayer = function(balloonLayer) {
		layer = balloonLayer;

		return this;
	};

    /**
     * установка размеров баллона
     * @param balloonWidth {number}    ширина
     * @param balloonHeight {number}   высота
     * @returns {Balloon}
     */
    this.setSize = function(balloonWidth, balloonHeight) {
        width = balloonWidth;
        height = balloonHeight;

        return this;
    };

    /**
     * установка текста в баллоне
     * @param balloonText {string} текст
     * @returns {Balloon}
     */
    this.setText = function(balloonText) {
        text = balloonText;

        return this;
    };

    /**
     * замена текста в баллоне
     * @param txt {string} новый текст
     * @returns {Balloon}
     */
    this.changeText = function(txt) {
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(textLabel.alpha, 0).
            setFrameTime(scene.time, 500);
        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time + 510, 500);

        this.setText(txt);
        textLabel.addBehavior(hideAlphaBeh);
        textLabel.addBehavior(showAlphaBeh);

        setTimeout(function() {
            textLabel.
                setText(txt, width - 50).
                setLocation((width - textLabel.documentWidth) / 2, (height - textLabel.documentHeight) / 2);
        }, 500);

        return this;
    };

    /**
     * добавление хвоста у баллона
     * если задана только точка острия хвоста, то координаты его основания выбираются автоматически
     * @param x0 {number}   координата x острия хвоста
     * @param y0 {number}   координата y острия хвоста
     * @param [x1] {number} координата x первой точки основания хвоста
     * @param [x2] {number} координата x второй точки основания хвоста
     * @returns {Balloon}
     */
    this.addTail = function(x0, y0, x1, x2) {
        var _x0 = 0;
        var _y0 = y0 - height - y;
        var _x1 = 0;
        var _y1 = 0;
        var _x2 = 0;
        var _y2 = 0;

        haveTail = true;

        if (typeof x1 == "undefined" || typeof x2 == "undefined") {
            if (x0 <= x + width / 2) {
                x1 = x0 + 20;
                x2 = x0 + 35;
            } else {
                x1 = x0 - 35;
                x2 = x0 - 15;
            }
        }

        _x0 = x0 - Math.min(x0, x1, x2);
        _x1 = Math.min(x1, x2) - Math.min(x0, x1, x2);
        _x2 = Math.min(x1, x2) - Math.min(x0, x1, x2) + Math.abs(x1 - x2);

        tail = new CAAT.ActorContainer().
            setBounds(0, 0, Math.abs(Math.min(_x0, _x1, _x2) - Math.max(_x0, _x1, _x2)), _y0).
            setAlpha(0);

        tail.paint = function (director, time) {
            var ctx = director.ctx;

            ctx.fillStyle = backColor;
            ctx.beginPath();
            ctx.moveTo(_x0, _y0);
            ctx.lineTo(_x1, _y1);
            ctx.lineTo(_x2, _y2);
            ctx.lineTo(_x0, _y0);
            ctx.closePath();
            ctx.fill();
        };

        container.addChild(tail.setLocation(Math.min(x0, x1, x2) - x, height));

        tailAnchor = (Math.min(_x1, _x2) + Math.abs(_x1 - _x2) / 2) / (tail.width);
        tail.setScaleAnchored(0, 0, tailAnchor, 0);

        return this;
    };

    /**
     * добавление кнопки
     * @param callback {function}   функция-колбэк
     * @returns {Balloon}
     */
    this.addButton = function(callback) {
        haveButton = true;

        var buttonImg = new CAAT.SpriteImage().
            initialize(director.getImage("gui_info_panel_btn"), 1, 2);
        button = new CAAT.Actor().
            setAsButton(buttonImg, 0, 1, 1, 0, function() {callback();}).
            setAlpha(0);
        button.mouseEnabled = false;

        container.addChild(button.setLocation(width - .8 * buttonImg.width, height - 1.2 * buttonImg.height));

        return this;
    };

    /**
     * проявление баллона
     * @param [time] {number}   время проявления. по умолчанию 500мс
     * @returns {Balloon}
     */
    this.showBalloon = function(time) {
        if (typeof time == "undefined") time = 500;

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(container.alpha, 1).
            setFrameTime(scene.time, time);
        var scaleBeh = new CAAT.Behavior.ScaleBehavior().
            setValues(container.scaleX, 1, container.scaleY, 1, .5, .5).
            setFrameTime(scene.time + time, time);
        var showAlphaBehText = new CAAT.AlphaBehavior().
            setValues(textLabel.alpha, 1).
            setFrameTime(scene.time + 2 * time, time);
        container.addBehavior(showAlphaBeh);
        container.addBehavior(scaleBeh);
        textLabel.addBehavior(showAlphaBehText);

        var self = this;
        if (haveTail) {
            setTimeout(function() {
                self.showTail(time);
            }, time);
        }

        if (haveButton) {
            setTimeout(function() {
                self.showButton(time);
            }, time);
        }

        return this;
    };

    /**
     * проявить хвост баллона
     * @param [time] {number}  время. оп умолчанию 500мс
     * @returns {Balloon}
     */
    this.showTail = function(time) {
        if (typeof time == "undefined") time = 500;

        tail.emptyBehaviorList();
        tail.setAlpha(1);

        var scaleBehTail = new CAAT.Behavior.ScaleBehavior().
            setValues(tail.scaleX, 1, tail.scaleY, 1, tailAnchor, 0).
            setFrameTime(scene.time + 2 * time, time);
        tail.addBehavior(scaleBehTail);

        return this;
    };

    /**
     * проявить кнопку
     * @param [time] {number}  время. оп умолчанию 500мс
     * @returns {Balloon}
     */
    this.showButton = function(time) {
        if (typeof time == "undefined") time = 500;

        button.emptyBehaviorList();

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(button.alpha, 1).
            setFrameTime(scene.time + time, time);
        button.addBehavior(showAlphaBeh);

        button.mouseEnabled = true;

        return this;
    };

    /**
     * исчезновение баллона
     * @param [time] {number}   время исчезновения. по умолчанию 500мс
     * @returns {Balloon}
     */
    this.hideBalloon = function(time) {
        if (typeof time == "undefined") time = 500;

        var hideAlphaBehText = new CAAT.AlphaBehavior().
            setValues(textLabel.alpha, 0).
            setFrameTime(scene.time, time);
        var scaleBeh = new CAAT.Behavior.ScaleBehavior().
            setValues(container.scaleX, .5, container.scaleY, .5, .5, .5).
            setFrameTime(scene.time + time, time);
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(container.alpha, 0).
            setFrameTime(scene.time + 2 * time, time);
        textLabel.addBehavior(hideAlphaBehText);
        container.addBehavior(scaleBeh);
        container.addBehavior(hideAlphaBeh);

        if (haveTail) {
            this.hideTail(time);
        }

        if (haveButton) {
            this.hideButton(time);
        }

        return this;
    };

    /**
     * спрятать хвост баллона
     * @param [time] {number}  время. по умолчанию 500мс
     * @returns {Balloon}
     */
    this.hideTail = function(time) {
        if (typeof time == "undefined") time = 500;

        tail.emptyBehaviorList();

        var scaleBehTail = new CAAT.Behavior.ScaleBehavior().
            setValues(tail.scaleX, 0, tail.scaleY, 0, tailAnchor, 0).
            setFrameTime(scene.time, time);
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(tail.alpha, 0).
            setFrameTime(scene.time + time, 0);
        tail.addBehavior(scaleBehTail);
        tail.addBehavior(hideAlphaBeh);

        return this;
    };

    /**
     * спрятать кнопку
     * @param [time] {number}  время. по умолчанию 500мс
     * @returns {Balloon}
     */
    this.hideButton = function(time) {
        if (typeof time == "undefined") time = 500;

        button.emptyBehaviorList();

        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(button.alpha, 0).
            setFrameTime(scene.time, time);
        button.addBehavior(hideAlphaBeh);

        button.mouseEnabled = false;

        return this;
    };

    /**
     * создание и отображение баллона
     * @param [time]  {number}  время проявления. по умолчанию 500мс
     * @returns {Balloon}
     */
    this.createBalloon = function(time) {
        if (typeof time == "undefined") time = 500;

        container.setBounds(0, 0, width, height).
            setGlobalAlpha(true).
            setAlpha(0);

        container.paint = function (director, time) {
            var ctx = director.ctx;

            ctx.fillStyle = backColor;

            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(width - radius, 0);
            ctx.quadraticCurveTo(width, 0, width, radius);
            ctx.lineTo(width, height - radius);
            ctx.quadraticCurveTo(width, height, width - radius, height);
            ctx.lineTo(radius, height);
            ctx.quadraticCurveTo(0, height, 0, height - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.fill();
        };

        textLabel = new CAAT.UI.Label().
            setBounds(0, 0, width - 50, height - 50).
            setStyle( "default",    {
                font        : "DINRoundPro",
                fontSize    : 17,
                fill        : txtColor,
                tabSize     : 0
            }).
            setText(text, width - 50).
            setAlpha(0);

        textLabel.mouseEnabled = false;
        textLabel.setLocation((width - textLabel.documentWidth) / 2, (height - textLabel.documentHeight) / 2);

        container.setLocation(x, y);
        container.addChild(textLabel);
        container.setScaleAnchored(.5, .5, .5, .5);
        layer.addChild(container);

        this.showBalloon(time);

        return this;
    };

    /**
     * уничтожение баллона
     * @param [time] {number}  время. по умолчанию 500мс
     */
    this.destroyBalloon = function(time) {
        if (typeof time == "undefined") time = 500;

        this.hideBalloon(time);

        setTimeout(function() {
            container.emptyBehaviorList();
            container.emptyChildren();
            layer.removeChild(container);

            return null;
        }, 3 * time);
    };
}