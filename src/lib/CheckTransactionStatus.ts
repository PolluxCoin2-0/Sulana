const MAX_ATTEMPTS = 3;
const DELAY = 3000;

let attempt = 0;
let verify = null;

while (attempt < MAX_ATTEMPTS) {
  const response = await axios.post(FULL_NODE_TRANSACTION_URL, {
    value: a?.txID,
  });

  console.log(response?.data);

  if (response?.data?.receipt) {
    console.log("kuch bhi", response?.data?.receipt);
    verify = response?.data?.receipt;
    break; // Exit loop if found
  }

  attempt++;
  if (attempt < MAX_ATTEMPTS) {
    await new Promise((resolve) => setTimeout(resolve, DELAY)); // Delay for 3 seconds
  }
}

console.log(verify);

// if (verify?.result !== "SUCCESS") {
//   toast.error("Registration Failed!");
//   setRegisterLoading(false);
//   return;
// }
