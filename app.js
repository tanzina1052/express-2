const express = require("express");
const bodyParser = require("body-parser");
let multer = require("multer");
// multer = multer();
const app = express();

// Set route as you like for practice purpose

// Get Request
// app.get("/", (req, res) => {
//     res.send("I'm at home route");
// });

// app.post("/", (req, res) => {
//     res.send("I'm post request");
// });

app.put("/", (req, res) => {
    res.send("I'm put request");
});
app.delete("/", (req, res) => {
    res.send("I'm delete request");
});

// Simple string Response
// res.send() - response body
// res.end()-Response Ending point

app.get("/one", (req, res) => {
    res.send("This is simple string response");
    res.end();
});
app.post("/two", (req, res) => {
    res.send("This is simple string response");
    res.end();
});

// Response Status code
app.get("/three", (req, res) => {
    res.status("401").end("unauthorized");
});

// JSON Response
app.get("/four", (req, res) => {
    let myJSONArray = [
        {
            name: "Tanzina",
            town: "Tangail",
            occupation: "Teacher"
        },
        {
            name: "Jani",
            town: "Sherpur",
            occupation: "Doctor"
        },
        {
            name: "Tonmoy",
            town: "Gazipur",
            occupation: "Lawyer"
        },
    ];
    res.json(myJSONArray).end();
});

// Download Response
app.get("/download", (req, res) => {
    res.download("./uploads/upload-test.png");
});
// Response Redirect
app.get("/Bangladesh", (req, res) => {
    res.redirect("http://localhost:3000/usa");
});

app.get("/usa", (req, res) => {
    res.send("This is USA");
    res.end();
});

// Response Header

app.get("/test", (req, res) => {
    res.append("Name", "Tanzina");
    res.append("Town", "Tangail");
    res.append("EyeColor", "Brown");
    res.status("204").end("Hello beautiful Bangladesh!");
   
});

// Set Response Cookie
app.get("/cookie", (req, res) => {
    res.cookie("Name", "Cookie");
    res.cookie("Purpose", "Information");
    res.cookie("User", "all");
    res.end("Cookies are small pieces of information");
});
// Clear Response Cookie
app.get("/clear-cookie", (req, res) => {
    res.clearCookie("Purpose");
    res.clearCookie("User");
    res.end("Cookies are cleared");
});

// Get Request

app.get("/get", (req, res) => {
    res.end("This is simple get request");
});
// Get Request with url query
// app.get("/", (req, res) => {
//     let firstName = req.query.firstName;
//     let lastName = req.query.lastName;
//     res.end(firstName + " " + lastName);
//  });

//  Working With Get Request Header
app.get("/", (req, res) => {
    let firstName = req.header("firstName");
    let lastName =req.header("lastName");
    let connection = req.header("Connection");
    res.end(firstName + " " + lastName + "\n" + connection);
});

// Simple Post Request
app.post("/post", (req, res) => {
    res.send("This is simple post request");
});

// Post Request With URL Query
app.post("/url-query", (req, res) => {
    let city = req.query.city;
    let age = req.query.age;
    res.send(city + " " + age);
});

// Post Request With Header

app.post("/re-header", (req, res) => {
    let userName = req.header("userName");
    let password = req.header("password");
    res.send("userName: " + userName + ", Password : " + password);

});

// post Request Working with JSON Body

app.use(bodyParser.json());
app.post("/body-parser", (req, res) => {
    let JSONData = req.body;
    let JSONString = JSON.stringify(JSONData);
    let name = JSONData.name;
    let age = JSONData.age;
    res.send(JSONString + "\n" + name + "\n" + age);
});

// Working With Multipart Form Data
// parsing multipart form/data

// app.use(multer.array());
// app.use(express.static("public"));
// app.post("/multipart", (req, res) => {
//     let JSONDATA = req.body;
//     res.send(JSON.stringify(JSONDATA));
// });

// Post Request with multer File Upload

let storage = multer.diskStorage({
    destination:function (req, file,callback) {
        
        callback(null, "./uploads");
    },
    filename:function (req, file, callback) {
        callback(null, file.originalname);
        
    }
});

// let upload = multer({storage: storage}.single("myfile"));
// app.post("/mytest", (req, res) => {
//     upload(req, res,(error) => {
//         if(error) {
//             res.send("file upload is failed");
//         }
//         else {
//             res.send("file upload is successful");
//         }
//     })
// });

// Application lavel Middleware for whole application request and response
app.use((req, res, next) => {
    console.log("This is an application lavel middleware");
    next();
});

app.get("/about", (req, res) => {
    res.send("I'm a about page");
});

app.get("/contact", (req, res) => {
    res.send("I'm a contact page");
});

// Route lavel Middleware for every route

app.use("/news", (req, res, next) => {
    console.log("I'm news page middleware");
    next();
});

app.get("/news", (req, res) => {
    res.send("I'm a news page for testing middleware");
});













module.exports = app;