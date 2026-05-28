import lilPeep from '../assets/lilpeep.png'
import PlayboyCarti from '../assets/playboyCarti.png'

interface ArtistsType {
 id: number,
 artist: string,
 img: string,
 songs: songsType[]
}

interface songsType {
  id: number,
  title: string,
  img: string
}

export const artists : ArtistsType[] = [
    { id: 1,
      artist: 'Lil peep',
      img: lilPeep,
      songs: [{id:1 , title: 'Awful Thing', img: lilPeep} , {id:2 , title: 'Star Shopping', img: lilPeep}],
    },
    { id: 2,
      artist: 'Playboy Carti',
      img: PlayboyCarti,
      songs: [{id:1, title: 'Pop Bottles', img: PlayboyCarti}]
    },
] 