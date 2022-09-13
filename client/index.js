//step 1: grab the html elements

//submit button
const getParamsSubmit = document.getElementById('getParamsSubmit');
//input
const paramsInput = document.getElementById('params-input');
//response section
const responseSection = document.getElementById('deals');
//hidden paragrah

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
        div.classList = "w3-quarter hover";

        div.innerHTML = `
        <a href=${item.link} target="_blank">
            <img src=${item.imageURL}>
        </a>
        <h3>${item.title}</h3>
        <button class="toggle" id="${item.id}-button">detail</button>
        <p class="pClass" id="${item.id}">${item.details}</p>
        <button onclick="deleteDeals(${item.id})" id="deleteBtn">X</button>`

        responseSection.appendChild(div)

        //try feature, to show up P tag-details of deals by clicking the detail button.
        const buttonToToggle = document.getElementById(`${item.id}-button`);
        const p = document.getElementById(`${item.id}`); //every p tag in the div is individual, try using id instead of class.
        
        buttonToToggle.addEventListener('click', () => {
            
            p.style.display = "block";
        });
    })
}




//step 3, combine elements and functions using eventListeners
getParamsSubmit.addEventListener("click", getParams);


