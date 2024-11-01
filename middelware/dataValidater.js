const dataValidator = (req, res, next) => {
  const { id, title, status } = req.body;

  // Validate `id`: required and must be a number
  if (id === undefined || typeof id !== "number") {
    return res
      .status(400)
      .json({ message: "Bad request! 'id' is required and must be a number." });
  }

  // Validate `title`: required and must be a string
  if (title === undefined || typeof title !== "string") {
    return res
      .status(400)
      .json({
        message: "Bad request! 'title' is required and must be a string.",
      });
  }

  // Validate `status`: required and must be a boolean
  if (status === undefined || typeof status !== "boolean") {
    return res
      .status(400)
      .json({
        message: "Bad request! 'status' is required and must be a boolean.",
      });
  }

  // If all validations pass, proceed to the next middleware
  next();
};


module.exports = dataValidator