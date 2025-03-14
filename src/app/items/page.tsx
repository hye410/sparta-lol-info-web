import ItemCard from "@/components/items/ItemCard";
import { getItemsList } from "@/utils/api/itemsApi";
export default async function Items() {
  const { items } = await getItemsList();
  return (
    <article className="pageWrapper">
      <h1 className="title">아이템 목록</h1>
      <div className="grid grid-cols-6 gap-4">
        {items.map((item) => (
          <ItemCard key={`item_${item.name}`} item={item} />
        ))}
      </div>
    </article>
  );
}
