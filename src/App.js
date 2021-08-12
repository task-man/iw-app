//  import logo from './logo.svg';
import './App.css';
import Search from "./Components/Search";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ItemCard from "./Components/ItemCard";

function App() {
    const url = 'http://10.148.160.194:8080/castlemock/mock/rest/project/jjb4uz/application/39j30V/getsimiliaritems';
    const [items, setItems] = useState(null)

    useEffect(() =>{
        axios.get(url)
            .then(response => {
                // console.log("data: ", response.data.listings)
                setItems(response.data.listings)
            })
    }, [url])

    let content = null

    // if(items.error){
    //     content = <p>Opps!! There was an error please refresh or try again later</p>
    // }
    if(items){
        content =
           items.map((item, key) =>
            <div>
                <ItemCard
                    item={item}
                />
            </div>
           )
    }

  return (
    <div className="App">
      <header className="App-header">
          <div>
              <h2>Embedding-based search of eBay items</h2>

              {content}
          </div>
      </header>

    </div>
  );
}

export default App;