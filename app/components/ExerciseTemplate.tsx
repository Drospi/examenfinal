import React from 'react'
import imagen1 from '@/public/imagen1.png'
import imagen2 from '@/public/imagen2.png'
import imagen3 from '@/public/imagen3.png'
import imagen4 from '@/public/imagen4.jpg'
import Titulo from "./Titulo";
import ExerciseCard from "./ExcerciseCard";

const ExerciseTemplate = () => {
  return (
    <div>
        <Titulo />
      <ExerciseCard producto={{imagen: imagen1, title: "Puxada frontal", series: "3 series x 12 repeticiones"}} />
      <ExerciseCard producto={{imagen: imagen2, title: "Remada curvada", series: "4 series x 10 repeticiones"}} />
      <ExerciseCard producto={{imagen: imagen3, title: "Remada unilateral", series: "4 series x 10 repeticiones"}} />
      <ExerciseCard producto={{imagen: imagen4, title: "Levantamento terra", series: "4 series x 8 repeticiones"}} />

    </div>
  )
}

export default ExerciseTemplate