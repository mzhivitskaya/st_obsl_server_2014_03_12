/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide2
 */
/* global InfoPanel:true, CAAT:true, director:true, scene:true, appManager:true, Slide:true */
function Slide2() {
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



    setTimeout(function() {
      frame0step0();
    }, 500);
  };

  function frame0step0() {
    items = {};
    window.s2 = items;
    items.timer = new CAAT.ActorContainer()
      .setBounds(0, 0, 1, 1)
      .setGlobalAlpha(true)
      .setLocation(0, 0)
      .setAlpha(0);
    self.container.addChild(items.timer);

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    var sc = Math.min(800/1668, 600/1252);
    items.background.addBehavior(
      new CAAT.ScaleBehavior().setFrameTime(0, 0).setValues(1, sc, 1, sc, 0, 0)
    );

    items.man = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide2_man"))
      .setLocation(120, 501)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.man);

      balloon = new Balloon().
          setSize(310, 100).          //установка ширины/высоты
          setText("<b>Покупатель</b> – это основа благополучия сотрудников и стабильности нашей компании").       //задание текста в баллоне
          setCoords(20, 95).        //установка координат правого верхнего угла
          addTail(230, 270,250,280 ).          //добавление хвоста баллона с координатами острия
          addButton(frame0step2).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);

    frame0step1();
  }

  function frame0step1() {
    items.man.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    enableAllTransitions();
  }

  function frame0step2() {

      balloon.destroyBalloon(500);

    items.timer.moveTo(items.timer.x+100,items.timer.y,450,0,null,frame0step3);
  }

  function frame0step3() {
    items.door = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide2_door"))
      .setLocation(782, 186)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.door);

    items.man2 = new CAAT.ActorContainer()
      .setBounds(0, 0, 137, 276)// 406, 763
      .setLocation(967, 343)// 579, 378
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.man2);
    items.man21 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide2_man2"))
      .setLocation(-3,23)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.man2.addChild(items.man21);
    items.man22 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide2_man21"))
      .setLocation(-134, -243)
      .setGlobalAlpha(true)
      .setAlpha(0)
      .setScale(1/2.37, 1/2.37);
    items.man2.addChild(items.man22);

    items.man3 = new CAAT.ActorContainer()
      .setBounds(0, 0, 167, 278)// 400, 706
      .setLocation(1155, 351)//1110, 427
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.man3);
    items.man31 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide2_man3"))
      .setLocation(0, 9)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.man3.addChild(items.man31);
    items.man32 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide2_man31"))
      .setLocation(-116, -214)
      .setGlobalAlpha(true)
      .setAlpha(0)
      .setScale(1/2.37, 1/2.37);
    items.man3.addChild(items.man32);

    items.door.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.man2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
    );
    items.man3.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
    );

    items.timer.moveTo(items.timer.x+100,items.timer.y,1000,0,null,frame0step4);
  }

  function frame0step4() {
    items.door.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 500)
    );

    items.man2.moveTo(579-items.man22.x, 378-items.man22.y, 1000, 0);
    items.man2.addBehavior(
      new CAAT.ScaleBehavior().setFrameTime(scene.time, 1000).setValues(1, 2.37, 1, 2.37, 0.5, 0.5)
    );
    items.man22.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
    );
    items.man21.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+1000, 0)
    );
    items.man3.moveTo(1110-items.man32.x, 427-items.man32.y, 1000, 0);
    items.man3.addBehavior(
      new CAAT.ScaleBehavior().setFrameTime(scene.time, 1000).setValues(1, 2.37, 1, 2.37, 0.5, 0.5)
    );
    items.man32.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 500)
    );
    items.man31.addBehavior(
      new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+1000, 0)
    );


      balloon = new Balloon().
          setSize(310, 125).          //установка ширины/высоты
          setText("Покупатели могут быть разными. Сотрудники магазина должны помогать им в осуществлении покупок в наших магазинах. Помните – покупатели это и мы с вами!").       //задание текста в баллоне
          setCoords(25,80).        //установка координат правого верхнего угла
          addTail(225, 245, 250, 280).          //добавление хвоста баллона с координатами острия
          createBalloon(500);


    items.timer.moveTo(items.timer.x+100,items.timer.y,1150+150,0,null,frame0step99);
  }

  function frame0step99() {
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
          balloon.destroyBalloon(500);

          items.man.moveTo(-400, items.man.y, 800, 0);
          items.man22.moveTo(800, items.man22.y, 1000, 0);
          items.man32.moveTo(900, items.man32.y, 1000, 0);



          timeout1 = setTimeout(function() {
              appManager.showNextSlide();
              enableAllTransitions();
          },2500);

      };
  }



  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide2.prototype = new Slide();