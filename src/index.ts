import MagicEdenWebSocket from "./magicEdenWs";
import BlurWebSocket from "./blurWs";

// Choose which service to use
const USE_MAGIC_EDEN = true; // Set to true for Magic Eden, false for Blur

const client = USE_MAGIC_EDEN ? new MagicEdenWebSocket() : new BlurWebSocket();

// Handle process termination
process.on("SIGINT", () => {
  console.log("Closing WebSocket connection...");
  client.close();
  process.exit();
});
