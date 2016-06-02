/**
 * Created by Muigai on 6/1/2016.
 */
$(document).ready(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $(".bottom-navigation").toggleClass('open');
    });
});
