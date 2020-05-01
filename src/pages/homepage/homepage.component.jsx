import React from 'react';
import  HeaderSlidShow  from '../../components/header-slidshow/header-slidshow.component';

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
const HomePage = () => (
    <HomePageContainer>
        <HeaderSlidShow/>
        <Directory/>
    </HomePageContainer>
    
    
);

export default HomePage;