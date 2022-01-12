import { useNavigate} from 'react-router-dom';
import * as petService from '../../services/petService';
import  { useAuthContext } from '../../contexts/AuthContext';
const Create = () => {
    const  { user }= useAuthContext();
    const navigate = useNavigate();
    
    const onPetCreate = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let type = formData.get('type');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');

        petService.create({
            name, type, imageUrl, description,
        }, user.accessToken).then(res => {
            navigate('/home');
        });
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onPetCreate}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Horse">Horse</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;