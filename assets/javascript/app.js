$(".time-picker").pickatime({
  twelvehour: false,
  autoclose: true
});
var config = {
  apiKey: "AIzaSyA336_CJKjqkXnlyF_3QabmLyKKlfv79WE",
  authDomain: "train-schedule-4ae1d.firebaseapp.com",
  databaseURL: "https://train-schedule-4ae1d.firebaseio.com",
  projectId: "train-schedule-4ae1d",
  storageBucket: "train-schedule-4ae1d.appspot.com",
  messagingSenderId: "1030214256064"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#addTrain-button").on("click", function(event) {
  event.preventDefault();
  var name = $("#trainName-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var time = $("#time-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  if (name === "") {
    $("#trainName-input").focus();
    return;
  }
  if (destination === "") {
    $("#destination-input").focus();
    return;
  }
  if (time === "") {
    $("#time-input").focus();
    return;
  }
  if (frequency === "") {
    $("#frequency-input").focus();
    return;
  }
  var unixTime = moment(time, "HH:mm").subtract(1, "years").format("X");
  var newChild = {
    name: name,
    destination: destination,
    time: unixTime,
    stringTime: time,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  };
  database.ref().push(newChild);
  $("#trainName-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnap) {
  console.log(childSnap.val());
  var tBody = $("tbody");
  var tr = $("<tr>");
  tBody.append(tr);
  tr.append($("<td>").text(childSnap.val().name));
  tr.append($("<td>").text(childSnap.val().destination));
  tr.append($("<td>").text(childSnap.val().frequency));
  var diffTime = moment().diff(moment.unix(childSnap.val().time), "minutes");
  var tRemainder = diffTime % parseInt(childSnap.val().frequency);
  var tMinutesTillTrain = parseInt(childSnap.val().frequency) - tRemainder;
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  var nextTrainArrival = moment(nextTrain).format("hh:mm A");
  tr.append($("<td>").text(nextTrainArrival));
  tr.append($("<td>").text(tMinutesTillTrain));
});
