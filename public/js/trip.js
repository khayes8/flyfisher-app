$('#edit').click(function(){
  $('#edit').hide();
  var count = 1;
  $('td').each(function(){
    var content = $(this).html();

    $(this).html('<textarea id="field_' + count +'">' + content + '</textarea>');
    count++;
  });

  //$('#save').show();
  //$('.info').fadeIn('fast');
});

$('#save').click(function(){
 // $('#save, .info').hide();
  // $('textarea').each(function(){
  //   var content = $(this).val();
  //   console.log(content);//.replace(/\n/g,"<br>");
  //   $(this).html(content);
  //   $(this).contents().unwrap();
  // });
  // updateDB(content);
  $('#edit').show();

  var location = $(".location").val().trim();
        // var trip_date = $("trip_date").val().trim();
        var fish_name = $(".fish_name").val().trim();
        var bait = $(".bait").val().trim();
        var notes = $(".notes").val().trim();
  // updateDB(location, fish_name, bait, notes);

  var newObject = {
      location: $("#field_2").val().trim(),
      date: $("#field_3").val().trim(),
      trip_id: $("#field_1").val().trim(),
      fish_name: $("#field_4").val().trim(),
      bait:$("#field_5").val().trim(),
      notes: $("#field_6").val().trim()
  }

  console.log(JSON.stringify(newObject, null, 2));

  $.ajax({
    url: '/trips',
    type: 'PUT',
    data: newObject,
       success: function(req, res){
      console.log(req.body.location);
    }
  })
});

// function updateDB(location, fishName, bait, notes){
//  var tripObj = {
//      location: location,
//      fishName: fishName,
//      bait: bait,
//      notes: notes
//  }
//  console.log(tripObj);
//     }