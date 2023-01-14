import { writable } from 'svelte/store'

export function getData(url) {

const ClientsStore = writable(new Promise(()=>{}))

const load = async () => {
    let url = "http://localhost:8280/oauth/clients"
    const response = await fetch(url);
    const data = await response.json();
    ClientsStore.set(Promise.resolve(data))
    console.log(data)
};

load();

return ClientsStore;



}

export const ClientData = getData("")