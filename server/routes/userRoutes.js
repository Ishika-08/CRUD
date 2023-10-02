// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/", userController.getAllUsers);
router.post("/createUser", userController.createUser);
router.get("/getUser/:id", userController.getUserById);
router.put("/updateUser/:id", userController.updateUserById);
router.delete("/deleteUser/:id", userController.deleteUserById);

module.exports = router;
