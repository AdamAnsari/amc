import Image from "next/image";

function Header() {
  return (
    <div className="shadow-md fixed w-full z-10 bg-white">
      <div
        className="w-[1200px] mx-[auto]
      flex flex-row justify-between items-center"
      >
        <div className="py-[20px] cursor-pointer">
          <Image
            src={"/images/jm-logo-light.png"}
            alt={"JMF Logo"}
            width={157}
            height={35}
          />
        </div>
        <div className="flex">
          <div className="flex items-center pl-[10px] pr-[10px] cursor-pointer">
            <div className="pr-[5px] py-[20px]">Products</div>
            <div>
              <Image
                src={"/images/down-arrow.png"}
                alt={"JMF Logo"}
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className="pl-[10px] pr-[10px] py-[20px] cursor-pointer">
            About Us
          </div>
        </div>
        <div
          className="border border-[#0E75BD] rounded-md
        px-[20px] py-[8px] cursor-pointer
        transition ease-in	
        hover:bg-[#0E75BD] hover:text-white"
        >
          Get Started
        </div>
      </div>
    </div>
  );
}

export default Header;
