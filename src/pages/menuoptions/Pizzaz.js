import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemThumb from "../../components/ItemThumb";
const Pizzaz = () => {
  const items = [
    {
      id: 0,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 1,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 2,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    },
    {
      id: 3,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
    },
    {
      id: 4,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
    },
    {
      id: 5,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1559608568-99cb288ccebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 7,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 8,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    },
    {
      id: 9,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
    },
    {
      id: 10,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
    },
    {
      id: 11,
      name: "Roast Beef Pizza",
      description:
        "Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!",
      price: 405.0,
      image:
        "https://images.unsplash.com/photo-1559608568-99cb288ccebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];
  return (
    <div className="md:p-10 p-4 bg-amber-50 text-[0.8rem] md:text-[1rem]">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold md:text-[2rem] text-[1.5rem]">
            Pizza Z Products
          </h3>
          <div
            className="uppercase hover:text-[#FFCC06] ease-in duration-300 cursor-pointer"
            to="/menu"
          >
            sort by
            <FontAwesomeIcon className="ml-4" icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 pt-10 gap-10">
        {items.map((item) => {
          return (
            <ItemThumb
              key={item.id}
              id={item.id}
              image={item.image}
              description={item.description}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pizzaz;