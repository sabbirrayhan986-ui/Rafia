const pages = document.querySelectorAll(".page");

const untilMusic = document.getElementById("untilMusic");
const birthdayMusic = document.getElementById("birthdayMusic");

function nextPage(pageNumber){

    pages[pageNumber - 1].classList.remove("active");

    pages[pageNumber].classList.add("active");

    if(pageNumber === 2){

        birthdayMusic.currentTime = 0;
        birthdayMusic.play();

    }

    if(pageNumber === 3){

        birthdayMusic.pause();

        untilMusic.currentTime = 0;
        untilMusic.play();

    }

    if(pageNumber === 4){

        untilMusic.pause();

    }

}

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];

const photo = document.getElementById("photo");

let index = 0;

setInterval(() => {

    if(document.getElementById("page4").classList.contains("active")) {

        photo.style.opacity = 0;

        setTimeout(() => {

            index++;

            if(index >= photos.length){
                index = 0;
            }

            photo.src = photos[index];

            photo.style.opacity = 1;

        },500);

    }

},3000);
