var APP = (function($, window, chart, select) {
    "use strict";

    var app = {
        init: function() {
            var win = $(window);
            var maxHeight = win.height();
            var maxWidth = win.width();
            chart.init(maxHeight, maxWidth);
            select.init();
        }
    };

    return app;
})(jQuery, window, CONSUPMTION_CHART, SELECT_UTIL);
