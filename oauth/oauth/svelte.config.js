import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		alias: {
			$components: 'src/lib/components'
		},
		paths: {
			base: ''
		},
		adapter: adapter({
			pages: '../static',
			assets: '../static'
		})
	}
};

export default config;
