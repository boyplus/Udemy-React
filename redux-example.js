console.clear();

//People dropping off a form (Action creator)
//the function whioch return plain javascript object
const createPolicy = (name,amount) =>{
  return {
    //what we will return is action (the form)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};
const deletePolicy = (name) =>{
  return {
    type: 'DELETE_POLICY',
    payload:{
      name : name
    }
  };
};
const createClaim = (name,amountOfMoneyToCollect) =>{
  return {
    type: 'CREATE_CLAIM',
    payload:{
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

//Reducer (Departments) -> the modifier function
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    //we care about yhis action (form)
    //[...someArray] -> include someArray in brand new array
    //we did not modify the old array, we return the brand new array
    return [...oldListOfClaims, action.payload];
  }
  //we do not care about the action (form)
  return oldListOfClaims;
};


const accounting = (bagOfMoney = 100, action) =>{
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney-action.payload.amountOfMoneyToCollect;
  }
  else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};


const policies = (listOfPolicies = [], action) =>{
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies,action.payload.name];
  }
  else if(action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name=> name!==action.payload.name);
  }
  return listOfPolicies;
}



console.log(Redux);
const {createStore, combineReducers} = Redux;

//combine the reducer together
const ourDepoartments = combineReducers({
  accounting: accounting,
  policies: policies,
  claimsHistory: claimsHistory
});

//create the store (all data)
const store = createStore(ourDepoartments);
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 15));

store.dispatch(createClaim('Alex', 20));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));


//getState will return the all data
console.log(store.getState());
