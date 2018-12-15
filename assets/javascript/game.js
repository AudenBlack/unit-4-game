$(document).ready(function() {

    var wins = 0;
        losses = 0;
        compNum = Math.floor(Math.random() * 120) + 16
        var currentTotal = 0
         $('#wins').text(wins)
         $('#losses').text(losses)
         $('#compNum').text(compNum)
         $('#total').text(currentTotal)

         $(".crystalButton").each(function() {
            var randomValue = Math.floor(Math.random() * 16) + 1
            $(this).attr("value", randomValue)
         })
         
         $(".crystalButton").on("click", function() {
            
            currentTotal += parseInt($(this).attr("value"))

            $('#total').text(currentTotal)
           if (currentTotal === compNum) {
               wins++;
               $('#wins').text(wins)
               reset()
           } else if (currentTotal > compNum) {
               losses++;
               $('#losses').text(losses)
               reset()
           }

           function reset() {
            compNum = Math.floor(Math.random() * 120) + 16
            currentTotal = 0
             $('#wins').text(wins)
             $('#losses').text(losses)
             $('#compNum').text(compNum)
             $('#total').text(currentTotal)
    
             $(".crystalButton").each(function() {
                var randomValue = Math.floor(Math.random() * 16) + 1
                $(this).attr("value", randomValue)
             })
           }
           
            
         })
})