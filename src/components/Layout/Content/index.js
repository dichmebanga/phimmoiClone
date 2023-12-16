import classNames from 'classnames/bind';
import MoiveItem from '../components/MoiveItem/MoiveItem';
import Stylest from './Content.module.scss';
import { useState, useEffect } from 'react';
import { SkeletonUi } from '../components/Skeleton';
import { useGetCartoon } from '~/hooks/useGetCartoon';
import { useGetTVShows } from '~/hooks/useGetTVShows';
import { useGetCompelete } from '~/hooks/useGetCompelete';
import { useGetSeries } from '~/hooks/useGetSeries';
import { useGetTrending } from '~/hooks/useGetTrending';
const cx = classNames.bind(Stylest);

function Content() {
    const { seriesMovie, seriesLoading } = useGetSeries();
    const { compeleteMovie, compeleteLoading } = useGetCompelete();
    const { trendingMovie, trendingLoading } = useGetTrending();

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const movieCartoon = useGetCartoon();
    const movieTvShows = useGetTVShows();
    const [active, setActive] = useState('Phim Bộ Mới Cập Nhật');

    const CategoryFilm = ['Phim Bộ Mới Cập Nhật', 'Phim Lẻ Mới Cập Nhật', 'Phim Đã Hoàn Thành'];

    useEffect(() => {
        setCategories(seriesMovie);
        setIsLoading(seriesLoading);
    }, [seriesMovie, seriesLoading]);

    const handleClick = (film) => {
        setActive(film);
        if (film === 'Phim Bộ Mới Cập Nhật') {
            setCategories(seriesMovie);
            setIsLoading(seriesLoading);
        } else if (film === 'Phim Lẻ Mới Cập Nhật') {
            setCategories(trendingMovie);
            setIsLoading(trendingLoading);
        } else if (film === 'Phim Đã Hoàn Thành') {
            setCategories(compeleteMovie);
            setIsLoading(compeleteLoading);
        }
    };

    const seeAllMovieClick = () => {
        console.log('vao day')
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
                    <div className={cx('seeall')}>
                        <button className={cx('titlesee')} onClick={seeAllMovieClick}>Xem tấc cả</button>
                    </div>
                </div>

                <div className={cx('list')}>
                    {(isLoading && (
                        <>
                            <SkeletonUi /> <SkeletonUi />
                            <SkeletonUi />
                        </>
                    )) ||
                        categories
                            ?.slice(0, 16)
                            .map((movie) => <MoiveItem slug={movie.slug} key={movie._id} data={movie} hide={true} />)}
                </div>

                <div className={cx('title')}>
                    <p className={cx('tab', `active`)}>Phim Hoạt Hình</p>
                    <div className={cx('seeall')}>
                        <button className={cx('titlesee')} onClick={seeAllMovieClick}>Xem tấc cả</button>
                    </div>
                </div>

                <div className={cx('list')}>
                    {(movieCartoon.isLoading && (
                        <>
                            <SkeletonUi /> <SkeletonUi />
                        </>
                    )) ||
                        movieCartoon.data
                            ?.slice(0, 16)
                            .map((movie) => <MoiveItem key={movie._id} data={movie} slug={movie.slug} hide={true} />)}
                </div>

                <div className={cx('title')}>
                    <p className={cx('tab', `active`)}>Được Yêu Thích</p>
                    <div className={cx('seeall')}>
                        <button className={cx('titlesee')} onClick={seeAllMovieClick}>Xem tấc cả</button>
                    </div>
                </div>
                <div className={cx('list')}>
                    {(movieTvShows.isLoading && (
                        <>
                            <SkeletonUi /> <SkeletonUi />
                        </>
                    )) ||
                        movieTvShows.data
                            ?.slice(0, 16)
                            .map((movie) => <MoiveItem key={movie._id} data={movie} slug={movie.slug} hide={true} />)}
                </div>
            </div>
        </>
    );
}

export default Content;
