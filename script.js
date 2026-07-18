async function generateGlow() {

    let name = document.getElementById("name").value;
    let skinType = document.getElementById("skinType").value;
    let concern = document.getElementById("concern").value;


    let response = await fetch("data/skincare.json");
    let products = await response.json();


    let recommendation = products.find(product =>
        product.type === skinType &&
        product.concern === concern
    );


    if(recommendation){

        document.body.innerHTML += `

        <div class="result">

        <h2>✨ ${name}'s Glow Plan</h2>

        <h3>🧴 Skincare Recommendation</h3>

        <h4>${recommendation.name}</h4>

        <p>
        Category:
        ${recommendation.category}
        </p>

        <p>
        Why:
        ${recommendation.description}
        </p>

        </div>

        `;

    }

    else{

        document.body.innerHTML += `

        <h2>
        ✨ We are still building your personalized recommendations!
        </h2>

        `;

    }

}
