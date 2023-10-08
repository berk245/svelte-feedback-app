<script>
    import {onDestroy} from 'svelte'
    import {FeedbackStore} from '../stores'
    let feedback = []
    const unsubscribe = FeedbackStore.subscribe((data) => feedback = data )

	$: count = feedback.length;
	$: average = feedback.reduce((a, {rating}) => a + rating ,0) / feedback.length

    onDestroy(()=> unsubscribe)
	
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average.toFixed(1)}</h4>
</div>

<style>
    .feedback-stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>