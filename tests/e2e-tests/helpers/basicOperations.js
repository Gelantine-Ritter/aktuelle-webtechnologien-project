import { t, ClientFunction, Selector } from 'testcafe'

const clickButton = async (elSelector) => {
  await t.click(elSelector)
}

const enterText = async (elSelector, text, withReturn) => {
  await t.typeText(elSelector, text)
  if (withReturn) {
    await t.pressKey('enter').wait(2 * 1000)
  }
}

const checkInput = async (elSelector, value) => {
  const input = await Selector(elSelector).value

  await t.expect(input).contains(value)
}

const checkIfElementExists = async (elSelector) => {
  await t.expect(elSelector).ok()
}

const checkRoute = async (route) => {
  const getLocation = ClientFunction(() => document.location.href)

  await t.expect(getLocation()).contains(route)
}

export { clickButton, enterText, checkInput, checkIfElementExists, checkRoute }
