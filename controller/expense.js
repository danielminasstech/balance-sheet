const models = require('../models/index');

exports.findById = async function(req,res,next){
  const id_expense = req.params.id_expense;
  try{
    const expense = await models.expenses.findByPk(id_expense)
    return res.json(expense);
  } catch(err){
    return res.send(err)
  }
}

exports.findAll = async function(req,res,next){
  try {
    const expense = await models.expenses.findAll()
    return res.json(expense);
  } catch(err){
    return res.send(err)
  }
}

exports.create =  async (req,res,next) => {
  const received_expense = req.body;
  try {
    const expense = await models.expenses.create(received_expense)
    return res.json(expense);
  } catch(err){
    return res.send(err)
  }
}

exports.update =  async (req,res,next) => {
  const id_expense = req.params.id_expense;

  const received_expense = req.body;
  try {
    const expense = await models.expenses.update(received_expense, { where : {id_expense : id_expense}})
    return res.json(expense);
  } catch(err){
    return res.send(err)
  }
}

exports.destroy =  async (req,res,next) => {
  const id_expense = req.params.id_expense;
  try {
    const expense = await models.expenses.destroy({where:{id_expense: id_expense}})
    return res.json(expense);
  } catch(err){
    return res.send(err)
  }
}
