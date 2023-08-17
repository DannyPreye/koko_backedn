const form = document.forms["create-student"];
const level = form["level"];
const name = form["name"];

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        level: level.value,
        name: name.value,
    };

    console.log(data);

    const res = await fetch("/create-user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const finalResponse = await res.json();
    if (finalResponse.success) {
        location.href = "/about";
    }
});
