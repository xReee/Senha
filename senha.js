var fazTabela = function(){
  var aSecreto = "<tr class = 'codigo'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr>";
  $(".tabela").append(aSecreto);
  for (var i = 1; i <= 10; i++) {
      var aLivre = "<tr id='" + i +"'><td><div class='tentativa'></div></td><td><div class='tentativa'></div></td><td><div class='tentativa'></div></td><td><div class='tentativa'></div></td><div class='tentativa'></div></td></tr>";
      $(".tabela").append(aLivre);
      $("tr:last").addClass("tentativa");
  }
}
var fazTabelaDica = function(){
  for (var i = 1; i <= 10; i++) {
      var aLivre = "<tr id='" + i +"'><td><div class='divdica'></div><div class='divdica'></div><div class='divdica'></div><div class='divdica'></div></td></tr>";
      $(".tabeladica").append(aLivre);
      $("tr:last").addClass("divdica");
  }
}
var geraCodigo = function(){
  var senha = []
}
