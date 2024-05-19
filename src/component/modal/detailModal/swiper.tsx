import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ModelViewer from "@/component/viewer/modelViewer";

const ModelUrlArr = [
  [
    "/img/artwork/0/0.glb",
    "/img/artwork/0/1.glb",
    "/img/artwork/0/2.glb",
    "/img/artwork/0/3.glb",
  ],
  [
    "/img/artwork/1/01_twist.glb",
    "/img/artwork/1/02_Fetus.glb",
    "/img/artwork/1/03_Clip.glb",
    "/img/artwork/1/04_RolyPoly.glb",
    "/img/artwork/1/05_TSpoon.glb",
    "/img/artwork/1/06_YCrane.glb",
    "/img/artwork/1/07_Tumor.glb",
    "/img/artwork/1/08_Pelican.glb",
    "/img/artwork/1/09_Leaf.glb",
    "/img/artwork/1/10_Flower.glb",
    "/img/artwork/1/11_Branch.glb",
    "/img/artwork/1/12_Picker.glb",
    "/img/artwork/1/13_Finger.glb",
    "/img/artwork/1/14_Propeller.glb",
    "/img/artwork/1/15_Uvula.glb",
    // "/img/artwork/1/16_Coil.glb",
    // "/img/artwork/1/17_Link.glb",
    // "/img/artwork/1/18_Oval.glb",
    // "/img/artwork/1/19_Triangle.glb",
    // "/img/artwork/1/20_EarlyForm1.glb",
    // "/img/artwork/1/20_EarlyForm2.glb",
    // "/img/artwork/1/20_EarlyForm3.glb",
    // "/img/artwork/1/20_EarlyForm4.glb",
    // "/img/artwork/1/21_Oring.glb",
    // "/img/artwork/1/22_Chopoon.glb",
    // "/img/artwork/1/23_Straw.glb",
    // "/img/artwork/1/24_CoParasitism.glb",
    // "/img/artwork/1/25_Flask.glb",
    // "/img/artwork/1/26_Hook.glb",
    // "/img/artwork/1/27_Asymmetry.glb",
    // "/img/artwork/1/28_Moebius.glb",
    // "/img/artwork/1/29_Knifoon.glb",
    // "/img/artwork/1/30_Screw.glb",
    // "/img/artwork/1/31_cross.glb",
    // "/img/artwork/1/32_Extrude.glb",
  ],
  ["/img/artwork/2/01.glb", "/img/artwork/2/02.glb", "/img/artwork/2/03.glb"],
  ["/img/artwork/3/0.glb"],
  [
    "/img/artwork/4/0.glb",
    "/img/artwork/4/1.glb",
    "/img/artwork/4/2.glb",
    "/img/artwork/4/3.glb",
  ],
];

interface Props {
  rsp?: string;
  selected: number;
}
export default function ModelViewSwiper({ rsp = "", selected }: Props) {
  console.log(ModelUrlArr[1][0]);
  return (
    <Swiper
      style={
        rsp === "m"
          ? {
              width: "100%",
              height: 300,
            }
          : { width: "100%", height: "100%" }
      }
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      // onSwiper={(swiper: any) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {ModelUrlArr[selected].map((v: string, i: number) => {
        return (
          <SwiperSlide key={i.toString()} style={{ height: "100%" }}>
            <ModelViewer modelUrl={v} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
