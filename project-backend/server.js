const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

app.listen(3100, () => {
    console.log("Server Running at http://localhost:3100/");
});

app.get('/', (req, res) => {
    res.send({ message: "Hello welcome from backend" })
})