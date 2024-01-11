export const privateApi = (req, res, next) => {
  //if (!req.session?.user?.id) {
  if (!req.user?.id) {
    return res.status('401').json({ error: 'User not logged in' });
  } else {
    next();
  }
};
