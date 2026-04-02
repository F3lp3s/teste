import style from "./Style.module.css";

import errorIcon from "../../assets/404.png";

const ErrorPage = () => {
  return (
    <main className={ style.main }>
      <img src={ errorIcon } alt="" />
    </main>
  )
};

export default ErrorPage;