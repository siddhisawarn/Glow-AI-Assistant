function startProfile() {
    let name = prompt("What is your name?");

    let skinType = prompt(
        "What is your skin type?\nDry\nOily\nCombination\nSensitive"
    );

    let concern = prompt(
        "What is your main skin concern?\nAcne\nDryness\nDark Spots\nTexture\nNone"
    );

    let style = prompt(
        "What makeup style do you like?\nNatural\nSoft Glam\nBold"
    );

    alert(
        "✨ Welcome " + name +
        "!\n\nYour Glow Profile has been created.\n\n" +
        "Skin Type: " + skinType +
        "\nConcern: " + concern +
        "\nMakeup Style: " + style
    );

    localStorage.setItem(
        "glowProfile",
        JSON.stringify({
            name: name,
            skinType: skinType,
            concern: concern,
            makeupStyle: style
        })
    );
}
