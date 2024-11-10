const User = require("../../models/user");

const addUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ error: "User with this email already exists" });
    }
    const user = new User({ name, email, age });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
module.exports = { addUser, getUser };
