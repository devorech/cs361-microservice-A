import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createBlogPost, getBlogPosts } from './blogpostController.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_CONNECT_STRING)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB connection error:", err));

app.use(express.static("public"));
app.use(express.json());

app.post('/create', createBlogPost);
app.get('/posts', getBlogPosts);

// Listen to the PORT specified in the constant variable.
app.listen(port, () => {
    console.log("App is listening to PORT", port);
});

