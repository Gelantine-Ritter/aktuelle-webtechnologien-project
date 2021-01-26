import { Selector } from 'testcafe'
import { baseURL, nameOfCard } from '../config'
import { createDeck, addCardToDeck } from '../helpers/crudOperations'
import { generateName } from '../utils'

fixture`Testing Crud-Functionality`.page(baseURL)

test('Create a deck', async (t) => {
  const nameOfDeck = generateName()
  //await createDeck(nameOfDeck)
})

test('Add cards to deck', async (t) => {
  const nameOfDeck = generateName()
  //await createDeck(nameOfDeck)
  // await addCardToDeck(nameOfDeck, nameOfCard)
})

test('Remove card from deck', async (t) => {
  const nameOfDeck = generateName()
  //await createDeck(nameOfDeck)
  // await addCardToDeck(nameOfDeck, nameOfCard)
})
