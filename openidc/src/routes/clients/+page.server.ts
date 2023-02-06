import { object, string, number, date, InferType } from 'yup';
import { error, fail } from '@sveltejs/kit';
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

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		const clientSchema = object({
			name: string().required(),
			email: string().required(),
			message: string().required()
		});

		try {
			const result = await clientSchema.validate({ name, email, message }, { abortEarly: false });
			console.log({ result });

			const clientLink = `https://`;
			const res = await fetch(clientLink);
			if (res.status != 200) {
				return;
			}
			return {
				success: true,
				message: 'Success'
			};
		} catch (error) {
			console.log({ error });
			const errors = error.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message };
			}, {});

			return {
				errors,
				name,
				email,
				message
			};
		}
	}
};
