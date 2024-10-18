export const isJokeToday = (date: number): boolean => {
  return new Date().toDateString() === new Date(date).toDateString()
}
