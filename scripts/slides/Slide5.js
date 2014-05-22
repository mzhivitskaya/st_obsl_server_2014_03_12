/**
 * Created by ...
 * Author: ...
 * Date:
 * Time:
 *
 * Class Slide5
 */
/* global CAAT:true, disableAllTransitions:true, enableAllTransitions:true, scene:true, InfoPanel:true, director:true, appManager:true, Slide:true */
function Slide5() {
  "use strict";

  var self = this;
  var infoPanel = null;
    var  hintText = null;
  var items = {};
  var curStep = 0;
    var button = null;
    var btnNext = null;
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
    window.s5 = items;
    infoPanel = null;

    items.background = new CAAT.ActorContainer()
      .setBounds(0, 0, 1668, 1252)
      .setLocation(0, 0)
      .setGlobalAlpha(true)
      .setAlpha(1);
    self.container.addChild(items.background);



    items.iconsPos = [
      {x: 77, y: 99},
      {x: 77, y:264},
      {x: 77, y:430},
      {x:259, y:430},
      {x:438, y:430},
      {x:616, y:430},
      {x:616, y:264},
      {x:616, y: 99},
      {x:438, y: 99},
      {x:259, y: 99}
    ];
    items.texts = [
      "Все сотрудники должны беречь товар и материальные ценности Компании",
      "Доброжелателен к покупателям. Нет жалоб от покупателей. Покупатель останется доволен покупкой, если в магазине его встретят доброжелательной искренней улыбкой и готовностью помочь",
      "Внешний вид в порядке. Для всех сотрудников магазинов в зависимости от занимаемой должности предусмотрена специальная форменная одежда",
      "Просрочки и некондиции нет. Покупатель вернется к нам за покупкой, если будет уверен в качестве реализуемого в наших магазинах товара",
      "Сотрудник магазина на рабочем месте не жует, не говорит по телефону, не разговаривает на нерабочие темы, не разговаривает с коллегами в присутствии Покупателя",
      "Каждый сотрудник должен четко выполнять свой функционал работ: Кассир – речевой модуль и фишки. Продавец – чек-листы. Грузчик – порядок в зоне приемки-разгрузки. Уборщица – в магазине чисто",
      "Сотрудник должен соблюдать график отработки чек-листов,  знать наизусть и применять в работе  Ключевые Факторы Успеха",
      "Ценники в порядке. Покупатель должен четко понимать, сколько будет стоить выбранный им товар",
      "Увидел очередь - принял меры. Стоять в очереди не нравится никому. Наши покупатели рассчитывают на быстрое качественное обслуживание",
      "Полка заполнена всем необходимым товаром. Актуальный вкладыш планограммы на месте. Всего несколько пустых полок смогут создать у покупателя стойкое впечатление полупустого магазина, хотя на самом деле это, возможно, и не так"
    ];
    items.icons = [];

    var lastSelIcon = -1;
      count = 0;

    var _onIconClick = function(num) {
      var qq;

      disableAllTransitions();

      var time = 0;

      if(lastSelIcon >= 0) {
        items.icons[lastSelIcon][0].addBehavior(
          new CAAT.Behavior.ScaleBehavior().setValues(1.3, 1, 1.3, 1, 0.5, 0.5).setFrameTime(scene.time, 250)
        );
        time += 250;
      }

      setTimeout(function() {
        if(infoPanel) {
          infoPanel.destroyInfoPanel();
          items.background.removeChild(infoPanel.container);
        }
        infoPanel = new InfoPanel().startupInfoPanel(365, 164, items.texts[num], false, frame0step2, 17);
        items.background.addChild(infoPanel.container.setLocation(220, 236));
        infoPanel.showInfoPanel(400);
      }, time);

      items.icons[num][0].addBehavior(
        new CAAT.Behavior.ScaleBehavior().setValues(1, 1.3, 1, 1.3, 0.5, 0.5).setFrameTime(scene.time + time, 250)
      );
      if(items.icons[num][2].alpha < 1) {
          count++;
        items.icons[num][2].addBehavior(
          new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time + time, 250)
        );
        time += 100;
      }

      lastSelIcon = num;

    if (count == 10)
    {
        var buttonNextSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("gui_next_btn"), 1, 2).
            addAnimation("idle", [0], 300).
            addAnimation("over", [1], 300);
        btnNext = new CAAT.Actor().
            setBackgroundImage(buttonNextSprite).
            setLocation(737, 500).
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
            self.container.removeChild(hintText);
            infoPanel.destroyInfoPanel();
            items.background.removeChild(infoPanel.container);

            var q;

            for(q = 0; q < items.iconsPos.length; ++q) {
                items.icons[q][2].addBehavior(
                    new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 1000)
                );
                items.icons[q][1].addBehavior(
                    new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time, 0)
                );
            }


            var   timeout1 = setTimeout(function() {
                appManager.showNextSlide();
                enableAllTransitions();
            },1500);

        };
    }


      self.sleep(time, function() {
        enableAllTransitions();
      });
    };

    var _createIcon = function(num) {
      var res = self.createMultiActor({
        parent: items.background,
        x:items.iconsPos[num].x, y:items.iconsPos[num].y, w:108, h:108,
        images:["slide5_icon"+(qq+1)+"a","slide5_icon"+(qq+1)+"b"]
      });
      res[1].mouseEnabled = false;
      res[2].mouseEnabled = false;
      res[0].mouseEnabled = true;
      res[0].mouseEnter = function() { document.body.style.cursor = "pointer"; };
      res[0].mouseExit = function() { document.body.style.cursor = "default"; };
      res[0].mouseClick = function() {
        _onIconClick(num);

      };

      return res;
    };

    var qq, tmp;
    for(qq = 0; qq < items.iconsPos.length; ++qq) {
      tmp = _createIcon(qq);
      items.icons[qq] = tmp;
    }



    frame0step1();
  }

  function frame0step1() {
    enableAllTransitions();
      hintText = new CAAT.TextActor().
          setFont("12px DINRoundPro").
          setTextAlign("left").
          setText("Для просмотра правил нажимайте на значки").
          setTextFillStyle("#663333").
          setLocation(460, 545);
      self.container.addChild(hintText);

    var qq;
    for(qq = 0; qq < items.iconsPos.length; ++qq) {
      items.icons[qq][0].setAlpha(1);
      items.icons[qq][1].setAlpha(1);
    }

    items.icons[0][0].mouseClick();
  }

  function frame0step2() {
    if(infoPanel) {
      infoPanel.destroyInfoPanel();
      items.background.removeChild(infoPanel.container);
    }

    frame0step100();
  }

  function frame0step100() {
    appManager.showNextSlide();
  }

  this.destroyIt = function() {
    document.body.style.cursor = "default";
  };
}

Slide5.prototype = new Slide();