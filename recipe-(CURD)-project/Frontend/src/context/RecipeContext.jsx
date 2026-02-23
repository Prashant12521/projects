import {createContext, useState} from 'react';

export const RecipeContext = createContext(null)

export const RecipeProvider = ({children}) => {

  const [data, setData] = useState([])
  console.log(data);
  

  return(
    <RecipeContext.Provider value={{data, setData}}>
      {children}
    </RecipeContext.Provider>
  )
}

