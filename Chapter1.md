# Udemy-React
**Chapter1 "Let's div in"**

When we want to create react app we have to follow this

1.install node

2.install the create react app package -> **npm install -g create-react-app**

3.create the react app -> **create-react-app project-name** (we can also use **npx create-react-app project-name**)



**create-react-app**

When we use create-react-app it will install these packages (dependencies)

**1.webpack**

**2.Babel** -> compile the ES2015 and new to be ES5 (ES2015 -> babel -> ES5)

**3.Dev server**



**Project Directory**

**1.src** -> put all code in thsi folder

**2.public** -> static files likes image

**3.node_modules** -> contains all of dependendies

**4.package.json** -> Record our project dependencies and configures our project

**5.package-lock.json** -> Record the exact version of package that we install

**6.README.md**

**7.gitignore**



**Basic App**

if we wan to create basic basic react app, we have to follow this 3 steps

**1.import** 'react' and 'react-dom'

**2.create** the component (const App = function();)

**3.render** it on the screen  (ReactDOM.render();)

*component is the function or class



**What is JSX?**

**babeljs.io**

- we write the JSX which look like HTML but it is ES2015, the we use babel to convert it to be ES5 js
- we use double quotes for JSX properties and use single quotes for every where else



**class vs className**

- we use className for JSX properties becuase class is the JS keyword for create the class (class App), we don't want to be confuse (we still can use it)



*we use {} for indicate that we we want to reference the variable or function in JS (not object, it does not allow to display object in {})



**Component** -> each content

**Props** (properties) -> pass data from parent component to child component

**App** -> show all component



**Pass data from parent to child**

```react
Component name of the props = value
```

```react
<Spinner text="Loading..." />
```



***component can be also the props of parent component**

-> we can access the component which pass from props by using **props.children**



**Functional VS Class Components**

- Functional components is good for simple centent
- Class components is good for everything else



**Class base component**

There are three rules of creating class compoennt in react

- Must be a javascript class
- Must extends class (React.Component)
- Must return method that return som JSX



**Rules of state**

- can be use only class component
- when we update the state the class almost instantly be re redndered
- state must be initialize when a component is created
- state can only update by using **setState()**



**Constructor of class component**

we have to create the constructor of App class and then call the constructor of super class (parent) (React.Component) and send props to super class.



**setState()**

-> use to **update the state** that we have in class 

```react
this.setState({lat: 182});
```

-> we **cannot** use 

```react
this.state.lat = 128
```



**Conditionally rendering content**

-> we can use if statement to check and return the differednt JSX



###Life cycle

- **constructor()**  "good place to do one time setup"
- **render()** -> content visible on screen "only return JSX to show content"
- **componentDidMount()** -> Sit and wait for update "good for loading data"
- **render()**
- **componentDidUpdate()** -> Sit and wait until this component is not longer shown "good place to do more data loading when state/props change"
- **componentWillUnmount()** -> "good place to do clean up ex. non-react stuff"



*we choose do data loading in componentDidMount, we can also do in constructor but it's not best practice



###Constructor and state

we can write constructor and declare state like this

``` react
constructor(props) {
	super(props);
	this.state = {lat: null}
}
```



but we can also write just like this

```react
state = {lat: null}
```



***It's the same code after babel convert it to ES5**



#### Default props

-> we can set the default props value by using componentName.defaultProps = {};

```react
Spinner.defaultProps = {
    text: "Loading..."
};
```



####Avoid if condition in render function

-> we should make the helper function which return JSX and then call it in render()

```react
renderContent(){
  return <div>Hello render content</div>
}
render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
}
```



**Benifit of class**

- Easier code organization
- Can use **state** (another React System) -> easier to handle user input
- Understand **life cycle** events -> Easier to do thing when app first start



**onChange props**

-> this props in input tag will call the method

```react
onInputChange(event){
  console.log('Input is '+event.taregt.value);
}
<input type="text" onChange={this.onInputChange} />
```



**Altenate way to handle event**

```react
<input type="text" onChange={(event)=>console.log(event.target.value)} />
```



**Props in tag (event)**

-> we have to use call back function

- onChange
- onSubmit
- onClick



**Controlled VS Uncontrolled elements**

-> we should write the contolr elements

-> we use **setState()** and change the value in input to **this.state.message**

-> the benefit is we can access value from state, but for uncontrolled elements we have to acces the value from the DOM

-> use case, we can make the input to uppercase



**Handling form submittal**

-> we can prevent the reload when we subnit the form by follow this **(event.preventDefault())**

```react
onFormSubmit(event) {
        event.preventDefault();
}
<form onSubmit={this.onFormSubmit}>
```



**Understanding this in Javascript**

-> this keyword is refer to class itself

-> this keyword is refer to the object which call that method



**Fix problem about this (undefined)**

- Use bind method

  ```react
  constructor(){
    this.drive = this.drive.bind(this);
  }
  ```

- Use arrow function instead of normal function

  ```react
  onFormSubmit = (event) =>{
    console.log(this.state.term);
  }
  ```

  **Arrow function** will help us to **share the this keyword to the same as that class** (not same as the object that call that method, because that object is undefined)

- Use arrow function inside of the tag

  ```react
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }
  <form onSubmit={(event)=>this.onFormSubmit()}>
  ```



***Props go down only** (we can only pass the props from parent to child)



**Coomunicating Child to Parent**

-> we can pass the callback function as a props from parent to child 

```react
//App.js 
<SearchBar onMySubmit={this.onSearchSubmit} />
```

```react
//Searchbar
onFormSubmit = event => {
  event.preventDefault();
	console.log(this.state.term);
	this.props.onMySubmit(this.state.term);
};
```



**Fetching data**

- Axios -> third party package
- fetch - > function built into modern browser

```markdown
npm install --save axios
```



**Fetch data from Axios**

```react
//axios.get(path,object which contains about option);
axios.get('https://api.unsplash.com/serach/photos',{
  params{query: term},
  headers{
     Authorization: 'Client-ID your-access-key'
  }
});
```



**Getting the data from axios**

- first method **"use then method"**

  ```react
  axios.get('https://api.unsplash.com/serach/photos',{
    params{query: term},
    headers{
       Authorization: 'Client-ID your-access-key'
    }
  }).then((response)=>{console.log(response)});
  ```

- second method **"use async await"**

  ```react
  async onSearchSubmit(){
    const response = await axios.get(...);
   	console.log(response);
  }
  ```



***Don't forget to make the arrow function when we want to use the this keyword of class**



**The purpose of key in list**

-> we should give the key for each items because when we have new item in render list, dom can decide which item is not currently in dom and then insert it by using key id.





**Map method (Full version)**

```react
const images = props.image.map((image)=>{
  return (
    <div>
    	<img alt={image.description} key={image.id} scr={image.urls.regular}/>
    </div>
   );
});
```



**Short form of map function**

``` react
const images = props.image.map(({description, urls, id})=>{
  return (
    <div>
    	<img alt={description} key={id} scr={urls.regular}/>
    </div>
   );
});
```



-> we can create the var which each value is the key of the var.

```react
const {description, urls} = image;
```



**Accessing DOM with Ref**

-> we cteate constructor of class and the create ref with **React.createRef()** 

-> then we pass the **ref** props 

```react
constructor(props){
  super(props);
  this.imageRef = React.createRef();
}
<img ref = {this.imageRef} />
```



**Problem about print the height of image**

```react
componentDidMount(){
  console.log(this.imageRef.current.clientHeight);
}
```

-> we got 0 from this statement, because after the render() the iamge **did not finish the load yet**, so that's why the clientHeight is 0



**Use load eventListener to solve the problem**

-> callback function will be invoked when the image has been loaded

```react
this.imageRef.current.addEventListener('load',this.setSpans);
setSpans(){
  //some code to set span for each image
}
```



**Short form of object**

```react
//long form
this.setState({spans: spans});
//short form
this.setState({spans});
```



**ES2015 Destructing**

-> when we want to pass object to any method we can destruct it for short term and did not have to refer to the object for many times

```javascript
//old way
const VidepList = (props) =>{
  return <div>{props.videos.length}</div>
}

//destructing
const VidepList = ({videos}) =>{
  return <div>{videos.length}</div>
}
```













