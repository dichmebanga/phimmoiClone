import classNames from 'classnames/bind';
import MoiveItem from '../components/MoiveItem/MoiveItem';
import Stylest from './Content.module.scss';
import { useState, useContext } from 'react';
import { ContextFilm, setSlugMovie } from '~/context/Context';
import { useApiGetCategory } from '~/hooks/useApiGetCategory';
import { API_ENDPOINTS } from '~/utils/apiClient';
const cx = classNames.bind(Stylest);

function Content() {
    const [endPoint, setEndPoint] = useState(API_ENDPOINTS.SERIES);
    const movieSeries = useApiGetCategory(endPoint);
    const movieCartoon = useApiGetCategory(API_ENDPOINTS.CARTOON);
    const movieTvShows = useApiGetCategory(API_ENDPOINTS.TVSHOWS);
    const [active, setActive] = useState('Phim Bộ Mới Cập Nhật');
    const [, dispatch] = useContext(ContextFilm);
    const callbackFunction = (childData) => {
        dispatch(setSlugMovie(childData));
    };
    const CategoryFilm = ['Phim Bộ Mới Cập Nhật', 'Phim Lẻ Mới Cập Nhật', 'Phim Đã Hoàn Thành'];
    const handleClick = (film) => {
        setActive(film);
        if (film === 'Phim Bộ Mới Cập Nhật') setEndPoint(API_ENDPOINTS.SERIES);
        if (film === 'Phim Lẻ Mới Cập Nhật') setEndPoint(API_ENDPOINTS.TRENDING);
        if (film === 'Phim Đã Hoàn Thành') setEndPoint(API_ENDPOINTS.COMPELETE);
    };
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    {CategoryFilm.map((film) => (
                        <p
                            key={film}
                            className={cx('tab', active === film ? 'active' : '')}
                            onClick={() => handleClick(film)}
                        >
                            {film}
                        </p>
                    ))}
                </div>

                <div className={cx('list')}>
                    {movieSeries.data?.slice(0, 16).map((movie) => (
                        <MoiveItem
                            parentCallback={callbackFunction}
                            slug={movie.slug}
                            key={movie._id}
                            data={movie}
                            hide={true}
                        />
                    ))}
                </div>

                <div className={cx('title')}>
                    <p className={cx('tab', `active`)}>Phim Hoạt Hình</p>
                </div>

                <div className={cx('list')}>
                    {movieCartoon.data?.slice(0, 16).map((movie) => (
                        <MoiveItem
                            parentCallback={callbackFunction}
                            key={movie._id}
                            data={movie}
                            slug={movie.slug}
                            hide={true}
                        />
                    ))}
                </div>

                <div className={cx('title')}>
                    <p className={cx('tab', `active`)}>Được Yêu Thích</p>
                </div>
                <div className={cx('list')}>
                    {movieTvShows.data?.slice(0, 16).map((movie) => (
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
        </>
    );
}

export default Content;
