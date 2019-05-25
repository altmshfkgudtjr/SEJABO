//예제리스트
var receive_list= [{'post_id': '1','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO SuccessfulPray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'1', 'color': '#EFFBFB'},{'post_id': '2','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'THIS IS SEJABO TEST BENCH. Plz stay on the page','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'3', 'color': '#EFFBFB'},{'post_id': '3','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful This is Third','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8EC'},{'post_id': '4','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8EC'},{'post_id': '5','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'3', 'color': '#FBEFEF'},{'post_id': '6','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#FBEFEF'},{'post_id': '7','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#ECE0F8'},{'post_id': '8','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#ECE0F8'},{'post_id': '9','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#E0F8E6'},{'post_id': '10','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8E6'},{'post_id': '11','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8EC'}, {'post_id': '12','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':
'1', 'color': '#E0F8EC'}, {'post_id': '13','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#E0F8EC'}, {'post_id': '14','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'꿀꿀','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#E0F8EC'}]

//박스채우기 script
var window_width = $(window).width();
var window_height = $(window).height();
$("#test").append(window_width, "<br>")
$("#test").append(window_height)

document.body.onload = addElement;
function addElement () {
   var box_shape = {'1': ['160', '220'], '2': ['200', '280'], '3': ['280', '360'], '4': ['340', '440']};
   var box_list = [];
   for (var i=0; i<receive_list.length; i++){
      box_list.push(receive_list[i]['size']);
   }
   var box_done = [];
   var box_not_done = [];
   var number = 20;            //최소단위 지정 (작을수록 시간이 오래걸림)
   var x0y0, x1y0, x0y1, x1,y1;
   var min_width = 30;            //가로 시작 지점
   var min_height = 60;         //세로 시작 지점
   var max_width = window_width - 30;   //가로 끝 지점
   var max_height = window_height - 60;   //세로 끝 지점
   var n = 1;
   for(var i=0; i<box_list.length; i++){
      box = box_list[i];
      var w = Number(box_shape[box][0]);
      var h = Number(box_shape[box][1]);
      //Div 각 꼭지점 좌표
      /*----------------------------------------------*/
      x0y0 = [min_width,min_height];
      x1y0 = [min_width+w, min_height];
      x0y1 = [min_width, min_height+h];
      x1y1 = [min_width+w, min_height+h];
      /*----------------------------------------------*/
      //만약 첫번째의, div가 들어왔을 때,
      if (!box_done.length){
         var newDiv = document.createElement("div");
         newDiv.id = "box_"+n;
         
         newDiv.classList.add("mouse_pointer");
         newDiv.classList.add("box_absolute");
         newDiv.classList.add("box_boxShadow");
         newDiv.classList.add("box_borderRadius");
         newDiv.style.width = w+'px';
         newDiv.style.height = h+'px';
         newDiv.style.left = min_width+'px';
         newDiv.style.top = min_height+'px';
         add_list = [min_width, min_height, min_width + w, min_height + h];
         box_done.push(add_list);
         if (receive_list[n-1]['img_url'] == '0'){
            newText = document.createTextNode(receive_list[n-1]['title']);
            console.log(newText);
            newDiv.appendChild(newText);
            if (receive_list[n-1]['size'] == 1){
               newDiv.classList.add("box_fa30");
            }
            else if (receive_list[n-1]['size'] == 2){
               newDiv.classList.add("box_fa40");
            }
            else if (receive_list[n-1]['size'] == 3){
               newDiv.classList.add("box_fa60");
            }
            else if (receive_list[n-1]['size'] == 4){
               newDiv.classList.add("box_fa80");
            }
            newDiv.classList.add("box_textShadow");
            newDiv.classList.add("box_fontWeight");
            newDiv.classList.add("box_overflow");
            newDiv.classList.add("box_wordBreak");
            newDiv.classList.add("color");
            newDiv.style.backgroundColor = receive_list[n-1]['color'];
         }
         else {
            var newImgurl = receive_list[n-1]['img_url'];
            newImgurl = "url('" + newImgurl + "')";
            newDiv.style.backgroundImage = newImgurl;
            newDiv.classList.add("box_backgroundSize");
         }
         n+=1;
         document.body.appendChild(newDiv);
      }
      else {
         for (var j=0; j<box_done.length; j++){
            var temp_box = box_done[j];
            var temp_x0y0 = [temp_box[0], temp_box[1]];
            var temp_x1y0 = [temp_box[2], temp_box[1]];
            var temp_x0y1 = [temp_box[0], temp_box[3]];
            var temp_x1y1 = [temp_box[2], temp_box[3]];

            if (x0y0[0] >= temp_x0y0[0] && x0y0[0] <= temp_x1y1[0] && x0y0[1] >= temp_x0y0[1] && x0y0[1] <= temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x1y0[0] >= temp_x0y0[0] && x1y0[0] <= temp_x1y1[0] && x1y0[1] >= temp_x0y0[1] && x1y0[1] <= temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x0y1[0] >= temp_x0y0[0] && x0y1[0] <= temp_x1y1[0] && x0y1[1] >= temp_x0y0[1] && x0y1[1] <= temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x1y1[0] >= temp_x0y0[0] && x1y1[0] <= temp_x1y1[0] && x1y1[1] >= temp_x0y0[1] && x1y1[1] <= temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (temp_x0y0[0] >= x0y0[0] && temp_x0y0[0] <= x1y1[0] && temp_x0y0[1] >= x0y0[1] && temp_x0y0[1] <= x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (temp_x1y0[0] >= x0y0[0] && temp_x1y0[0] <= x1y1[0] && temp_x1y0[1] >= x0y0[1] && temp_x1y0[1] <= x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (temp_x0y1[0] >= x0y0[0] && temp_x0y1[0] <= x1y1[0] && temp_x0y1[1] >= x0y0[1] && temp_x0y1[1] <= x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (temp_x1y1[0] >= x0y0[0] && temp_x1y1[0] <= x1y1[0] && temp_x1y1[1] >= x0y0[1] && temp_x1y1[1] <= x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
               
            /*다음 줄로 넘어감*/
            if (x1y0[0] > max_width || x1y1[0] > max_width){
               x0y0[0] = min_width;
               x0y1[0] = min_width;
               x1y0[0] = min_width+w;
               x1y1[0] = min_width+w;
               x0y0[1] += number;
               x1y0[1] += number;
               x0y1[1] += number;
               x1y1[1] += number;
               j = -1;
            }
         }
         if (x1y1[0] <= max_width && x1y1[1] <= max_height){
            var newDiv = document.createElement("div");
            newDiv.id = "box_"+n;
            n+=1;
            newDiv.classList.add("mouse_pointer");
            newDiv.classList.add("box_absolute");
            newDiv.classList.add("box_boxShadow");
            newDiv.classList.add("box_borderRadius");
            newDiv.style.width = w+'px';
            newDiv.style.height = h+'px';
            newDiv.style.left = x0y0[0]+'px';
            newDiv.style.top = x0y0[1]+'px';
            add_list = [x0y0[0], x0y0[1], x0y0[0] + w, x0y0[1] + h];
            box_done.push(add_list);

            if (receive_list[n-1]['img_url'] == '0'){
               newText = document.createTextNode(receive_list[n-1]['title']);
               newDiv.appendChild(newText);
               if (receive_list[n-1]['size'] == 1){
                  newDiv.classList.add("box_fa30");
               }
               else if (receive_list[n-1]['size'] == 2){
                  newDiv.classList.add("box_fa40");
               }
               else if (receive_list[n-1]['size'] == 3){
                  newDiv.classList.add("box_fa60");
               }
               else if (receive_list[n-1]['size'] == 4){
                  newDiv.classList.add("box_fa80");
               }
               newDiv.classList.add("box_textShadow");
               newDiv.classList.add("box_fontWeight");
               newDiv.classList.add("box_overflow");
               newDiv.classList.add("box_wordBreak");
               newDiv.classList.add("color");
               newDiv.style.backgroundColor = receive_list[n-1]['color'];
            }
            else {
               var newImgurl = receive_list[n-1]['img_url'];
               newImgurl = "url('" + newImgurl + "')";
               console.log(newImgurl);
               newDiv.style.backgroundImage = newImgurl;
               newDiv.classList.add("box_backgroundSize");
            }

            document.body.appendChild(newDiv);
         }
         else{
            add_list = [x0y0[0], x0y0[1], x0y0[0] + w, x0y0[1] + h];
            box_not_done.push(add_list);
         }
      }
   }
}