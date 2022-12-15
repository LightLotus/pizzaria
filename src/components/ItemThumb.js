import { Link } from "react-router-dom";

const ItemThumb = ({ id, image, name, description, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-white flex items-center drop-shadow-md rounded-xl"
    >
      <img
        src={image}
        className="w-1/4 h-full object-cover rounded-l-xl"
        alt=""
      />
      <div className="p-4 leading-none">
        <h3 className="font-bold">{name}</h3>
        <p className="my-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-[1.2rem] font-medium">₱{price}.00</p>
          <button className="bg-[#FFCC06] hover:bg-[#ffcd06a5] ease-in duration-300 p-2 w-2/5 text-center rounded-md uppercase">
            Order
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ItemThumb;
