export default function Card({ card, onCardClick, onDeleteImage }) {
    function handleClick() {
      onCardClick(card);
    }
    return (
        <div className="element" id="element__card">
    <button className="element__picture-botton" type="button">
      <img className="element__picture" src={card.link} alt={card.name} onClick={handleClick} />
    </button>
    <button className="element__delete" type="button" onClick={onDeleteImage}></button>
    <div className="element__content">
      <h2 className="element__title">{card.name}</h2>
      <div className="element__like_container">
      <button className="element__like" type="button"></button>
      <p className="element__like_amount">{card.likes.length}</p>
    </div>
    </div>
  </div>
    )
  }