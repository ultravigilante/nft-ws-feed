import WebSocket from "ws";

class MagicEdenWebSocket {
  private ws: WebSocket;
  private pingInterval: NodeJS.Timeout;

  constructor() {
    this.ws = new WebSocket("wss://wss-mainnet.magiceden.io/");
    this.setupWebSocket();
    this.pingInterval = setInterval(() => this.sendPong(), 30000);
  }

  private setupWebSocket() {
    this.ws.on("open", () => {
      console.log("Connected to Magic Eden WebSocket");
      this.subscribeToCollection();
      this.subscribeToStats();
    });

    this.ws.on("message", (data) => {
      console.log("Received:", data.toString());
    });

    this.ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });

    this.ws.on("close", () => {
      console.log("Disconnected from Magic Eden WebSocket");
      clearInterval(this.pingInterval);
    });
  }

  private subscribeToCollection() {
    const subscribeMsg = {
      type: "subscribeCollection",
      constraint: {
        chain: "solana",
        collectionSymbol: "pixel_pengu",
      },
    };
    this.ws.send(JSON.stringify(subscribeMsg));
  }

  private subscribeToStats() {
    const statsMsg = {
      type: "subscribeCollectionStats",
      constraint: {
        windowChainCollectionIds: [
          {
            window: "1d",
            chain: "solana",
            collectionId: "pixel_pengu",
          },
        ],
      },
    };
    this.ws.send(JSON.stringify(statsMsg));
  }

  private sendPong() {
    this.ws.send("pong");
  }

  public close() {
    clearInterval(this.pingInterval);
    this.ws.close();
  }
}

export default MagicEdenWebSocket;
