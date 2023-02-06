<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Clients',
			href: '/clients'
		},
		{
			title: 'Identityproviders',
			href: '/identityproviders'
		},
		{
			title: 'Syncs',
			href: '/syncs'
		},
		{
			title: 'User',
			href: '/user'
		},
		{
			title: 'Groups',
			href: '/groups'
		}
	];

	let currentTheme = '';
	onMount(() => {
		// currentTheme = document.documentElement.dataset.theme;
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const hasUserSetDarkModeManually = document.documentElement.dataset.theme == 'dark';
		if (!hasUserSetDarkModeManually) {
			setTheme(userPrefersDarkMode ? 'dark' : 'light');
		}
	});
	const setTheme = (theme: string) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
		currentTheme = theme;
	};

	$: url = $page.url.href;
	$: routeId = $page.url.pathname;
</script>

<nav>
	<div class="container">
		<a class="logo" href="/">
			<h1>Start Bootstrap</h1>
		</a>
		<ul>
			{#each navs as { title, href }}
				<li>
					<a {href} class:active={href === '/' ? routeId === '/' : url.includes(href)} {title}
						>{title}</a
					>
				</li>
			{/each}
			<li class="relative">
				{#if currentTheme == 'light'}
					<a class="moon" href={'#'} on:click={() => setTheme('dark')} />
				{:else}
					<a class="sun" href={'#'} on:click={() => setTheme('light')} />
				{/if}
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		padding: 0.5em;
		background-color: dodgerblue;
		color: white;
	}

	.container {
		display: flex;
		align-items: center;
	}

	ul {
		display: flex;
		margin: 0;
		margin-left: auto;
		list-style: none;
		font-size: 1em;
	}

	li {
		margin-right: 20px;
	}

	a {
		text-decoration: none;
		color: white;
	}
	.active {
		color: white;
	}
</style>
