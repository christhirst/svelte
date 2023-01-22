<script lang="ts" context="module">
	console.log('eerwerwwwwe!');
	const location = '/login';

	let jj: object = { name: 'test' };

	export async function load() {
		// Do some magic here... ✨
		console.log('eerwerwe#www');
		return { props: jj };
	}

	export async function loads() {
		console.log('eerwerwe#');
		return {
			status: 302,
			redirect: location
		};
	}
</script>

<script lang="ts">
	export let jj: object;
</script>

<div class="div">{jj}</div>
