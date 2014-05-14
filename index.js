(function() {
    "use strict";

    var MyApp = window.MyApp = {};


    $(function() {
        //Globalize.culture(navigator.language || navigator.browserLanguage);
        Globalize.culture('fr');

        MyApp.user = new User.Account(new Security.Authentication());

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            navigationType: "simple",
            navigation: [
                {
                    title: "Home",
                    action: "#home",
                    icon: "home"
                },
                {
                    title: "About",
                    action: "#about",
                    icon: "info"
                }
            ]
        });

        MyApp.app.router.register(":view", {view: "home"});

        if (MyApp.user.getIdentity().isLogged()) {
            MyApp.app.navigate('home');
        } else
            MyApp.app.navigate('connexion');
    });

})();