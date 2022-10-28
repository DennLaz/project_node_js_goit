const fields = {
  name: {
    placeholder: "Nickname",
    name: "username",
    required: true,
    type: "text",
    pattern: "^[a-zA-Z][a-zA-Z0-9_.,-]{2,10}$",
    minLength: 2,
    maxLength: 10,
    title: "Input your nickname",
  },
  email: {
    placeholder: "E-mail",
    name: "email",
    required: true,
    type: "email",
    pattern: "[^@]+@[^@]+.[a-zA-Z]",
    minLength: 3,
    maxLength: 254,
    title: "Input email, example: test@gmail.com",
  },
  password: {
    placeholder: "Password",
    name: "password",
    required: true,
    type: "password",
    minLength: 8,
    maxLength: 100,
    pattern: "(?=.*[0-9])(?=.*[a-zA-Z]|[0-9]).{7,}",
    title: "Password must contain at least 8 characters",
  },
};

export default fields;
