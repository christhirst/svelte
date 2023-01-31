<script lang="ts">
	/* import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { BaseClient, Issuer } from 'openid-client';
	import { page } from '$app/stores';
	import { client, code_verifier } from '../../stores.js';
	let result;
	let countValue;
	let tee = async () => {
		const data = await Issuer.discover(
			'http://localhost:8280/oauth/.well-known/openid-configuration'
		);

		console.log('###1###');
		const client = new data.Client({
			client_id: 'clientname3',
			client_secret: 'test_secret',
			redirect_uris: ['http://localhost:5173/redirect'],
			response_types: ['code']
			// id_token_signed_response_alg (default "RS256")
			// token_endpoint_auth_method (default "client_secret_basic")
		}); // => Client
		const rr = $page.url.searchParams.get('code');
		let hostname: string = 'http://localhost:8280/oauth';
		let url: string =
			hostname +
			'/' +
			'token?code=' +
			$page.url +
			'&' +
			'&state=username&grant_type=authorization_code';

		console.log('###!!!###');
		const params = client.callbackParams('req');
		console.log(params);

		const tokenSet = await client.callback(url, params, {
			code_verifier
		});
		console.log('received and validated tokens %j', tokenSet);
		console.log('validated ID Token claims %j', tokenSet.claims());
	};
	tee().then(); */
	/* const email: string = $page.url.pathname;
	const rr = $page.url.searchParams.get('code');
	console.log('tetet');
	console.log(email);
	console.log(rr);
	let hostname: string = 'http://localhost:8280/oauth';
	let url: string =
		hostname + '/' + 'token?code=' + rr + '&' + '&state=username&grant_type=authorization_code';
	console.log(url);

	// store the code_verifier in your framework's session mechanism, if it is a cookie based solution
	// it should be httpOnly (not readable by javascript) and encrypted.

	interface login {
		access_token: string;
		token_type: string;
		refresh_token: string;
		expires_in: number;
		properties: null;
		id_token: string;
	}

	const myAsync = async function doPost(): Promise<string> {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				Authorization: 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'
			}
		});
		console.log('#####');
		let eee;
		res.json().then((val) => console.log(val.expires_in));
		console.log(eee);
		return 'json';
	};
	$: callback = myAsync().then((val) => console.log(val));
	console.log('+++++!!++');
	console.log(countValue);
	console.log('callback');
	console.log('test#');
	console.log(result); */
	//throw redirect(301, url);
</script>
