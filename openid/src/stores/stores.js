import { writable } from 'svelte/store';
import { generators, BaseClient, Issuer } from 'openid-client';

export let count = writable();
export const code_verifier = generators.codeVerifier();
//let client: BaseClient;
export let client = async () => {
	const data = await Issuer.discover(
		'http://localhost:8280/oauth/.well-known/openid-configuration'
	);
	//console.log(data);
	const client = new data.Client({
		client_id: 'clientname3',
		client_secret: 'test_secret',
		redirect_uris: ['http://localhost:5173/redirect'],
		response_types: ['code']
		// id_token_signed_response_alg (default "RS256")
		// token_endpoint_auth_method (default "client_secret_basic")
	}); // => Client
	console.log('######');
	console.log(client);

	const code_verifier = generators.codeVerifier();
	// store the code_verifier in your framework's session mechanism, if it is a cookie based solution
	// it should be httpOnly (not readable by javascript) and encrypted.

	const code_challenge = generators.codeChallenge(code_verifier);

	const url = client.authorizationUrl({
		//scope: 'openid email profile',
		resource: 'http://localhost:8280/oauth/',
		state: 'test',
		code_challenge,
		code_challenge_method: 'S256'
	});
	console.log('###!###');
	console.log(url);
	count.set(client);
	return client;
};
const res = await fetch('http://localhost:8280/oauth/clients', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		Authorization: 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'
	}
});
