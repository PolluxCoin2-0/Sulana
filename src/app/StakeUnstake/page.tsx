import Loader from "../components/Loader";

const StakeUnstakePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black px-2 md:px-4 py-7">
      <div className="bg-gradient-to-b from-[rgba(43,37,90,0.34)] to-[rgba(200,200,200,0.09)] rounded-xl border-gray-400 border-[1px] border-opacity-30 p-4 my-4 w-full overflow-x-auto">
        {/* Header Section */}
        <div className="bg-[#212D49] rounded-xl text-white flex flex-row items-center justify-between py-2 min-w-[850px] md:min-w-0">
          <p className="font-bold px-4 py-2 w-[25%] text-center">Invest Date</p>
          <p className="font-bold px-8 py-2 w-[25%] text-left">Amount</p>
          <p className="font-bold px-4 py-2 w-[25%] text-center">
            Maturity Date
          </p>
          <p className="font-bold px-8 py-2 w-[25%] text-right">Unstake</p>
        </div>

        {/* Data Row Section */}
        {stakedArray.map((item, index) => {
          return (
            <>
              {!item.isUnstaked && (
                <div
                  className="text-white flex flex-row items-center justify-between pt-4 min-w-[850px] md:min-w-0 pb-2 border-b border-gray-400 border-opacity-30 last:border-0"
                  key={index}
                >
                  <p className="px-8 py-2 w-[20%] text-left">{item?.amount}</p>
                  <p className="px-4 py-2 w-[20%] text-center">
                    {item?.mintCount} / 1000
                  </p>
                  <p className="px-4 py-2 w-[20%] text-left lg:text-center">
                    {item?.startTime}
                  </p>
                  <div className="lg:w-[20%] px-4 flex justify-end">
                    {item.isLoading ? (
                      <div className="w-full lg:w-[50%] rounded-xl flex justify-center bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] ">
                        <Loader />
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleMintFunc(e, index)}
                        className="w-full lg:w-[50%] bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] 
         text-white text-lg font-semibold px-4 py-2 rounded-xl transform hover:scale-105 transition delay-300"
                      >
                        Mint
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default StakeUnstakePage;