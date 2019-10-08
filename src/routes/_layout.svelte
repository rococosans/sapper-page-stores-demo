<script>
	import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();

	import { unslugify } from '../utils';
	import Nav from '../components/Nav.svelte';

	/**
	 * This route (http://localhost:3000/?title=test&me=cool) returns for: $page
	 * 
	 * page: {
	 * 	host: 'localhost:3000',
	 * 	params: {
	 * 		returns an object of the dynamic parameters
	 * 		you have specified using [brackets].svelte
	 * 	},
	 * 	path: '/',
	 * 	query: {
	 * 		title: 'test',
	 * 		me: 'cool'
	 * 	}
	 * }
	 * 
	 */

	export let segment;
	
	//* Dynamic TITLE for head
	//* Will be overwritten by page level <svelte:head>
	//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	let path;
	
	$: if ($page.path === '/') {
		path = "Home";
	} else {
		const splitpath = $page.path.split('/');
		const pathname = splitpath[splitpath.length - 1]
		path = unslugify(pathname);
	}

	$: console.log('\n', 'page.path:', $page.path, "\n", 'path:', path);
	//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</script>

<svelte:head>
	<title>{$page.path === "/" ? "Home" : path}</title>
</svelte:head>

<Nav {segment}/>

<p>
	<strong>$page.path:</strong> {$page.path}
</p>
<p>
	<strong>title:</strong> {path}
</p>

<main>
	<slot></slot>
</main>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	p {
		text-align: center;
		font-size: 36px;
	}
</style>
