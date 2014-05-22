/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide1
 */
/* global InfoPanel:true, CAAT:true, director:true, scene:true, appManager:true, Slide:true, menu:true */
function Slide1() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
    var timeout1 = null;
    var balloon = null;
    var button = null;
    var btnNext = null;

  var infoTextsFrame0 = [
    "Добро пожаловать в раздел образовательной системы компании «ДИКСИ Групп», посвященный знакомству с компанией и распределительными центрами (РЦ)",
    "Данный курс научит вас действовать во благо себе и организации, работать так, чтобы соответствовать требованиям, ценностям ДИКСИ, непрерывно двигаясь к достижению стратегической цели."
  ];

  //--------------- frame 0 ---------------------//
  var helpMan = null;
  var helpInfoPanel = null;
  var helpIdea = null;
  var helpHint = null;
  var hand = null;

  this.showFrame0 = function () {
    menu.disableMenu();
    showHelp();
  };


  function showHelp() {

      disableAllTransitions();
   /* helpInfoPanel = new InfoPanel().startupInfoPanel(360, 120, "Добро пожаловать в электронный учебный курс <b>«Стандарты обслуживания покупателей»!</b>", false);
    self.container.addChild(helpInfoPanel.container.setLocation(209, 201));
    helpInfoPanel.showInfoPanel(500);*/

      balloon = new Balloon().
          setSize(320, 120).          //установка ширины/высоты
          setText("Добро пожаловать в электронный учебный курс <b>«Стандарты обслуживания покупателей»!</b>").       //задание текста в баллоне
          setCoords(209, 201).        //установка координат правого верхнего угла
          addTail(350, 360,360,390 ).          //добавление хвоста баллона с координатами острия
          setLayer(self.container).
          createBalloon(500);

    helpMan = new CAAT.Actor().
      setBackgroundImage(director.getImage("slide0_man_help")).
      setLocation(210, 340).
      setAlpha(0);
    self.container.addChild(helpMan);

    helpIdea = new CAAT.Actor().
//      setBackgroundImage(director.getImage("slide0_idea_orange")).
      setLocation(292, 313).
      setAlpha(0);
    self.container.addChild(helpIdea);

    var showAlphaBeh = new CAAT.AlphaBehavior().
      setValues(0, 1).
      setFrameTime(scene.time, 500);
    helpMan.addBehavior(showAlphaBeh);
    helpIdea.addBehavior(showAlphaBeh);

    setTimeout(helpAnimation0, 5500);
  }

  function helpAnimation0() {
    var hideAlphaBeh = new CAAT.AlphaBehavior().
      setValues(1, 0).
      setFrameTime(scene.time, 250);
    helpIdea.addBehavior(hideAlphaBeh);
   // helpInfoPanel.destroyInfoPanel();
      balloon.destroyBalloon(500);

    helpMan.moveTo(660, 340, 800, 300, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
      /*helpInfoPanel = new InfoPanel().startupInfoPanel(185, 120, "Познакомимся с содержимым курса", false);
      self.container.addChild(helpInfoPanel.container.setLocation(600, 201));
      helpInfoPanel.showInfoPanel(500);*/

        balloon = new Balloon().
            setSize(185, 120).          //установка ширины/высоты
            setText("Познакомимся с содержимым курса").       //задание текста в баллоне
            setCoords(600, 201).        //установка координат правого верхнего угла
            addTail(660, 360,620,640 ).          //добавление хвоста баллона с координатами острия
            addButton(stopHelp).
            hideButton(0).
            setLayer(self.container).
            createBalloon(500);

      helpIdea.setLocation(640, 313).setImageTransformation(CAAT.Foundation.SpriteImage.TR_FLIP_HORIZONTAL);

      var showAlphaBeh = new CAAT.AlphaBehavior().
        setValues(0, 1).
        setFrameTime(scene.time, 500);
      helpIdea.addBehavior(showAlphaBeh);

      self.container.setZOrder(helpIdea, 100);

      setTimeout(helpAnimation1, 1000);
    });
  }

  function helpAnimation1() {
    hand = new CAAT.Actor().
      setBackgroundImage(director.getImage("gui_hand")).
      setLocation(SCREEN_WIDTH, 300);
    scene.addChild(hand);

    var path = new CAAT.Path().
      beginPath(SCREEN_WIDTH, 300).
      addQuadricTo(570, 410, 0, 520, 'blue').
      endPath();
    var pathBeh = new CAAT.PathBehavior().
      setPath(path).
      setFrameTime(scene.time, 1500);
    hand.addBehavior(pathBeh);

    setTimeout(menu.showButtonsMenu, 1750);
    setTimeout(helpAnimation2, 2500);
  }

  function helpAnimation2() {
    hand.emptyBehaviorList();

    var hideAlphaBeh = new CAAT.AlphaBehavior().
      setValues(hand.alpha, 0).
      setFrameTime(scene.time, 1000);
    hand.addBehavior(hideAlphaBeh);

    helpHint = new CAAT.Actor().
      setBackgroundImage(director.getImage("slide0_menu_hint")).
      setLocation(306, 437).
      setAlpha(0);
    scene.addChild(helpHint);

    var showAlphaBeh = new CAAT.AlphaBehavior().
      setValues(0, 1).
      setFrameTime(scene.time + 500, 1000);
    helpHint.addBehavior(showAlphaBeh);

    setTimeout(function() {
      hand.setAlpha(0);
      scene.setZOrder(hand, 0);
      hand.emptyBehaviorList();
      scene.removeChild(hand);

      var hideAlphaBeh0 = new CAAT.AlphaBehavior().
        setValues(1, 0).
        setFrameTime(scene.time, 250);
      helpIdea.addBehavior(hideAlphaBeh0);
     // helpInfoPanel.destroyInfoPanel();
        balloon.changeText("Желаем успехов!").showButton(1300) ;

        setTimeout(helpAnimation3, 500);
    }, 1000);
  }

  function helpAnimation3() {
    backLayer.mouseEnabled = true;

   /* helpInfoPanel = new InfoPanel().startupInfoPanel(185, 120, "Желаем успехов!", true, stopHelp);
    self.container.addChild(helpInfoPanel.container.setLocation(600, 201));
    helpInfoPanel.showInfoPanel(500);*/

    var showAlphaBeh = new CAAT.AlphaBehavior().
      setValues(0, 1).
      setFrameTime(scene.time, 500);
    helpIdea.addBehavior(showAlphaBeh);

    self.container.setZOrder(helpIdea, 100);
  }

  function stopHelp() {
    var hideAlphaBeh = new CAAT.AlphaBehavior().
      setValues(1, 0).
      setFrameTime(scene.time, 250);
    helpIdea.addBehavior(hideAlphaBeh);
   // helpInfoPanel.destroyInfoPanel();
      enableAllTransitions();
      balloon.destroyBalloon(100);
    helpMan.addBehavior(hideAlphaBeh);
    helpHint.addBehavior(hideAlphaBeh);

    setTimeout(function() {
      self.container.removeChild(helpMan);
      self.container.removeChild(helpIdea);
      scene.removeChild(helpHint);

      menu.hideMenu();
      menu.enableMenu();
      menu.disableBackBtn();
      menu.disableForwardBtn();

      self.showFrame1();
    }, 350);
  }

  //--------------- frame 1 ---------------------//

  this.showFrame1 = function () {

    // ЗАПРЕТ НАЖАТИЯ ВСЕХ КНОПОК
    disableAllTransitions();

    infoPanel = new InfoPanel().startupInfoPanel(380, 149, infoTextsFrame0[self.infoNum], true, null);
    self.container.addChild(infoPanel.container.setLocation(209, 172));
    infoPanel.destroyInfoPanel();
    self.container.removeChild(infoPanel.container);

    setTimeout(function() {
      frame0step0();
    }, 500);


  };

  function frame0step0() {
    items = {};
    window.s1 = items;
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
      .setBackgroundImage(director.getImage("slide1_man"))
      .setLocation(687, 487)
      .setGlobalAlpha(true)
      .setAlpha(1);
    items.background.addChild(items.man);

    items.starPos = [
      { x:389,  y:733 },
      { x:512,  y:904 },
      { x:718,  y:977 },
      { x:919,  y:904 },
      { x:1048, y:733 }
    ];
    items.starPos2 = [
      { x:475,  y:335 },
      { x:475,  y:492 },
      { x:475,  y:649 },
      { x:475,  y:806 },
      { x:475,  y:963 }
    ];
    items.stars = [];
    var qq;
    for(qq = 0; qq < items.starPos.length; ++qq) {
      items.stars[qq] = new CAAT.Actor()
        .setBackgroundImage(director.getImage("slide1_star"))
        .setLocation(items.starPos[qq].x, items.starPos[qq].y)
        .setGlobalAlpha(true)
        .setAlpha(1);
      items.background.addChild(items.stars[qq]);
    }


      balloon = new Balloon().
          setSize(470, 100).          //установка ширины/высоты
          setText("Добро пожаловать в раздел обучения Компании ДИКСИ, посвященный стандартам обслуживания").       //задание текста в баллоне
          setCoords(160,95).        //установка координат правого верхнего угла
          addTail(440, 240,460,480 ).          //добавление хвоста баллона с координатами острия
          addButton(frame0step2).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);



      timeout1 = setTimeout(function() {
          enableAllTransitions();
      },500);


  }



  function frame0step2() {



     balloon.destroyBalloon(200);

    var qq;
    for(qq = 0; qq < items.starPos.length; ++qq) {
      items.stars[qq].moveTo(items.starPos2[qq].x, items.starPos2[qq].y, 1000, 500);
    }

    items.timer.moveTo(items.timer.x+100,items.timer.y,450,0,null,frame0step3);
  }

  function frame0step3() {
    items.man.moveTo(113, items.man.y, 1000, 0, null, frame0step4);
  }

  function frame0step4() {
    items.text2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_text2"))
      .setLocation(483, 218)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text2);

    items.line1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_line1"))
      .setLocation(475, 284)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.line1);

    items.text31 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_text31"))
      .setLocation(730, 370)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text31);
    items.text32 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_text32"))
      .setLocation(730, 526)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text32);
    items.text33 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_text33"))
      .setLocation(730, 691)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text33);
    items.text34 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_text34"))
      .setLocation(730, 840)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text34);
    items.text35 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide1_text35"))
      .setLocation(730, 1018)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.text35);



    var time = 0;
    items.text2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 150;
    items.line1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 500;
    items.text31.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 500;
    items.text32.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 500;
    items.text33.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 500;
    items.text34.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 500;
    items.text35.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 150)
    );
    time += 150 + 500;

    items.timer.moveTo(items.timer.x+100,items.timer.y,time,0,null,frame0step99);
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

          items.man.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.line1.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.text2.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.text31.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.text32.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.text33.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.text34.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.text35.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.stars[0].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.stars[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.stars[2].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.stars[3].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.stars[4].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );


          timeout1 = setTimeout(function() {
              appManager.showNextSlide();
              enableAllTransitions();
          },1500);

      };
  }



  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide1.prototype = new Slide();

function NewUglyTip(data) {
  "use strict";

  this.step = 100;
  this.speed = 50;
  var qq;

  this.img = new CAAT.ActorContainer()
    .setBounds(0, 0, data.w, data.h)
    .setLocation(data.x, data.y)
    .setGlobalAlpha(true)
    .setAlpha(1);
  data.parent.addChild(this.img);

  this.imgs = [];
  for(qq = 0; qq < data.images.length; ++qq) {
    this.imgs[qq] = new CAAT.Actor()
      .setBackgroundImage(director.getImage(data.images[qq]))
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(0);
    this.img.addChild(this.imgs[qq]);
  }

  this.Show = function(callback) {
    var tmp = 0;
    for(qq = 0; qq < this.imgs.length; ++qq) {
      this.imgs[qq].addBehavior(
        new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + tmp, this.speed)
      );
      tmp += this.speed + this.step;
    }
    if(callback) {
      setTimeout(callback, tmp);
    }
  };

  this.Hide = function(callback) {
    var tmp = 0;
    for(qq = this.imgs.length - 1; qq >= 0; --qq) {
      this.imgs[qq].addBehavior(
        new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + tmp, this.speed)
      );
      tmp += this.speed + this.step;
    }
    if(callback) {
      setTimeout(callback, tmp);
    }
  };

  this.Remove = function() {
    for(qq = 0; qq < this.imgs.length; ++qq) {
      this.img.removeChild(this.imgs[qq]);
    }
    data.parent.removeChild(this.img);
  };
}

function NewestUglyTip(data) {
  "use strict";

  var step = 100;
  var speed = 50;
  // 26 27 - 14 14
  // 47 48 - 24 24
  // 316 271 - 158 136
  var x1 = Math.min(data.x1 - 14, data.x2 - 158);
  var y1 = Math.min(data.y1 - 14, data.y2 - 136);
  var x2 = Math.max(data.x1 + 14, data.x2 + 158);
  var y2 = Math.max(data.y1 + 14, data.y2 + 136);
  var ang = Math.atan2(data.y1-data.y2, data.x2-data.x1);

  var qq;
  var img = new CAAT.ActorContainer()
    .setBounds(0, 0, x2-x1, y2-y1)
    .setLocation(x1, y1)
    .setGlobalAlpha(true)
    .setAlpha(0);
  data.parent.addChild(img);
  if(data.zIndex) {
    data.parent.setZOrder(img, data.zIndex);
  }

  var imgs = [];
  imgs[0] = new CAAT.Actor()
    .setBackgroundImage(director.getImage("slide_tipCircle1"))
    .setLocation(data.x1 - x1 - 14, data.y1 - y1 - 14)
    .setGlobalAlpha(true)
    .setAlpha(0);
  img.addChild(imgs[0]);
  imgs[1] = new CAAT.Actor()
    .setBackgroundImage(director.getImage("slide_tipCircle2"))
    .setLocation(data.x1 - x1 + Math.cos(ang) * 40 - 24, data.y1 - y1 - Math.sin(ang) * 40 - 24)
    .setGlobalAlpha(true)
    .setAlpha(0);
  img.addChild(imgs[1]);
  imgs[2] = new CAAT.Actor()
    .setBackgroundImage(director.getImage("slide_tipCircle3"))
    .setLocation(data.x2 - x1 - 158, data.y2 - y1 - 136)
    .setGlobalAlpha(true)
    .setAlpha(0);
  img.addChild(imgs[2]);
  if(data.scale) {
    imgs[2].setScale(data.scale, data.scale);
  }
  var tx = data.x2 - x1 - 158;
  var ty = data.y2 - y1 - 136;
  var ww = 2*158;
  var hh = 2*136;
  imgs[3] = new CAAT.ActorContainer()
    .setBounds(0, 0, ww, hh)
    .setLocation(tx, ty)
    .setGlobalAlpha(true)
    .setAlpha(0);
  img.addChild(imgs[3]);

  if(data.onButton) {
    var sc = data.scale ? data.scale : 1;
    var ysc = sc <= 0.6 ? sc*0.8 : sc;
    var xsc = sc <= 0.6 ? sc*0.55 : sc;
    imgs[4] = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide0_next"))
        .setAlpha(0)
      .setLocation(ww/2 + (ww/2 - 100) * xsc, hh/2 + (hh/2 - 100) * ysc)
      .setGlobalAlpha(true)
      .setAlpha(0);
    img.addChild(imgs[4]);
    imgs[4].mouseEnabled = true;
    imgs[4].mouseEnter = function() { document.body.style.cursor = "pointer"; };
    imgs[4].mouseExit = function() { document.body.style.cursor = "default"; };
    imgs[4].mouseClick = function() { data.onButton(); };
  }

  var lines = data.text.split(/\n/);
  var _txtColor = "#663333";
  var fs = data.fontSize ? data.fontSize : 20;
  for(qq = 0; qq < lines.length; ++qq) {
    var txtLabel = new CAAT.UI.Label()
      .setBounds(0, 0, ww, hh)
      .setStyle( "default",    {
        font        : "DINRoundPro",
        fontSize    : fs,
        fill        : _txtColor,
        tabSize     : 0
      })
      .setText(lines[qq], 0)
      .setHorizontalAlignment("center");
    txtLabel.mouseEnabled = false;
    txtLabel.setLocation((ww - txtLabel.documentWidth) / 2, qq * fs);
    imgs[3].addChild(txtLabel);
  }
  imgs[3].setLocation(tx, ty + (hh - qq*fs)/2);


  this.Show = function(callback) {
    img.setAlpha(1);
    var tmp = 0;
    for(qq = 0; qq < imgs.length; ++qq) {
      imgs[qq].addBehavior(
        new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + tmp, speed)
      );
      tmp += speed + step;
    }
    if(callback) {
      setTimeout(callback, tmp);
    }
  };

  this.Hide = function(callback) {
    var tmp = 0;
    for(qq = imgs.length - 1; qq >= 0; --qq) {
      imgs[qq].addBehavior(
        new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time + tmp, speed)
      );
      tmp += speed + step;
    }
    if(callback) {
      img.setAlpha(0);
      setTimeout(callback, tmp);
    }
  };

  this.Remove = function() {
    for(qq = 0; qq < imgs.length; ++qq) {
      img.removeChild(imgs[qq]);
    }
    data.parent.removeChild(img);
  };
}
