var APP = (function($, window, chart, table) {
    "use strict";

    var app = {
        init: function() {
            var win = $(window);
            var maxHeight = win.height();
            var maxWidth = win.width();
            chart.init(maxHeight, maxWidth);
            table.init();
        }
    };

    return app;
})(jQuery, window, CONSUPMTION_CHART, INFO_TABLE);
