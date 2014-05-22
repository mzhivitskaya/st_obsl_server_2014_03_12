/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide11
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide11() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;
    var button = null;
    var btnNext = null;

    var timeout1 = null;
    var timeout2 = null;
    var timeout3 = null;
    var balloon = null;
    var count = null;

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
    window.s11 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.men = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide11_men1"))
      .setLocation(63, 163)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men);

    items.men2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide11_men2"))
      .setLocation(613, 210)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men2);

    items.men3 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide11_men3"))
      .setLocation(800, 210)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men3);
    items.mask = new CAAT.Path()
      .beginPath(0, 0)
      .addLineTo(394, 0)
      .addLineTo(394, 4)
      .addLineTo(0, 4)
      .addLineTo(0, 0)
      .endPath();

    //items.line1.setClip(true, items.mask);

    items.tip1 = self.createMultiActor({
      parent:items.background,
      x:226, y:83, w:207, h:107,
      images: ["slide11_tip1","slide11_tip1_text"]
    });
    items.tip1[0].setAlpha(1);

    items.tip2 = self.createMultiActor({
      parent:items.background,
      x:371, y:172, w:240, h:145,
      images: ["slide11_tip2","slide11_tip2_text"]
    });
    items.tip2[0].setAlpha(1);

    items.tip3 = self.createMultiActor({
      parent:items.background,
      x:238, y:143, w:290, h:175,
      images: ["slide11_tip3","slide11_tip3_text"]
    });
    items.tip3[0].setAlpha(1);

    items.tip4 = self.createMultiActor({
      parent:items.background,
      x:504, y:101, w:209, h:107,
      images: ["slide11_tip4","slide11_tip4_text"]
    });
    items.tip4[0].setAlpha(1);

    items.tip5 = self.createMultiActor({
      parent:items.background,
      x:222, y:66, w:254, h:190,
      images: ["slide11_tip5","slide11_tip5_text"]
    });
    items.tip5[0].setAlpha(1);

    items.tip6 = self.createMultiActor({
      parent:items.background,
      x:341, y:216, w:328, h:149,
      images: ["slide11_tip6","slide11_tip6_text"]
    });
    items.tip6[0].setAlpha(1);


//
    items.textPlace1 = self.createMultiActor({
      parent: items.background,
      x:300, y:385, w:285, h:136,
      images: ["slide11_textPlace1","slide11_text1"]
    });
    items.textPlace1[1].setAlpha(1);

    items.textPlace2 = self.createMultiActor({
      parent: items.background,
      x:300, y:385, w:285, h:136,
      images: ["slide11_textPlace2","slide11_text2"]
    });
    items.textPlace2[1].setAlpha(1);


    items.textPlace3 = self.createMultiActor({
      parent: items.background,
      x:300, y:385, w:285, h:136,
      images: ["slide11_textPlace2","slide11_text3"]
    });
    items.textPlace3[1].setAlpha(1);

    items.textNext = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide11_textNext"))
      .setLocation(548, 484)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.textNext);

    items.textNext2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide11_textNext"))
      .setLocation(548, 503)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.textNext2);
      //end

    frame0step1();
  }

  function frame0step1() {
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.men2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    self.sleep(500,frame0step2);

  }

  function frame0step2() {
    disableAllTransitions();
    items.tip1[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 300)
    );
    items.tip1[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+300, 200)
    );

      items.tip2[1].addBehavior(
          new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time +500, 300)
      );
      items.tip2[2].addBehavior(
          new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+800, 200)
      );

      balloon = new Balloon().
          setSize(330, 150).          //установка ширины/высоты
          setText("<b>Для линейного сотрудника:</b><br>Для того чтобы понять, чего хочет Покупатель, необходимо:<br>• внимательно его выслушать (уточнить пожелания);<br>• по необходимости пригласить<br>УМ или ЗУМ").       //задание текста в баллоне
          setCoords(275, 380).        //установка координат правого верхнего угла
          addButton(frame0step3).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);

      timeout2 = setTimeout(function() {
          enableAllTransitions();
      },1000);
  }

  function frame0step3() {
    disableAllTransitions();
    items.tip2[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.tip2[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );

    items.tip1[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.tip1[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );

      balloon.destroyBalloon(500);
    items.men2.moveTo(800, 210, 800, 300);
    items.men3.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
      timeout2 = setTimeout(function() {
          enableAllTransitions();
      },1000);
    self.sleep(1000,frame0step4);
  }

  function frame0step4() {
    disableAllTransitions();
    items.men3.moveTo(585, 210, 800, 300);
    items.tip4[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000, 300)
    );
    items.tip4[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1300, 200)
    );
    items.tip3[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+2000, 300)
    );
    items.tip3[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+2300, 200)
    );

      balloon = new Balloon().
          setSize(310, 160).          //установка ширины/высоты
          setText("<b>Для УМ и ЗУМ:</b><br>• задать вопросы (если Покупатель не может определиться с выбором продукта и просит Вас помочь ему в этом)").       //задание текста в баллоне
          setCoords(275, 375).        //установка координат правого верхнего угла
          addButton(frame0step5).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);
      count = 0;
      timeout2 = setTimeout(function() {
          enableAllTransitions();
      },2000);
    self.waitForClick(items.textNext2, frame0step5);
  }

  function frame0step5() {
    disableAllTransitions();
      if(count == 0){

          count++;
    items.tip3[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.tip3[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );

    items.tip4[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );
    items.tip4[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
    );


      balloon.changeText("<b>Для УМ и ЗУМ:</b><br>• задать вопросы (если Покупатель не может определиться с выбором продукта и просит Вас помочь ему в этом);<br>• уточнить детали, задать уточняющие вопросы") ;

          timeout2 = setTimeout(function() {
              enableAllTransitions();
          },1000);

          items.tip5[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+200, 300)
          );
          items.tip5[2].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 200)
          );

          items.tip6[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+700, 300)
          );
          items.tip6[2].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+1000, 200)

          );

          timeout2 = setTimeout(function() {
              enableAllTransitions();
          },1000);

      }
      else if(count == 1){
          disableAllTransitions();

          balloon.destroyBalloon(100);
          timeout2 = setTimeout(function() {
              enableAllTransitions();
          },1000);
          frame0step100();

      }
  }


  function frame0step100() {
      disableAllTransitions();

      items.tip5[1].addBehavior(
          new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
      );
      items.tip5[2].addBehavior(
          new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
      );

      items.tip6[1].addBehavior(
          new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)
      );
      items.tip6[2].addBehavior(
          new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 100)

      );
      items.men.moveTo(885, 163, 1200, 300);

      items.men3.moveTo(1085, 210, 1200, 300);
      timeout2 = setTimeout(function() {
          enableAllTransitions();

          appManager.showNextSlide();
      },1500);
  }

  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide11.prototype = new Slide();