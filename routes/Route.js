const express=require('express')
const { createBuyerDue, BuyerDuelist, buyerdueSearch } = require('../controllers/BuyerDue')
const { createAdminProfile, updateAdminProfile } = require('../controllers/AdminProfile')
const { OrderCreate, getallorderdata } = require('../controllers/reports/Order')
const { createpurchaseReport, getallpurchasereport } = require('../controllers/reports/PurchaseReport')
const { createSalesReport, getallsalesreport } = require('../controllers/reports/SalesReport')
const { createSupplierDue, getallSupplierDue } = require('../controllers/reports/SupplierDue')
const { createTransaction, getallTransaction } = require('../controllers/reports/Transaction')
const { createSample, getallsampledata } = require('../controllers/Sample/Sample')

const router=express.Router()






// sample file

router.post('/createsample',createSample)
router.get('/getallsample',getallsampledata)
router.get('/searchsample')



// Report folder router

router.post('/createbuyerdue',createBuyerDue)
router.get('/getallbuyerlist',BuyerDuelist)
router.get('/buyerduesearch',buyerdueSearch)
router.post('/super-admin',createAdminProfile)
router.put('/update-admin-profile/:_id',updateAdminProfile)
router.post('/createorder',OrderCreate)
router.get('/getallorderdata',getallorderdata)
router.post('/createpuchasereport',createpurchaseReport)
router.get('/getallpurchasereport',getallpurchasereport)
router.post('/createsalesreport',createSalesReport)
router.get('/getallsalesreport',getallsalesreport)
router.post('/createsupplierdue',createSupplierDue)
router.get('/getallSupplierDue',getallSupplierDue)
router.post('/createtransaction',createTransaction)
router.get('/getalltransaction',getallTransaction)













module.exports=router