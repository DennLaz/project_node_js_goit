const fields = {
  name: {
    placeholder: "Nickname",
    name: "username",
    required: true,
    type: "text",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    minLength: 2,
    maxLength: 10,
    title: "Input your nickname",
  },
  email: {
    placeholder: "E-mail",
    name: "email",
    required: true,
    type: "email",
    pattern: "[^@]+@[^@]+.[a-zA-Z]{2,6}",
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
    pattern: "(?=.*[0-9])(?=.*[a-z]|[0-9]).{7,}",
    title: "Password must contain at least 8 characters",
  },
};

export default fields;
