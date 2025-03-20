'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { emailLogin, signup } from "./actions";



export default function LoginPage() {
    
  return (
    <main className="bg-[#000000] h-screen flex items-center justify-center p-10 text-white">
      <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-2 box-animate">
          <div className="bg-black text-white flex items-center justify-center flex-col ">
              <div className="my-4">
                  <h1 className="text-3xl font-semibold">Login</h1>
                  <p className="mt-2 text-xs text-slate-400">Acceder a votre application</p>
              </div>

              <form>
                  <Button className="flex mb-4 items-center w-full gap-4 bg-transparent rounded-full" variant={"outline"}>
                      <FcGoogle />
                      Sign in with google
                  </Button>
                  <Label htmlFor="email">Email*</Label>
                  <Input className="mt-2 mb-4 bg-transparent rounded-full" type="email" id="email" placeholder="Email" name="email" required />

                  <Label htmlFor="password">Password*</Label>
                  <Input className="mt-2 mb-4 bg-transparent rounded-full" type="password" id="password" placeholder="Password" name="password" required />

                  <Button formAction={emailLogin} className="w-full mt-6 bg-indigo-700">Login</Button>
                  <div className="mt-4 text-center text-sm">
                    <Button formAction={signup} form="login-form" className="underline">Sign Up</Button>
                  </div>
              </form>
              <p className="mt-4 text-xs text-slate-200">@2025 All right reserved</p>
          </div>
          <div className="relative hidden md:block">
              <Image className="object-cover" fill={true} src={"/bg.jpg"} alt="Background image" />
          </div>
        </div>
    </main>
  );
}
