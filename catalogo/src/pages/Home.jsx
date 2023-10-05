import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {

    const res = await fetch()
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {

    const topratedURL = `${moviesURL}top_rated?${apiKey}`;

    console.log(topratedURL);
  }, [])

  return 
}

export default Home
