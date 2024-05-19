import { NftItem } from "@/model/api";
import {
  DeviceType,
  DropdownItem,
  ErrorMessageItem,
  ErrorMessageType,
  IsShowModalItem,
  IsShowModalType,
  LanguageType,
  ProcessModalType,
  SelectTermsType,
} from "@/model/props";
import TextIconSingleButton from "@/component/button/texticonsinglebutton";
import DrawerMenu from "@/component/drawer";
import Dropdown, { renderDropdownInnerComponent } from "@/component/dropdown";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Image from "next/image";
import ErrorMessageModal from "@/component/modal/errorMessageModal";
import NftDetailModal from "@/component/modal/nftDetailModal";
import ProcessModal from "@/component/modal/processModal";
import TermsModal from "@/component/modal/termsModal";
import UserInfoModal from "@/component/modal/userInfoModal";
import User from "@/component/user";
import { theme } from "../../../tailwind.config";
import EmbededLinkView from "../viewer/embedViewer";
import ImageViewer from "../viewer/imageViewer";
import DetailModal from "../modal/detailModal";

interface Props {
  rsp: DeviceType;
  isTabletBelow: boolean;
  lang: LanguageType;
  selectedTerms: SelectTermsType;
  setSelectedTerms: (temsType: SelectTermsType) => void;
  nftDetail?: NftItem;
  setNftDetail: (data: NftItem) => void;
  isWalletConnected: boolean;
  joinSign?: string;
  account?: string | null;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
  isShowMsgError: boolean;
  errorMessage: ErrorMessageItem;
  onChangeErrorMessage: (type?: ErrorMessageType) => void;
  isShowModal: IsShowModalItem;
  onChangeModal: (type: IsShowModalType, isShow: boolean) => void;
  processModalType: ProcessModalType;
  onChangeProcessModal: (type?: ProcessModalType) => void;
  dropdownList: DropdownItem[];
  onSelectDropdown: (selected: number) => void;
  text: Record<string, any>;
  selectedDetail: number;
  onChangeSelectedDetail: (index: number) => void;
}

export default function PagePresenter({
  rsp,
  isTabletBelow,
  lang,
  selectedTerms,
  setSelectedTerms,
  nftDetail,
  setNftDetail,
  isWalletConnected,
  joinSign,
  account,
  onConnectWallet,
  onDisconnectWallet,
  isShowMsgError,
  errorMessage,
  onChangeErrorMessage,
  isShowModal,
  onChangeModal,
  processModalType,
  onChangeProcessModal,
  dropdownList,
  onSelectDropdown,
  text,
  selectedDetail,
  onChangeSelectedDetail,
}: Props) {
  return (
    <>
      <div className={`resContainer ${rsp}`}>
        <DetailModal
          rsp={rsp}
          isShow={isShowModal.image}
          selected={selectedDetail}
          onCloseClick={() => {
            onChangeModal("image", false);
          }}
        />
        <Header
          active={isWalletConnected}
          rsp={rsp}
          isTabletBelow={isTabletBelow}
          lang={lang}
          onMenuClick={() => onChangeModal("drawer", true)}
          onLoginClick={() => onConnectWallet()}
        />
        <div className={`mainWrapper ${rsp}`}>
          <EmbededLinkView
            linkUrl={"https://my.matterport.com/show/?m=4N61vq4rPgF&play=1"}
            isShow={isShowModal.detail}
            onChangeModal={() => {
              onChangeModal("detail", !isShowModal.detail);
            }}
          />
          <ImageViewer
            rsp={rsp}
            onShowClick={(index: number) => {
              onChangeModal("image", true);
              onChangeSelectedDetail(index);
            }}
          />
        </div>
        {!isTabletBelow && (
          <Footer
            rsp={rsp}
            onSelectTerms={(selected: SelectTermsType) => {
              setSelectedTerms(selected);
              onChangeModal("terms", true);
            }}
          />
        )}
      </div>
    </>
  );
}
