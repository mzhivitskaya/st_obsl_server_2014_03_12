/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide9
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide9() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;

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
    window.s9 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.men = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide9_men"))
      .setLocation(42, 222)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men);

    items.men2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide9_men2"))
      .setLocation(561, 171)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men2);


    items.tip1 = self.createMultiActor({
      parent:items.background,
      x:90, y:128, w:304, h:121,
      images: ["slide9_tip1_1","slide9_tip1_2"]
    });
    items.tip1[0].mouseEnabled =  false;
    items.tip1[1].mouseEnabled =  false;
    items.tip1[2].mouseEnabled =  false;
    items.tip1next = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide9_tipNext"))
      .setLocation(90 + 265, 128 + 45)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.tip1next);


    items.tip2 = self.createMultiActor({
      parent:items.background,
      x:182, y:185, w:263, h:121,
      images: ["slide9_tip2_1","slide9_tip2_2"]
    });
    items.tip2[0].mouseEnabled =  false;
    items.tip2[1].mouseEnabled =  false;
    items.tip2[2].mouseEnabled =  false;
    items.tip2next = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide9_tipNext"))
      .setLocation(182 + 225, 185 + 45)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.tip2next);


//    items.tip3 = new CAAT.Actor()
//      .setBackgroundImage(director.getImage("slide9_tip3"))
//      .setLocation(465, 79)
//      .setGlobalAlpha(true)
//      .setAlpha(0);
//    items.background.addChild(items.tip3);


    items.tip4 = self.createMultiActor({
      parent:items.background,
      x:311, y:230, w:255, h:127,
      images: ["slide9_tip4_1","slide9_tip4_2"]
    });
    items.tip4[0].mouseEnabled =  false;
    items.tip4[1].mouseEnabled =  false;
    items.tip4[2].mouseEnabled =  false;
    items.tip4next = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide9_tipNext"))
      .setLocation(311 + 219, 230 + 55)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.tip4next);


    items.tip5 = self.createMultiActor({
      parent:items.background,
      x:188, y:298, w:306, h:83,
      images: ["slide9_tip5_1","slide9_tip5_2"]
    });
    items.tip5[0].mouseEnabled =  false;
    items.tip5[1].mouseEnabled =  false;
    items.tip5[2].mouseEnabled =  false;
    items.tip5next = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide9_tipNext"))
      .setLocation(188 + 269, 298 + 48)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.tip5next);

    frame0step1();
  }

  function frame0step1() {
    items.men.setAlpha(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.men2.setAlpha(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    self.sleep(500,frame0step2);
  }

  function frame0step2() {
    items.tip1[1].setAlpha(1);
    items.tip1[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 250)
    );
    items.tip1[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+250, 500)
    );
//    items.tip1next.addBehavior(
//      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 250)
//    );
    enableAllTransitions();
//    self.waitForClick(items.tip1next, frame0step3);
    self.sleep(1750,frame0step3);
  }

  function frame0step3() {
//    items.tip1next.setAlpha(0);
    items.tip2[1].setAlpha(1);
    items.tip2[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 250)
    );
    items.tip2[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+250, 500)
    );
//    items.tip3.addBehavior(
//      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
//    );
//    items.tip2next.addBehavior(
//      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000, 250)
//    );

//    self.waitForClick(items.tip2next, frame0step4);
    self.sleep(1750,frame0step4);
  }

  function frame0step4() {
//    items.tip2next.setAlpha(0);
//    items.tip3.addBehavior(
//      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
//    );

    items.tip4[1].setAlpha(1);
    items.tip4[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 250)
    );
    items.tip4[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+750, 500)
    );
//    items.tip4next.addBehavior(
//      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000, 250)
//    );
//    self.waitForClick(items.tip4next, frame0step5);
    self.sleep(2250,frame0step5);
  }

  function frame0step5() {
//    items.tip4next.setAlpha(0);
    items.tip2[1].setBackgroundImage(director.getImage("slide9_tip2_end"));
    items.tip5[1].setAlpha(1);
    items.tip5[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 250)
    );
    items.tip5[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+250, 500)
    );
    items.tip5next.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 250)
    );
    self.waitForClick(items.tip5next, frame0step100);
  }

  function frame0step100() {
    appManager.showNextSlide();
  }

  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide9.prototype = new Slide();