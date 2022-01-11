import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onCancel,
    onConfirm,
}) => {



    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete this item?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button variant="primary" onClick={onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;