import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import {Helmet} from "react-helmet";

const SEO = () => {
    return (<Helmet>
        <title>Safe to run - Android security for developers</title>
        <meta name="description"
              content="Safe to run provides an API for security as code to make Android application security simple"/>
        <meta name="keywords"
              content="android security,security as code,security,android,devsecops,mobile,mobile security,"/>
    </Helmet>)
}

const Home = () => {

    return (<>
            <SEO/>
            <Hero className="illustration-section-01"/>
            <FeaturesTiles/>
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02"/>
            {/**
             <Testimonial topDivider />

             */}
            <Cta split/>
        </>
    );
}

export default Home;