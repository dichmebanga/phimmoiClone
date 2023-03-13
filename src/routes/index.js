// Pages
import Home from '~/pages/Home';
import ListMovie from '~/pages/ListMovie';
import DetailMovie from '~/pages/DetailMovie';
import SearchMovie from '~/pages/SearchMovie';
import WatchingMovie from '~/pages/WatchingMovie';
import { useContext } from 'react';
import { ContextFilm } from 'src/Context/Context';

function Api() {
    // const [state] = useContext(ContextFilm);
    // const film = state.slug;
    // console.log(film);
    const publicRoutes = [
        { path: '/', component: Home, layout: null },
        { path: '/listMovie', component: ListMovie },
        { path: '/detailMovie', component: DetailMovie, layout: null },
        { path: '/searchMovie', component: SearchMovie },
        { path: '/watchingMovie', component: WatchingMovie, layout: null },
    ];

    return publicRoutes;
}

const privateRoutes = [];
const publicRoutes = Api();

export { publicRoutes, privateRoutes };
