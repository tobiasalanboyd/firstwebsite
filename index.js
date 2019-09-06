 $(function(){
            //this code runs after page is fully loaded
            document.getElementById("jumbotron").innerHTML = "Paragraph changed.";
            newFunction();
            $('#nameform').on('submit', function(evt){
                
                
                evt.preventDefault();
                $(".jumbotron").removeClass('d-none');


            });
        
    });
    
    

