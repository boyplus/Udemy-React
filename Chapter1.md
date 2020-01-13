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



Pass data from parent to child

<Component name of the props = value>



***component can be also the props of parent component**

-> we can access the component which pass from props by using **props.children**



**Functional VS Class Components**

- Functional components is good for simple centent
- Class components is good for everything else















