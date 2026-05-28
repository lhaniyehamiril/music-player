import lilPeep from '../assets/lilpeep.png'
import PlayboyCarti from '../assets/playboyCarti.png'

import popBottles from '../assets/music/popBottles.mp3'
import awfulThing from '../assets/music/Awful-Things.mp3'
import starShopping from '../assets/music/Lil Peep - Star Shopping.mp3'

export interface ArtistsType {
 id: number,
 artist: string,
 img: string,
 songs: songsType[]
}

interface songsType {
  id: number,
  title: string,
  img: string
  song: string
}

export const artists : ArtistsType[] = [
    { id: 1,
      artist: 'Lil peep',
      img: lilPeep,
      songs: [{id:1 , title: 'Awful Thing', img: lilPeep, song:awfulThing} , {id:2 , title: 'Star Shopping', img: lilPeep, song:starShopping}],
    },
    { id: 2,
      artist: 'Playboy Carti',
      img: PlayboyCarti,
      songs: [{id:1, title: 'Pop Bottles', img: PlayboyCarti, song:popBottles}]
    },
] 