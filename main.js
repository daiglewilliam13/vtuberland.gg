import {featuredGuests} from '/images/data.js';

let featuredSection = document.getElementById('featured');

let newHTML= ``;

featuredGuests.map((guestObj)=>{
    
    let imgHTML;
    guestObj.imgURL.forEach((url)=>{
        imgHTML += 
        `
        <img height="500px" src="${url}" alt="">
        `;
    })
    let htmlToInject;
    htmlToInject = `
        <div class="feat-wrapper">
        <div class="info-wrapper">
           <h2>${guestObj.panelName}</h2>
           <p>${guestObj.panelDesc}</p>
        </div>
        <div class="images">
           ${imgHTML}
           </div>
        </div>
    `
    newHTML += htmlToInject;
})

featuredSection.innerHTML = newHTML;