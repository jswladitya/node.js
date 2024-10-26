//controller , model ke ander modifications karta he
const User = require('../models/user.models.js')

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    //user ki id = hamari bheji hui id 
    if (!user) return res.status(404).json({ error: "user not found" })
    return res.json(user)
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" })
    // hamne lastname yaha hardcode kia we can get it from frontend
    return res.json({ status: "success" })
}

async function handleDeleteUserById(req, res) {
    await User.deleteOne(req.params.id)
    return res.json({ status: "success" })
}

async function handleCreateNewUser(req, res) {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender) {
        return res.status(400).json({ msg: "all fields are required" })
    }

    const result = await User.create({
        //we gonna create new entry in db
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender,
    })

    console.log("result", result);

    return res.status(201).json({ msg: "success", id: result._id })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}