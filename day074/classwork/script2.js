const image = document.getElementById("myImage");

document.getElementById("changeBtn").addEventListener("click", function() {
    image.src = "https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg";
});

document.getElementById("hideBtn").addEventListener("click", function() {
    image.style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    image.style.display = "block";
    image.src = "https://images.photowall.com/products/48217/space-odyssey.jpg?h=699&q=85";
});