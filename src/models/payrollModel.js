const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Payroll = sequelize.define('Payroll', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Employees', // Nome da tabela de funcionários
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    validate: {
      isInt: { msg: 'Employee ID must be an integer' },
    },
  },
  employeeName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Employee name cannot be empty' },
    },
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: { msg: 'Payment date must be a valid date' },
    },
  },
  grossSalary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: { msg: 'Gross salary must be a decimal' },
      min: { args: [0], msg: 'Gross salary cannot be negative' },
    },
  },
  deductions: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
    validate: {
      isDecimal: { msg: 'Deductions must be a decimal' },
      min: { args: [0], msg: 'Deductions cannot be negative' },
    },
  },
  netSalary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: { msg: 'Net salary must be a decimal' },
      min: { args: [0], msg: 'Net salary cannot be negative' },
    },
  },
  // Depois consigo adicionar outros campos conforme necessário (dentro da minha aplicação)
}, {
  tableName: 'payrolls',
  timestamps: true, // Adiciona createdAt e updatedAt
  indexes: [
    { fields: ['employeeId'] },
    { fields: ['paymentDate'] },
  ],
  hooks: {
    beforeValidate: (payroll) => {
      if (payroll.grossSalary && payroll.deductions) {
        payroll.netSalary = parseFloat(payroll.grossSalary) - parseFloat(payroll.deductions);
      }
    },
  },
});

module.exports = Payroll;