const products = [
  {
    name: 'item 1', 
    price:10000, 
    category: 'category 1'
  },
  
  {
    name:'', 
    price:10000, 
    category: 'category 2'
  },
  
  {
    name:'item 3', 
    price:10000, 
    category: 'category 3'
  },
  
  {
    name:'item 4', 
    price:10000, 
    category: 'category 4'
  },
  
  {
    name:'item 5', 
    price:0, 
    category: 'category 5'
  },
  
  {
    name:'item 6', 
    price:10000, 
    category: null
  },
  
    {
    name:'item 7', 
    price:10000, 
    category: 'category 7'
  }
]; 




function totalSumOfProducts (products) {
  let sum = 0; 
  // Your Solution goes here. 
  products.forEach(object => {
    let valid = true;
    Object.keys(object).forEach(key => {
      if (!object[key]){
        valid = false;
      }
      if (valid && Number.isInteger(object[key])){
        sum += object[key];
      }
    });
  });

  return sum/100; 
}


module.exports = totalSumOfProducts; 

