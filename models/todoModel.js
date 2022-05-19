const supabase = require('./supabase');

async function create(todo) {
  const { data, error } = await supabase.from('Todos').insert([{ todo }]);

  if (error) throw new Error(error);

  return data;
}

async function getAll() {
  const { data, error } = await supabase.from('Todos').select('id, todo, finished');

  if (error) throw new Error(error);

  return data;
}

module.exports = { create, getAll };
