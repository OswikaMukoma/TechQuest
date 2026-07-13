import { supabase } from "./lib/supabase";

export async function testSupabase() {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .limit(1);

  console.log(data);
  console.log(error);
}