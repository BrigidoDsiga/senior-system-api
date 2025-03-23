import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import './PayrollList.css'; // Certifique-se de que o nome do arquivo está correto

const PayrollList = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('employeeName');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    const fetchPayrolls = async () => {
      try {
        const response = await axios.get('http://localhost:3000/payroll');
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setPayrolls(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'There was an error fetching the payroll data!');
        setLoading(false);
      }
    };

    fetchPayrolls();
  }, []);

  const filteredPayrolls = useMemo(() => {
    return payrolls.filter(payroll =>
      payroll.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [payrolls, searchTerm]);

  const sortedPayrolls = useMemo(() => {
    return [...filteredPayrolls].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }

      return sortDirection === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });
  }, [filteredPayrolls, sortBy, sortDirection]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="payroll-list">
      <h1>Payroll List</h1>

      <input
        type="text"
        placeholder="Search by employee name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="sort-controls">
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
          <option value="employeeName">Employee Name</option>
          <option value="salary">Salary</option>
        </select>
        <button onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')} className="sort-button">
          {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>

      <table className="payroll-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {sortedPayrolls.map(payroll => (
            <tr key={payroll.id}>
              <td>{payroll.employeeName}</td>
              <td>${payroll.salary.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollList;