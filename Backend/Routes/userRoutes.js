const express = require('express');
const router = express.Router();
const {
    updateUser,
    deleteUser,
    followUser,
    unfollowUser,
    getUser,
} = require("../Controllers/userControllers");

router.put("/:id", updateUser); //update user
router.delete("/:id", deleteUser); //delete user
router.put("/:id/follow", followUser); //follow user
router.put("/:id/unfollow", unfollowUser); //unfollow user
router.get("/:id", getUser); //get a user

module.exports = router;
