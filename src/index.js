// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./env" });

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    })
  )
  .catch((err) => console.error("Mongodb connection failed !!! ", err));

/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `);
    app.on("error", (err) => console.error(err));
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server is running on port ${process.env.PORT || 3000}`)
    );
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
})();
*/
