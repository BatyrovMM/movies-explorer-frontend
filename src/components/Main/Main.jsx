import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';

function Main({ loggedIn, handleMenu }) {
  return (
    <>
    <Header onPage={loggedIn ? false : '/'} handleTheme={true} handleMenu={handleMenu}/>
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />
    <Footer />
    </>
  );
}

export default Main;
