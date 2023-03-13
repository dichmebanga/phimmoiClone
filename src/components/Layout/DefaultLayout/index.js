import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import SliderMovie from '../SliderMovie';
import Content from '../components/Content';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <SliderMovie />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Content />
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
