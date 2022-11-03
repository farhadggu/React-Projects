import './App.css';
import useFetch from './components/useFetch';
import Follower from './components/Follower'
import { useEffect, useState } from 'react';

function App() {

  const {loading, data} = useFetch();
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1){
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage + 1
      if (prevPage < 0){
        prevPage = data.length - 1
      }
      return nextPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
      <section className='pagination-section'>
        {
          followers.map((item) => {
            return <Follower key={item.id} {...item} />
          })
        }

      </section>
      
      <div className='pagination-conatiner'>
        {!loading && (
            <div className='btn-container'>
              <button className='prev-btn' onClick={prevPage}>prev</button>

              {data.map((item, index) => {
                return (
                  <button key={index} className={`page-btn ${index === page ? 'active-btn' : null}`} onClick={() => handlePage(index)}>
                    {index + 1}
                  </button>
                )
              })}

              <button className='next-btn' onClick={nextPage}>next</button>
            </div>
          )}
        </div>

    </main>
  );
}

export default App;
