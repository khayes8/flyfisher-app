//need event listener ✔
//user clicks update 
//disable update button ✔
//hide data ✔
//form fields appear and submit button appears ✔

//when user clicks submit, store information from fields and store it in an object
//run ajax request to update the database at that id

// $(document).ready(function() {
//     var title        = $(".title"); //Fields wrapper
//     var update      = $(".update"); //Add button ID
//     var i = 1; //initlal text box count
// 	$("#submitChanges").hide();
// 	$(".formb").hide();
// 	$("remove_field").hide();

//    $(update).click(function(){ //on add input button click
    
//     //hide and disable elements
//     // $(".span").hide();
//     $(".update").prop("disabled",true);
//     $("#submitChanges").show();
//     $(".formb").show();
//     $("remove_field").hide();
// 	});

//    $("#submitChanges").click(function(){
//    	alert("hi");
//    })
// });






$('#edit').click(function(){
  $('#edit').hide();
  $('td').each(function(){
    var content = $(this).html();
    $(this).html('<textarea>' + content + '</textarea>');
  });  
  
  $('#save').show();
  $('.info').fadeIn('fast');
});

$('#save').click(function(){
  $('#save, .info').hide();
  $('textarea').each(function(){
    var content = $(this).val();//.replace(/\n/g,"<br>");
    $(this).html(content);
    $(this).contents().unwrap();    
  }); 

  $('#edit').show(); 
});


