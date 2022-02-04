const articleController = require('../controllers/Article');
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const articlesRoutes = express.Router();

articlesRoutes.get(
    "/getListArticles/:amount",
    asyncWrapper(articleController.getListArticles)
)

articlesRoutes.get(
    "/getListArticles/:category",
    asyncWrapper(articleController.getArticlesByCategory)
)

articlesRoutes.get(
    "/getArticle/:id",
    asyncWrapper(articleController.getArticle)
)

module.exports = articlesRoutes