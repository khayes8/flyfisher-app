




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

  var location = $(".location").val().trim();
    	// var trip_date = $("trip_date").val().trim();
    	var fish_name = $(".fish_name").val().trim();
    	var bait = $(".bait").val().trim();
    	var notes = $(".notes").val().trim();
  // updateDB(location, fish_name, bait, notes);
});

// function updateDB(location, fishName, bait, notes){
// 	var tripObj = {
// 		location: location,
// 		fishName: fishName,
// 		bait: bait,
// 		notes: notes
// 	}
// 	console.log(tripObj);
//     }
  

