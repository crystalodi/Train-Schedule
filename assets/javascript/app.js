$(".time-picker").pickatime({
  twelvehour:false,
  autoclose:true

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

$("#addTrain-button").on("click", function(event){
  event.preventDefault();
  var name = $("#trainName-input").val();
  var destination = $("#destination-input").val();
  var time = $("#time-input").val();
  var frequency = $("#frequency-input").val();
  var newChild = {
    name: name,
    destination: destination,
    time:time,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  }
  database.ref().push(newChild);
  $("#trainName-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
})

database.ref().on("child_added", function(childSnap){
  console.log(childSnap.val())
  var tBody = $('tbody');
  var tr = $('<tr>');
  tBody.append(tr);
  var tdName = $('<td>').text(childSnap.val().name)
  tr.append(tdName);
  var tdDestination = $('<td>').text(childSnap.val().destination)
  tr.append(tdDestination);
  var tdFrequency = $('<td>').text(childSnap.val().frequency)
  tr.append(tdFrequency);
})