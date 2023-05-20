const mongoose = require("mongoose")

const dbname = process.env.ATLAS_DATABASE
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${pw}@cluster0.lt38pvm.mongodb.net/${dbname}`;
;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Mango is connected"))
    .catch((err)=> console.log("This is our config error message!", err))