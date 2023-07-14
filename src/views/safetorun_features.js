import * as featureIcon1 from "../assets/images/feature-tile-icon-04.svg";
import * as featureIcon2 from "../assets/images/feature-tile-icon-05.svg";
import * as featureIcon3 from "../assets/images/feature-tile-icon-06.svg";
import React from "react";

export const sectionHeader1 = {
    title: 'Make security simple',
    paragraph: 'Safe to run provides developers with a simple security as code interface to protect Android applications'
};

export const tilesData = [
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