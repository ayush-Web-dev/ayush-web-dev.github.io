function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "8px 10px";
    document.getElementById("logo").style.fontSize = "34px";
  } else {
    document.getElementById("navbar").style.padding = "18px 10px";
    document.getElementById("logo").style.fontSize = "40px";
  }
}

const form = document.getElementById('contactForm');
form.addEventListener("change",() => {
    document.getElementById('sendMessageButton').disabled = !form.checkValidity()
});


const section = document.querySelector("section");
const btnKnow = section.querySelector(".btnKnow");
const btnClose = section.querySelector(".btnClose");

function openBody(){
    section.classList.add("open");
}

function closeBody(){
    section.classList.remove("open");
}

btnKnow.addEventListener("click", openBody);

btnClose.addEventListener("click", closeBody);


const text=document.querySelector(".fancy");
const strtext=text.textContent;
console.log(strtext)
const splitText=strtext.split("");
text.textContent="";
for(let i=0;i<splitText.length;i++)
{
    text.innerHTML+="<tag>"+splitText[i]+"</tag>";
}
let char=0;
let timer=setInterval(onTick,50);
function onTick(){
    const span=text.querySelectorAll('tag')[char];
    span.classList.add('show');
    char++;
    if(char===splitText.length)
    {
        complete();
        return;
    }
    function complete()
    {
        clearInterval(timer);
        timer=null;
    }
}