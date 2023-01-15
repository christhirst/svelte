<script>
  import {
    OidcContext,
    LoginButton,
    LogoutButton,
    RefreshTokenButton,
    authError,
    accessToken,
    idToken,
    isAuthenticated,
    isLoading,
    login,
    logout,
    userInfo,
  } from "@dopry/svelte-oidc";

  const metadata = {
    // added to overcome missing value in auth0 .well-known/openid-configuration
    // see: https://github.com/IdentityModel/oidc-client-js/issues/1067
    // see: https://github.com/IdentityModel/oidc-client-js/pull/1068
    end_session_endpoint: `process.env.OIDC_ISSUER/v2/logout?client_id=process.env.OIDC_CLIENT_ID`,
  };
</script>

<OidcContext
  issuer="https://8280-christhirst-ldap-dsg692tb7v4.ws-eu82.gitpod.io/oauth"
  client_id="clientname3"
  post_logout_redirect_uri="https://darrelopry.com/svelte-oidc/"
  {metadata}
  extraOptions={{
    mergeClaims: true,
    resource: "some_identifier",
  }}
>
  <LoginButton>Login</LoginButton>
  <LogoutButton>Logout</LogoutButton>
  <RefreshTokenButton>RefreshToken</RefreshTokenButton><br />
  <pre>isLoading: {$isLoading}</pre>
  <pre>isAuthenticated: {$isAuthenticated}</pre>
  <pre>authToken: {$accessToken}</pre>
  <pre>idToken: {$idToken}</pre>
  <pre>userInfo: {JSON.stringify($userInfo, null, 2)}</pre>
  <pre>authError: {$authError}</pre>
</OidcContext>
