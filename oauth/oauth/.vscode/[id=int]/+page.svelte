<script>
import {page} from '$app/stores'
import ClientHeader from './ClientHeader.svelte';

$: console.log($page)


</script>

<ClientHeader></ClientHeader>

<h1>Client</h1>

<p>Client ID {$page.params.id}</p>

<a href="/clients/2">Other Client</a>