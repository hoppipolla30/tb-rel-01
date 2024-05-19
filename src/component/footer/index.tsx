import { LangContext } from "@/context/lang.context";
import { SelectTermsType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import { theme } from "../../../tailwind.config";

interface Props {
  rsp?: string;
  onSelectTerms: (selected: SelectTermsType) => void;
}

export default function Footer({ rsp = "", onSelectTerms }: Props) {
  const text = textBundle();
  return (
    <footer className={`${styles.footerContainer} ${styles[rsp]}`}>
      <ul className={`${styles.footerWrapper} ${styles[rsp]}`}>
        <li className={`${styles[rsp]}`}>ⓒ tabula rasa all rights reserved.</li>
        <li className={styles.iconAligenWrapper}>
          {/* 이메일 */}
          <div
            className={`${styles[rsp]} ${styles.clickable} ${styles.iconAligenWrapper}`}
          >
            <Image
              style={{ marginRight: 10 }}
              src="/img/icon/ic_email_wh.png"
              alt="email icon"
              width={theme?.extend?.size[`icon-md`]}
              height={theme?.extend?.size[`icon-md`]}
            />
            <Link href={`mailto:john@tabula-rasa.org`}>
              john@tabula-rasa.org
            </Link>
          </div>
          {/* 인스타그램 */}
          <div>
            <Link href={"https://naver.com"}>
              <Image
                style={{ marginLeft: 24 }}
                src="/img/icon/ic_instagram_wh.png"
                alt="instagram icon"
                width={theme?.extend?.size[`icon-md`]}
                height={theme?.extend?.size[`icon-md`]}
              />
            </Link>
          </div>
        </li>
      </ul>
    </footer>
  );
}
