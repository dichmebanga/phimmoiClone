import classNames from 'classnames/bind';
import Stylest from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRightToBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Category from './ Category';
import Search from './Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(Stylest);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left-logo')}>
                    <Link to={'/'}>
                        <img alt="MotPhimTV" title="Mọt phim TV" src={images.logo} />
                    </Link>
                </div>

                 <div className={cx('right-header')}>
                    <div className={cx('search')}>
                        <form id="form_search" method="GET">
                            <Search />
                            {/* <input
                                className={cx('search-input')}
                                type="text"
                                placeholder="V.d: tên phim, tên diễn viên..."
                                spellCheck={false}
                            /> */}
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />

                            <p className={cx('suggest')}>Công cụ tìm kiếm phim.</p>
                        </form>
                    </div>

                    <div className={cx('user-menu')}>
                        <ul>
                            <li>
                                <FontAwesomeIcon className={cx('user-menu-icon')} icon={faRightToBracket} />
                                <p onClick={() => alert('Chức năng này đang cập nhật')}> Đăng nhập</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('user-menu-icon')} icon={faUsers} />
                                <p onClick={() => alert('Chức năng này đang cập nhật')}> Đăng ký </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('user-menu-icon')} icon={faBookmark} />
                                <p onClick={() => alert('Chức năng này đang cập nhật')}> Bookmark </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Category />
        </div>
    );
}

export default Header;
