import Card from "../task/Card.js"

function Cards({cards}){
    return (
        <div className="conteiner__cards">
            {
                cards.map(card => 
                <Card 
                title={card.title} 
                description={card.description}>
                    {("img" in card)?<img src={card.img} className="img-card"/>:null}
                </Card>)
            }
        </div>
    )
}

export default Cards;