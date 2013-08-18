// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // initialize important global variables
    var url, year, day, month, hours, minutes, starttext, desttext;

    // these need to be blank to allow for checks
    var start = "";
    var dest = "";

    // retrieved format: yyyy-mm-ddThh-mm-ss or yyyy-mm-ddTh-mm-ss and we only want the stuff after point T so I set PointT from where it starts
    var PointT = 11;

    // during the loop where we print time, we want the first needed loop to display a time until this variable wil track if we did that
    var coming = "false";

    WinJS.UI.Pages.define("/pages/Shuttle/Shuttle.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // add 114 Western Ave as a point of interest
            var WestButton = document.getElementById("WestButton");
            WestButton.addEventListener("click", this.WestbuttonClickHandler.bind(this), false);

            // add Boylston Gate as a point of interest
            var BGButton = document.getElementById("BGButton");
            BGButton.addEventListener("click", this.BGbuttonClickHandler.bind(this), false);

            // add Harvard Square as a point of interest
            var HSButton = document.getElementById("HSButton");
            HSButton.addEventListener("click", this.HSbuttonClickHandler.bind(this), false);

            // add HBS Rotary as a point of interest
            var HBSButton = document.getElementById("HBSButton");
            HBSButton.addEventListener("click", this.HBSbuttonClickHandler.bind(this), false);

            // add HKS as a point of interest
            var HKSButton = document.getElementById("HKSButton");
            HKSButton.addEventListener("click", this.HKSbuttonClickHandler.bind(this), false);

            // add i-Lab as a point of interest
            var LabButton = document.getElementById("LabButton");
            LabButton.addEventListener("click", this.LabbuttonClickHandler.bind(this), false);

            // add Lamont Libray as a point of interest
            var LibButton = document.getElementById("LibButton");
            LibButton.addEventListener("click", this.LibbuttonClickHandler.bind(this), false);

            // add Mass Ave Garden St as a point of interest
            var MAGSButton = document.getElementById("MAGSButton");
            MAGSButton.addEventListener("click", this.MAGSbuttonClickHandler.bind(this), false);

            // add Mather House as a point of interest
            var MatherButton = document.getElementById("MatherButton");
            MatherButton.addEventListener("click", this.MatherbuttonClickHandler.bind(this), false);

            // add Maxwell Dworkin as a point of interest
            var MaxwellButton = document.getElementById("MaxwellButton");
            MaxwellButton.addEventListener("click", this.MaxwellbuttonClickHandler.bind(this), false);

            // add Memorial Hall as a point of interest
            var MemButton = document.getElementById("MemButton");
            MemButton.addEventListener("click", this.MembuttonClickHandler.bind(this), false);

            // add Peaboy Terrace as a point of interest
            var PTButton = document.getElementById("PTButton");
            PTButton.addEventListener("click", this.PTbuttonClickHandler.bind(this), false);

            // add Pound Hall as a point of interest
            var PHButton = document.getElementById("PHButton");
            PHButton.addEventListener("click", this.PHbuttonClickHandler.bind(this), false);

            // add The Quad as a point of interest
            var QuadButton = document.getElementById("QuadButton");
            QuadButton.addEventListener("click", this.QuadbuttonClickHandler.bind(this), false);

            // add Soldiers FIeld Park as a point of interest
            var SFPButton = document.getElementById("SFPButton");
            SFPButton.addEventListener("click", this.SFPbuttonClickHandler.bind(this), false);

            // add The Stadium as a point of interest
            var StadiumButton = document.getElementById("StadiumButton");
            StadiumButton.addEventListener("click", this.StadiumbuttonClickHandler.bind(this), false);

            // add Winthrop House as a point of interest
            var WinthropButton = document.getElementById("WinthropButton");
            WinthropButton.addEventListener("click", this.WinthropbuttonClickHandler.bind(this), false);

            // clear all points
            var ClearButton = document.getElementById("ClearButton");
            ClearButton.addEventListener("click", this.ClearbuttonClickHandler, false);
            
        },

        // Set 114 Western Ave
        WestbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "114+Western+Ave"
                document.getElementById("URL").innerText = "Start: 114 Western Ave";
            }
            else {
                dest = "114+Western+Ave"
                this.daymaker();
            }
        },

        // Set Bolyston Gate
        BGbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Boylston+Gate"
                document.getElementById("URL").innerText = "Start: Boylston Gate";
            }
            else {
                dest = "Boylston+Gate"
                this.daymaker();
            }
        },

        // Set Harvard Square
        HSbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Harvard+Square"
                document.getElementById("URL").innerText = "Start: Harvard Square";
            }
            else {
                dest = "Harvard+Square"
                this.daymaker();
            }
        },

        // Set HBS Rotary
        HBSbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "HBS+Rotary"
                document.getElementById("URL").innerText = "Start: HBS Rotary";
            }
            else {
                dest = "HBS+Rotary"
                this.daymaker();
            }
        },

        // Set HKS
        HKSbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "HKS"
                document.getElementById("URL").innerText = "Start: HKS";
            }
            else {
                dest = "HKS"
                this.daymaker();
            }
        },

        // Set i-Lab
        LabbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "i-Lab"
                document.getElementById("URL").innerText = "Start: i-Lab";
            }
            else {
                dest = "i-Lab"
                this.daymaker();
            }
        },

        // Set Lamont Library
        LibbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Lamont+Library"
                document.getElementById("URL").innerText = "Start: Lamont Library";
            }
            else {
                dest = "Lamont+Library"
                this.daymaker();
            }
        },

        // Set Mass Ave Garden St
        MAGSbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Mass+Ave+Garden+St"
                document.getElementById("URL").innerText = "Start: Mass Ave Garden St";
            }
            else {
                dest = "Mass+Ave+Garden+St"
                this.daymaker();
            }
        },

        // Set Mather House
        MatherbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Mather+House"
                document.getElementById("URL").innerText = "Start: Mather House";
            }
            else {
                dest = "Mather+House"
                this.daymaker();
            }
        },

        // Set Maxwell Dworkin
        MaxwellbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Maxwell+Dworkin"
                document.getElementById("URL").innerText = "Start: Maxwell Dworkin";
            }
            else {
                dest = "Maxwell+Dworkin"
                this.daymaker();
            }
        },

        // Set Memorial Hall
        MembuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Memorial+Hall"
                document.getElementById("URL").innerText = "Start: Memorial Hall";
            }
            else {
                dest = "Memorial+Hall"
                this.daymaker();
            }
        },

        // Set Peabody Terrace
        PTbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Peabody+Terrace"
                document.getElementById("URL").innerText = "Start: Peabody Terrace";
            }
            else {
                dest = "Peabody+Terrace"
                this.daymaker();
            }
        },

        // Set Pound Hall
        PHbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Pound+Hall"
                document.getElementById("URL").innerText = "Start: Pound Hall";
            }
            else {
                dest = "Pound+Hall"
                this.daymaker();
            }
        },

        // Set the Quad
        QuadbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Quad"
                document.getElementById("URL").innerText = "Start: " + start;
            }
            else {
                dest = "Quad"
                this.daymaker();
            }
        },

        // Set Soldiers Field Park
        SFPbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Soldiers+Field+Park"
                document.getElementById("URL").innerText = "Start: Soldiers Field Park";
            }
            else {
                dest = "Soldiers+Field+Park"
                this.daymaker();
            }
        },

        // Set Stadium
        StadiumbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Stadium"
                document.getElementById("URL").innerText = "Start: " + start;
            }
            else {
                dest = "Stadium"
                this.daymaker();
            }

        },

        // Set Winthrop House
        WinthropbuttonClickHandler: function (eventInfo) {

            if (start == "") {
                start = "Winthrop+House"
                document.getElementById("URL").innerText = "Start: Winthrop House";
            }
            else {
                dest = "Winthrop+House"
                this.daymaker();
            }
        },

        // clear the start and end points
        ClearbuttonClickHandler: function (eventInfo) {
            
            // set start and dest to nothing
            start = "";
            dest = "";
            coming = "false";

            // empty results
            document.getElementById("Results").innerText = "";
            document.getElementById("URL").innerText = "";
        },

        // makes necessary dates for URL making
        daymaker: function () {

            if (start == dest) {
                this.ClearbuttonClickHandler();
            }
            else {
                // get today's date
                var presenttime = new Date();

                // set month in a way the API likes
                month = presenttime.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                }

                // set day in a way the API likes as well
                day = presenttime.getDate();
                if (day < 10) {
                    day = '0' + day;
                }

                year = presenttime.getFullYear();
                hours = presenttime.getHours();

                // setting the minutes this way makes checking the time later more aesthetically pleasing
                minutes = presenttime.getMinutes();
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }

                // go to the urlmaker function now
                this.urlmaker();
            }
            
        },

        // makes the URL
        urlmaker: function () {
            url = "http://shuttleboy.cs50.net/api/1.2/trips?a=" + start + "&b=" + dest + "&sdt=" + year + "-" + month + "-" + day + "&output=json";


            this.getShuttle();
        },

        // gets information and puts it on Shuttlepage
        getShuttle: function (eventInfo) {

            // initialize variables we'll use to get/store information
            var jsonResult;
            var JSONShuttle;

            // go to the website we have the information in
            WinJS.xhr(
            {
                url: url,
                responseType: 'json'
            }
            ).done(function complete(response) {

                // turns our information into a JSON array
                jsonResult = response.responseText;
                JSONShuttle = JSON.parse(jsonResult);

                // check if we got results
                if (JSONShuttle == "") {
                    document.getElementById("URL").innerText = "Cannot find anymore shuttles between these two points today"
                    document.getElementById("Results").innerText = ""
                }

                // if we did get results, proceed
                else {
                    // set up page

                    document.getElementById("URL").innerText = ""
                    document.getElementById("Results").innerText = "The upcoming shuttle times are: \n "
                    for (var i = 0; i < JSONShuttle.length; i++) {

                        var checkhour, checkmin;

                        // make sure that we only start at the necessary hour, so find it in the retrieved timestamp
                        if (JSONShuttle[i].departs[PointT + 1] == ":") {
                            checkhour = JSONShuttle[i].departs[PointT];
                        }

                        else {
                            checkhour = JSONShuttle[i].departs[PointT] + JSONShuttle[i].departs[PointT + 1];
                        }

                        // same goes for the minute, so find it in the time stamp
                        if (JSONShuttle[i].departs[PointT + 1] == ":") {
                            checkmin = JSONShuttle[i].departs[PointT + 2] + JSONShuttle[i].departs[PointT + 3];
                        }
                        else {
                            checkmin = JSONShuttle[i].departs[PointT + 3] + JSONShuttle[i].departs[PointT + 4];
                        }

                        // display the time that it is now
                        document.getElementById("Current").innerText = "Time right now:   " + hours + ":" + minutes;

                        // only print the shuttle times after current time
                        if (checkhour >= hours && checkmin >= minutes) {

                            // check when nearest shuttle is coming and calculate time till then
                            if (coming == "false") {
                                var cominghour = checkhour - hours;
                                // set cominghour in a way that looks nice
                                if (cominghour < 10) {
                                    cominghour = '0' + cominghour;
                                }

                                var comingmin = checkmin - minutes;
                                // set cominghour in a way that looks nice
                                if (comingmin < 10) {
                                    comingmin = '0' + comingmin;
                                }

                                document.getElementById("URL").innerText = "Time till next shuttle:  " + cominghour + ":" + comingmin;
                                coming = "true";
                            }


                            // only print the time of the day, nothing before PointT
                            document.getElementById("Results").innerText += "Departures at ";
                            for (var j = PointT; j < JSONShuttle[i].departs.length; j++) {

                                if (JSONShuttle[i].departs[j] != "undefined") {
                                    document.getElementById("Results").innerText += JSONShuttle[i].departs[j];
                                }
                            }
                            document.getElementById("Results").innerText += " \n ";

                            // same for arrivals
                            document.getElementById("Results").innerText += "Arrives at ";
                            for (var j = PointT; j < JSONShuttle[i].arrives.length; j++) {

                                if (JSONShuttle[i].departs[j] != "undefined") {
                                    document.getElementById("Results").innerText += JSONShuttle[i].arrives[j];
                                }
                            }
                            document.getElementById("Results").innerText += " \n ";
                        };

                        
                        

                    }
                }

                if (coming == "false") {
                    document.getElementById("URL").innerText = "Cannot find anymore shuttles between these two points today";
                    document.getElementById("Results").innerText = "";
                }
                
            })

        },

        // when moving away from the page, clear variables in case of return
        unload: function () {
            start = "";
            dest = "";
            coming = "false";
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
