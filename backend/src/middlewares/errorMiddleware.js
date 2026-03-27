export function notFoundHandler(req, res) {
  return res.status(404).json({ message: 'Route not found' });
}

export function globalErrorHandler(error, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(error);
  return res.status(500).json({ message: 'Internal server error' });
}
