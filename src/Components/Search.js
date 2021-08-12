import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom'

function Search() {
    // const { id } = useParams()
    const url = 'http://61140f98cba40600170c1dbe.mockapi.io/getsimiliaritems';  // need to fix the mock api
    const [item, setItem] = useState(null)

    let content = null

    useEffect(() =>{
        axios.get(url)
            .then(response => {
                console.log("data: ", response.data.listings[0])
                setItem(response.data.listings[0])
            })
    }, [url])

    if(item){
        return (
            <div>
                <h4 className="text-2xl font-bold mb-3">
                    {item.title}
                </h4>
                <div>
                    <img
                        src={item.image}
                        alt={item.title}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {item.formats.fixedPrice.amount.value}
                </div>
                <div>
                    {item.condition}
                </div>
            </div>
        );
    }

    return (
        <div>
            Opps !! No Item Found
        </div>
    );
}

export default Search