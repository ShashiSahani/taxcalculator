import React, { useState } from 'react';

function AnnualSalaryTaxCalculator() {
  const [annualSalary, setAnnualSalary] = useState('');
  const [tax, setTax] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const calculateTax = (e) => {
    e.preventDefault();
    if (!annualSalary) {
      setErrorMessage('Please enter an annual salary.');
      return;
    }

    const salaryAmount = parseFloat(annualSalary);

    if (salaryAmount < 0) {
      setErrorMessage('Please enter a valid positive salary amount.');
      return;
    }

    let calculatedTax = 0;

    if (salaryAmount <= 300000) {
      calculatedTax = 0;
    } else if (salaryAmount <= 600000) {
      calculatedTax = (salaryAmount - 300000) * 0.05;
    } else if (salaryAmount <= 900000) {
      calculatedTax = 300000 * 0.05 + (salaryAmount - 600000) * 0.10;
    } else if (salaryAmount <= 1200000) {
      calculatedTax = 300000 * 0.05 + 600000 * 0.10 + (salaryAmount - 900000) * 0.15;
    } else if (salaryAmount <= 1500000) {
      calculatedTax = 300000 * 0.05 + 600000 * 0.10 + 900000 * 0.15 + (salaryAmount - 1200000) * 0.2;
    } else {
      calculatedTax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (300000 * 0.20) + (salaryAmount - 1500000) * 0.30;
    }

    setTax(calculatedTax.toFixed(2));
   
    setErrorMessage('');
  };

  return (
    <div className='container'>
      <h1>Annual Salary Tax Calculator</h1>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Salary Range</th>
            <th scope="col">Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Up to 300,000</th>
            <td>No Tax</td>
          </tr>
          <tr>
            <th scope="row">300,001 - 600,000</th>
            <td>5%</td>
          </tr>
          <tr>
            <th scope="row">600,001 - 900,000</th>
            <td>10%</td>
          </tr>
          <tr>
            <th scope="row">900,001 - 1,200,000</th>
            <td>15%</td>
          </tr>
          <tr>
            <th scope="row">1,200,001 - 1,500,000</th>
            <td>20%</td>
          </tr>
          <tr>
            <th scope="row">Above 1,500,000</th>
            <td>30%</td>
          </tr>
        </tbody>
      </table>

      <form onSubmit={calculateTax}>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your annual salary in INR"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value)}
          />
        </div>
      
        <div className=''>
          <button className='btn btn-primary' type='submit'>Calculate Tax</button>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>

      {tax == null ? (
       null
      ) :  <p>Tax Amount: {tax}</p>}
    </div>
  );
}

export default AnnualSalaryTaxCalculator;
