const router = require('express').Router();
const { obat } = require('../controllers');

// mengeluarkan semua daftar obat
router.get('/', obat.getDataObat);

// show data berdasarkan parameter 'id'
router.get('/:id', obat.getDataObatById);

// menambah data obat
router.post('/add', obat.addDataObat);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', obat.editDataObat);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', obat.deleteDataObat);

module.exports = router;