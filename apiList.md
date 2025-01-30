# DevTinder

## authRouter
- POST /signup
- POST /login
- POST /logout
  

## profileRouter
  - GET /profile/view
  - GET /profile/edit
  - GET /profile/password //forgot password api 

## connectionRequestRouter
  - POST /request/send/:status/:userId
  - POST /request/send/interested/:userId
  - POST /request/send/ignored/:userId

  - POST /request/review/:status/:requestId
  - POST /request/review/accepted/:requestId
  - POST /request/review/rejected/:requestId

## userRouter
   - GET /user/requests/received 
  - GET /user/connections
  - GET /user/feed -- Gets you profile of others on platform

  Status: interested, ignored, accepted, rejected
