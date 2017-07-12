document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url:"https://bb-election-api.herokuapp.com/",
    method:"GET",
    dataType:"JSON"
  })
  .done(function(data){

    for(var i = 0; i < data.candidates.length; i++){
      var candidates = document.createTextNode(data.candidates[i].name + "  :  "  + data.candidates[i].votes);
      var li = document.createElement("li");
      li.append(candidates);
      var election = document.querySelector("#election");
      election.append(li);
    }
  })
});
