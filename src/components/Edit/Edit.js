import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

import { usePetState } from '../../hooks/usePetState';
import * as petService from '../../services/petService';
import { useNotificationContext, types as type } from '../../contexts/NotificationContext';
const types = [
    {value: 'Dog', text: 'Dog'},
    {value: 'Cat', text: 'Cat'},
    {value: 'Horse', text: 'Horse'},
    {value: 'Parrot', text: 'Parrot'},
    {value: 'Reptile', text: 'Reptile'},
    {value: 'Other', text: 'Other'},

];


const Edit = () => {
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);
    const [errors, setErrors] = useState({name: false});
    const [show, setShow] = useState(false);
    const { addNotification } = useNotificationContext();
    const navigate  = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();

        let petData = Object.fromEntries(new FormData(e.currentTarget));
        petService.update(pet._id, petData)
        .then(() => {

            addNotification('You have successfully updated the item', type.success);
            navigate(`/details/${petId}`);
        });
        

       
    };

    const nameOnChangeHandler = (e) => {
        let currentName= e.target.value;
        if(currentName.length < 3 ) {
            setErrors(state => ({...state, name: 'The name should be at least 3 characters!'}));
            setShow(true);
        } else {
            setErrors(state => ({...state, name: false}));
            setShow(false);
        }
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={submitHandler} method="POST">
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'red': 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={pet.name} onBlur={nameOnChangeHandler} />
                        </span>
                    </p>
                    <Alert key={errors.name} variant={'danger'} show={show}>{errors.name}</Alert>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={pet.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={pet.type} onChange={(e) => setPet(s => ({...s, type: e.target.value}))}>
                                {types.map(x => <option key={x.value} defaultValue={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
};

export default Edit;