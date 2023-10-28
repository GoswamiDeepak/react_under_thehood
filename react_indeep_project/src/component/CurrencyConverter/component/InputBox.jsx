import { memo, useId } from "react";

const InputBox = memo(
  ({
    label,
    amount,
    onAmountChange,
    options,
    selectCurrency = "usd",
    onCurrencyChange,
    convertedAmount
  }) => {

    const id = useId()
    return (
      <div className="bg-white p-3 rounded-lg text-sm flex">
        <div className="w-1/2 flex flex-col">
          <label className="text-black mb-2 inline-block" htmlFor={id}>
            {label}
          </label>
          <input
            type="number"
            // name=""
            id={id}
            className="outline-none f-full bg-transparent py-1.5 text-black/40"
            placeholder="amount"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">
            Currency Type
          </p>
            <select
              name=""
              id=""
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              value={selectCurrency}
              onChange={(e) => onCurrencyChange(e.target.value)}
            >
              {options?.map((currency) => {
                return (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
        </div>
      </div>
    );
  }
);
export default InputBox;
