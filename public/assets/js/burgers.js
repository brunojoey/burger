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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#bname").val().trim(),
      devoured: false,
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
      event.preventDefault();
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});