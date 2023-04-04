<script lang="ts">
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "$lib/stores/PollStore";
</script>

<div class="poll-list w-full">
  {#if $PollStore.length > 0}
    <div class="grid grid-cols-2 gap-5">
      {#each $PollStore as poll}
        <div class="col-span-1">
          <PollDetails {poll} on:addVote />
        </div>
      {/each}
    </div>
  {:else}
    <span class="text-sm opacity-60">No more polls left, add new one</span>
  {/if}
</div>
