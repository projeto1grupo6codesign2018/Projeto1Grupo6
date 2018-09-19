document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://projeto-1-grupo-6-codesign.firebaseio.com');
	let params = extract()

  let path = '/projetos/' + params['categoria'] + "/projetoslistados/" + params['projeto']


	
  db.download(path, function(data) {
   
    replace('.nomeprojeto', {
        "name": data["nome"]
        
    })
    replace(".tabela", {
      "desc": data["desc"],
      "objetivos": data["objetivos"],
      "data": data["data"],
      "nota": data["nota"],
      "download": data["download"],
    })
    replace("title", {
      "name": data["nome"],
    })

  })

})