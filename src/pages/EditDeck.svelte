<script>
  import { crudcrudUrl } from '../config'
  import { onMount } from 'svelte'
  import CardOverview from '../components/CardOverview.svelte'
  import logger from '../monitoring/datadog-logger'

  export let params
  export let deck = {}
  let deckId = ''
  let suchbegriff = ''

  const getID = () => {
    deckId = params.id
  }

  async function getDeck() {
    const url = `${crudcrudUrl}/decks/${deckId}`
    const response = await fetch(url)
    deck = await response.json()
  }

  async function removeFromDeck(card) {
    deck.cards = deck.cards.filter((c) => c != card)
    try {
      await fetch(`${crudcrudUrl}/decks/${deckId}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: deck.name,
          cards: deck.cards,
        }),
      })
    } catch (e) {
      logger.error('Request failed: remove Card from Deck', {
        body: deck.name,
      })
    }
  }

  onMount(() => {
    getID()
    getDeck()
  })
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  a {
    width: 165px;
    height: 24px;
    font-family: OpenSans-Regular;
    font-size: 20px;
    text-align: center;
    color: #282828;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-left: 1em;
    margin-right: 1em;
  }

  button {
    width: 165px;
    height: 28px;
    font-family: OpenSans-Regular;
    font-size: 20px;
    color: #282828;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 2em;
    padding: 0px;
  }
</style>

<h1>{deck.name}</h1>
<a href="/deck/{deckId}/kartehinzufuegen" data-test="add-card-to-deck">Karte hinzufügen</a>
<div>
  {#if deck.cards && deck.cards.length !== 0}
    <CardOverview cards={deck.cards} hasSearch={false} let:card>
      <button on:click={() => removeFromDeck(card)}>Remove</button>
    </CardOverview>
  {:else}
    <p>no cards in this deck</p>
  {/if}
</div>
