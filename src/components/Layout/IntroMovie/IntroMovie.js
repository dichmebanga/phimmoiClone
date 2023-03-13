import classNames from 'classnames/bind';
import styles from './IntroMovie.module.scss';

const cx = classNames.bind(styles);

function IntroMovie({ movie }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('movie')}>
                <ul className={cx('breadcrumbs')}>
                    <li>
                        <span>Mọt phim</span>
                    </li>
                    <li>
                        {movie.category && movie.category.map((film, index) => <span key={index}> {film.name} </span>)}
                    </li>
                    <li className={cx('active')}>{movie && movie.name}</li>
                </ul>
            </div>
        </div>
    );
}

export default IntroMovie;
