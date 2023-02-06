<script lang="ts">
	export let data;
	const { posts } = data;
	$: console.log(data);
</script>

<div class="container">
	<h2>Blog Posts</h2>
	<!-- <ul>
		{#each posts as post}
			<li><a href={post.id}>{post.title}</a></li>
		{/each}
	</ul> -->
</div>

<style>
	li {
		margin-bottom: 0.5em;
	}
</style>
