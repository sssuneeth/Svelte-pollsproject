<script>
  import Button from "./shared/Button.svelte";

  let poll = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;
  // handle submit
  const formSubmitHandler = () => {
    valid = true;
    // check question is valid
    if (poll.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must contains atlest 5 characters";
    } else {
      errors.question = "";
    }
    // check answer A
    if (poll.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty";
    } else {
      errors.answerA = "";
    }
    // check answer B
    if (poll.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B cannot be empty";
    } else {
      errors.answerB = "";
    }
    // if form is valid
    if (valid) {
      console.log(poll);
    }
  };
</script>

<form on:submit={formSubmitHandler} class="flex flex-col gap-2 w-72">
  <div>
    <input
      type="text"
      placeholder="Quesiton..."
      class="outline-none p-2 pl-5 border rounded w-full"
      bind:value={poll.question}
    />
    {#if errors.question}
      <span class="text-xs text-red-500 pl-5">{errors.question}</span>
    {/if}
  </div>
  <div>
    <input
      type="text"
      placeholder="Answer A..."
      class="outline-none p-2 pl-5 border rounded w-full"
      bind:value={poll.answerA}
    />
    {#if errors.answerA}
      <span class="text-xs text-red-500 pl-5">{errors.answerA}</span>
    {/if}
  </div>
  <div>
    <input
      type="text"
      placeholder="Answer B..."
      class="outline-none p-2 pl-5 border rounded w-full"
      bind:value={poll.answerB}
    />
    {#if errors.answerB}
      <span class="text-xs text-red-500 pl-5">{errors.answerB}</span>
    {/if}
  </div>
  <Button>Submit</Button>
</form>
