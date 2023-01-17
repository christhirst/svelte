<script>
  const formValues = {
    name: "",
  };
  function submitForm(event) {
    event.preventDefault();
    console.log(formValues);
  }
  const names = ["Batman", "Test"];
  const channel = "<b>Code</b>";
  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

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
