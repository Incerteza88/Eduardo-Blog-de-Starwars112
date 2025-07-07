export const initialStore=()=>{
  return{
    people: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'setPeople':
        
      return{
        ...store,
        people: action.payload
      }

      case 'handleFavorites':
        let newFavorites = []
        if(store.favorites.includes(action.payload)){
           newFavorites = store.favorites.filter(fav => fav != action.payload) 
        } else {
            newFavorites = [...store.favorites, action.payload]
        }
        return{
          ...store, favorites: newFavorites
        }
    default:
      throw Error('Unknown action.');
  }    
}
