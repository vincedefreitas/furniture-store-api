function convertFromMillimetres(unit, measurement) {
  if (unit === "mm") {
    return measurement;
  }
  if (unit === "cm") {
    return Math.round(measurement * 0.1);
  }

  if (unit === "in") {
    return Math.round(measurement * 0.0393701);
  }

  if (unit === "ft") {
    return Math.round(measurement * 0.00328084);
  }
}

module.exports = { convertFromMillimetres };
