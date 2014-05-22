/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide12
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide12() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;

    var button = null;
    var btnNext = null;

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
    window.s12 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.men = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide12_men1"))
      .setLocation(24, 227)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men);

    items.men2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide12_men2"))
      .setLocation(24, 227)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men2);

    items.men3 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide12_men3"))
      .setLocation(24, 227)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men3);

    items.tip1 = self.createMultiActor({
      parent:items.background,
      x:30, y:112, w:247, h:148,
      images: ["slide12_tip1","slide12_tip1_text"]
    });
    items.tip1[0].setAlpha(1);

    items.tip2 = self.createMultiActor({
      parent:items.background,
      x:30, y:112, w:247, h:148,
      images: ["slide12_tip2","slide12_tip2_text"]
    });
    items.tip2[0].setAlpha(1);

    items.tip3 = self.createMultiActor({
      parent:items.background,
      x:30, y:112, w:247, h:148,
      images: ["slide12_tip3","slide12_tip3_text"]
    });
    items.tip3[0].setAlpha(1);

    items.road1 = self.createMultiActor({
      parent: items.background,
      x:277, y:186, w:1044, h:71,
      images: ["slide12_road1","slide12_road1_text1","slide12_road1_text2"]
    });
    items.road1[0].setAlpha(1);

    items.road2 = self.createMultiActor({
      parent: items.background,
      x:277, y:278, w:1044, h:71,
      images: ["slide12_road2","slide12_road2_text1","slide12_road2_text2"]
    });
    items.road2[0].setAlpha(1);
    
    items.road3 = self.createMultiActor({
      parent: items.background,
      x:277, y:373, w:1040, h:146,
      images: ["slide12_road3","slide12_road3_text1","slide12_road3_text2"]
    });
    items.road3[0].setAlpha(1);

    items.line = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide12_line"))
      .setLocation(281, 160)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.line);

    items.lineText = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide12_line_text"))
      .setLocation(277, 133)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.lineText);

    items.textNext = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide12_textNext"))
      .setLocation(700, 500)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.textNext);
    frame0step1();
  }

  function frame0step1() {
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    items.tip1[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000, 100)
    );
    items.tip1[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000, 100)
    );

    self.sleep(2000,frame0step2);

  }

  function frame0step2() {
    
    items.line.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
    );
    items.lineText.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
    );
    items.road1[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1500, 500)
    );
    items.road1[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1500, 500)
    );
    self.sleep(7000,frame0step3);

  }

  function frame0step3() {
    items.tip1[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.tip1[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+100, 1)
    );

    items.men2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 1)
    );

    items.tip2[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 100)
    );
    items.tip2[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 100)
    );

    items.road2[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 500)
    );
    items.road2[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 500)
    );
    self.sleep(9200,frame0step4);
  }

  function frame0step4() {
    items.tip2[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.tip2[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.men2.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+100, 1)
    );

    items.men3.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 1)
    );

    items.tip3[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 100)
    );
    items.tip3[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 100)
    );

    items.road3[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 500)
    );
    items.road3[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+100, 500)
    );

    self.sleep(9200,frame0step5);

  }

  function frame0step5() {
    items.tip3[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );
    items.tip3[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );
    items.line.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );
    items.lineText.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );
    items.men3.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );
    items.road1[1].moveTo(-565, 0, 800, 300);
    items.road1[2].moveTo(-565, 0, 800, 300);
    items.road1[3].moveTo(-565, 0, 800, 300);
    items.road2[1].moveTo(-565, 0, 800, 300);
    items.road2[2].moveTo(-565, 0, 800, 300);
    items.road2[3].moveTo(-565, 0, 800, 300);
    items.road3[1].moveTo(-565, 0, 800, 300);
    items.road3[2].moveTo(-565, 0, 800, 300);
    items.road3[3].moveTo(-565, 0, 800, 300);

    self.sleep(1600,frame0step6);
  }

  function frame0step6() {
      var   timeout = setTimeout(function() {

      enableAllTransitions();
  },3700);
    items.road1[3].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.road2[3].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1600, 500)
    );
    items.road3[3].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+3200, 500)
    );

      var buttonNextSprite = new CAAT.Foundation.SpriteImage().
          initialize(director.getImage("gui_next_btn"), 1, 2).
          addAnimation("idle", [0], 300).
          addAnimation("over", [1], 300);
      btnNext = new CAAT.Actor().
          setBackgroundImage(buttonNextSprite).
          setLocation(720, 500).
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
          items.road1[3].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.road2[3].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.road3[3].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.road1[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.road2[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.road3[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          var   timeout1 = setTimeout(function() {
              appManager.showNextSlide();
              enableAllTransitions();
          },1500);

      };
  }



  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide12.prototype = new Slide();