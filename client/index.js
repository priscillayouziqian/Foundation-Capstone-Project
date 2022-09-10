//step 1: grab the html elements

//submit button
const getParamsSubmit = document.getElementById('getParamsSubmit');
//input
const paramsInput = document.getElementById('params-input');
//response section
const responseSection = document.getElementById('deals');

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

//handle response
function addToView(dataArr){
    responseSection.innerHTML = null;

    dataArr.forEach(item => {
        const div = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');


        div.classList = "w3-quarter hover";

        a.href = item.link;
        a.target = "_blank";

        img.src = item.imageURL;
        // img.style = "width:100%";
        a.appendChild(img);
        div.appendChild(a);

        const title = document.createTextNode(item.title);
        h3.appendChild(title);
        div.appendChild(h3);

        const details = document.createTextNode(item.details)
        p.appendChild(details);
        div.appendChild(p);

        responseSection.appendChild(div)
    })
}

//step 3, combine elements and functions using eventListeners
getParamsSubmit.addEventListener("click", getParams);

