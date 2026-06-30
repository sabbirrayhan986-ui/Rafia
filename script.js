const enterBtn = document.getElementById("enterBtn");

const untilMusic = document.getElementById("untilMusic");

const birthdayMusic = document.getElementById("birthdayMusic");

enterBtn.onclick = () => {

    document.getElementById("startPage").style.display = "none";

    document.getElementById("website").style.display = "block";

    untilMusic.play();

};

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= photos.length){

        index = 0;

    }

    document.getElementById("slide").src = photos[index];

},3000);

window.addEventListener("scroll",()=>{

    const birthday =
    document.getElementById("birthday");

    const top =
    birthday.getBoundingClientRect().top;

    if(top < 300){

        untilMusic.pause();

        birthdayMusic.play();

    }

});
