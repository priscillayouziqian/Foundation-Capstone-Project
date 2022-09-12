//step 1: grab the html elements

//submit button
const getParamsSubmit = document.getElementById('getParamsSubmit');
// const toggleBtn = document.querySelector('toggle');
//input
const paramsInput = document.getElementById('params-input');
//response section
const responseSection = document.getElementById('deals');
//hidden paragrah
// const p = document.querySelector('p');

//step 2, write callback functions
//handle submit
function getParams(){
    axios.get(`http://localhost:5050/home/deals/${paramsInput.value}`)
    .then(res => {
        console.log(res.data)
        addToView(res.data)
    })
    .catch(err => console.log(err))
};

getParams();//call the get request automatically without any click/submit events.

function deleteDeals(id){
    axios.delete(`http://localhost:5050/home/deals/${id}`)
    .then(res => {
        console.log(res.data)
        addToView(res.data)
    })
    .catch(err => console.log(err))
}

//handle response
function addToView(dataArr){
    responseSection.innerHTML = null;

    dataArr.forEach(item => {
        const div = document.createElement('div');
        // const a = document.createElement('a');
        // const img = document.createElement('img');
        // const h3 = document.createElement('h3');
        // const buttonToToggle = document.createElement('button');
        // const p = document.createElement('p');


        div.classList = "w3-quarter hover";

        // a.href = item.link;
        // a.target = "_blank";

        // img.src = item.imageURL;
        // a.appendChild(img);
        // div.appendChild(a);

        // const title = document.createTextNode(item.title);
        // h3.appendChild(title);
        // div.appendChild(h3);

        // buttonToToggle.classList = "toggle";
        // const detail = document.createTextNode("detail");
        // buttonToToggle.appendChild(detail);
        // div.appendChild(buttonToToggle);

        // const details = document.createTextNode(item.details)
        // p.appendChild(details);
        // div.appendChild(p);

        div.innerHTML = `
        <a href=${item.link} target="_blank">
            <img src=${item.imageURL}>
        </a>
        <h3>${item.title}</h3>
        <button class="toggle">detail</button>
        <p class="pClass">${item.details}</p>
        <button onclick="deleteDeals(${item.id})" id="deleteBtn">X</button>`

        responseSection.appendChild(div)

        //try feature, to show up P tag-details of deals by clicking the detail button.
        const buttonToToggle = document.querySelector(".toggle");
        const p = document.querySelector('.pClass');
        
        buttonToToggle.addEventListener('click', () => {
            
            p.style.display = "block";
        });
    })
}




//step 3, combine elements and functions using eventListeners
getParamsSubmit.addEventListener("click", getParams);


