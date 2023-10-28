import { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import InputBox from "./component/InputBox";

const index = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo && Object.keys(currencyInfo);

  const convert = () => {
    const money = amount * currencyInfo[to];
    setConvertedAmount(money);
  };

  const swap = ()=>{
      setFrom(to);
      setTo(from);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-indigo-500">
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className="mb-3 text-white text-xl">Currency connverter</h1>
          <div className="w-full max-w-md max-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-6">
                <InputBox
                  label="From"
                  amount={amount}
                  options={options}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-color-600 text-white px-2 py-0.5 "
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-6 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  options={options}
                  selectCurrency={to}
                  onCurrencyChange={(currency) => setTo(currency)}
                />
              </div>
              <button className="w-full bg-blue-600 text-whte px-4 py-3 rounded-lg text-white">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
