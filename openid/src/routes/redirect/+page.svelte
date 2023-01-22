<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	const email: string = $page.url.pathname;
	const rr = $page.url.searchParams.get('code');
	console.log('tetet');
	console.log(email);
	console.log(rr);
	let hostname: string = 'http://localhost:8280/oauth';
	let url: string =
		hostname + '/' + 'token?code=' + rr + '&' + '&state=username&grant_type=authorization_code';
	console.log(url);

	interface login {
		access_token: string;
		token_type: string;
		refresh_token: string;
		expires_in: number;
		properties: null;
		id_token: string;
	}
	const jso =
		'{"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0YmUyNDBiLTlkNGUtNDJlOC1hMWUzLWVmMDcwYjQwZjg1NCIsInR5cCI6IkpXVCJ9.eyJmb28iOiJjbiIsIm5vbmNlIjoiY29kZSIsImdyb3VwcyI6WyJkZWZhdWx0Il0sImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjgyODAiLCJzdWIiOiJkd2lkdGgiLCJhdWQiOlsiY2xpZW50bmFtZTMiXSwiZXhwIjoxNjc0NDgzNDM5LCJuYmYiOjE2NzQzOTcwMzcsImlhdCI6MTY3NDM5NzAzOSwianRpIjoiMSJ9.d3sKN7r2BrceUjq9CMxthw2cNCkzoBAGikajlKOTg0TGNK6tPbGOKudw_3SU7QrINdfa91qwaCkevXjj7_WOXtMwib2-7W5Aqv9aSIO7Lga6L7voC0UIWD6QhoNIg_f1OmwzydVpIgk1d6HYrL5vv7Wjo-UqeByKl7T_cHHJxbObdE4meCUo3gWCB_X_OtkjfaJGcohb0XeHaMI9Y5cbo6Q-Y-_RKOA2K7Yf2LMH_n8JO6Ef8J3j4abZN1QCx8A4mKHsZJKTf808IHTuxRpGcZxnw0_GPvNguCIhqoctKoL8z-Ascn5lKqgMHZTnF2y9wvmKdAcB83sbnPGMLhmXrw","token_type":"Bearer","refresh_token":"PxTdunWdChKVgqY0+vQcnJ2ZUdQlFmhzZpjcHdzCJxYUQvPpho+lLRNbHjrd6B7CRfIhfFrKYONRy6xEivNUlU9xXtKSe1t3FGAD4P7Iw1UcyOub5iukX0rgrcvC5jRrv0I4XiVCcWiM3ORr8Gv4VLHXn8UIvIyioQsWWfd/UqTLm3Ma7qvKnmnmKcf8hTEIGKJCwFp3o9Z1fVoNSPHCNu9ixX8NGWcpK/2I+a9VoV72PUexf/qgz8DlYBSy0lGnJ+jArO7UfaI=","expires_in":120,"properties":null,"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0YmUyNDBiLTlkNGUtNDJlOC1hMWUzLWVmMDcwYjQwZjg1NCIsInR5cCI6IkpXVCJ9.eyJmb28iOiJjbiIsIm5vbmNlIjoiY29kZSIsImdyb3VwcyI6WyJkZWZhdWx0Il0sImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjgyODAiLCJzdWIiOiJkd2lkdGgiLCJhdWQiOlsiY2xpZW50bmFtZTMiXSwiZXhwIjoxNjc0NDgzNDM5LCJuYmYiOjE2NzQzOTcwMzcsImlhdCI6MTY3NDM5NzAzOSwianRpIjoiMSJ9.d3sKN7r2BrceUjq9CMxthw2cNCkzoBAGikajlKOTg0TGNK6tPbGOKudw_3SU7QrINdfa91qwaCkevXjj7_WOXtMwib2-7W5Aqv9aSIO7Lga6L7voC0UIWD6QhoNIg_f1OmwzydVpIgk1d6HYrL5vv7Wjo-UqeByKl7T_cHHJxbObdE4meCUo3gWCB_X_OtkjfaJGcohb0XeHaMI9Y5cbo6Q-Y-_RKOA2K7Yf2LMH_n8JO6Ef8J3j4abZN1QCx8A4mKHsZJKTf808IHTuxRpGcZxnw0_GPvNguCIhqoctKoL8z-Ascn5lKqgMHZTnF2y9wvmKdAcB83sbnPGMLhmXrw","scope":""}';
	const myAsync = async function doPost(): Promise<string> {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				Authorization: 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'
			}
		});
		const json = await res.json();
		let parsed: login = JSON.parse(jso);
		console.log('+++++++');
		console.log(parsed.expires_in);

		return json;
	};

	$: callback = myAsync().then((val) => console.log(val));
	console.log('callback');

	console.log(callback);
	//throw redirect(301, url);
</script>
