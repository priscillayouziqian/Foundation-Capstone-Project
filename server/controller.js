const birthdayDeals = require('./db.json');

module.exports = {
    getDeals: (req, res) => {
        const type = req.params.type;
        console.log(req.params)
        console.log(type);

        // const index = birthdayDeals.findIndex(elem => elem.type === type);
        // console.log(index) //0, expect to get all index with type Beaty, it should be 0 and 1.

        const filterArr = birthdayDeals.filter(elem => elem.type === type);
        console.log(filterArr);
       
        // res.status(200).send(birthdayDeals[index]);
        res.status(200).send(filterArr);
        

    },
    postDeals:(req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
    }
}