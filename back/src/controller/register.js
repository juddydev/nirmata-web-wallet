const register = async (req, res) => {
    console.log(req.body);
    return res.json({ message: "Register successful" });
};

const login = async (req, res) => {
    console.log(req.body);
    return res.json({ message: "Login successful" });
};

module.exports = {
    register,
    login,
};
