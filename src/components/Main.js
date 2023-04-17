import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onCardClick,
  onClick,
  onDeleteImage,
  onAddPlace,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-btn"
          type="button"
          onClick={onEditAvatar}
        >
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавлять"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onDeleteImage={onDeleteImage}
          />
        ))}
      </section>
    </main>
  );
}
