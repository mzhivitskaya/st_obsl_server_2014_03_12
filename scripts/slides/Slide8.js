/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide8
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide8() {
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
    window.s8 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.back = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_back"))
      .setLocation(0, 75)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.background.addChild(items.back);

    items.text1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_text1"))
      .setLocation(146, 105)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text1);

    items.znak1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_znak1"))
      .setLocation(639, 89)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.znak1);

    items.men = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_men"))
      .setLocation(595, 335)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men);
    items.men2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_men2"))
      .setLocation(595, 335)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men2);

    items.menTipBack = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_menTipBack"))
      .setLocation(595, 209)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.menTipBack);

    items.menTip1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_menTip1"))
      .setLocation(595, 209)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.menTip1);

    items.menTip2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_menTip2"))
      .setLocation(598, 229)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.menTip2);



    items.textsPos = [
      {x:17, y:152},
      {x:17, y:232},
      {x:17, y:310},
      {x:17, y:388},
      {x:17, y:464}
    ];

    var qq;
    items.texts = [];
    for(qq = 0; qq < items.textsPos.length; ++qq) {
      var tmp = self.createMultiActor({
        parent: items.background,
        x:items.textsPos[qq].x, y:items.textsPos[qq].y, w:549, h:52,
        images: ["slide8_tipBack", "slide8_tipText"+(qq+1)]
      });
      tmp[1].setAlpha(1);
      items.texts.push(tmp);
    }


    items.nextButton = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide8_next"))
      .setLocation(715, 481)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.nextButton);


    frame0step1();
  }

  function frame0step1() {
    items.text1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 1000)
    );
   /* items.znak1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1000, 1000)
    ); */



    items.texts[0][0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time , 1000)
    );
    items.texts[0][2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1000, 1000)
    );
    items.texts[1][0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 2000, 1000)
    );
    items.texts[1][2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 3000, 1000)
    );

    self.sleep(4000,frame0step2);
  }

  function frame0step2() {
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.menTipBack.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 500, 500)
    );
    items.menTip1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1000, 500)
    );

    enableAllTransitions();
    items.nextButton.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1500, 500)
    );
    self.waitForClick(items.nextButton, frame0step2_5);
  }

  function frame0step2_5() {
    items.nextButton.setAlpha(0);
    items.menTip1.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );
    items.menTipBack.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + 500, 500)
    );
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + 1000, 500)
    );

    self.sleep(1500,frame0step3);
  }

  function frame0step3() {
    items.texts[2][0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 1000)
    );
    items.texts[2][2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1000, 1000)
    );
    items.texts[3][0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 2000, 1000)
    );
    items.texts[3][2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 3000, 1000)
    );
    items.texts[4][2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 4000, 1000)
    );
    items.texts[4][0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 5000, 1000)
    );
    self.sleep(6000,frame0step4);
  }

  function frame0step4() {
    items.men2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.menTipBack.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 500, 500)
    );
    items.menTip2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1000, 500)
    );

    items.nextButton.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1500, 500)
    );
    self.waitForClick(items.nextButton, frame0step100);
  }

  function frame0step100() {
    appManager.showNextSlide();
  }

  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide8.prototype = new Slide();