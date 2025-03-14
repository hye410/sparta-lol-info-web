import { PATH } from "@/constants/routes";

const { CHAMPIONS, ITEMS, ROTATION } = PATH;
export const NAV_ITEMS = [
  {
    title: "홈",
    path: "/",
  },
  {
    title: "챔피언 목록",
    path: CHAMPIONS,
  },
  {
    title: "아이템 목록",
    path: ITEMS,
  },
  {
    title: "챔피언 로테이션",
    path: ROTATION,
  },
];

export const HOME_NAV_ITEMS = [
  {
    title: "챔피언 목록 보기",
    path: CHAMPIONS,
    img: "/champions.webp",
  },
  {
    title: "금주 로테이션 확인",
    path: ROTATION,
    img: "/items.webp",
  },
  {
    title: "아이템 목록 보기",
    path: ITEMS,
    img: "/rotation.webp",
  },
];
