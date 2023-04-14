export default function ImagePopup({ card, isOpen, onClose }) {
    return (
// {/* <div id="popup_photo" className="popup popup_photo"> */}
<div id="popup_photo" className={`popup ${isOpen && ('popup_opened')}`}>
<figure className="popup__photo-conteiner">
  {/* <img className="popup__image" src="#" alt="#" /> */}
  <img className="popup__image" src={card.link} alt={card.name} />
  <h2 className="popup__photo-title">{card.name}</h2>
  <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
</figure>
</div>
    )
  }