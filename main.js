import {featuredGuests} from '/images/data.js';

let featuredSection = document.getElementById('featured');

let newHTML= ``;

featuredGuests.map((guestObj)=>{
    
    let imgHTML ='';
    guestObj.imgURL.forEach((url)=>{
        imgHTML += 
        `
        <img class="images" width="600px" src="${url}" alt="">
        `;
    })
    let htmlToInject;
    console.log('imghtml: ', imgHTML)
    htmlToInject = `
    <div class="feat-wrapper">
        <div class="info-wrapper">
           <h2>${guestObj.panelName}</h2>
           <p>${guestObj.panelDesc}</p>
        </div>
           ${imgHTML}
    </div>
    `
    newHTML += htmlToInject;
})

featuredSection.innerHTML += newHTML;