import Image from "next/image";
import ExerciseCard from "./components/ExcerciseCard";
import imagen1 from '@/public/imagen1.png'
import imagen2 from '@/public/imagen2.png'
import imagen3 from '@/public/imagen3.png'
import imagen4 from '@/public/imagen4.jpg'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ExerciseCard producto={{imagen: imagen1, title: "Ejercicio 1", series: "4"}} />

    </div>
  );
}
