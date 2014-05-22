/**
 * @fileOverview класс ScormManager - менеджер для работы со SCORM API
 *
 * @copyright MediuM, Minsk
 * @author vadim savelev
 * @date 22.08.13
 * @time 14:30
 * @version 1.1.0
 */

/**
 * конструктор менеджера SCORM
 * @constructor
 */
function ScormManager() {
    this.success = false;
    this.lessonStatus = "";
    this.suspendData = "";
    this.suspendDataArray = [];
    this.raw = 0;

    /**
     * инициализация менеджера
     * @returns {ScormManager}  менеджер
     */
    this.startupScormManager = function() {
        return this;
    };

    /**
     * соединение с LMS
     * @returns {boolean}   статус успешности выполнения операции
     */
    this.connect = function () {
        this.success = strToBool(pipwerks.SCORM.init());

        return this.success;
    };

    /**
     * получение статуса прохождения урока
     * @returns {string}    статус прохождения урока
     */
    this.getLessonStatus = function () {
        var status = "";
        if (SCORM_VERSION == "1.2") status = pipwerks.SCORM.get("cmi.core.lesson_status");
        else if (SCORM_VERSION == "2004") status = pipwerks.SCORM.get("cmi.completion_status");

        if (status == SCORM_API_STATUS_COMPLETED) this.lessonStatus = SCORM_API_STATUS_COMPLETED;
        else if (status == SCORM_API_STATUS_FAILED) this.lessonStatus = SCORM_API_STATUS_FAILED;
        else if (status == SCORM_API_STATUS_INCOMPLETE) this.lessonStatus = SCORM_API_STATUS_INCOMPLETE;
        else if (status == SCORM_API_STATUS_PASSED) this.lessonStatus = SCORM_API_STATUS_PASSED;
        else if (status == SCORM_API_STATUS_NOT_ATTEMPTED) this.lessonStatus = SCORM_API_STATUS_NOT_ATTEMPTED;
        else if (status == SCORM_API_STATUS_UNKNOWN) this.lessonStatus = SCORM_API_STATUS_UNKNOWN;

        return this.lessonStatus;
    };

    /**
     * получение строки произвольных данных
     * @returns {string}    страка данных
     */
    this.getSuspendData = function () {
        this.suspendData = pipwerks.SCORM.get("cmi.suspend_data");
        if (this.suspendData != "") this.suspendDataArray = this.suspendData.split(",");

        return this.suspendData;
    };

    /**
     * получение оценки за курс
     * @returns {number}    оценка
     */
    this.getRaw = function () {
        if (SCORM_VERSION == "1.2") this.raw = parseInt(pipwerks.SCORM.get("cmi.core.score.raw"));
        else if (SCORM_VERSION == "2004") this.raw = parseInt(pipwerks.SCORM.get("cmi.score.raw"));

        return this.raw;
    };

    /**
     * установка статуса прохождения урока
     * @param status {String}   статус успешности выполнения операции
     */
    this.setLessonStatus = function (status) {
        if (SCORM_VERSION == "1.2") this.success = strToBool(pipwerks.SCORM.set("cmi.core.lesson_status", status));
        else if (SCORM_VERSION == "2004") this.success = strToBool(pipwerks.SCORM.set("cmi.completion_status", status));

        this.lessonStatus = status;
        this.save();
    };

    /**
     * установка статуса успешности прохождения курса. для SCORM 2004
     * @param status {String}   статус успешности выполнения операции
     */
    this.setSuccessStatus = function(status) {
        this.success = strToBool(pipwerks.SCORM.set("cmi.success_status", status));
        this.save();
    };

    /**
     * отправка строки произвольных данных в LMS
     * @param data {String} сохраняемые данные
     */
    this.setSuspendData = function (data) {
        this.success = strToBool(pipwerks.SCORM.set("cmi.suspend_data", data));
        this.suspendData = data;
        this.save();
    };

    /**
     * отправка строки произвольных данных из массива в LMS
     */
    this.setSuspendDataFromArray = function() {
        this.suspendData = String(this.suspendDataArray);
        this.setSuspendData(this.suspendData);
    };

    /**
     * установка оценки
     * @param raw {Number}  оценка
     */
    this.setRaw = function (raw) {
        if (SCORM_VERSION == "1.2") this.success = strToBool(pipwerks.SCORM.set("cmi.core.score.raw", raw.toString()));
        else if (SCORM_VERSION == "2004") this.success = strToBool(pipwerks.SCORM.set("cmi.score.raw", raw.toString()));

        this.raw = parseInt(raw);
        this.save();
    };

    /**
     * сохранение сессии
     * @returns {boolean}   статус успешность проведения операции
     */
    this.save = function () {
        this.success = strToBool(pipwerks.SCORM.save());

        return this.success;
    };

    function strToBool(value) {
        var t = typeof value;
        switch(t) {
            case "string":
                return (/(true|1)/i).test(value);
            case "number":
                return !!value;
            case "boolean":
                return value;
            case "undefined":
                return null;
            default:
                return false;
        }
    }
}
