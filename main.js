const postURI ='https://tsumicon.wixsite.com/my-site/_functions/vtuberland';


function extractIdAndFileType(url) {
    const start = url.indexOf("v1/") + 3;
    const end = url.indexOf("/", start);
    return end > start ? url.substring(start, end) : null;
}

let panelDiv = document.getElementById('featured');
let meetDiv = document.getElementById('mng-roster')

const popMnG = (list) => {
    let htmlToInject = ``
    list.forEach((item) => {
        if (item.type == "mng" ) {
            let videoId = extractIdAndFileType(item.flyerImage);  
            let vidURL = `https://static.wixstatic.com/media/${videoId}`
            htmlToInject = `<img class="mng" src="${vidURL}">`
            meetDiv.innerHTML += htmlToInject;
        }
    })      
}


async function getList(url, storageName) {
    try {

        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });
        let data = await response.json();
        if (response) {
            sessionStorage.removeItem(storageName);
            sessionStorage.setItem(storageName, JSON.stringify((data.items)));
            let vtubers = JSON.parse(sessionStorage.getItem('vtuberland'));

            popMnG(vtubers);
            vtubers.forEach((item) => {
                if (item.type == "panel") {

                    let videoId = extractIdAndFileType(item.flyerImage);  
                    let vidURL = `https://static.wixstatic.com/media/${videoId}`
                    let htmlToInject = `
                    <div class="panel-wrapper">
                    <img class="panel" src="${vidURL}">
                    <div class="info-wrapper">
                    <h2>${item.vtuber}</h2>
                    <p>Panel: ${item.title}
                    <p>${item.description}</p> 
                    <br>
                    <p>${item.room}</p>
                    <p>${item.day} ${item.time}</p>
                    </div>
                    </div>
                    `
                    featured.innerHTML += htmlToInject;        
                }

            });

        }
    } catch (err) {
        console.log(err);
    }
}

getList(postURI, "vtuberland");

















//old code




// featuredGuests.map((guestObj)=>{
    
//     let imgHTML ='';
//     guestObj.imgURL.forEach((url)=>{
//         imgHTML += 
//         `
//         <img class="images" width="300px" src="../${url}" alt="">
//         `;
//     })
//     let nameList = '';
//     guestObj.guestNames.forEach((name, index, array)=>{
//         let next = array[index+1];
//         if(next){
//             nameList += `${name} & `;
//         } else {
//             nameList += `${name}`;
//         }
        
//     })
//     let htmlToInject;
//     htmlToInject = `
//     <div class="feat-wrapper">
//         <div>
//     ${imgHTML}
//     </div>
//     <div class="info-wrapper">
//         <h2>${nameList}</h2>
//         <p class="guest-name">${guestObj.panelName}</p>
//         <p>${guestObj.panelDesc}</p>
//         <br>
//         <p class="panel-details">Where: ${guestObj.panelRoom} </p> <p class="panel-details"> When: ${guestObj.panelTime}</p>
//         </div>
//     </div>
//     `
//     newHTML += htmlToInject;
// })


// //meet n greet images

// let meetSection = document.getElementsByClassName('guest-wrapper')[0];
// let meetImages = "";

// files.forEach((file)=>{
//     let baseURL = "https://s3.us-west-1.amazonaws.com/tsumicon.com/hou/vtuberland/images/mng/";
//     let imgHTML = `<img src="${baseURL}${file}" class="meet-card" width="600px">`
//     meetImages += imgHTML;
// })

// meetSection.innerHTML=meetImages;
// featuredSection.innerHTML += newHTML;

