const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./utils/db');
const payrollRoutes = require('./routes/payrollRoutes');
const electronicPointRoutes = require('./routes/electronicPointRoutes');
const recruitmentSelectionRoutes = require('./routes/recruitmentSelectionRoutes');

app.use(cors()); // Adiciona o middleware CORS
app.use(express.json());

app.use('/payroll', payrollRoutes);
app.use('/electronic-point', electronicPointRoutes);
app.use('/recruitment-selection', recruitmentSelectionRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });