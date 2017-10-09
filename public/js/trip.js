//need event listener ✔
//user clicks update 
//disable update button ✔
//hide data ✔
//form fields appear and submit button appears ✔

//when user clicks submit, store information from fields and store it in an object
//run ajax request to update the database at that id

$(document).ready(function() {
    var max_fields      = 1; //maximum input boxes allowed
    var title        = $(".title"); //Fields wrapper
    var update      = $(".update"); //Add button ID
    var i = 1; //initlal text box count
	$("#submitChanges").hide();
	$(".formb").hide();
	$("remove_field").hide();
    

    $(update).click(function(e){ //on add input button click
        e.preventDefault();
        //hide and disable elements
        $(".span").hide();
        $(".update").prop("disabled",true);
        $("#submitChanges").show();
        $(".formb").show();
        $("remove_field").hide();

    //JUST BEFORE END OF FUNCTION DO NOT DELETE QUOTES BELOW
    });

    
    $(title).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
        // $(".span").show();
    })


});

