<script lang="ts">
  import Home from "./components/Home.svelte";
  import ClientsView from "./components/Clients.svelte";
  import AddClient from "./components/AddClient.svelte";
  import Auth from "./components/Auth.svelte";
  //export let name: string;
  export let menu = 1;
  let clients = [];
  const addClient = (e) => {
    const newClient = e.detail;
    clients = [newClient, ...clients];
    console.log(e.detail);
  };
</script>

<main>
  <h1>Edison</h1>

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
    <Auth />
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

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
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
