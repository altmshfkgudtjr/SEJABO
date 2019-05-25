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
{ //디스플레이 논을 버튼 2에서 버튼1꺼를 논시키는 형식으로 가야함.
    $('#information1').addClass("magictime");
    $('#information1').addClass("rotateLeft");
    $('#explain_gobutton1').removeClass("show_display");
    $('#explain_gobutton1').addClass("none_display");
    setTimeout(function(){
        //information2 보이게 실시!
        $('#information2').addClass("show_display");
        $('#information2').removeClass("none_display");
        $('#explain_gobutton2').addClass("show_display");
        $('#explain_gobutton2').removeClass("none_display");
        
        //위에서 실행된 에니메이션 다시 제거.
        $('#information1').removeClass("magictime");
        $('#information1').removeClass("rotateLeft");

        //그리고 information 디스플레이 논 처리.
        $('#information1').removeClass("show_display");
        $('#information1').addClass("none_display");
    }, 600);
});

$('#explain_gobutton2').click(function()
{
    $('#information2').addClass("magictime");
    $('#information2').addClass("rotateRight");
    $('#explain_gobutton2').removeClass("show_display");
    $('#explain_gobutton2').addClass("none_display");
    setTimeout(function(){
        //information1 보이게 실시!
        $('#information1').addClass("show_display");
        $('#information1').removeClass("none_display");
        $('#explain_gobutton1').addClass("show_display");
        $('#explain_gobutton1').removeClass("none_display");

        //위에서 실행된 에니메이션 다시 제거.
        $('#information2').removeClass("magictime");
        $('#information2').removeClass("rotateRight");

        //그리고 information 디스플레이 논 처리.
        $('#information2').removeClass("show_display");
        $('#information2').addClass("none_display");
    }, 600);
});


var location_cnt = 0;
function location_now()
{   
    if(location_cnt == 0) 
    {
        $('#location_box').addClass('location_box_show');
        location_cnt++;
    }
    else
    {
        $('#location_box').removeClass('location_box_show');
        location_cnt--;
    }
}

var show_btn = document.getElementById('location_now');

function remove_building_class()
{
    $(show_btn).removeClass('btn-primary');
    $(show_btn).removeClass('btn-success');
    $(show_btn).removeClass('btn-danger');
    $(show_btn).removeClass('btn-warning');
}

$('#DYAI').click(function()
{   
    remove_building_class();
    $(show_btn).addClass('btn-primary');
    $(show_btn).text('세종이노센터');
    location_now();
    refleshPage();
});

$('#DCG').click(function()
{   
    remove_building_class();
    $(show_btn).addClass('btn-success');
    $(show_btn).text('학술정보원');
    location_now();
    refleshPage();
});

$('#GGTG').click(function()
{   
    remove_building_class();
    $(show_btn).addClass('btn-warning');
    $(show_btn).text('광개토관');
    location_now();
    refleshPage();
});

$('#YGG').click(function()
{   
    remove_building_class();
    $(show_btn).addClass('btn-danger');
    $(show_btn).text('율곡관');
    location_now();
    refleshPage();
});