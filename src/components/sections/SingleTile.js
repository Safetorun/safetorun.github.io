import Image from "../elements/Image";
import React from "react";

export const SingleTile = (
    {
        featureIcon,
        delay,
        headerText,
        content
    }
) => <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
    <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
                <Image
                    src={featureIcon.default}
                    alt="Features tile icon 01"
                    width={64}
                    height={64}/>
            </div>
        </div>
        <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
                {headerText}
            </h4>
            <p className="m-0 text-sm">
                {content}
            </p>
        </div>
    </div>
</div>;