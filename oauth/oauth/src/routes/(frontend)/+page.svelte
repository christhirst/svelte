<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { Button } from '$components';
	import { navigating } from '$app/stores';
	beforeNavigate((navigation) => {
		console.log;
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About</a>

<button
	on:click={() => {
		goto('/about');
	}}>Go to About</button
>

<Button />
