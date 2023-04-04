<script lang="ts">
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  import PollDetails from "./PollDetails.svelte";
  import PollStore from "$lib/stores/PollStore";
</script>

<div class="poll-list w-full">
  {#if $PollStore.length > 0}
    <div class="grid grid-cols-2 gap-5">
      {#each $PollStore as poll (poll.id)}
        <div class="col-span-1" in:fade={{duration: 250}} animate:flip={{duration: 500}}>
          <PollDetails {poll} />
        </div>
      {/each}
    </div>
  {:else}
    <span class="text-sm opacity-60">No more polls left, add new one</span>
  {/if}
</div>
