import OktaSignIn from "@okta/okta-signin-widget";
import { OktaAuth } from "@okta/okta-auth-js";

const yourOktaUri = "https://dev-88559534.okta.com";
const clientId = "0oa3l63oufeYJDEAt5d7";

const oktaSignIn = new OktaSignIn({
  baseUrl: yourOktaUri,
  clientId: clientId,
  redirectUri: "http://localhost:8080/login/callback",
  authParams: {
    pkce: true,
    issuer: `${yourOktaUri}/oauth2/default`,
    display: "page",
    scopes: ["openid", "profile", "email"],
  },
});

const oktaAuth = new OktaAuth({
  issuer: `${yourOktaUri}/oauth2/default`,
  clientId: clientId,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});
//a
export { oktaAuth, oktaSignIn };
