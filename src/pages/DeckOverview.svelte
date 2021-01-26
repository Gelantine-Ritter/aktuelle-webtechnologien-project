<script>
  import { crudcrudUrl } from '../config'
  import logger from '../monitoring/datadog-logger'

  export let deckliste = []
  getDecks()

  async function getDecks() {
    try {
      const response = await fetch(`${crudcrudUrl}/decks`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
      })
      const data = await response.json()
      deckliste = data
    } catch (e) {
      logger.error('Request failed: get deck, URL: ', crudcrudUrl)
    }
  }

  async function createDeck() {
    let titel = prompt('Wie soll das Deck heißen?', '')

    if (titel === null) {
      return
    }

    try {
      const response = await fetch(`${crudcrudUrl}/decks`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: titel,
          cards: [],
        }),
      })
      logger.info('New deck created', { body: titel })
    } catch (e) {
      logger.error('Request failed: create deck', { body: titel })
    }
    getDecks()
  }

  async function deleteDeck(deck) {
    try {
      await fetch(`${crudcrudUrl}/decks/${deck._id}`, {
        method: 'DELETE',
        mode: 'cors',
      })
    } catch (e) {
      logger.error('Request failed: delete deck, Deck_ID: ' + deck._id)
    }
    getDecks()
  }
</script>

<style>
  .DeckOverview {
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .deck {
    width: 220px;
    height: 300px;
    background-color: #ffffff;
    margin: 1em;
    border-radius: 5px;
    position: relative;
  }

  p {
    position: absolute;
    bottom: 0;
    width: 220px;
    height: 85px;
    font-family: Arial;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    color: #000000;
    background-color: #cccccc;
  }

  #delete-button {
    font-size: 15px;
    background-color: #cccccc;
    width: 100px;
    color: rgb(155, 0, 0);
  }

  a {
    font-size: 15px;
  }
</style>

<h1>Übersicht mit allen Decks</h1>

<button
  id="deck-anlegen-button"
  data-test="create-new-deck"
  on:click={createDeck}>Deck anlegen</button>
<div class="DeckOverview">
  {#each deckliste as deck (deck._id)}
    <div class="deck">
      <img src="https://media.wizards.com/2017/images/daily/ImyiSsT0tEZJ.png" alt="deckseite" />
      <p>
        {deck.name}
        <br />
        <a href="/deck/{deck._id}" data-test="update-deck">Deck bearbeiten</a>
        <br />
        <button
          id="delete-button"
          on:click={() => deleteDeck(deck)}>Löschen</button>
      </p>
    </div>
  {/each}
</div>
