const router = require('express').Router();
const { supplier } = require('../controllers');

// mengeluarkan semua daftar supplier
router.get('/', supplier.getDataSupplier);

// show data berdasarkan parameter 'id'
router.get('/:id', supplier.getDataSupplierById);

// menambah data supplier
router.post('/add', supplier.addDataSupplier);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', supplier.editDataSupplier);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', supplier.deleteDataSupplier);

module.exports = router;