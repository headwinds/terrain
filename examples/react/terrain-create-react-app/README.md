#### Terrain Create React App

## About

After discovering this awesome repo from the blog post, I wanted to play around with this codebase and begin to port it to React and es6. I like the concept of generating a random map but also want to explore tweaking it to my liking so that I might be able to use it in a game or story. Once I have editted the city names and have a map that I like, I should be able to save and export it. 

In this demo, I'm leveraging Facebook's [create react app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) tool to quickly get a React app up and running that uses the lastest es6 features. Then, I've added the latest version of D3. 


Once I started to build out the components and wanted to components to talk to each other, I added Redux into the project by copying files from this starter [simple-redux-boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate). For instance, the Tools components needs to inform the Terrain component to generate a new random map. We can process this type of request through the Redux store by updating the state.  

## Dev Steps
 
npm install
 
npm start 

## Production Step
 
npm run build


warning.js:44 Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `Tools`.



