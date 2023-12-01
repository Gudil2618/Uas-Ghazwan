const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataFaktur_penjualan = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM faktur_penjualan", function (error, rows) {
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

const getDataFaktur_penjualanById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM faktur_penjualan WHERE id = ?";
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


const addDataFaktur_penjualan = async (req, res) => {
    let data = {
        tanggal: req.body.tanggal,
        id_pelanggan: req.body.id_pelanggan,
        id_karyawan: req.body.id_karyawan,
        id_obat: req.body.id_obat,
        jumlah: req.body.jumlah,
        total: req.body.total,
        pajak: req.body.pajak,
        total_bayar: req.body.total_bayar
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO faktur_penjualan SET ?';
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

const editDataFaktur_penjualan = async (req, res) => {
    let id = req.params.id;
    let data = {
        tanggal: req.body.tanggal,
        id_pelanggan: req.body.id_pelanggan,
        id_karyawan: req.body.id_karyawan,
        id_obat: req.body.id_obat,
        jumlah: req.body.jumlah,
        total: req.body.total,
        pajak: req.body.pajak,
        total_bayar: req.body.total_bayar
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE faktur_penjualan SET ? where id = ?';
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

const deleteDataFaktur_penjualan = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM faktur_penjualan where id = ?';
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
    getDataFaktur_penjualan,
    getDataFaktur_penjualanById,
    addDataFaktur_penjualan,
    editDataFaktur_penjualan,
    deleteDataFaktur_penjualan
}