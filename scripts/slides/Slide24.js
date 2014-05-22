
function Slide24() {
    var self = this;

    var test = null;

    var quests = [

        {
            question: "1. Первый этап обслуживания покупателей:",
            answers: [
                {txt: "установить зрительный контакт", right: true},
                {txt: "пожать руку", right: false},
                {txt: "предложить пакет", right: false},
                {txt: "выявить потребности покупателя", right: false}
            ],
            type: 1
        },
        {
            question: "2. Наиболее эффективные вопросы:",
            answers: [
                {txt: "открытые", right: true},
                {txt: "закрытые", right: false},
                {txt: "сложные", right: false},
                {txt: "альтернативные", right: false}
            ],
            type: 1
        },

        {
            question: "3. Конфликт, который имеет чёткий предмет:",
            answers: [
                {txt: "конфликт интересов", right: false},
                {txt: "ненаправленный", right: false},
                {txt: "личностный конфликт", right: false},
                {txt: "направленный", right: true}
            ],
            type: 1
        },
        {
            question: "4. Если не удалось разрешить конфликт, сотрудники ДИКСИ предлагают покупателю:",
            answers: [
                {txt: "завести судебное дело", right: false},
                {txt: "обратиться к руководству", right: false},
                {txt: "изложить свои претензии письменно в Книге жалоб и предложений", right: true},
                {txt: "не предпринимать никаких действий", right: false}
            ],
            type: 1
        },
        {
            question: "5. Эффективное обслуживание покупателей необходимо для того, чтобы...",
            answers: [
                {txt: "продавец меньше уставал", right: false},
                {txt: "сотрудники не задерживались на работе", right: false},
                {txt: "покупатели были довольны", right: true}
            ],
            type: 1
        },
        {
            question: "6.	Для каких должностей предусмотрены КФУ?",
            answers: [
                {txt: "только для администрации магазина", right: false},
                {txt: "только для линейного персонала магазина", right: false},
                {txt: "для всех должностей магазина", right: true},
                {txt: "только для аутсорсинга", right: false}
            ],
            type: 1
        },
        {
            question: "7.	Касса сломалась при обслуживании покупателя. Что необходимо сделать?",
            answers: [
                {txt: "сделать покупателю скидку на покупку", right: false},
                {txt: "принести извинения за доставленные неудобства", right: true},
                {txt: "переориентировать покупателя на обслуживание в другой кассе", right: true},
                {txt: "проигнорировать покупателя", right: false}
            ],
            type: 2
        },
        {
            question: "8. Специалист заметил, что на кассах образовались очереди. Что он должен сделать?",
            //question: "8. Специалист выкладывал товар в своей зоне ответственности и заметил, на кассах образовались очереди. Что ему необходимо сделать?",
            answers: [
                {txt: "продолжить текущую работу", right: false},
                {txt: "открыть свободную кассу ", right: false},
                {txt: "просигнализировать о ситуации ЗУМ или УМ", right: true}
            ],
            type: 1
        },
        {
            question: "9. Если кассир не может разрешить конфликт с покупателем по поводу сдачи, он должен...",
            //question: "9. Что должен сделать кассир, если он не может самостоятельно разрешить конфликт с покупателем по поводу выданной сдачи?",
            answers: [
                {txt: "не обращая внимание на жалобы, продолжить обслуживание следующего покупателя", right: false},
                {txt: "попросить пост №1 вывести покупателя из магазина", right: false},
                {txt: "позвать УМ или ЗУМ", right: true},
                {txt: "вызвать Полицию", right: false}
            ],
            type: 1
        }
    ];

    this.showFrame0 = function () {
        test = new Test().startupTest(quests, self, showNextSlide);
        test.startTest();
    };

    function showNextSlide() {
        appManager.showNextSlide();
    }
}
Slide24.prototype = new Slide;