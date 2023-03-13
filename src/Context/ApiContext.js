import axios from 'axios';
import { useState, createContext, useEffect } from 'react';

const ApiContext = createContext();

function ApiProvider({ children }) {
    const [resultMovie, setResultMovie] = useState([]);
    const [resultMovieCatoon, setResultMovieCatoon] = useState([]);
    const [resultMovieLike, setResultMovieLike] = useState([]);
    const [resulComingtMovie, setResulComingtMovie] = useState([]);
    const [resultTrendingMovie, setResultTrendingMovie] = useState([]);
    const [resultSliderMovie, setResultSliderMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=2');
            setResultMovie(result.data.items.slice(0, 16));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resultLike = await axios('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=4');
            setResultMovieLike(resultLike.data.items.slice(0, 8));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resultCatoon = await axios('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=7');
            setResultMovieCatoon(resultCatoon.data.items.slice(0, 8));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resulComingtMovie = await axios('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=8');
            setResulComingtMovie(resulComingtMovie.data.items.slice(0, 6));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resultTrendingMovie = await axios('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=9');

            setResultTrendingMovie(resultTrendingMovie.data.items.slice(0, 10));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resultSliderMovie = await axios('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=12');
            setResultSliderMovie(resultSliderMovie.data.items);
        };
        fetchData();
    }, []);

    return (
        <ApiContext.Provider
            value={{
                resultMovie,
                resultMovieCatoon,
                resultMovieLike,
                resulComingtMovie,
                resultTrendingMovie,
                resultSliderMovie,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}

export { ApiContext, ApiProvider };
