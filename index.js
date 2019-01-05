
const button = document.getElementById('Titanic');

button.addEventListener('click', function() {
  populateTitanic();
})


 
 function populateTitanic () {
  

  const title =  movies.Titanic.title;
  
  document.getElementById('title').innerHTML = title;
  
  const director = movies.Titanic.director
  
document.getElementById("director").innerHTML = director;
 
 const genre = movies.Titanic.genre;
 
 document.getElementById("genre").innerHTML = genre;
 
 const filmRating = movies.Titanic.filmRating;
  
document.getElementById("filmRating").innerHTML = filmRating;

 const movieDescription = movies.Titanic.description;
  
document.getElementById("description").innerHTML = movieDescription;

const score = movies.Titanic.audienceScore;

document.getElementById("audienceScore").innerHTML = score;


function populateCast(){  

var a = [];
movies.Titanic.cast.forEach(function(obj){
a.push(obj.role,obj.actor);


});

document.getElementById("cast").innerHTML = a


}

populateCast();
}







//document.addEventListener("DOMContentloaded", (e) => {
//  });




