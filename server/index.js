const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // Add body-parser

const PORT = 3000;

app.use(cors());
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware

app.listen(PORT, () => {
  console.log(`App is live at port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('All functionality working.');
});

app.use(express.json());

const contacts = require('./route/route');
app.use('/api', contacts);

const dbConnect = require('./database/database');
dbConnect();
