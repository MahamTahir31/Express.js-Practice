to setup EJS:
1) install ejs:
npm i ejs

2) configure ejs
app.set("view engine", "ejs") ;

3) make views folder

4) make ejs files inside views

5) do render instead of sending => make sure to write filename which is inside views folder while rendering and do not mention .ejs in filename 

To setup static files:
1) create a folder called public

2) create three folders inside it, images, stylesheets, javascript

3) configure the express static in script.js 

4) understand the path