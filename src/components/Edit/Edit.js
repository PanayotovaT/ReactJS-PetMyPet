import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

import { usePetState } from '../../hooks/usePetState';
import * as petService from '../../services/petService';

const types = [
    {value: 'dog', text: 'Dog'},
    {value: 'cat', text: 'Cat'},
    {value: 'horse', text: 'Horse'},
    {value: 'parrot', text: 'Parrot'},
    {value: 'reptile', text: 'Reptile'},
    {value: 'other', text: 'Other'},

];


const Edit = () => {
    const { petId } = useParams();
    const [pet] = usePetState(petId);
    const [errors, setErrors] = useState({name: false});
    const [show, setShow] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        console.log('submit');
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

    let typeName;
    if(pet.type !== undefined) {
       typeName = pet.type[0].toUpperCase() + pet.type.substring(1);

    }
    console.log(typeName);

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
                            <select id="type" name="type" defaultValue={typeName ? typeName : 'Other'}>
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