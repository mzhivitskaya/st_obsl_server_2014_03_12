/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 28.08.13
 * Time: 13:24
 *
 * Class InfoPanel
 */
function InfoPanel() {
    this.name = "info panel";
    var self = this;
    var width = 0;
    var height = 0;
    var text = "";
    var haveButton = false;
    var callback = null;
    var fontSize = 17;

    this.container = null;
    var txtLabel = null;
    var button = null;

    var backColor = "#cccccc";
    var txtColor = "#663333";
    var radius = 15;

    this.buttonShowed = false;

    /**
     * создает и отрисовывает серую инофрмационную панель
     *
     * @param w {Number}            ширина
     * @param h {Number}            высота
     * @param txt {String}          текст
     * @param haveBtn {Boolean}     флаг наличия кнопки на инфопанели
     * @param [callbck] {Function}  функция обратного вызова
     * @returns {InfoPanel}
     */
    this.startupInfoPanel = function (w, h, txt, haveBtn, callbck, fSize) {
        width = w;
        height = h;
        text = txt;
        haveButton = !!haveBtn;
        callback = callbck;
        fontSize = fSize ? fSize : 17;

        this.container = new CAAT.ActorContainer().
            setBounds(0, 0, width, height).
            setGlobalAlpha(true).
            setAlpha(0);

        createBack(this.container);
        createText(this.container);
        if (haveButton) createButton(this.container);

        return this;
    };

    function createBack(container) {
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
    }

    function createText(container) {
        txtLabel = new CAAT.UI.Label().
            setBounds(0, 0, width - 50, height - 50).
            setStyle( "default",    {
                font        : "DINRoundPro",
                fontSize    : fontSize,
                fill        : txtColor,
                tabSize     : 0
            }).
            setText(text, width - 50);

        txtLabel.mouseEnabled = false;

        container.addChild(txtLabel.setLocation((width - txtLabel.documentWidth) / 2, (height - 25 - txtLabel.documentHeight) / 2));
    }

    function createButton(container) {
        var buttonImg = new CAAT.SpriteImage().initialize(director.getImage("gui_info_panel_btn"), 1, 2);

        button = new CAAT.Actor().
            setAsButton(buttonImg, 0, 1, 1, 0, function(button) {callback();});
        container.addChild(button.setLocation(width - .8 * buttonImg.width, height - 1.2 * buttonImg.height));

        self.buttonShowed = true;
    }

    this.hideButton = function() {
        if (haveButton) {
            button.setAlpha(0);
            self.buttonShowed = false;
        }
    };

    this.showButton = function() {
        if (haveButton) {
            button.setAlpha(1);
            self.buttonShowed = true;
        }
    };

    this.setInfoText = function(txt) {
        txtLabel.setText(txt, width - 50);
        txtLabel.setLocation((width - txtLabel.documentWidth) / 2, (height - 25 - txtLabel.documentHeight) / 2);
    };

    this.showInfoPanel = function(t) {
        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, t);

        this.container.addBehavior(showAlphaBeh);
    };

    this.destroyInfoPanel = function() {
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time, 250);
        this.container.addBehavior(hideAlphaBeh);

        var obj = this;
        setTimeout(function() {obj.container.emptyChildren();}, 260);
    };
}
