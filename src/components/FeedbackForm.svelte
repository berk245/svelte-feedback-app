<script>
  import { v4 as uuidv4 } from "uuid";
  import {FeedbackStore} from '../stores';
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let btnDisabled = true;
  let feedbackText = "";
  let minTextLength = 10;
  let rating = 10;


  $: errorMsg =feedbackText.length > 10 ? "": `Text must be at least ${minTextLength} characters.`;
  $: btnDisabled = feedbackText.length > 10 ? false : true;

  const handleRatingSelect = (e) => (rating = e.detail);
  const handleSubmit = () => {
    if (feedbackText.trim().length > minTextLength) {
      const newFeedback = {
        text: feedbackText,
        rating: +rating,
        id: uuidv4(),
      };

      FeedbackStore.update((currentList) => {
        return [newFeedback, ...currentList]
      })

      feedbackText = ''
    }
  };



</script>

<Card>
  <form on:submit|preventDefault={handleSubmit}>
    <!-- Rating Select -->
    <RatingSelect on:rating-select={handleRatingSelect} />
    <div class="input-group">
      <input
        type="text"
        placeholder="Tell us something that keeps you coming back"
        bind:value={feedbackText}
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if errorMsg}
      <div class="message">{errorMsg}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
