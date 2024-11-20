## Difference between React vs Svelte context

Similarities:
- Render without prop drilling.
- The "closest" Parent context is inherited by Child.

Differences:
- Reactivity: React needs to expose `setValue` to set `value`, whereas svelte can directly mutate state.
- React Child can exist without Parent. In Svelte, Child must exists whithin Parent.

![ezgif-6-0283a02d95](https://github.com/user-attachments/assets/4e78a5eb-fcb3-4e41-9af2-cc3419411913)
