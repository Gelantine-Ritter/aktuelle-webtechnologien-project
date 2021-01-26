<script>
  import Card from './Card.svelte'
  import logger from '../monitoring/datadog-logger'

  let suchbegriff = ''

  export let cards = []
  export let hasSearch = true

  async function searchCards() {
    const url = 'https://api.scryfall.com/cards/search?q=' + suchbegriff
    try {
      const response = await fetch(url)
      const data = (await response.json()).data
      cards = data
    } catch (e) {
      logger.error('searchCards', e)
    }
  }

  function onKeyDown(event) {
    if (event.code === 'Enter') {
      searchCards()
    }
  }
</script>

<style>
  .ubersicht {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>

{#if hasSearch}
  <input
    bind:value={suchbegriff}
    placeholder="Karte suchen"
    data-test="input-search-for-card"
    on:keydown={onKeyDown} />
{/if}

<div class="ubersicht">
  {#if cards && cards.length !== 0}
    {#each cards as card, i (card.id + i)}
      <div class={card.name}>
        <Card {card} />
        <slot {card} />
      </div>
    {/each}
  {:else}
    <div>No Cards found</div>
  {/if}
</div>
