function Card({ curElem }) {
    return (
        <div className="card_inner">
            <img src={curElem.avatar_url} alt="" />
            <div className="userName">{curElem.login}</div>
            <div className="userUrl">{curElem.url}</div>
            <div className="detail-box">
                <div className="gitDetail"><span>Articles</span>23</div>
                <div className="gitDetail"><span>Following</span>45</div>
                <div className="gitDetail"><span>Followers</span>11</div>
            </div>
            <button className="seeMore">See More</button>
        </div>
    )
}

export default Card;