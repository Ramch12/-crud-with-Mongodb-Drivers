const express = require('express');
const app = express();
const Route = require('./crud/crud');


const port = process.env.PORT || 3000;

// let middleware = (req, res, next) => {
//     if (!req.query.name) {
//         res.send("PLz provide pass in query");
//     }
//     else if (req.query.name != "pass") {
//         res.send("Plz provide the corrrect query");
//     }
//     else {
//         next();
//     }
// };

// module.exports=middleware();
// module.exports=app.use(middleware);
app.use(express.json());

app.use('/', Route);






app.listen(port, () => {
    console.log(`Your server is listening on port ${port}`);
})





