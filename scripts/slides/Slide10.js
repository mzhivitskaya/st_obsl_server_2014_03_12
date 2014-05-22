/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide10
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide10() {
  "use strict";

  var self = this;
  var infoPanel = null;
  var items = {};
  var curStep = 0;
    var count = null;
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
    window.s10 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);

    items.men = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide10_men"))
      .setLocation(84, 163)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men);

    items.men2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide10_men2"))
      .setLocation(552, 106)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.men2);

    items.line1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("slide10_line1"))
      .setLocation(217, 270)
      .setGlobalAlpha(true)
      .setAlpha(0);
    items.background.addChild(items.line1);
    items.mask = new CAAT.Path()
      .beginPath(0, 0)
      .addLineTo(394, 0)
      .addLineTo(394, 4)
      .addLineTo(0, 4)
      .addLineTo(0, 0)
      .endPath();

    items.line1.setClip(true, items.mask);

    items.tip1 = self.createMultiActor({
      parent:items.background,
      x:248, y:163, w:206, h:105,
      images: ["slide10_tip1","slide10_tip2","slide10_tip3"]
    });
    items.tip1[0].setAlpha(1);



    frame0step1();
  }

  function frame0step1() {
    items.men.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );
    items.men2.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 500)
    );

    enableAllTransitions();
      count = 0;
      balloon = new Balloon().
          setSize(452, 159).          //установка ширины/высоты
          setText("<b>Первый этап обслуживания:</b><br>• установить зрительный контакт (доброжелательный открытый взгляд);").       //задание текста в баллоне
          setCoords(183,385).        //установка координат правого верхнего угла
          addButton(frame0step3).     //добавление кнопки. агрумент - коллбэк-функция
          setLayer(self.container).
          createBalloon(500);


      items.line1.addBehavior(
      new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+500, 0)
    );
    items.mask.addBehavior(
      new CAAT.ScaleBehavior().setFrameTime(scene.time+500, 2000).setValues(0, 1, 1, 1, 0, 0)
    );
  }



  function frame0step3() {
      if (count == 0 ){
          count++;

          balloon.changeText("<b>Первый этап обслуживания:</b><br>• установить зрительный контакт (доброжелательный открытый взгляд);<br>• начать общение нужно с доброжелательной улыбки и приветствия;") ;

          items.tip1[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+250, 0)
          );
          items.tip1[2].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+250, 0)
          );
      } else if (count ==1){
          count++;

          balloon.changeText("<b>Первый этап обслуживания:</b><br>• установить зрительный контакт (доброжелательный открытый взгляд);<br>• начать общение нужно с доброжелательной улыбки и приветствия;<br>• cледите за тоном голоса. Не допускайте повышения голоса и грубого обращения") ;


          items.tip1[3].addBehavior(
              new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time+250, 0)
          );
  }
      else if (count == 2){
          disableAllTransitions();
          balloon.destroyBalloon(100);

          items.men.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.men2.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.line1.addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.tip1[1].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );

          items.tip1[2].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );
          items.tip1[3].addBehavior(
              new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
          );



          var   timeout1 = setTimeout(function() {
              appManager.showNextSlide();
              enableAllTransitions();
          },1500);


      }
  }



  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide10.prototype = new Slide();