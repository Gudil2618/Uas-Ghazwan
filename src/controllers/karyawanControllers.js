const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataKaryawan = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM karyawan", function (error, rows) {
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

const getDataKaryawanById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM karyawan WHERE id = ?";
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


const addDataKaryawan = async (req, res) => {
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        kota: req.body.kota,
        status: req.body.status,
        no_telepon: req.body.no_telepon
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO karyawan SET ?';
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

const editDataKaryawan = async (req, res) => {
    let id = req.params.id;
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        kota: req.body.kota,
        status: req.body.status,
        no_telepon: req.body.no_telepon
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE karyawan SET ? where id = ?';
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

const deleteDataKaryawan = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM karyawan where id = ?';
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
    getDataKaryawan,
    getDataKaryawanById,
    addDataKaryawan,
    editDataKaryawan,
    deleteDataKaryawan
}