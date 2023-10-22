const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cap = document.querySelector('.image-name');  
 

let index = 0;    

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
       
    })
})

const updateImage = (i) => {
    let path = `${i+1}.jpg`; 
    largeImage.src = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
    
}
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active'); 
})

rightArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

leftArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

// function altvalues(i) { 
//     let x= null;
//      x = document.getElementById("photos").getAttribute("alt");
//     document.getElementById("image-name").innerHTML = x;
    
// }
