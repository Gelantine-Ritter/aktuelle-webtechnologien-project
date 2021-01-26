<script>
  import { onMount } from 'svelte'
  import CardOverview from '../components/CardOverview.svelte'
  import { crudcrudUrl } from '../config.js'
  import { writable } from 'svelte/store'
  import logger from '../monitoring/datadog-logger'

  const store = writable({})

  export let params
  let deckId = ''

  const getID = () => {
    deckId = params.id
  }

  onMount(() => {
    getID()
  })

  async function getDeck() {
    const url = `${crudcrudUrl}/decks/${deckId}`
    const response = await fetch(url)
    return await response.json()
  }

  async function addToDeck(card) {
    const deck = await getDeck()
    deck.cards.push(card)
    store.cards = deck.cards
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
      logger.error('Request failed: add card to deck:', { body: deck.name })
    }
  }
</script>

<style>
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

  h1 {
    display: inline-block;
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

<div class="AddCard">
  <h1>Karte hinzufügen</h1>
  <a href="/deck/{deckId}" data-test="navigate-back-to-deck">Zurück zum Deck</a>
  <br />
  <CardOverview {deckId} let:card>
    <button on:click={() => addToDeck(card)}>Add to Deck</button>
  </CardOverview>
</div>
