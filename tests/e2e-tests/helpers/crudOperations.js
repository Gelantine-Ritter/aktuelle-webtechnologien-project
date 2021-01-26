import { Selector, t } from 'testcafe'
import { baseURL } from '../config'

/**
 * data-test-Selectors
 */

const navigateDecks = '[data-test="navigate-decks"]'
const createNewDeck = '[data-test="create-new-deck"]'
const updateDeck = '[data-test="update-deck"]'
const btnAddCardToDeck = '[data-test="add-card-to-deck"]'
const inputSearchForCard = '[data-test="input-search-for-card"]'
const navigateBackToDeck = '[data-test="navigate-back-to-deck"]'

const createDeck = async (nameOfDeck) => {
  await t
    .setNativeDialogHandler(() => nameOfDeck, {
      dependencies: { nameOfDeck },
    })
    .navigateTo(baseURL)
    .click(navigateDecks)
    .click(createNewDeck)
    .expect(Selector('.deck').withText(nameOfDeck).exists)
    .ok()
}

const addCardToDeck = async (nameOfDeck, nameOfCard) => {
  const deck = Selector('.deck').withText(nameOfDeck)
  const card = Selector(`.${nameOfCard}`)

  await t
    .click(deck.find(updateDeck))
    .click(btnAddCardToDeck)
    .typeText(inputSearchForCard, nameOfCard)
    .pressKey('enter')
    .wait(10 * 1000)
    .expect(card.exists)
    .ok()
    .click(card.find('button').withText('Add to Deck'))
    .click(navigateBackToDeck)
    .expect(card.exists)
    .ok()
}

export { createDeck, addCardToDeck }
