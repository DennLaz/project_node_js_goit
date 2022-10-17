import { useState } from "react";
import PropTypes from "prop-types";

const useForm = ({ onSubmit, initialState }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit, reset };
};

useForm.defaultProps = {
  onSubmit: () => {},
  initialState: {},
};

useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.shape.isRequired,
};

export default useForm;
