const enterBtn = document.getElementById("enterBtn");

const intro = document.getElementById("intro");

const main = document.getElementById("main");

const untilMusic = document.getElementById("untilMusic");

const birthdayMusic = document.getElementById("birthdayMusic");

enterBtn.onclick = () => {

    intro.style.display = "none";

    main.style.display = "block";

    untilMusic.play();

}

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];

let i = 0;

setInterval(()=>{

    i++;

    if(i >= photos.length){
        i = 0;
    }

    document.getElementById("slider").src = photos[i];

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
