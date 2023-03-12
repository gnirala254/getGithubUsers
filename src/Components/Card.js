function Card({ repo }) {
    return (
        <div className="card_inner">
            <div style={{ display: "flex", gap: "30px" }}>
                <img src={repo.avatar_url} alt="user avatar" style={{ height: '60px', width: '60px' }} />
                <div className="detail-box" style={{ display: "flex", gap: "10px" }}>
                    <div className="gitDetail"><span>Repo Name</span>{repo.name}</div>
                    <div className="gitDetail"><span>Stars</span>{repo.stargazers_count}</div>
                    <div className="gitDetail"><span>Language</span>{repo.language}</div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: 'flex-start' }}>
                <a className="userUrl" href={repo.url} target="_blank" rel="noreferrer" style={{ color: 'blue' }}>{repo.html_url}</a>
            </div>
            <div className="detail-box" style={{ width: "100%" }}>
                <div className="gitDetail" style={{ width: "100%" }}><span>Description</span>{repo.description}</div>
            </div>
            <div className="detail-box" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div className="gitDetail"><span>Watchers Count</span>{repo.watchers_count}</div>
                <div className="gitDetail"><span>Score</span>{repo.score}</div>
                <div className="gitDetail"><span>Created At</span>{repo.created_at}</div>
                <div className="gitDetail"><span>Updated At</span>{repo.updated_at}</div>
            </div>
        </div>
    )
}

export default Card;