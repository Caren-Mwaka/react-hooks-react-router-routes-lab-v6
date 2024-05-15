import Actors from './pages/Actors.js';
import Directors from './pages/Directors.js';
import Movie from './pages/Movie.js'; 
import Home from './pages/Home.js';
import ErrorPage from './pages/ErrorPage'; 

const routes = [
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/Directors",
    element: <Directors />
  },
  {
    path: "/Actors",
    element: <Actors />
  },
  {
    path: "/movies/:id",
    element: <Movie />,
  },
  {
    path: "/bad-route",
    element: <ErrorPage />,
  }
];

export default routes;
