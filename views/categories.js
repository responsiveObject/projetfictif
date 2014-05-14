MyApp.categories = function(params) {


    var viewModel = {
        
        //boutons
        navDefisCategorie3: function(e) {
            MyApp.app.navigate('defisCategorie3');
        },
        
        //popup
        defisCategorie2Visible: ko.observable(false),
        showDefisCategorie2: function() {
            viewModel.defisCategorie2Visible(true);
        },
        hideDefisCategorie2: function() {
            viewModel.defisCategorie2Visible(false);
        }
        
        
    };
    return viewModel;
};