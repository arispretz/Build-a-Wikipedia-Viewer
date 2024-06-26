
var apiURL = "https://en.wikipedia.org/w/api.php?callback=?";

$(document).ready(function() {
  $('#searchSubmit').click(function() {
    $("#show-result").empty();  
    $.getJSON(apiURL, {
        action: 'query',
        format: 'json',
        inprop: "url",
        formatversion: 2,
        generator: 'search',
        gsrsearch: $("input").val(),
        gsrwhat: "text",
        prop: 'extracts|info',
        exsentences: 3,
        exintro: "",
        explaintext: "",        
        exlimit: 20,
      })
      .success(function(response) {
        console.log(response);
        response.query.pages.forEach(function(resp) {
          $('#show-result').append(
            "<a href='" + resp.fullurl + "' target= '_blank'><div id='result' class='results'><h3>" + resp.title + "</h3><p = class='extract'>" + resp.extract + "</p></div>");
        })
      });
  }); 
  
  $('#randomPage').click(function() {
    
  }); 

  $("#input").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#searchSubmit").click();
    }
  });
});
