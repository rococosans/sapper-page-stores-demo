<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();

	import Nav from '../components/Nav.svelte';
	
	export let segment;

	/**
	 * This route (http://localhost:3000/?title=test&me=cool) returns for: $page
	 * 
	 * page: {
	 * 	host: 'localhost:3000',
	 * 	params: returns an object?,
	 * 	path: '/',
	 * 	query: {
	 * 		title: 'test',
	 * 		me: 'cool'
	 * 	}
	 * }
	 * 
	 */


	//* EXAMPLE of unexpected behavior
	//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	let path
	
	$: if (page.path === undefined) {
		path = "Home"
	} else {
		path = page.path
	}

	$: console.log('page.path:', page.path)
	$: console.log('path:', path)
	//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</script>

<svelte:head>
	<title>{$page.path === "/" ? "Home" : $page.path}</title>
</svelte:head>

<Nav {segment}/>

<p>
	<strong>$page.path:</strong> {$page.path}
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
