# Edits

- EDIT #1: module.exports = app is called twice in app.js.

- EDIT #2: removed a random '+' in the config.js file from 'const PORT = +process.env.PORT || 3000;'

- EDIT #3: destructured username param in get/:username for better use in the query and error handling.

- EDIT #4: deleted the password property from the user object after authenticating in withe the User.authenticate method for extra security purposes.

# Bugs

- BUG #1: authentication in middleware/auth.js was not properly verifying token. It only checked if a token was in the body. Added jwt.verify() in the if statement to properly verify token.

- BUG #2: get/:username did not have error handling for when a user was not found. Added a try/catch block to handle errors.

- BUG #3: post/login did not use the await keyword when calling the User.authenticate() method. Thus, undefined was always being passed into the createToken() method causing admin to always be false. Added await keyword to User.authenticate() method.

- BUG #4: patch/:username was using requireAdmin middleware making it impossible for a user to update their own information. Created a new middleware for requiring the correct user OR admin and replaced requireAdmin middleware from patch/:username.