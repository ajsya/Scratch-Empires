    function sendMessage() {
      const request = new XMLHttpRequest();
      request.open(
        "POST",
        process.env.WEBHOOK_URL
      );

        request.setRequestHeader('Content-type', 'application/json');
        
        var offenderusername = document.getElementById("username").value;
        var datetime = document.getElementById("datetime").value;
        var crime = document.getElementById("crime").value;
        var message = document.getElementById("message").value;
        
        const description = "**" + crime + ":** " + message
        
        var myEmbed = {
            author: {
                name: datetime
                },
            title: offenderusername,
            description: description,
            color: hexToDecimal("#ff0000")
        }

        var params = {
            username: "Anonymous report",
            embeds: [ myEmbed ]
        }

        request.send(JSON.stringify(params));
        alert("Report sent and will be reviewed by the server admins.");
    }

    // function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }
