<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let items: string[];
  export let activeItem: string;
</script>

<div class="tabs">
  <div class="flex items-center underline pb-1">
    {#each items as item}
      <div>
        <button
          on:click={() => dispatch('changeItem', item)}
          class={activeItem === item
            ? "pb-1 bg-stone-50 p-2 px-5 border-b-2 font-semibold"
            : "opacity-50 p-2 px-5 hover:opacity-100"}>{item}</button
        >
      </div>
    {/each}
  </div>
</div>
