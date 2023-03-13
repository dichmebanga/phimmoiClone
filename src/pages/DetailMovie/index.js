import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DetailMovie.module.scss';
import Sidebar from '~/components/Layout/components/Sidebar';
import DetailMovieItem from '~/components/Layout/DetailMovieItem';
import IntroMovie from '~/components/Layout/IntroMovie/IntroMovie';
import Footer from '~/components/Layout/components/Footer/Footer';
import { useContext, useEffect, useState } from 'react';
import { ContextFilm } from 'src/Context/Context';
import axios from 'axios';

const cx = classNames.bind(styles);

function DetailMovie() {
    const [state] = useContext(ContextFilm);
    const film = state.slug;
    const [detailOneMovie, setDetailOneMovie] = useState({});
    const [downloadMovie, setDownloadMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const results = await axios(`https://ophim1.com/phim/${film}`);
            const result = results.data.movie;
            const download = results.data.episodes[0].server_data;
            setDetailOneMovie(result);
            setDownloadMovie(download);
        };
        fetchData();
    }, [film]);
    console.log('[DetailMovie]', state.slug);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <IntroMovie movie={detailOneMovie} />
            <div className={cx('container')}>
                <div className={cx('detail-movie')}>
                    <DetailMovieItem movie={detailOneMovie} download={downloadMovie} />
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default DetailMovie;
