// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-item-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#item-input").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new item");
            location.reload();
          }
        );
    });

    $(".devouring").on("click", function(event) {
      const id = $(this).data("id");
      let edible = $(this).data("edible");
  
      if (edible) {
          edible = false;
      } else {
          edible = true;
      }

      const updateState = {
        devoured: edible
      };
      console.log("the data: ", updateState);
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updateState
      }).then(
        function() {
          console.log("changed edible statement to", edible);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
    $(".delete-burger").on("click", function(event) {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/delete/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  