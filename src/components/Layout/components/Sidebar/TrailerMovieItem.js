import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import images from 'src/assets/images';

const cx = classNames.bind(styles);
function TrailerMovieItem({ slug, parentCallback, data }) {
    const handleClickSlug = () => {
        parentCallback(slug);
    };
    return (
        <li className={cx('film-item')}>
            <Link to="/detailMovie">
                <img
                    alt=""
                    onClick={handleClickSlug}
                    className={cx('avatar')}
                    src={`http://img.ophim1.cc/uploads/movies/${data.thumb_url}`}
                />
            </Link>
            <div className={cx('title')}>
                <Link onClick={handleClickSlug} to="/detailMovie" className={cx('name')}>
                    {data.name}
                </Link>
                <p className={cx('real-time')}>{data.year}</p>
                <p className={cx('start')}>
                    {/* <img alt="star" src="https://motphimtv.me/theme/images/star-on.png" /> */}
                    <img alt="star" src={images.start} />
                    <img alt="star" src={images.start} />
                    <img alt="star" src={images.start} />
                    <img alt="star" src={images.start} />
                    <img alt="star" src={images.start} />
                </p>
            </div>
        </li>
    );
}

export default TrailerMovieItem;
