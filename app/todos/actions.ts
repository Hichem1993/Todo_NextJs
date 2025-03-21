"use server"

import { Todo } from "@/types/custom";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
    const supabase = await createClient();
    const text = formData.get("todo") as string | null

    if (!text) {
        throw new Error("Text non valid")
    }

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error("User non connecté")
    }

    const { error } = await supabase.from("todos").insert({
        task: text,
        user_id: user.id
    })

    if (error) {
        throw new Error("Error")
    }

    revalidatePath("/todos");
}


export async function deleteTodo(id: number) {
    const supabase = await createClient();
    const { data: {user} } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("User non connecté")
    }

    const { error } = await supabase.from("todos").delete().match({
        user_id: user.id,
        id: id
    })

    if (error) {
        throw new Error("Error Delete")
    }

    revalidatePath("/todos");
}