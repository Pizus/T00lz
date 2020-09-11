$("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      var typeValue = value.substring(1);

      $("table tr").each(function(index) {
          if (index !== 0) {

            $row = $(this);
            if (value.charAt(0) !== "+") {
              var id = $row.find("td:nth-child(1) a").text().toLowerCase();
              if (id.indexOf(value) !== 0) {
                $row.fadeOut();
              } else {
                $row.fadeIn();
              }
            } else {


                var id = $row.find("td:nth-child(3) a").text().toLowerCase();
                if (id.indexOf(typeValue) !== -1) {
                  $row.fadeIn();
                } else {
                  $row.fadeOut();
                }



            };

          };
      });
});
