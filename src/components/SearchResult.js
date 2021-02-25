import React from "react";
import "components/SearchResult.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return(
    <div className="searchResult">
        <img src={img} alt={title} />
        <FavoriteBorderIcon className="searchResult__heart" />
        <div className="searchResult__info">
            <div className="searchResult__infoTop">
                <span>{location}</span>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>
            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                    <StarIcon className="searchResult__star" fontSize="small" />
                    <p><strong>{star}</strong></p>
                </div>
                <div className="searchResult__price">
                    <h3>{`${price} / night`}</h3>
                    <p>{`$${total} total`}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SearchResult;
