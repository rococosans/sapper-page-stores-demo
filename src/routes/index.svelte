<script>
  import { stores } from "@sapper/app";
  const { page } = stores();

  console.log("page:", $page.path);
</script>

<h1>Great success!</h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>The route for this page is {$page.path}</strong></p>
<p>
  Take a look at the <strong>_layout.svelte</strong> component to see how to
  handle dynamic page titles.
</p>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 200px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
    text-align: center;
    font-size: 24px;
  }
</style>
