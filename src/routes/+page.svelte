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
    let poll = e.detail;
    polls = [poll, ...polls];
    activeItem = items[0];
  };

  // add vote
  const addVoteHandler = (e: any) => {
    const { option, id } = e.detail;
    let copiedPolls = [...polls];
    let votedPoll = copiedPolls.find((poll) => poll.id === id);

    // check voting option
    if (option === "a" && votedPoll) {
      votedPoll.votesA++;
    }
    if (option === "b" && votedPoll) {
      votedPoll.votesB++;
    }

    polls = copiedPolls;
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
      <PollsList {polls} on:addVote={addVoteHandler} />
    {:else if activeItem === items[1]}
      <AddNewPollForm on:addPoll={addPoll} />
    {/if}
  </div>
</main>
