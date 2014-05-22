/**
 * @fileOverview переменные и константы, используемые в проекте
 *
 * Курс  «Стандарты обслуживания»
 *
 * @copyright MediuM, Minsk
 * @co-author vadim savelev
 * @date 12.03.14
 * @version 1.0.0
 */

/**
 * @license 
 *
 * The MIT License
 * Copyright (c) 2010-2011 Ibon Tolosana, Hyperandroid || http://labs.hyperandroid.com/

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * константы
 */
var DEBUG = false;
var SERVER = true;
var SCORM_VERSION = "1.2";
/**
 * ширина экрана
 * @constant
 * @type {number}
 */
var SCREEN_WIDTH = 800;
/**
 * высота экрана
 * @constant
 * @type {number}
 */
var SCREEN_HEIGHT = 600;
/**
 * частота кадров в секунду
 * @constant
 * @type {number}
 */
var FPS = 30;

var SCORM_API_STATUS_PASSED = "passed";
var SCORM_API_STATUS_COMPLETED = "completed";
var SCORM_API_STATUS_NOT_ATTEMPTED = "not attempted";
var SCORM_API_STATUS_INCOMPLETE = "incomplete";
var SCORM_API_STATUS_FAILED = "failed";

var TIE_COLOR_ORANGE = "orange";
var TIE_COLOR_BROWN = "brown";
var TIE_COLOR_GREEN = "green";

/**
 * глобальные объекты
 */
var director = null;
var scene = null;

var appManager = null;
var screenManager = null;
var scormManager = null;

var backLayer = null;
var topLayer = null;

var menu = null;

var slides = [];
var partNames = [
    "1. Цели курса, целевая аудитория",
    "2. Портрет покупателя",
    "3. Правила обслуживания покупателей",
    "4. Как правильно общаться с покупателями?",
    "5. Этапы обслуживания покупателей",
    "6.	Ошибки, возникающие при обслуживании покупателей",
    "7.	Правила поведения сотрудников в нестандартной ситуации",
    "8.	Итоговый тест"
];

var slideNames = [
    {txt: "Цели курса", part: 0},

    {txt: "Кто такой покупатель?", part: 1},
    {txt: "Основная задача продавцов", part: 1},

    {txt: "Обязанности сотрудников магазина", part: 2},
    {txt: "Ключевые Факторы Успеха", part: 2},
    {txt: "10 правил обслуживания покупателей", part: 2},

    {txt: "Речевой модуль кассира", part: 3},
    {txt: "Проблемы при работе за кассой", part: 3},
    {txt: "Что делать, если возникла проблема?", part: 3},
    {txt: "Обслуживание покупателя в торговом зале", part: 3},

    {txt: "Установление контакта с Покупателем", part: 4},
    {txt: "Выявление запросов и потребностей Покупателя ", part: 4},
    {txt: "Выявление запросов и потребностей Покупателя ", part: 4},
    {txt: "Завершение общения с Покупателем ", part: 4},
    {txt: "Правила общения с покупателями", part: 4},

    {txt: "Ошибки сотрудников магазина", part: 5},
    {txt: "Правила профессиональной этики сотрудников магазинов ", part: 5},
    {txt: "Ошибки во фразах продавцов", part: 5},

    {txt: "Притча", part: 6},
    {txt: "Направленный конфликт", part: 6},
    {txt: "Ненаправленный конфликт", part: 6},
    {txt: "Разрешение конфликта", part: 6},
    {txt: "Диалог между покупателем и продавцом", part: 6},
    {txt: "Диалог разрешения конфликта", part: 6},

    {txt: "Тестовое задание", part: 7}




];

/**
 * ресурсы
 */
var preloaderImageSources = [                   //картинки прелоадера
  {id: "preloader_back",          url: "images/preloader/back.png"},
  {id: "preloader_first_square",  url: "images/preloader/first_square.png"},
  {id: "preloader_square",        url: "images/preloader/square.png"},
  {id: "preloader_man",           url: "images/preloader/man.png"}
];

var imageSources = [                            //картинки

  //gui

  {id: "gui_top", url: "images/gui/top.png"},
  {id: "gui_bottom", url: "images/gui/bottom.png"},
  {id: "gui_right_side", url: "images/gui/right_side.png"},
  {id: "gui_left_side", url: "images/gui/left_side.png"},
  {id: "gui_info_panel_btn", url: "images/gui/info_panel_btn.png"},
  {id: "gui_man_big", url: "images/gui/man_big.png"},
  {id: "gui_man_small", url: "images/gui/man_small.png"},
  {id: "gui_ties", url: "images/gui/ties.png"},
  {id: "gui_ideas", url: "images/gui/ideas.png"},
  {id: "gui_racket", url: "images/gui/racket.png"},
  {id: "gui_ball", url: "images/gui/ball.png"},
  {id: "gui_next_btn", url: "images/gui/next_btn.png"},

  {id: "gui_tea1", url: "images/gui/tea1.png"},
  {id: "gui_tea2", url: "images/gui/tea2.png"},
  {id: "gui_tea3", url: "images/gui/tea3.png"},

  //test

  {id: "test_number_frame", url: "images/test/number_frame.png"},
  {id: "test_line", url: "images/test/line.png"},
  {id: "test_button", url: "images/test/button.png"},
  {id: "test_radio_button", url: "images/test/radio_button.png"},
  {id: "test_checkbox", url: "images/test/checkbox.png"},
  {id: "test_lenin_good", url: "images/test/lenin_good.png"},
  {id: "test_lenin_bad", url: "images/test/lenin_bad.png"},

    {id: "test_lenin_good1", url: "images/test/lenin_good1.png"},
    {id: "test_lenin_bad1", url: "images/test/lenin_bad1.png"},
  {id: "test_tip_1", url: "images/test/tip_1.png"},

  //menu

  {id: "menu_bottom_line",    url: "images/menu/bottom_line.png"},
  {id: "menu_btns",           url: "images/menu/btns.png"},
  {id: "menu_back",           url: "images/menu/back.png"},
  {id: "menu_open_btn",       url: "images/menu/open_btn.png"},

  //slide0

  {id: "slide0_next",         url: "images/slide0/next.png"},
  {id: "slide0_target",       url: "images/slide0/target.png"},
  {id: "slide0_hour_arrow",   url: "images/slide0/hour_arrow.png"},
  {id: "slide0_minute_arrow", url: "images/slide0/minute_arrow.png"},
  {id: "slide0_diksi",        url: "images/slide0/diksi.png"},
  {id: "slide0_idea_orange",  url: "images/slide0/idea_orange.png"},
  {id: "slide0_menu_hint",    url: "images/slide0/menu_hint.png"},
  {id: "slide0_gui_hand",     url: "images/slide0/hand.png"},
  {id: "slide0_man_help",     url: "images/slide0/man_help.png"},
  {id: "gui_hand",            url: "images/slide0/hand.png"},

  //slide1

  {id: "slide1_man",          url: "images/slide1/man.png"},
  {id: "slide1_star",         url: "images/slide1/star.png"},
  {id: "slide1_text1",        url: "images/slide1/text1.png"},
  {id: "slide1_text1t",       url: "images/slide1/text1t.png"},
  {id: "slide1_text1b",       url: "images/slide1/text1b.png"},
  {id: "slide1_text2",        url: "images/slide1/text2.png"},
  {id: "slide1_line1",        url: "images/slide1/line1.png"},
  {id: "slide1_text31",       url: "images/slide1/text31.png"},
  {id: "slide1_text32",       url: "images/slide1/text32.png"},
  {id: "slide1_text33",       url: "images/slide1/text33.png"},
  {id: "slide1_text34",       url: "images/slide1/text34.png"},
  {id: "slide1_text35",       url: "images/slide1/text35.png"},

  //slide2

  {id: "slide2_man",          url: "images/slide2/man.png"},
  {id: "slide2_text1",        url: "images/slide2/text1.png"},
  {id: "slide2_text1t",       url: "images/slide2/text1t.png"},
  {id: "slide2_text1b",       url: "images/slide2/text1b.png"},
  {id: "slide2_door",         url: "images/slide2/door.png"},
  {id: "slide2_man2",         url: "images/slide2/man2.png"},
  {id: "slide2_man21",        url: "images/slide2/man21.png"},
  {id: "slide2_man3",         url: "images/slide2/man3.png"},
  {id: "slide2_man31",        url: "images/slide2/man31.png"},
  {id: "slide2_text2",        url: "images/slide2/text2.png"},
  {id: "slide2_text2t",       url: "images/slide2/text2t.png"},

  //slide3

  {id: "slide3_man",          url: "images/slide3/man.png"},
  {id: "slide3_semafor1",     url: "images/slide3/semafor1.png"},
  {id: "slide3_semafor2",     url: "images/slide3/semafor2.png"},
  {id: "slide3_telega",       url: "images/slide3/telega.png"},
  {id: "slide3_kpp1",         url: "images/slide3/kpp1.png"},
  {id: "slide3_kpp2",         url: "images/slide3/kpp2.png"},
  {id: "slide3_kpp3",         url: "images/slide3/kpp3.png"},

  //slide4

  {id: "slide4_man",          url: "images/slide4/man.png"},
  {id: "slide4_wand",         url: "images/slide4/wand.png"},
  {id: "slide4_text1",        url: "images/slide4/text1.png"},
  {id: "slide4_line1",        url: "images/slide4/line1.png"},
  {id: "slide4_text2",        url: "images/slide4/text2.png"},
  {id: "slide4_text2l",       url: "images/slide4/text2l.png"},
  {id: "slide4_text3",        url: "images/slide4/text3.png"},
  {id: "slide4_text3l",       url: "images/slide4/text3l.png"},
  {id: "slide4_text4",        url: "images/slide4/text4.png"},
  {id: "slide4_text4l",       url: "images/slide4/text4l.png"},
    {id: "slide4_text5",        url: "images/slide4/text5.png"},
    {id: "slide4_text5l",       url: "images/slide4/text5l.png"},


    //slide4kfu

    {id: "slide4kfu_man",          url: "images/slide4kfu/man.png"},
    {id: "slide4kfu_um",          url: "images/slide4kfu/um.png"},
    {id: "slide4kfu_um2",          url: "images/slide4kfu/um2.png"},
    {id: "slide4kfu_cup",          url: "images/slide4kfu/cup.png"},
    {id: "slide4kfu_stairs",          url: "images/slide4kfu/stairs.png"},


  //slide5

  {id: "slide5_icon1a",       url: "images/slide5/sign1.png"},
  {id: "slide5_icon1b",       url: "images/slide5/sign1_green.png"},
  {id: "slide5_icon2a",       url: "images/slide5/sign2.png"},
  {id: "slide5_icon2b",       url: "images/slide5/sign2_green.png"},
  {id: "slide5_icon3a",       url: "images/slide5/sign3.png"},
  {id: "slide5_icon3b",       url: "images/slide5/sign3_green.png"},
  {id: "slide5_icon4a",       url: "images/slide5/sign4.png"},
  {id: "slide5_icon4b",       url: "images/slide5/sign4_orange.png"},
  {id: "slide5_icon5a",       url: "images/slide5/sign5.png"},
  {id: "slide5_icon5b",       url: "images/slide5/sign5_orange.png"},
  {id: "slide5_icon6a",       url: "images/slide5/sign6.png"},
  {id: "slide5_icon6b",       url: "images/slide5/sign6_orange.png"},
  {id: "slide5_icon7a",       url: "images/slide5/sign7.png"},
  {id: "slide5_icon7b",       url: "images/slide5/sign7_orange.png"},
  {id: "slide5_icon8a",       url: "images/slide5/sign8.png"},
  {id: "slide5_icon8b",       url: "images/slide5/sign8_orange.png"},
  {id: "slide5_icon9a",       url: "images/slide5/sign9.png"},
  {id: "slide5_icon9b",       url: "images/slide5/sign9_orange.png"},
  {id: "slide5_icon10a",      url: "images/slide5/sign10.png"},
  {id: "slide5_icon10b",      url: "images/slide5/sign10_orange.png"},

  //slide6

  {id: "slide6_man",          url: "images/slide6/man.png"},
  {id: "slide6_smileMetr",    url: "images/slide6/smilemetr.png"},
  {id: "slide6_smile1",       url: "images/slide6/smile_sad.png"},
  {id: "slide6_smile2",       url: "images/slide6/smile_normal.png"},
  {id: "slide6_smile3",       url: "images/slide6/smile_happy.png"},
  {id: "slide6_smileArrow",   url: "images/slide6/smilemetr_arrow.png"},
  {id: "slide6_smileNext",    url: "images/slide6/smileNext.png"},
  {id: "slide6_tip11",        url: "images/slide6/tip11.png"},
  {id: "slide6_tip12",        url: "images/slide6/tip12.png"},
  {id: "slide6_tip13",        url: "images/slide6/tip13.png"},
  {id: "slide6_smileText1",   url: "images/slide6/smileText1.png"},
  {id: "slide6_smileText2",   url: "images/slide6/smileText1.png"},
  {id: "slide6_smileText3",   url: "images/slide6/smileText3.png"},
    {id: "slide6_text1",   url: "images/slide6/text1.png"},
    {id: "slide6_text2",   url: "images/slide6/text2.png"},
    {id: "slide6_text3",   url: "images/slide6/text3.png"},
    {id: "slide6_text4",   url: "images/slide6/text4.png"},
    {id: "slide6_text5",   url: "images/slide6/text5.png"},
    {id: "slide6_text6",   url: "images/slide6/text6.png"},
    {id: "slide6_text7",   url: "images/slide6/text7.png"},
    {id: "slide6_text8",   url: "images/slide6/text8.png"},

  //slide7

  {id: "slide7_man",          url: "images/slide7/man.png"},
  {id: "slide7_kassa",        url: "images/slide7/kassa.png"},
  {id: "slide7_semafor",      url: "images/slide7/semafor.png"},
  {id: "slide7_semaforGreen1",url: "images/slide7/semaforGreen1.png"},
  {id: "slide7_semaforGreen2",url: "images/slide7/semaforGreen2.png"},
  {id: "slide7_semaforRed1",  url: "images/slide7/semaforRed1.png"},
  {id: "slide7_semaforRed2",  url: "images/slide7/semaforRed2.png"},
  {id: "slide7_lenta",        url: "images/slide7/lenta.png"},
  {id: "slide7_lentaWheelL",  url: "images/slide7/lentaWheelL.png"},
  {id: "slide7_lentaWheelR",  url: "images/slide7/lentaWheelR.png"},
  {id: "slide7_apple",        url: "images/slide7/apple.png"},

  //slide8

  {id: "slide8_back",         url: "images/slide8/back.png"},
  {id: "slide8_text1",        url: "images/slide8/text1.png"},
  {id: "slide8_znak1",        url: "images/slide8/znak1.png"},
  {id: "slide8_men",          url: "images/slide8/men.png"},
  {id: "slide8_men2",         url: "images/slide8/men2.png"},
  {id: "slide8_menTipBack",   url: "images/slide8/menTipBack.png"},
  {id: "slide8_menTip1",      url: "images/slide8/menTip1.png"},
  {id: "slide8_menTip2",      url: "images/slide8/menTip2.png"},
  {id: "slide8_tipBack",      url: "images/slide8/tipBack.png"},
  {id: "slide8_tipText1",     url: "images/slide8/tipText1.png"},
  {id: "slide8_tipText2",     url: "images/slide8/tipText2.png"},
  {id: "slide8_tipText3",     url: "images/slide8/tipText3.png"},
  {id: "slide8_tipText4",     url: "images/slide8/tipText4.png"},
  {id: "slide8_tipText5",     url: "images/slide8/tipText5.png"},
  {id: "slide8_next",         url: "images/slide8/next.png"},

  //slide9

  {id: "slide9_men",          url: "images/slide9/men.png"},
  {id: "slide9_men2",         url: "images/slide9/men2.png"},
  {id: "slide9_tipNext",      url: "images/slide9/tipNext.png"},
  {id: "slide9_tip1_1",       url: "images/slide9/tip1_1.png"},
  {id: "slide9_tip1_2",       url: "images/slide9/tip1_2.png"},
  {id: "slide9_tip2_1",       url: "images/slide9/tip2_1.png"},
  {id: "slide9_tip2_2",       url: "images/slide9/tip2_2.png"},
  {id: "slide9_tip2_end",     url: "images/slide9/tip2_end.png"},
  {id: "slide9_tip3",         url: "images/slide9/tip3.png"},
  {id: "slide9_tip4_1",       url: "images/slide9/tip4_1.png"},
  {id: "slide9_tip4_2",       url: "images/slide9/tip4_2.png"},
  {id: "slide9_tip5_1",       url: "images/slide9/tip5_1.png"},
  {id: "slide9_tip5_2",       url: "images/slide9/tip5_2.png"},

  //slide10

  {id: "slide10_men",         url: "images/slide10/men.png"},
  {id: "slide10_men2",        url: "images/slide10/men2.png"},
  {id: "slide10_line1",       url: "images/slide10/line1.png"},
  {id: "slide10_tip1",        url: "images/slide10/tip1.png"},
  {id: "slide10_tip2",        url: "images/slide10/tip2.png"},
  {id: "slide10_tip3",        url: "images/slide10/tip3.png"},
  {id: "slide10_textPlace",   url: "images/slide10/textPlace.png"},
  {id: "slide10_textNext",    url: "images/slide10/textNext.png"},
  {id: "slide10_text1",       url: "images/slide10/text1.png"},
  {id: "slide10_text2",       url: "images/slide10/text2.png"},
  {id: "slide10_text3",       url: "images/slide10/text3.png"},

    //slide11

    {id: "slide11_men1",        url: "images/slide11/men1.png"},
    {id: "slide11_men2",        url: "images/slide11/men2.png"},
    {id: "slide11_men3",        url: "images/slide11/men3.png"},
    {id: "slide11_tip1",        url: "images/slide11/tip1.png"},
    {id: "slide11_tip2",        url: "images/slide11/tip2.png"},
    {id: "slide11_tip3",        url: "images/slide11/tip3.png"},
    {id: "slide11_tip4",        url: "images/slide11/tip4.png"},
    {id: "slide11_tip5",        url: "images/slide11/tip5.png"},
    {id: "slide11_tip6",        url: "images/slide11/tip6.png"},
    {id: "slide11_tip1_text",   url: "images/slide11/tip1_text.png"},
    {id: "slide11_tip2_text",   url: "images/slide11/tip2_text.png"},
    {id: "slide11_tip3_text",   url: "images/slide11/tip3_text.png"},
    {id: "slide11_tip4_text",   url: "images/slide11/tip4_text.png"},
    {id: "slide11_tip5_text",   url: "images/slide11/tip5_text.png"},
    {id: "slide11_tip6_text",   url: "images/slide11/tip6_text.png"},
    {id: "slide11_textPlace1",  url: "images/slide11/textPlace1.png"},
    {id: "slide11_textPlace2",  url: "images/slide11/textPlace2.png"},
    {id: "slide11_text1",       url: "images/slide11/text1.png"},
    {id: "slide11_text2",       url: "images/slide11/text2.png"},
    {id: "slide11_text3",       url: "images/slide11/text3.png"},
    {id: "slide11_textNext",    url: "images/slide11/textNext.png"},

    //slide12

    {id: "slide12_men1",        url: "images/slide12/men1.png"},
    {id: "slide12_men2",        url: "images/slide12/men2.png"},
    {id: "slide12_men3",        url: "images/slide12/men3.png"},
    {id: "slide12_line",        url: "images/slide12/line.png"},
    {id: "slide12_line_text",   url: "images/slide12/line_text.png"},
    {id: "slide12_road1",       url: "images/slide12/road1.png"},
    {id: "slide12_road1_text1", url: "images/slide12/road1_text1.png"},
    {id: "slide12_road1_text2", url: "images/slide12/road1_text2.png"},
    {id: "slide12_road2",       url: "images/slide12/road2.png"},
    {id: "slide12_road2_text1", url: "images/slide12/road2_text1.png"},
    {id: "slide12_road2_text2", url: "images/slide12/road2_text2.png"},
    {id: "slide12_road3",       url: "images/slide12/road3.png"},
    {id: "slide12_road3_text1", url: "images/slide12/road3_text1.png"},
    {id: "slide12_road3_text2", url: "images/slide12/road3_text2.png"},
    {id: "slide12_tip1",        url: "images/slide12/tip1.png"},
    {id: "slide12_tip1_text",   url: "images/slide12/tip1_text.png"},
    {id: "slide12_tip2",        url: "images/slide12/tip1.png"},
    {id: "slide12_tip2_text",   url: "images/slide12/tip2_text.png"},
    {id: "slide12_tip3",        url: "images/slide12/tip1.png"},
    {id: "slide12_tip3_text",   url: "images/slide12/tip3_text.png"},
    {id: "slide12_textNext",    url: "images/slide12/textNext.png"},

    //slide13

    {id: "slide13_men1",        url: "images/slide13/men1.png"},
    {id: "slide13_men2",        url: "images/slide13/men2.png"},
    {id: "slide13_lights",      url: "images/slide13/lights.png"},
    {id: "slide13_orange",      url: "images/slide13/orange.png"},
    {id: "slide13_green",       url: "images/slide13/green.png"},
    {id: "slide13_gray",        url: "images/slide13/gray.png"},
    {id: "slide13_tip1",        url: "images/slide13/tip1.png"},
    {id: "slide13_tip1_text",   url: "images/slide13/tip1_text.png"},
    {id: "slide13_textNext",    url: "images/slide13/textNext.png"},

    //slide14

    {id: "slide14_man1",          url: "images/slide14/man1.png"},
    {id: "slide14_man2",          url: "images/slide14/man2.png"},
    {id: "slide14_man3",          url: "images/slide14/man3.png"},
    {id: "slide14_diagramm",          url: "images/slide14/diagramm.png"},

    //slide15

    {id: "slide15_man",          url: "images/slide15/man.png"},
    {id: "slide15_carriage1",          url: "images/slide15/carriage1.png"},
    {id: "slide15_carriage2",          url: "images/slide15/carriage2.png"},
    {id: "slide15_carriage3",          url: "images/slide15/carriage3.png"},
    {id: "slide15_carriage4",          url: "images/slide15/carriage4.png"},
    {id: "slide15_carriage5",          url: "images/slide15/carriage5.png"},
    {id: "slide15_cloud1",          url: "images/slide15/cloud1.png"},
    {id: "slide15_cloud2",          url: "images/slide15/cloud2.png"},
    {id: "slide15_cloud3",          url: "images/slide15/cloud3.png"},

    //slide16

    {id: "slide16_man",          url: "images/slide16/man.png"},
    {id: "slide16_sign1",          url: "images/slide16/sign1.png"},
    {id: "slide16_sign2",          url: "images/slide16/sign2.png"},
    {id: "slide16_sign3",          url: "images/slide16/sign3.png"},
    {id: "slide16_sign4",          url: "images/slide16/sign4.png"},
    {id: "slide16_sign5",          url: "images/slide16/sign5.png"},
    {id: "slide16_sign6",          url: "images/slide16/sign6.png"},

    //slide17

    {id: "slide17_main_pic",          url: "images/slide17/main_pic.png"},
    {id: "slide17_ok_button",          url: "images/slide17/ok_button.png"},
    {id: "slide17_qest_button",          url: "images/slide17/qest_button.png"},
    {id: "slide17_next_button",          url: "images/slide17/next_button.png"},
    {id: "slide17_right",               url: "images/slide17/right.png"},
    {id: "slide17_wrong",            url: "images/slide17/wrong.png"},
    {id: "slide17_info",            url: "images/slide17/info.png"},
    {id: "slide17_transparent",            url: "images/slide17/transparent.png"},

    //slide18

    {id: "slide18_man",          url: "images/slide18/man.png"},
    {id: "slide18_mirror1",          url: "images/slide18/mirror1.png"},
    {id: "slide18_mirror2",          url: "images/slide18/mirror2.png"},
    {id: "slide18_mirror3",          url: "images/slide18/mirror3.png"},
    {id: "slide18_mirror4",          url: "images/slide18/mirror4.png"},
    {id: "slide18_mirror5",          url: "images/slide18/mirror5.png"},
    {id: "slide18_mirror6",          url: "images/slide18/mirror6.png"},
    {id: "slide18_mirror7",          url: "images/slide18/mirror7.png"},

    //slide19

    {id: "slide19_cloud1",          url: "images/slide19/cloud1.png"},
    {id: "slide19_cloud2",          url: "images/slide19/cloud2.png"},
    {id: "slide19_queen",          url: "images/slide19/queen.png"},
    {id: "slide19_queen2",          url: "images/slide19/queen2.png"},
    {id: "slide19_sign",          url: "images/slide19/sign.png"},
    {id: "slide19_man",          url: "images/slide19/man.png"},
    {id: "slide19_cloud_count1",          url: "images/slide19/cloud_count1.png"},
    {id: "slide19_cloud_count2",          url: "images/slide19/cloud_count2.png"},
    {id: "slide19_cloud_count3",          url: "images/slide19/cloud_count3.png"},
    {id: "slide19_cloud_count4",          url: "images/slide19/cloud_count4.png"},
    {id: "slide19_cloud_count5",          url: "images/slide19/cloud_count5.png"},

    //slide20

    {id: "slide20_cloud1",          url: "images/slide20/cloud1.png"},
    {id: "slide20_queen",          url: "images/slide20/queen.png"},
    {id: "slide20_queen2",          url: "images/slide20/queen2.png"},
    {id: "slide20_sign",          url: "images/slide20/sign.png"},
    {id: "slide20_man",          url: "images/slide20/man.png"},
    {id: "slide20_cloud_count1",          url: "images/slide20/cloud_count1.png"},
    {id: "slide20_cloud_count0",          url: "images/slide20/cloud_count0.png"},

    //slide21

    {id: "slide21_pencil",          url: "images/slide21/pencil.png"},
    {id: "slide21_paper1",          url: "images/slide21/paper1.png"},
    {id: "slide21_paper2",          url: "images/slide21/paper2.png"},
    {id: "slide21_paper3",          url: "images/slide21/paper3.png"},
    {id: "slide21_paper4",          url: "images/slide21/paper4.png"},
    {id: "slide21_main_pic",          url: "images/slide21/main_pic.png"},

    //slide22

    {id: "slide22_king",          url: "images/slide22/king.png"},
    {id: "slide22_man",          url: "images/slide22/man.png"},
    {id: "slide22_task",          url: "images/slide22/task.png"},
    {id: "slide22_cloud1",          url: "images/slide22/cloud1.png"},
    {id: "slide22_cloud2",          url: "images/slide22/cloud2.png"},
    {id: "slide22_cloud3",          url: "images/slide22/cloud3.png"},
    {id: "slide22_bad",          url: "images/slide22/bad.png"},
    {id: "slide22_good",          url: "images/slide22/good.png"},



    //slide23

    {id: "slide23_man",          url: "images/slide23/man.png"},
    {id: "slide23_king1",          url: "images/slide23/king1.png"},
    {id: "slide23_king2",          url: "images/slide23/king2.png"},
    {id: "slide23_sign",          url: "images/slide23/sign.png"},


    // bubbles

  {id: "slide_tipCircle1",  url: "images/circleBubble/tipCircle1.png"},
  {id: "slide_tipCircle2",  url: "images/circleBubble/tipCircle2.png"},
  {id: "slide_tipCircle3",  url: "images/circleBubble/tipCircle3.png"}
];

var currentSlide = 0;
var scale = 1;

/**
 * вызов функции инициализации после загрузки страницы
 */
window.addEventListener("load", init, false);

/**
 * функция инициализации
 */
function init() {
    appManager = new AppManager().startupAppManager();
}
