<script lang="ts">
  export let type = "primary";
</script>

<button
  class={`${type === "primary"
    ? "bg-blue-600 text-white"
    : type === 'secondary'
    ? 'bg-blue-200 text-black'
    : ""
    }
    w-full rounded text-sm font-semibold p-2`}
>
  <slot />
</button>
