/**
 * @fileOverview класс Menu. создает и описывает поведение меню в левом нижнем углу
 *
 * @copyright MediuM, Minsk
 * @author vadim savelev
 * @date 22.10.13
 * @time 15:30
 * @version 1.1.4
 */

/**
 * конструктор Menu
 * @constructor
 */
function Menu() {
    var self = this;

    var container = null;
    var bottomLine = null;

    var menuOpenBtn = null;
    //var menuBtn = null;
    var backBtn = null;
    var reloadBtn = null;
    var forwardBtn = null;

    var menuBack = null;

    var partLinks = [];

    /**
     * флаг "открыто полное меню со списком глав"
     * @type {boolean}
     */
    var menuShowed = false;
    /**
     * флаг "открыто кнопочное меню"
     * @type {boolean}
     */
    var menuButtonsShowed = false;
    /**
     * флаг "меню разрешено"
     * @type {boolean}
     */
    var menuEnabled = true;
    /**
     * флаг "кнопка "назад" в меню разрешена"
     * @type {boolean}
     */
    var backBtnEnabled = true;
    /**
     * флаг "кнопка "перезагрузка" в меню разрешена"
     * @type {boolean}
     */
    var reloadBtnEnabled = true;
    /**
     * флаг "кнопка "вперед" в меню разрешена"
     * @type {boolean}
     */
    var forwardBtnEnabled = true;
    /**
     * флаг "кнопка открытия меню разрешена"
     * @type {boolean}
     */
    var menuOpenBtnEnabled = true;
    /**
     * флаг "кнопка "содержание" в меню разрешена"
     * @type {boolean}
     */
    //var menuBtnEnabled = true;

    /**
     * инициализация и добавление меню
     * @returns {Menu}  меню
     */
    this.startupMenu = function() {
        container = new CAAT.ActorContainer().
            setBounds(0, 0, director.getImage("menu_bottom_line").width + director.getImage("menu_open_btn").width / 2, director.getImage("menu_bottom_line").height + director.getImage("menu_back").height).
            setLocation(-708, 486 - director.getImage("menu_back").height).
            setGlobalAlpha(true).
            setAlpha(0);
        scene.addChild(container);

        bottomLine = new CAAT.Actor().
            setBackgroundImage(director.getImage("menu_bottom_line")).
            setLocation(0, director.getImage("menu_back").height);
        container.addChild(bottomLine);

        menuOpenBtn = new CAAT.Actor().
            setBackgroundImage(director.getImage("menu_open_btn")).
            setLocation(container.width - director.getImage("menu_open_btn").width, bottomLine.y);
        container.addChild(menuOpenBtn);

        menuBack = new CAAT.ActorContainer().
            setBackgroundImage(director.getImage("menu_back")).
            setLocation(director.getImage("menu_bottom_line").width - 2 * director.getImage("menu_back").width, 2);
        container.addChild(menuBack);

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, 1500);

        container.addBehavior(showAlphaBeh);

        menuOpenBtn.mouseEnter = mouseEnter;
        menuOpenBtn.mouseExit = mouseExit;
        menuOpenBtn.mouseClick = mouseClickOpenMenuBtn;

        createButtons();
        createList();
        createDocumentClickListener();

        return this;
    };

    /**
     * создание кнопок меню
     */
    function createButtons() {
        var buttonsSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("menu_btns"), 4, 4).
            //addAnimation("menu_idle", [0], 300).
            //addAnimation("menu_over", [1, 2, 3, 2, 1, 2, 3, 2, 1, 1, 1, 1], 100).
            addAnimation("back_idle", [4], 300).
            addAnimation("back_over", [5], 300).
            addAnimation("reload_idle", [8], 300).
            addAnimation("reload_over", [9], 300).
            addAnimation("forward_idle", [12], 300).
            addAnimation("forward_over", [13], 300);
/*
        menuBtn  = new CAAT.Actor().
            setBackgroundImage(buttonsSprite).
            setLocation(515, bottomLine.y + 9);
*/
        backBtn  = new CAAT.Actor().
            setBackgroundImage(buttonsSprite).
            setLocation(565, bottomLine.y + 9);
        reloadBtn  = new CAAT.Actor().
            setBackgroundImage(buttonsSprite).
            setLocation(615, bottomLine.y + 9);
        forwardBtn  = new CAAT.Actor().
            setBackgroundImage(buttonsSprite).
            setLocation(665, bottomLine.y + 9);
        //container.addChild(menuBtn);
        container.addChild(backBtn);
        container.addChild(reloadBtn);
        container.addChild(forwardBtn);

        //menuBtn.playAnimation("menu_idle");
        backBtn.playAnimation("back_idle");
        reloadBtn.playAnimation("reload_idle");
        forwardBtn.playAnimation("forward_idle");
/*
        menuBtn.mouseEnter = function() {
            if (menuBtnEnabled) {
                document.body.style.cursor = "pointer";
                menuBtn.playAnimation("menu_over");
            }
        };
        menuBtn.mouseExit = function() {
            document.body.style.cursor = "default";
            menuBtn.playAnimation("menu_idle");
        };
        menuBtn.mouseClick = function() {
            if (menuBtnEnabled) {
                if (menuShowed) hideMenu();
                else showMenu();
            }
        };
*/
        backBtn.mouseEnter = function() {
            if (backBtnEnabled) {
                document.body.style.cursor = "pointer";
                backBtn.playAnimation("back_over");

                var rotationBeh = new CAAT.Behavior.RotateBehavior().
                    setFrameTime(scene.time, 1000).
                    setValues(-15 * Math.PI / 180, 15 * Math.PI / 180, .5, .5).setCycle(true).setPingPong();
                backBtn.addBehavior(rotationBeh);
            }
        };
        backBtn.mouseExit = function() {
            if (backBtnEnabled) {
                backBtn.emptyBehaviorList();
                backBtn.setRotationAnchored(0, .5, .5);
                document.body.style.cursor = "default";
                backBtn.playAnimation("back_idle");
            }
        };
        backBtn.mouseClick = function() {
            if (backBtnEnabled) {
                hideButtonsMenu();
                if (menuShowed) hideMenu();
                if (currentSlide != 0) appManager.showPreviousSlide();
            }
        };

        reloadBtn.mouseEnter = function() {
            if (reloadBtnEnabled) {
                document.body.style.cursor = "pointer";
                reloadBtn.playAnimation("reload_over");

                var rotationBeh = new CAAT.Behavior.RotateBehavior().
                    setFrameTime(scene.time, 4000).
                    setValues(0, 360 * Math.PI / 180, .5, .5).
                    setCycle(true);
                reloadBtn.addBehavior(rotationBeh);
            }
        };
        reloadBtn.mouseExit = function() {
            if (reloadBtnEnabled) {
                reloadBtn.emptyBehaviorList();
                reloadBtn.setRotationAnchored(0, .5, .5);
                document.body.style.cursor = "default";
                reloadBtn.playAnimation("reload_idle");
            }
        };
        reloadBtn.mouseClick = function() {
            if (reloadBtnEnabled) {
                hideButtonsMenu();
                if (menuShowed) hideMenu();
                appManager.reloadSlide();
            }
        };

        forwardBtn.mouseEnter = function() {
            if (forwardBtnEnabled) {
                document.body.style.cursor = "pointer";
                forwardBtn.playAnimation("forward_over");

                var rotationBeh = new CAAT.Behavior.RotateBehavior().
                    setFrameTime(scene.time, 1000).
                    setValues(-15 * Math.PI / 180, 15 * Math.PI / 180, .5, .5).setCycle(true).setPingPong();
                forwardBtn.addBehavior(rotationBeh);
            }
        };
        forwardBtn.mouseExit = function() {
            if (forwardBtnEnabled) {
                forwardBtn.emptyBehaviorList();
                forwardBtn.setRotationAnchored(0, .5, .5);
                document.body.style.cursor = "default";
                forwardBtn.playAnimation("forward_idle");
            }
        };
        forwardBtn.mouseClick = function() {
            if (forwardBtnEnabled) {
                hideButtonsMenu();
                if (menuShowed) hideMenu();
                appManager.showNextSlide();
            }
        };
    }

    /**
     * выезд кнопочной части меню из-за края экрана
     */
    this.showButtonsMenu = function() {
        showButtonsMenu();
    };

    /**
     * выезд кнопочной части меню из-за края экрана
     */
    function showButtonsMenu() {
        menuButtonsShowed = true;
        container.moveTo(-500, container.y, 1000, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false));

        backBtn.emptyBehaviorList();
        backBtn.setRotationAnchored(0, .5, .5);
        backBtn.playAnimation("back_idle");

        reloadBtn.emptyBehaviorList();
        reloadBtn.setRotationAnchored(0, .5, .5);
        reloadBtn.playAnimation("reload_idle");

        forwardBtn.emptyBehaviorList();
        forwardBtn.setRotationAnchored(0, .5, .5);
        forwardBtn.playAnimation("forward_idle");

        showMenu();
    }

    /**
     * возврат кнопочной части меню за экран
     */
    function hideButtonsMenu() {
        if (menuShowed) hideMenu();
        else {
            menuButtonsShowed = false;
            container.moveTo(-708, container.y, 1000, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false));
        }
    }

    /**
     * обработка события наведения курсора мыши на кнопки меню
     */
    function mouseEnter() {
        if (menuOpenBtnEnabled) document.body.style.cursor = "pointer";
    }

    /**
     * обработка события увода курсора мыши на кнопки меню
     */
    function mouseExit() {
        document.body.style.cursor = "default";
    }

    /**
     * обработка собтия клика по кнопке открытия меню
     */
    function mouseClickOpenMenuBtn() {
        if (menuOpenBtnEnabled) {
            if (!menuButtonsShowed) showButtonsMenu();
            else if (menuButtonsShowed) hideButtonsMenu();
        }
    }

    /**
     * кроссбраузерная обработка события мыши
     * @param e             событие мыши
     * @returns {Event|*}   событие мыши после обработки
     */
    function fixEvent(e) {
        e = e || window.event;

        if (e.pageX == null && e.clientX != null)
        {
            var html = document.documentElement;
            var body = document.body;
            e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
            e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
        }

        if (!e.which && e.button)
        {
            e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
        }

        return e;
    }

    /**
     * отображение полной версии меню со списком глав
     */
    this.showMenu = function() {
        showMenu();
    };

    /**
     * отображение полной версии меню со списком глав
     */
    function showMenu() {
        menuShowed = true;
        menuButtonsShowed = true;
        backLayer.mouseEnabled = false;

        menuBack.moveTo(container.width - menuBack.width - menuOpenBtn.width, menuBack.y, 350);
        container.moveTo(-174, container.y, 1000, 350, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            menuBack.emptyBehaviorList();
            container.emptyBehaviorList();
        });
    }

    /**
     * закрытие полной версии меню
     */
    this.hideMenu = function() {
        hideMenu();
    };

    /**
     * закрытие полной версии меню
     */
    function hideMenu() {
        menuShowed = false;
        menuButtonsShowed = false;
        container.moveTo(-708, container.y, 1000, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            container.emptyBehaviorList();
            backLayer.mouseEnabled = true;
        });
        menuBack.moveTo(container.width - 2 * menuBack.width, menuBack.y, 1000, 700, null, function() {
            menuBack.emptyBehaviorList();
        });
    }

    /**
     * создание списка глав в полной версии меню
     */
    function createList() {
        partLinks = [];
        var coordY = 25;

        for (var i = 0; i < partNames.length; i++) {
            partLinks[i] = new CAAT.TextActor().
                setFont("17px DINRoundPro").
                setTextAlign("left").
                setText(partNames[i]).
                setLocation(35, coordY).
                setTextFillStyle("#663333");
            menuBack.addChild(partLinks[i]);

            partLinks[i].id = i;
            partLinks[i].mouseEnter = mouseEnterPart;
            partLinks[i].mouseExit = mouseExitPart;
            partLinks[i].mouseClick = mouseClickPart;

            partLinks[i].clickEnabled = false;

            coordY += 25;
        }

        self.regenList();
    }

    /**
     * обработка события наведения курсора мыши на главы
     */
    function mouseEnterPart(event) {
        if (event.source.clickEnabled && menuEnabled) document.body.style.cursor = "pointer";
    }

    /**
     * обработка события увода курсора мыши на главы
     */
    function mouseExitPart(event) {
        document.body.style.cursor = "default";
    }

    /**
     * обработка события клика по пункту меню
     * @param event     событие
     */
    function mouseClickPart(event) {
        if (event.source.clickEnabled && menuEnabled) {
            var id = parseInt(event.source.id);

            for (var i = 0; i < slideNames.length; i++) {
                if (slideNames[i].part == id) {
                    hideMenu();
                    appManager.showSlide(i);
                    break;
                }
            }
        }
    }

    /**
     * разрешить меню
     */
    this.enableMenu = function() {
        menuOpenBtnEnabled = true;
        backBtnEnabled = true;
        reloadBtnEnabled = true;
        forwardBtnEnabled = true;
        //menuBtnEnabled = true;
        menuEnabled = true;
    };

    /**
     * разрешить кнопку назад
     */
    this.enableBackBtn = function() {
        backBtnEnabled = true;
    };

    /**
     * разрешить кнопку перезагрузка
     */
    this.enableReloadBtn = function() {
        reloadBtnEnabled = true;
    };

    /**
     * разрешить кнопку вперед
     */
    this.enableForwardBtn = function() {
        forwardBtnEnabled = true;
    };

    /**
     * разрешить кнопку открытия кнопочного меню
     */
    this.enableMenuOpenBtn = function() {
        menuOpenBtnEnabled = true;
    };

    /**
     * запретить меню
     */
    this.disableMenu = function() {
        menuOpenBtnEnabled = false;
        backBtnEnabled = false;
        reloadBtnEnabled = false;
        forwardBtnEnabled = false;
        //menuBtnEnabled = false;
        menuEnabled = false;
    };

    /**
     * запретить кнопку назад
     */
    this.disableBackBtn = function() {
        backBtnEnabled = false;
    };

    /**
     * запретить кнопку перезагрузка
     */
    this.disableReloadBtn = function() {
        reloadBtnEnabled = false;
    };

    /**
     * запретить кнопку вперед
     */
    this.disableForwardBtn = function() {
        forwardBtnEnabled = false;
    };

    /**
     * запретить кнопку открытия кнопочного меню
     */
    this.disableMenuOpenBtn = function() {
        menuOpenBtnEnabled = false;
    };

    /**
     * мигание кнопкой открытия полного меню
     */
    /*this.flashMenuBtn = function() {
        menuBtn.playAnimation("menu_over");
        setTimeout(function() {
            menuBtn.playAnimation("menu_idle");
        }, 1000);
    };
*/
    function createDocumentClickListener() {
        document.onclick = function(event) {
            if (menuEnabled) {
                event = fixEvent(event);

                if (menuButtonsShowed || menuShowed) {
                    if (event.pageX > container.x + container.width) {
                        if (menuShowed) hideMenu();
                        hideButtonsMenu();
                    }
                }
            }
        };
    }

    /**
     * обновление списка глав в меню
     * выставляет флаг разрешения открыть главу, если пользователь может перейти на первый слайд главы
     */
    this.regenList = function() {
        var j = 0;
        var loop = true;

        for (var i = 0; i < partLinks.length; i ++) {
            loop = true;

            //console.log("part: " + slideNames[j].part + " is visited " + slides[j].visited);
            while (loop) {
                if (slideNames[j].part == i) break;
                j++;
            }

            if (slides[j].visited) {
                partLinks[i].setFont("17px DINRoundPro-Medium");
                partLinks[i].clickEnabled = true;
            }
            else {
                partLinks[i].setFont("17px DINRoundPro");
                partLinks[i].clickEnabled = false;
            }
        }
    };
}