import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from "cors" // middleware taaki koi hmara backend na dekh saake vrn cors error aaega
const app=express();
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDbURI;
app.use(express.json()); // request ki body ke data ko json mein parse krne ke liyye

try {
  await mongoose.connect(URI);
  console.log("Connected to the database");
} catch (error) {
  console.error("Error connecting to the database:", error);
}
app.use(cors())
app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
})
