function ipToNumber(ip = '127.0.0.1') {
  const bytes = ip.split('.').map(Number);

  const shifted = bytes.map((byte, i) => {
    return byte << (8 * (3 - i));
  });

  return shifted.reduce((total, byte) => total + byte, 0);
}

console.log(ipToNumber('10.0.0.1'));