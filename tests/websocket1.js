// Create a WebSocket connection to the server
const socket = new WebSocket("ws://localhost:8080");

// Event: When connection is open
socket.onopen = function() {
  console.log("Connected to WebSocket server");
  socket.send("Hello Server!"); // send message to server
};

// Event: When a message is received
socket.onmessage = function(event) {
  console.log("Message from server: ", event.data);
};

// Event: When connection is closed
socket.onclose = function() {
  console.log("Disconnected from WebSocket server");
};

// Event: When error occurs
socket.onerror = function(error) {
  console.log("WebSocket error: ", error);
};
