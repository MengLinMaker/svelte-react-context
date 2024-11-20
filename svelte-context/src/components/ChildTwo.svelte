<script lang="ts">
  import { context } from "./context"
  const contextValue = context.getContext()

  let i = 1
  setInterval(() => {
    // Svelte state change is just reassigning a value
    contextValue.name = `2. Amy: ${i++}`
  }, 1000)
</script>

<p>{contextValue.name}</p>
