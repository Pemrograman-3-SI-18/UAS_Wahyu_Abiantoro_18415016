const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    kodekaryawan:{
        type: String
    },
    nama:{
        type: String
    },
    jadwalmasuk:{
        type: String
    },
    jadwallibur:{
        type: String
    },
    tahunmasuk:{
        type: String
    },
    totalgaji:{
        type: String
    },
    gambar:{
        type: String
    }

});

module.exports = mongoose.model('servis',userSchema)
