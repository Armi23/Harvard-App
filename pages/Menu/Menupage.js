// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // initialize variables used in different functions
    var url, month, day, year, hours, minutes, mealname, mealtile;


    WinJS.UI.Pages.define("/pages/Menu/Menupage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            
            // call function to get dates for URL and then to go make the URL
            this.datemaker();

            // allow to go one day forward
            var ForButton = document.getElementById("ForButton");
            ForButton.addEventListener("click", this.ForbuttonClickHandler.bind(this), false);

            // allow to go one day back
            var BackButton = document.getElementById("BackButton");
            BackButton.addEventListener("click", this.BackbuttonClickHandler.bind(this), false);

            // allow to check breakfast
            var BreakButton = document.getElementById("BreakButton");
            BreakButton.addEventListener("click", this.BreakbuttonClickHandler.bind(this), false);

            // allow to check lunch
            var LunchButton = document.getElementById("LunchButton");
            LunchButton.addEventListener("click", this.LunchbuttonClickHandler.bind(this), false);

            // allow to check dinner
            var DinnerButton = document.getElementById("DinnerButton");
            DinnerButton.addEventListener("click", this.DinnerbuttonClickHandler.bind(this), false);

            // allow to check dinner
            var TodayButton = document.getElementById("TodayButton");
            TodayButton.addEventListener("click", this.TodaybuttonClickHandler.bind(this), false);

        },

        // add to the date
        ForbuttonClickHandler: function (eventInfo) {

            if (month == 2) {
                if (day == 28 && ((year % 4) != 0)) {
                    month = 3;
                    day = 1
                }
                else if (day == 29) {
                    month = 3;
                    day = 1
                }
            }
            else if (day == 31) {
                month++;
                day = 1;
            }
            else if (day == 30 && ((month == 4) || (month == 6) || (month == 9) || (month == 11))) {
                month++;
                day = 1;
            }
            else {
                day++;
            }

            if (day < 10) {
                day = '0' + day;
            }

            url = "http://food.cs50.net/api/1.3/menus?meal=LUNCH&sdt=" + year + "-" + month + "-" + day + "&output=json";
            mealtile = "Lunch";

            // go to the menu function now
            this.getMenu();
        },

        // go back a day
        BackbuttonClickHandler: function (eventInfo) {

            if (day == 1) {
                if (month == 3) {
                    if ((year % 4) == 0) {
                        month = 2;
                        day = 29
                    }
                    else {
                        month = 2;
                        day = 28
                    }
                }
                else if ((month == 5) || (month == 7) || (month == 10) || (month == 12)) {
                    month--;
                    day = 30;
                }
                else {
                    month--;
                    day = 31;
                }
            }
            
            else {
                day--;
            }

            if (day < 10) {
                day = '0' + day;
            }

            url = "http://food.cs50.net/api/1.3/menus?meal=LUNCH&sdt=" + year + "-" + month + "-" + day + "&output=json";
            mealtile = "Lunch";

            // go to the menu function now
            this.getMenu();
        },

        // look at breakfast
        BreakbuttonClickHandler: function (eventInfo) {

            url = "http://food.cs50.net/api/1.3/menus?meal=BREAKFAST&sdt=" + year + "-" + month + "-" + day + "&output=json";
            mealtile = "Breakfast";
        
            // go to the menu function now
            this.getMenu();
        },

        // look at lunch
        LunchbuttonClickHandler: function (eventInfo) {

            url = "http://food.cs50.net/api/1.3/menus?meal=LUNCH&sdt=" + year + "-" + month + "-" + day + "&output=json";
            mealtile = "Lunch";

            // go to the menu function now
            this.getMenu();
        },

        // look at dinner
        DinnerbuttonClickHandler: function (eventInfo) {

            url = "http://food.cs50.net/api/1.3/menus?meal=DINNER&sdt=" + year + "-" + month + "-" + day + "&output=json";
            mealtile = "Dinner";

            // go to the menu function now
            this.getMenu();
        },

        // go back to today
        TodaybuttonClickHandler: function (eventInfo) {

            // just start nomral function
            this.datemaker();
        },

        // makes necessary dates for URL making
        datemaker: function (eventInfo) {
        
            // get today's date
            var presenttime = new Date();
            month = presenttime.getMonth() + 1;
            if (month <10)
            {
                month = '0' + month;
            }

            day = presenttime.getDate();
            if (day < 10) {
                day = '0' + day;
            }

            year = presenttime.getFullYear();
            hours = presenttime.getHours();
            minutes = presenttime.getMinutes();

            // go to the urlmaker function now
            this.urlmaker();
        },

        // makes the URL, its a seperate function just in case I want to call it at another point, like when I chane the dates
        urlmaker: function (eventInfo) {

            // make URL by figuring out current or next to come meal or if dinner has closed find breakfast for next day
            if (hours < 10)
            {
                url = "http://food.cs50.net/api/1.3/menus?meal=BREAKFAST&sdt=" + year + "-" + month + "-" + day + "&output=json";
                mealtile = "Breakfast";
            }
            else if (hours >= 10 && hours < 15)
            {
                url = "http://food.cs50.net/api/1.3/menus?meal=LUNCH&sdt=" + year + "-" + month + "-" + day + "&output=json";
                mealtile = "Lunch";
            }
            else if (hours >= 15 && hours < 19)
            {
                url = "http://food.cs50.net/api/1.3/menus?meal=DINNER&sdt=" + year + "-" + month + "-" + day + "&output=json";
                mealtile = "Dinner";
            }
            // find all possible conditions in which adding to the date could go wrong and correct for them
            else if (hours >= 19) {
                if (month == 2) {
                    if (day == 28 && ((year % 4) != 0)) {
                        month = 3;
                        day = 1
                    }
                    else if (day == 29) {
                        month = 3;
                        day = 1
                    }
                }
                else if (day == 31) {
                    month++;
                    day = 1;
                }
                else if (day == 30 && ((month == 4) || (month == 6) || (month == 9) || (month == 11))) {
                    month++;
                    day = 1;
                }
                else {
                    day++;
                }

                if (day < 10) {
                    day = '0' + day;
                }

                url = "http://food.cs50.net/api/1.3/menus?meal=BREAKFAST&sdt=" + year + "-" + month + "-" + day + "&output=json";
                mealtile = "Breakfast";
            }
                        
            this.getMenu();
        },

        // gets information and puts it on Menupage
        getMenu: function (eventInfo) {

            // initialize variables we'll use to get/store information
            var jsonResult;
            var JSONMenu;

            // go to the website we have the information in
            WinJS.xhr(
            {
                url: url,
                responseType: 'json'
            }
            ).done(function complete(response) {

                // turns our information into a JSON array
                jsonResult = response.responseText;
                JSONMenu = JSON.parse(jsonResult);


                // check if we got anything from the URL and if so proceed
                if (JSONMenu == "") {
                    document.getElementById("MainMenu").innerText = "PROBLEM! Cannot retrieve necessary information for " + mealtile + " on "
                        + month + " / " + day + " / " + year + ". Are they even open?";
                    document.getElementById("Entree").innerText = "";
                    document.getElementById("VEntree").innerText = "";
                    document.getElementById("Starch").innerText = "";
                    document.getElementById("Soups").innerText = "";
                    document.getElementById("Dessert").innerText = "";
                }

                else {
                    // have a lowercase version of the meal's name just so we're sure the user gets the right meal name
                    mealname = JSONMenu[0].meal.toLowerCase();

                    // tell person what meal they are looking at
                    document.getElementById("MainMenu").innerText = "This is the menu for " + mealname + " on the day "
                    + month + "/" + day + "/" + year;
                    

                    // initialize notifications for livetiles
                    var notifications = Windows.UI.Notifications;
                    var template = notifications.TileTemplateType.tileWideText05;
                    var tileXml = notifications.TileUpdateManager.getTemplateContent(template);
                    var tileTextAttributes = tileXml.getElementsByTagName("text");
                    var tilenum = 1;
                    tileTextAttributes[0].appendChild(tileXml.createTextNode(mealtile + " " + month + "/" + day + "/" + year));

                    // if it is not breakfast, this set of instructions will find the important dining hall options
                    if (JSONMenu[0].meal == "LUNCH" || JSONMenu[0].meal == "DINNER") {
                        // set up the div elements to display information in sentences
                        document.getElementById("Entree").innerText = "In the entrees are : \n ";
                        document.getElementById("VEntree").innerText = "In the vegetarian entrees are : \n ";
                        document.getElementById("Starch").innerText = "In the starch are : \n ";
                        document.getElementById("Soups").innerText = "In the soups are : \n ";
                        document.getElementById("Dessert").innerText = "For dessert there are : \n ";

                        

                        for (var i = 0; i < JSONMenu.length; i++) {
                            // search for important items and put them in their respective divs
                            if (JSONMenu[i].category === "ENTREES") {
                                document.getElementById("Entree").innerText += JSONMenu[i].name + " \n ";
                                var entree = JSONMenu[i].name;
                                
                                // add entree to live tile update
                                tileTextAttributes[tilenum].appendChild(tileXml.createTextNode(entree));
                                tilenum++;
                                
                            }
                            else if (JSONMenu[i].category === "VEGETARIAN ENTREE") {
                                document.getElementById("VEntree").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "STARCH & POTATOES") {
                                document.getElementById("Starch").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "TODAY'S SOUP") {
                                document.getElementById("Soups").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "DESSERTS") {
                                document.getElementById("Dessert").innerText += JSONMenu[i].name + " \n ";
                            }
                        }

                        
                    }

                    // if the meal is breakfast, then this set of identifiers work only
                    else if (JSONMenu[0].meal == "BREAKFAST") {
                        // set up the div elements to display information in sentences
                        document.getElementById("Entree").innerText = "In the breakfast entrees are : \n ";
                        document.getElementById("VEntree").innerText = "In the breakfast meats are : \n ";
                        document.getElementById("Starch").innerText = "In the breakfast bakery are : \n ";
                        document.getElementById("Soups").innerText = "In the breakfast misc. are : \n ";
                        document.getElementById("Dessert").innerText = "For accompaniments and fruits there are : \n ";

                        for (var i = 0; i < JSONMenu.length; i++) {
                            // search for important items and put them in their respective divs
                            if (JSONMenu[i].category === "BREAKFAST ENTREES") {
                                document.getElementById("Entree").innerText += JSONMenu[i].name + " \n ";
                                var entree = JSONMenu[i].name;

                                // add entree to live tile update
                                tileTextAttributes[tilenum].appendChild(tileXml.createTextNode(entree));
                                tilenum++;
                            }
                            else if (JSONMenu[i].category === "BREAKFAST MEATS") {
                                document.getElementById("VEntree").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "BREAKFAST BAKERY") {
                                document.getElementById("Starch").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "BREAKFAST MISC") {
                                document.getElementById("Soups").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "ACCOMPANIMENTS & FRUIT") {
                                document.getElementById("Dessert").innerText += JSONMenu[i].name + " \n ";
                            }
                        }

                    }

                    // if the meal is brunch, then this set of identifiers work only
                    else if (JSONMenu[0].meal == "BRUNCH") {
                        // set up the div elements to display information in sentences
                        document.getElementById("Entree").innerText = "In the brunch entrees there are : \n ";
                        document.getElementById("VEntree").innerText = "";
                        document.getElementById("Starch").innerText = "";
                        document.getElementById("Soups").innerText = "In the soups there are : \n ";
                        document.getElementById("Dessert").innerText = "For desserts there are : \n ";

                        for (var i = 0; i < JSONMenu.length; i++) {
                            // search for important items and put them in their respective divs
                            if (JSONMenu[i].category == "BRUNCH") {
                                document.getElementById("Entree").innerText += JSONMenu[i].name + " \n ";
                                var entree = JSONMenu[i].name;

                                // add entree to live tile update unless we're running out of space
                                if (tilenum < 5) {
                                    tileTextAttributes[tilenum].appendChild(tileXml.createTextNode(entree));
                                    tilenum++;
                                }
                            }
                            else if (JSONMenu[i].category === "TODAY'S SOUP") {
                                document.getElementById("Soups").innerText += JSONMenu[i].name + " \n ";
                            }
                            else if (JSONMenu[i].category === "DESSERTS") {
                                document.getElementById("Dessert").innerText += JSONMenu[i].name + " \n ";
                            }
                        }

                    }

                    // after going through the menu, send live tile update 
                    var tileNotification = new notifications.TileNotification(tileXml);
                    notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
                    
                }
            })
              
        },


        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
