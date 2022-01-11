import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import PetCard from './PetCard';

export const PetList = () => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        petService.getAll()
            .then(result => {
                if(result.length > 0) {

                    setPets(result);
                }
            })
            .catch(err => {
                console.log('err');
                console.log(err);
            });
    }, []);


    return (
        <ul className="other-pets-list">
            {
                pets.length > 0
                    ? pets.map(x => <PetCard key={x._id} pet={x} />)
                    : <p className="no-pets">No pets in database!</p>
            }
        </ul>
    );
};

export default PetList;