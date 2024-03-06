import PropTypes from 'prop-types';
import {Button} from 'flowbite-react'

export default function Card({movie}) {
    console.log(movie);
  return (
    <div className="bg-slate-100 h-auto min-h-screen ">
    <div className=" mx-10 py-10">
     <div className=" sm:pl-72 md:pl-60 max-w-7xl mx-auto grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-5 xl:grid-cols-4">
       {movie.map((m)=>(
         <div className="bg-white p-8 shadow-xl rounded-xl relative " key={m.imdbID}>
            <div className="mx-2 text-xl font-bold">{m.Year}</div>
            <div className="h-auto "><img src={m.Poster} className='rounded-lg shadow-xl'alt="" /></div>
            <div className="m-4">{m.Title}</div>
            <Button className='w-5/6 absolute bottom-2 lg:left-5 right-5' gradientDuoTone='purpleToPink'>Read More..</Button>
        
         </div>
       ))}
     </div>
   </div>

  </div>
  )
}

Card.propTypes = {
   movie: PropTypes.any
};