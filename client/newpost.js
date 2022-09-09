function createDeals(e){
    e.preventDefault();
    const body = {
        "id": 20,
       "imageURL": "https://www.sephora.com/contentimages/BI/bi_hq/birthday/2022/desktop/2022-7-1-q3-q4-birthday-tiergating-bundle-a-site-desktop-landing-page-buying-guide-without-side-nav-en-us-ca-980x606.jpg?imwidth=980",
       "title": document.querySelector('#title').value,
       "details": "Free birthday gift",
       "link": "https://www.sephora.com/product/charlotte-tilbury-charlotte-tilbury-birthday-gift-set-P480419?icid2=bi_birthday_image_d_1_gift_jul_sept_charlotte_tilbury",
       "type": "Beauty"
    }
    axios.post('http://localhost:5050/home/newpost', body)
    .then(res => {
        console.log(res.data);
    })
}

form.addEventListener("submit", createDeals);
