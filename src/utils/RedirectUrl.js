import ReactGA from "react-ga4";

export const redirectUrl = (url, eventName) => {
    console.log(`Sending event ${eventName}`)
    ReactGA.event({
        category: 'Links',
        action: eventName,
        label: eventName,
        value: 1
    });

    window.location.href = url;
}