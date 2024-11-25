<script lang="ts">
  import type { Component } from 'svelte'
  import { context, type Context } from './context'

  const props = $props<{ value: Context, children: Component}>()
  context.setContext(props.value)
</script>

{@render props.children()}
