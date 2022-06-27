import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Sweetpagination from 'sweetpagination';

function App() {
  const [totaldata,setTotalData] = useState([])
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setTotalData(data))
  },[])
  
  return (
      <div>
        <div>
          {
            currentPageData.map(singledata => <h1>{singledata.title}</h1>)
          }
        </div>

       <Sweetpagination
        currentPageData={setCurrentPageData}
        dataPerPage={5}
        getData={totaldata}
      />
      </div>
  );
}

export default App;
