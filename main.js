const products = document.getElementById('products');

// Toggle between open and close
products.addEventListener('click', function() {
  document.getElementById('dropDown').classList.toggle("show");
});

window.addEventListener('mouseup', function(event) {
  const box = document.getElementById('opened');
  if(event.target != box) {
    box.style.display = 'none';
  }
});

//  Click anywhere to close the dropdown

// $('window').click(function(e) {
//   e.stopPropagation();
//  })

 
 