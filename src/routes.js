import Actors from './pages/Actors.js';
import Directors from './pages/Directors.js';
import Movie from './pages/Movie.js'; // Corrected import
import Home from './pages/Home.js';

const routes = [
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movies/:id",
    element: <Movie />,
  }
];

export default routes;
