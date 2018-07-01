var gameState = {
    initialQuestion: true,
}


function answerClicked()
{
    var answer = $(this).attr("id").split("-")[1];
    console.log("Answer selected: " + answer);
}

$(".answer").on("click", answerClicked);