const express = require("express");
const app = express();

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












module.exports = app;