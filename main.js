const imageGallery = document.getElementById("gallery")
const galleryNextButton = document.getElementById("galleryNext")
const galleryBackButton = document.getElementById("galleryBack")

const images = ["galleryimages/banana.jpeg","galleryimages/eye-contact.jpeg","galleryimages/suit.jpeg"]
var imageIndex = 0

galleryNextButton.addEventListener("click", function() {
    if(imageIndex < images.length-1){
        imageIndex += 1
    } else {
        imageIndex = 0
    }

    imageGallery.src = images[imageIndex]
})

galleryBackButton.addEventListener("click", function() {
    if(imageIndex > 0){
        imageIndex -= 1
    } else {
        imageIndex = images.length-1
    }

    imageGallery.src = images[imageIndex]
})
