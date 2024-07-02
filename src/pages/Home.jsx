import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsStart } from "../redux/actions/news.action";

export default function Home() {
const news = useSelector(state => state.news);

  const dispatch = useDispatch()

  const getNews = useCallback(() =>{
    dispatch(getNewsStart())
  },[dispatch])

    useEffect(() => {
      getNews()
    }, [news.length,getNews])
  return (
    <div className="row">
      {
      news.length > 0 ? news.map((n, i) => (
         
          <div className="col-sm-3">
            <div className="card">
              <img src="{n.urlToImage}" class="card-img-top" alt="n.title" />
              <div className="card-body">
                <h5 className="card-title">{n.title}</h5>
                <p className="card-text">
                 {n.description}
                </p>
                <Link to={n.url} className="btn btn-primary">
                  Read More 
                </Link>
              </div>
            </div>
          </div>
        )) : <div className="col-sm-12">
              <div className="card">
                <h1> No News </h1>
              </div>
           </div>
      }
    </div>
  )
}
