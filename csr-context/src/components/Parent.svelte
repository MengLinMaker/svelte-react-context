<script lang="ts">
  import type { Component } from 'svelte'
  import { context } from './context'

  const props = $props<{ name: string, children: Component}>()
  context.setContext({ name: props.name})
</script>

{@render props.children()}
