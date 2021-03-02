import React from 'react';
import WelcomeCard from '../../components/Card';
import homeImage from '../../images/home_image.jpg';

const Home = () => (
  <div>
    <WelcomeCard title="Home" subtitle="Welcome to your todo app!" image={homeImage} />
  </div>
);

export default Home;
