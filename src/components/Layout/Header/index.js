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
            <Category />
        </div>
    );
}

export default Header;
