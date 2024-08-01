export function Navbar() {
  return (
    <>
      <div className="w-screen h-1/5 bg-gradient-to-r from-blue-800 to-violet-700 flex justify-between items-center">
        <img
          src="cryptocurrency-logo.png"
          alt=""
          className="w-24 h-24 mx-10 cursor-pointer"
        />
        <div className="mx-20">
          <select
            name=""
            id=""
            className="bg-transparent text-white text-2xl border-white border-solid border-2 rounded-lg"
          >
            <option value="usd" className="bg-black">
              USD
            </option>
            <option value="pln" className="bg-black">
              PLN
            </option>
            <option value="eur" className="bg-black">
              EUR
            </option>
          </select>
        </div>
      </div>
      <hr />
    </>
  );
}
