var SELECT_UTIL = (function($, chart) {
    "use strict";
    var unitToken = "${unit}";
    var branchToken = '${branch}';
    var headerTemplate = branchToken + 'verbrauch für 2014 in ' + unitToken;

    var units = {
        electricity: "KWh",
        gas: "KWh",
        water: "m3"
    };

    var branches = {
            electricity: "Strom",
            gas: "Gas",
            water: "Wasser"
    };

    var colors = {
        blue: "rgba(8,65,155,1)",
        gray: "rgba(236,236,236,1)",
        white: "rgba(255,255,255,1)"
    };

    var highlightColors = {
        blue: "rgba(8,65,155,1)",
        gray: "rgba(236,236,236,1)",
        white: "rgba(255,255,255,1)"
    };

    var data = {
        electricity: {
            labels: ["JAN", "FEB", "MÄR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ"],
            datasets: [
                {
                    label: "KWh",
                    fillColor: colors.blue,
                    strokeColor: colors.blue,
                    highlightFill: highlightColors.blue,
                    highlightStroke: highlightColors.blue,
                    data: [130, 122, 125, 120, 121, 115, 102, 110, 108, 119, 126, 133]
                }
            ]
        },
        gas: {
            labels: ["JAN", "FEB", "MÄR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ"],
            datasets: [
                {
                    label: "m3",
                    fillColor: colors.blue,
                    strokeColor: colors.blue,
                    highlightFill: highlightColors.blue,
                    highlightStroke: highlightColors.blue,
                    data: [230, 189, 125, 120, 41, 65, 56, 110, 108, 150, 210, 230]
                }
            ]
        },
        water: {
            labels: ["JAN", "FEB", "MÄR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ"],
            datasets: [
                {
                    label: "m3",
                    fillColor: colors.blue,
                    strokeColor: colors.blue,
                    highlightFill: highlightColors.blue,
                    highlightStroke: highlightColors.blue,
                    data: [13, 12, 12, 12, 12, 11, 10, 11, 18, 11, 12, 13]
                }
            ]
        }
    };

    function setText(util){
    	var headerText = headerTemplate;
    	headerText = headerText.replace(branchToken, branches[util]);
    	headerText = headerText.replace(unitToken, units[util]);
        $("#infoHeader").html(headerText);
    }

    function setGraphValues(util) {
        chart.setData(data[util]);
        chart.redraw();
    }

    function connectEvents(){
        $("#utilSelect").on("change", function(){
            var select = $(this);
            var util = select.val();
            setText(util);
            setGraphValues(util);
        });
    }

    return {
        init: function() {
            // Set defaults
            connectEvents();
            setText("electricity");
            setGraphValues("electricity");
        }
    };
})(jQuery, CONSUPMTION_CHART);
