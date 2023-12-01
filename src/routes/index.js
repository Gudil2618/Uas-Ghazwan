const router = require('express').Router();
// another route below this line
const obatRoute = require('./obat');
const supplierRoute = require('./supplier');
const pelangganRoute = require('./pelanggan');
const karyawanRoute = require('./karyawan');
const faktur_supplyRoute = require('./faktur_supply');
const faktur_penjualanRoute = require('./faktur_penjualan');




router.use('/obat', obatRoute);
router.use('/supplier', supplierRoute);
router.use('/pelanggan', pelangganRoute);
router.use('/karyawan', karyawanRoute);
router.use('/faktur_supply', faktur_supplyRoute);
router.use('/faktur_penjualan', faktur_penjualanRoute);
// other route
module.exports = router;