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


var select_location_cnt = 0;
function select_location()
{
    if(select_location_cnt == 0)
    {
        $("#select_location").addClass("select_location_open");
        $("#angle-up").addClass("fa-angle-rotate");
        select_location_cnt += 1;
    }
    
    else
    {
        $("#select_location").removeClass("select_location_open");
        $("#angle-up").removeClass("fa-angle-rotate");
        select_location_cnt = 0;
    }
}

$('#board1').click(function(e) 
{
   $("#menu_1").removeClass("menu_1_open");
   $("#angle-down").removeClass("fa-angle-rotate");
   $("#select_location").removeClass("select_location_open");
   $("#select_location").removeClass("fa-angle-rotate");
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