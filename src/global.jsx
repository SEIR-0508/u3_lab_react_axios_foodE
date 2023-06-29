export const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/'

// drink
export const searchByName = BASE_URL + "search.php?s=";
export const searchById = BASE_URL + "lookup.php?i=";
export const searchByFirstLetter = BASE_URL + "search.php?f=";
export const randomCocktail = BASE_URL + "random.php"

//ingredients
export const searchIngredientByName = BASE_URL + "search.php?i=";
export const searchIngredientById = BASE_URL + "lookup.php?iid=";

//filter
export const filterByIngredient = BASE_URL + "filter.php?i=";
export const filterByAlcoholic = BASE_URL + "filter.php?a=";
export const filterByCategory = BASE_URL + "filter.php?c=";
export const filterByGlass = BASE_URL + "filter.php?g=";

//list
export const listIngredients = BASE_URL + "list.php?i=list";
export const listCategories = BASE_URL + "list.php?c=list";
export const listGlassed = BASE_URL + "list.php?g=list";
export const listAlcoholic = BASE_URL + "list.php?a=list";
