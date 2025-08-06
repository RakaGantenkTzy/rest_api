const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// Balok
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);
    let tinggi = Number(req.body.tinggi);

    let volume = panjang * lebar * tinggi;
    let luaspermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

// Kubus
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi);

    let volume = sisi * sisi * sisi;
    let luaspermukaan = 6 * (sisi * sisi);

    let response = {
        sisi: sisi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

// Tabung
app.post("/tabung", (req,res) => {
    let jarijari = Number(req.body.jarijari);
    let tinggi = Number(req.body.tinggi)

    let volume = Math.round(Math.PI * jarijari * jarijari * tinggi);
    let luaspermukaan = Math.round(Math.PI * 2 * jarijari * (jarijari * tinggi)); 

    let response = {
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response);
}) 

// Kerucut
app.post("/kerucut", (req,res) => {
    let jarijari = Number(req.body.jarijari);
    let tinggi = Number(req.body.tinggi);
    let apotema = Number(req.body.apotema);

    let volume = Math.round((Math.PI * jarijari * jarijari * tinggi) / 3);
    let luaspermukaan = Math.round(Math.PI * jarijari * (jarijari + apotema));

    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        apotema: apotema,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

