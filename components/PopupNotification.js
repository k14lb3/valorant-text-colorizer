import { useEffect } from 'react';

const PopupNotification = ({
  popupNotificationState: { popupNotification, setPopupNotification },
  text,
  duration,
}) => {
  useEffect(() => {
    if (popupNotification) {
      setTimeout(() => {
        setPopupNotification('');
      }, duration);
    }
  }, [popupNotification]);

  return (
    <div className="absolute bottom-4 left-8 py-4 px-8 bg-red rounded-tl rounded-br text-pampas text-xl duration-200">
      {text}
    </div>
  );
};

PopupNotification.defaultProps = {
  duration: 3000,
};

export default PopupNotification;
