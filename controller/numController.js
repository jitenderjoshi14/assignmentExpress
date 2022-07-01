const isPrime = require("../util/prime");
exports.getNum = (req, res, next) => {
  const num = parseInt(req.params.num, 10);

  const isNumPrime = isPrime(num);

  res.status(200).json({
    message: "success",
    data: `${isNumPrime}`,
  });
  next();
};
