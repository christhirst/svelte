import { Issuer, generators } from 'openid-client';
import { redirect, type Handle, type HandleFetch, type HandleServerError } from '@sveltejs/kit';
import { resolveBaseUrl } from 'vite';
import { user } from '$app/stores';

export function getSession({ event }) {
	//console.log('getSessions');
	const user = 'test'; //event.cookies.get('sub');

	return { user };
}

export const handle1: Handle = async ({ event, resolve }) => {
	console.log('handle1');
	const { locals, cookies, isDataRequest, url } = event;

	if (!url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		locals.user = token ? { name: 'John', id: 1 } : undefined;
	}

	const response = await resolve(event);

	return response;
};

export const handle: Handle = async ({ event, resolve }) => {
	const { locals, cookies, isDataRequest, url } = event;

	const sub = event.cookies.get('sub');
	event.locals.user = sub;
	locals.user = sub;
	const groups = [];
	if (!sub) {
		console.log(sub);

		const googleIssuer = await Issuer.discover(
			'http://localhost:8280/oauth/.well-known/openid-configuration'
		);
		//console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);

		const client = new googleIssuer.Client({
			client_id: 'clientname3',
			client_secret: 'testpw',
			redirect_uris: ['http://localhost:5173/'],
			response_types: ['code']
			// id_token_signed_response_alg (default "RS256")
			// token_endpoint_auth_method (default "client_secret_basic")
		}); // => Client
		const qqq = event.cookies.get('some');
		const code_verifier = generators.codeVerifier();
		// store the code_verifier in your framework's session mechanism, if it is a cookie based solution
		// it should be httpOnly (not readable by javascript) and encrypted.

		const qsqq = event.cookies.get('code_challenge');

		const code_challenge = generators.codeChallenge(code_verifier);
		event.cookies.set('code_challenge', code_challenge, { secure: false, httpOnly: false });
		const urlRedirect = client.authorizationUrl({
			scope: 'openid email profile',
			resource: 'https://my.api.example.com/resource/32178',
			code_challenge,
			code_challenge_method: 'S256'
		});
		const re = /https/gi;
		const newurl = urlRedirect.replace(re, 'http');

		const { locals, cookies, isDataRequest, url } = event;

		//&& event.route.id?.startsWith('/(app)')
		if (!qqq) {
			event.cookies.set('some', 'value', { secure: false, httpOnly: false });
			throw redirect(302, newurl + '&state=test');
		}
		if (qqq && !sub) {
			const params = client.callbackParams(event.request.url);
			console.log(event.request.url);
			console.log('####----###');
			const id = params.code;
			console.log(params);
			const openidFields = JSON.parse(Buffer.from(id.split('.')[1], 'base64').toString());
			const sub = openidFields.sub;
			const groups = openidFields.groups;
			console.log(sub);
			console.log(groups);
			try {
				const tokenSet = await client.callback('http://localhost:5173/', params, {
					qsqq
				});
			} catch (e) {
				console.log(e);
			}
			/*
		console.log('####!!###');
		console.log(tokenSet.access_token);
		console.log('received and validated tokens %j', tokenSet);
		console.log('validated ID Token claims %j', tokenSet.claims()); */
			event.cookies.set('sub', sub, { secure: false, httpOnly: false });
		}
	}
	//const userinfo = await client.userinfo(access_token);
	//console.log('userinfo %j', userinfo);

	const access = event.cookies.get('access') == 'true';

	const response = await resolve(event);

	return response;
};

export const handeFetch: HandleFetch = ({ request, event, fetch }) => {
	if (request.url.startsWith('http://localhost:8280/')) {
		const cookie = event.request.headers.get('cookie');
		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}
	return fetch(request);
};

export const handleError: HandleServerError = ({ error, event }) => {
	//console.log(error, event);

	return {
		message: 'Unexpected error.',
		code: 'UNEXPECTED'
	};
};
