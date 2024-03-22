var searchInput = document.getElementById('searchInput');
var clearButton = document.getElementById('clearButton');

// Événement pour afficher/cacher la croix
searchInput.addEventListener('input', function() {
  if (searchInput.value !== '') {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
});

// Événement pour vider le champ de recherche
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  clearButton.style.display = 'none';
});

// Événement pour lancer la recherche
document.getElementById('searchButton').addEventListener('click', function() {
  var searchTerm = searchInput.value;
  // Faites quelque chose avec la valeur de la recherche, par exemple :
  alert('Vous avez recherché : ' + searchTerm);
});
