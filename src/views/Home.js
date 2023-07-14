import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import {Helmet} from "react-helmet";
import * as featureIcon1 from "../assets/images/feature-tile-icon-01.svg";
import * as featureIcon2 from "../assets/images/feature-tile-icon-02.svg";
import * as featureIcon3 from "../assets/images/feature-tile-icon-03.svg";

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

    const sectionHeader1 = {
        title: 'Make security simple',
        paragraph: 'Safe to run provides developers with a simple security as code interface to protect Android applications'
    };

    const tilesData = [
        {
            "headerText": "Protection against attackers",
            "featureIcon": featureIcon1,
            "delay": "0",
            "content": <>Safe to run <span className="text-color-primary">verify</span> protects your app against
                attacker
                controlled input</>
        },
        {
            "headerText": "Resilience to vulnerabilities",
            "featureIcon": featureIcon2,
            "delay": "200",
            "content": <> Protect your app from insecure devices with Safe to run <span
                className="text-color-primary">resilience</span></>
        },
        {
            "headerText": "Slow down reverse engineers",
            "featureIcon": featureIcon3,
            "delay": "400",
            "content": <>Add an extra layer of complexity for reverse engineers with Safe to Run <span
                className="text-color-primary">resilience</span></>
        }
    ]

    return (<>
            <SEO/>
            <Hero className="illustration-section-01"/>
            <FeaturesTiles sectionHeader={sectionHeader1} tilesData={tilesData}/>
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02"/>
            {/**
             <Testimonial topDivider />

             */}
            <Cta split/>
        </>
    );
}

export default Home;