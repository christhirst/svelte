import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit';
import { resolveBaseUrl } from 'vite';

export const handle1: Handle = async ({ event, resolve }) => {
	const { locals, cookies, isDataRequest, url } = event;

	if (!url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		locals.user = token ? { name: 'John', id: 1 } : undefined;
	}

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
