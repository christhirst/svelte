<script lang="ts">
  import { ClientData } from "../stores";
  import { fade, scale } from "svelte/transition";
  import ClientsItem from "./ClientsItem.svelte";
</script>

{#await $ClientData then clients}
  {#each clients as client, i}
    {i}
    <div in:scale out:fade={{ duration: 500 }}>
      <ClientsItem index={i} item={client} />
    </div>
  {/each}
{/await}
<form><div><label for="name">Name</label></div></form>

<style></style>
