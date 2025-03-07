import CardCarousel from "./CardCarousel";

export default function Card(item: any) {
  return (
    <div className="shadow-lg rounded-xl mb-4 max-w-[300px] overflow-hidden">
      <CardCarousel />
      <div className="p-3 ">
        <p className="font-[700]">{item.name}</p>
        <p>{item.rating}</p>
        <p>{item.description}</p>
        <p>${item.price_per_night}</p>
      </div>
    </div>
  );
}
