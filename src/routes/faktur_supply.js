const router = require('express').Router();
const { faktur_supply } = require('../controllers');

// mengeluarkan semua daftar faktur_supply
router.get('/', faktur_supply.getDataFaktur_supply);

// show data berdasarkan parameter 'id'
router.get('/:id', faktur_supply.getDataFaktur_supplyById);

// menambah data faktur_supply
router.post('/add', faktur_supply.addDataFaktur_supply);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', faktur_supply.editDataFaktur_supply);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', faktur_supply.deleteDataFaktur_supply);

module.exports = router;