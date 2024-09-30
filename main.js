import {featuredGuests} from './images/data.js';
import { files } from './images/mng/list.js';

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
    htmlToInject = `
    <div class="feat-wrapper">
        <div>
    ${imgHTML}
    </div>
    <div class="info-wrapper">
        <h2>${nameList}</h2>
        <p class="guest-name">${guestObj.panelName}</p>
        <p>${guestObj.panelDesc}</p>
        <br>
        <p><a class="cta-button" href="">Check back soon for details!</a>
        </div>
    </div>
    `
    newHTML += htmlToInject;
})


//meet n greet images

let meetSection = document.getElementsByClassName('guest-wrapper')[0];
let meetImages = "";

files.forEach((file)=>{
    let baseURL = "https://s3.us-west-1.amazonaws.com/tsumicon.com/hou/vtuberland/images/mng/";
    let imgHTML = `<img src="${baseURL}${file}" class="meet-card" width="600px">`
    meetImages += imgHTML;
})

meetSection.innerHTML=meetImages;
featuredSection.innerHTML += newHTML;

