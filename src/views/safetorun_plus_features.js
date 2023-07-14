import * as featureIcon1 from "../assets/images/feature-tile-icon-01.svg";
import * as featureIcon2 from "../assets/images/feature-tile-icon-02.svg";
import * as featureIcon3 from "../assets/images/feature-tile-icon-03.svg";
import React from "react";

export const sectionHeader2 = {
    title: 'Ready for the next level?',
    paragraph: 'Introducing Safe to Run Plus, an enhancement to the Safe to Run security platform.'
};

export const tilesData2 = [
    {
        "headerText": "Real-time Security Analytics",
        "featureIcon": featureIcon1,
        "delay": "0",
        "content": <>Safe to Run Plus enables you to view security analytics, including the tracking of <span className="text-color-primary">verify</span> and resilience failures, in real-time.</>
    },
    {
        "headerText": "Off-Device Verification",
        "featureIcon": featureIcon2,
        "delay": "200",
        "content": <>Extend your security perimeter off-device. With Safe to Run Plus, your servers can <span className="text-color-primary">verify</span> that API calls are originating from trusted devices.</>
    },
    {
        "headerText": "Dynamic Configuration Updates",
        "featureIcon": featureIcon3,
        "delay": "400",
        "content": <>Stay agile and adaptable. Safe to Run Plus allows you to update your security configuration dynamically post-deployment using the <span className="text-color-primary">Safe to Run builder</span>.</>
    }
]
