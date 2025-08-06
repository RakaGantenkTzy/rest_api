const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post("/totalharga", (req, res) => {
    let harga = Number(req.body.harga);
    let jumlah = Number(req.body.jumlah);

    let totalharga = harga * jumlah;

    let response = {
        harga: harga,
        jumlah: jumlah,
        totalharga: totalharga
    }

    res.json(response);
})


app.listen(8000, () => {
    console.log("Server run on port 8000");
})

