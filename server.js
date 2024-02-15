const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started at port 3000");
});