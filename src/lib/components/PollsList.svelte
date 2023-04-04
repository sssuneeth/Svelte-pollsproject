<script lang="ts">
  import PollDetails from "./PollDetails.svelte";

  export let polls: any = [];
</script>

<div class="poll-list w-full">
  <div class="grid grid-cols-2 gap-5">
    {#each polls as poll}
      <div class="col-span-1">
        <PollDetails {poll} on:addVote />
      </div>
    {/each}
  </div>
</div>
