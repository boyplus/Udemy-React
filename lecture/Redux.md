# Udemy-Redux
###Chapter 12: "Basic Redux by itself"

**What is redux**

- redux is state management library
- Make creating complex application easier
- Not require to create a react app
- Not explicity disign to work with react



**Redux cycle**

- Action creator (Person dropping of the form)
- Action (the form)
- Dispatch (form reciver)
- Reducers (Departments)
- State (Compiled department data)



![Screen Shot 2020-01-18 at 4.18.01 PM](/Users/thanaporn/Desktop/myGit/Udemy-React/lecture/pics/Screen Shot 2020-01-18 at 4.18.01 PM.png)



**Overview the concept of redux**

-> we will store the data in one place (data center) and then each reducers/departments (function which do/update something with data) will ask for data from data center then update the data that depends on the type of action, after that reducer will return the brand new data to data center.



**Analogy of redux**

![Screen Shot 2020-01-18 at 4.17.41 PM](/Users/thanaporn/Desktop/myGit/Udemy-React/lecture/pics/Screen Shot 2020-01-18 at 4.17.41 PM.png)





**1.Action creators**

-> the function which return palin javascript object

```javascript
const createPolicy = (name, amount) =>{
  return {
    //action (javascript object)
  };
}
```



**2.Action**

->  it is the **object** which represents things that we want to do and data in it.

-> consits of two parts

- **type**  (type of action Ex. CREATE_POLICY, we usually make it uppercase)
- **payload**  (data in action ex. name, amount)



**3.Dispatch**

-> to update the data in store which pass argument of action creatots

-> we usually do this in the last step, because we have to write the action creators, actions, reducers, combineReducers and create the store

```javascript
const ourDepartments = combineReducers({
  accounting: accounting,
  policies: policies,
  claimsHistory: claimsHistory
  //ourDepartments is the set of reducers (function which do something with data)
});
const store = createStore(ourDepartments);
store.dispatch(createPolicy('Alex',20));
console.log(store.getState());
```



**4.Reducers**

-> it's the modifier function to change and return the new data

-> it recieve two arguments, first one is the old data from store and second one is action (form)

-> we have to check what type of the action, then we consider what we will do about that type of action



**5.State**

-> to update the state (all data) in store

-> wait until there is another update from dispatch



###Chapter 13: "Intergating React with redux"

**React Cooperating with Redux**

-> Redux is the library which can stand stand by it own self

-> React-Redux is the library which can communicate react and redux

```javascript
npm install --save redux react-redux
```



**Song List project**

-> consists of two components. 

- SongList 
- SongDetail



**How React-Redux works**







**Export defalut vs Export name**

- export default someFunction -> we can export one function from this file
- export name -> we can export many function from one file

```javascript
export const selectSong = (song) =>{
  //some code
}
```

```javascript
import { selectSong } from '../actions';
```











**Chapter 14 Async action with redux thunk**

https://github.com/StephenGrider/redux-code







