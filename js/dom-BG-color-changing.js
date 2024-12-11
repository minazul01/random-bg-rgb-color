function rgbBtn(){
    const rgbOne = Math.floor(Math.random() * 255);
    const rgbTwo = Math.floor(Math.random() * 255);
    const rgbThree = Math.floor(Math.random() * 255);
    return `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
}



const bg = document.getElementById('bg-col');
document.getElementById('main-btn').addEventListener('click', function(){
    const bgCol = rgbBtn();
    bg.style.backgroundColor = bgCol
})
