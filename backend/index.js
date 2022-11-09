const express= require("express");
const {connection} = require("./config/db");

const {DefaultData}= require("./default")
const router= require("./routes/route")
const cors= require("cors")
const app = express();
const bodyParser= require("body-parser")

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router)

app.get("/", (req,res)=>{
    res.send("Home Page");
})

const PORT= 8000;

app.listen(PORT,async () => {
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
});

DefaultData();