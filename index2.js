$(function(){
    //this code runs after page is fully loaded
    $("lname").addClass('d-none');
   
    $('#nameform').on('submit', function(evt){
        

        evt.preventDefault();
        $(".jumbotron").removeClass('d-none');
        $(".jumbotron").html("a");


    });

});
    
    

