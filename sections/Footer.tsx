import Spinner from "@/components/Spinner";

export default function Footer() {
  return (
    <section className="min-h-screen w-screen overflow-hidden bg-[#FE6334] text-[#FEE832]">
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
        <div className="text-[34vw]">Soda</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you </span>
        </div>
        <div className="text-[32vw]">Smile</div>
        <div className="relative top-27 sm:top-10 h-[40vw] sm:h-[20vw] overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-[80vw] sm:w-[40vw]">
            <Spinner />
          </div>
        </div>
        {/* <div className="h-[64vh] sm:hidden"></div> */}
      </h2>
    </section>
  );
}
