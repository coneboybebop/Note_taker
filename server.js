const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// apiRoutes

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});