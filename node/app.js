const express = require("express");

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "this is home"
    });
});

app.get("/login", (request, response) => {
    return response.status(200).json({
        token: "ASDQWEASDQW"
    });
});

app.get("/validate", (request, response) => {
    const headers = request.headers.authorization;
    if(!headers) {
        return response.status(401).json({
            message: "Need signin"
        });
    }

    const [, token] = headers.split(" ");
    if(token !== "ASDQWEASDQW") {
        return response.status(401).json({
            message: "Need signin"
        });
    }

    return response.status(200).json();
});

app.listen(3000);