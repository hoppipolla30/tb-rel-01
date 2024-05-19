import TextIconSingleButton from "@/component/button/texticonsinglebutton";
import styles from "./embedviewer.module.scss";

interface Props {
  linkUrl: string;
  title?: string;
  isShow: boolean;
  onChangeModal: () => void;
}

export default function EmbededLinkView({
  linkUrl,
  title,
  isShow,
  onChangeModal,
}: Props) {
  return (
    <div className={styles.viewerWrapper}>
      <div className={isShow ? styles.dimmedView : styles.hideDimmedView}>
        <div className={styles.textView}>
          {`『깨끗한 석판』은 인간과 공존하는 사물의 원형을 백지상태로 상정하고 생성 과정을 역방향으로 상상하며 새로운 사물성을 탐구한다. 전시의 제목은 경험주의 철학에서 강조하는 Tabula Rasa―깨끗한 석판, 즉 ‘인간의 모든 지식은 경험을 통해 생성’됨을 뜻하지만, 전시가 의미하는 바는 그와는 반대로 현재까지 사물에 축적된 인간의 경험을 깨끗이 지워보는 것이다. 사물에 대한 사유와 물성에 대한 시각적이고 감각적인 관성에서 벗어나 사물의 생성을 마음껏 재주조하는 것을 목표로 한다. 내려오는 지식과 편견, 오해를 벗어나 사물 자체를 파헤치고, 해킹하고, 도킹하고 탈출해 결국 해체해 보려는 의도이다.
          
          전시는 현재의 물질문화를 비판적으로 검토한다. 기술의 발달은 사물의 생산과 소비를 토해내듯 가속화, 대량화로 촉진하지만, 구조 자체로 다수majority와 우성dominant의 성질을 내포하고 있기도 하다. 전시가
          탐구하는 사물은 물질로 구성된 고정된 형태의 것만은 아니다. 사물의 생성과 소멸, 사물과 인간의 관계 맺음, 사물에 적용된 기술과 시스템, 알고리즘과 상징 같은 시공간에 거대하게 분산hyper- 되어 인간의 삶어디에나 들러붙어 있는 ‘무엇’이다.

          5명(팀)의 참여 작가[김현석, 송봉규+BKID(박성제, 정재필), 윤현학, 이해련, 전민제]는 조각과 미디어, 그래픽 디자인과 산업디자인에 이르기까지 자신만의 세계관과 학제적 스펙트럼을 넓혀 온 창작자들로, 각자의 관점으로 사물성을 다룬 신작을 소개한다. 전시에 초대되며 작가들은 사물에 대한 기존의 사고를 전복하고 체계를 불순하게 역행할 것을 의뢰받았다. 사물의 데이터, 상징, 사용성, 형태, 기원 등을 활용하며
          진행된 작업 과정들은 여러 변주를 통해 모호하면서도 어긋난 이야기를 직조해냈다. 전시장에 초대된 관람객들은 각 작품을 따라가며 사물에 존재하는 여러 은유와 상징에 접근하게 된다.

          아카이브 존 벽면에 발췌된 텍스트와 이미지들은 각 작품의 발화점이 되는 파편적 내용으로 참여 작가인 윤현학의 인포그래픽으로 재구성되었다. 작품과 연구 주제 간의 상호 교차·확장되는 방식으로 구성되어 전시를 읽는 단서를 제시하며 추후 필진과 연구팀의 글을 망라해 리서치 북으로 출판된다. 또한, 전시 작품과 공간은 전시 기간 중 3D 스캐닝을 통해 물질을 다시 비물질인 데이터로 번역되어 가상의 박물관 공간에 영구 소장될 예정이다.`}
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
