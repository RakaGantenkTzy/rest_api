const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post("/convertnumber", (req,res) => {
    let type = String(req.body.type);
    let value = String(req.body.value);
    

    let response = {};

    if(type == "decimal") {
        response = {
            decimal: value,
            result: {
                binary: value.toString(2),
                octal: value.toString(8),
                hexadecimal: value.toString(16)
            }
        }
    } else if(type == "binary") {
        response = {
            binary: value,
            result: {
                decimal: value.toString(10),
                octal: value.toString(8),
                hexadecimal: value.toString(16)
            }
        }
    } else if(type == "octal") {
        response = {
            octal: value,
            result: {
                binary: value.toString(2),
                decimal: value.toString(10),
                hexadecimal: value.toString(16)
            }
        }
    } else if(type == "hexadecimal") {
        response = {
            hexadecimal: value,
            result: {
                binary: parseInt(value, 16).toString(2),
                octal: parseInt(value, 16).toString(8),
                decimal: parseInt(value, 16)
            }
        }
    } 

    res.json(response);
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

