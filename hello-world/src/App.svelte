<script>
  import ClientsView from "./components/Clients.svelte";
  import AddClient from "./components/AddClient.svelte";
  import Sso from "./components/Sso.svelte";
  import { ClientData } from "./stores.js";
  import { onMount } from "svelte";
  let clients = [];

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

  const names = ["Batman", "Test"];
  const channel = "<b>Code</b>";
  let count = 0;
  function handleClick() {
    count += 1;
  }
  const formValues = {
    name: "",
  };
  function submitForm(event) {
    event.preventDefault();
    console.log(formValues);
  }

  /*  const deleteClient = (e) => {
    const itemId = e.detail;
    // TODO  {item.client_id} -->
    clients = clients.filter((item) => item.client_name != itemId);
  }; */

  $: count = clients.length;

  const addClient = (e) => {
    const newClient = e.detail;
    clients = [newClient, ...clients];
    console.log(e.detail);
  };
</script>

<main>
  <h1>{count}</h1>
  <Sso />

  <AddClient on:add-client={addClient} />

  <ClientsView />

  {#each names as name, index}
    <h2>{index + 1} {name}</h2>
  {/each}
  <div><pre>{JSON.stringify(formValues)}</pre></div>

  <form on:submit={submitForm}>
    <div><input type="text" id="name" bind:value={formValues.name} /></div>
  </form>
  <input type="text" id="name" bind:value={formValues.name} />

  <button on:click={handleClick}>Count {count}</button>
  <div>{@html channel}</div>
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
</style>
