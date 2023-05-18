 # dependencies and devDepnedencies:
 - dependencies: Executing library both development env and product env
 - devDependencies: Only executing library in development
 
 # Middleware:
 - Phần mềm trung gian (đứng giữa các thành phần trong mô hình phần mềm)
 - Validation
 - Authentication - Authorization - BE
 
 # MVC:
- Model: const mongoose = require('mongoose');
- View: 
- Controller:
    + Dispatcher: Action --> Dispatcher --> Function handler
    + Routes:
    + Web server:
    + Browser:

# Query paramter - Form
- Query parameter: req.query.q
    + E.g: /search?q=google
    + Query String Parameters (Payload)
- Form:
    + Default behavior: method is GET and submit at page
    + Get variable by attribute name input
- POST: req.body.name
    + Form Data (Payload)