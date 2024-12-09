function auth(req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect("/usuarios/login");
    }
}

module.exports = auth;