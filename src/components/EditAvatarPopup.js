import { useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { useInput } from "../utils/useInput";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  buttonText,
}) {
  const avatarInputRef = useRef();

  const link = useInput("", { isEmpty: true, minLength: 0, isUrl: false });

  const [errorMessageLink, setErrorMessageLink] = useState("");

  function handleAvatarLinkChange(e) {
    link.onChange(e);
    setErrorMessageLink(e.target.validationMessage);
  }

  function handleSubmitAvatar(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  useEffect(() => {
    avatarInputRef.current.value = "";
  }, [isOpen]);

  useEffect(() => {
    link.setInputValid(true);
    setErrorMessageLink("");
  }, [onClose]);

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitAvatar}
      buttonText={buttonText}
      onDisabled={!link.inputValid}
    >
      <input
        type="url"
        className="popup__occupation link popup__input popup__input_link"
        name="avatar"
        placeholder="Ссылка на картинку"
        id="link-avatar"
        ref={avatarInputRef}
        value={link.value}
        onChange={handleAvatarLinkChange}
        onFocus={link.onFocus}
        required
      />
      {((link.isDirty && link.isEmpty) ||
        (link.isDirty && link.minLengthError) ||
        (link.isDirty && link.urlError)) && (
        <span className="popup__error link-avatar-error popup__input-error popup__input-error_active">
          {errorMessageLink}
        </span>
      )}
    </PopupWithForm>
  );
}
