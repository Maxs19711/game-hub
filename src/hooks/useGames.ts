import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform}[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => 
  useData<Game>(
    '/games', 
    //6. game hook passes the selected genre as a query string parameter to the data hook
    //7. we had to open up our data hook and make it more flexible. 
    //   so now, we can pass query string parameters or request data to our request objects.
    {params: {genres: selectedGenre?.id}},
    
    // 8. also added array of dependencies. 
    // so if any of these dependencies changes, 
    // our effect will rerun and refresh the data from the server
    [selectedGenre?.id]
  )

export default useGames;