const router = require("express").Router();
const path = require("path");
const fs = require("fs")
const chipsController = require('../../controller/chipsController')

// api/chips
router.route("/")
    // old code that might be needed later
    // .delete(chipsController.removeChip)
    // .post(chipsController.addNewChip)
    // 



    // this code was made to work with the flat file json
    // this will send a json file with all the chips data 
    .get((req, res) => {
        res.json(path.join(__dirname, "./schema/reference/chips.json"))

    })
    // this will replace the json db with a newly written db
    .post((req, res) => {
        let chips = require(path.join(__dirname, "./schema/chips.json"))
        // the request here should be an object formatted the same as the db 
        chips.push(req)

        // writes a new file (path, data, callback)
        fs.writeFile(path.join(__dirname, "./schema/chips.json"), JSON.stringify(chips), err => {
            if(err){
                console.log(err)
                res.status("500")
            }

            res.status("200")
        })
    })  
    .delete((req, res) => {
        // writes a new file (path, data, callback)
        // req should be a formatted object the contains all the chips that are to be kept
        fs.writeFile(path.join(__dirname, "./schema/chips.json"), JSON.stringify(req), err => {
            if(err){
                console.log(err)
                res.status("500")
            }

            res.status("200")
        })
    })
    // 



// api/chips/chip
router.route("/chip")
    .post(chipsController.orderCase)


module.exports = router;