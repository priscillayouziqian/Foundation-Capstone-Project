//step 1, grab newpost html <form> element
const form = document.querySelector('form');

//step 2, write callback function for post request
function createDeals(e){
    e.preventDefault();

    let imageURL = document.querySelector('#imageURL');
    let title = document.querySelector('#title');
    let details = document.querySelector('#details');
    let link = document.querySelector('#link');
    let type = document.querySelector('#selectType');

    const body = {
       "imageURL": imageURL.value,
       "title": title.value,
       "details": details.value,
       "link": link.value,
       "type": type.value
    }
    axios.post('http://localhost:5050/home/newpost', body)
    .then(res => {
        console.log(res.data); //shows in browser
        location.assign("index.html") //browser redirect the page to home page when the event click happens
    })
    .catch(err => console.log(err))
};

//step 3, combine elements and functions using event listeners.
form.addEventListener("submit", createDeals);
