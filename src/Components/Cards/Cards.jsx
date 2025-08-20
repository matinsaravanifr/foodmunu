import { motion } from "framer-motion";


export default function Cards({name,description,price,image}) {
  return (
    <>
      <motion.section
        className="w-[90%] m-auto shadow-md rounded-2xl bg-gray-100 relative overflow-hidden"
        initial={{ x: 100, opacity: 0 }}   // از راست وارد بشه
        animate={{ x: 0, opacity: 1 }}     // بره سر جای خودش
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center">
 
          <div className="w-full flex flex-col justify-around">
            <h1 className="font-bold text-center p-2.5 border-b-2 border-amber-300 m-auto mb-2.5 w-auto">
              {name}
            </h1>
            <p className="text-center mt-2.5 mb-2.5">
              {description}
            </p>
            <h2 className="font-bold text-center p-2.5 border-b-2 border-amber-300 m-auto mb-2.5 w-auto">
              تومان {price}
            </h2>
          </div>


          <div className=" w-[300px] h-[250px] bg-cover m-0">
            <img className="h-full rounded-2xl p-1 bg-cover w-[300px]" src={image} alt="food" />
          </div>
        </div>
      </motion.section>

      <div className="w-[80%] m-auto border-b-2 border-b-gray-300 mt-3.5 mb-3.5"></div>
    </>
  );
}
