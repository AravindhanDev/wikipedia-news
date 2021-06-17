import axios from 'axios';
import React, {useState, useEffect} from 'react'
import List from "./List"

const Search = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]); 

    useEffect(() => {
        let timerId = null;
        
        if(value) {

            timerId = setTimeout( async () => {
                const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: value
                }
            });

            setResults(data.query.search);
            }, 100)
        }

        return () => {
            clearTimeout(timerId)
        }
    }, [value]);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <React.Fragment>
        <form className="ui form bar">
            <input 
            type="text" 
            placeholder="Search Wikipedia..." 
            value={value}
            onChange={handleChange}
            />
        </form>
        <List info={results}/>
        </React.Fragment>
    )
};

export default Search 