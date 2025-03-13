import NavBox from "@/components/home/NavBox";
import { HOME_NAV_ITEMS } from "@/data/nav-items";

export default function Home() {
  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <h1 className="title">리그 오브 레전드 정보 앱</h1>
      <p className=" text-default">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      {HOME_NAV_ITEMS?.map((nav) => (
        <NavBox key={`home_navigate_to_${nav.path}`} nav={nav} />
      ))}
    </section>
  );
}
