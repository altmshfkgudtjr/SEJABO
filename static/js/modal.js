/*
var check_ = sessionStorage.getItem("count");
if(check_ != "ok")
   {
        $("#myModal").removeClass("modal_display_none");
        sessionStorage.setItem("count", "ok");
    }
*/

// Get the modal
        var modal = document.getElementById('main_modal');
 
        // Get the button that opens the modal
        var btn = document.getElementById("close_modal_btn");
 
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];                   

        // When the user clicks on the button, open the modal 
        btn.onclick = function() {
            //$("#main_modal").addClass("modal_display_none");   
            //$("#main_modal_content").addClass("modal_display_none");   
            $('#main_modal_content').addClass("magictime");
            $("#main_modal_content").addClass("tinUpOut");   
            setTimeout(function(){
                $('#main_modal_content').addClass("modal_display_none");
                $("#main_modal_content").removeClass("tinUpOut");
            }, 1100);
            
            setTimeout(function(){
                $('#main_modal').addClass("magictime");
                $("#main_modal").addClass("swashOut");  
                setTimeout(function(){
                    $('#main_modal').addClass("modal_display_none");
                    $("#main_modal").removeClass("swashOut");
                }, 1100);
            }, 3100);
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                //modal.style.display = "none";
                //$("#myModal").removeClass("modal_display_block");
            }
        }