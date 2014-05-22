/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide3
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide3() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;
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
  };

  function frame0step0() {
    items = {};
    window.s3 = items;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);


    items.semafor = self.createMultiActor({
      parent: items.background,
      x:475, y:86, w:98, h:115,
      images: ["slide3_semafor1", "slide3_semafor2"]
    });

    items.kpp = self.createMultiActor({
      parent: items.background,
      x:498, y:206, w:272, h:339,
      images: ["slide3_kpp1", "slide3_kpp2", "slide3_kpp3"]
    });

    items.man = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide3_man"))
      .setLocation(-164, 229)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.background.addChild(items.man);

    items.telega = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide3_telega"))
      .setLocation(800, 381)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.background.addChild(items.telega);

    frame0step1();
  }

  function frame0step1() {
    items.semafor[0].setAlpha(1);
    items.semafor[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    items.kpp[0].setAlpha(1);
    items.kpp[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    items.man.moveTo(45, items.man.y, 2000, 500, null, frame0step2);
  }

  function frame0step2() {


      balloon = new Balloon().
          setSize(396, 113).          //установка ширины/высоты
          setText("Покупатель – главный человек в магазине.<br>Поэтому основная задача сотрудников<br>ДИКСИ – удовлетворить его потребности ").       //задание текста в баллоне
          setCoords(34, 98).        //установка координат правого верхнего угла
          addButton(frame0step3).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);


      enableAllTransitions();

  }

  function frame0step3() {
      balloon.destroyBalloon(500);
    items.background.removeChild(infoPanel.container);

    items.semafor[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + 250, 0)
    );
    items.semafor[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 250, 0)
    );

    items.kpp[1].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + 250, 0)
    );
    items.kpp[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 250, 0)
    );
    items.kpp[2].addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + 750, 0)
    );
    items.kpp[3].addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + 750, 0)
    );

    self.sleep(1000, frame0step4);
  }

  function frame0step4() {
    items.telega.moveTo(236, items.telega.y, 2000, 0, null, frame0step5);
  }

  function frame0step5() {

      balloon = new Balloon().
          setSize(396, 113).          //установка ширины/высоты
          setText("Для этого нам необходимо соблюдать определенные правила обслуживания покупателей").       //задание текста в баллоне
          setCoords(34, 98).        //установка координат правого верхнего угла
          addButton(frame0step6).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);


  }

  function frame0step6() {
      balloon.destroyBalloon(500);
    items.background.removeChild(infoPanel.container);

    items.man.moveTo(items.man.x + 800, items.man.y, 3000, 500);
    items.telega.moveTo(items.telega.x + 800, items.telega.y, 3000, 500, null, frame0step100);
  }

  function frame0step100() {
    appManager.showNextSlide();
  }

  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide3.prototype = new Slide();