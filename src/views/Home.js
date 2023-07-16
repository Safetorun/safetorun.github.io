import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import {Helmet} from "react-helmet";
import {sectionHeader1, tilesData} from "./safetorun_features";
import {sectionHeader2, tilesData2} from "./safetorun_plus_features";
import Button from "../components/elements/Button";
import {redirectUrl} from "../utils/RedirectUrl";

const SEO = () => {
    return (<Helmet>
        <title>Safe to run - Android security for developers</title>
        <meta name="description"
              content="Unlock the full potential of Android application security with Safe to Run's intuitive API for security as code. Simplify your security processes and fortify your Android apps with ease. Experience the peace of mind that comes with robust protection against vulnerabilities."/>
        <meta name="keywords"
              content="android security,security as code,security,android,devsecops,mobile,mobile security,"/>
    </Helmet>)
}

const Home = () => {


    return (<>
            <SEO/>
            <Hero className="illustration-section-01"/>
            <FeaturesTiles sectionHeader={sectionHeader1} tilesData={tilesData}/>
            <FeaturesTiles sectionHeader={sectionHeader2} tilesData={tilesData2}/>
            <section>
                <div className="illustration-section-02"
                     style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button tag="button" color="primary" wideMobile
                            onClick={() => redirectUrl("https://app.safetorun.com?utm_source=landing_page&utm_medium=after_spiel_button&utm_campaign=default", "click_app_redirect")}>
                        Get started with Plus (It's free)
                    </Button>
                </div>
            </section>

            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02"/>
            {/**
             <Testimonial topDivider />

             */}
            <Cta split/>
        </>
    );
}

export default Home;