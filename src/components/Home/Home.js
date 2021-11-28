import { Routes, Route, Link } from 'react-router-dom';
import PetList from '../PetList/PetList';
import { ReactComponent as Logo } from '../../logo.svg';
import './home.css';

const Home = () => {

    return (

        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="types">Types</Link>


            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<p>Types: </p>} />

                </Routes>
            </section>
            <Logo className="logo" />

        </section>
    );
};

export default Home;