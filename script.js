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


    let result = document.getElementById("result");


    if (recommendation) {

        result.innerHTML = `

        <div class="result-card">

        <h2>
        ✨ ${name}'s Glow Plan
        </h2>


        <h3>
        🧴 Skincare Recommendation
        </h3>


        <h4>
        ${recommendation.name}
        </h4>


        <p>
        <strong>Category:</strong>
        ${recommendation.category}
        </p>


        <p>
        <strong>Why:</strong>
        ${recommendation.description}
        </p>


        </div>

        `;

    }


    else {

        result.innerHTML = `

        <div class="result-card">

        <h2>
        ✨ ${name}'s Glow Plan
        </h2>


        <p>
        We are still building your personalized recommendations.
        Try another skin type or concern.
        </p>


        </div>

        `;

    }

}
