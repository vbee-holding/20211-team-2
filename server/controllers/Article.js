const ArticleModel = require('../models/Article');
const httpStatus = require("../utils/httpStatus");

const categoryConvert = {
    'thoi-su': 'Thời sự',
    'the-gioi': 'Thế giới',
    'kinh-te': 'Kinh tế',
    'giai-tri': 'Giải trí',
    'the-thao': 'Thể thao',
    'giao-duc': 'Giáo dục',
    'suc-khoe': 'Sức khỏe',
    'doi-song': 'Đời sống',
    'phap-luat': 'Pháp luật',
    'du-lich': 'Du lịch',
    'cong-nghe': 'Công nghệ',
    'khoa-hoc': 'Khoa học'
}

const articleController = {};

articleController.getListArticles = async (req, res, next) => {
    try {
        const amount = req.params.amount;
        const listArticles = await ArticleModel.find().sort({release_time: -1})
        return res.status(httpStatus.OK).json({
            data: listArticles[:amount]
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

articleController.getArticlesByCategory = async (req, res, next) => {
    try {
        const category = categoryConvert[req.params.category];
        const listArticles = await ArticleModel.find({
            category: category
        }).sort({release_time: -1})
        return res.status(httpStatus.OK).json({
            data: listArticles
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

articleController.getArticle = async (req, res, next) => {
    try {
        const article = await ArticleModel.findById(req.params.id)
        return res.status(httpStatus.OK).json({
            data: article
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = articleController