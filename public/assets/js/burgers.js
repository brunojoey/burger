$(function () {
  // Add a new burger
  $(".add").on("click", function (event) {
      event.preventDefault();
      const newBurger = {
          name: $("#burger-name").val(),
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
              location.reload();
          }
      );
  });

  // Click the button to eat a burger
  $(".devour").on("click", function (event) {
      event.preventDefault();
      const id = $(this).data("id");
      const devouredState = {
          devoured: true
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(
          function () {
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });
});