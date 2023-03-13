import classNames from 'classnames/bind';
import Content from 'src/components/Layout/components/Content';
import Footer from 'src/components/Layout/components/Footer/Footer';
import Header from 'src/components/Layout/components/Header';
import Sidebar from 'src/components/Layout/components/Sidebar';
import SliderMovie from 'src/components/Layout/SliderMovie';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
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
        </>
    );
}

export default Home;
