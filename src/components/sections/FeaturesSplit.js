import React from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import * as feature2 from '../../assets/images/features-split-image-02.png'
import * as feature1 from '../../assets/images/features-split-image-01.png'

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
                           className,
                           topOuterDivider,
                           bottomOuterDivider,
                           topDivider,
                           bottomDivider,
                           hasBgColor,
                           invertColor,
                           invertMobile,
                           invertDesktop,
                           alignTop,
                           imageFill,
                           ...props
                       }) => {

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: 'Security as code',
        paragraph: 'Write explicit instructions for when your app should or shouldn\'t run and embed security into your app from the start.'
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content"/>
                    <div className={splitClasses}>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Clarity is crucial
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Unexpected functionality can lead to security holes
                                </h3>
                                <p className="m-0">
                                    Safe to run verify ensures that by default all checks fail - this is called
                                    'default' deny - and prevents a whole class of vulnerabilities caused by unexpected
                                    input
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <Image
                                    src={feature1.default}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}/>
                            </div>
                        </div>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-right"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Verify
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Trust nothing, verify everything
                                </h3>
                                <p className="m-0">
                                    Use Safe to run verify to protect against attacker controlled inputs. This could be
                                    input from intents, re-directs from in-app chat or files downloaded
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <Image
                                    src={feature2.default}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}/>
                            </div>
                        </div>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Device posture
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Is the device safe?
                                </h3>
                                <p className="m-0">
                                    From simple checks like root checks, signature verification and emulator detection, to checking for malware or vulnerable devices - make specific decisions on when to run and when to not 
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <Image
                                    src={feature2.default}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;