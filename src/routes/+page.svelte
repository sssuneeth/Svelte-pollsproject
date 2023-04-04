<script lang="ts">
  import AddNewPollForm from "$lib/components/AddNewPollForm.svelte";
  import Header from "$lib/components/Header.svelte";
  import PollsList from "$lib/components/PollsList.svelte";
  import Tabs from "$lib/components/shared/Tabs.svelte";

  let items = ["Current Polls", "Add new polls"];
  let activeItem = "Current Polls";

  // polls
  let polls = [
    {
      id: 1,
      question: "Do you like svelte?",
      answerA: "Yep",
      answerB: "Nop",
      votesA: 7,
      votesB: 3,
    },
  ];

  // change tab item
  const changeItem = (e: any) => {
    activeItem = e.detail;
  };
  // add new poll to polls
  const addPoll = (e: any) => {
    activeItem = items[0];
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
      <PollsList />
    {:else if activeItem === items[1]}
      <AddNewPollForm on:addPoll={addPoll} />
    {/if}
  </div>
</main>
