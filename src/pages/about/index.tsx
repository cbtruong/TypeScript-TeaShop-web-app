import Header from "../../components/header/Header";
import "boxicons/css/boxicons.min.css";

const About = () => {
  return (
    <div className="relative">
      <div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter pt-[323px]">
        <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
          Our Story
        </h1>
      </div>
      <Header />
      <div className="my-[5.5rem] displayCenter">
        <div className="w-full displayCenter relative mb-8">
          <h2 className="font-extra italic text-h1 z-10 bg-white px-12 font-tiny">
            120 Years of Brewing Fine Tea
          </h2>
          <span className="w-[65%] h-[0.2px] bg-black absolute z-0"></span>
        </div>
        <div className="flex flex-row justify-center space-x-20 mx-[350px]">
          <div className="w-1/2">
            <p className="font-main font-thin text-normal text-justify">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-main font-thin text-normal text-justify">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-20 mx-[350px] mt-8">
          <div className="w-1/2">
            <p className="font-main font-thin text-normal text-justify">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-main font-thin text-normal text-justify">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
