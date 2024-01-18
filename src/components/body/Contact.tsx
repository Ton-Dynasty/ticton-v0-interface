const Contact = () => {
  const communityNumber = () => {
    const num = Math.floor(Math.random() * 1e6);
    console.log(num);
    return num;
  };
  return (
    <section className="flex flex-col w-full  justify-center items-center bg-blue-300 rounded-2xl py-10 md:py-20 max-w-screen-md mx-auto px-16 md:px-20 gap-10">
      <div className=" w-full text-blue-950 text-lg md:text-4xl font-bold font-droid md:leading-10 md:text-justify">
        We are a community of dreamers and innovators from around the world who
        are creating a better future and solving the problems of today.
      </div>
      <div className="text-black text-base md:text-xl font-normal font-dmsans md:leading-7 md:text-justify w-full md:w-2/3 ml-auto">
        We invent and use the latest technologies that enable the open, free,
        decentralized exchange of value, information and ideas. Technologies
        that are designed to protect the freedom, privacy and rights of all
        people, to make this world a more balanced and self-governing place.
      </div>
      <div className="flex flex-col items-center md:items-start w-full">
        <div className="text-blue-900 text-xl md:text-2xl font-normal font-dohyeon leading-10">
          Total community member
        </div>
        <div className="flex mt-2 gap-7">
          <div className="flex text-base md:text-3xl leading-10 gap-1.5">
            {communityNumber()
              .toString()
              .padStart(6, "0")
              .split("")
              .map((digit, index) => {
                let seperator = undefined;
                if (index === 3) {
                  seperator = <div className="m-2" />;
                }
                return (
                  <>
                    {seperator}
                    <div className="flex md:h-16 bg-blue-900 text-white px-5 py-2.5 rounded-[20px] items-center justify-center">
                      {digit}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
