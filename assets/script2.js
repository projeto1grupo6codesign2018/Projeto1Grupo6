document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://projeto-1-grupo-6-codesign.firebaseio.com');
	let params = extract()

  let path = '/projetos/' + params['categoria']


	
  db.download(path, function(data) {
   
    replace('.area', {
        "name": data["name"]
        
    })
    replace(".areaprojects", {
      "projetoslistados": data["projetoslistados"],
    })
    replace("title", {
      "name": data["name"],
    })

  })

})
