//Game variable declarations
var score = 0;
var post_verdict; //Global variable for post verdict
var user_verdict; //Global variable for user verdict
const Verdicts = {
  //Possible post verdicts, correlated with button text
  YTA: "Asshole",
  NTA: "Not the A-hole",
  ESH: "Everyone Sucks",
  NAH: "No A-holes here",
};

//Function to start new game
$(document).ready(function () {
  $("#newgame").click(function () {
    $(this).animate(
      {
        width: "9.5vw",
        height: "7.5vh",
        margin: "3.75vw",
        "border-radius": "4.75vh",
      },
      40
    );
    $(this).animate(
      {
        width: "10vw",
        height: "8vh",
        margin: "3.5vw",
        "border-radius": "4.5vh",
      },
      40
    );
    new_game();
  });
});

//Function to handle judgement button click
$(document).ready(function () {
  $(".judgement").click(function () {
    //Shrink animation to indicate click
    $(this).animate(
      {
        width: "11.5vw",
        height: "11.5vh",
        margin: "3.75vw",
        "border-radius": "4.75vh",
      },
      40
    );
    $(this).animate(
      {
        width: "12vw",
        height: "12vh",
        margin: "3.5vw",
        "border-radius": "4.5vh",
      },
      40
    );

    //Compare button text to post verdict
    var user_verdict = String($(this).text());
    if (user_verdict == post_verdict) {
      score++;
      $("#scorenum").text(score);
      //Generate new post
    } else {
      game_over();
    }
  });
});

//Function to populate post info
function input_post(url) {
  //Wait for GET request to complete
  $.when(get_AITA_post(url)).done(function (data) {
    //Parse post JSON for title, text, and majority verdict
    const post_title = data[0]["data"]["children"]["0"]["data"]["title"];
    const post_text = data[0]["data"]["children"]["0"]["data"]["selftext"];
    post_verdict = data[0]["data"]["children"]["0"]["data"]["link_flair_text"];

    //Populate appropriate fields
    $("#titletext").text(post_title);
    $("#posttext").text(post_text);

    //Convert verdict to shorthand
    switch (post_verdict) {
      case Verdicts.ESH:
        post_verdict = "ESH";
        break;
      case Verdicts.NAH:
        post_verdict = "NAH";
        break;
      case Verdicts.NTA:
        post_verdict = "NTA";
        break;
      case Verdicts.YTA:
        post_verdict = "YTA";
        break;
      default:
      //Generate new post
    }
  });
}

//Function to GET AITA post data
function get_AITA_post(url) {
  return $.getJSON(url);
}

input_post(
  "https://www.reddit.com/r/AmItheAsshole/comments/1efan4h/aita_for_telling_my_fil_that_i_dont_want_the/.json"
);

function new_game() {
  score = 0;
  $("#scorenum").text(score);
  $("#freezeoverlay").fadeOut(300);

  //Get new post
}

function game_over() {
  $("#freezeoverlay").fadeIn(100);
}