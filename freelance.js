//starting freelancer array with at least 2 objects 

const freelancers = [
  { name: 'Sam', occupation: 'Programmer', price: 50 },
  { name: 'Alex', occupation: 'Designer', price: 60 },
];

//
//array of names

const names = ['Sam', 'Alex', 'Taylor', 'Jordan', 'Jamie'];

//array of Occupation

const occupations = ['Programmer', 'Designer', 'Writer', 'Artist', 'Photographer'];

//create init function

function init() {
  //1. select freelancer_container from DOM
  const freelancerContainer = document.querySelector('#freelancer_container');
  //2. create DOM elements
  //          - table
  //          - thead
  //          - tr (header row)
  //          - tbody
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');
  
  //3. Add text to the header row where the text matches the object key of a freelancer
  for (let key in freelancers[0]) {
    const th = document.createElement("th");
    th.textContent = key;

    headerRow.append(th);
  }

  //4. Append header row to the thead
  thead.append(headerRow);
  //5. Append thead and tbody to table
  table.append(thead);
  table.append(tbody);
  //6. Append table to freelancer_container
  freelancerContainer.append(table);

  //7. Call the function created below to render the freelancer array
  renderFreelancers();

  //8. Call the function created below to render the average price
  renderAveragePrice();
}

// Create function to render the freelancer array to the DOM

function renderFreelancers() {
  // 1. select tbody from DOM
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  //2. map over freelancer array
  //          2-1. create elements
  //              - tr
  //              - td (name)
  //              - td (occupation)
  //              - td (starting price)
  //          2-2. Add text to each td representing the value of the freelancer object
  //          2-3. Append tds to tr
  freelancers.forEach(freelancer => {
    const tr = document.createElement('tr');
    
    const tdName = document.createElement('td');
    tdName.textContent = freelancer.name;
    tr.appendChild(tdName);

    const tdOccupation = document.createElement('td');
    tdOccupation.textContent = freelancer.occupation;
    tr.appendChild(tdOccupation);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = freelancer.price;
    tr.appendChild(tdPrice);

    tbody.appendChild(tr);
  });
}

//* Create a function to render the average freelancer price to the DOM

function renderAveragePrice() {
  const averagePriceElement = document.querySelector('#average_price');
  
  const totalPrice = sum(freelancers);
  const avgPrice = avg(totalPrice, freelancers);

  averagePriceElement.textContent = avgPrice.toFixed(2);
}

//Function to find the sum of the price

function sum(arr) {
  return arr.reduce((acc, freelancer) => acc + freelancer.price, 0);
}

//Function to find the average price

function avg(totalPrice, arr) {
  return totalPrice / arr.length;
}

//Function to add Random freelancer to the table

function addFreelancer() {
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: Math.floor(Math.random() * 100) + 50
  };

  freelancers.push(newFreelancer);
  renderFreelancers();
  renderAveragePrice();
}

////setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds

setInterval(addFreelancer, 1000);

// call the init function
init();
