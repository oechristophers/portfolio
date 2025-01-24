import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import { Link } from "react-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex justify-center items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl w-full  text-Snow font-bold">
                  Únù dàálù!(もしもし)
                </h1>
              </div>
              <div className=" ">
                <div className=" relative py-4 font-cascadia-normal gap-3 flex flex-col text-Snow pb-4 text-xs h-20 lg:h-auto">
                  <section>
                    <span>
                      {"<"}
                      <span className="text-Green sm:text-base xl:text-lg font-bold">
                        div
                      </span>
                      {">"}{" "}
                      <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                        {" "}
                        I am a{" "}
                        <span className="inline-block">
                          <Typewriter
                            options={{
                              strings: [
                                "Next js Developer",
                                "Full Stack Developer",
                              ],
                              autoStart: true,
                              loop: true,
                            }}
                          />
                        </span>
                      </span>{" "}
                      {"</"}
                      <span className="text-Green sm:text-base xl:text-lg font-bold">
                        div
                      </span>
                      {">"}{" "}
                    </span>{" "}
                  </section>
                  <section className="flex h-fit">
                    <Link
                      to="intro"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                      className="button h-fit py-1"
                    >
                      Explore
                    </Link>{" "}
                    <div className="  absolute sm:hidden right-[-50px] top-[10px]  w-32 h-28 md:w-44 md:h-52">
                      <Avatar>
                        <AvatarImage src={"/images/blackAvatar.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className=" hidden md:block mb-12 sm:ml-16 md:ml-0 md:mb-4  w-48 h-36 md:w-48 md:h-52 relative ">
              <img
                className="absolute top-8 w-full h-full"
                src="images/blackAvatar.png"
                alt="avatar"
              />
            </div>
          </div>
        </div>

        {/* details in row */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              10+
            </span>
            <span className="text-xs text-Snow">Completed Projects</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              8+
            </span>
            <span className="text-xs text-Snow">Freelance Clients</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              5+
            </span>
            <span className="text-xs text-Snow">Honors & Awards</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              10+
            </span>
            <span className="text-xs text-Snow">Opensource Projects</span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
