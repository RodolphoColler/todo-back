const supabase = require('./supabase');

async function create(todo) {
  const { data, error } = await supabase.from('Todos').insert([{ todo }]);

  if (error) throw new Error(error);

  return data;
}

module.exports = { create };
