<script>
  import './monitoring/datadog-RUM'
  import router from 'page'

  import DeckOverview from './pages/DeckOverview.svelte'
  import AddCard from './pages/AddCard.svelte'
  import SearchCard from './pages/SearchCard.svelte'
  import EditDeck from './pages/EditDeck.svelte'

  let page = SearchCard

  router('/kartensuche', () => (page = SearchCard))
  router('/deck', () => (page = DeckOverview))

  let params
  router(
    '/deck/:id',
    (ctx, next) => {
      params = ctx.params
      next()
    },
    () => (page = EditDeck),
  )

  router(
    '/deck/:id/kartehinzufuegen',
    (ctx, next) => {
      params = ctx.params
      next()
    },
    () => (page = AddCard),
  )

  router.start()
</script>

<style>
  :global(body) {
    background-color: #000000da;
    color: #ffffff;
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
    float: right;
    margin-left: 1em;
    margin-right: 1em;
  }
</style>

<header>
  <a href="/kartensuche" data-test="search-for-cards">Karte suchen</a>
  <a href="/deck" data-test="navigate-decks">Decks</a>
</header>

<svelte:component this={page} {params} />
