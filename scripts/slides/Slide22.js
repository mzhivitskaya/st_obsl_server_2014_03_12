
function Slide22() {
    var self = this;

    var test = null;



    var quests = [
        {
            question: "Я не уверен, что яйца свежие. Как я могу проверить их качество?",
            answers: [


                {txt: "Вы можете проверить качество яиц с помощью специального прибора", right: true},
                {txt: "Там в зале есть овоскоп", right: false}
            ],
            type: 1
        },
        {
            question: "Где я могу найти консервы?",
            answers: [
                {txt: "Я провожу Вас в отдел с консервами", right: true},
                {txt: "Посмотрите, где-то должны быть", right: false}
            ],
            type: 1
        },
        {
            question: "В вашем магазине вообще ничего нет! Ну никакого выбора!",
            answers: [
                {txt: "Ваши предложения и замечания, обязательно будут учтены", right: true},
                {txt: "А попробуйте найти магазин лучше с такими низкими ценами!", right: false}
            ],
            type: 1
        },

        {
            question: "Вы мне продали несвежую колбасу. Вы только понюхайте, как она воняет, и таким товаром Вы торгуете!",
            answers: [
                {txt: "У вас даже чека нет на эту колбасу! Может, вы её месяц назад покупали?", right: false},
                {txt: "Я вас понимаю! Предлагаю вам изложить свои претензии письменно", right: true}
            ],
            type: 1
        },
        {
            question: "Вы долго будете разговаривать?",
            answers: [

                {txt: "Извините за доставленные неудобства. Такого больше не повторится", right: true},
                {txt: "Нет. Какие все нервные. Подумаешь даже двух слов сказать нельзя", right: false}
            ],
            type: 1
        }
    ];

    this.showFrame0 = function () {

        test = new Task().startupTest(quests, self, showNextSlide);
        test.startTest();
    };

    function showNextSlide() {
        appManager.showNextSlide();
    }
}
Slide22.prototype = new Slide;