import pizzaparty from "../assets/pizzaparty.png";
import spices from "../assets/spices.png";
const Bookaparty = () => {
  return (
    <div className="md:p-10 p-4 bg-amber-50 text-[0.8rem] md:text-[1rem] mt-[5.5rem] md:mt-[8rem] relative">
      <img src={spices} className="absolute left-[-10%]" />
      <h3 className="font-bold md:text-[2rem] text-[1.5rem] text-center">
        Pizzaria's Book a Party
      </h3>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <img src={pizzaparty} alt="pizzaparty" />
        <form>
          <p>HAVE A PIZZA-MAZING PARTY WITH US!</p>
          <p>Make celebrations even more special</p>

          <input type="text" id="name" />

          <input type="text" id="mobilenumber" />
        </form>
      </div>
    </div>
  );
};

export default Bookaparty;
