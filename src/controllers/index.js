const obat = require('./obatControllers')
// other controller
const supplier = require('./supplierControllers')
const pelanggan = require('./pelangganControllers')
const karyawan = require('./karyawanControllers')
const faktur_supply = require('./faktur_supplyControllers')
const faktur_penjualan = require('./faktur_penjualanControllers')



module.exports = {
    obat,
    supplier,
    pelanggan,
    karyawan,
    faktur_supply,
    faktur_penjualan
}