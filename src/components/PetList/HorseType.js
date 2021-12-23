import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import PetCard from './PetCard';

export const HorseType = () => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            });
    }, []);

    const horses = pets.filter(x => x.type === 'horse');
    return (
        <ul className="other-pets-list">
            {
                horses.length > 0
                    ? horses.map(x => <PetCard key={x._id} pet={x} />)
                    : <p className="no-pets">No horses in database!</p>
            }
        </ul>
    );
};

export default HorseType;