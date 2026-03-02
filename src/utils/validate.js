

const validate = (name,email, password) => {
  const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
  const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (name !== undefined && name !== null && name !== "") {
    const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }
  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  return null;
}

export default validate;