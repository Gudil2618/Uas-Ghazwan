const router = require('express').Router();
const { faktur_penjualan } = require('../controllers');

// mengeluarkan semua daftar faktur_penjualan
router.get('/', faktur_penjualan.getDataFaktur_penjualan);

// show data berdasarkan parameter 'id'
router.get('/:id', faktur_penjualan.getDataFaktur_penjualanById);

// menambah data faktur_penjualan
router.post('/add', faktur_penjualan.addDataFaktur_penjualan);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', faktur_penjualan.editDataFaktur_penjualan);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', faktur_penjualan.deleteDataFaktur_penjualan);

module.exports = router;