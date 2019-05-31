var post_size = 4; //XL(기본 값)
function BOX_XL(){
    post_size = 4;
}
function BOX_L(){
    post_size = 3;
}
function BOX_M(){
    post_size = 2;
}
function BOX_S(){
    post_size = 1;
}

function post_submit(){
    var post_title = $('#post_creat_title').val();
    var post_textarea = $('#post_creat_textarea').val();
    var post_url = $('#post_creat_URL').val();
    //var post_img = $('#post_creat_file');
    var post_build = new Array();
    var post_deadline = today_ajax;

    for(i=0; i<3; i++)
    {
        var temp_id = "build_checkbox";
        temp_id += i;
        var checkbox = document.getElementById(temp_id);
        if($(checkbox).prop("checked"))
        {
            post_build.push($(checkbox).val());
        }
    }

    var send_data = {url: post_url, build: post_build, title: post_title, content: post_textarea, size: post_size, exp_date: post_deadline};

    console.log(send_data);

    var a_jax = A_JAX('/add_post', "POST", localStorage.getItem('sejabo_token'), send_data);
    $.when(a_jax).done(function(){
    
        var json = a_jax.responseJSON;

        if(json['result'] == "success")
        {
            alert("등록완료!");
        }
        else if(json['result'] == "bad request")
        {
            alert("요청 실패! 배드 리쿼스트");
        }
        else {
            alert("일시적인 오류가 발생했습니다. 잠시후 다시 시도해주세요.");
        }
    })
}

//업로드 파일 미리보기. 소스 =============================
$("#post_creat_file").change(function() {
    readURL(this);
    console.log(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#post_select_box_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
//=======================================================