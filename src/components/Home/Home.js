import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as petService from '../../services/petService';
import * as authService from '../../services/authServices';
// import { ReactComponent as Logo } from '../../logo.svg';
import './home.css';
import PetList from '../PetList/PetList';
import DogType from '../PetList/DogType';
import HorseType from '../PetList/HorseType';
import CatType from '../PetList/CatType';
import OtherType from '../PetList/OtherType.js';
import ReptileType from '../PetList/ReptileType';
import ParrotType from '../PetList/ParrotType';

const Home = () => {
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

        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav className="nav-type">
                <Link className="nav-type-link type" to="dogs"> Dogs</Link>
                <Link className="nav-type-link type" to="cats"> Cats</Link>
                <Link className="nav-type-link type" to="horses"> Horses</Link>
                <Link className="nav-type-link type" to="parrots"> Parrots</Link>
                <Link className="nav-type-link type" to="reptiles"> Reptiles</Link>
                <Link className="nav-type-link type" to="others"> Others</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList pets={pets} />} />
                    <Route path="/dogs" element={<DogType />} />
                    <Route path="/cats" element={<CatType />} />
                    <Route path="/horses" element={<HorseType />} />
                    <Route path="/parrots" element={<ParrotType />} />
                    <Route path="/reptiles" element={<ReptileType />} />
                    <Route path="/others" element={<OtherType />} />

                </Routes>
            </section>
            {/* <Logo className="logo" /> */}

        </section>
    );
};

export default Home;