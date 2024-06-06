import Image from "next/image";
import Link from "next/link";
export default function Education() {
  return (
    <>
      <div className="education relative mt-[80px] ">
        <h2 className="text-center max-md:text-[40px] lg:text-[60px] uppercase">
          Education
        </h2>
        <div className="">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-black dark:bg-[#151515] w-full lg:h-[500px] h-[400px] flex justify-center items-center">
              <div className="p-24">
                <img
                  src="/img/undip.png"
                  className="lg:w-[150px] w-[100px]"
                  alt=""
                />
              </div>
            </div>
            <div className="h-full w-full max-lg:mt-[10px] flex justify-center items-center">
              <div className="text-center">
                <Link href="https://www.undip.ac.id/">
                  <p className="text-[20px] underline">Diponegoro University</p>
                </Link>
                <p>Informatics Majoring</p>
                <p>Semarang, Central Java</p>
                <p className="text-gray-400">(Agustus 2019 - Meret 2024)</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 max-lg:mt-[60px]">
            <div className="h-full w-full max-lg:mt-[10px] flex justify-center items-center order-2 lg:order-1">
              <div className=" text-center">
                <Link href="https://smansakradenan.sch.id/">
                  <p className="text-[20px] underline">SMA N 1 Kradenan</p>
                </Link>
                <p>Grobogan, Central Java</p>
                <p className="text-gray-400">(2017 - 2019)</p>
              </div>
            </div>
            <div className="bg-[#09F1FE] w-full lg:h-[500px] h-[400px] flex justify-center items-center order-1 lg:order-2">
              <img
                src="/img/sma.png"
                className="lg:w-[150px] w-[100px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
