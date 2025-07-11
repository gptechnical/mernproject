const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.users);
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            return res.status(403).json({ message: "Access denied User is not an admin." });
        }
        next();
        // res.status(200).json({ msg: req.user.isAdmin });
    } catch (error) {
       next(error); 
    }
};

module.exports = adminMiddleware;