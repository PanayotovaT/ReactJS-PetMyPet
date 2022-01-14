import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { usePetState } from '../../hooks/usePetState';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';
import ConfirmDialog from '../common/ConfirmDialog';


const Details = () => {
    const { user } = useAuthContext();
    const { petId } = useParams();
    const { addNotification } = useNotificationContext();
    const [pet, setPet] = usePetState(petId);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        likeService.getPetLikes(petId)
            .then((likesData) => {
                setPet(state => ({...state, likes: likesData}));
            });
    }, [petId, setPet]);

    
    const deleteHandler = (e) => {
        e.preventDefault();
        petService.del(petId, user.accessToken)
            .then(res => {

                navigate('/home');
            })
            .finally(() => {
                setShow(false);
            });
    };

    // console.log(process.env.NODE_ENV);

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShow(true);
    };

    const editHandler = (id) => {

    };

    const likeButtonClick = () => {
        if(user._id === pet._ownerId) {
            return;
        };

        if(pet.likes.includes(user._id)) {
           addNotification('You cannot like the same item twice!', types.warn);
            return;
        }
        likeService.like(user._id, petId)
        .then(() => {
           
                setPet(state => ({...state, likes: [...state.likes, user._id]}));
                addNotification('You have successfully liked this item!', types.success);
             

            });
       
    
        
    };

    const ownerButtons = (<>
        <Link className="button" onClick={editHandler} to={`/edit/${petId}`}>Edit</Link>
        <a className="button" onClick={deleteClickHandler}  href="true">Delete</a>
    </>);
    const userButtons = (
        <button className="button" onClick={likeButtonClick}>Like</button>
    );


    return (
        <>
            <ConfirmDialog show={show} onCancel={() =>setShow(false)} onConfirm={deleteHandler} />
            <section id="details-page" className="details">
                <div className="pet-information">
                    <h3>Name: {pet.name}</h3>
                    <p className="type">Type: {pet.type}</p>
                    <p className="img"><img src={pet.imageUrl} alt="img" /></p>
                    <div className="actions">
                        {user._id && (user._id === pet._ownerId
                            ? ownerButtons
                            : userButtons
                        )}
                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" alt="img" />
                            <span id="total-likes">Likes: {pet.likes?.length}</span>
                        </div>
                    </div>
                </div>
                <div className="pet-description">
                    <h3>Description:</h3>
                    <p>{pet.description}</p>
                </div>
            </section>
        </>
    );
};

export default Details;