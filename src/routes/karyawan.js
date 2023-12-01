const router = require('express').Router();
const { karyawan } = require('../controllers');

// mengeluarkan semua daftar karyawan
router.get('/', karyawan.getDataKaryawan);

// show data berdasarkan parameter 'id'
router.get('/:id', karyawan.getDataKaryawanById);

// menambah data karyawan
router.post('/add', karyawan.addDataKaryawan);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', karyawan.editDataKaryawan);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', karyawan.deleteDataKaryawan);

module.exports = router;