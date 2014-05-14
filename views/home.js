MyApp.home = function(params) {

    var viewModel = {
        
        //boutons
        navForum: function(e) {
            MyApp.app.navigate('forum');
        },
        navCategories: function(e) {
            MyApp.app.navigate('categories');
        },
        navPlusJetons: function(e) {
            MyApp.app.navigate('plusJetons');
        },
        navProfil: function(e) {
            MyApp.app.navigate('profil');
        },
        
        //popup   
        messagesVisible: ko.observable(false),
        showMessages: function() {
            viewModel.messagesVisible(true);
        },
        hideMessages: function() {
            viewModel.messagesVisible(false);
        },
        
        reseauxSociauxVisible: ko.observable(false),
                showReseauxSociaux: function() {
                    viewModel.reseauxSociauxVisible(true);
                },
        hideReseauxSociaux: function() {
            viewModel.reseauxSociauxVisible(false);
        }    
        

    };
    return viewModel;
};