import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { useInput } from "../utils/useInput.js";
import React from "react";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onUpdateCard,
  buttonText,
}) {
  const cardName = React.createRef(); 
  const cardLink = React.createRef();

  const name = useInput("", { isEmpty: true, minLength: 2 });
  const link = useInput("", { isEmpty: true, minLength: 0, isUrl: false });

  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageLink, setErrorMessageLink] = useState("");

  useEffect(() => {
    cardName.current.value = "";
    cardLink.current.value = "";
  }, [isOpen]);

  useEffect(() => {
    name.setInputValid(true);
    link.setInputValid(true);
    setErrorMessageName("");
    setErrorMessageLink("");
  }, [onClose]);

  function handleCardNameChange(e) {
    name.onChange(e);
    setErrorMessageName(e.target.validationMessage);
  }

  function handleCardLinkChange(e) {
    link.onChange(e);
    setErrorMessageLink(e.target.validationMessage);
  }

  function handleSubmitCard(e) {
    e.preventDefault();
    onUpdateCard({
      name: cardName.current.value,
      link: cardLink.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"type_add"}
      title={"Новое место"}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitCard}
      onDisabled={!name.inputValid || !link.inputValid}
    >
      <input
        type="text"
        className="popup__input popup__input_type_title"
        name="name"
        ref={cardName}
        placeholder="Название"
        id="popup__title"
        onChange={handleCardNameChange}
        onFocus={name.onFocus}
        value={name.value || ""}
        required
        minLength="2"
        maxLength="30"
        noValidate
      />
      {((name.isDirty && name.isEmpty) ||
        (name.isDirty && name.minLengthError)) && (
        <span className="popup__title-error  popup__input-error popup__input-error_active">
          {errorMessageName}
        </span>
      )}
      <input
        type="url"
        className="popup__input popup__input_type_picture"
        name="link"
        ref={cardLink}
        placeholder="Ссылка на картинку"
        id="popup__picture"
        onChange={handleCardLinkChange}
        onFocus={link.onFocus}
        value={link.value || ""}
        required
        noValidate
      />
      {((link.isDirty && link.isEmpty) ||
        (link.isDirty && link.urlError) ||
        (link.isDirty && link.minLengthError)) && (
        <span className="popup__picture-error popup__input-error popup__input-error_active">
          {errorMessageLink}
        </span>
      )}
    </PopupWithForm>
  );
}
