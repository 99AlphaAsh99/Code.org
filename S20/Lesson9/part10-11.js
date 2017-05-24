for (var count = 0; count < 7; count++) {
  moveForward();
  if (pilePresent()) {
    dig();
  }
}
 



while (isPathForward()) {
  if (pilePresent()) {
    dig();
  }
  if (holePresent()) {
    fill();
  }
  moveForward();
}
ReplayContinue
