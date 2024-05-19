import { TextIconSingleButtonType } from "@/model/props";
import styles from "./texticonsinglebutton.module.scss";
import Image from "next/image";
import { theme } from "../../../../tailwind.config";

interface Props {
  name: string;
  iconFilePath?: string;
  type?: TextIconSingleButtonType;
  disabled?: boolean;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default function TextIconSingleButton({
  name,
  iconFilePath = "/img/icon/ic_close_bl.png", // 기본 close
  type = "fixed",
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={`${styles.wrapper} ${styles[type]} ${
        disabled && styles.disabled
      }`}
      onClick={onClick}
    >
      <span>{name}</span>
      <Image
        style={{ marginLeft: 8 }}
        src={iconFilePath}
        alt="button icon"
        width={theme?.extend?.size[`icon-sm`]}
        height={theme?.extend?.size[`icon-sm`]}
      />
    </button>
  );
}
