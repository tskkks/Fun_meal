function search() {
    
    var searchTerm = document.getElementById("searchInput").value;
  
    if (searchTerm.trim() !== "")
   {alert("Você pesquisou por: " + searchTerm);}

  else
   {alert("Por favor insira um valor válido")}
    
    document.getElementById("searchInput").value = "";
  }