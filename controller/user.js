const models = require('../models/index');

exports.findById = async function(req,res,next){
  const id_user = req.params.id_user;
  try{
    const user = await models.users.findByPk(id_user)
    return res.json(user);
  } catch(err){
    return res.send(err)
  }
}

exports.findAll = async function(req,res,next){
  try {
    const user = await models.users.findAll()
    return res.json(user);
  } catch(err){
    return res.send(err)
  }
}

exports.create =  async (req,res,next) => {
  const received_user = req.body;
  try {
    const user = await models.users.create(received_user)
    return res.json(user);
  } catch(err){
    return res.send(err)
  }
}

exports.update =  async (req,res,next) => {
  const id_user = req.params.id_user;

  const received_user = req.body;
  try {
    const user = await models.users.update(received_user,{where: {id_user: id_user}})
    return res.json(user);
  } catch(err){
    return res.send(err)
  }
}

exports.destroy =  async (req,res,next) => {
  const id_user = req.params.id_user;
  try {
    const user = await models.users.destroy({where: {id_user: id_user}})
    return res.json(user);
  } catch(err){
    return res.send(err)
  }
}
