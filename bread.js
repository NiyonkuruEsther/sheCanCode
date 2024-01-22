// var Usrdata = document.querySelector('.box');

var galleryData = [
    {src:"https://www.w3schools.com/w3images/sandwich.jpg",heading:"The Perfect Sandwich, A Real NYC Classic",paragraph:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."},
    {src:"https://www.w3schools.com/w3images/steak.jpg",heading:"Let Me Tell You About This Steak",paragraph:"Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
    {src:"https://www.w3schools.com/w3images/cherries.jpg",heading:"Cherries, interrupted",paragraph:"Lorem ipsum text praesent tincidunt ipsum lipsum. What else?"},
    {src:"https://www.w3schools.com/w3images/wine.jpg",heading:"Once Again, Robust Wine and Vegetable Pasta",paragraph:"Lorem ipsum text praesent tincidunt ipsum lipsum."},
    {src:"https://www.w3schools.com/w3images/popsicle.jpg",heading:"All I Need Is a Popsicle",paragraph:"Lorem ipsum text praesent tincidunt ipsum lipsum."},
    {src:"https://www.w3schools.com/w3images/salmon.jpg",heading:"Salmon For Your Skin",paragraph:"Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
    {src:"https://www.w3schools.com/w3images/sandwich.jpg",heading:"The Perfect Sandwich, A Real Classic",paragraph:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."},
    {src:"https://www.w3schools.com/w3images/croissant.jpg",heading:"Le French",paragraph:"Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
]

document.getElementById('menu').innerHTML = galleryData.map(image => 
    `<div class="gallery-card">
      <img src=${image.src} alt="">
      <h2>${image.heading}</h2>
      <p>${image.paragraph}</p>
    </div>`
).join('')


const toggle = document.querySelector('.nav-menu-toggle');
const close = document.querySelector('.nav-menu-toggle-close');
const list = document.querySelector('.nav-menu-toggle-list');

toggle.addEventListener('click', function() {
    list.classList.add('active');
});

close.addEventListener('click', function() {
    list.classList.remove('active');
});