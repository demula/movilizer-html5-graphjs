var CONSUPMTION_CHART = (function($, Chart, window) {
    "use strict";
    var myNewChart = {};
    var maxHeight;
    var maxWidth;

    var config = {
        fixedHeight: "210",
        fixedWidth: "0",
        paddingHeight: 0.1,
        paddingWidth: 0.1
    };

    var colors = {
        blue: "rgba(8,65,155,1)",
        gray: "rgba(236,236,236,1)",
        white: "rgba(255,255,255,1)"
    };

    var data = {};

    var options = {
        animation: true,

        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Scale label font size in pixels
        scaleFontSize: 8,

        // String - Scale label font weight style
        scaleFontStyle: "normal",

        // String - Scale label font colour
        scaleFontColor: colors.blue,

        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : false,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : false,

        //String - Colour of the grid lines
        scaleGridLineColor : colors.blue,

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - If there is a stroke on each bar
        barShowStroke : true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

        customTooltips: function(tooltip) {

            // tooltip will be false if tooltip is not visible or should be hidden
            if (!tooltip) {
                return;
            }

            // Otherwise, tooltip will be an object with all tooltip properties like:

            // tooltip.caretHeight
            // tooltip.caretPadding
            // tooltip.chart
            // tooltip.cornerRadius
            // tooltip.fillColor
            // tooltip.font...
            // tooltip.text
            // tooltip.x
            // tooltip.y
            // etc...

        }
    };

    function setMaxSize(height, width) {
        maxHeight = height;
        maxWidth = width;
    }

    function getPreferedHeight(percentOfAvailableScreen) {
        if ("0" != config.fixedHeight) {
            return config.fixedHeight;
        }
        return maxHeight * percentOfAvailableScreen;
    }

    function getPreferedWidth(percentOfAvailableScreen) {
        if ("0" != config.fixedWidth) {
            return config.fixedWidth;
        }
        return maxWidth * percentOfAvailableScreen;
    }

    function setCanvasSize(canvas) {
        canvas.height = getPreferedHeight(1 - config.paddingHeight);
        canvas.width = getPreferedWidth(1 - config.paddingWidth);
    }

    function connectEvents(){
        var ctx = $("#myChart").get(0).getContext("2d");

        //Listen to size changes when using the desktop client
        $(window).on('resize', function(){
            var win = $(this); //this = window
            setMaxSize(win.height(), win.width());

            //Set container size
            //$("#chart-frame").height(maxHeight).width(maxWidth);

            //Set graph size
            setCanvasSize(ctx.canvas);
            myNewChart = new Chart(ctx).Bar(data, options);
        });

        //Set onResize in case they change to portrait mode
        $(window).on('orientationchange', function() {
            var win = $(this); //this = window
            setMaxSize(win.height(), win.width());

            //Set container size
            //$("#chart-frame").height(maxHeight).width(maxWidth);

            //Set graph size
            setCanvasSize(ctx.canvas);
            myNewChart = new Chart(ctx).Bar(data, options);
        });
    }

    var consumptionChart = {
        init: function(height, width) {
            // Set defaults
            Chart.defaults.global = {
                // Boolean - Whether to animate the chart
                animation: true,

                // Number - Number of animation steps
                animationSteps: 60,

                // String - Animation easing effect
                animationEasing: "easeOutQuart",

                // Boolean - If we should show the scale at all
                showScale: true,

                // Boolean - If we want to override with a hard coded scale
                scaleOverride: false,

                // ** Required if scaleOverride is true **
                // Number - The number of steps in a hard coded scale
                scaleSteps: null,
                // Number - The value jump in the hard coded scale
                scaleStepWidth: null,
                // Number - The scale starting value
                scaleStartValue: null,

                // String - Colour of the scale line
                scaleLineColor: "rgba(0,0,0,.1)",

                // Number - Pixel width of the scale line
                scaleLineWidth: 1,

                // Boolean - Whether to show labels on the scale
                scaleShowLabels: true,

                // Interpolated JS string - can access value
                scaleLabel: "<%=value%>",

                // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
                scaleIntegersOnly: true,

                // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero: false,

                // String - Scale label font declaration for the scale label
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

                // Number - Scale label font size in pixels
                scaleFontSize: 12,

                // String - Scale label font weight style
                scaleFontStyle: "normal",

                // String - Scale label font colour
                scaleFontColor: "#666",

                // Boolean - whether or not the chart should be responsive and resize when the browser does.
                responsive: false,

                // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: false,

                // Boolean - Determines whether to draw tooltips on the canvas or not
                showTooltips: true,

                // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
                customTooltips: true,

                // Array - Array of string names to attach tooltip events
                tooltipEvents: ["mousemove", "touchstart", "touchmove"],

                // String - Tooltip background colour
                tooltipFillColor: "rgba(0,0,0,0.8)",

                // String - Tooltip label font declaration for the scale label
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

                // Number - Tooltip label font size in pixels
                tooltipFontSize: 14,

                // String - Tooltip font weight style
                tooltipFontStyle: "normal",

                // String - Tooltip label font colour
                tooltipFontColor: "#fff",

                // String - Tooltip title font declaration for the scale label
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

                // Number - Tooltip title font size in pixels
                tooltipTitleFontSize: 14,

                // String - Tooltip title font weight style
                tooltipTitleFontStyle: "bold",

                // String - Tooltip title font colour
                tooltipTitleFontColor: "#fff",

                // Number - pixel width of padding around tooltip text
                tooltipYPadding: 6,

                // Number - pixel width of padding around tooltip text
                tooltipXPadding: 6,

                // Number - Size of the caret on the tooltip
                tooltipCaretSize: 8,

                // Number - Pixel radius of the tooltip border
                tooltipCornerRadius: 6,

                // Number - Pixel offset from point x to tooltip edge
                tooltipXOffset: 10,

                // String - Template string for single tooltips
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

                // String - Template string for single tooltips
                multiTooltipTemplate: "<%= value %>",

                // Function - Will fire on animation progression.
                onAnimationProgress: function(){},

                // Function - Will fire on animation completion.
                onAnimationComplete: function(){}
            };

            // Set container to max screen size
            setMaxSize(height, width);
            $("#chart-frame").height(maxHeight).width(maxWidth);

            //Listen to events changes
            connectEvents();
        },
        chart: myNewChart,
        update: function() {
            myNewChart.update();
        },
        redraw: function() {
            // Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#myChart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            setCanvasSize(ctx.canvas);
            myNewChart = new Chart(ctx).Bar(data, options);
        },
        getBarsAtEvent: function(event) {
            // => activeBars is an array of bars on the canvas that are at the same position as the click event.
            return myNewChart.getBarsAtEvent(event);
        },
        setData: function(newData) {
            data = newData;
        },
        addData: function(valuesArray, label) {
            // The values array passed into addData should be one for each dataset in the chart
            //myBarChart.addData([40, 60], "August");
            // The new data will now animate at the end of the chart.
            myNewChart.addData(valuesArray, label);
        },
        removeData: function() {
            // The chart will now animate and remove the first bar
            myNewChart.removeData();
        }
    };

    return consumptionChart;
})(jQuery, Chart, window);
