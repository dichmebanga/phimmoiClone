import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './FilmItem.module.scss';
const cx = classNames.bind(styles);

function FilmItem({ data, slug, parentCallback }) {
    const handleClickSlug = () => {
        parentCallback(slug);
    };
    return (
        <Link to={'/detailMovie'}>
            <li onClick={handleClickSlug} className={cx('movie-item')}>
                <p className={cx('movie-item')}>
                    {data.name}
                    <br />
                    <span className={cx('movie-title')}>{data.origin_name}</span>
                </p>
            </li>
        </Link>
    );
}

export default FilmItem;
