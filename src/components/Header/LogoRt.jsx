import Image from "next/image";
import s from "./Header.module.scss";

const LogoRt = () => {
  return (
    <div className={s.logoRt}>
      <Image src="/images/logo-rt.jpg" fill />
    </div>
  );
};

export default LogoRt;
