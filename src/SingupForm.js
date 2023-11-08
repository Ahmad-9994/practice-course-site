import React from 'react'

function SingupForm() {
  return (
    <form>
  <h2>Sign Up</h2>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required></input>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required></input>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required></input>
  <button type="submit">DONE</button>
</form>
  )
}

export default SingupForm
