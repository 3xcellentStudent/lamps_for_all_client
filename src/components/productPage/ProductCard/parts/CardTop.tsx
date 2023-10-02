import Rating from "./Rating"

interface Props {
  title: string
  stars: number
}

export default function CardTop({title, stars}: Props){
  return (
    <div className="card_top flex justify-between py2-11 px2-2">
      <Rating stars={stars} />
      <h2 className="font-black uppercase tracking-widest fos-x1_25">{title}</h2>
    </div>
  );
}
