import ArtistList from './ArtistList'

const Home = () => {
  return (
    <div className='p-2 md:p-10 min-h-screen'>

     <h2 className="text-2xl mt-2 ml-2  md:text-4xl font-bold">Artist</h2>

     <ArtistList />
    </div>
  )
}

export default Home
