<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Card from "./shared/Card.svelte";

  const dispatch = createEventDispatcher();
  export let poll: any = {};

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  // handle viote
  const handleVote = (option: string, id: number) => {
    dispatch("addVote", { option, id });
    console.log(percentA, percentB);
  };
</script>

<Card>
  <div class="poll-details">
    <h3 class="font-semibold">{poll.question}</h3>
    <h4 class="opacity-50 text-sm">Total votes: {totalVotes}</h4>
    <div class="answers mt-3 flex flex-col gap-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="answer-a relative bg-stone-100 rounded overflow-hidden p-2 pl-3 text-sm cursor-pointer hover:bg-stone-200/75"
        on:click={() => handleVote("a", poll.id)}
      >
        <div
          style="width: {percentA}%;"
          class="percent-a absolute top-0 left-0 h-full bg-blue-600/20 box-border"
        />
        <span>{poll.answerA} ({poll.votesA})</span>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="answer-b relative overflow-hidden bg-stone-100 rounded p-2 pl-3 text-sm cursor-pointer hover:bg-stone-200/75"
        on:click={() => handleVote("b", poll.id)}
      >
        <div
        style="width: {percentB}%;"
          class="percent-b absolute top-0 left-0 h-full w-[{percentB}%] bg-blue-600/10 box-border"
        />
        <span>{poll.answerB} ({poll.votesB})</span>
      </div>
    </div>
  </div>
</Card>
