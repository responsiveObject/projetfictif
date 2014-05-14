var Security;
(function(Security) {
    var Authentication = (function() {
        function Authentication() {
            this._token = '';
            this.isLogged = ko.observable(false);
            this.getToken();
        }
        Authentication.prototype.getToken = function() {
            if (this._token === '') {
                var _savedToken = window.localStorage.getItem(helper.buildStorageKey(helper.StorageKeyType.AUTH_TOKEN));
                if (_savedToken)
                    this.setToken(_savedToken);
            }
            return this._token;
        };

        Authentication.prototype.setToken = function(value) {
            window.localStorage.setItem(helper.buildStorageKey(helper.StorageKeyType.AUTH_TOKEN), value);
            this._token = value;
            this.isLogged(this._token !== '');
        };

        Authentication.prototype.logout = function() {
            this.setToken('');
        };

        Authentication.prototype.login = function(username, password) {
            var dfd = $.Deferred();
            var _auth = this;
            securityDataService.getAuthToken(username, password)
                    .done(function(data) {
                        _auth.setToken(data);
                        dfd.resolve(true);
                    });
            return dfd;
        };
        return Authentication;
    })();
    Security.Authentication = Authentication;

})(Security || (Security = {}));

