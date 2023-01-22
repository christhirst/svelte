import { redirect } from '@sveltejs/kit';

export const load = () => {
	console.log('dddd');

	throw redirect(301, '/');
	return {
		status: 302,
		redirect: '/rrr'
	};
};
