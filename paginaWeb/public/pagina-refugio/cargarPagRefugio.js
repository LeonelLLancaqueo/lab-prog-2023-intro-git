

paramURL=window.location.search;

const objParametro= new URLSearchParams(paramURL);


const idRefugio= parseInt(objParametro.get('id'),10);




document.addEventListener('DOMContentLoaded',() =>{
    fetch('refugios.json').then(
        data => {
            return data.json()
        }).then(datos =>{
            cargarRefugio(datos[idRefugio]);
        })
});

const slide= document.querySelector(".slide ul");

const form_action= document.querySelector(".form-person");

function cargarRefugio(refugio){

    const li_img1= document.getElementById("slide-img1");    
    const li_img2= document.getElementById("slide-img2");    
    const li_img3= document.getElementById("slide-img3");    
    const img= document.createElement("img");
    img.src= refugio.img;
    const img2= document.createElement("img");
    img2.src= refugio.img2;
    const img3= document.createElement("img");
    img3.src= refugio.img3;

    li_img1.appendChild(img);
    li_img2.appendChild(img2);
    li_img3.appendChild(img3);

    form_action.action="refugio.html?id="+idRefugio;
    
}
