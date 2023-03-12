import Card from './Card';

const Cards = ({repositories}) => {

    return (
        <div className="container">
            {
                repositories.map((repo) => {
                    return (
                        <div className="card_item" key={repo.id}>
                            <Card repo={repo} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;

