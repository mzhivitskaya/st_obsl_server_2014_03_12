/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide7
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide7() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;
  var flashInt = 0;

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
  };

  function frame0step0() {
    items = {};
    window.s7 = items;
    infoPanel = null;
    if(flashInt) {
      clearInterval(flashInt);
      flashInt = 0;
    }

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.man = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_man"))
      .setLocation(254, 137)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.man);

    items.kassa = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_kassa"))
      .setLocation(383, 219)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.kassa);


    items.semafor = new CAAT.ActorContainer()
      .setBounds(0, 0, 143, 212)
      .setLocation(547, 102)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.semafor);
    items.semaforBack = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_semafor"))
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.semafor.addChild(items.semaforBack);

    items.semaforGreen2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_semaforGreen2"))
      .setLocation(53, 101)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.semafor.addChild(items.semaforGreen2);
    items.semaforGreen1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_semaforGreen1"))
      .setLocation(53, 101)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.semafor.addChild(items.semaforGreen1);

    items.semaforRed2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_semaforRed2"))
      .setLocation(53, 30)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.semafor.addChild(items.semaforRed2);
    items.semaforRed1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_semaforRed1"))
      .setLocation(53, 30)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.semafor.addChild(items.semaforRed1);



    items.lenta = new CAAT.ActorContainer()
      .setBounds(0, 0, 143, 212)
      .setLocation(103, 321)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.lenta);
    items.lentaBack = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_lenta"))
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.lenta.addChild(items.lentaBack);

    items.lentaWheelL = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_lentaWheelL"))
      .setLocation(48, 50)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.lenta.addChild(items.lentaWheelL);
    items.lentaWheelR = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_lentaWheelR"))
      .setLocation(546, 50)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.lenta.addChild(items.lentaWheelR);



    items.apple = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide7_apple"))
      .setLocation(168, 281)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.apple);



    frame0step1();
  }

  function frame0step1() {
    items.man.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.kassa.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.semafor.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.semaforGreen1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.lenta.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.apple.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    self.sleep(500, frame0step2);
  }

  function frame0step2() {
    items.rollBehavior = new CAAT.Behavior.RotateBehavior().setFrameTime(scene.time,3000).setValues(0, 2*Math.PI, 0.5, 0.5).setCycle(true);
    items.lentaWheelL.addBehavior(items.rollBehavior);
    items.lentaWheelR.addBehavior(items.rollBehavior);
    items.apple.moveTo(320, items.apple.y, 2000);

    self.sleep(2000, frame0step3);
  }

  function frame0step3() {
    enableAllTransitions();

    infoPanel = new InfoPanel().startupInfoPanel(508, 123, "При работе за кассой могут возникнуть сложные ситуации:<br>• связанные с продажей товара;<br>• связанные с выходом из строя кассового аппарата", true, frame0step4);
    items.background.addChild(infoPanel.container.setLocation(189, 417));
    infoPanel.showInfoPanel(400);

    items.lentaWheelL.emptyBehaviorList();//removeBehaviour(items.rollBehavior);
    items.lentaWheelR.emptyBehaviorList();//removeBehaviour(items.rollBehavior);
    items.semaforGreen1.setAlpha(0);
    items.semaforGreen2.setAlpha(1);
    items.semaforRed1.setAlpha(1);
    items.semaforRed2.setAlpha(1);

    flashInt = setInterval(function(){
      items.semaforRed1.setAlpha(1);
      setTimeout(function(){
        items.semaforRed1.setAlpha(0);
      }, 500);
    }, 1000);
  }

  function frame0step4() {
    infoPanel.destroyInfoPanel();
    items.background.removeChild(infoPanel.container);

    clearInterval(flashInt);
    flashInt = 0;
    items.semaforRed1.setAlpha(1);
    frame0step100();
  }

  function frame0step100() {

      items.apple.addBehavior(
          new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(scene.time, 1000)
      );
      items.man.addBehavior(
          new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(scene.time, 1000)
      );

      items.kassa.addBehavior(
          new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(scene.time, 1000)
      );

      items.semafor.addBehavior(
          new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(scene.time, 1000)
      );

      items.lenta.addBehavior(
          new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(scene.time, 1000)
      );

      items.semaforRed1.addBehavior(
          new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(scene.time, 1000)
      );

      var   timeout8 = setTimeout(function() {
          enableAllTransitions();
          appManager.showNextSlide();
      },1000);
  }

  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide7.prototype = new Slide();