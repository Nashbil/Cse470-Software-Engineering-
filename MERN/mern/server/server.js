const express = require('express');
const cors = require('cors');  
const connectDB = require('./db/connection');  
require('dotenv').config();
const adminRoutes = require('./routes/adminRoutes'); 

const app = express();


console.log('Server is starting...');


app.use(cors());  
app.use(express.json()); 

connectDB()
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);  
  });


app.use('/api/admin', adminRoutes);  


app.get('/', (req, res) => {
  console.log('Request received at /');
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
