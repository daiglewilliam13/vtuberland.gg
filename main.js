import {featuredGuests} from './images/data.js';

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
        <div class="info-wrapper">
            <div class='bg-filter'></div>
           <h2>${guestObj.panelName}</h2>
           <p>${guestObj.panelDesc}</p>
           <p>Featuring: ${nameList}</p>
           <p><a class="cta-button" href="">Check back soon for details!</a>
        </div>
           ${imgHTML}
    </div>
    `
    newHTML += htmlToInject;
})

featuredSection.innerHTML += newHTML;