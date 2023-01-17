<script>
  import ClientsView from "./components/Clients.svelte";
  import AddClient from "./components/AddClient.svelte";
  import Home from "./components/Home.svelte";

  import { ClientData } from "./stores.js";
  import { onMount } from "svelte";
  let clients = [];
  export let menu = 1;
  onMount(async () => {
    fetch("http://localhost:8280/oauth/clients")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        ClientData.set(data);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });

  /*  const deleteClient = (e) => {
    const itemId = e.detail;
    // TODO  {item.client_id} -->
    clients = clients.filter((item) => item.client_name != itemId);
  }; */

  const addClient = (e) => {
    const newClient = e.detail;
    clients = [newClient, ...clients];
    console.log(e.detail);
  };
</script>

<main>
  Test
  <ul id="menu">
    <li><a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a></li>
    |
    <li><a href="/" on:click|preventDefault={() => (menu = 2)}>Clients</a></li>
    |
    <li>
      <a href="/" on:click|preventDefault={() => (menu = 3)}>Add Client</a>
    </li>
    |
    <li>
      <a href="/" on:click|preventDefault={() => (menu = 4)}>Add Provider</a>
    </li>
    |
    <li><a href="/" on:click|preventDefault={() => (menu = 5)}>Add Sync</a></li>
  </ul>

  {#if menu === 1}
    <Home />
  {:else if menu === 2}
    <ClientsView />
  {:else if menu === 3}
    <AddClient on:add-client={addClient} />
  {:else if menu === 4}
    <ClientsView />
  {:else if menu === 5}
    <ClientsView />
  {:else if menu === 6}
    <ClientsView />
  {:else}
    <h1>Page Not Found</h1>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  ul#menu li {
    display: inline;
  }
</style>
