var leftArrow = document.getElementsByClassName("left-arrow")[0];
var rightArrow = document.getElementsByClassName("right-arrow")[0];
var handle = document.getElementById("handle");
var heading = document.getElementById("head");
var info = document.getElementById("info");
var i = 0 ;
var myImgs = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];
var imgHead = [
  "About our furniture",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
var imgsInfo = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];
function next (){
    i = i + 1 ;
    if (i <= 2 && i >= 0){
        handle.src = myImgs[i];
        heading.innerText = imgHead[i];
        info.innerText = imgsInfo[i];
    }else if(i > 2){
        i = 0 ;
        handle.src = myImgs[i];
        heading.innerText = imgHead[i];
        info.innerText = imgsInfo[i];
    }
}
rightArrow.onclick = next;
function back (){
    i = i - 1 ;
    if (i <= 2 && i >= 0){
        handle.src = myImgs[i];
        heading.innerText = imgHead[i];
        info.innerText = imgsInfo[i];
    }else if(i < 0){
        i = 2 ;
        handle.src = myImgs[i];
        heading.innerText = imgHead[i];
        info.innerText = imgsInfo[i];
    }
}
leftArrow.onclick= back ;
//////////////////////////////////
var ham = document.getElementsByClassName("ham")[0];
var close4 = document.getElementById("close");
var navigator4 = document.getElementsByClassName("navigator")[0];
console.log(navigator4);
ham.onclick = () =>{
    navigator4.style.display="block";
}
close4.onclick = () =>{
    navigator4.style.display="none";
}
var lgMedia = window.matchMedia("(min-width: 1100px)");
function mydoo (p){
    if(p.matches){
        navigator4.style.display="none";
    }
}
mydoo(lgMedia);
lgMedia.addListener(mydoo);
