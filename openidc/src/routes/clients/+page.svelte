<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: clientsList = data.clients;
	console.log(data.clients);
</script>

<h2>{data}</h2>

<button
	on:click={() => {
		invalidate('app:clients');
	}}>Rerun</button
>

{#if clientsList && clientsList.length > 0}
	<ul>
		{#each clientsList as product}
			<li>
				{product.client_name} : {product.id}
			</li>
		{/each}
	</ul>
{/if}

<style>
</style>
