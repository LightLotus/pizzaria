import pizzaparty from "../assets/pizzaparty.png";
import spices from "../assets/spices.png";
const Bookaparty = () => {
  return (
    <div className="md:p-10 p-4 bg-amber-50 md:text-[1rem] mt-[5.5rem] md:mt-[8rem] relative pb-10 md:pb-0">
      <img
        src={spices}
        alt=""
        className="absolute left-[-10%] top-[20%] md:top-0"
      />
      <h3 className="font-bold md:text-[2rem] text-[1.5rem] text-center uppercase">
        Pizzaria's Book a Party
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <img src={pizzaparty} alt="pizzaparty" className="md:block hidden" />
        <form className="bg-white p-6 drop-shadow-md h-fit rounded-md">
          <p className="font-bold text-[1.5rem]">
            Have a pizza-mazing party with us! 🎉
          </p>
          <p className="my-2 md:my-0">Make celebrations even more special</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <input
              className="border-b-[1px] focus:outline-none p-2 border-black"
              type="text"
              id="name"
              placeholder="Enter name"
            />
            <input
              className="border-b-[1px] focus:outline-none p-2 border-black"
              type="text"
              id="mobilenumber"
              placeholder="Enter mobile number"
            />
            <input
              className="border-b-[1px] focus:outline-none p-2 border-black"
              type="text"
              id="phonenumber"
              placeholder="Enter telephone number"
            />
            <input
              className="border-b-[1px] focus:outline-none p-2 border-black"
              type="email"
              id="email"
              placeholder="Enter email"
            />
            <input
              className="border-b-[1px] focus:outline-none p-2 border-black"
              type="text"
              id="event"
              placeholder="Enter type of event"
            />
            <div className="flex gap-2 items-center border-b-[1px] border-black">
              <label>(Date of Event:)</label>
              <input type="date" id="date" />
            </div>
          </div>
          <button
            type="submit"
            className="block bg-[#FFCC06] hover:bg-[#ffcd068b] ease-in duration-300 p-2 md:w-1/2 w-full rounded-md font-bold mt-6 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bookaparty;
