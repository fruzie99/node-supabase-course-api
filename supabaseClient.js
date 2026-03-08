require("dotenv").config();
const {createClient}=require("@supabase/supabase-js");

const supabase= createClient(process.env.VITE_SUPABASE_URL,
process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY);

module.exports=supabase;


