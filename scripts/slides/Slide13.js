/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide12
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide13() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;
    var timeout1 = null;
    var timeout3 = null;
    var btnNext = null;
var balloon = null;

  var infoTextsFrame0 = [
    "..."
  ];

  //--------------- frame 0 ---------------------//

  this.showFrame0 = function () {
    // ЗАПРЕТ НАЖАТИЯ ВСЕХ КНОПОК
    disableAllTransitions();

    // cache fonts
    infoPanel = new InfoPanel().startupInfoPanel(380, 149, infoTextsFrame0[self.infoNum], true, function(){});
    self.container.addChild(infoPanel.container.setLocation(209, 172));
    infoPanel.destroyInfoPanel();
    self.container.removeChild(infoPanel.container);

    items.text1 = new CAAT.UI.Label()
      .setBounds(0, 0, 200, 200)
      .setStyle( "default", {
        font        : "DINRoundPro",
        fontSize    : 16,
        fill        : "#663300",
        tabSize     : 0
      })
      .setText("Lorem ipsum dolores...", 272).setLocation(0, 0).setAlpha(0);
    self.container.addChild(items.text1);
    setTimeout(function() {
      self.container.removeChild(items.text1);
    },0);

    items.text2 = new CAAT.UI.Label()
      .setBounds(0, 0, 200, 200)
      .setStyle( "default", {
        font        : "DINRoundPro-Medium",
        fontSize    : 16,
        fill        : "#663300",
        tabSize     : 0
      })
      .setText("Lorem ipsum dolores...", 272).setLocation(0, 0).setAlpha(0);
    self.container.addChild(items.text2);
    setTimeout(function() {
      self.container.removeChild(items.text2);
    },0);

    items.text3 = new CAAT.UI.Label()
      .setBounds(0, 0, 200, 200)
      .setStyle( "default", {
        font        : "DINRoundPro-Light",
        fontSize    : 16,
        fill        : "#663300",
        tabSize     : 0
      })
      .setText("Lorem ipsum dolores...", 272).setLocation(0, 0).setAlpha(0);
    self.container.addChild(items.text3);
    setTimeout(function() {
      self.container.removeChild(items.text3);
    },0);

    setTimeout(function() {
      frame0step0();
    }, 500);

      timeout1 = setTimeout(function() {
          enableAllTransitions();

          var buttonNextSprite = new CAAT.Foundation.SpriteImage().
              initialize(director.getImage("gui_next_btn"), 1, 2).
              addAnimation("idle", [0], 300).
              addAnimation("over", [1], 300);
          btnNext = new CAAT.Actor().
              setBackgroundImage(buttonNextSprite).
              setLocation(700, 500).
              setRotationAnchored(90 * Math.PI / 180, .5, .5);
          self.container.addChild(btnNext);
          btnNext.playAnimation("idle");

          btnNext.mouseEnter = function() {
              document.body.style.cursor = "pointer";
              btnNext.playAnimation("over");
          };
          btnNext.mouseExit = function() {
              document.body.style.cursor = "default";
              btnNext.playAnimation("idle");
          };
          btnNext.mouseClick = function() {

              disableAllTransitions();

              self.container.removeChild(btnNext);
              balloon.destroyBalloon(500);
              items.men2.addBehavior(
                  new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
              );

              items.lights.addBehavior(
                  new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
              );

              items.green[0].addBehavior(
                  new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
              );

                  timeout3 = setTimeout(function() {
                      appManager.showNextSlide();
                      enableAllTransitions();
                  },1500);

          };
      },6500);
  };

  function frame0step0() {
    items = {};
    window.s13 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.men = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide13_men1"))
      .setLocation(268, 242)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men);

    items.men2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide13_men2"))
      .setLocation(268, 242)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men2);

    items.lights = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide13_lights"))
      .setLocation(566, 103)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.lights);

    items.green = self.createMultiActor({
      parent:items.background,
      x:629, y:225, w:46, h:45,
      images: ["slide13_green","slide13_gray"]
    });
    items.green[0].setAlpha(1);

    items.orange = self.createMultiActor({
      parent:items.background,
      x:629, y:140, w:46, h:45,
      images: ["slide13_orange","slide13_gray"]
    });
    items.orange[0].setAlpha(1);

    items.tip1 = self.createMultiActor({
      parent:items.background,
      x:30, y:112, w:207, h:107,
      images: ["slide13_tip1","slide13_tip1_text"]
    });
    items.tip1[0].setAlpha(1);

    items.textNext = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide13_textNext"))
      .setLocation(548, 484)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.textNext);
    frame0step1();
  }

  function frame0step1() {
    enableAllTransitions();
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.lights.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    for (var i = 1; i < 5; i++){
      items.orange[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000+(i*700), 500)
      );
    }
    items.orange[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+1000+(5*700), 500)
    );
    items.green[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000+(5*700), 500)
    );
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+1000+(5*700), 1)
    );
    items.men2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000+(5*700), 1)
    );
    self.sleep(1000+(5*700)+2000,frame0step2);
  }

  function frame0step2() {
      balloon = new Balloon().
          setSize(310, 140).          //установка ширины/высоты
          setText("Необходимо закончить общение с Покупателем <b>доброжелательной улыбкой</b> и, в зависимости от ситуации, сказать: «Спасибо!» или «Пожалуйста!»; «Приходите к нам еще!»").       //задание текста в баллоне
          setCoords(30,100).        //установка координат правого верхнего угла
          addTail(260, 320, 210,250).
          setLayer(self.container).
          createBalloon(500);

  }


  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide13.prototype = new Slide();