import { SANDBOX_GITHUB_TOKEN } from "../env.js";

let token;
const hostname = window && window.location && window.location.hostname,
    env = process && process.env && process.env.NODE_ENV,
    STACK_API_VERSION = "2.2",
    STACK_API_USER = "5545602",
    STACK_API_KEY = "GlpXVX*5omJk)MD4XAzTKQ((";

if (env && env === "production") {
    require("dotenv").config();
    token = process.env.REACT_APP_API_TOKEN;
} else if (/sandbox.io$/.test(hostname) || (env && env === "development")) {
    token = SANDBOX_GITHUB_TOKEN;
} else {
    token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
}

export {
    token as GITHUB_API_TOKEN,
    STACK_API_VERSION,
    STACK_API_USER,
    STACK_API_KEY
};
