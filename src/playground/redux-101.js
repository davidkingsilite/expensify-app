import { createStore } from 'redux';

//action generators- function thta return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
  
const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// reducers 
//1. pure function 
//2. never change state or action 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                 count: state.count + action.incrementBy
         };
        case 'DECREMENT': 
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };    
        case 'RESET':
            return{
                count: 0
            };    
        default: 
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
console.log(store.getState());
})

//Action - an object that gets sent to the store 

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// reset
store.dispatch(resetCount());

store.dispatch(decrementCount());

//decrementby value

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 105 }));
