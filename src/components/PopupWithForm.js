export default function PopupWithForm({
  name,
  isOpen,
  title,
  onClose,
  buttonText,
  children,
}) {
  return (
    <div className={`popup ${isOpen && "popup_opened"} popup_${name}`}>
      <div className="popup__conteiner">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          className={`popup__form popup__form_${name}`}
          name={`form_${name}`}
        >
          {children}
          <button className=" popup__submit-popup-btn" type="submit">
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}
