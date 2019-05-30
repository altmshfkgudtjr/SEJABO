//=================================================================//
//메인 모달 세션토큰 관리.
var check_ = sessionStorage.getItem("count");
if(check_ == "ok")
   {
        $("#main_modal").addClass("modal_display_none");
    }
else sessionStorage.setItem("count", "ok");

//======================================================================//
//메인 모달 부분
var main_modal = document.getElementById('main_modal');
var main_modal_btn = document.getElementById("main_modal_btn");
main_modal_btn.onclick = function () {
  $('#main_modal_content').addClass("magictime");
  $("#main_modal_content").addClass("tinUpOut");
  setTimeout(function () {
    $('#main_modal_content').addClass("modal_display_none");
    $("#main_modal_content").removeClass("tinUpOut");
  }, 1100);
  setTimeout(function () {
    $('#main_modal').addClass("magictime");
    $("#main_modal").addClass("swashOut");
    setTimeout(function () {
      $('#main_modal').addClass("modal_display_none");
      $("#main_modal").removeClass("swashOut");
    }, 1100);
  }, 3100);
}

$('#explain_gobutton1').click(function () { //디스플레이 논을 버튼 2에서 버튼1꺼를 논시키는 형식으로 가야함.
  $('#information1').addClass("magictime");
  $('#information1').addClass("rotateLeft");
  $('#explain_gobutton1').removeClass("show_display");
  $('#explain_gobutton1').addClass("none_display");
  setTimeout(function () {
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

$('#explain_gobutton2').click(function () {
  $('#information2').addClass("magictime");
  $('#information2').addClass("rotateRight");
  $('#explain_gobutton2').removeClass("show_display");
  $('#explain_gobutton2').addClass("none_display");
  setTimeout(function () {
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
//=====================================================================//
//로그인모달 부분
var login_modal = document.getElementById("login_modal");
var login_button = document.getElementById("login_button");
var login_modal_close = document.getElementsByClassName("login_modal_close")[0];

// When the user clicks the button, open the modal
login_button.onclick = function () {
  login_modal.style.display = "block";
  $('#login_modal_content').addClass("magictime");
  $('#login_modal_content').addClass("spaceInDown");
}
// When the user clicks on <span> (x), close the modal
login_modal_close.onclick = function () {
  login_modal.style.display = "none";
  $('#login_modal_content').removeClass("magictime");
  $('#login_modal_content').removeClass("spaceInDown");
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == login_modal) {
    login_modal.style.display = "none";
    $('#login_modal_content').removeClass("magictime");
    $('#login_modal_content').removeClass("spaceInDown");
  }
}
//=====================================================================//
//내정보모달 부분
var myinfo_modal = document.getElementById("myinfo_modal");
var myinfo_button = document.getElementById("myinfo_button");
var myinfo_modal_close = document.getElementsByClassName("myinfo_modal_close")[0];
var myinfo_logout = document.getElementById("myinfo_user_logout");
// 현재 좋아요 보기가 적용되어 있음. myinfo_post_good_cnt = 1
var myinfo_post_good_cnt = 1;
var myinfo_post_bad_cnt = 0;

// When the user clicks the button, open the modal
myinfo_button.onclick = function () {
  myinfo_modal.style.display = "block";
  $('#myinfo_modal_content').addClass("magictime");
  $('#myinfo_modal_content').addClass("spaceInDown");
  if (myinfo_post_good_cnt == 1){
    remove_myinfo_post_contents();
    likeDivMake();
  }
  else if (myinfo_post_bad_cnt == 1){
    remove_myinfo_post_contents();
    likeDivMakeNot();
  }
}
// When the user clicks on <span> (x), close the modal
myinfo_modal_close.onclick = function () {
  myinfo_modal.style.display = "none";
  $('#myinfo_modal_content').removeClass("magictime");
  $('#myinfo_modal_content').removeClass("spaceInDown");
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == login_modal) {
    myinfo_modal.style.display = "none";
    $('#myinfo_modal_content').removeClass("magictime");
    $('#myinfo_modal_content').removeClass("spaceInDown");
  }
}
// 로그아웃 버튼 눌렀을 시
myinfo_logout.onclick = function() {
  snackbar("정상적으로 로그아웃이 됬습니다.");
  myinfo_modal.style.display = "none";
  $('#login_button').css('display', 'block');
  $('#myinfo_button').css('display', 'none');
  $('#myinfo_modal_content').removeClass("magictime");
  $('#myinfo_modal_content').removeClass("spaceInDown");
}

//좋아요 게시물 눌렀을 시
document.getElementById('myinfo_post_good_button').onclick = function() {
  if (myinfo_post_good_cnt != 1) {
    $('#myinfo_post_good_button').addClass("myinfo_post_button_click");
    $('#myinfo_post_bad_button').removeClass("myinfo_post_button_click"); 
    myinfo_post_good_cnt = 1;
    myinfo_post_bad_cnt = 0;
    remove_myinfo_post_contents();
    likeDivMake();
  }
}
//싫어요 게시물 눌렀을 시
document.getElementById('myinfo_post_bad_button').onclick = function() {
  if (myinfo_post_bad_cnt != 1){
    $('#myinfo_post_good_button').removeClass("myinfo_post_button_click");
    $('#myinfo_post_bad_button').addClass("myinfo_post_button_click");
    myinfo_post_good_cnt = 0;
    myinfo_post_bad_cnt = 1;
    remove_myinfo_post_contents();
    likeDivMakeNot();
  }
}
//싫어요 또는 좋아요 게시물 클릭 시
function myinfo_user_post_click(post_id) {
  //내정보모달을 끔
  myinfo_modal.style.display = "none";
  $('#myinfo_modal_content').removeClass("magictime");
  $('#myinfo_modal_content').removeClass("spaceInDown");
  //포스트모달을 킴
  post_modal.style.display = "block";
  $('#post_modal_content').addClass("magictime");
  $('#post_modal_content').addClass("spaceInDown");
  //정보를 가져옴
  get_myinfo_post_modal(post_id);
}
//게시물 삭제하기 버튼을 눌렀을시
document.getElementById('myinfo_user_post_delete').onclick = function() {
  snackbar("내가 작성한 글이 삭제되었습니다.");
  document.getElementById('myinfo_user_post').style.display = "none";
  document.getElementById('myinfo_user_post_not').style.display = "block";
}
//======================================================================//
//검색 모달 부분.
var search_modal = document.getElementById("search_modal");
var search_button = document.getElementById("search_button");
var search_modal_close = document.getElementsByClassName("search_modal_close")[0];

// When the user clicks the button, open the modal
search_button.onclick = function () {
  search_modal.style.display = "block";
  $('#search_modal_content').addClass("magictime");
  $('#search_modal_content').addClass("spaceInDown");
}
// When the user clicks on <span> (x), close the modal
search_modal_close.onclick = function () {
  search_modal.style.display = "none";
  $('#search_modal_content').removeClass("magictime");
  $('#search_modal_content').removeClass("spaceInDown");
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == login_modal) {
    search_modal.style.display = "none";
    $('#search_modal_content').removeClass("magictime");
    $('#search_modal_content').removeClass("spaceInDown");
  }
}
//======================================================================//
//포스트 모달 부분.
var post_modal = document.getElementById("post_modal");
var post_modal_close = document.getElementsByClassName("post_modal_close")[0];

// When the user clicks the button, open the modal
function post_button_click(post_id) {
  post_modal.style.display = "block";
  $('#post_modal_content').addClass("magictime");
  $('#post_modal_content').addClass("spaceInDown");
  get_post_content(post_id);
}
// When the user clicks on <span> (x), close the modal
post_modal_close.onclick = function () {
  remove_post_content();
  post_modal.style.display = "none";
  $('#post_modal_content').removeClass("magictime");
  $('#post_modal_content').removeClass("spaceInDown");
  remove_post_content();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == login_modal) {
    post_modal.style.display = "none";
    $('#post_modal_content').removeClass("magictime");
    $('#post_modal_content').removeClass("spaceInDown");
    remove_post_content();
  }
}
// post_content_image over
function post_content_img_image_over(){
  document.getElementById('post_content_img_image').style.transform = "translate(-50%, -50%) scale(1.06, 1.06)";
}
// post_content_image out
function post_content_img_image_out(){
  document.getElementById('post_content_img_image').style.transform = "translate(-50%, -50%) scale(1,1)";
}
document.getElementById('post_content_good').onclick = function() {
}
document.getElementById('post_content_bad').onclick = function() {
  
}
//=============================================================//
//게시글 관리 
var post_admin_cnt = 0;

var post_admin_modal = document.getElementById("post_admin_modal");
var post_admin_modal_button = document.getElementById("post_admin_modal_button");
var post_admin_modal_close = document.getElementsByClassName("post_admin_modal_close")[0];

// When the user clicks the button, open the modal
post_admin_modal_button.onclick = function () {
  post_admin_modal.style.display = "block";
  $('#post_admin_modal_content').addClass("magictime");
  $('#post_admin_modal_content').addClass("spaceInDown");

  /*
  if(post_admin_cnt == 0) //post_creat(첫 페이지)
  {
    $('#post_creat').removeClass("post_admin_display_none");
    $('post_select_box').addClass("post_admin_display_none");
  }
  */

  /*게시글 관리 모달쪽 이어서 해야하는 부분: 게시글 게시 기한 부터 시작해서 ! 끝까지 배치 완료하고 -> js로 첫 페이지일때 이전버튼 디스플레이 논 시키고, cnt에 따라 다음을 누르면 4페이지 중 해당 페이지로 이동 시켜야함.*/
}
// When the user clicks on <span> (x), close the modal
post_admin_modal_close.onclick = function () {
  post_admin_modal.style.display = "none";
  $('#post_admin_modal_content').removeClass("magictime");
  $('#post_admin_modal_content').removeClass("spaceInDown");
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == post_admin_modal) {
    post_admin_modal.style.display = "none";
    $('#post_admin_modal_content').removeClass("magictime");
    $('#post_admin_modal_content').removeClass("spaceInDown");
  }
}
