import {Link} from 'react-router-dom';

export const PetCard = ({
    pet
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p className="img"><img src={pet.imageUrl} alt="img" /></p>
            <Link className="button" to={`/details/${pet._id}`}>Details</Link>
        </li>
    );
};

export default PetCard;