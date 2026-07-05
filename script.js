function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

document.getElementById("page"+page).classList.add("active");

}

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,300);