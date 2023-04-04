<script lang="ts">
  import PollStore from "$lib/stores/PollStore";
  import Button from "./shared/Button.svelte";
  import Card from "./shared/Card.svelte";

  export let poll: any = {};

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  // handle viote
  const handleVote = (option: string, id: number) => {
    PollStore.update((curPolls: any) => {
      let copiedPolls = [...curPolls];
      let votedPoll = copiedPolls.find((poll) => poll.id === id);

      // check voting option
      if (option === "a" && votedPoll) {
        votedPoll.votesA++;
      }
      if (option === "b" && votedPoll) {
        votedPoll.votesB++;
      }
      return copiedPolls;
    });
  };

  // delete poll
  const handleDelete = (id: number) => {
    PollStore.update(curPolls => {
      return curPolls.filter(poll => poll.id !== id)
    })
  }
</script>

<Card>
  <div class="poll-details">
    <h3 class="font-semibold">{poll.question}</h3>
    <h4 class="opacity-50 text-sm">Total votes: {totalVotes}</h4>
    <div class="answers mt-3 flex flex-col gap-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="answer-a relative bg-stone-100 h-10 rounded overflow-hidden flex items-center text-sm cursor-pointer hover:bg-stone-200/75"
        on:click={() => handleVote("a", poll.id)}
      >
        <div
          style="width: {percentA}%;"
          class="percent-a absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-500 box-border"
        />
        <span
          class="absolute ml-3 {poll.votesA > 0 ? 'text-white' : 'text-black'}"
          >{poll.answerA} ({poll.votesA})</span
        >
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="answer-b relative overflow-hidden bg-stone-100 rounded h-10 flex items-center text-sm cursor-pointer hover:bg-stone-200/75"
        on:click={() => handleVote("b", poll.id)}
      >
        <div
          style="width: {percentB}%;"
          class="percent-b absolute top-0 left-0 h-full w-[{percentB}%] bg-gradient-to-r from-blue-600 to-blue-500 box-border"
        />
        <span
          class="absolute ml-3 {poll.votesB > 0 ? 'text-white' : 'text-black'}"
          >{poll.answerB} ({poll.votesB})</span
        >
      </div>
    </div>
    <div class="mt-3 grid place-items-end">
      <button
        on:click={() => handleDelete(poll.id)}
        class="text-xs bg-red-500 p-2 px-3 font-semibold rounded text-white"
        >Delete</button
      >
    </div>
  </div>
</Card>
