function Card(props){
    return (
        <div className="conteiner__card">
            {props.children}
            <div className="conteiner__main-info">
                <div className="title-card">{props.title}</div>
                <div className="description-card">{props.description}</div>
            </div>
        </div>
    )
}

export default Card;