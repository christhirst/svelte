import { writable } from 'svelte/store';

export const clients = writable([]);

const fetchClients = async () => {
	const url = `http://localhost:8280/oauth/clients`;
	const res = await fetch(url);
	const data = await res.json();
	clients.set(data);
};
fetchClients();
