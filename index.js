import app from './src/server.js';

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});