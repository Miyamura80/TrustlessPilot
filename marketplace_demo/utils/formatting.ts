export function formatAddress(address) {
  return address.toLowerCase().slice(0,4) + "..." + address.toLowerCase().slice(-4);
}
