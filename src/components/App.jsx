import React from 'react'
import Search from './search'

const App = () => {
    return (
    <div className="ui grid container center aligned">
        <div className="search" style={{width: "53rem"}}>
          <Search />
        </div>
    </div>
    )
}

export default App