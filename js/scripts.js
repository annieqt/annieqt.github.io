;
(function ($) {
    "use strict";

    $(document).ready(function () {
        /*----------------------------- Carousel --------------------------*/
        $("#gallery").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 3,
            lazyLoad: true,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });

        /*----------------------------- Skill Chart --------------------------*/
        $('.chart').easyPieChart({
            animate: 2000,
            lineWidth: 13,
            barColor: '#e74c3c',
            lineCap: 'square',
            scaleColor: false,
            trackColor: '#e6e8ed',
            size: 170
        });

        /*----------------------------- Scroll To Top--------------------------*/
        var scrollTimeout;

        $('a.scroll-top').click(function () {
            $('html,body').animate({scrollTop: 0}, 500);
            return false;
        });

        $(window).scroll(function () {
            clearTimeout(scrollTimeout);
            if ($(window).scrollTop() > 400) {
                scrollTimeout = setTimeout(function () {
                    $('a.scroll-top:hidden').fadeIn()
                }, 100);
            }
            else {
                scrollTimeout = setTimeout(function () {
                    $('a.scroll-top:visible').fadeOut()
                }, 100);
            }
        });

        /*----------------------------- World Map--------------------------*/

        var latlong = {};
        latlong["BJ"] = {latitude: 39.904211, longitude: 116.407395};
        latlong["QD"] = {latitude: 36.067117, longitude: 120.382612};
        latlong["YZ"] = {latitude: 32.394210, longitude: 119.412966};
        latlong["NJ"] = {latitude: 32.060255, longitude: 118.796877};
        latlong["WX"] = {latitude: 31.491170, longitude: 120.311910};
        latlong["SZ"] = {latitude: 31.298974, longitude: 120.585297};
        latlong["SH"] = {latitude: 31.230416, longitude: 121.473701};
        latlong["HZ"] = {latitude: 30.274085, longitude: 120.155070};
        latlong["NB"] = {latitude: 29.868336, longitude: 121.543990};
        latlong["XM"] = {latitude: 24.479834, longitude: 118.089425};
        latlong["WH"] = {latitude: 30.593099, longitude: 114.305393};
        latlong["SY"] = {latitude: 18.252847, longitude: 109.511909};
        latlong["CD"] = {latitude: 30.572269, longitude: 104.066541};
        latlong["MY"] = {latitude: 31.467450, longitude: 104.679114};
        latlong["YAA"] = {latitude: 29.980537, longitude: 103.01326};
        latlong["BRI"] = {latitude: -27.471011, longitude: 153.023449};
        latlong["CAN"] = {latitude: -35.282000, longitude: 149.128684};
        latlong["SYD"] = {latitude: -33.867487, longitude: 151.206990};
        latlong["MEL"] = {latitude: -37.814107, longitude: 144.963280};
        latlong["HK"] = {latitude: 22.396428, longitude: 114.109497};
        latlong["MAC"] = {latitude: 22.198745, longitude: 113.543873};

        var mapData = [
            {"code": "BJ", "name": "Beijing", "value": 1347565324, "color": "#F54F36"},
            {"code": "QD", "name": "Qingdao", "value": 1347565324, "color": "#F54F36"},
            {"code": "YZ", "name": "Yangzhou", "value": 1347565324, "color": "#F54F36"},
            {"code": "WX", "name": "Wuxi", "value": 1347565324, "color": "#F54F36"},
            {"code": "SZ", "name": "Suzhou", "value": 1347565324, "color": "#F54F36"},
            {"code": "SH", "name": "Shanghai", "value": 1347565324, "color": "#F54F36"},
            {"code": "HZ", "name": "Hangzhou", "value": 1347565324, "color": "#F54F36"},
            {"code": "NB", "name": "Ningbo", "value": 1347565324, "color": "#F54F36"},
            {"code": "XM", "name": "Xiamen", "value": 1347565324, "color": "#F54F36"},
            {"code": "WH", "name": "Wuhan", "value": 1347565324, "color": "#F54F36"},
            {"code": "SY", "name": "Sanya", "value": 1347565324, "color": "#F54F36"},
            {"code": "CD", "name": "Chengdu", "value": 1347565324, "color": "#F54F36"},
            {"code": "MY", "name": "Mianyang", "value": 1347565324, "color": "#F54F36"},
            {"code": "YAA", "name": "Ya'an", "value": 1347565324, "color": "#F54F36"},
            {"code": "BRI", "name": "Brisbane", "value": 1347565324, "color": "#F54F36"},
            {"code": "CAN", "name": "Canberra", "value": 1347565324, "color": "#F54F36"},
            {"code": "SYD", "name": "Sydney", "value": 1347565324, "color": "#F54F36"},
            {"code": "MEL", "name": "Melbourne", "value": 1347565324, "color": "#F54F36"},
            {"code": "HK", "name": "Hongkong", "value": 1347565324, "color": "#F54F36"},
            {"code": "MAC", "name": "Macau", "value": 1347565324, "color": "#F54F36"}
        ];


        var map;
        // build map
        AmCharts.ready(function () {
            AmCharts.theme = AmCharts.themes.dark;
            map = new AmCharts.AmMap();

            map.areasSettings = {
                unlistedAreasColor: "#000000",
                unlistedAreasAlpha: 0.1
            };
            map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b></span>";

            var dataProvider = {
                map: "worldLow",
                zoomLevel: 2.5,
                zoomLongitude:  114.938692,
                zoomLatitude: 0.812022,
                mapVar: AmCharts.maps.worldLow,
                images: []
            }

            // the following code uses circle radius to show the difference
            for (var i = 0; i < mapData.length; i++) {
                var dataItem = mapData[i];
                var id = dataItem.code;
                dataProvider.images.push({
                    type: "circle",
                    width: 20,
                    height: 20,
                    color: dataItem.color,
                    longitude: latlong[id].longitude,
                    latitude: latlong[id].latitude,
                    title: dataItem.name
                });
            }

            map.dataProvider = dataProvider;
            map.export = {
                enabled: true
            }

            map.write("chartdiv");
        });
    });

})(jQuery);
