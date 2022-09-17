import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <>
      <NavigationBar/>
      <Outlet/>
    </>
  );
};
export default Home;
