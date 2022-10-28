
import Notiflix from "notiflix";

const Alert = ({ message='', type='warning' }) => {
  return Notiflix.Notify[type](`${message}`, {
    timeout: 4000,
    fontFamily: "Verdana",
    fontSize: "14px",
    position: "center-top",
    zindex: 4001000000000000,
    distance: `100px`,
    warning: { background: "#fc842d" },
  });
};

export default Alert;
// failure
// success
// warning

// 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'