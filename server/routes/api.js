const express = require("express");
const articlesRoutes = require('./Article');

const apiRoutes = express.Router();

apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
apiRoutes.use('/articles', articlesRoutes);

module.exports = apiRoutes;