- Create a repository
- Initialize a repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 5555
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- what are the dependencies
- What is the use of -g while npm install
- Difference between caret and tidle

- Initialize git 
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extension eg. /hello, /, /test/123, /hello/2
- order of routes matter a lot 
- Install postman app and create workspace/collection then make a test api call
- Write logic to handle GET, POST, PUT, PATCH, DELETE API calls and test them on postman

- use regex in routes /a/, /.*fly$/
- Reading the query params in the route
- Reading the dynamic routes

- Multiple route handler - Play with the code
- next()
- next function and along with the res.send
- app.use("/route", rh1, [rh2, rh3], rh4, rh5)
- what is middleware 
- How express.js basically handles request behind the scene
- Difference app.use and app.all
- write a dummy middleware for admin
- write a dummy middleware  for user routes, except /user/login
- Error handling using app.use("/", (err, req,res, next) => {})

- Create a free cluster on MongoDB official website(Mongo Atlas)
- Install mongoose library
- Connect your application to the database "Connection-url"/devtinder
- Call the connectDB function and connect to application before starting application on port 5555.....

-Create userSchema and user model
- Create POST API /signup to add data to database
- Push saome documents using API call from postman
- Error handling using try, catch
- JS object and JSON (difference)
- Add the express json middleware to your app
- Make your signup API dynamic to recive data from end users ( it can be browser, postman)
- User.findone with duplicate email ids, which object returned
- API - get user by email
- API- Feed API - GET /feed --- get all users from the database
- Create DELETE api for user
- Difference between Patch and Put
- API - Update a user
- Explore mongoose documentation for model methods

- Explore schema type option fron the documentation
- add required, unique, minLength, maxLength, min, max, default
- Create customs validate function for the gender
- Improve DB Schema - Put all appropriate validation for each field of the schema 
- Add timestamp to the userSchema 
- Api level validation on Patch request and signup post api
- Data sanitizing -- Add api level validation for field
- install validator 
- Explore validator library function and use validator function for email, password, photoURL
- NEVER TRUST req.body


- validate data in signup API
- Install bcrypt package
- Create passwordHash using bcrypt.hash and save the encrypted password
- Create Login API
- Compare password and throw error if email and password are invalid.

- install cookie-parser
- just send a dummy cookie to a user
- Create GET /profile API and check if you get cookie back 
- install jsonwebToken
- In login API, after email and password validation, create a jwt token and send it to user in cookie
- Read the cookie inside your profile API and find the logged in user
- userAuth middleware
- Add the userAuth middleware in proffile API and a new sendConnectionRequest API
- Set the expiry of JWT Token and cookies to 7days
- Create userSchema method to getJWT()
- Create userSchema methods to compare password(passwordInputByUser)

- Explore Tinder API
- Create a list of all API you can think of in DevTinder
- Group multile routes under respective routers
- Read the documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create authRouters, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit 
- Create PATCH /profile/password API -- forgot password API
- Make sure you validate all data in every POST, PATCH apis

- Create connectiion request schema
- Send connection request api
- Proper validation of data
- Think about corner cases
- $or query and $and query
- Schema.pre("save) function
- Read more about indexes in MongoDB
- Why do we need index ??
- What is the advantages and disadvantages of creating indexes.
-  Read the article about compound index ??
- ALWAYS THINK ABOUT CORNER CASES 

- Write code with proper validation for POST /request/review/:status/:requestId
- Thought process - POST vs GET
- Read about ref and populate
- Create GET /user/request/received with all the checks
- Create GET /user/connections

- Logic for GET /feed API
- Explore $nin, $and, $ne and other comparision operator query

- NOTES:
    /feed?page=0&limit=10 => 1-10 => .skip(0) & .limit(10)

    /feed?page=1&limit=10 => 11-20 => .skip(10) & .limit(10)

    /feed?page=1&limit=10 => 21-30 => .skip(20) & .limit(10)

    /feed?page=3&limit=10 => 31-40 => .skip(30) & .limit(10)

    skip = (page - 1) * limit;