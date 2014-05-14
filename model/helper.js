var helper;
(function(helper) {
    var StorageKeyType = (function() {
        function StorageKeyType() {
        }
        StorageKeyType.AUTH_TOKEN = "authToken";
        StorageKeyType.USER_PROFILE = "user_profile";
        StorageKeyType.SYSTEM = "system";
        return StorageKeyType;
    })();
    helper.StorageKeyType = StorageKeyType;

    function buildStorageKey(parentKey, childKey, id) {
        var key = 'maestro_' + parentKey;

        if (id !== undefined)
            key += '_' + id;

        if (childKey !== undefined)
            key += '_' + childKey;

        return key;
    }
    helper.buildStorageKey = buildStorageKey;

    function getFullDateFormat(language) {
        switch (language.code()) {
            case cultureModule.LanguageCode.EN.code:
                return 'dddd, MMMM d, yyyy';
            case cultureModule.LanguageCode.FR.code:
                return 'dddd, d MMMM, yyyy';
        }
    }
    helper.getFullDateFormat = getFullDateFormat;

    function randomStr(m) {
        var m = m || 9;
        s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < m; i++) {
            s += r.charAt(Math.floor(Math.random() * r.length));
        }
        return s;
    }
    helper.randomStr = randomStr;
    
    function getTimeFormat(language) {
        switch (language.code()) {
            case cultureModule.LanguageCode.EN.code:
                return 'HH:mm';
            case cultureModule.LanguageCode.FR.code:
                return 'HH:mm';
        }
    }
    helper.getTimeFormat = getTimeFormat;
})(helper || (helper = {}));

