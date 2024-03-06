import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store/reducer";
import Card from "../component/Card";



export default function Home() {
  
  const dispath = useDispatch()
  const {movie} = useSelector((state)=>state.movie)
  useEffect(()=>{
    const fetchMovie=async()=>{
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=202a113f&s=%27thor%27&short=full`)
        if(res.ok){
          const data = await res.json()
      
          dispath(addMovie(data.Search))
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie()
  },[dispath])

  console.log(movie);
  return (
   <div className="">
      <Card movie={movie} />

   </div>
  )
}
