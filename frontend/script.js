const button = document.getElementById("getEmployeesBtn");

button.addEventListener("click", async () => {

    try {

        const response = await fetch("/employees");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Failed to fetch employees");

    }

});