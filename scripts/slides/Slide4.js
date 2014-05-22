/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide4
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide4() {
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
    window.s4 = items;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);



    items.line1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide4_line1"))
      .setLocation(250, 146)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.line1);

    items.text1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide4_text1"))
      .setLocation(253, 115)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text1);

    items.text2 = self.createMultiActor({
      parent: items.background,
      x:218, y:170, w:563, h:54,
      images: ["slide4_text2l", "slide4_text2"]
    });

    items.text3 = self.createMultiActor({
      parent: items.background,
      x:350, y:255, w:431, h:54,
      images: ["slide4_text3l", "slide4_text3"]
    });

    items.text4 = self.createMultiActor({
      parent: items.background,
      x:383, y:340, w:398, h:54,
      images: ["slide4_text4l", "slide4_text4"]
    });


    items.text5 = self.createMultiActor({
        parent: items.background,
        x:346, y:425, w:435, h:54,
        images: ["slide4_text5l", "slide4_text5"]
    });


      items.t2 = new CAAT.Actor()
          .setBackgroundImage(director.getImage("slide4_text2"))
          .setLocation(233, 185)
          .setGlobalAlpha(true)
          .setAlpha(0);
      items.background.addChild(items.t2);

      items.t3 = new CAAT.Actor()
          .setBackgroundImage(director.getImage("slide4_text3"))
          .setLocation(368, 270)
          .setGlobalAlpha(true)
          .setAlpha(0);
      items.background.addChild(items.t3);

      items.t4 = new CAAT.Actor()
          .setBackgroundImage(director.getImage("slide4_text4"))
          .setLocation(395, 355)
          .setGlobalAlpha(true)
          .setAlpha(0);
      items.background.addChild(items.t4);

      items.t5 = new CAAT.Actor()
          .setBackgroundImage(director.getImage("slide4_text5"))
          .setLocation(361, 440)
          .setGlobalAlpha(true)
          .setAlpha(0);
      items.background.addChild(items.t5);

    items.man = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide4_man"))
      .setLocation(44, 197)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.man);

    items.wand = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide4_wand"))
      .setLocation(215, 257)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.wand);

    frame0step1();
  }

  function frame0step1() {
    items.man.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    items.line1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 500, 500)
    );
    items.text1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1000, 500)
    );

    items.wand.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 1500, 500)
    );



    items.text2[1].setAlpha(1);
    items.text2[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 3000, 500)
    );
    items.t2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 3500, 500)
    );


    items.wand.addBehavior(
      new CAAT.Behavior.RotateBehavior().setFrameTime(scene.time+4000, 500).setValues(0, 43/180*Math.PI, 0.13, 0.9)
    );


    items.text3[1].setAlpha(1);
    items.text3[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 4500, 500)
    );
    items.t3.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 5000, 500)
    );


    items.wand.addBehavior(
      new CAAT.Behavior.RotateBehavior().setFrameTime(scene.time+5500, 500).setValues(43/180*Math.PI, 70/180*Math.PI, 0.13, 0.9)
    );


    items.text4[1].setAlpha(1);
    items.text4[0].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 6000, 500)
    );
    items.t4.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 6500, 500)
    );

      items.wand.addBehavior(
          new CAAT.Behavior.RotateBehavior().setFrameTime(scene.time+7000, 500).setValues(70/180*Math.PI, 103/180*Math.PI, 0.13, 0.9)
      );


      items.text5[1].setAlpha(1);
      items.text5[0].addBehavior(
          new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 7500, 500)
      );
      items.t5.addBehavior(
          new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 8000, 500)
      );

    self.sleep(8500, frame0step99);
  }

  function frame0step99() {
    enableAllTransitions();
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
          items.man.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.line1.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.wand.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.text1.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.t2.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.t3.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.t4.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.t5.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.text5[0].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );


          items.text4[0].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );


          items.text3[0].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );


          items.text2[0].addBehavior(
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

Slide4.prototype = new Slide();