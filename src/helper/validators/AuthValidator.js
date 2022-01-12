import validator from "validator";

export const usernameValidator = (username = "") => {
  const isValid =
    validator.isAlphanumeric(username, "en-US", { ignore: "_-" }) &&
    validator.isLength(username, { min: 3, max: 25 });
  const message = isValid
    ? "OK"
    : "Username has to be between 3 to 25 characters and can only contain alphanumeric characters, '-' and '_'";
  return { isValid, message };
};

export const emailValidator = (email = "") => {
  const isValid = validator.isEmail(email.toString());
  const message = isValid ? "OK" : "Invalid Email";
  return { isValid, message };
};

export const passwordValidator = (password = "") => {
  const isValid = validator.isStrongPassword(password.toString(), {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 0,
    minSymbols: 0,
  });

  const message = isValid
    ? "OK"
    : "Password needs to have at least 6 characters, 1 uppercase, and 1 lowercase";
  return { isValid, message };
};