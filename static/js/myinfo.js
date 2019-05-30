//85 자가 넘을시 text .. 붙이고 출력 함수
function rewrite_text(text, text_length) {
	if (text_length >=85) {
		var text_output = text.splice(0, 86);
		text_output += "...";
		return text_output;
	}
	else{
		return text;
	}
}
//좋아하는 글 div 생성 함수
function likeDivMake() {
	var insertDiv = document.getElementById('myinfo_post_bigbox');
	var receive_user_post_good = [
	{'post_id': '3','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO SuccessfulPray for SEJABO Successful','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','like_count':'0','dislike_count':'0','like_count':'0','dislike_count':'0','size':'4', 'color': '#EFFBFB'},
	{'post_id': '2','reg_date':'2019-04-10', 'exp_date':'2019-04-14','title':'THIS IS SEJABO TEST BENCH. Plz stay on the page','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'0','view_count':'0','like_count':'0','dislike_count':'0','size':'3', 'color': '#EFFBFB'},
	{'post_id': '4','reg_date':'2019-04-09', 'exp_date':'2019-04-15','title':'Pray for SEJABO Successful This is Third','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'0','view_count':'0','like_count':'0','dislike_count':'0','size':'2', 'color': '#E0F8EC'},
	{'post_id': '5','reg_date':'2019-04-08', 'exp_date':'2019-04-16','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'0','view_count':'0','like_count':'0','dislike_count':'0','size':'2', 'color': '#E0F8EC'},
	{'post_id': '1','reg_date':'2019-04-07', 'exp_date':'2019-04-17','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','like_count':'0','dislike_count':'0','size':'3', 'color': '#FBEFEF'}
	];
	for (var i =0; i< receive_user_post_good.length; i++){
		var newDiv = document.createElement("div");
		var infoDiv = receive_user_post_good[i];
		newDiv.id = infoDiv['post_id'];
		newDiv.classList.add('myinfo_post_bigbox_content_good');

		var newDiv_title = document.createElement("div");
		newDiv_title.classList.add('myinfo_post_bigbo_title');
		newDiv_title.append(infoDiv['title']);
		newDiv.appendChild(newDiv_title);

		var newDiv_text = document.createElement("div");
		newDiv_text.classList.add('myinfo_post_bigbo_text');
		var text_rewrite = rewrite_text(infoDiv['content'], infoDiv['content'].length);
		newDiv_text.append(text_rewrite);
		newDiv.appendChild(newDiv_text);

		insertDiv.appendChild(newDiv);
	}
}
//싫어하는 글 div 생성 함수
function likeDivMakeNot() {
	var insertDiv = document.getElementById('myinfo_post_bigbox');
	var receive_user_post_bad = [
	{'post_id': '6','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'JEBAL NA WA RA~~!','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','like_count':'0','dislike_count':'0','like_count':'0','dislike_count':'0','size':'4', 'color': '#EFFBFB'},
	{'post_id': '8','reg_date':'2019-04-10', 'exp_date':'2019-04-14','title':'THIS IS SEJABO TEST BENCH. Plz stay on the page','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'0','view_count':'0','like_count':'0','dislike_count':'0','size':'3', 'color': '#EFFBFB'},
	{'post_id': '7','reg_date':'2019-04-09', 'exp_date':'2019-04-15','title':'Pray for SEJABO Successful This is Third','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'0','view_count':'0','like_count':'0','dislike_count':'0','size':'2', 'color': '#E0F8EC'},
	{'post_id': '9','reg_date':'2019-04-08', 'exp_date':'2019-04-16','title':'세자보 좋아요 아주 좋아요','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'0','view_count':'0','like_count':'0','dislike_count':'0','size':'2', 'color': '#E0F8EC'},
	{'post_id': '10','reg_date':'2019-04-07', 'exp_date':'2019-04-17','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','url':'https://www.naver.com','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','like_count':'0','dislike_count':'0','size':'3', 'color': '#FBEFEF'}
	];
	for (var i=0; i< receive_user_post_bad.length; i++){
		var newDiv = document.createElement("div");
		var infoDiv = receive_user_post_bad[i]
		newDiv.id = infoDiv['post_id'];
		newDiv.classList.add('myinfo_post_bigbox_content_bad');

		var newDiv_title = document.createElement("div");
		newDiv_title.classList.add('myinfo_post_bigbo_title');
		newDiv_title.append(infoDiv['title']);
		newDiv.appendChild(newDiv_title);

		var newDiv_text = document.createElement("div");
		newDiv_text.classList.add('myinfo_post_bigbo_text');
		var text_rewrite = rewrite_text(infoDiv['content'], infoDiv['content'].length);
		newDiv_text.append(text_rewrite);
		newDiv.appendChild(newDiv_text);

		insertDiv.appendChild(newDiv);
	}
}
//좋아요 싫어요 게시물 div 비워주는 함수
function remove_myinfo_post_contents() {
	$('#myinfo_post_bigbox').empty();
}