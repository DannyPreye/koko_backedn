const form = document.forms["upload"];

const profilePic = form["profile_pics"];

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log(profilePic.files);
    const formData = new FormData();

    formData.append("profile_pic", profilePic.files[0]);

    const res = await fetch("/file-handler", {
        method: "POST",
        body: formData,
    });
});
