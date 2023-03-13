import classNames from 'classnames/bind';
import Stylest from './SliderMovie.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext, useRef } from 'react';
import MoiveItem from '../MoiveItem/MoiveItem';
import { ApiContext } from 'src/Context/ApiContext';
import { ContextFilm, setSlugMovie } from 'src/Context/Context';

const cx = classNames.bind(Stylest);
function SliderMovie(props) {
    const {
        toggle = 'block',
        hide,
        autoplaySpeed = true,
        speed = 3000,
        slidesToShow = 5,
        slidesToScroll = 5,
        width,
    } = props;
    const { resultSliderMovie } = useContext(ApiContext);
    const [state, dispatch] = useContext(ContextFilm);
    const callbackFunction = (childData) => {
        dispatch(setSlugMovie(childData));
        console.log(state.slug);
    };

    const ref = useRef(null);
    let settingsNoModules = {
        arrows: false,
        infinite: true,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: autoplaySpeed,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <div className={cx('list-film')} style={{ display: `${toggle}` }}>
                <div className={cx('list-film-title')}>
                    <h2 className={cx('title-box')}>
                        <p className={cx('tophot')}>PHIM HOT</p>
                    </h2>
                </div>
            </div>

            <div className={cx('wrapper')} style={{ width: `${width}px` }}>
                <div className={cx('slideshow-arrow', 'Slideshow_prev')} onClick={() => ref?.current?.slickPrev()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <Slider ref={ref} {...settingsNoModules}>
                    {resultSliderMovie.map((movie) => (
                        <MoiveItem
                            data={movie}
                            key={movie._id}
                            parentCallback={callbackFunction}
                            slug={movie.slug}
                            hide={hide}
                        />
                    ))}
                </Slider>
                <div className={cx('slideshow-arrow', 'Slideshow_next')} onClick={() => ref?.current?.slickNext()}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </>
    );
}

export default SliderMovie;
