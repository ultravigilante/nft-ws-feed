import WebSocket from 'ws';

const socket = new WebSocket('wss://feeds.prod.blur.io/socket.io/?tabId=6uHKgGtlAThm&storageId=h4hdU9mdFEn5&EIO=4&transport=websocket');

socket.on('open', () => {
  console.log("Connected to Blur.io websocket");

  // Send initial '40' message
  socket.send("40");

  // Subscribe to the events feed
  socket.send('420["subscribe",["feeds.collections.updatedNumberListings"]]');
  socket.send(
    '421["subscribe",["undefined.COLLECTION.{}.denormalizer.bidLevels"]]',
  );
  socket.send('422["subscribe",["orderbook.newTopsOfBooks"]]');
  socket.send('423["subscribe",["stats.floorUpdate"]]');
  socket.send('424["subscribe",["feeds.activity.eventsCreated"]]');
  socket.send('425["subscribe",["orderbook.ownersBagsUpdates"]]');
  socket.send('426["subscribe",["metadata.received"]]');
  socket.send('427["subscribe",["feeds.nft.updatedScamStatus"]]');
  socket.send('428["subscribe",["pendingTransactions"]]');
  socket.send('429["subscribe",["metadata.computedTraitFrequencies"]]');
  socket.send('4210["subscribe",["denormalizer.bidStats"]]');
  socket.send('4211["subscribe",["stats.volumeUpdate"]]');
  socket.send('4212["subscribe",["stats.collectionSupplyUpdate"]]');
  socket.send('4212["subscribe",["stats.collectionSupplyUpdate"]]');
  socket.send('4213["subscribe",["feeds.gasFeeEstimateUpdate"]]');
  socket.send(
    '4214["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.feeds.collections.updatedNumberListings"]]',
  );
  socket.send(
    '4215["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.COLLECTION.{}.denormalizer.bidLevels"]]',
  );
  socket.send(
    '4216["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.orderbook.newTopsOfBooks"]]',
  );
  socket.send(
    '4217["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.stats.floorUpdate"]]',
  );
  socket.send(
    '4218["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.feeds.activity.eventsCreated"]]',
  );
  socket.send(
    '4219["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.orderbook.ownersBagsUpdates"]]',
  );
  socket.send(
    '4220["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.metadata.received"]]',
  );
  socket.send(
    '4221["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.feeds.nft.updatedScamStatus"]]',
  );
  socket.send(
    '4222["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.pendingTransactions"]]',
  );
  socket.send(
    '4223["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.metadata.computedTraitFrequencies"]]',
  );
  socket.send(
    '4224["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.denormalizer.bidStats"]]',
  );
  socket.send(
    '4225["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.stats.volumeUpdate"]]',
  );
  socket.send(
    '4226["subscribe",["0x03b8d129a8f6dc62a797b59aa5eebb11ad63dada.stats.collectionSupplyUpdate"]]',
  );
});

socket.on('message', (data) => {
  console.log("Received message:", data.toString());
});

socket.on('error', (error) => {
  console.error("Socket error:", error);
});

socket.on('close', () => {
  console.log("Disconnected from websocket");
});

// Keep the process running
process.on("SIGINT", () => {
  console.log("Closing connection...");
  socket.close();
  process.exit();
});
