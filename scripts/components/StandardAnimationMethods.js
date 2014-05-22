/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 08.10.13
 * Time: 14:10
 *
 * набор наиболее часто используемых составных (и не только) анимаций в курсах ДИКСИ
 * анимации используют методы фремворка CAAT
 * создано для ускорения программирования визуальных эффектов в слайдах
 */

/**
 * перемещение с отскоком
 * направление смещения определяется автоматически, поэтому всегда offset >= 0
 *
 * ВНИМАНИЕ: корректно работает только при прямолинейном перемещении горизонтально или вертикально!
 *
 * @param actor {Object}        объект для перемещеня
 * @param toX {Number}          координата x
 * @param toY {Number}          координата y
 * @param [offset] {Number}     смещение
 * @param [delay] {Number}      задержка
 * @param [time] {Number}       время движения в прямом направлении
 * @param [backTime] {Number}   время движения в обратном направлении
 */
function shakeMoveTo(actor, toX, toY, offset, delay, time, backTime) {
    if (typeof offset == "undefined") offset = 20;
    if (typeof delay == "undefined") delay = 250;
    if (typeof time == "undefined") time = 350;
    if (typeof backTime == "undefined") backTime = 150;

    var offsetX = 0;
    var offsetY = 0;

    if (actor.x > toX) offsetX = -offset;
    else if (actor.x < toX) offsetX = offset;

    if (actor.y > toY) offsetY = -offset;
    else if (actor.y < toY) offsetY = offset;

    actor.moveTo(toX + offsetX, toY + offsetY, time, delay, null, function() {
        actor.moveTo(toX, toY, backTime, 0, null, function() {
            actor.emptyBehaviorList();
        });
    });
}

/**
 * анимация "пузырькового" изменения масштаба
 * @param actor {Object}        объект для масштабирования
 * @param [scale] {Number}      верхняя величина масштаба
 * @param [delay] {Number}      задержка
 * @param [time] {Number}       время анимации
 * @param [anchorX] {Number}    якорь масштабирования по oX
 * @param [anchorY] {Number}    якорь масштабирования по oY
 */
function bubbleScale(actor, scale, delay, time, anchorX, anchorY) {
    if (typeof scale == "undefined") scale = 1.5;
    if (typeof delay == "undefined") delay = 0;
    if (typeof time == "undefined") time = 150;
    if (typeof anchorX == "undefined") anchorX = .5;
    if (typeof anchorY == "undefined") anchorY = .5;

    var startScaleX = actor.scaleX;
    var startScaleY = actor.scaleY;

    var scaleBeh0 = new CAAT.Behavior.ScaleBehavior().
        setValues(startScaleX, scale, startScaleY, scale , anchorX, anchorY).
        setFrameTime(scene.time + delay, time);
    var scaleBeh1 = new CAAT.Behavior.ScaleBehavior().
        setValues(scale, .9 * startScaleX, scale, .9 * startScaleY, anchorX, anchorY).
        setFrameTime(scene.time + delay + time, time);
    var scaleBeh2 = new CAAT.Behavior.ScaleBehavior().
        setValues(.9 * startScaleX, startScaleX, .9 * startScaleY, startScaleY , anchorX, anchorY).
        setFrameTime(scene.time + delay + 2 * time, time);

    actor.addBehavior(scaleBeh0);
    actor.addBehavior(scaleBeh1);
    actor.addBehavior(scaleBeh2);
}

/**
 * метод перемешивания массива
 *
 * @param [b]           условие перемешивания
 * @returns {Array}     перемешанный массив
 */
Array.prototype.shuffle = function(b) {
    var i = this.length, j, t;
    while( i )
    {
        j = Math.floor( ( i-- ) * Math.random() );
        t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
        this[i] = this[j];
        this[j] = t;
    }

    return this;
};

/**
 * разрешить все переходы (клики, наведения мыши и тд)
 */
function enableAllTransitions() {
    backLayer.mouseEnabled = true;
    //slideLayer.mouseEnabled = true;
    menu.enableMenuOpenBtn();
}

/**
 * запретить все переходы (клики, наведения мыши и тд)
 */
function disableAllTransitions() {
    backLayer.mouseEnabled = false;
    //slideLayer.mouseEnabled = false;
    menu.disableMenuOpenBtn();
}