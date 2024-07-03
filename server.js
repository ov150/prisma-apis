import express from "express"
import { configDotenv } from "dotenv";
import productRoute from "./routes/product-route.js"
configDotenv()
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//http://localhost:4000/api/v1
app.use('/api/v1', productRoute)

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
})