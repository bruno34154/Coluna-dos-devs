function mostrarAtivo(tag){
   var tag_li = document.getElementById('lista_menu');
   var tag_a = tag_li.getElementsByTagName('a');
   for (i=0; i<tag_a.length; i++ )
   {
      tag_a[i].style.color = "";
   }
      tag.style.color = "#ff0000";
   }

function validar(){
	var nome = document.getElementById('roundedInput');
	var email = document.getElementById('roundedEmail');

	if(nome.value == "" & email.value != ""){
		alert("Nome não informado");
		nome.focus();
		return;
	}
	if(email.value == "" & nome.value != ""){
		alert("Email não informado");
		email.focus();
		return;

	}
	if(email.value == "" & nome.value == ""){
		alert("Nome e email não informados!");
		email.focus();
		nome.focus();
		return;
		
	}
	
		alert("Dados enviados com sucesso!");
		
	
}