// @flow

const getRGBFromHex = (hex: string, opacity: number) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const obj = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
  if (obj) {
    return `rgba(${obj.r}, ${obj.g}, ${obj.b}, ${opacity})`;
  } else {
    return null;
  }
};

export default getRGBFromHex;
