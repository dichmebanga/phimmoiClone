/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import MoiveItem from '../../MoiveItem/MoiveItem';
import Stylest from './Content.module.scss';
import { useState, useContext } from 'react';
import { ContextFilm, setSlugMovie } from 'src/Context/Context';
import { ApiContext } from 'src/Context/ApiContext';

const cx = classNames.bind(Stylest);

function Content() {
    const { resultMovie, resultMovieCatoon, resultMovieLike } = useContext(ApiContext);

    const [active, setActive] = useState('Phim Bộ Mới Cập Nhật');

    const [state, dispatch] = useContext(ContextFilm);

    const callbackFunction = (childData) => {
        dispatch(setSlugMovie(childData));
    };

    const CategoryFilm = ['Phim Bộ Mới Cập Nhật', 'Phim Lẻ Mới Cập Nhật', 'Phim Đã Hoàn Thành'];
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <h2 className={cx('title-box')}>
                    {CategoryFilm.map((film) => (
                        <p
                            key={film}
                            className={cx('tab', active === film ? 'active' : '')}
                            onClick={() => setActive(film)}
                        >
                            {film}
                        </p>
                    ))}
                </h2>
            </div>

            <div className={cx('list-movie')}>
                {resultMovie.map((movie) => (
                    <MoiveItem
                        parentCallback={callbackFunction}
                        slug={movie.slug}
                        key={movie._id}
                        data={movie}
                        hide={true}
                    />
                ))}
            </div>

            <h2 className={cx('title-box')}>
                <p className={cx('tab', `active`)}>Phim Hoạt Hình</p>
            </h2>

            <div className={cx('list-movie')}>
                {resultMovieCatoon.map((movie) => (
                    <MoiveItem
                        parentCallback={callbackFunction}
                        key={movie._id}
                        data={movie}
                        slug={movie.slug}
                        hide={true}
                    />
                ))}
            </div>

            <h2 className={cx('title-box')}>
                <p className={cx('tab', `active`)}>Được Yêu Thích</p>
            </h2>
            <div className={cx('list-movie')}>
                {resultMovieLike.map((movie) => (
                    <MoiveItem
                        key={movie._id}
                        parentCallback={callbackFunction}
                        data={movie}
                        slug={movie.slug}
                        hide={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default Content;
