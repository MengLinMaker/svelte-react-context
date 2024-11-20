<script lang="ts">
    import Child from "./components/Child.svelte"
    import ChildTwo from "./components/ChildTwo.svelte"
import Parent from "./components/Parent.svelte"
</script>

<main>
  <h2>Svelte context</h2>

  <h3>Child in div in parent</h3>
  <Parent name="1. John">
    <div>
      <Child/>
    </div>
  </Parent>
  
  <h3>Context reactivity</h3>
  <Parent name="2. Amy">
    <Child/>
    <ChildTwo/>
  </Parent>

  <h3>Closest context wins</h3>
  <Parent name="3. Nested">
    <Parent name="3.1. Nessie">
      <Child/>
    </Parent>
  </Parent>

  <h3>No parent throws error</h3>
  <a target="_blank" href="https://github.com/sveltejs/svelte/pull/14211"><p>Svelte has no error boundaries yet</p></a>
</main>
