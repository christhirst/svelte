<script>
  import { v4 as uuidv4 } from "uuid";
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import { ClientData } from "../stores";

  const dispatch = createEventDispatcher();

  let text = "";
  let btnDisabled = true;
  let min = 10;
  let message;
  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };
  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newClient = {
        id: uuidv4(),
        text,
      };

      ClientData.update((currentClients) => {
        return [newClient, ...currentClients];
      });

      text = "";
    }
  };
</script>

<Card>
  <header><h2>Add Client</h2></header>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Input Client"
      />
      <Button disabled={btnDisabled} type="submit">Add</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
