import classNames from 'classnames/bind';
import Stylest from './SliderMovie.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext, useRef } from 'react';
import MoiveItem from '../MoiveItem/MoiveItem';
import { ContextFilm, setSlugMovie } from '~/context/contextSlug';
import { useApiGetCategory } from '~/hooks/useApiGetCategory';
import { API_ENDPOINTS } from '~/utils/apiClient';

const cx = classNames.bind(Stylest);
function SliderMovie(props) {
    const {
        toggle = 'block',
        hide,
        autoplaySpeed = true,
        speed = 2000,
        slidesToShow = 5,
        slidesToScroll = 5,
        width,
    } = props;
    const { data } = useApiGetCategory(API_ENDPOINTS.SLIDER);

    const [, dispatch] = useContext(ContextFilm);
    const callbackFunction = (childData) => {
        dispatch(setSlugMovie(childData));
    };
    const ref = useRef(null);
    let settingsNoModules = {
        arrows: false,
        infinite: true,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: autoplaySpeed,
        autoplaySpeed: 4000,
    };
    return (
        <>
            <div className={cx('container')} style={{ display: `${toggle}` }}>
                PHIM HOT
            </div>
            <div className={cx('wrapper')} style={{ width: `${width}px` }}>
                <div className={cx('slideshow-arrow', 'Slideshow_prev')} onClick={() => ref?.current?.slickPrev()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>

                <Slider ref={ref} {...settingsNoModules}>
                    {data?.map((movie) => (
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
