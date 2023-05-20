import Image from "next/image";

const products = [
  {
    id: 0,
    title: "A transparent buy-side investment approach",
    img: "/images/payment-method.png",
    alt: "product-1",
  },
  {
    id: 1,
    title: "A transparent buy-side investment approach",
    img: "/images/payment-method.png",
    alt: "product-1",
  },
  {
    id: 2,
    title: "A transparent buy-side investment approach",
    img: "/images/payment-method.png",
    alt: "product-1",
  },
];

function HomeProducts() {
  return (
    <div className="py-[75px] px-[20px]">
      <div className="w-[1000px] mx-[auto]">
        <div
          className="text-[#0E75BD] text-[36px] text-center
          leading-[36px] font-bold pb-[15px]"
        >
          Responsible, Resilient, and Responsive
        </div>
        <div
          className="text-[20px] text-[#333333]
          leading-[25px] pb-[70px]"
        >
          JMFS has curated investment products and solutions in response to
          specific investor requirements and to solve market anomalies. We
          believe in the power of partnerships. Hence, as you will discover in
          detail below, the strengths of our partners complement our
          capabilities to provide a robust investment solution to our investors.
        </div>
        <div className="flex justify-center">
          <div className="flex">
            {products.map((res, index) => {
              return (
                <div
                  key={res.id}
                  className="w-[320px] mx-[20px]
                flex flex-col justify-center items-center"
                >
                  <div
                    className="w-[180px] h-[180px] 
              flex justify-center items-center
              rounded-full bg-[#E4F4FF]"
                  >
                    <Image src={res.img} alt={res.alt} width={80} height={80} />
                  </div>
                  <div className="text-center">{res.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
