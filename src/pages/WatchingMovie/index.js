import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './WatchingMovie.module.scss';
import IntroMovie from 'src/components/Layout/IntroMovie/IntroMovie';
import React, { useContext, useEffect, useState } from 'react';
import PlayVideo from 'src/components/Layout/PlayVideo/PlayVideo';
import SliderMovie from 'src/components/Layout/SliderMovie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import TagMovie from 'src/components/Layout/TagMovie/TagMovie';
import StarRating from 'src/components/Layout/StarRating/StarRating';
import Footer from 'src/components/Layout/components/Footer/Footer';
import { ContextFilm } from 'src/Context/Context';
import Iframe from 'react-iframe';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function WatchingMovie() {
    const [state, dispatch] = useContext(ContextFilm);
    const [movie, setMovie] = useState({});
    const [watchMovie, setWatchMovie] = useState('');
    const [array, setArray] = useState([]);

    const film = state.slug;

    useEffect(() => {
        const fetchData = async () => {
            const results = await axios(`https://ophim1.com/phim/${film}`);
            const result = results.data.movie;
            setMovie(result);
            const totals = results.data.episodes[0].server_data;
            setArray(totals);
            const total = totals[0].link_embed;
            setWatchMovie(total);
        };
        fetchData();
    }, [film]);

    const handleEpisodeFilm = (movie) => {
        setWatchMovie(movie.link_embed);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <IntroMovie movie={movie} />

                <div className={cx('container')}>
                    {/* <PlayVideo /> */}
                    <Iframe width="980px" height="540px" src={watchMovie} loading="eager" styles={{ border: 'none' }} />
                </div>
                <div className={cx('list-episode')}>
                    {array.map((movie) => (
                        <Link
                            onClick={() => handleEpisodeFilm(movie)}
                            key={movie.name}
                            className={cx('episode-item', watchMovie === movie.link_embed ? 'active' : '')}
                        >
                            Tập {movie.name}
                        </Link>
                    ))}
                </div>

                <div className={cx('name')}>
                    <h1 className={cx('name-h1')}>{movie.name}</h1>
                    <h2 className={cx('real-name')}>{movie.origin_name}</h2>
                    <p className={cx('short-description')}>
                        {movie.content?.replace('<p>', '').replace('</p>', '')} [<a href="/">Xem thêm</a>]
                    </p>
                    <div className={cx('collum')}>
                        <StarRating />
                    </div>
                </div>
                <div className={cx('list')}>
                    <div className={cx('list-film')}>
                        <h2 className={cx('title-box')}>
                            <FontAwesomeIcon icon={faStar} className={cx('star-item')} />
                            <p>Có thể bạn muốn xem</p>
                        </h2>
                        <SliderMovie toggle={'none'} autoplaySpeed={false} />
                        <TagMovie />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default WatchingMovie;
