import IconLikePlugin from '~/plugin/IconLikePlugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import SliderMovie from '../SliderMovie';
import styles from './DetailMovieItem.module.scss';
import classNames from 'classnames/bind';
import TagMovie from '../TagMovie/TagMovie';
import StarRating from '../StarRating/StarRating';
import { Link } from 'react-router-dom';
import { Alert } from 'bootstrap';
const cx = classNames.bind(styles);

function DetailMovieItem({ movie, download }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('blockbody')}>
                <div className={cx('info')}>
                    <div className={cx('poster')}>
                        <img alt="#" src={movie.thumb_url} />
                        <ul className={cx('buttons')}>
                            <li>
                                <Link
                                    onClick={() => alert('Tạm thời chúng tôi chưa cho phép download !!!')}
                                    className={cx('btn', 'btn-see', 'btn-success')}
                                >
                                    Tải phim
                                </Link>
                            </li>
                            <li>
                                <Link to={'/watchingMovie'} className={cx('btn', 'btn-see', 'btn-danger')}>
                                    Xem Phim
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('text')}>
                        <h1>
                            <span className={cx('title')}>{movie.name}</span>
                        </h1>
                        <h2>
                            <span className={cx('real-name')}>{movie.origin_name}</span>
                        </h2>
                        <div className={cx('slimScrollDiv')}>
                            <div className={cx('dinfo')}>
                                <dl className={cx('col')}>
                                    <dt>Trạng Thái : </dt>
                                    <dd className={cx('film-status')}>{movie.episode_current}</dd>

                                    <dt>Thời lượng : </dt>
                                    <dd>{movie.time} </dd>

                                    <dt>Chất lượng : </dt>
                                    <dd>{movie.quality} </dd>

                                    <dt>Số tập :</dt>
                                    <dd>{movie.episode_total} </dd>

                                    <dt>Tình trạng: </dt>
                                    <dd>{movie.episode_current}</dd>

                                    <dt>Ngôn ngữ : </dt>
                                    <dd>{movie.lang}</dd>

                                    <dt>Năm Sản Xuất :</dt>
                                    <dd>{movie.year}</dd>

                                    <dt>Thể Loại : </dt>
                                    <dd>
                                        {movie.category?.map((category, index) => (
                                            <p key={index}>
                                                - {category.name === '' ? 'Đang cập nhật' : category.name}
                                            </p>
                                        ))}
                                    </dd>
                                    <dt>Quốc Gia :</dt>
                                    <dd>
                                        {movie.country?.map((country, index) => (
                                            <p key={index}>- {country.name === '' ? 'Đang cập nhật' : country.name} </p>
                                        ))}
                                    </dd>

                                    <dt>Đạo Diễn : </dt>
                                    <dd>
                                        {movie.director?.map((director, index) => (
                                            <p key={index}>- {director === '' ? 'Đang cập nhật' : director} </p>
                                        ))}
                                    </dd>

                                    <dt>Diễn Viên :</dt>
                                    <dd>
                                        {movie.actor?.map((actor, index) => (
                                            <p key={index}> - {actor === '' ? 'Đang cập nhật' : actor} </p>
                                        ))}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className={cx('btn-groups')}>
                            <IconLikePlugin />
                            <div className={cx('collum')}>
                                <StarRating />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('detail')}>
                    <div className={cx('tabs-content')}>
                        <h3 className={cx('heading')}> Nội dung phim</h3>
                        <div className={cx('tab')}>{movie.content?.replace('<p>', '').replace('</p>', '')}</div>
                    </div>

                    <TagMovie />
                </div>

                <div className={cx('film-note')}>LỊCH CHIẾU: Hoãn chiếu trên Mọt Phim. </div>
            </div>

            <div className={cx('list-film')}>
                <h2 className={cx('title-box')}>
                    <FontAwesomeIcon icon={faStar} className={cx('star-item')} />
                    <p> Phim đề cử </p>
                </h2>
                <SliderMovie
                    toggle={'none'}
                    hide={true}
                    slidesToShow={4}
                    slidesToScroll={1}
                    autoplaySpeed={false}
                    width={680}
                    speed={700}
                />
            </div>
        </div>
    );
}

export default DetailMovieItem;
