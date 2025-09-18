const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const ConnectDb=()=>{
    mongoose.connect(process.env.Mongoose_URL,)
    .then(()=> console.log('Database is connected') )
    .catch((err)=> console.log(`Database is not Connected ,${err}`)
    )
}
module.exports= ConnectDb