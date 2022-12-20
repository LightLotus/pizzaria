import { Link, Outlet } from "react-router-dom";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuSlider = () => {
  const menus = [
    { id: 0, option: "pizza a", link: "/menu/pizzaa" },
    { id: 1, option: "pizza b", link: "/menu/pizzab" },
    { id: 2, option: "pizza c", link: "/menu/pizzac" },
    { id: 3, option: "pizza d", link: "/menu/pizzad" },
    { id: 4, option: "pizza e", link: "/menu/pizzae" },
    { id: 5, option: "pizza f", link: "/menu/pizzaf" },
    { id: 6, option: "pizza g", link: "/menu/pizzag" },
    { id: 7, option: "pizza h", link: "/menu/pizzah" },
    { id: 8, option: "pizza i", link: "/menu/pizzai" },
    { id: 9, option: "pizza j", link: "/menu/pizzaj" },
    { id: 10, option: "pizza k", link: "/menu/pizzak" },
    { id: 11, option: "pizza l", link: "/menu/pizzal" },
    { id: 12, option: "pizza m", link: "/menu/pizzam" },
    { id: 13, option: "pizza n", link: "/menu/pizzan" },
    { id: 14, option: "pizza o", link: "/menu/pizzao" },
    { id: 15, option: "pizza p", link: "/menu/pizzap" },
    { id: 16, option: "pizza q", link: "/menu/pizzaq" },
    { id: 17, option: "pizza r", link: "/menu/pizzar" },
    { id: 18, option: "pizza s", link: "/menu/pizzas" },
    { id: 19, option: "pizza t", link: "/menu/pizzat" },
    { id: 20, option: "pizza u", link: "/menu/pizzau" },
    { id: 21, option: "pizza v", link: "/menu/pizzav" },
    { id: 22, option: "pizza w", link: "/menu/pizzaw" },
    { id: 23, option: "pizza x", link: "/menu/pizzax" },
    { id: 24, option: "pizza y", link: "/menu/pizzay" },
    { id: 25, option: "pizza z", link: "/menu/pizzaz" },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="bg-amber-50 mt-[8rem] px-16 relative">
      <div
        id="slider"
        className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        <FontAwesomeIcon
          className="opacity-50 cursor-pointer hover:opacity-100 text-[0.8rem] absolute left-0 w-[1.5rem] h-[1.5rem] translate-y-3 flex items-center justify-center p-2 bg-[#FFCC06] rounded-full"
          icon={faAngleLeft}
          onClick={slideLeft}
        />
        <FontAwesomeIcon
          className="opacity-50 cursor-pointer hover:opacity-100 text-[0.8rem] absolute right-0 w-[1.5rem] h-[1.5rem] translate-y-3 flex items-center justify-center p-2 bg-[#FFCC06] rounded-full"
          icon={faAngleRight}
          onClick={slideRight}
        />

        {menus.map((menu) => {
          return (
            <Link
              key={menu.id}
              to={`${menu.link}`}
              className="inline-block px-10 py-4 border-[1px] border-[#FFCC06] uppercase bg-white hover:bg-[#FFCC06] active:bg-[#FFCC06] focus:bg-[#FFCC06] ease-in duration-300"
            >
              {menu.option}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default MenuSlider;
