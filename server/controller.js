const birthdayDeals = require('./db.json');
const globalId = 11;

module.exports = {
    getDeals: (req, res) => {
        const type = req.params.type;
        console.log(req.params)
        console.log(type);

        if(type === 'All'){
            res.status(200).send(birthdayDeals); //if type is all, send all deals back to the page, including meals and beauty.
        }else{ 
            //if select other types, send specific deals that have selected types.
            const filterArr = birthdayDeals.filter(elem => elem.type === type);
            // console.log(filterArr); 
            res.status(200).send(filterArr);
        }
        
        

    },
    postDeals:(req, res) => {
        console.log(req.body);
        let {imageURL, title, details, link, type} = req.body;
        const newDeal = {
            id: globalId,
            imageURL,
            title: title,
            details,
            link,
            type
        };
        birthdayDeals.push(newDeal);
        res.status(200).send(birthdayDeals); 
        globalId++;
    }
}