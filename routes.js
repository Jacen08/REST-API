const express = require('express');
const route = express.Router();
const data = require('../database.js');

// Get data by name 
route.get("/Data", async function(req, res)
{
    if(req.query.name)
    {

        let userdata = req.query.name;
        var fulldata = userdata.trim().replaceAll('-', ' ').split(' ').filter(elm => elm);
        const newData = [];
        const errorArray = [];

        for (let val of fulldata)
        {

        const sql = data.query("SELECT * from Data where firstname LIKE'%"+[req.query.name]+"%' or lastname LIKE'%"+[req.query.lastname]+"%' or aliases LIKE '%"+[req.query.name]+"%' or aliases LIKE '%"+[req.query.lastname]+"%' or altspelling LIKE '%"+[req.query.name]+"%' or altSpelling LIKE '%"+[req.query.lastname]+"%';",function(error, results)
        {
            if (error) {
                res.send("Error running query - please check again");
            } 
            else if(!results.length){
                res.send("No match found in data");
            }
            else {
                // Send the data results from the query 
                // res.send("Possible match found. Account has been suspended, please contact support.")
                // res.json(results);

            }
        })
        }
    };   
});


// bring data on one user based on given ID ("More options")
route.get("/UserID", async function(req,res)
{
    if(req.query.ID){
        const sql = data.query("SELECT * FROM `test` WHERE ID ="+[req.query.ID]+";", function(error, results) 
    {
        if (error) {
            res.send("There's an error you idiot ");
        }
        else if (!results.length){
            res.send("no data found")
        }
        else{
            res.json(results);
        }

    })
    };
    
});


module.exports = route;