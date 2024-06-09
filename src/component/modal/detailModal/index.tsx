import Modal from "@/component/modal";
import styles from "./modal-detailmodal.module.scss";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";
import TermsContent from "./content";
import { SelectTermsType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import ModelViewSwiper from "./swiper";

interface Props {
  rsp?: string;
  isShow?: boolean;
  // selected: SelectTermsType;
  selected: number;
  onCloseClick: () => void;
}

export default function DetailModal({
  rsp = "",
  isShow,
  selected,
  onCloseClick,
}: Props) {
  const text = textBundle();
  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div className={styles.contentWrapper}>
        <div
          className={
            rsp !== "m" ? styles.sectionWrapper : styles.mSectionWrapper
          }
        >
          <div
            className={
              rsp !== "m" ? styles.viewerWrapper : styles.mViewerWrapper
            }
          >
            <ModelViewSwiper rsp={rsp} selected={selected} />
          </div>
          <div
            className={rsp !== "m" ? styles.textWrapper : styles.mTextWrapper}
          >
            <div className={styles.title}>{text.artwork[selected].title}</div>
            <div className={styles.title}>{text.artwork[selected].name} </div>
            <br />
            <br />
            <div className={styles.content}>
              {text.artwork[selected].summary}
            </div>
            {text.artwork[selected]?.summary2 && (
              <div className={styles.content}>
                {text.artwork[selected].summary2}
              </div>
            )}
            <br />
            <br />
            <div className={styles.content}>
              {text.artwork[selected].content_kr}
            </div>
            {text.artwork[selected]?.content2_kr && (
              <>
                <br />
                <div className={styles.content}>
                  {text.artwork[selected].content2_kr}
                </div>
              </>
            )}
            <br />
            <br />
            <div className={styles.content}>
              {text.artwork[selected].content_en}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
