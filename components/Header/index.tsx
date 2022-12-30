import Image from "next/image";
import Link from "next/link";
import { TfiSearch } from "react-icons/tfi";
import { BsBell, BsQuestionSquare, BsFillCaretDownFill } from "react-icons/bs";
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.headerLeftSide}>
        <Link href={"/browse"}>
          <Image src={"./netflix-logo.svg"} alt="logo" width={50} height={50} />
        </Link>
        <ul>
          <li className={styles.leftSideLinks}>
            <p>Categories</p>
            <span className="mx-1">
              <BsFillCaretDownFill />
            </span>
            
          </li>
        </ul>
      </div>
      <div className={styles.headerRightSide}>
        <div className={styles.icons}>
          <TfiSearch />
        </div>
        <div className={styles.icons}>
          <BsBell />
        </div>
        <div className={styles.icons}>
          <BsQuestionSquare />
        </div>
      </div>
    </header>
  );
};

export default Header;
