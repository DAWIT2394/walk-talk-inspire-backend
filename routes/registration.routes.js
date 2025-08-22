const express = require('express');
const {
  createRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration
} = require('../controllers/registration.controller');

const router = express.Router();

router.post('/', createRegistration);
router.get('/', getRegistrations);
router.put('/:id', updateRegistration);   // 🔹 Edit/Update
router.delete('/:id', deleteRegistration); // 🔹 Delete

module.exports = router;
