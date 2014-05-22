/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 28.08.13
 * Time: 13:24
 *
 * Class TestInfoPanel
 */
function TestInfoPanel() {
  this.name = "info panel";
  this._width = 0;
  this._height = 0;
  this._text = "";
  this._haveButton = false;
  this._callback = null;

  this.container = null;
  this.txtLabel = null;
//  var button = null;

//  var backColor = "#cccccc";
  this._txtColor = "#663300";
//  var radius = 15;

  this._buttonShowed = false;
  this.tip1 = null;

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
  this.startupInfoPanel = function (w, h, txt, haveBtn, callbck) {
    this._width = w;
    this._height = h;
    this._text = txt;
    this._haveButton = haveBtn;
    this._callback = callbck;

    this.container = new CAAT.ActorContainer().
      setBounds(0, 0, this._width, this._height).
      setGlobalAlpha(true).
      setAlpha(0);

    this._createBack(this.container);
    this._createText(this.container);
//    if (haveButton) createButton(this.container);

    return this;
  };

  this._createBack = function(container) {
    this.tip1 = new NewUglyTip({
      images: ["test_tip_1"],
      parent: this.container,
      x:0, y:40, w:244, h:206
    });
//    this.container
//        container.paint = function (director, time) {
//            var ctx = director.ctx;
//
//            ctx.fillStyle = backColor;
//
//            ctx.beginPath();
//            ctx.moveTo(radius, 0);
//            ctx.lineTo(width - radius, 0);
//            ctx.quadraticCurveTo(width, 0, width, radius);
//            ctx.lineTo(width, height - radius);
//            ctx.quadraticCurveTo(width, height, width - radius, height);
//            ctx.lineTo(radius, height);
//            ctx.quadraticCurveTo(0, height, 0, height - radius);
//            ctx.lineTo(0, radius);
//            ctx.quadraticCurveTo(0, 0, radius, 0);
//            ctx.closePath();
//            ctx.fill();
//        };
  };

  this._createText = function(container) {
    this.txtLabel = new CAAT.UI.Label()
//      .setBounds(0, 0, this._width - 110, this._height - 50)
      .setBounds(0, 0, 164, 93)
      .setStyle( "default",    {
        font        : "DINRoundPro",
        fontSize    : 17,
        fill        : this._txtColor,
        tabSize     : 0
      })
      .setText(this._text, 140)
      .setAlpha(0);
    this.txtLabel.mouseEnabled = false;

    this.txtLabel.setLocation(
      (164 - this.txtLabel.documentWidth) / 2 + 22,
      (93 - this.txtLabel.documentHeight) / 2 + 34);
    container.addChild(this.txtLabel);
  };

//  function createButton(container) {
//    var buttonImg = new CAAT.SpriteImage().initialize(director.getImage("gui_info_panel_btn"), 1, 2);
//
//    button = new CAAT.Actor().
//      setAsButton(buttonImg, 0, 1, 1, 0, function(button) {callback();});
//    container.addChild(button.setLocation(width - .8 * buttonImg.width, height - 1.2 * buttonImg.height));
//
//    self.buttonShowed = true;
//  }

//  this.hideButton = function() {
//    if (haveButton) {
//      button.setAlpha(0);
//      self.buttonShowed = false;
//    }
//  };

//  this.showButton = function() {
//    if (haveButton) {
//      button.setAlpha(1);
//      self.buttonShowed = true;
//    }
//  };

  this.setInfoText = function(txt) {
//    this.txtLabel.setText(txt, this._width - 50);
//    this.txtLabel.setLocation((this._width - this.txtLabel.documentWidth) / 2, (this._height - 25 - this.txtLabel.documentHeight) / 2);
    this.txtLabel.setText(txt, 140);
    this.txtLabel.setLocation(
      (164 - this.txtLabel.documentWidth) / 2 + 22,
      (93 - this.txtLabel.documentHeight) / 2 + 34);
  };

  this.showInfoPanel = function(t) {
    var that = this;
    this.tip1.Show(function() {
      that.txtLabel.addBehavior(new CAAT.AlphaBehavior()
        .setValues(0, 1)
        .setFrameTime(scene.time, t)
      );
    });

    this.container.setAlpha(1);
  };

  this.destroyInfoPanel = function() {
    this.container.addBehavior(new CAAT.AlphaBehavior()
      .setValues(1, 0)
      .setFrameTime(scene.time, 250)
    );

    var that = this;
    setTimeout(function() {
      that.tip1.Remove();
      that.container.emptyChildren();}, 260);
  };
}
