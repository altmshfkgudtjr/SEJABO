var menu_cnt = 0;
function menu_1()
{
    if(menu_cnt == 0)
    {
        $("#menu_1").addClass("menu_1_open");
        $("#angle-down").addClass("fa-angle-rotate");
        menu_cnt += 1;
    }
    
    else
    {
        $("#menu_1").removeClass("menu_1_open");
        $("#angle-down").removeClass("fa-angle-rotate");
        menu_cnt = 0;
    }
}

$('#board1').click(function(e) 
{
   $("#menu_1").removeClass("menu_1_open");
   $("#angle-down").removeClass("fa-angle-rotate");
   menu_cnt = 0;
});



$('#explain_gobutton1').click(function()
{
    $('#information2').addClass("none_display");
    $('#information').removeClass("none_display");
    $('#explain_gobutton2').removeClass("none_display");
    $('#explain_gobutton1').addClass("none_display");

});
$('#explain_gobutton2').click(function()
{
    $('#information').addClass("none_display");
    $('#information2').removeClass("none_display");
    $('#explain_gobutton1').removeClass("none_display");
    $('#explain_gobutton2').addClass("none_display");

});