//예제리스트
var receive_list= [{'post_id': '1','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#EFFBFB'},{'post_id': '2','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 중입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'3', 'color': '#EFFBFB'},{'post_id': '3','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8EC'},{'post_id': '4','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8EC'},{'post_id': '5','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'3', 'color': '#FBEFEF'},{'post_id': '6','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#FBEFEF'},{'post_id': '7','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#ECE0F8'},{'post_id': '8','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#ECE0F8'},{'post_id': '9','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#E0F8E6'},{'post_id': '10','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8E6'},{'post_id': '11','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#E0F8EC'}, {'post_id': '12','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':
'1', 'color': '#E0F8EC'}, {'post_id': '13','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 테스트 데이터 입니다.','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#E0F8EC'}, {'post_id': '14','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'꿀꿀','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#E0F8EC'}]

//박스채우기 script
var window_width = $(window).width();
var window_height = $(window).height();
$("#test").append(window_width, "<br>")
$("#test").append(window_height)

document.body.onload = addElement;
function addElement () {
   var box_shape = {'1': ['150', '210'], '2': ['210', '270'], '3': ['240', '360'], '4': ['300', '420']};
   var box_list = [];
   for (var i=0; i<receive_list.length; i++){
      box_list.push(receive_list[i]['size']);
   }
   var box_done = [];
   var box_not_done = [];
   var number = 30;            //최소단위 지정 (작을수록 시간이 오래걸림)
   var x0y0, x1y0, x0y1, x1,y1;
   var min_width = (window_width/100)*2;            //가로 시작 지점
   var min_height = (window_width/100)*3.5;         //세로 시작 지점
   var max_width = window_width - (window_width/100)*3;   //가로 끝 지점
   var max_height = window_height - ((window_width/100)*3);   //세로 끝 지점
   var n = 1;
   for(var i=0; i<box_list.length; i++){
      box = box_list[i];
      var w = Number(box_shape[box][0]);
      var h = Number(box_shape[box][1]);
      //Div 각 꼭지점 좌표
      /*----------------------------------------------*/
      x0y0 = [min_width,min_height];
      x1y0 = [w, min_height];
      x0y1 = [min_width, h];
      x1y1 = [w, h];
      /*----------------------------------------------*/
      //만약 첫번째의, div가 들어왔을 때,
      if (!box_done.length){
         var newDiv = document.createElement("div");
         var hoverDiv = document.createElement("div");
         newDiv.id = "box_"+n;
         hoverDiv.className = "box_hover";
         n+=1;
         newDiv.style.position = 'absolute';
         newDiv.style.width = w+'px';
         newDiv.style.height = h+'px';
         newDiv.style.left = min_width+'px';
         newDiv.style.top = min_height+'px';
         newDiv.style.backgroundColor = 'rgba(100,100,100,0.2)';
         newDiv.style.boxShadow = '0 0 5px #eeeeee';
         newDiv.style.cursor = 'pointer';
         newDiv.style.borderRadius = '10px 10px';
         add_list = [min_width, min_height, min_width + w, min_height + h];
         box_done.push(add_list);

         hoverDiv.style.position = 'relative';
         hoverDiv.style.width = '100%';
         hoverDiv.style.height = '100%';
         hoverDiv.style.backgroundColor = 'rgb(10,10,10)';
         hoverDiv.style.opacity = '0';
         hoverDiv.style.cursor = 'pointer';
         hoverDiv.style.borderRadius = '10px 10px';


         if (receive_list[n-1]['img_url'] == '0'){
            newText = document.createTextNode(receive_list[n-1]['title']);
            newDiv.appendChild(newText);
            if (receive_list[n-1]['size'] == 1){
               newDiv.style.fontSize = '30px';
            }
            else if (receive_list[n-1]['size'] == 2){
               newDiv.style.fontSize = '40px';
            }
            else if (receive_list[n-1]['size'] == 3){
               newDiv.style.fontSize = '60px';
            }
            else if (receive_list[n-1]['size'] == 4){
               newDiv.style.fontSize = '80px';
            }
            newDiv.style.textShadow = '0 1px 2px #222222';
            newDiv.style.fontWeight = 'lighter';
            newDiv.style.overflow = 'hidden';
            newDiv.style.wordBreak = 'break-all';
            newDiv.style.backgroundColor = receive_list[n-1]['color'];
            newDiv.style.color = '#444444';
         }
         else {
            var newImgurl = receive_list[n-1]['img_url'];
            newImgurl = "url('" + newImgurl + "')";
            newDiv.style.backgroundImage = newImgurl;
            newDiv.style.backgroundSize = 'cover';
         }


         document.body.appendChild(newDiv);
         newDiv.appendChild(hoverDiv);
      }
      else {
         for (var j=0; j<box_done.length; j++){
            var temp_box = box_done[j];
            var temp_x0y0 = [temp_box[0], temp_box[1]];
            var temp_x1y0 = [temp_box[2], temp_box[1]];
            var temp_x0y1 = [temp_box[0], temp_box[3]];
            var temp_x1y1 = [temp_box[2], temp_box[3]];
            if (x0y0[0] >= temp_x0y0[0] && x0y0[1] >= temp_x0y0[1] && x0y0[0] <= temp_x1y1[0] && x0y0[1] <=temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x1y0[0] <= temp_x1y0[0] && x1y0[1] >= temp_x1y0[1] && x1y0[0] >= temp_x0y1[0] && x1y0[1] <= temp_x0y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x0y1[0] >= temp_x0y1[0] && x0y1[1] <= temp_x0y1[1] && x0y1[0] <= temp_x1y0[0] && x0y1[1] >= temp_x1y0[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x1y1[0] >= temp_x0y0[0] && x1y1[1] >= temp_x0y0[1] && x1y1[0] <= temp_x1y1[0] && x1y1[1] <=temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x1y0[0] >= temp_x1y0[0] && x1y0[0] <= temp_x1y0[1] && x0y1[0] >= temp_x1y0[0] && x0y1[0] >= temp_x1y0[0]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x0y0[0] <= temp_x0y0[0] && x0y0[1] <= temp_x0y0[1] && x1y1[0] >= temp_x0y0[0] && x1y1[0] >= temp_x0y0[0]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x0y0[0] <= temp_x0y1[0] && x0y0[1] <= temp_x0y1[1] && x1y1[0] >= temp_x0y1[0] && x1y1[1] >= temp_x0y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
            else if (x1y0[0] >= temp_x1y1[0] && x1y0[1] <= temp_x1y1[1] && x0y1[0] <= temp_x1y1[0] && x0y1[1] >= temp_x1y1[1]){
               j = -1;
               x0y0[0] += number;
               x1y0[0] += number;
               x0y1[0] += number;
               x1y1[0] += number;
            }
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
            var hoverDiv = document.createElement("div");
            newDiv.id = "box_"+n;
            hoverDiv.className = 'hover_box';
            n+=1;
            newDiv.style.position = 'absolute';
            newDiv.style.width = w+'px';
            newDiv.style.height = h+'px';
            newDiv.style.left = x0y0[0]+'px';
            newDiv.style.top = x0y0[1]+'px';
            newDiv.style.backgroundColor = 'rgba(100,100,100,0.2)';
            newDiv.style.boxShadow = '0 0 5px #eeeeee';
            newDiv.style.cursor = 'pointer';
            newDiv.style.borderRadius = '10px 10px';
            add_list = [x0y0[0], x0y0[1], x0y0[0] + w, x0y0[1] + h];
            box_done.push(add_list);


            if (receive_list[n-1]['img_url'] == '0'){
               newText = document.createTextNode(receive_list[n-1]['title']);
               newDiv.appendChild(newText);
               if (receive_list[n-1]['size'] == 1){
                  newDiv.style.fontSize = '30px';
               }
               else if (receive_list[n-1]['size'] == 2){
                  newDiv.style.fontSize = '40px';
               }
               else if (receive_list[n-1]['size'] == 3){
                  newDiv.style.fontSize = '60px';
               }
               else if (receive_list[n-1]['size'] == 4){
                  newDiv.style.fontSize = '80px';
               }
               newDiv.style.textShadow = '0 1px 2px #222222';
               newDiv.style.fontWeight = 'lighter';
               newDiv.style.overflow = 'hidden';
               newDiv.style.wordBreak = 'break-all';
               newDiv.style.backgroundColor = receive_list[n-1]['color'];
               newDiv.style.color = '#444444';
            }
            else {
               var newImgurl = receive_list[n-1]['img_url'];
               newImgurl = "url('" + newImgurl + "')";
               newDiv.style.backgroundImage = newImgurl;
               newDiv.style.backgroundSize = 'cover';
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
/*
$('[id^=box]').hover(function(){
   var nowdDiv = this;
   var hoverDiv = document.createElement("div");
   hoverDiv.id = "box_hover";
   hoverDiv.style.position = 'relative';
   hoverDiv.style.width = '100%';
   hoverDiv.style.height = '100%';
   hoverDiv.style.left = '0px';
   hoverDiv.style.top = '0px';
   hoverDiv.style.backgroundColor = 'rgba(10,10,10,0.2)';
   hoverDiv.style.cursor = 'pointer';
   hoverDiv.style.borderRadius = '10px 10px';
   document.nowDiv.appendChild(hoverDiv);
},function(){
   var $zero = $('#box_hover').detach();
   $('#box_hover').remove();
});*/

