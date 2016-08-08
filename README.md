# angular2-investigation
Angular2 project to demonstrate and experiment Angular2 functionalities

## Dependencies
- You must have `node v >= 4.0` and `npm` installed
- `npm i -g typings webpack-dev-server webpack rimraf`

## Getting Started
There are two main parts to this application. The first is the server, for which we are using `json-server` to simulate a REST api. The second part is the Angular 2 application which we will use `webpack-dev-server` to display.  

To get started run the commands below.

```bash
$ git clone https://github.ibm.com/amine-afia/angular2-investigation.git
$ npm install -g json-server
$ npm install
$ typings install
$ npm start
```
Then navigate to [http://localhost:3001](http://localhost:3001) in your browser.

# Documentation summary 

The best way to guide you understand and learn each concept in Angular2 you will follow the comments to see how this app is built. So search in the project for one of the comments to get an idea how Angular2 implements that feature for example:
search for ```//* Create a component``` to see how to create a Component. For the theoritical view of each feature please take a look at the angular2 [Documentation in Box]() and [the official Documentation](https://angular.io/docs/ts/latest/).

##Tooling

In this branch we are using webpack . To define its configuration we should add several options to the ```//*webpack.config``` file. An example of the example we should do: 
- Enable the generation of source-map for debugging
- Define the entry file which is boot.ts in our example
- Define an Output for the bundler
- We define a loader for Typescript

```//*tsconfig``` in this file we define the compiler options such as the target language e.g ES5 or the compilation module -In our example it is the comonjs-

```//*typings``` is a manager to install Typescript. no modification is needed to this fill. If we need to install a dependency for it we use ```bash typyngs install "a dependency"```


##Components
```Javascript
//* Create a component
```

##Templates
```Javascript
//* Templates
```

##Services
```Javascript
//*Services
  //*Import service
  //*Inject service
  //*constructor instantiation
```

##Routing
#####Normal routes
```Javascript
//*Routing
   //*Add route to the template
```
<!-- TODO
#####Child routes
```Javascript
//*Child routes
```
 -->

##Binding
There are three types ofdata binding (the demonstration of this part is in the ./about feature):
- Property binding: in the form of ```//*Interpolation``` to render a property in a Template. If we want to pass a property to a child component we use the ```//*property binding```
- Event binding: ```//*Event binding``` which calls a handker from the component if an event happens in the template
- Two-way data binding: ```//*Two-way binding``` combines the two previous binding types


##Component composition
Angular2 hierarchy contains 3 types or level of components:
- Root component which manages the routes and bootstraps the app
  - in the example the root component is the ```app.ts```
- Parent components which represent the the highest abstraction of a feature in the app
  - The parent component for the Team feature is ```team.component.ts```
- Child components which are defined by there bindings and implement no logic ( @Output @Input components)
  - ```widget-list.component.ts``` and ```widget-details.component.ts``` are an example

##View Encapsulation
this is used to controle the styling stream over the projects hierarchie . such as choosing a single style for a parent or a parent and its childs...
```Javascript
//*Encapsulation
```

##Directives
```Javascript
//*Directive
```
<!-- TODO -->
##Forms
```Javascript
//*Form
<!-- Need to add the validation and formbuild ! -->
```

##Server Communication
```Javascript
//*HTTP get request
<!-- TODO -->
//*HTTP post request  (TODO)
``` 
The rest PUT,UPDATE,DELETE follow one of the model

##Pipes
The pipes are the filters in Angular 1.x and most of the build-in filters still in Angular2. this section will show the implementation of costume pipes.
```Javascript
//*Pipe
```
##Authentification
check the login feature. it uses authentication with JWTs

##Globalization
```
//TODO
```
