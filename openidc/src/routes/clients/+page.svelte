<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';
	import Button from '../../components/Button.svelte';
	import Form from '../../components/Form.svelte';
	import Meta from '../../components/Meta.svelte';

	export let data: PageData;

	$: clientsList = data.clients;
	console.log(data.clients);
	export let form;
	$: console.log(form);
</script>

<Meta title="IAM" description="iam server" type="test" />
<Form />

<h2>{data}</h2>

<Button
	on:click={() => {
		invalidate('app:clients');
	}}>Rerun</Button
>

<div class="container">
	{#if clientsList && clientsList.length > 0}
		<ul>
			<div class="grid">
				{#each clientsList as product}
					<li>
						{product.client_name} : {product.id}
					</li>

					<input type="hidden" name="id" value="ww" />
					<Button aria-label="Remove tweet" class="btn remove" title="Remove" type="submit">
						<div class="circle" />
						delete
					</Button>
				{/each}
			</div>
		</ul>
	{/if}
</div>

<style>
	.grid {
		display: list-item;
		grid-template-columns: repeat(3, 1fr);
		gap: 2;
	}
</style>
