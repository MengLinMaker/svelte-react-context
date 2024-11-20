<script lang="ts">
  import { context } from "./context"
  const contextValue = context.getContext()
</script>

<p>{contextValue.name}</p>
