/* async function logOut () {  

  try {
      const response = await fetch("http://127.0.0.1:5000/logout", {
          method: "GET",
          credentials: "include", // Ensure cookies are sent with the request
      });
      const data = await response.json();

      console.log("DATA", data);
      console.log("DATA logged_in", data.logged_in);

      if (data.logged_in === true) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", data.username); // Guardar nombre de usuario
          location.href = data.username === "admin" ? "./projects_admin.html" : "./projects_user.html";
      }
  } catch (error) {
      console.error("Error checking login status:", error);
  } finally {
  }
}
logOut(); */  