const axios = require("axios")
const Company = require("../models/Company")
const jsdom = require("jsdom");


module.exports = {

    fetchCompany : async (req,res) => {
        try{
                const { cname } = req.body
                let brr = []
                let arr  = []
                const {data} = await axios.post( `https://www.zaubacorp.com/companysearchresults/${cname}`)
                const { JSDOM } = jsdom;
                const dom = new JSDOM(data);
                const $ = require("jquery")(dom.window);

               if($('#results').length != 0){

    			const a = ($('#results').find('td h5').map(function(index) {
                        if(index %2 ==0){
                            brr.push({cin:$( this ).text()});
                        }else{
                            arr.push({name:$( this ).text()})
                        }
                  }));
                let arr3 = arr.map((item, i) => Object.assign({}, item, brr[i]));
               res.json({statusCode: 200 , companies:arr3})
            }else{
                res.json({statusCode: 400 , message:"No Company Found"})
            }
                

        }catch(err){
            res.json({statusCode:500 , error:"Server Error"})
        }
    },
       
    addCompany : async (req,res) => {
        try{
            const { name ,cin } = req.body
            const companies = await Company.create({name ,cin})
            res.json({statusCode: 200 , companies})

        }catch(err){
            res.json({statusCode:500 , error:"Server Error"})
        }
    },

    getCompanies : async (req,res) => {
        try{
            const companies = await Company.find({})
            if(!companies) return res.json({statusCode: 400 , message:"Bad Request"})
            res.json({statusCode: 200 , companies})

        }catch(err){
            res.json({statusCode:500 , error:"Server Error"})
        }
    }

}