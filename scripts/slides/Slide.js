/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 30.08.13
 * Time: 13:36
 *
 * Class Slide
 */
function Slide() {
  this.container = null;
  this.infoNum = 0;

  this.visited = false;

  this.startupSlide = function() {
      return this;
  };

  this.showSlide = function() {
      this.infoNum = 0;

      this.container = new CAAT.ActorContainer().
          setBounds(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT).
          setLocation(0, 0).
          setGlobalAlpha(true);
      backLayer.addChild(this.container);

      this.setPartName();
      this.setSlideName();

      if (slideNames[currentSlide].part != 0 && slideNames[currentSlide].part != slideNames[currentSlide - 1].part) this.showTransition();
      else {
          this.showFrame0();
          this.visited = true;
      }

      menu.regenList();

      if (currentSlide == 0) menu.disableBackBtn();
      else menu.enableBackBtn();

      if (currentSlide >= slides.length - 1 || !slides[currentSlide + 1].visited) menu.disableForwardBtn();
      else menu.enableForwardBtn();
  };

  this.setPartName = function() {
      screenManager.setPartNameText(partNames[slideNames[currentSlide].part]);
  };

  this.setSlideName = function() {
      screenManager.setSlideNameText(slideNames[currentSlide].txt);
  };

  this.showTransition = function() {
    var ox = (800 - 309)/2;
    var oy = (600 - 365)/2;

    var tea1 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("gui_tea1"))
      .setLocation(ox, oy)
      .setAlpha(0);
    var tea2 = new CAAT.Actor()
      .setBackgroundImage(director.getImage("gui_tea2"))
      .setLocation(ox, oy)
      .setAlpha(0);

    this.container.addChild(tea1);
    this.container.addChild(tea2);


    tea1.addBehavior(new CAAT.AlphaBehavior().setValues(0, 1).setFrameTime(scene.time, 150));
    var timeout = setTimeout(function()
    {
         tea2.setAlpha(1);
         tea1.setAlpha(0);
    }, 800);



    tea2.addBehavior(new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(scene.time+1200, 500));

      var self = this;
      setTimeout(function() {
        tea1.emptyBehaviorList();
        tea2.emptyBehaviorList();
        self.container.emptyChildren();
        self.showFrame0();
          self.visited = true;
      }, 1900);
  };

  this.destroySlide = function() {
      this.destroyIt();

      var hideAlphaBeh = new CAAT.AlphaBehavior().
          setValues(1, 0).
          setFrameTime(scene.time, 250);
      this.container.addBehavior(hideAlphaBeh);

      var self = this;
      setTimeout(function() {
          self.container.emptyChildren();
          self.container.emptyBehaviorList();
          scene.removeChild(self.container);
      }, 260);
  };

  this.destroyIt = function(){};

  /********************************************************************************
   * addition function
   ********************************************************************************/
  this.waitForClick = function(obj, callback) {
    "use strict";

    if(!obj) {
      return;
    }

    obj.mouseEnabled = true;
    obj.mouseEnter = function() { document.body.style.cursor = "pointer"; };
    obj.mouseExit = function() { document.body.style.cursor = "default"; };
    obj.mouseClick = function() {
      document.body.style.cursor = "default";
      obj.mouseEnabled = false;
      obj.mouseEnter = function() {};
      obj.mouseExit = function() {};
      obj.mouseClick = function() {};
      if(callback) {
        callback();
      }
    };
  }

  // data -- {parent, x, y, w, h, images:[]}
  this.createMultiActor = function(data) {
    var res = [];
    res[0] = new CAAT.ActorContainer()
      .setBounds(0, 0, data.w, data.h)
      .setLocation(data.x, data.y)
      .setGlobalAlpha(true)
      .setAlpha(0);
    data.parent.addChild(res[0]);

    var qq;
    for(qq = 0; qq < data.images.length; ++qq) {
      res[qq+1] = new CAAT.Actor()
        .setBackgroundImage(director.getImage(data.images[qq]))
        .setLocation(0, 0)
        .setGlobalAlpha(true)
        .setAlpha(0);
      res[0].addChild(res[qq+1]);
    }
    return res;
  };

  this.sleep = function(time, callback) {
    var that = this;
    var _timer = new CAAT.ActorContainer()
      .setBounds(0, 0, 1, 1)
      .setGlobalAlpha(true)
      .setLocation(0, 0)
      .setAlpha(0);
    that.container.addChild(_timer);

    _timer.moveTo(_timer.x+100,_timer.y,time,0,null,function(){
      that.container.removeChild(_timer);
      _timer = null;

      if(callback) {
        callback();
      }
    });
  };
}
