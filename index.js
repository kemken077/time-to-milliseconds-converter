const express = require('express');
const app = express();
const PORT = 3002;
const staticPath = 'public';

app.use(express.static(staticPath));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));