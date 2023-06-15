let cartItens = 2
let totalPrice = 120

function setFreeShipping() {
    console.log('Free Shipping')
}

function calculateShipping() {
    console.log('Calculate Shipping')
}

// Bad
// Avoid ELSE

const checkShipping = (totalToFreeShipping) => {
    if (!isNaN(totalToFreeShipping)) {
        if (totalPrice> totalToFreeShipping) {
            setFreeShipping();
        } else {
            calculateShipping();
        }
    } else {
        console.log('Value is not valid!')
    }
}

checkShipping(80);


// Good

const checkShippingGood = (totalToFreeShipping) => {
    // Early return. Validate possible problems before the “happy path”
    if (isNaN(totalToFreeShipping)) return console.log('Value is not valid!');

    if (totalPrice > totalToFreeShipping) {
        setFreeShipping();
        return;
    }
    
    calculateShipping();
}

checkShippingGood(80);



