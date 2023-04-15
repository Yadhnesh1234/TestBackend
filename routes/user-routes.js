const express=require('express');
const { getAllUsers,addUser, updateUser, deleteUser, getOneUser } = require('../controller/user-controller');

const router=express.Router();

router.get("/user",getAllUsers)
router.post("/user",addUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.get("/:id",getOneUser)
module.exports=router