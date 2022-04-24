import {api} from '../config'
const route = '/search'

export async function searchSongsAndArtist({term}){
  return api.get(route, {
    headers:{
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      'X-RapidAPI-Key': '8d0f50387fmsh1525828353ba47fp15d4ebjsn3e2fd8403f6f'
    },
    params: {
      term
    },
  })
}