$(document).ready(function () {
  $("#search-icon").click(function () {
    $(this).toggleClass("fa-times");
    $("#search-box").toggleClass("active");
  });

  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#search-icon").removeClass("fa-times");
    $("#search-box").removeClass("active");

    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// ajax
// document.getElementById('searchBtn').addEventListener('click',function(e){
//   e.preventDefault()
//   var searchInput = document.getElementById('search').value
//     var xhr = new XMLHttpRequest()
//     xhr.open("GET", "https://dog.ceo/api/breeds/image/"+searchInput, true)
//     xhr.onload = function(){
//       if(this.status === 200){
//         console.log(this.responseText)
//         var div = document.createElement('div') 
//         div.innerHTML = this.responseText
//         // document.getElementById('searchResults').appendChild(div)
//         document.body.appendChild(div)
//       }else{
//         console.log('NOT FOUND')
//       }
//     }
//     xhr.send()
// })


// document.getElementById('searchBtn').addEventListener('click', function(e) {
//   e.preventDefault();
//   var searchInput = document.getElementById('search').value;
//   var url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1" + searchInput;
//   console.log("Request URL: " + url); // Log the complete URL
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onload = function() {
//     if(this.status === 200){
//       console.log(this.responseText)
//       var div = document.createElement('div') 
//       var imageUrl = document.createElement('img') 
//       div.innerHTML = this.responseText
//       console.log('SUCCESS')
//       imageUrl.src = url
//       div.style.width = "100%"
//       div.style.height = "70dvh"
//       div.style.border = "2px solid white"
//       div.style.borderRadius = "10px"
//       div.style.position = "fixed"
//       div.append(imageUrl)
//       document.body.appendChild(div)
//     }else{
//       console.log('NOT FOUND')
//     }
//   };
//   xhr.send();
// });

document.getElementById('searchBtn').addEventListener('click', function(e) {
  e.preventDefault();
   document.getElementById('display1').style.display = 'flex'
  document.getElementById('cancel').addEventListener('click', function(){
    document.getElementById('display1').style.display = 'none'
  })
  var searchInput = document.getElementById('search').value;

  var url = "https://dog.ceo/api/breed/"+ searchInput +"/images/random";
  console.log("Request URL: " + url); // Log the complete URL
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if(this.status === 200){
      console.log( JSON.parse(this.responseText).message)
      var Img = document.getElementById('imgDisplay')
      Img.src = JSON.parse(this.responseText).message
      console.log('SUCCESS')
    }else{
      console.log('NOT FOUND')
    }
  };
  xhr.send();
});

