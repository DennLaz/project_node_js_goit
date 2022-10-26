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
};

export default fields;
