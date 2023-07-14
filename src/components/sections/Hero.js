import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
//import Image from '../elements/Image';
//import Modal from '../elements/Modal';
import ReactGA from "react-ga4";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
                  className,
                  topOuterDivider,
                  bottomOuterDivider,
                  topDivider,
                  bottomDivider,
                  hasBgColor,
                  invertColor,
                  ...props
              }) => {

//  const [videoModalActive, setVideomodalactive] = useState(false);

//  const openModal = (e) => {
//    e.preventDefault();
//    setVideomodalactive(true);
//  }
//
//  const closeModal = (e) => {
//    e.preventDefault();
//    setVideomodalactive(false);
//  }

    const redirectUrl = (url, eventName) => {
        console.log(`Sending event ${eventName}`)
        ReactGA.event({
            category: 'Links',
            action: eventName,
            label: eventName,
            value: 1
        });

        window.location.href = url;
    }

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Get started with <span className="text-color-primary">safe to run</span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Simple application security with <span className="text-color-primary">Safe to run</span>
                            </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button tag="button" color="primary" wideMobile
                                        onClick={() => redirectUrl("https://docs.safetorun.com/", "get_started_click")}>
                                        Get started
                                    </Button>
                                    <Button tag="button" color="dark" wideMobile
                                            onClick={() => redirectUrl("https://github.com/safetorun/safe_to_run", "view_on_github_click")}>
                                        View on Github
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <div className="reveal-from-bottom" data-reveal-delay="900">
                                <ButtonGroup>
                                    <Button tag="button" color="light" wideMobile
                                        onClick={() => redirectUrl("https://safetorun.com/#/slack?utm_source=portal&utm_medium=home&utm_content=button", "slack_signup_link")}>
                                        Join us on slack
                                    </Button>
                                    <Button tag="button" color="primary" wideMobile
                                            onClick={() => redirectUrl("https://app.safetorun.com?utm_source=landing_page&utm_medium=get_started_button&utm_campaign=default", "click_app_redirect")}>
                                        Plus
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    {/**<div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                     <a
                     data-video="https://player.vimeo.com/video/174002812"
                     href="#0"
                     aria-controls="video-modal"
                     onClick={openModal}
                     >
                     <Image
                     className="has-shadow"
                     src={require('./../../assets/images/video-placeholder.jpg')}
                     alt="Hero"
                     width={896}
                     height={504} />
                     </a>
                     </div>
                     <Modal
                     id="video-modal"
                     show={videoModalActive}
                     handleClose={closeModal}
                     video="https://player.vimeo.com/video/174002812"
                     videoTag="iframe" />
                     */}
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;