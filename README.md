# Sapper Page Stores Demo

## Questions

How come the page store isn't reactive in the script tag?

```js
// _layout.svelte

let path

$: if (page.path === undefined) {
	path = "Home"
} else {
	path = page.path
}

$: console.log('page.path:', page.path)
$: console.log('path:', path)
```
