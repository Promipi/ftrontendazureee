import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="
          relative
          z-10
          overflow-hidden
          min-h-[90vh]
          bg-gray-100
          bg-[url(/images/hero/pantanal.jpeg)]
          bg-no-repeat
          bg-[center_top]
          bg-cover
          bg-blend-light
          bg-fixed"
      >
        <div
          className="
            backdrop-blur-sm
            z-[100]
            relative
            min-h-[90vh]"
        >
          <div
            className="
              container
              absolute
              top-1/2
              -translate-y-1/2
              left-1/2
              -translate-x-1/2"
          >
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[800px] text-center">
                  <h1
                    className="
                      mb-5
                      text-3xl
                      font-bold
                      leading-tight
                      text-white
                      sm:text-8xl
                      sm:leading-tight
                      md:text-5xl
                      md:leading-tight"
                  >
                    ECO FAUNA
                  </h1>
                  <p className="
                    mb-12
                    text-base
                    font-bold
                    !leading-relaxed
                    text-yellow-700
                    sm:text-lg
                    md:text-4xl
                    text-white"
                  
                  >
                    “Tu Pasaporte a la Vida Salvaje”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
