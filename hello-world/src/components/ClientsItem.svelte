<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  export let item;
  const dispatch = createEventDispatcher();

  const handleDelete = (itemId) => {
    console.log(itemId);
    dispatch("delete-client", itemId);
  };
</script>

<Card>
  <div class="num-disply">
    <!-- // TODO  {item.client_id} -->
    <h3>{item.client_name}. {item.client_id}</h3>
  </div>
  <button class="close" on:click={() => handleDelete(item.client_name)}
    >X</button
  >
  <!-- <p class="text-display">{item.text}</p> -->
  Hello:
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: orange;
    color: brown;
    border: 1px white solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
