const router = require('express').Router();
const { pelanggan } = require('../controllers');

// mengeluarkan semua daftar pelanggan
router.get('/', pelanggan.getDataPelanggan);

// show data berdasarkan parameter 'id'
router.get('/:id', pelanggan.getDataPelangganById);

// menambah data pelanggan
router.post('/add', pelanggan.addDataPelanggan);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', pelanggan.editDataPelanggan);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', pelanggan.deleteDataPelanggan);

module.exports = router;