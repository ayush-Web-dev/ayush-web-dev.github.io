function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "8px 10px";
    document.getElementById("logo").style.fontSize = "34px";
  } else {
    document.getElementById("navbar").style.padding = "18px 10px";
    document.getElementById("logo").style.fontSize = "40px";
  }
}


const forms = document.querySelectorAll(".needs-validation");
const result = document.getElementById("result");

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
    "submit",
    function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.querySelectorAll(":invalid")[0].focus();
        } else {
            const formData = new FormData(form);
            event.preventDefault();
            event.stopPropagation();
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
                },
                body: json
            })
            .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
                result.classList.remove("text-secondary");
                result.classList.add("text-success");
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.classList.remove("text-secondary");
                result.classList.add("text-danger");
            }
            })
            .catch((error) => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });
        }
        form.classList.add("was-validated");
    },
    false
    );
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


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
            }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        }
    }
}; 

// JavaScript code
document.querySelector('.footer-link[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    var resumeModal = new bootstrap.Modal(document.getElementById('resumeModal'));
    resumeModal.show();
});

document.querySelector('.resume-link[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    var resumeModal = new bootstrap.Modal(document.getElementById('resumeModal'));
    resumeModal.show();
});