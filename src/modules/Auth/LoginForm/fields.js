const fields = {
  email: {
    name: "email",
    placeholder: "E-mail",
    required: true,
    type: "email",
    pattern: "[^@]+@[^@]+.[a-zA-Z]{2,6}",
    minLength: 3,
    maxLength: 254,
    title: "Input email, example: test@gmail.com",
  },
  password: {
    name: "password",
    placeholder: "Password",
    required: true,
    type: "password",
    minLength: 8,
    maxLength: 100,
    pattern: "(?=.*[0-9])(?=.*[a-z]|[0-9]).{7,}",
  },
};

export default fields;
