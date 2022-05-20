const supabase = require('./supabase');

const queries = {
  async insert(todo) {
    return supabase.from('Todos').insert([{ todo }]);
  },
  async getAll() {
    return supabase.from('Todos').select('id, todo, finished');
  },
  async deleteTodo(id) {
    return supabase.from('Todos').delete().match({ id });
  },
};

async function create(todo) {
  const { data, error } = await queries.insert(todo);

  if (error) throw new Error(error.message);

  return data;
}

async function getAll() {
  const { data, error } = await queries.getAll();

  if (error) throw new Error(error.message);

  return data;
}

async function deleteTodo(id) {
  const { data, error } = await queries.deleteTodo(id);

  if (error) throw new Error(error.message);

  return data;
}

module.exports = {
  create, getAll, queries, deleteTodo,
};
