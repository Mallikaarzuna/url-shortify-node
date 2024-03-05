const handleLogoutUser = async (req, res) => {
  res
    .clearCookie('token')
    .status(302)
    .send('Logged out successfully and deleted cookie');
};
export default handleLogoutUser;
