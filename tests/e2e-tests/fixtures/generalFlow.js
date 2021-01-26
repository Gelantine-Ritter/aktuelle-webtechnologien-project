import { Selector } from 'testcafe'
import { baseURL, nameOfCard } from '../config'
import {
  checkIfElementExists,
  checkInput,
  checkRoute,
  clickButton,
  enterText,
} from '../helpers/basicOperations'

fixture`Testing General Flow`.page(baseURL)

const btnNavigatToDecks = '[data-test="navigate-decks"]'
const btnSearchForCards = '[data-test="search-for-cards"]'
const inputSearchForCard = '[data-test="input-search-for-card"]'

test('Check buttons on startpage exist', async (t) => {
  await checkIfElementExists(btnNavigatToDecks)
  await checkIfElementExists(btnSearchForCards)
})

test('Navigation to deck-route', async (t) => {
  const route = await Selector(btnNavigatToDecks).getAttribute('href')
  await clickButton(btnNavigatToDecks)
  await checkRoute(route)
})

test('Navigation to search-for-cards-route', async (t) => {
  const route = await Selector(btnSearchForCards).getAttribute('href')
  await clickButton(btnSearchForCards)
  await checkRoute(route)
})

test('TextInput for Search-Query', async (t) => {
  await enterText(inputSearchForCard, nameOfCard)
  await checkInput(inputSearchForCard, nameOfCard)
})

test('Functionality of Search-Query', async (t) => {
  await enterText(inputSearchForCard, nameOfCard, true)
  await checkIfElementExists(`.${nameOfCard}`)
})
