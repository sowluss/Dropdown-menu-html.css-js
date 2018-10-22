

//  Toggle and Click anywhere to close the dropdown

// Stop event propagation from within the #dropDown area
$(document).on("click", function () {
  $("#dropDown").hide();
});

// Prevent clicks on #dropDown from bubbling up to the document
$("#dropDown").on("click", function (event) {
  event.stopPropagation();
});

// stop any clicks on clickable <li> from traveling up to the document
$("#products").on("click", function (event) {
  event.stopPropagation();
  $("#dropDown").slideToggle(200); 
});



// Mobile slider

$('.mob-icon').click(function() {
  $('.mobile-slider').addClass('active').slideToggle(300);
});


// Mobile Slider Dropdown

$(document).on("click", function () {
  $(".mobile #dropDown").hide();
});

// Prevent clicks on #dropDown from bubbling up to the document
$(".mobile #dropDown").on("click", function (event) {
  event.stopPropagation();
});

$(".mobile #products").on("click", function (event) {
  event.stopPropagation();
  $(".mobile #dropDown").slideToggle(300); 
});





// WORKING JAVASCRIPT PART

// const products = document.getElementById('products');

// Toggle between open and close
// products.addEventListener('click', function () {
//   document.getElementById('dropDown').classList.toggle("show");
// });



// FAILED ATTEMPTS BELOW

// window.addEventListener('click', function(event) {
//   var box = document.getElementById('dropDown');
//   if(event.target != box) {
//     box.style.display = 'none';
//   }
// });


// $(document).click(function (e) {
//   e.stopPropagation();
//   var container = $('#products');

//   //check if the clicked area is dropDown or not
//   if (container.has(e.target).length === 0) {
//       $('#opened').hide();
//   }
// })


// $(document).click(function(){
//   // const menu = document.getElementById('opened');
//   $('#dropDown').hide();
// })


// window.addEventListener('click', function(event) {
//   if (!event.target.matches('#products')) {

//     var dropdowns = document.getElementById("dropDown");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// });

// $(document).click(function (e) {
//   e.stopPropagation();
//   var container = $("products");

  //check if the clicked area is dropDown or not
//   if (container.has(e.target).length === 0) {
//       $('document').addClass("dropdown-content");
//   }
// })



