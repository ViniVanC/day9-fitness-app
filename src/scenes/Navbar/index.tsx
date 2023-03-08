import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBG = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBG} ${flexBetween} fixed top-0 z-[100] w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />

            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <ul className={`${flexBetween} gap-8 text-sm capitalize`}>
                  <li>
                    <Link
                      page="home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="our classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="contact us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                </ul>
                <div className={`${flexBetween} gap-8`}>
                  <p className="capitalize">sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className=" rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className=" fixed right-0 bottom-0 z-[110] h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400 " />
            </button>
          </div>

          {/* menu items */}
          <ul className="ml-[33%] flex flex-col gap-10 text-2xl capitalize">
            <li>
              <Link
                page="home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <Link
                page="benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <Link
                page="our classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <Link
                page="contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
