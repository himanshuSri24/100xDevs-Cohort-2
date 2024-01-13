/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

/**
 * Calculates the total amount spent for each category in the given transactions.
 * @param {Array<Object>} transactions - The array of transactions.
 * @returns {Array<Object>} - An array of objects containing the category and the total amount spent for each category.
 */
function calculateTotalSpentByCategory(transactions) {
  const result = [];
  // for each transaction, check if category exists in result
  // if not, add it to result
  // if exists, add price to totalSpent
  transactions.map((transaction) => {
    const index = result.findIndex(
      (item) => item.category === transaction.category
    );
    if (index === -1) {
      result.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      result[index].totalSpent += transaction.price;
    }
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
