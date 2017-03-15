;
(function ($) {
    "use strict";


    $(document).ready(function () {
        /*----------------------------- Photo Gallery --------------------------*/
        $("#lightgallery").lightGallery(); 
    });


    $('#aniimated-thumbnials').lightGallery({
        thumbnail:true,
        thumbContHeight:120
    }); 
})(jQuery);
