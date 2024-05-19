import { LangContext } from "@/context/lang.context";
import { DeviceType, LanguageType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./header.module.scss";
import { theme } from "../../../tailwind.config";

interface Props {
  active: boolean;
  isTabletBelow?: boolean;
  rsp?: DeviceType;
  lang?: LanguageType;
  onMenuClick: (event?: React.MouseEvent<HTMLElement>) => void;
  onLoginClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default function Header({
  active,
  isTabletBelow = false,
  rsp = "",
  lang = "en",
  onMenuClick,
  onLoginClick,
}: Props) {
  const { dispatch } = useContext(LangContext);

  const text = textBundle();
  const { en, kr } = text.util.language.title;
  const enSml = en.toLowerCase();
  const krSml = kr.toLowerCase();

  return (
    <header className={`${styles.headerContainer} ${styles[rsp]}`}>
      <div className={`flexRowBtw`}>
        <div>
          <Link href="/" className={`${styles.btn}`}>
            {text.logo.title}
          </Link>
        </div>
        <>{isTabletBelow ? <></> : <></>}</>
      </div>
    </header>
  );
}
