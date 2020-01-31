const models = require('../models/index');

exports.findById = async function(req,res,next){
    const id_category = req.params.id_category;
    try{
        const category = await models.categories.findByPk(id_category)
        return res.json(category);
    } catch(err){
        return res.send(err)
    }
}

exports.findAll = async function(req,res,next){
    try {
        const category = await models.categories.findAll()
        return res.json(category);
    } catch(err){
        return res.send(err)
    }
}

exports.create =  async (req,res,next) => {
    const received_category = req.body;
    try {
        const category = await models.categories.create(received_category)
        return res.json(category);
    } catch(err){
        return res.send(err)
    }
}

exports.update =  async (req,res,next) => {
    const received_category = req.body;
    const id_category = req.params.id_category;
    try {
        const category = await models.categories.update(received_category , {where: {id_category: id_category}})
        return res.json(category);
    } catch(err){
        return res.send(err)
    }
}

exports.destroy =  async (req,res,next) => {
    const id_category = req.params.id_category;
    try {
        const category = await models.categories.destroy({where: {id_category : id_category}})
        return res.json(category);
    } catch(err){
        return res.send(err)
    }
}
