import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem({ n }) {
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={n.urlToImage} class="card-img-top" alt={n.title} />
        <div className="card-body">
          <h5 className="card-title">{n.title}</h5>
          <p className="card-text">{n.description}</p>
          <Link to={n.url} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
