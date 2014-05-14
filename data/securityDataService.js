var securityDataService;
(function (securityDataService) {
    var securityDataModel = (function () {
        function securityDataModel() {
        }
        securityDataModel.prototype.getAuthToken = function (username, password, callbacks) {
        };
        return securityDataModel;
    })();
    securityDataService.securityDataModel = securityDataModel;

    function getAuthToken(username, password) {
            var dfd = $.Deferred();

            setTimeout(function () {
                dfd.resolve(helper.randomStr());
            }, 1000);

            return dfd;
    }
    securityDataService.getAuthToken = getAuthToken;

})(securityDataService || (securityDataService = {}));

