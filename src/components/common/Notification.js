import { Toast } from 'react-bootstrap';
import './Notification.css';

import { useNotificationContext } from '../../contexts/NotificationContext';
const Notifiaction = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    };


    return (
        <Toast className="notification d-inline-block m-1" bg={notification.type} onClose={hideNotification}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className=" img rounded me-2" alt="" />
            </Toast.Header>
            <Toast.Body >
                {notification.message}
            <img src="holder.js/20x20?text=%20" className=" img rounded me-2" alt="" />
            </Toast.Body>

        </Toast>
    );
};

export default Notifiaction;