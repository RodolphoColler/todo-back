const Service = require('../services');

async function create(req, res) {
  const { todo } = req.body;
  const { code, result, error } = await Service.create(todo);

  if (error) return res.status(code).json({ message: error });

  return res.status(code).json(result);
}

module.exports = { create };
