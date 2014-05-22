/**
 * Created by MediuM
 * Author: vadim savelev
 * Date: 21.10.13
 * Time: 13:26
 */
function Preloader() {
    var preloaderContainer = null;
    var preloaderSquares = [];
    var preloaderText = null;
    var man = null;

    /**
     * инициацлизация и отображение прогрессбара на экране
     *
     * @returns {Preloader}     экземпляр прелоадера
     */
    this.startupPreloader = function () {
        preloaderContainer = new CAAT.ActorContainer().
            setBackgroundImage(director.getImage("preloader_back")).
            setLocation(223, SCREEN_HEIGHT);

        var coordX = 5.5;

        preloaderSquares[0] = new CAAT.Actor().
            setBackgroundImage(director.getImage("preloader_first_square")).
            setLocation(coordX, 6).
            setAlpha(0);
        preloaderContainer.addChild(preloaderSquares[0]);

        coordX += 5.5 + preloaderSquares[0].width;

        for (var i = 1; i < 9; i++) {
            preloaderSquares[i] = new CAAT.Actor().
                setBackgroundImage(director.getImage("preloader_square")).
                setLocation(coordX, 6).
                setAlpha(0);
            preloaderContainer.addChild(preloaderSquares[i]);

            coordX += 5.5 + preloaderSquares[i].width;
        }

        preloaderSquares[9] = new CAAT.Actor().
            setBackgroundImage(director.getImage("preloader_first_square")).
            setLocation(coordX, 6).
            setAlpha(0).
            setImageTransformation(CAAT.Foundation.SpriteImage.TR_FLIP_HORIZONTAL);
        preloaderContainer.addChild(preloaderSquares[9]);

        for (i = 0; i < 10; i++) {
            preloaderSquares[i].isShining = false;
        }

        preloaderText = new CAAT.TextActor().
            setFont("17px DINRoundPro-Medium").
            setTextAlign("center").
            setText("Loading...").
            setLocation(177, 45).
            setTextFillStyle("#ff9933").
            setAlpha(1);
        preloaderContainer.addChild(preloaderText);

        scene.addChild(preloaderContainer);

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("preloader_man")).
            setLocation(341, -director.getImage("preloader_man").height).
            setAlpha(1);
        scene.addChild(man);

        shakeMoveTo(preloaderContainer, 223, 400, 35);
        shakeMoveTo(man, 341, 218, 25, 750);

        return this;
    };

    /**
     * изменение прогресса загрузки
     *
     * @param percent {Number}  процент прогресса
     */
    this.changeProgress = function(percent) {
        preloaderText.setText("Loading " + percent + "%");

        var currSquare = Math.ceil(percent / 10) - 1;
        if (currSquare < 0) currSquare = 0;

        for (var i = 0; i < currSquare; i++) {
            if (i < currSquare && preloaderSquares[i].isShining) {
                preloaderSquares[i].emptyBehaviorList();
                preloaderSquares[i].setAlpha(1);
                preloaderSquares[i].isShining = false;
            }
        }

        if (!preloaderSquares[currSquare].isShining) {
            shining(preloaderSquares[currSquare]);
            preloaderSquares[currSquare].isShining = true;
        }

        if (percent == 100) {
            preloaderSquares[9].emptyBehaviorList();
            preloaderSquares[9].setAlpha(1);
            preloaderSquares[9].isShining = false;
        }
    };

    function shining(actor) {
        var t = 500;
        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, t).
            setCycle(true).
            setPingPong();

        actor.addBehavior(showAlphaBeh);
    }

    /**
     * уничтожение прелоадера
     */
    this.destroyPreloader = function() {
        preloaderContainer.moveTo(223, 365, 250, 0, null, function() {
            preloaderContainer.moveTo(223, SCREEN_HEIGHT, 150);});
        man.moveTo(341, 240, 250, 0, null, function() {
            man.moveTo(341, -man.height, 150);});

        setTimeout(function() {
            preloaderContainer.emptyChildren();
            scene.removeChild(preloaderContainer);
        }, 750);
    };
}