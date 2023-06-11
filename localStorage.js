
function handleSubmit(event) {
    event.preventDefault(); 
    
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
   
    const userDetails = {
      name: name,
      email: email,
      phone: phone
    };
    
   
    localStorage.setItem('user', JSON.stringify(userDetails));
    
   
    displayData(userDetails);
    
    
  }
  
  
  function displayData(userDetails) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = `
      <h2>User Details:</h2>
      <p><strong>Name:</strong> ${userDetails.name}</p>
      <p><strong>Email:</strong> ${userDetails.email}</p>
      <p><strong>Phone:</strong> ${userDetails.phone}</p>
    `;
  }
  

  document.getElementById('myForm').addEventListener('submit', handleSubmit);
  
