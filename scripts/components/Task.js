/**
 * @fileOverview класс Test. создает и описывает поведение слайда теста
 *
 * @copyright MediuM, Minsk
 * @author vadim savelev
 * @date 10.09.13
 * @time 13:52
 * @version 1.1.1
 */

/**
 * конструктор Test
 * @constructor
 */
function Task() {
    var self = this;

    var questions = [];
    var callback = null;
    var slide = null;

    var current = 0;
    var questNumber = 0;
    var testNumbers = [];
    var questionText = null;
    var hintText = null;
    var hintText2 = null;
    var button = null;
    var lenin = null;
    var leninSay = null;
    var line = null;

    var king = null;
    var cloud1 = null;
    var cloud2 = null;
    var cloud3 = null;
    var task = null;
    var man = null;

    var buttonActive = false;
    var correctAnswers = [];

    this.startupTest = function(quests, sld, cllbck) {
        questions = quests;
        slide = sld;
        callback = cllbck;

        return this;
    };

    this.startTest = function() {
        current = 0;
        buttonActive = false;
        questNumber = questions.length;

        for (var i = 0; i < questNumber; i++) {
            correctAnswers[i] = false;
        }

        addBack();
        createButton();
        createQuestionText();
        createHint();



        setTimeout(showQuestion, 1000);
    };


    function createButton() {
        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time + 500, 1000);
        var buttonSprite = new CAAT.Foundation.SpriteImage().
            initialize(director.getImage("test_button"), 1, 2).
            addAnimation("idle", [0], 300).
            addAnimation("next", [1], 300);
        button = new CAAT.Actor().
            setBackgroundImage(buttonSprite).
            setLocation(680, 470).
            setAlpha(0);
        slide.container.addChild(button);
        button.playAnimation("idle");
        button.addBehavior(showAlphaBeh);

        button.clicked = false;

        button.mouseEnter = mouseEnter;
        button.mouseExit = mouseExit;
        button.mouseClick = mouseClickButton;
    }

    function createQuestionText(){
       /* questionText = new CAAT.TextActor().
            setFont("17px DINRoundPro-Medium").
            setTextAlign("left").
            setText(questions[current].question).
            setTextFillStyle("#663300").
            setLocation(-700, 165);
        slide.container.addChild(questionText);
        */


        questionText = new CAAT.UI.Label().
            setBounds(0, 0, 235, 100).
            setStyle( "default",    {
                font        : "DINRoundPro",
                fontSize    : 17,
                fill        : "#663300",
                tabSize     : 0
            }).
            setText(questions[current].question, 235).setLocation(-700,165);
        slide.container.addChild(questionText);
    }

    function createHint() {


        hintText2 = new CAAT.TextActor().
            setFont("12px DINRoundPro").
            setTextAlign("left").
            setText("Выберите правильный вариант, нажмите кнопку проверка. Для перехода к следующему вопросу снова нажмите на кнопку ").
            setTextFillStyle("#663333").
            setLocation(50, 540).
            setAlpha(0);
        slide.container.addChild(hintText2);
    }

    function showQuestion() {
       // testNumbers[current].playAnimation("current");

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time, 250);

        var showAlphaBeh2 = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time+250, 500);

        if (questions[current].type == 1)
        {
          //  hintText.setText("Выберите правильный вариант, нажмите кнопку проверка.");
            hintText2.setText("Выберите правильный вариант, нажмите кнопку проверка. Для перехода к следующему вопросу снова нажмите на кнопку");
        }
       // else if (questions[current].type == 2)
        //{
           // hintText.setText("Выберите все правильные варианты, нажмите кнопку проверка.");
           // hintText2.setText("Для перехода к следующему вопросу снова нажмите на кнопку");
       // }
       // hintText.addBehavior(showAlphaBeh);
        hintText2.addBehavior(showAlphaBeh);

        questionText.setText(questions[current].question,235).setAlpha(0);
        questionText.moveTo(155, 140, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false));
        questionText.addBehavior(showAlphaBeh2);

        createAnswers();
    }

    function createAnswers() {
        questions[current].answers = questions[current].answers.shuffle();

        var answerSprite = new CAAT.Foundation.SpriteImage();
        if (questions[current].type == 1) answerSprite.initialize(director.getImage("test_radio_button"), 1, 2);
        else if (questions[current].type == 2) answerSprite.initialize(director.getImage("test_checkbox"), 1, 2);

        answerSprite.addAnimation("unchecked", [0], 300).
            addAnimation("checked", [1], 300);

        for (var i = 0; i < questions[current].answers.length; i++) {
            questions[current].answers[i].actor = new CAAT.ActorContainer().
                setLocation(-700, 220 + 35 * i).
                setAlpha(0);
            questions[current].answers[i].marker = new CAAT.Actor().
                setBackgroundImage(answerSprite).
                setAlpha(0).
                setLocation(0, 0);

          /*  var txt = new CAAT.TextActor().
                setFont("16px DINRoundPro").
                setTextAlign("left").
                setText(questions[current].answers[i].txt).
                setTextFillStyle("#663333").
                setLocation(30, 0);
*/

            //многострочный текст!!

            var txt = new CAAT.UI.Label().
                setBounds(0, 0, 225, 100).
                setAlpha(0).
                setVerticalAlignment("center").
                setStyle( "default",    {
                    font        : "DINRoundPro",
                    fontSize    : 17,
                    fill        : "#663300",
                    tabSize     : 0
                }).
                setText(questions[current].answers[i].txt, 225).setLocation(30, 0);

            questions[current].answers[i].checked = false;
            questions[current].answers[i].marker.playAnimation("unchecked");

            questions[current].answers[i].marker.mouseEnabled = false;
            txt.mouseEnabled = false;

            questions[current].answers[i].actor.addChild(questions[current].answers[i].marker);
            questions[current].answers[i].actor.addChild(txt);
            slide.container.addChild(questions[current].answers[i].actor);

            questions[current].answers[i].actor.ansID = i;

            questions[current].answers[i].actor.moveTo(39 + 480 * i, 364 , 250, 100 + 100 * i, new CAAT.Interpolator().createExponentialOutInterpolator(3, false));
            questions[current].answers[i].actor.setBounds(0, 0, 30 + txt.width, txt.height);
           // questions[current].answers[i].actor.setBounds(0, 0,250, 100).setVerticalAlignment("center");
            var showAlphaBeh = new CAAT.AlphaBehavior().
                setValues(0, 1).
                setFrameTime(scene.time + 500 , 2500);

            txt.addBehavior(showAlphaBeh);
            questions[current].answers[i].marker.addBehavior(showAlphaBeh);


            questions[current].answers[i].actor.mouseEnter = mouseEnter;
            questions[current].answers[i].actor.mouseExit = mouseExit;
            questions[current].answers[i].actor.mouseClick = mouseClickAnswer;
        }
    }

    function mouseEnter() {
        document.body.style.cursor = "pointer";
    }

    function mouseExit() {
        document.body.style.cursor = "default";
    }

    function mouseClickAnswer(event) {
        if (!button.clicked) {
            if (questions[current].type == 1) {
                buttonActive = true;
                questions[current].answers[event.source.ansID].marker.playAnimation("checked");
                questions[current].answers[event.source.ansID].checked = true;

                for (var i = 0; i < questions[current].answers.length; i++) {
                    if (i != event.source.ansID) {
                        questions[current].answers[i].marker.playAnimation("unchecked");
                        questions[current].answers[i].checked = false;
                    }
                }
            } else if (questions[current].type == 2) {
                if (questions[current].answers[event.source.ansID].checked) {
                    questions[current].answers[event.source.ansID].marker.playAnimation("unchecked");
                    questions[current].answers[event.source.ansID].checked = false;
                } else {
                    questions[current].answers[event.source.ansID].marker.playAnimation("checked");
                    questions[current].answers[event.source.ansID].checked = true;
                }

                buttonActive = false;
                for (i = 0; i < questions[current].answers.length; i++) {
                    if (questions[current].answers[i].checked) {
                        buttonActive = true;
                        break;
                    }
                }
            }
        }
    }

    function mouseClickButton(event) {
        if (buttonActive && !button.clicked) {
            var good = true;
            for (var i = 0; i < questions[current].answers.length; i++) {
                if (questions[current].answers[i].checked != questions[current].answers[i].right) {
                    good = false;
                    break;
                }
            }

            if (good) {
               // testNumbers[current].playAnimation("right");
                correctAnswers[current] = true;
            } else {
              //  testNumbers[current].playAnimation("wrong");
                correctAnswers[current] = false;
            }

            showLenin(good);

            button.playAnimation("next");
            button.clicked = true;
        } else if (button.clicked) {
            button.playAnimation("idle");
            button.clicked = false;
            buttonActive = false;

            if (current < questNumber - 1) {
                hideLenin();
                hideQuestion();
                current++;
                setTimeout(showQuestion, 1000);
            } else finish();
        }
    }

    function showLenin(ok) {
        lenin = new CAAT.Actor().
            setLocation(480, SCREEN_HEIGHT);
        //leninSay = new InfoPanel().startupInfoPanel(200, 80, "Верной дорогой идёте, товарищ!", false);

        if (ok) {
            lenin.setBackgroundImage(director.getImage("slide22_good"));
            lenin.moveTo(500, 454, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
                // leninSay.showInfoPanel(250);
            });
            //leninSay.setInfoText("Правильный ответ!");
        } else {
            lenin.setBackgroundImage(director.getImage("slide22_bad"));
            lenin.moveTo(480, 460, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
                // leninSay.showInfoPanel(250);
            });
            //leninSay.setInfoText("Вы ошиблись...");
        }

        //slide.container.addChild(leninSay.container.setLocation(528, 284));
        slide.container.addChild(lenin);


    }

    function hideLenin() {
        //  leninSay.destroyInfoPanel();
        lenin.moveTo(lenin.x, SCREEN_HEIGHT, 250, 150, new CAAT.Interpolator().createExponentialOutInterpolator(3, false));

        setTimeout(function() {
            slide.container.removeChild(lenin);
            //  slide.container.removeChild(leninSay.container);

            lenin = null;
            // leninSay = null;
        }, 250);
    }

    function hideQuestion() {
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time, 250);
     //   hintText.addBehavior(hideAlphaBeh);
        hintText2.addBehavior(hideAlphaBeh);

        questionText.addBehavior(hideAlphaBeh);

        for (var i = 0; i < questions[current].answers.length; i++) {
            questions[current].answers[i].actor.addBehavior(hideAlphaBeh);
            slide.container.removeChild(questions[current].answers[i].actor);

        }
    }

    function finish() {
        var allCorrect = true;

        for (var i = 0; i < questNumber; i++) {
            if (!correctAnswers[i]) {
                allCorrect = false;
                break;
            }
        }

        hideLenin();
       // destroyTestNumbers();
     ;
        destroyButton();
        hideQuestion();

        setTimeout(function() {
            showFinalScreen(allCorrect);
        }, 600);
    }

    function showFinalScreen(allCorrect) {
        lenin = new CAAT.Actor().
            setLocation(330, SCREEN_HEIGHT);
        leninSay = new InfoPanel().startupInfoPanel(350, 100, "Верной дорогой идёте, товарищ!", true, function() {
            if (allCorrect) setTimeout(callback, 250);
            else
            {
                self.startTest();
                leninSay.container.setAlpha(0);
            }

            hideLenin();
        });

        if (allCorrect) {
            lenin.setBackgroundImage(director.getImage("test_lenin_good1"));
            if (currentSlide < slides.length - 1) leninSay.setInfoText("Поздравляем! Вы можете перейти к изучению следующего раздела курса");
            else {
                leninSay = new InfoPanel().startupInfoPanel(350, 100, "Поздравляем!<br>Вы успешно прошли курс!", false);
            }
        } else {
            lenin.setBackgroundImage(director.getImage("test_lenin_bad1"));
            leninSay.setInfoText("Были допущены ошибки. Пройдите задание еще раз");
        }

        slide.container.addChild(leninSay.container.setLocation(210, 187));
        slide.container.addChild(lenin);

        lenin.moveTo(330, 276, 250, 0, new CAAT.Interpolator().createExponentialOutInterpolator(3, false), function() {
            leninSay.showInfoPanel(250);
        });
    }


    function addBack(){

        var showAlphaBeh = new CAAT.AlphaBehavior().
            setValues(0, 1).
            setFrameTime(scene.time , 1500);

        king = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide22_king")).
            setLocation(480, 80)
            .setAlpha(0);
        slide.container.addChild(king);
        king.addBehavior(showAlphaBeh);

        cloud1 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide22_cloud1")).
            setLocation(120, 100)
            .setAlpha(0);
        slide.container.addChild(cloud1);
        cloud1.addBehavior(showAlphaBeh);

        task = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide22_task")).
            setLocation(210, 270)
            .setAlpha(0);
        slide.container.addChild(task);
        task.addBehavior(showAlphaBeh);

        man = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide22_man")).
            setLocation(325, 350)
            .setAlpha(0);
        slide.container.addChild(man);
        man.addBehavior(showAlphaBeh);

        cloud2 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide22_cloud2")).
            setLocation(20, 320)
            .setAlpha(0);
        slide.container.addChild(cloud2);
        cloud2.addBehavior(showAlphaBeh);


        cloud3 = new CAAT.Actor().
            setBackgroundImage(director.getImage("slide22_cloud3")).
            setLocation(471, 320)
            .setAlpha(0);
        slide.container.addChild(cloud3);
        cloud3.addBehavior(showAlphaBeh);




    }



    function destroyButton() {
        var hideAlphaBeh = new CAAT.AlphaBehavior().
            setValues(1, 0).
            setFrameTime(scene.time, 500);
        button.addBehavior(hideAlphaBeh);

        setTimeout(function() {
            button.setAlpha(0);
            king.setAlpha(0);
            cloud1.setAlpha(0);
            cloud2.setAlpha(0);
            cloud3.setAlpha(0);
            man.setAlpha(0);
            task.setAlpha(0);
            slide.container.removeChild(button);
        }, 600);
    }
}
