 $(function(){
            //this code runs after page is fully loaded
            
            newFunction();
            $('#nameform').on('submit', function(evt){
                

                evt.preventDefault();
                $(".jumbotron").removeClass('d-none');
                $(".jumbotron").html("a");


            });
        
    });
    
    

