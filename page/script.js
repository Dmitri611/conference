const fontsSmall = document.getElementById("a-small");
const fontsNormal = document.getElementById("a-normal");
const fontsBig = document.getElementById("a-big");
const text = document.getElementById("main");


fontsSmall.addEventListener("click", () => {
    window.main.classList.add("fontsize-small");
    window.main.classList.remove("fontsize-normal");
    window.main.classList.remove("fontsize-big");

});

fontsNormal.addEventListener("click", () => {
    window.main.classList.add("fontsize-normal");
    window.main.classList.remove("fontsize-small");
    window.main.classList.remove("fontsize-big");
});

fontsBig.addEventListener("click", () => {
    window.main.classList.add("fontsize-big");
    window.main.classList.remove("fontsize-normal");
    window.main.classList.remove("fontsize-small");
});

const fontOne = document.getElementById("font__one");
const fontTwo = document.getElementById("font__two");
const fontThree = document.getElementById("font__three");

fontOne.addEventListener('click', () => {
    text.classList.add("fontBlue");
    text.classList.remove("fontWhite","fontAzure");
})

fontTwo.addEventListener('click', () => {
    text.classList.add("fontWhite");
    text.classList.remove("fontBlue","fontAzure");
})

fontThree.addEventListener('click', () => {
    text.classList.add("fontAzure");
    text.classList.remove("fontWhite","fontBlue");
})