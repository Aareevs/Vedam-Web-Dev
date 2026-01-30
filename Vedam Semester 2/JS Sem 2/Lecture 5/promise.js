const cart  = ["shirt", "trousers", "shoes", "shades"];

const promise = createOrder(cart); //An Async function which returns a promise

//Print

//Consume
promise.then(function(orderId){
    //Promise fullfulled
    console.log(orderId);
})

//Creation of promise /backend side/ producer side

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //Async task to create order
        //validate the cart (check in stack)
        //return orderId

        if(!validateCart(cart)){
            const err = new Error("Cart is invalid");
            reject(err); //Promise rejected
        }

        //Logic for createdOrder

        const orderId = "1101";

        if(orderId){
            setTimeout(function(){
                resolve(orderId); //Promise fullfulled
            }, 2000);
        }
    });
    return pr;
}



function validateCart(cart){
    return true;
}