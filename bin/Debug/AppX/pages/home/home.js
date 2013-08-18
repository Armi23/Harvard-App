(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // Retrieve the menu button and register our event handler. 
            var MenuButton = document.getElementById("MenuButton");
            MenuButton.addEventListener("click", this.MenubuttonClickHandler, false);

            // Retrieve the map button and register our event handler. 
            var MapButton = document.getElementById("MapButton");
            MapButton.addEventListener("click", this.MapbuttonClickHandler, false);

            // Retrieve the shuttle button and register our event handler. 
            var ShuttleButton = document.getElementById("ShuttleButton");
            ShuttleButton.addEventListener("click", this.ShuttlebuttonClickHandler, false);

        },

        MenubuttonClickHandler: function (eventInfo) {

            // Navigate to the menu page if the button for it has been clicked
            WinJS.Navigation.navigate("/pages/Menu/Menupage.html");
        },

        MapbuttonClickHandler: function (eventInfo) {

            // Navigate to the menu page if the button for it has been clicked
            WinJS.Navigation.navigate("/pages/Map/Mappage.html");
        },

        ShuttlebuttonClickHandler: function (eventInfo) {

            // Navigate to the menu page if the button for it has been clicked
            WinJS.Navigation.navigate("/pages/Shuttle/Shuttle.html");
        }

    });
})();
