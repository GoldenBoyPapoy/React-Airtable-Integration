import { useState } from "react";

const Tab = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="w-1/2 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold normal-case px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white  bg-success"
                    : "text-success bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Table
              </a>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold normal-case px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white  bg-success"
                    : "text-success bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Chart
              </a>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold normal-case px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white  bg-success"
                    : "text-success bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Other
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto ">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <iframe
                    width="100%"
                    height="700"
                    src="https://airtable.com/embed/shrAJ4HMV4X0OgySc?viewControls=on"
                  ></iframe>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <iframe
                    width="100%"
                    height="700"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRluXcoyZOl3YRgzY_FSdeyu1t1dPNjs39KQjxhCq7aP1V9QmlvJ9XdfpBR49dBT894gVXipjEAcazG/pubchart?oid=204936261&amp;format=interactive"
                    style={{ height: "398px !important" }}
                  ></iframe>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <iframe
                    width="100%"
                    height="700"
                    src="https://airtable.com/embed/shrAJ4HMV4X0OgySc?viewControls=on"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
