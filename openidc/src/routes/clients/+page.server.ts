import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { API_KEY } from '$env/static/private';

//console.log('$env/dynamic/private', API_KEY);

export const load: PageServerLoad = async ({ fetch, depends }) => {
	const response = await fetch('/api/clients');
	//depends('app:clients');
	if (response.ok) {
		return {
			clients: response.json()
		};
	}
	const errorJSON = await response.json();
	throw error(response.status, errorJSON.message);
};
