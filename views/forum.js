MyApp.forum = function(params) {

    var viewModel = {
        
        //tabs
        tabs: [
            {text: 'Juger'},
            {text: 'Non juger'},
            {text: 'Palmares'}
        ],
        tabContent: ko.observable(''),
        selectedTab: ko.observable(0)
        
        
    };
    return viewModel;
};