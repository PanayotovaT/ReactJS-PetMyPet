import { Routes, Route, Link } from 'react-router-dom';
import PetList from '../PetList/PetList';
import { ReactComponent as Logo } from '../../logo.svg';
import './home.css';
import DogType from '../PetList/DogType';
import HorseType from '../PetList/HorseType';
import CatType from '../PetList/CatType';

const Home = () => {

    return (

        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="dogs" class="type"> Dogs</Link>
                <Link to="cats" class="type"> Cats</Link>
                <Link to="horses" class="type"> Horses</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/dogs" element={<DogType />} />
                    <Route path="/cats" element={<CatType />} />
                    <Route path="/horses" element={<HorseType />} />

                </Routes>
            </section>
            <Logo className="logo" />

        </section>
    );
};

export default Home;