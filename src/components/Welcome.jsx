import React from "react";

/**
 * @typedef WelcomeProps
 *
 * @property {string} name User's name
 */

/**
 * Show the welcome message for the given user
 *
 * @param {WelcomeProps} props
 * @returns
 */
// eslint-disable-next-line react/prop-types
const Welcome = ({ name }) => {
  if (!name) return null;

  // return <h1>Welcome, {name}!</h1>;
};

export default Welcome;
