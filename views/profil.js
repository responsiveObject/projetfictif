MyApp.profil = function(params) {

    var viewModel = {
        showConfirm: function() {
            var result = DevExpress.ui.dialog.confirm(Globalize.localize("Are_you_sure?"), "Confirm changes");
            result.done(function(dialogResult) {
                alert(dialogResult ? "Confirmed" : "Canceled");
            });
        }

    };
    return viewModel;
};

