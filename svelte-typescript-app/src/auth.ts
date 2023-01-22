import { Issuer } from "openid-client";

const googleIssuer = await Issuer.discover(
  "http://localhost:8280/oauth/.well-known/openid-configuration"
);

export const OIDCClient = new googleIssuer.Client({
  client_id: "zELcpfANLqY7Oqas",
  client_secret:
    "TQV5U29k1gHibH5bx1layBo0OSAvAbRT3UYW3EWrSYBB5swxjVfWUa1BS8lqzxG/0v9wruMcrGadany3",
  redirect_uris: ["http://localhost:3000/cb"],
  response_types: ["code"],
  // id_token_signed_response_alg (default "RS256")
  // token_endpoint_auth_method (default "client_secret_basic")
}); // => Client
