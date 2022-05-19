const Service = require('../services');

async function create(req, res) {
  const { todo } = req.body;
  const { code, result, error } = await Service.create(todo);

  if (error) return res.status(code).json({ message: error });

  return res.status(code).json(result);
}

async function getAll(_req, res) {
  const { code, result, error } = await Service.getAll();

  if (error) return res.status(code).json({ message: error });

  return res.status(code).json(result);
}

module.exports = { create, getAll };
