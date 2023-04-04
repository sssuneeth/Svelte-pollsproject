<script lang="ts">
  import AddNewPollForm from "$lib/components/AddNewPollForm.svelte";
import Header from "$lib/components/Header.svelte";
  import Tabs from "$lib/components/shared/Tabs.svelte";

  let items = ['Current Polls', 'Add new polls'];
  let activeItem = 'Current Polls';

  // change tab item
  const changeItem = (e: any) => {
    activeItem = e.detail;
  };
</script>

<svelte:head>
  <title>Svelte polls project</title>
</svelte:head>

<Header />
<main class="max-w-[900px] mx-auto my-[40px] flex flex-col items-center">
  <Tabs {items} {activeItem} on:changeItem={changeItem} />
  <div class="tabs-content mt-5">
    {#if activeItem === items[0]}
      <p>Current polls component</p>
    {:else if activeItem === items[1]}
      <AddNewPollForm />
    {/if}
  </div>
</main>
