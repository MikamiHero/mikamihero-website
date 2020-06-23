const validateEmail = ({ email }) => email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export default validateEmail;
