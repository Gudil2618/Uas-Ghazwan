const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataFaktur_supply = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM faktur_supply", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

const getDataFaktur_supplyById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM faktur_supply WHERE id = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}


const addDataFaktur_supply = async (req, res) => {
    let data = {
        tanggal: req.body.tanggal,
        id_karyawan: req.body.id_karyawan,
        id_supplier: req.body.id_supplier,
        id_obat: req.body.id_obat,
        jumlah_obat: req.body.jumlah_obat,
        total: req.body.total,
        pajak: req.body.pajak,
        total_bayar: req.body.total_bayar
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO faktur_supply SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

const editDataFaktur_supply = async (req, res) => {
    let id = req.params.id;
    let data = {
        tanggal: req.body.tanggal,
        id_karyawan: req.body.id_karyawan,
        id_supplier: req.body.id_supplier,
        id_obat: req.body.id_obat,
        jumlah_obat: req.body.jumlah_obat,
        total: req.body.total,
        pajak: req.body.pajak,
        total_bayar: req.body.total_bayar
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE faktur_supply SET ? where id = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

const deleteDataFaktur_supply = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM faktur_supply where id = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}


module.exports = {
    getDataFaktur_supply,
    getDataFaktur_supplyById,
    addDataFaktur_supply,
    editDataFaktur_supply,
    deleteDataFaktur_supply
}