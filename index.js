const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express() //implementasi express
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())
// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku", // menampilkan data 
        method: req.method, // menampilkan method 
        code: res.statusCode // menampilkan response code 
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    // :name dan :age diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kecepatan" dengan method POST
app.post("/kecepatan", (req,res) => {
    // menampung data dan mengkonversi menjadi tipe numerik
    let jarak = Number(req.body.jarak) // mengambil nilai pada body jarak
    let waktu = Number(req.body.waktu) // mengambil nilai pada body waktu

    //menghitung nilai kecepatan
    let kecepatan = jarak / waktu

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarak: jarak,
        waktu: waktu,
        kecepatan: kecepatan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/biodata", (req,res) => {
    let nama =  String(req.body.nama)
    let alamat =  String(req.body.alamat)
    let jeniskelamin =  String(req.body.jeniskelamin)
    let notelepon =  String(req.body.notelepon)

    let response = {
        nama: nama,
        alamat: alamat,
        jeniskelamin: jeniskelamin,
        notelepon: notelepon
    }

    res.json(response)
})

