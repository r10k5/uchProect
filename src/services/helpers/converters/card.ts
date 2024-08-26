export const convertCardPhoto = (photo: string) => {
  return `${import.meta.env.VITE_API_URL}/files/${photo}`
}