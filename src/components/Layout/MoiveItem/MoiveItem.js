import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stylest from './MoiveItem.module.scss';
const cx = classNames.bind(Stylest);

function MoiveItem({ hide = false, slug, parentCallback, data }) {
    const [detailOneMovie, setDetailOneMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const results = await axios(`https://ophim1.com/phim/${slug}`);
            const result = results.data.movie;

            setDetailOneMovie(result);
        };

        fetchData();
    }, []);
    const handleClickSlug = () => {
        parentCallback(slug);
    };
    return (
        <Link to={'/detailMovie'}>
            <div onClick={handleClickSlug} className={cx('film-items')}>
                <li className={cx('items', `${hide && 'itemsOfList'}`)}>
                    <span className={cx('lable')}>{detailOneMovie.episode_current || 'Full'}</span>
                    <img
                        className={cx('img-film', `${hide && 'img-film-ofList'}`)}
                        src={`http://img.ophim1.cc/uploads/movies/${data.thumb_url}`}
                        alt={'img'}
                    />
                    <i className={cx('icon-play')}></i>
                    <div className={cx('text')}>
                        <p className={cx('title', `${hide && 'title-OfList'}`)}>{data.name}</p>
                    </div>
                </li>
            </div>
        </Link>
    );
}

export default MoiveItem;
