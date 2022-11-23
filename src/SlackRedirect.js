import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';

const SlackRedirect = () => {
    useEffect(() => {

        ReactGA.event({
            category: 'Slack',
            action: 'slack_redirect',
            label: 'slack_redirect',
            value: 1
        });


        window.location.href = "https://join.slack.com/t/safetorun/shared_invite/zt-1kfcp4cw0-Cr_BxI5AG~LOEpnM39NIhw";
        }, []);

    return <></>
}

export default SlackRedirect;
