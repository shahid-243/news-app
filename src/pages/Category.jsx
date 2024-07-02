import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCategoryNewsStart } from '../redux/actions/news.action';
import NewsItem from '../components/NewsItem';

export default function Category() {
    let {slug} = useParams();
    const categoryNews = useSelector(state => state.categoryNews)

    const dispatch = useDispatch()

    const getCategoryNews = useCallback(() => {
        dispatch(getCategoryNewsStart(slug))
    }, [dispatch,slug])

    useEffect(() => {
       getCategoryNews()
    }, [getCategoryNews])

    return (
        <div className='row'>
            {
                categoryNews.length > 0 ? categoryNews.map((n, i) => (
                    <NewsItem n={n} key={i} />
                )) : <div className="col-sm-12 mt-2">
                    <div className="card">
                        <h1>No News </h1>
                    </div>
                </div>
            }
        </div>
    )
}