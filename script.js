
var libButton = document.getElementById('lib-button');
var libIt = function() {
    var storyDiv = document.getElementById("story");
    var city= document.getElementById("city");
	var adjective= document.getElementById("adjective");
	var person =document.getElementById("person");

	var value1= city.value;
	var value2= adjective.value;
	var value3= person.value
	    storyDiv.innerHTML = "Il etait une fois, dans un monde qui sombre dans le chaos, une "+value2+" marseillais nommé "
	    +value3+" venue de la lointaine contré de "+value1+", sillonait les villes du monde pour annoncer la venue de Messi à l'OM";
    
};
libButton.addEventListener('click', libIt);



