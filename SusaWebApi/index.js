const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://complaintwork2:susaweb@cluster0.fb6mawe.mongodb.net/SusaWebDatabase?retryWrites=true&w=majority&appName=Cluster0');
mongoose.connection.on('error', error => {
  console.log('Connection failed');
});
mongoose.connection.on('connected', connected => {
  console.log('Connected to MongoDB');
});



app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// Configure CORS with specific origins
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://susalabs.vercel.app',

    'https://susalabs.com',
    'https://www.susalabs.com'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

const ContactForm = require('./Router/contactR');
app.use('/ContactForm', ContactForm);

const Resume = require('./Router/ResumeR');
app.use('/Resume', Resume);

const Blog = require('./Router/AddBlogR');
app.use('/Blog', Blog);

const Admin = require('./Router/AdminR');
app.use('/Admin', Admin);

const product = require('./Router/Project');
app.use('/project', product);
const user = require('./Router/user')
app.use('/user', user);

const ChatForm = require('./Router/ChatForm')
app.use('/ChatForm', ChatForm);

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.get('Origin')}`);
  next();
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});
//https://susaweb-418006.el.r.appspot.com
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  console.log("hello")
  res.json('working')
})

app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
  console.log('CORS enabled for origins:', corsOptions.origin);
});