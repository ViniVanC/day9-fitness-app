import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between p-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quibusdam et eius dolore sequi maiores in ex vel, adipisci
            voluptates neque repellendus, fugiat, excepturi dolorum atque autem
            cum consectetur libero!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, officia.
          </p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a href="tel:+(333)425-6825">(333)425-6825</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
