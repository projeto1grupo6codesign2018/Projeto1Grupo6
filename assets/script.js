document.addEventListener('DOMContentLoaded', function() {

	let db = new DB('https://projeto-1-grupo-6-codesign.firebaseio.com');
	

	db.download("/projetos", function(data) {
		for(let key in data) {
      console.log(data[key]["name"])
  	}
    
  
		

   })

  db.download("/", function(data){
    replace(".bloco1", {
        "name": data["projetos"]
      })
  })
})