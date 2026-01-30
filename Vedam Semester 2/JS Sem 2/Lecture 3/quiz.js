console.log("Start");

setTimeout(() => {
    console.log("First Timeout (1s)");

    setTimeout(() => {
        console.log("Second Timeout (0.5s)");
    }, 0);

}, 1000);
