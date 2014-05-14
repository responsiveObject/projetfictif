var User;
(function(User) {
    var Profile = (function() {
        function Profile() {
        }
        return Profile;
    })();
    User.Profile = Profile;

    var Settings = (function() {
        function Settings(profile) {
            this._profile = profile;

            var savedlanguage = window.localStorage.getItem(helper.buildStorageKey(helper.StorageKeyType.USER_PROFILE, 'Language', this._profile.id));
            var languageCode = cultureModule.LanguageCode.FR;
            if (savedlanguage === cultureModule.LanguageCode.EN.code)
                languageCode = cultureModule.LanguageCode.EN;
            this.language = new cultureModule.LanguageModel(languageCode);
        }

        Settings.prototype.save = function() {
            this.saveLanguage();
        };

        Settings.prototype.saveLanguage = function() {
            window.localStorage.setItem(helper.buildStorageKey(helper.StorageKeyType.USER_PROFILE, 'Language', this._profile.id), this.language.code());
        };

        return Settings;
    })();
    User.Settings = Settings;

    var Account = (function() {
        function Account(identity, options) {
            this._identity = identity;
            this.init(options);
        }

        Account.prototype.getIdentity = function() {
            return this._identity;
        };

        // add an init() method to loosely coupled dependency.
        // this will help to test properly
        Account.prototype.init = function(options) {
            options = options || {};
            this.profile = options.profile || new User.Profile;
            this.settings = options.settings || new User.Settings(this.profile);
        };

        Account.prototype.login = function(username, password) {
            var dfd = $.Deferred();
            var _profile = this.profile = new User.Profile;
            this._identity.login(username, password)
                    .done(function(data) {
                        _profile.username = username;
                        dfd.resolve(true);
                    });
            return dfd;
        };

        Account.prototype.logout = function() {
            this._identity.logout();
        };

        return Account;
    })();
    User.Account = Account;
})(User || (User = {}));
//# sourceMappingURL=user.js.map
