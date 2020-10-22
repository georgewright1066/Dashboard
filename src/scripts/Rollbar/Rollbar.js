import Rollbar from "rollbar";
const ROLLBAR = new Rollbar({
    accessToken: "9f8fafdc4c114735b884e4360cd8e789",
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: process.env.REACT_APP_ENVIRONMENT
    }
});
export default ROLLBAR;
