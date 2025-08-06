const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/convert/:satuan/:nilai", (req,res) => {
    let satuan = String(req.params.satuan);
    let nilai = Number(req.params.nilai);

    let response = {};

    if(satuan == "celcius") {
        response = {
            "celcius": nilai,
            "hasil": {
                "fahrenheit": nilai * (9 / 5) + 32,
                "kelvin": nilai + 273.15,
                "reamur": nilai * (4 / 5)
            } 
        }
    } else if(satuan == "fahrenheit") {
        response = {
            "fahrenheit": nilai,
            "hasil": {
                "celcius": (nilai - 32) * (5 / 9),
                "kelvin": (nilai - 32) * (5 / 9) + 273.15,
                "reamur": (nilai - 32) * (4 / 9)
            } 
        }
    } else if(satuan == "kelvin") {
        response = {
            "kelvin": nilai,
            "hasil": {
                "fahrenheit": (nilai - 273.15) * (9 / 5) + 32,
                "celcius": nilai - 273.15,
                "reamur": (nilai - 273.15) * (4 / 5)
            } 
        }
    } else if(satuan == "reamur") {
        response = {
            "reamur": nilai,
            "hasil": {
                "fahrenheit": nilai * (9 / 4) + 32,
                "kelvin": nilai * (5 / 4) + 273.15,
                "celcius": nilai * (5 / 4)
            } 
        }
    }

    res.json(response);
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

