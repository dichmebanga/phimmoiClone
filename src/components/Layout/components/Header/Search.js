import classNames from 'classnames/bind';
import Stylest from './Header.module.scss';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Wrapper as Popper } from '~/components/Layout/Popper';
import axios from 'axios';
import useDebounce from '~/hooks/useDebounce';
import FilmItem from '../../FilmItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { ContextFilm, setSlugMovie } from 'src/Context/Context';

const cx = classNames.bind(Stylest);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchApi, setSearchApi] = useState('');
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 700);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://ophim.cc/_next/data/4Ty7510PdBWqP8sPF1ThI/${searchApi}${debouncedValue}`,
            );
            const results = result.data.pageProps.data.items;
            setSearchResult(results);
        };

        fetchData();
    }, [debouncedValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchApi('tim-kiem.json?keyword=');

        if (searchValue.length === 0) {
            setSearchApi('');
            setShowResult(false);
        }
        if (searchValue.length > 0) {
            setShowResult(true);
        }
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const [state, dispatch] = useContext(ContextFilm);

    const callbackFunction = (childData) => {
        dispatch(setSlugMovie(childData));
    };

    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                placement={'bottom-start'}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <ul className={cx('list-movie')}>
                                <li className={cx('movie-title')}>
                                    Kết quả tìm kiếm cho cho từ khoá: <span>"{searchValue}"</span>
                                </li>
                                <li className={cx('movie-title')}>
                                    <strong>Phim</strong>
                                </li>
                                {searchResult.map((item) => (
                                    <FilmItem
                                        key={item._id}
                                        parentCallback={callbackFunction}
                                        slug={item.slug}
                                        data={item}
                                    />
                                ))}

                                <li className={cx('movie-title', 'movie-list-end')}>
                                    <p>Tìm tất cả kết quả từ khoá </p>
                                </li>
                            </ul>
                        </Popper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <input
                    className={cx('search-input')}
                    type="text"
                    placeholder="V.d: tên phim, tên diễn viên..."
                    spellCheck={false}
                    value={searchValue}
                    onChange={handleChange}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />
            </HeadlessTippy>
        </div>
    );
}

export default Search;
