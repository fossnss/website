import React from 'react';
// import { Link } from "gatsby"

import SEO from '../components/seo';
import Header from '../components/header';
import HeroSect from '../components/hero-section';
import Footer from '../components/footer';

const IndexPage = () => (
    <div className='mainbody'>
        <SEO title='Home' />
        <Header />

        <HeroSect />
		
		<div className="site-content">

		</div>
        <Footer />
    </div>
);

export default IndexPage;
