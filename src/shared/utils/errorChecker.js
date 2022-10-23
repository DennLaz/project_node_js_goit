import Alert from "../components/Alert";

export const errorChecker = (error) => {
    const { message, } = error;
    
    return <Alert message={message} />;
  };