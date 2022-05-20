const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = 'https://nkywwvvjqdepqcxgiyqu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5reXd3dnZqcWRlcHFjeGdpeXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5MDkwMTIsImV4cCI6MTk2ODQ4NTAxMn0.D_CglWLPdi8t_nV-s8x41bOxhyV2tOJ9Z7Dvv_K324A';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
