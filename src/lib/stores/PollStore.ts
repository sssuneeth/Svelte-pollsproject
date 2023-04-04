import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: "Do you like svelte?",
    answerA: "Yep",
    answerB: "Nop",
    votesA: 7,
    votesB: 3,
  },
]);

export default PollStore;