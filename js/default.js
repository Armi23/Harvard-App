// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;

    // Create variables for the navigation buttons. 
    var homeButton, MenupageButton, MappageButton, ShuttleButton, appbar;

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            // Save the previous execution state. 
            WinJS.Application.sessionState.previousExecutionState =
                args.detail.previousExecutionState;

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {

                // Retrieve the app bar.
                appbar = document.getElementById("appbar").winControl;

                // Attach event handlers to the command buttons.
                homeButton = appbar.getCommandById("homeButton");
                homeButton.addEventListener("click", goToHomePage, false);

                MenupageButton = appbar.getCommandById("MenuButton");
                MenupageButton.addEventListener("click", goToMenuPage, false);

                MappageButton = appbar.getCommandById("MapButton");
                MappageButton.addEventListener("click", goToMapPage, false);

                ShuttleButton = appbar.getCommandById("ShuttleButton");
                ShuttleButton.addEventListener("click", goToShuttlePage, false);

                // Disable appbar buttons that do not serve a function
                WinJS.Navigation.addEventListener("navigated", navigatedHandler, false);

                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));
        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    // navigation functions: go to requested page and then hide the app bar
    function goToHomePage(eventInfo) {
        WinJS.Navigation.navigate("/pages/home/home.html");
        appbar.hide();
    }

    function goToMenuPage(eventInfo) {
        WinJS.Navigation.navigate("/pages/Menu/Menupage.html");
        appbar.hide();
    }

    function goToMapPage(eventInfo) {
        WinJS.Navigation.navigate("/pages/Map/Mappage.html");
        appbar.hide();
    }

    function goToShuttlePage(eventInfo) {
        WinJS.Navigation.navigate("/pages/Shuttle/Shuttle.html");
        appbar.hide();
    }

    // define function that disables appbar buttons when they do not serve a purpose
    function navigatedHandler(eventInfo) {
        if (eventInfo.detail.location === "/pages/home/home.html") {
            appbar.hideCommands(homeButton, true);
            appbar.showCommands(MenupageButton, true);
            appbar.showCommands(MappageButton, true);
            appbar.showCommands(ShuttleButton, true);
        }
        else if (eventInfo.detail.location === "/pages/Menu/Menupage.html") {
            appbar.hideCommands(MenupageButton, true);
            appbar.showCommands(homeButton, true);
            appbar.showCommands(MappageButton, true);
            appbar.showCommands(ShuttleButton, true);
        }
        else if (eventInfo.detail.location === "/pages/Map/Mappage.html") {
            appbar.hideCommands(MappageButton, true);
            appbar.showCommands(MenupageButton, true);
            appbar.showCommands(homeButton, true);
            appbar.showCommands(ShuttleButton, true);
        }
        else if (eventInfo.detail.location === "/pages/Shuttle/Shuttle.html") {
            appbar.hideCommands(ShuttleButton, true);
            appbar.showCommands(MenupageButton, true);
            appbar.showCommands(MappageButton, true);
            appbar.showCommands(homeButton, true);
        }
    }


    app.start();
})();
