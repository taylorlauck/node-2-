/** User related routes. */

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const ExpressError = require("../helpers/expressError");
const {
  authUser,
  requireLogin,
  requireAdmin,
  requireCorrectUserOrAdmin,
} = require("../middleware/auth");

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get("/", authUser, requireLogin, async function (req, res, next) {
  try {
    let users = await User.getAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username]
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

router.get(
  "/:username",
  authUser,
  requireLogin,
  async function (req, res, next) {
    const { username } = req.params;
    try {
      let user = await User.get(username);
      /* Fixed bug #2 with error handling for user not found */
      if (!user) {
        throw new ExpressError(`No such user "${username}"`, 404);
      }
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  }
);

/** PATCH /[username]
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

router.patch(
  "/:username",
  authUser,
  requireLogin,
  /* replaced requireAdmin with requireCorrectUserOrAdmin to fix bug #4 */
  requireCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      // get fields to change; remove token so we don't try to change it
      let fields = { ...req.body };
      delete fields._token;

      let user = await User.update(req.params.username, fields);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  }
); // end

/** DELETE /[username]
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

router.delete(
  "/:username",
  authUser,
  requireLogin,
  requireAdmin,
  async function (req, res, next) {
    try {
      User.delete(req.params.username);
      return res.json({ message: "deleted" });
    } catch (err) {
      return next(err);
    }
  }
); // end

module.exports = router;