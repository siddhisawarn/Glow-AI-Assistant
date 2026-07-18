async function startProfile() {

    let name = prompt("What is your name?");

    let skinType = prompt(
        "What is your skin type?\nDry\nOily\nCombination\nSensitive"
    );

    let concern = prompt(
        "What is your main skin concern?\nAcne\nDryness\nDark Spots\nNone"
    );


    localStorage.setItem(
        "glowProfile",
        JSON.stringify({
            name: name,
            skinType: skinType,
            concern: concern
        })
    );


    let response = await fetch("data/skincare.json");
    let products = await response.json();


    let recommendation = products.find(
        product =>
        product.type.toLowerCase() === skinType.toLowerCase() &&
        product.concern.toLowerCase() === concern.toLowerCase()
    );


    if(recommendation){

        alert(
            "✨ Glow Recommendation for " + name +
            "\n\n🧴 Product: " + recommendation.name +
            "\n\nCategory: " + recommendation.category +
            "\n\nWhy: " + recommendation.description
        );

    } else {

        alert(
            "✨ We are still building your personalized recommendations!"
        );

    }

}
