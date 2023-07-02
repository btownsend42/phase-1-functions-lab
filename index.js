function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
  const blockLengthInFeet = 264; // Assuming each block is 264 feet long
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * blockLengthInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const blockLengthInFeet = 264; // Assuming each block is 264 feet long
  const blocks = Math.abs(endBlock - startBlock);
  return blocks * blockLengthInFeet;
}
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0; // Gives customers a free sample
  } else if (distanceInFeet <= 2000) {
    const fare = (distanceInFeet - 400) * 0.02; // Charges 2 cents per foot after the first 400 feet
    return fare;
  } else if (distanceInFeet <= 2500) {
    return 25; // Charges $25 for a distance over 2000 feet
  } else {
    return "cannot travel that far"; // Does not allow rides over 2500 feet
  }
}
