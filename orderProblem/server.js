/*
 * Complete the 'filledOrders' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. INTEGER k
 */

function filledOrders(order, k) {
  order.sort((a, b) => a - b);
  let count = 0;
  let total = 0;
  // Iterate through the sorted orders
  for (let i = 0; i < order.length; i++) {
    // Add the current order to the total
    total += order[i];
    // If the total exceeds the available widgets, break the loop
    if (total > k) {
      break;
    }
    // Otherwise, increment the count of fulfilled orders
    count++;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const orderCount = parseInt(readLine().trim(), 10);

  let order = [];

  for (let i = 0; i < orderCount; i++) {
    const orderItem = parseInt(readLine().trim(), 10);
    order.push(orderItem);
  }

  const k = parseInt(readLine().trim(), 10);

  const result = filledOrders(order, k);

  ws.write(result + "\n");

  ws.end();
}
