'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
  const notify = () => toast("Wow so easy!");
  return (
   <section>
    <h1 >
      HI
    </h1>
    <Button onClick={notify} className="text-white"  >Click me</Button>
    <ToastContainer />
   </section>
  );
}
