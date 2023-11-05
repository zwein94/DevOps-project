window.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('result-container');
  
    fetch('/api/test-connection')
      .then((response) => response.json())
      .then((data) => {
        resultContainer.textContent = data.message;
      })
      .catch((error) => {
        console.error('Error testing database connection:', error);
        resultContainer.textContent = 'Error testing database connection.';
      });
  });