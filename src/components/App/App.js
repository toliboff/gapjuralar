import React from 'react'
import Navigation from '../Navigation/Navigation'

const LINKS=[
    {label:'Website', to:'https://www.robinwieruch.de'},
    {label:'Twitter', to:'https://www.robinwieruch.de/rwieruch'}
]

const App=()=>{
   return( <div>
                 <Navigation links={LINKS}/>
           </div>
   )
}

export default App