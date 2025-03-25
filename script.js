async function generateFact() {
    const response = await fetch("facts.json");
    const facts = await response.json();
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").textContent = randomFact.text;
}

function submitFact() {
    const newFact = document.getElementById("newFact").value;
    if (!newFact.trim()) return alert("Bitte gib einen Fakt ein!");

    // Erstelle einen Link zur GitHub-Änderungsseite
    const githubRepo = "dereinebre/randomfact";
    const jsonURL = `https://github.com/${githubRepo}/edit/main/facts.json`;
    document.getElementById("prLink").href = jsonURL;
    document.getElementById("prLink").click();

    alert("Du wirst zur GitHub-Seite weitergeleitet, um den Fakt hinzuzufügen.");
}

generateFact();
