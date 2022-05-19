const Model = require('../models');

async function create(todo) {
  try {
    const createdTodo = await Model.create(todo);
    return { code: 201, result: createdTodo };
  } catch (error) {
    return { error, code: 400 };
  }
}

async function getAll() {
  try {
    const todos = await Model.getAll();
    return { code: 201, result: todos };
  } catch (error) {
    return { error, code: 400 };
  }
}

module.exports = { create, getAll };
