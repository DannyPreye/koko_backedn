const form = document.forms["delete"];
const name = form["name"];

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("/delete-user", {
        method: "DELETE",
        body: JSON.stringify({ name: name.value }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const final = await res.json();
    console.log(final);
});
