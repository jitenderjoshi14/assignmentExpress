exports.getName = (req, res, next) => {
  const name = req.params.name;

  res.status(200).json({
    message: "success",
    data: `hello ${name}`,
  });
};
