// Methos 2:
//Need to initiate a count variable to count pairs and return the value
//sort the given array
//loop through the sorted array 
//if the current item equals to the next item 
//then that's a pair, increment our count variable
//also increment i to skip the next item
//return the count value

function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
    // Method 1
    // const seen = {};
    // ar.forEach((item) => {
    //     if(seen[item]) {
    //         seen[item] = false;
    //         count++;
    //     } else {
    //         seen[item] = true;
    //     }
    // })

    // Method 2
    ar.sort();
    for (let i = 0; i < n - 1; i++) {
        if(ar[i] === ar[i+1]) {
            count++;
            i++;
        }
    }
    
    return count;
}