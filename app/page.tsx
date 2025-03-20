import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
      const supabase = await createClient();
    
      const {
        data: { user },
      } = await supabase.auth.getUser();
    
      if (user) {
        return redirect('/todos');
      }
    
  return (
    <div className="text-center">
        <h1 className="font-extrabold p-5 text-center">Accueil</h1>
        <Link href={"/login"} className="text-center" asChild>
          <Button>Aller à la page de connexion</Button>
        </Link>
    </div>
  );
}
