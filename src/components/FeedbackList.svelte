<script>
    import {fade, scale} from 'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedback = [] // Setting feedback to an empty list in case the prop isn't there
</script>

{#each feedback as fb (fb.id) }
<div in:scale out:fade={{duration: 500}}>
    <FeedbackItem item={fb} on:delete-feedback/>
</div>
{/each}
