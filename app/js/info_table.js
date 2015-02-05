var INFO_TABLE = (function($, chart) {
    "use strict";
    var replaceToken = "{{month_year}}";
    var headerTemplate = '<img  class="eye-icon" src="img/i97.png">' +
        '<span class="infoHeaderText">Ihr Verbrauch im ' + replaceToken + '</span>';
    var data = {
        "JAN": {
            header: "Januar 2015",
            readings: [
                {
                    date: "29.Januar.2015",
                    value: "00013079"
                },
                {
                    date: "28.Januar.2015",
                    value: "00013063"
                },
                {
                    date: "21.Januar.2015",
                    value: "00012975"
                },
                {
                    date: "14.Januar.2015",
                    value: "00012937"
                },
                {
                    date: "10.Januar.2015",
                    value: "00012789"
                },
                {
                    date: "05.Januar.2015",
                    value: "00012561"
                }
            ]
        },
        "FEB": {
            header: "Februar 2015",
            readings: [
                {
                    date: "29.Februar.2015",
                    value: "00013079"
                },
                {
                    date: "28.Februar.2015",
                    value: "00013063"
                },
                {
                    date: "21.Februar.2015",
                    value: "00012975"
                },
                {
                    date: "14.Februar.2015",
                    value: "00012937"
                },
                {
                    date: "10.Februar.2015",
                    value: "00012789"
                },
                {
                    date: "05.Februar.2015",
                    value: "00012561"
                }
            ]
        },
        "MÄR": {
            header: "Marsch 2015",
            readings: [
                {
                    date: "29.Marsch.2015",
                    value: "00013079"
                },
                {
                    date: "28.Marsch.2015",
                    value: "00013063"
                },
                {
                    date: "21.Marsch.2015",
                    value: "00012975"
                },
                {
                    date: "14.Marsch.2015",
                    value: "00012937"
                },
                {
                    date: "10.Marsch.2015",
                    value: "00012789"
                },
                {
                    date: "05.Marsch.2015",
                    value: "00012561"
                }
            ]
        },
        "APR": {
            header: "April 2015",
            readings: [
                {
                    date: "29.April.2015",
                    value: "00013079"
                },
                {
                    date: "28.April.2015",
                    value: "00013063"
                },
                {
                    date: "21.April.2015",
                    value: "00012975"
                },
                {
                    date: "14.April.2015",
                    value: "00012937"
                },
                {
                    date: "10.April.2015",
                    value: "00012789"
                },
                {
                    date: "05.April.2015",
                    value: "00012561"
                }
            ]},
        "MAI": {
            header: "Mai 2015",
            readings: [
                {
                    date: "29.Mai.2015",
                    value: "00013079"
                },
                {
                    date: "28.Mai.2015",
                    value: "00013063"
                },
                {
                    date: "21.Mai.2015",
                    value: "00012975"
                },
                {
                    date: "14.Mai.2015",
                    value: "00012937"
                },
                {
                    date: "10.Mai.2015",
                    value: "00012789"
                },
                {
                    date: "05.Mai.2015",
                    value: "00012561"
                }
            ]
        },
        "JUN": {
            header: "Juni 2015",
            readings: [
                {
                    date: "29.Juni.2015",
                    value: "00013079"
                },
                {
                    date: "28.Juni.2015",
                    value: "00013063"
                },
                {
                    date: "21.Juni.2015",
                    value: "00012975"
                },
                {
                    date: "14.Juni.2015",
                    value: "00012937"
                },
                {
                    date: "10.Juni.2015",
                    value: "00012789"
                },
                {
                    date: "05.Juni.2015",
                    value: "00012561"
                }
            ]
        },
        "JUL": {
            header: "Juli 2015",
            readings: [
                {
                    date: "29.Juli.2015",
                    value: "00013079"
                },
                {
                    date: "28.Juli.2015",
                    value: "00013063"
                },
                {
                    date: "21.Juli.2015",
                    value: "00012975"
                },
                {
                    date: "14.Juli.2015",
                    value: "00012937"
                },
                {
                    date: "10.Juli.2015",
                    value: "00012789"
                },
                {
                    date: "05.Juli.2015",
                    value: "00012561"
                }
            ]
        },
        "AUG": {
            header: "August 2015",
            readings: [
                {
                    date: "29.August.2015",
                    value: "00013079"
                },
                {
                    date: "28.August.2015",
                    value: "00013063"
                },
                {
                    date: "21.August.2015",
                    value: "00012975"
                },
                {
                    date: "14.August.2015",
                    value: "00012937"
                },
                {
                    date: "10.August.2015",
                    value: "00012789"
                },
                {
                    date: "05.August.2015",
                    value: "00012561"
                }
            ]
        },
        "SEP": {
            header: "September 2015",
            readings: [
                {
                    date: "29.September.2015",
                    value: "00013079"
                },
                {
                    date: "28.September.2015",
                    value: "00013063"
                },
                {
                    date: "21.September.2015",
                    value: "00012975"
                },
                {
                    date: "14.September.2015",
                    value: "00012937"
                },
                {
                    date: "10.September.2015",
                    value: "00012789"
                },
                {
                    date: "05.September.2015",
                    value: "00012561"
                }
            ]
        },
        "OKT": {
            header: "Oktober 2015",
            readings: [
                {
                    date: "29.Oktober.2015",
                    value: "00013079"
                },
                {
                    date: "28.Oktober.2015",
                    value: "00013063"
                },
                {
                    date: "21.Oktober.2015",
                    value: "00012975"
                },
                {
                    date: "14.Oktober.2015",
                    value: "00012937"
                },
                {
                    date: "10.Oktober.2015",
                    value: "00012789"
                },
                {
                    date: "05.Oktober.2015",
                    value: "00012561"
                }
            ]
        },
        "NOV": {
            header: "November 2015",
            readings: [
                {
                    date: "29.November.2015",
                    value: "00013079"
                },
                {
                    date: "28.November.2015",
                    value: "00013063"
                },
                {
                    date: "21.November.2015",
                    value: "00012975"
                },
                {
                    date: "14.November.2015",
                    value: "00012937"
                },
                {
                    date: "10.November.2015",
                    value: "00012789"
                },
                {
                    date: "05.November.2015",
                    value: "00012561"
                }
            ]
        },
        "DEZ": {
            header: "Dezember 2015",
            readings: [
                {
                    date: "29.Dezember.2015",
                    value: "00013079"
                },
                {
                    date: "28.Dezember.2015",
                    value: "00013063"
                },
                {
                    date: "21.Dezember.2015",
                    value: "00012975"
                },
                {
                    date: "14.Dezember.2015",
                    value: "00012937"
                },
                {
                    date: "10.Dezember.2015",
                    value: "00012789"
                },
                {
                    date: "05.Dezember.2015",
                    value: "00012561"
                }
            ]
        }
    };


    function populateInfoHeaderForMonth(month) {
        var month_year = data[month].header;
        var headerText = headerTemplate.replace(replaceToken, month_year);
        $("#infoHeader").html(headerText);
    }

    function populateTableRowsForMonth(month) {
        var table = $("<table />");
        var i;
        for (i = 0; i < data[month].readings.length; i++) {
            table.append($("<tr/>")
                .append("<td class='monthReadingsTable-date'>" + data[month].readings[i].date + "</td>")
                .append("<td class='monthReadingsTable-value'>" + data[month].readings[i].value + "</td>")
            );
        }
        $("#monthReadingsTable").html(table.html());
    }

    function populateTableFromEvent(event) {
        var bars = chart.getBarsAtEvent(event);
        if (1 > bars.length) return;
        var bar = bars[0];
        var month = bar.label;

        populateInfoHeaderForMonth(month);
        populateTableRowsForMonth(month);
    }

    function connectEvents(){
        $("#myChart").on({
            click: populateTableFromEvent,
            mousemove: populateTableFromEvent,
            touchstart: populateTableFromEvent,
            touchmove: populateTableFromEvent
        });
    }

    return {
        init: function() {
            // Set defaults
            connectEvents();

            populateInfoHeaderForMonth("JAN");
            populateTableRowsForMonth("JAN");
        }
    };
})(jQuery, CONSUPMTION_CHART);
