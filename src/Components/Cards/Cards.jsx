import img from "./../../assets/main/202410012051296650000.jpg";

export default function Cards() {
  return (
    <>
    <section className="w-[90%] m-auto  shadow-md rounded-2xl bg-gray-100 ">
      <div className="flex justify-between">
        <div className=" w-full ">
          <h1 className="text-center font-bold mt-2.5 mb-2.5 text-2xl underline">food name</h1>
          <p className="text-center mt-2.5 mb-2.5">گوشت تازه گوسفندی با سبزیجات معطر</p>
          <h2 className="font-bold text-center p-2.5 border-2 rounded-2xl w-[200px] m-auto mb-2.5">45000</h2>
        </div>
        <div className="w-[300px] h-full  bg-cover ">
          <img className="m-0 rounded-2xl p-1  " src={img} alt="" />
        </div>
      </div>

    </section>
    <div className="w-[80%]  m-auto border-b-2 border-b-gray-300 mt-3.5 mb-3.5"></div>
    </>
  );
}
