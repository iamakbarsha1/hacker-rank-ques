function countingValleys(steps, path) {
    // Write your code here
    let count = 0;
    let altitude = 0;
    // Method 1:
    // let u_count = 0;
    // let d_count = 0;
    // let u_ar = [];
    // let d_ar = [];
    
    // for (let i = 0; i < steps; i++) {
    //     if(path[i] === "U"){
    //         u_ar.push(path[i]);
    //         u_count++;
    //     } 
    //     if (path[i] === "D") {
    //         d_ar.push(path[i]);
    //         d_count++;
    //     }
    //     console.log('path[i]: ' + path[i] + "- " + i);
    // }
    // count = u_count / d_count;
    
    // Method 2: 
    for(let i =0; i < path.length; i++) {
        if(path[i] === "U") {
            altitude++;
            if(altitude === 0){
                count++
            }
        } else if(path[i] === "D"){
            altitude--;
        }
    }
    console.log("altitude: " + altitude);
    console.log("count: " + count);
    
    return count;
}