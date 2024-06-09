/* eslint-disable @next/next/no-img-element */
import { DeviceType } from "@/model/props";
import styles from "./imageviewer.module.scss";

interface Props {
  rsp?: DeviceType;
  onShowClick: (index: number) => void;
}

export default function ImageViewer({ rsp = "", onShowClick }: Props) {
  return (
    <div className={rsp !== "m" ? styles.imageContainer : ""}>
      <div className={styles.imageWrapper} onClick={() => onShowClick(0)}>
        <div className={styles.dimmedText}>
          <div>Daisy-Chain-Agora</div>
        </div>
        <img
          className={styles.image}
          src={"/img/thumb/slider/thumb1.png"}
          alt={"thumbnail"}
        />
      </div>
      <div className={styles.imageWrapper} onClick={() => onShowClick(1)}>
        <div className={styles.dimmedText}>
          <div>Evolving Spoon</div>
        </div>
        <img
          className={styles.image}
          src={"/img/thumb/slider/thumb2.png"}
          alt={"thumbnail"}
        />
      </div>
      <div className={styles.imageWrapper} onClick={() => onShowClick(2)}>
        <div className={styles.dimmedText}>
          <div>Dexter and Sinister</div>
        </div>
        <img
          className={styles.image}
          src={"/img/thumb/slider/thumb4.png"}
          alt={"thumbnail"}
        />
      </div>
      <div className={styles.imageWrapper} onClick={() => onShowClick(3)}>
        <div className={styles.dimmedText}>
          <div>PK-04 / C-03 Pro</div>
        </div>
        <img
          className={styles.image}
          src={"/img/thumb/slider/thumb3.png"}
          alt={"thumbnail"}
        />
      </div>
      <div className={styles.imageWrapper} onClick={() => onShowClick(4)}>
        <div className={styles.dimmedText}>
          <div>Meta Object</div>
        </div>
        <img
          className={styles.image}
          src={"/img/thumb/slider/thumb5.png"}
          alt={"thumbnail"}
        />
      </div>
    </div>
  );
}
