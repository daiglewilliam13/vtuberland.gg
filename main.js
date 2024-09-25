import {featuredGuests} from './images/data.js';

let featuredSection = document.getElementById('featured');

let newHTML= ``;

featuredGuests.map((guestObj)=>{
    
    let imgHTML ='';
    guestObj.imgURL.forEach((url)=>{
        imgHTML += 
        `
        <img class="images" width="300px" src="../${url}" alt="">
        `;
    })
    let nameList = '';
    guestObj.guestNames.forEach((name, index, array)=>{
        let next = array[index+1];
        if(next){
            nameList += `${name} & `;
        } else {
            nameList += `${name}`;
        }
        
    })
    let htmlToInject;
    console.log('imghtml: ', imgHTML)
    htmlToInject = `
    <div class="feat-wrapper">
        <div>
    ${imgHTML}
    </div>
    <div class="info-wrapper">
        <h2>${nameList}</h2>
        <p class="guest-name">Panel: ${guestObj.panelName}</p>
        <p>${guestObj.panelDesc}</p>
        <br>
        <p><a class="cta-button" href="">Check back soon for details!</a>
        </div>
    </div>
    `
    newHTML += htmlToInject;
})

featuredSection.innerHTML += newHTML;

let featImgs = Array.from(document.getElementsByClassName('images'));


featImgs.forEach((img)=>{
    console.log(img)
    if (img.src=="https://www.tsumicon.com/hou/vtuberland/images/kira.png") {
        console.log('found')
        img.style.transform='scale(1.5)'
    }
})


