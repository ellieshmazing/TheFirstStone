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
  });
});

//Function to populate post info
function input_post(url) {
  //Wait for GET request to complete
  $.when(get_AITA_post(url)).done(function (data) {
    const post_title = data[0]["data"]["children"]["0"]["data"]["title"];
    const post_text =
      data[0]["data"]["children"]["0"]["data"]["selftext"];
    const post_verdict =
      data[0]["data"]["children"]["0"]["data"]["link_flair_text"];

    $("#titletext").text(post_title);
    $("#posttext").text(post_text);
    console.log(post_verdict);
  });
}

//Function to GET AITA post data
function get_AITA_post(url) {
  return $.getJSON(url);
}

input_post(
  "https://www.reddit.com/r/AmItheAsshole/comments/1e5s7kl/aita_for_not_giving_my_daughter_a_car_for_her/.json"
);
