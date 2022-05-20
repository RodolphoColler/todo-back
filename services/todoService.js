const Model = require('../models');

async function create(todo) {
  try {
    const createdTodo = await Model.create(todo);
    return { code: 201, result: createdTodo };
  } catch (error) {
    return { error: error.message, code: 500 };
  }
}

async function getAll() {
  try {
    const todos = await Model.getAll();
    return { code: 200, result: todos };
  } catch (error) {
    return { error: error.message, code: 500 };
  }
}

module.exports = { create, getAll };
