/**
 * @fileOverview класс AppManager
 *
 * @copyright MediuM, Minsk
 * @co-author vadim savelev
 * @date 12.04.14
 * @version 1.0.0
 */

/**
 * конструктор менеджера приложения
 * @constructor
 */
function AppManager() {
    var preloader = null;

    /**
     * инициализация менеджера приложения - создание основных элементов, менеджеров, загрузка ресурсов и тд
     * @returns {AppManager}    менеджер
     */
    this.startupAppManager = function () {
        CAAT.DEBUG = DEBUG;
        director = new CAAT.Director().
            initialize(SCREEN_WIDTH, SCREEN_HEIGHT, "canvas");
        scene = director.createScene();
        scene.setFillStyle("white");
        CAAT.loop(FPS);

        screenManager = new ScreenManager().startupScreenManager();
        scormManager = new ScormManager().startupScormManager();

        window.onresize = function() {screenManager.onResize();};
        screenManager.onResize();

        loadPreloader();

        return this;
    };

    /**
     * загрузка прелоадера
     */
    function loadPreloader(){
        new CAAT.ImagePreloader().loadImages(
            preloaderImageSources,
            function (counter, images) {
                if (counter == images.length)
                {
                    director.setImagesCache(images);
                    setTimeout(function() {
                        preloader = new Preloader().startupPreloader();
                        setTimeout(loadResources, 2500);
                    }, 1000);
                }
            });
    }

    /**
     * загрузка ресурсов
     */
    function loadResources(){
        new CAAT.ImagePreloader().loadImages(
            imageSources,
            function (counter, images) {
                preloader.changeProgress(Math.round(counter / images.length * 100));

                if (counter == images.length)
                {
                    setTimeout(preloader.destroyPreloader, 1000);
                    director.setImagesCache(images);
                    if (DEBUG) screenManager.addDbgTxt("resources loaded");

                    setTimeout(screenManager.createBaseGUI, 2000);
                    initSlides();

                    if (!SERVER) {
                        setTimeout(function() {
                            appManager.showSlide(currentSlide);
                        }, 2250);
                    } else connectScorm();
                }
            });
    }

    /**
     * соединение с SCORM API, установка начальных и загрузка уже имеющихся значений
     */
    function connectScorm() {
        if (scormManager.connect()) {
            //scormManager.setSuspendData("");

            scormManager.getLessonStatus();
            scormManager.getSuspendData();
            scormManager.getRaw();

            if (scormManager.lessonStatus == SCORM_API_STATUS_NOT_ATTEMPTED || scormManager.lessonStatus == SCORM_API_STATUS_INCOMPLETE || scormManager.lessonStatus == SCORM_API_STATUS_FAILED || scormManager.lessonStatus == SCORM_API_STATUS_UNKNOWN) scormManager.setLessonStatus(SCORM_API_STATUS_INCOMPLETE);

            if (scormManager.suspendDataArray.length == 0) {
                scormManager.suspendDataArray = [];

                for (var i = 0; i < slides.length + 1; i++) {
                    scormManager.suspendDataArray[i] = 0;
                }
	            //scormManager.suspendDataArray[scormManager.suspendDataArray.length - 1] = slides.length - 1;

                scormManager.setSuspendDataFromArray();
            } else {
                for (i = 0; i < slides.length; i++) {
                    slides[i].visited = scormManager.suspendDataArray[i] == 1;
                }
            }

            currentSlide = parseInt(scormManager.suspendDataArray[scormManager.suspendDataArray.length - 1]);

            setTimeout(function() {
                appManager.showSlide(currentSlide);
            }, 2250);
        } else alert("LMS connection error");
    }

    /**
     * инициализация всех слайдов проекта
     */
    function initSlides() {
	    slides = [];
	    slides.push(new Slide1().startupSlide());
	    slides.push(new Slide2().startupSlide());
	    slides.push(new Slide3().startupSlide());
	    slides.push(new Slide4().startupSlide());
	    slides.push(new Slide4kfu().startupSlide());
	    slides.push(new Slide5().startupSlide());
	    slides.push(new Slide6().startupSlide());
	    slides.push(new Slide7().startupSlide());
	    slides.push(new Slide8().startupSlide());
	    slides.push(new Slide9().startupSlide());
	    slides.push(new Slide10().startupSlide());
	    slides.push(new Slide11().startupSlide());
	    slides.push(new Slide12().startupSlide());
	    slides.push(new Slide13().startupSlide());
	    slides.push(new Slide14().startupSlide());
	    slides.push(new Slide15().startupSlide());
	    slides.push(new Slide16().startupSlide());
	    slides.push(new Slide17().startupSlide());
	    slides.push(new Slide18().startupSlide());
	    slides.push(new Slide19().startupSlide());
	    slides.push(new Slide20().startupSlide());
	    slides.push(new Slide21().startupSlide());
	    slides.push(new Slide22().startupSlide());
	    slides.push(new Slide23().startupSlide());
	    slides.push(new Slide24().startupSlide());
    }

    /**
     * уничтожение текущего и отображение слайда с конкретным номером
     * @param id    номер загружаемого слайда
     */
    this.showSlide = function(id) {
        try {
            slides[parseInt(currentSlide)].destroySlide();
        } catch (err) {}

        currentSlide = parseInt(id);

        if (currentSlide >= 0 && currentSlide < slideNames.length) {
            setTimeout(function() {
                slides[currentSlide].showSlide();
                slides[currentSlide].visited = true;
                menu.regenList();

                if (SERVER) {
                    if (currentSlide != slides.length - 1) scormManager.suspendDataArray[currentSlide] = 1;
                    scormManager.suspendDataArray[scormManager.suspendDataArray.length - 1] = currentSlide;
                    scormManager.setSuspendDataFromArray();

                    var allPassed = true;
                    for (var i = 0; i < scormManager.suspendDataArray.length - 1; i++) {
                        if (scormManager.suspendDataArray[i] != 1) {
                            allPassed = false;
                            break;
                        }
                    }

                    if (allPassed) {
                        scormManager.setLessonStatus(SCORM_API_STATUS_COMPLETED);
                        if (SCORM_VERSION == "2004") scormManager.setSuccessStatus(SCORM_API_STATUS_PASSED);
                    }
                }
            }, 300);
        }

        if (currentSlide == 0) menu.disableBackBtn();
        else menu.enableBackBtn();
try {
	if (!slides[currentSlide + 1].visited) menu.disableForwardBtn();
	else menu.enableForwardBtn();
} catch (err) {}

	    //console.log(scormManager.suspendDataArray.toString());

    };

    /**
     * отображение следующего слайда
     */
    this.showNextSlide = function() {
        appManager.showSlide(currentSlide + 1);
    };

    /**
     * перезагрузка текущего слайда
     */
    this.reloadSlide = function() {
        appManager.showSlide(currentSlide);
    };

    /**
     * отображение предыдущего слайда
     */
    this.showPreviousSlide = function() {
        appManager.showSlide(currentSlide - 1);
    };
}
