function shapeArea(n) {
  if(n===1) return 1;

  let area = (Math.pow(n, 2) + Math.pow(n-1, 2));
  return area;
}
