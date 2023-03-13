/* eslint-disable jsx-a11y/anchor-is-valid */
import { Wrapper as Popper } from '~/components/Layout/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Stylest from './Header.module.scss';

const cx = classNames.bind(Stylest);

function Category() {
    const categories = [
        'Cổ trang - Thần Thoại',
        'Khoa Học - Viễn Tưởng',
        'Thể Thao Âm Nhạc',
        'Bí Ẩn Siêu Nhiên',
        'Võ Thuật - Kiếm Hiệp',
        'Hình Sự - Chiến Tranh',
        'Kinh Dị - Ma',
        'Thuyết Minh',
        'Phiêu lưu - Hành Động',
        'Tài Liệu - Khám Phá',
        'Gia Đình - Học Đường',
        'Lồng Tiếng',
        'Tâm Lý - Tình Cảm',
        'Văn Hoá - Tâm Linh',
        'TV Show',
        'Boy Love',
        'Hoạt Hình',
        'Hài Hước',
        'Phim Chiếu Rạp',
    ];
    const countries = [
        'Việt nam ',
        'Trung Quốc',
        'Hàn Quốc',
        'Thái Lan',
        'Hồng Kông',
        'Âu - Mỹ',
        'Đài Loan ',
        'Nhật Bản',
        'Ấn Độ',
        'Canada',
        'Quốc Gia Khác',
    ];

    return (
        <div className={cx('main-menu')}>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <p className={cx('menu-item-list', 'active')}> TRANG CHỦ</p>
                </li>
                <div>
                    <Tippy
                        interactive={true}
                        placement={'bottom-start'}
                        offset={[0, -2]}
                        render={(attrs) => (
                            <div className={cx('menu-result-category')} tabIndex="-1" {...attrs}>
                                <Popper>
                                    <ul className={cx('sub-menu')}>
                                        {categories.map((category, index) => (
                                            <li key={index} className={cx('sub-menu-item')}>
                                                <p>{category}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Popper>
                            </div>
                        )}
                    >
                        <li className={cx('menu-item')}>
                            <p className={cx('menu-item-list')}>THỂ LOẠI </p>
                        </li>
                    </Tippy>
                </div>
                <div>
                    <Tippy
                        interactive={true}
                        placement={'bottom-start'}
                        offset={[0, -2]}
                        render={(attrs) => (
                            <div className={cx('menu-result-country')} tabIndex="-1" {...attrs}>
                                <Popper>
                                    <ul className={cx('sub-menu')}>
                                        {countries.map((country, index) => (
                                            <li key={index} className={cx('sub-menu-item')}>
                                                <p>{country}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Popper>
                            </div>
                        )}
                    >
                        <li className={cx('menu-item')}>
                            <p className={cx('menu-item-list')}>QUỐC GIA </p>
                        </li>
                    </Tippy>
                </div>
                <div>
                    <Tippy
                        interactive={true}
                        placement={'bottom-start'}
                        offset={[0, -2]}
                        render={(attrs) => (
                            <div className={cx('menu-result-year')} tabIndex="-1" {...attrs}>
                                <Popper>
                                    <ul className={cx('sub-menu')}>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2021</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2020</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2019</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2018</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2017</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2016</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2015</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2014</p>
                                        </li>
                                        <li className={cx('sub-menu-item', 'sub-menu-item-year')}>
                                            <p>Phim 2013</p>
                                        </li>
                                    </ul>
                                </Popper>
                            </div>
                        )}
                    >
                        <li className={cx('menu-item')}>
                            <p className={cx('menu-item-list')}>PHIM MỚI </p>
                        </li>
                    </Tippy>
                </div>

                <li className={cx('menu-item')}>
                    <p className={cx('menu-item-list')}>PHIM BỘ </p>
                </li>
                <li className={cx('menu-item')}>
                    <p className={cx('menu-item-list')}>PHIM LẺ </p>
                </li>
                <li className={cx('menu-item')}>
                    <p className={cx('menu-item-list')}>PHIM THUYẾT MINH </p>
                </li>
                <li className={cx('menu-item')}>
                    <p className={cx('menu-item-list')}>PHIM CHIẾU RẠP </p>
                </li>
                <li className={cx('menu-item')}>
                    <p className={cx('menu-item-list')}>TV SHOW </p>
                </li>
            </ul>
        </div>
    );
}

export default Category;
