import HomeHeader from '../../components/home-header/home-header';
import Navbar from '../../components/navbar/navbar';
import TopCurve from '../../components/top-curve/top-curve';
import BottomCurve from '../../components/bottom-curve/bottom-curve';
import Gallery from '../../components/gallery/gallery';

function Home() {
  return (
    <>
        <HomeHeader></HomeHeader>
        <Navbar></Navbar>
        <TopCurve></TopCurve>
        <BottomCurve></BottomCurve>
        <Gallery></Gallery>

    </>
  );
}

export default Home;