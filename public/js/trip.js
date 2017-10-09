




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
    var content = $(this).val();
    console.log(content);//.replace(/\n/g,"<br>");
    $(this).html(content);
    $(this).contents().unwrap();    
  }); 
  // updateDB(content);
  $('#edit').show(); 
});

// function updateDB(content){
// 	$.ajax({
//       method: "PUT",
//       url: "/trips",
//       data: content
//     }).done(){
// 		$.get("/trips", function(data) {
// console.log(data)
//     });
//     }
//   }
