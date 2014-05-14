var cultureModule;
(function (cultureModule) {
    var LanguageCode = (function () {
        function LanguageCode() {
        }
        LanguageCode.FR = { code: 'fr', name: 'Français' };
        LanguageCode.EN = { code: 'default', name: 'English' };
        return LanguageCode;
    })();
    cultureModule.LanguageCode = LanguageCode;

    var LanguageModel = (function () {
        function LanguageModel(language) {
            this.code = ko.observable(language.code);
        }
        return LanguageModel;
    })();
    cultureModule.LanguageModel = LanguageModel;

    var cultureModel = (function () {
        function cultureModel(language) {
            this.language = language;
        }
        cultureModel.prototype.getCurrentCulture = function () {
            return this._currentCulture;
        };

        cultureModel.prototype.changeLocale = function (force) {
            force = force === undefined ? false : force;

            // do not apply culture if it is the same.
            if (!force && Globalize.cultureSelector === this.language.code())
                return;

            if (this.language.code() === LanguageCode.FR.code || this.language.code() === LanguageCode.EN.code) {
                this._currentCulture = Globalize.culture(this.language.code());
            } else {
                this._currentCulture = Globalize.culture(navigator.language || navigator.browserLanguage);
            }
        };
        return cultureModel;
    })();
    cultureModule.cultureModel = cultureModel;
})(cultureModule || (cultureModule = {}));
