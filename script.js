function randomArticle() {  
  window.open("https://en.wikipedia.org/wiki/Special:Random");  
};

$(document).ready(function(){
$('#searchButton').click(function(){
var searchTerm=$('#searchFor').val();
var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm+"&format=json&callback=?";  
  $.ajax({
    type:"GET",
    async:false,
    url:url,
    dataType:"json",
    success: function(data){  
      $("#result").html("");
      for(var i=0; i<data[1].length;i++){
      $("#result").prepend("<div class='btn-info'><a href= "+ data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></div>");
    }
    },
    
    error: function(errorMessage){
      alert("Error");
  }
    
    
    
  });
  
});  
  
  
});
