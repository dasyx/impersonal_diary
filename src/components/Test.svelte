<script>
  import { createClient } from "@supabase/supabase-js";

  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  async function signup() {
    try {
      const { error } = await supabase.from("users").insert({
        username: "david",
      });
      if (error) {
        console.error("Erreur lors de l'inscription :", error);
      } else {
        console.log("Inscription réussie !");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  }
</script>

<button on:click={signup}>Sign Up</button>
