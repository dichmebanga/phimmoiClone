import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { ApiContext } from '~/Context/ApiContext';
import styles from './Sidebar.module.scss';
import TrailerMovieItem from './TrailerMovieItem';
import { ContextFilm, setSlugMovie } from 'src/Context/Context';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    const { resulComingtMovie, resultTrendingMovie } = useContext(ApiContext);
    const [state, dispatch] = useContext(ContextFilm);

    const Date = ['Ngày', 'Tuần', 'Tháng'];
    const [active, setActive] = useState('Ngày');
    let count = 1;
    const callbackFunction = (childData) => {
        dispatch(setSlugMovie(childData));
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('capital')}>
                        <span className={cx('uppercase')}>Phim sắp chiếu</span>
                    </div>
                    <ul className={cx('list-film')}>
                        {resulComingtMovie.map((movie) => (
                            <TrailerMovieItem
                                data={movie}
                                key={movie._id}
                                slug={movie.slug}
                                parentCallback={callbackFunction}
                            />
                        ))}
                    </ul>
                    <div className={cx('capital')}>
                        <span className={cx('uppercase')}>Trending</span>
                    </div>
                    <div className={cx('tabs')}>
                        {Date.map((date) => (
                            <div
                                key={date}
                                className={cx('tab', active === date ? 'active' : '')}
                                onClick={() => setActive(date)}
                            >
                                {date}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('container1')}>
                    <ul className={cx('list-film')}>
                        {resultTrendingMovie.map((movie) => (
                            <li onClick={() => callbackFunction(movie.slug)} key={movie._id} className={cx('item')}>
                                <span className={cx('number-rank')}>{count++}</span>
                                <Link className={cx('texts')} to="/detailMovie">
                                    {movie.name}
                                </Link>
                                <div className={cx('count-view')}>{`${Math.floor(
                                    Math.random() * 1000,
                                )} lượt quan tâm`}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('capital')}>
                    <span className={cx('uppercase')}>Từ khoá nổi bật </span>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
