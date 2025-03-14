import ItemCard from "@/components/items/ItemCard";
import { getItemsList } from "@/utils/api/items-api";
export default async function Items() {
  const { items } = await getItemsList();
  return (
    <article className="pageWrapper">
      <h1 className="title">아이템 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {items.map((item) => (
          <ItemCard key={`item_${item.name}`} item={item} />
        ))}
      </div>
    </article>
  );
}
