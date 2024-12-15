import WebSocket from "ws";

class BlurWebSocket {
  private ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(
      "wss://feeds.prod.blur.io/socket.io/?tabId=6uHKgGtlAThm&storageId=h4hdU9mdFEn5&EIO=4&transport=websocket",
    );
    this.setupWebSocket();
  }

  private setupWebSocket() {
    this.ws.on("open", () => {
      console.log("Connected to Blur.io websocket");
      this.initializeSubscriptions();
    });

    this.ws.on("message", (data) => {
      console.log("Received message:", data.toString());
    });

    this.ws.on("error", (error) => {
      console.error("Socket error:", error);
    });

    this.ws.on("close", () => {
      console.log("Disconnected from websocket");
    });
  }

  private initializeSubscriptions() {
    // Send initial '40' message
    this.ws.send("40");

    // Subscribe to all events
    this.ws.send(
      '420["subscribe",["feeds.collections.updatedNumberListings"]]',
    );
    this.ws.send(
      '421["subscribe",["undefined.COLLECTION.{}.denormalizer.bidLevels"]]',
    );
    this.ws.send('422["subscribe",["orderbook.newTopsOfBooks"]]');
    this.ws.send('423["subscribe",["stats.floorUpdate"]]');
    this.ws.send('424["subscribe",["feeds.activity.eventsCreated"]]');
    this.ws.send('425["subscribe",["orderbook.ownersBagsUpdates"]]');
    this.ws.send('426["subscribe",["metadata.received"]]');
    this.ws.send('427["subscribe",["feeds.nft.updatedScamStatus"]]');
    this.ws.send('428["subscribe",["pendingTransactions"]]');
    this.ws.send('429["subscribe",["metadata.computedTraitFrequencies"]]');
    this.ws.send('4210["subscribe",["denormalizer.bidStats"]]');
    this.ws.send('4211["subscribe",["stats.volumeUpdate"]]');
    this.ws.send('4212["subscribe",["stats.collectionSupplyUpdate"]]');
    this.ws.send('4212["subscribe",["stats.collectionSupplyUpdate"]]');
    this.ws.send('4213["subscribe",["feeds.gasFeeEstimateUpdate"]]');
    this.ws.send(
      '4214["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.feeds.collections.updatedNumberListings"]]',
    );
    this.ws.send(
      '4215["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.COLLECTION.{}.denormalizer.bidLevels"]]',
    );
    this.ws.send(
      '4216["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.orderbook.newTopsOfBooks"]]',
    );
    this.ws.send(
      '4217["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.stats.floorUpdate"]]',
    );
    this.ws.send(
      '4218["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.feeds.activity.eventsCreated"]]',
    );
    this.ws.send(
      '4219["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.orderbook.ownersBagsUpdates"]]',
    );
    this.ws.send(
      '4220["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.metadata.received"]]',
    );
    this.ws.send(
      '4221["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.feeds.nft.updatedScamStatus"]]',
    );
    this.ws.send(
      '4222["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.pendingTransactions"]]',
    );
    this.ws.send(
      '4223["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.metadata.computedTraitFrequencies"]]',
    );
    this.ws.send(
      '4224["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.denormalizer.bidStats"]]',
    );
    this.ws.send(
      '4225["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.stats.volumeUpdate"]]',
    );
    this.ws.send(
      '4226["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.stats.collectionSupplyUpdate"]]',
    );
  }

  public close() {
    this.ws.close();
  }
}

export default BlurWebSocket;
