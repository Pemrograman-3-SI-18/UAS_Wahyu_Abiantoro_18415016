const servis = require('../model/Servis.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataServis = (data, gambar) =>
    new Promise(async (resolve, reject) =>{

        const servisBaru = new servis({
            kodekaryawan: data.kodekaryawan,
            nama: data.nama,
            jadwalmasuk: data.jadwalmasuk,
            jadwallibur: data.jadwallibur,
            tahunmasuk: data.tahunmasuk,
            totalgaji: data.totalgaji,
            gambar: gambar
        })

        await servis.findOne({kodekaryawan: data.kodekaryawan})
            .then(servis => {
                if (servis){
                    reject (response.commonErrorMsg("Kode Karyawan Sudah Digunakan"))
                } else {
                    servisBaru.save()
                        .then(r => {
                            resolve(response.commonSuccesMsg('Berhasil Menginput Data'))
                        }).catch(err => {
                        reject (response.commonErrorMsg('Mohon Maaf Gagal Input Data'))
                    })
                }
            }).catch(err => {
                reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
            })
    })

exports.lihatDataServis = () =>
    new Promise(async (resolve, reject) => {
        await servis.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.lihatDetailDataServis = (kodekaryawan) =>
    new Promise(async (resolve, reject) => {
        await servis.findOne({kodekaryawan: kodekaryawan})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.updateServis = (id, data, gambar) =>
    new Promise(async (resolve, reject) =>{
        await servis.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodekaryawan: data.kodekaryawan,
                    nama: data.nama,
                    jadwalmasuk: data.jadwalmasuk,
                    jadwallibur: data.jadwallibur,
                    tahunmasuk: data.tahunmasuk,
                    totalgaji: data.totalgaji,
                    gambar: gambar
                }
            }
        ) .then(servis => {
            resolve(response.commonSuccesMsg('Berhasil Mengubah Data'))
        }) .catch(err => {
            reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.hapusservis = (_id) =>
    new  Promise(async (resolve, reject) => {
        await servis.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonSuccesMsg('berhasil Menghapus Data'))
            }) .catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalhan Pada Server Kami'))
            })
    })
