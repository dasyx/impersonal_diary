<script>
  import { createClient } from "@supabase/supabase-js";

  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  async function signup() {
    const { error } = await supabase.from("users").insert({
      username: "david",
    });
  }
  signup();
</script>

<button type="button" id="btn">Sign Up</button>
