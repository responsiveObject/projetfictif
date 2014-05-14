MyApp.plusJetons = function(params) {


    var viewModel = {
        acheterVisible: ko.observable(false),
        showAcheter: function() {
            viewModel.acheterVisible(true);
        },
        hideAcheter: function() {
            viewModel.acheterVisible(false);
        },
        
        videosVisible: ko.observable(false),
                showVideos: function() {
                    viewModel.videosVisible(true);
                },
        hideVideos: function() {
            viewModel.videosVisible(false);
        },
        
        applicationsVisible: ko.observable(false),
                showApplications: function() {
                    viewModel.applicationsVisible(true);
                },
        hideApplications: function() {
            viewModel.applicationsVisible(false);
        }
    };

    return viewModel;
};

