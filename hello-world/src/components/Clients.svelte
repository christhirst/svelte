<script>
  import { ClientData } from "../stores";
  import { fade, scale } from "svelte/transition";
  import ClientsItem from "./ClientsItem.svelte";

  /* let clients = [];

  const unsubscribe = ClientData.subscribe((data) => (clients = data));
  onDestroy(() => {
    unsubscribe();
  }); */
</script>

{#await ClientData}
  {#each $ClientData as client, i}
    client
    <div in:scale out:fade={{ duration: 500 }}>
      <ClientsItem item={client} on:delete-client />
    </div>
  {:else}
    <p>loading...</p>
  {/each}
{/await}
<form><div><label for="name">Name</label></div></form>

<style></style>
