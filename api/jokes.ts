const BASE_URL = 'https://v2.jokeapi.dev/joke/Any,Misc,Programming,Dark,Pun,Spooky,Christmas?type=single'

export const fetchTodayJoke = () => fetch(BASE_URL).then(response => response.json())
