import { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

export default function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditAddPlacePopupOpen, setEditAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setEditAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleDeleteCardClick() {
    setDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({})
  }

  return (
<div className="page">
<Header />
<Main 
 onEditProfile={handleEditProfileClick}
 onEditAvatar={handleEditAvatarClick}
 onAddPlace={handleAddPlaceClick}
 onCardClick={handleCardClick}
 onDeleteImage={handleDeleteCardClick}/>
<Footer />
<PopupWithForm
        name={'type_edit'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
      <input id="popup__name" className="popup__input popup__input_type_name" type="text" name="name" minLength="2" maxLength="40" placeholder="Введите Ваше имя" required />
      <span id="error-name" className="popup__name-error popup__input-error"></span>
      <input id="popup__profession" className="popup__input popup__input_type_profession" type="text" name="info" minLength="2" maxLength="200" placeholder="Введите Вашу профессию"
        required />
      <span id="error-profession" className="popup__profession-error popup__input-error"></span>
</PopupWithForm>
<PopupWithForm
        name={'type_add'}
        title={'Новое место'}
        isOpen={isEditAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
      <input id="popup__title" className="popup__input popup__input_type_title" type="text" name="name" minLength="2" maxLength="30" required placeholder="Название" />
      <span id="error-title" className="popup__title-error  popup__input-error"></span>
      <input id="popup__picture" className="popup__input popup__input_type_picture " type="url" name="link" required placeholder="Ссылка на картинку" />
      <span id="error-url" className="popup__picture-error popup__input-error"></span>
</PopupWithForm>  
<ImagePopup
        name={'image'}
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
<PopupWithForm
        name={'card-delete'}
        title={'Вы уверены?'}
        buttonText={'Да'}
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      >
</PopupWithForm>
<PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
      <input id="link-avatar" type="url" className="popup__occupation link popup__input popup__input_link" name="avatar"
        placeholder="Ссылка на картинку" required />
        <span  className="popup__error link-avatar-error popup__input-error"></span>
</PopupWithForm> 
<ImagePopup
        name={'image'}
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

{/* <template id="element__card">
  <div className="element">
    <button className="element__picture-botton" type="button">
      <img className="element__picture" src="#" alt="#" />
    </button>
    <button className="element__delete" type="button"></button>
    <div className="element__content">
      <h2 className="element__title"></h2>
      <div className="element__like_container">
      <button className="element__like" type="button"></button>
      <p className="element__like_amount">0</p>
    </div>
    </div>
  </div>
</template> */}
</div>
 );
}




