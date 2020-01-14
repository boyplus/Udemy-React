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

```javascript
Component name of the props = value
```

```javascript
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



**setState**

-> use to update the state that we have in class 

Ex. **this.setState({lat: 182});**

-> we **cannot** use this.state.lat = 128



**Conditionally rendering content**

-> we can use if statement to check and return the differednt JSX



**Life cycle**

- **constructor()**  "good place to do one time setup"
- **render()** -> content visible on screen "only return JSX to show content"
- **componentDidMount()** -> Sit and wait for update "good for loading data"
- **render()**
- **componentDidUpdate()** -> Sit and wait until this component is not longer shown "good place to do more data loading when state/props change"
- **componentWillUnmount()** -> "good place to do clean up ex. non-react stuff"



*we choose do data loading in componentDidMount, we can also do in constructor but it's not best practice

**Constructor and state**

we can write constructor and declare state like this

``` javascript
constructor(props) {

​	super(props);

​	this.state = {lat:null}

}
```



but we can also write just like this

state = {lat: null}

***It's the same code after babel convert it to ES5**



**Default props**

-> we can set the default props value by using componentName.defaultProps = {};

```javascript
Spinner.defaultProps = {
    text: "Loading..."
};
```





























