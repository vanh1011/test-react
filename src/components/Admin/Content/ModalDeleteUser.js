import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../apiService/apiService';
import { toast } from 'react-toastify';


const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDelete = async () => {

        let data = await deleteUser(dataDelete.id)

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsers();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }


    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"


            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the user</Modal.Title>
                </Modal.Header>
                <Modal.Body> Are you sure to delete this user: <b>{dataDelete && dataDelete.email ? dataDelete.email : " "}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;