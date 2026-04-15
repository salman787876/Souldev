function generateOrderID() {
  return "PRIME-" + Date.now().toString().slice(-6);
}
