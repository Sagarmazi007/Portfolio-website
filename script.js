
<script>
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch("ContactServlet", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Failed to send message.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong.");
        });
    });
</script>
