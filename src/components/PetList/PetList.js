import PetCard from './PetCard';

export const PetList = ({
    pets
}) => {
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