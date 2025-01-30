//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]

//array of names

//array of occupations

const freelancer = [
    { name: "Sri", occupation: "developer", price: 25 },
    { name: "Muk", occupation: "gamer" , price: 51 },
    ];
  
  const new_freelancer = [
    { name: "Dr. Slice", occupation: "gardener", price: 25 },
    { name: "Dr. Pressure", occupation: "programmer", price: 51 },
    { name: "Prof. Possibility", occupation: "teacher", price: 43 },
    { name: "Prof. Prism", occupation: "teacher", price: 81 },
    { name: "Dr. Impulse", occupation: "teacher", price: 43 },
    { name: "Prof. Spark", occupation: "programmer", price: 76 },
    { name: "Dr. Wire", occupation: "teacher", price: 47 },
    { name: "Prof. Goose", occupation: "driver", price: 72 },
  ];


 // create init function

  function init() {
  /**
   * Grab the div with the id of "freelancer_container"
   */
  const root = document.querySelector("#freelancer_container");
  /**
  /**
   * 
   *    Create a table to hold freelancers in
   */

  const h1 = document.createElement("h1");
  h1.innerHTML = "Pets";
  root.append(h1);
 
  const fltable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  
  //create headers for table

  for (let key of Object.keys(freelancer[0])) {
    const th = document.createElement("th");
    th.innerText = key;

    thead.appendChild(th);
  }

  fltable.appendChild(thead);
  fltable.appendChild(tbody);

  //add table to freelancer_container div
  root.appendChild(fltable);

  //Call the function you created in step 4

  flArray();
  }
  function flArray() {
    //grab table body
    const flTable = document.querySelector("tbody");
  
    const flElements = freelancer.map((fl) => {
      const row = document.createElement("tr");
  
      const fl_name = document.createElement("td");
      fl_name.textContent = fl.name;

      const fl_occupation = document.createElement("td");
      fl_occupation.textContent = fl_occupation;
  
      const fl_price = document.createElement("td");
      fl_price.textContent = fl_price;
  

  
      row.append(fl_name, fl_occupation, fl_price);
  
      return row;
    });
  
    flTable.replaceChildren(...flElements);
  }

 
/**
 * Create a function to render the average freelancer price to the DOM
 *
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avg function passing the calculated sum and the freelancer array
 *      4. update textContent of the span with the avg
 *          - if textContent doesn't work use innerHTML
 *      5. replace children of p tag with the updated span
 */

/**
 * Create function to sum all prices in our freelancer array
 */
function sum(arr) {
    //total price
    sum() {
        //return the sum of the numbers
        var SumofArray = 0;
        for( let i = 0; i < this.data.length; i++) {
           SumofArray = SumofArray + this.data[i];
        }
        return SumofArray;
      }
  }
  
  /**
   *
   * Function to get average of given price with array
   *
   * @param {Number} totalPrice
   * @param {Array} arr
   * @returns Number
   */
  function avg(totalPrice, arr) {
    return totalPrice / arr.length;
  }
  
  /**
   * Create a function to add a new freelancer to the freelancer array
   *
   *      1. create variable for the new freelancer object
   *      2. set the name value of our new freelancer to a random name selected from our names array
   *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
   *      4. generate random price for new freelancer
   *
   * new_freelancer --> {name: 'Alex', occupation: 'writer', price: 75 }
   *
   *      5. add new freelancer to the freelancers array
   *      6. Call the function created above to render the freelancer array
   *      7. Call the function created above to render the average price
   *
   */
  
  //setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds
  
  //call init function
  init();