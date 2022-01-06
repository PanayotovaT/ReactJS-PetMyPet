import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as petService from '../../services/petService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Details = () => {
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    const { petId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId).then(res => {
            setPet(res);
        });

    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();
        petService.del(petId, user.accessToken)
            .then(res => {

                navigate('/home');
            });
    };

    const editHandler = (id) => {

    };

    const ownerButtons = (<>
        <a className="button" onClick={editHandler} href="/edit">Edit</a>
        <a className="button" onClick={deleteHandler} href="">Delete</a>
    </>);
    const userButtons = (
        <a className="button" href="#">Like</a>
    );

   
    return (
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
                        <span id="total-likes">Likes: {pet.likes ? pet.likes.length : 0}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
};

export default Details;