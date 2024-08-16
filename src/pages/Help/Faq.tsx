import { useState } from "react";
import Header from "../../components/header/Header";
import "boxicons/css/boxicons.min.css";

const Faq = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [faqList, setFaqList] = useState<string | null>("1");
  const [openSearch, setOpenSearch] = useState(true);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleFaqClick = (faqId: string) => {
    setFaqList((prevFaqId) => (prevFaqId === faqId ? null : faqId));
  };

  const TabSetup = (opt: number) => {
    if (opt === 1) {
      handleTabClick("overview");
      handleFaqClick("1");
    } else {
      handleTabClick("setup");
      handleFaqClick("4");
    }
  };
  return (
    <div className="relative">
      <div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter pt-[323px]">
        <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
          FAQ
        </h1>
      </div>
      <Header />
      <div className="mt-[5.5rem] mx-[450px] space-y-10">
        <div className="flex flex-row items-center">
          {openSearch ? (
            <>
              <h2 className="text-h2 font-extra italic ml-auto">
                Frequently asked questions
              </h2>
              <button onClick={() => setOpenSearch(false)} className="ml-auto">
                <i className="bx bx-search"></i>
              </button>
            </>
          ) : (
            <div className="w-full flex flex-row justify-between items-center border-b border-gray">
              <i className="bx bx-search"></i>
              {!openSearch && (
                <input
                  type="text"
                  placeholder="Search for a question"
                  className={`w-full outline-none px-1 py-2 placeholder:text-small placeholder:font-extra`}
                />
              )}
              <button onClick={() => setOpenSearch(true)} className="ml-3">
                <i className="bx bx-x"></i>
              </button>
            </div>
          )}
        </div>
        <div className="mt-8 flex flex-row justify-start items-center space-x-5">
          <button
            className={`text-main cursor-pointer ${selectedTab === "overview" ? "font-bold" : ""
              }`}
            onClick={() => TabSetup(1)}
          >
            Overview
          </button>
          <button
            className={`text-main cursor-pointer ${selectedTab === "setup" ? "font-bold" : ""
              }`}
            onClick={() => TabSetup(2)}
          >
            Set up FAQs
          </button>
        </div>
        <div className="mt-8">
          {selectedTab === "overview" && (
            <div className="pb-8 flex flex-col justify-center space-y-3">
              <button onClick={() => handleFaqClick("1")}>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-h3 font-extra">
                    What is the frequently asked questions section?
                  </h3>
                  <span>
                    <i
                      className={`bx bx-chevron-down transitionMain ${faqList === "1" ? "rotate-180" : ""
                        }`}
                    ></i>
                  </span>
                </div>
              </button>
              <div
                className={`${faqList === "1" ? "max-h-[300px] h-fit" : "max-h-0"
                  } mt-3 flex flex-col space-y-3 overflow-auto transitionMain`}
              >
                <p className="text-normal font-extra">
                  The FAQ section can be used to quickly answer common questions
                  about your business like "Where do you deliver?", "When are
                  you open?" or "How do I book a service?".
                </p>
                <div className="flex flex-row items-center space-x-1">
                  <button>
                    <i className="bx bxl-facebook-circle"></i>
                  </button>
                  <button>
                    <i className="bx bxl-twitter"></i>
                  </button>
                </div>
              </div>
              <span className="mt-3 w-full h-[0.2px] bg-gray"></span>
              <button onClick={() => handleFaqClick("2")}>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-h3 font-extra">
                    Why are FAQs important?
                  </h3>
                  <span>
                    <i
                      className={`bx bx-chevron-down transitionMain ${faqList === "2" ? "rotate-180" : ""
                        }`}
                    ></i>
                  </span>
                </div>
              </button>
              <div
                className={`${faqList === "2" ? "max-h-[300px] h-fit" : "max-h-0"
                  } mt-3 flex flex-col space-y-3 overflow-auto transitionMain`}
              >
                <p className="text-normal font-extra">
                  FAQs are a great way to help site visitors quickly find
                  answers to common questions about your business and create a
                  better navigation experience.
                </p>
                <div className="flex flex-row items-center space-x-1">
                  <button>
                    <i className="bx bxl-facebook-circle"></i>
                  </button>
                  <button>
                    <i className="bx bxl-twitter"></i>
                  </button>
                </div>
              </div>
              <span className="mt-3 w-full h-[0.2px] bg-gray"></span>
              <button onClick={() => handleFaqClick("3")}>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-h3 font-extra">Where can I add FAQs?</h3>
                  <span>
                    <i
                      className={`bx bx-chevron-down transitionMain ${faqList === "3" ? "rotate-180" : ""
                        }`}
                    ></i>
                  </span>
                </div>
              </button>
              <div
                className={`${faqList === "3" ? "max-h-[300px] h-fit" : "max-h-0"
                  } mt-3 flex flex-col space-y-3 overflow-auto transitionMain`}
              >
                <p className="text-normal font-extra">
                  You can add FAQs to any page on your website or to the Wix
                  mobile app, making them quick and convenient for your members
                  to read.
                </p>
                <div className="flex flex-row items-center space-x-1">
                  <button>
                    <i className="bx bxl-facebook-circle"></i>
                  </button>
                  <button>
                    <i className="bx bxl-twitter"></i>
                  </button>
                </div>
              </div>
              <span className="mt-3 w-full h-[0.2px] bg-gray"></span>
            </div>
          )}
          {selectedTab === "setup" && (
            <div className="pb-8 flex flex-col justify-center space-y-3">
              <button onClick={() => handleFaqClick("4")}>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-h3 font-extra">
                    How do I add new questions and answers?
                  </h3>
                  <span>
                    <i
                      className={`bx bx-chevron-down transitionMain ${faqList === "4" ? "rotate-180" : ""
                        }`}
                    ></i>
                  </span>
                </div>
              </button>
              <div
                className={`${faqList === "4" ? "max-h-[300px] h-fit" : "max-h-0"
                  } mt-3 flex flex-col space-y-3 overflow-auto transitionMain`}
              >
                <p className="text-normal font-extra">
                  Để thêm câu hỏi thường gặp mới, hãy làm theo các bước sau:{" "}
                  <br />
                  1. Quản lý Câu hỏi thường gặp từ trang tổng quan trang web
                  hoặc trong Trình chỉnh sửa <br />
                  2. Thêm câu hỏi và câu trả lời mới <br />
                  3. Phân chia câu hỏi thường gặp vào danh mục <br />
                  4. Lưu và xuất bản. <br />
                  <br /> Bạn luôn có thể quay lại và chỉnh sửa Câu hỏi thường
                  gặp của mình
                </p>
                <div className="flex flex-row items-center space-x-1">
                  <button>
                    <i className="bx bxl-facebook-circle"></i>
                  </button>
                  <button>
                    <i className="bx bxl-twitter"></i>
                  </button>
                </div>
              </div>
              <span className="mt-3 w-full h-[0.2px] bg-gray"></span>
              <button onClick={() => handleFaqClick("5")}>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-h3 font-extra">
                    Can I insert an image, video or GIF into an FAQ?
                  </h3>
                  <span>
                    <i
                      className={`bx bx-chevron-down transitionMain ${faqList === "5" ? "rotate-180" : ""
                        }`}
                    ></i>
                  </span>
                </div>
              </button>
              <div
                className={`${faqList === "5" ? "max-h-[300px] h-fit" : "max-h-0"
                  } mt-3 flex flex-col space-y-3 overflow-auto transitionMain`}
              >
                <p className="text-normal font-extra">
                  Được. Để thêm nội dung đa phương tiện, hãy làm theo các bước
                  sau: <br />
                  1. Quản lý Câu hỏi thường gặp từ trang tổng quan trang web
                  hoặc trong Trình chỉnh sửa <br />
                  2. Tạo câu hỏi thường gặp mới hoặc chỉnh sửa câu hỏi hiện có{" "}
                  <br />
                  3. Từ hộp văn bản trả lời, nhấp vào biểu tượng video, hình ảnh
                  hoặc ảnh GIF <br />
                  4. Thêm nội dung đa phương tiện từ thư viện và lưu. <br />
                </p>
                <div className="flex flex-row items-center space-x-1">
                  <button>
                    <i className="bx bxl-facebook-circle"></i>
                  </button>
                  <button>
                    <i className="bx bxl-twitter"></i>
                  </button>
                </div>
              </div>
              <span className="mt-3 w-full h-[0.2px] bg-gray"></span>
              <button onClick={() => handleFaqClick("6")}>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-h3 font-extra">
                    How do I edit or remove the "Frequently Asked Questions"
                    title?
                  </h3>
                  <span>
                    <i
                      className={`bx bx-chevron-down transitionMain ${faqList === "6" ? "rotate-180" : ""
                        }`}
                    ></i>
                  </span>
                </div>
              </button>
              <div
                className={`${faqList === "6" ? "max-h-[300px] h-fit" : "max-h-0"
                  } mt-3 flex flex-col space-y-3 overflow-auto transitionMain`}
              >
                <p className="text-normal font-extra">
                  You can edit the title from the FAQ "Setup" tab in the Editor.{" "}
                  <br />
                  To remove the title from your mobile app, go to the "Sites and
                  Apps" tab in the Owner app and customize.
                </p>
                <div className="flex flex-row items-center space-x-1">
                  <button>
                    <i className="bx bxl-facebook-circle"></i>
                  </button>
                  <button>
                    <i className="bx bxl-twitter"></i>
                  </button>
                </div>
              </div>
              <span className="mt-3 w-full h-[0.2px] bg-gray"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
