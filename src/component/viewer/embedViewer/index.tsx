import TextIconSingleButton from "@/component/button/texticonsinglebutton";
import styles from "./embedviewer.module.scss";

interface Props {
  linkUrl: string;
  title?: string;
  isShow: boolean;
  onChangeModal: () => void;
  rsp?: string;
}

export default function EmbededLinkView({
  linkUrl,
  title,
  isShow,
  onChangeModal,
  rsp = "",
}: Props) {
  return (
    <div className={`${styles.viewerWrapper} ${styles[rsp]}`}>
      <div className={isShow ? styles.dimmedView : styles.hideDimmedView}>
        <div className={`${styles.textView} ${styles[rsp]}`}>
          {`깨끗한 석판은 온라인에 펼쳐진 가상의 공간입니다. 이곳은 인간과 공존하는 새로운 사물의 도착지입니다. 물질과 형태로 이루어진 사물이라는 인식을 넘어서기 위해 우리는 사물의 생성 과정을 역방향으로 상상해보았습니다. 우리는 사물의 생성과 소멸, 사물과 인간의 관계 맺음, 사물에 적용된 기술과 시스템, 사물에 얽힌 알고리즘과 상징처럼 시공간에 분산돼 인간의 삶 어디에나 들러붙어 있는 그 ‘무엇(모든 것)’인 사물을 제안합니다. 물질이면서도 비물질이고, 유한하면서도 무한하고, 작으면서도 거대한 이 공간에 오신 것을 환영합니다.
          
          Tabula Rasa(a clean slate) is a virtual space online, a destination for new things that coexist with humans. To move beyond the (traditional)perception of things as made of matter and form, we have imagined the process of their creation in reverse. we propose a thing that is the "something" - the creation and destruction of things, the relationship between things and humans, the technologies and systems applied to things, the algorithms and symbols intertwined with things, distributed in space and time, sticking to every corner of human life. Welcome to this material and immaterial space, finite and infinite, small and huge.`}
        </div>
        <div className={styles.buttonWrapper}>
          <TextIconSingleButton
            name={"Close"}
            iconFilePath={"/img/icon/ic_close_bl.png"}
            onClick={() => onChangeModal()}
          />
        </div>
      </div>
      <iframe
        height="600"
        src={linkUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="xr-spatial-tracking"
      />
      <div className={styles.frameButtonWrapper}>
        <TextIconSingleButton
          name={"Introduction"}
          iconFilePath={"/img/icon/ic_add_bl.png"}
          onClick={() => onChangeModal()}
        />
      </div>
    </div>
  );
}
