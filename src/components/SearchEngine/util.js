import {
  setItemList, setItem, loadingItem, loadingItemList
} from '../../state/CocktailAction'

// strIngredient1//15
// strMeasure1//15

const getIngredients = (item) => {
  const list = []
  // let available = true
  // for (let index = 0; index < 15 && available; index += 1) {
  //   const ingredient = `strIngredient${index + 1}`
  //   const measure = `strMeasure${index + 1}`
  //   if (item[ingredient]) {
  //     list.push({
  //       ingredient: item[ingredient],
  //       measure: item[measure]
  //     })
  //   } else { available = false }
  // }
  if (list.length) return list
  return undefined
}

export const processDrinks = data => (data ? data.map((item) => {
  const {
    strInstructions, strDrinkThumb, idDrink, strAlcoholic, strCategory, strDrink
  } = item
  const ingredients = getIngredients(item)
  return ({
    instructions: strInstructions,
    image: strDrinkThumb,
    id: idDrink,
    alcoholic: strAlcoholic,
    category: strCategory,
    name: strDrink,
    ingredients
  })
}) : [])

export const getDrinks = async ({
  searchType, SEARCH_TYPES, term, itemsDispatch
}) => {
  const url = searchType === SEARCH_TYPES.DRINK
    ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
  try {
    const data = await fetch(`${url}${term}`)
      .then(response => response.json())
    itemsDispatch(setItemList(
      processDrinks(data.drinks)
    ))
  } catch (error) {
    console.log(error)
  } finally {
    itemsDispatch(loadingItemList(false))
  }
}

export const getDrink = async ({
  itemId, itemsDispatch, itemsList
}) => {
  try {
    const local = itemsList.filter(({ id }) => id === itemId)
    let drinks
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemId}`)
      .then(response => response.json())
    drinks = processDrinks(data.drinks)
    itemsDispatch(setItem(
      drinks.length ? drinks[0] : local[0]
    ))
  } catch (error) {
    debugger
    console.log(error)
  } finally {
    itemsDispatch(loadingItem(false))
  }
}
