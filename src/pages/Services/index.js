import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import { services, services_info, functions } from "./content";


function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
	  width,
	  height
	};
  }

  function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
	useEffect(() => {
	  function handleResize() {
		setWindowDimensions(getWindowDimensions());
	  }
  
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
  
	return windowDimensions;
  }


const Services = () => {
  const [index, setIndex] = useState(-1);
  const [subIndex, setSubIndex] = useState(-1);
  const { height, width } = useWindowDimensions();

console.log('index, subindex', index, subIndex)
  return (
    <section id="services" className="features">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <header className="section-header">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-down"
          >
            <h2 className="text-center">{functions.title}</h2>
            <span className="text-center">{functions.title}</span>
          </div>
          <p style={{ fontSize: "1rem" }}>{functions.desc}</p>
        </header>

        {width >= 1000 && (
        <div className="row">
          <div className="col-lg-4 ">
            <div className="row  gy-4">
              {functions.functionsList.map((each, index) => (
                <div
                  key={index}
                >
                  <div  onClick={() => {setIndex(index) ; setSubIndex()}} className="accordion-title feature-box d-flex align-items-center ">
                    <h3  style={{cursor: 'pointer'}} >{each}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {index == 0 && (
            <div className="col-lg-4 ">
              <div className="row  gy-1">
                {functions.contractResearchList.map((each, index) => (
                  <div
                    key={index}
                  >
                    <div onClick={() => setSubIndex(index)} className=" accordion-title feature-box d-flex align-items-center">
                      <h3 style={{cursor: 'pointer'}}  >{each}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {subIndex == 0 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail0.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{each.details}</p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc6}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc7}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc8}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc9}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 1 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail1.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{each.details}</p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc6}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc7}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc8}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc9}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc10}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc11}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc12}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc13}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc14}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc15}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 2 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail2.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{each.details1}</p>
					  <p style={{ fontSize: 14 }}>{each.details2}</p>
					  <p style={{ fontSize: 14 }}>{each.details3}</p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
					  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv1}</p>
					  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv2}</p>
					  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv3}</p>
					  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv4}</p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
					 
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
                   
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


{subIndex == 3 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail3.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                     
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc6}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc7}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc8}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc9}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc10}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 4 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail4.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{each.details1}</p>
					  <p style={{ fontSize: 14 }}>{each.details2}</p>
					  <p style={{ fontSize: 14 }}>{each.details3}</p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc6}
                      </p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 5 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail5.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{each.details1}</p>
					  <p style={{ fontSize: 14 }}>{each.details2}</p>
					  <p style={{ fontSize: 14 }}>{each.details3}</p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
					  <p style={{ fontSize: 14 }}>{each.details4}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 6 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail6.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{each.details1}</p>
					  <p style={{ fontSize: 14 }}>{each.details2}</p>
					  
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
					
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 7 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail7.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{each.details1}</p>
					  <p style={{ fontSize: 14 }}>{each.details2}</p>
					  <p style={{ fontSize: 14 }}>{each.details3}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 8 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail8.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					 
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc6}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc7}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc8}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc9}
                      </p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 9 && index == 0 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.contractResearchDetail9.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc1}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc2}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc3}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc4}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc5}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc6}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc7}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc8}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc9}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc10}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc11}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc12}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc13}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc14}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc15}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc16}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc17}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc18}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc19}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc20}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc21}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc22}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc23}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc24}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc25}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc26}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc27}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc28}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc29}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc30}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc31}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc32}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc33}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc34}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc35}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc36}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc37}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc38}
                      </p>
                      <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc39}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc40}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc41}
                      </p>
					  <p style={{ fontSize: 14 }}>
                        {"\u2022"} {each.desc42}
                      </p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


{index == 1 && (
            <div className="col-lg-4 ">
              <div className="row  gy-2">
                {functions.foodAndAgriList.map((each, index) => (
                  <div
                    key={index}
                  >
                    <div onClick={() => setSubIndex(index)} className="accordion-title feature-box d-flex align-items-center">
                      <h3 style={{cursor: 'pointer'}}  >{each}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


{subIndex == 0 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail0.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 1 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail1.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 2 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail2.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
           
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


{subIndex == 3 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail3.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>           
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 4 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail4.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


{subIndex == 5 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail5.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>           
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 6 && index == 1 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.foodAgriDetail6.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
					          
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{index == 2 && (
            <div className="col-lg-4 ">
              <div className="row  gy-2">
                {functions.drugAndPharmaList.map((each, index) => (
                  <div
                    key={index}
                  >
                    <div  onClick={() => setSubIndex(index)} className="accordion-title feature-box d-flex align-items-center">
                      <h3 style={{cursor: 'pointer'}}  >{each}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 0 && index == 2 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.drugAndPharmaDetail0.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc20}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc21}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc22}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc23}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc24}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc25}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc26}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc27}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc28}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc29}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc30}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc31}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc32}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc33}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc34}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc35}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc36}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc37}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc38}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc39}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc40}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc41}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc42}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc43}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc44}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc45}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc46}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc47}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc48}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc49}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc50}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc51}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc52}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc53}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc54}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc55}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc56}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc57}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc58}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc59}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc60}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc61}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc62}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc63}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc64}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc65}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc66}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc67}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc68}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc69}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc70}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc71}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc72}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc73}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc74}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc75}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc76}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc77}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc78}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc79}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc80}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc81}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc82}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc83}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc84}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc85}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc86}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc87}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc88}</p>
         
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}




{index == 3 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.chemicalsList.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                    <h3>{each.title}</h3>
                    <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc20}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc21}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc22}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc23}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc24}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc25}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc26}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc27}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc28}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc29}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{index == 4 && (
            <div className="col-lg-4 ">
              <div className="row  gy-4">
                {functions.waterList.map((each, index) => (
                  <div
                    key={index}
                  >
                    <div onClick={() => setSubIndex(index)} className="accordion-title feature-box d-flex align-items-center">
                      <h3 style={{cursor: 'pointer'}}   >{each}</h3>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 0 && index == 4 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.waterDetail0.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc20}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc21}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 1 && index == 4 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.waterDetail1.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
					  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>

                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{index == 5 && (
            <div className="col-lg-4 ">
              <div className="row  gy-3">
                {functions.projectList.map((each, index) => (
                  <div
                    key={index}
                  >
                    <div onClick={() => setSubIndex(index)} className="accordion-title feature-box d-flex align-items-center">
                      <h3 style={{cursor: 'pointer'}}   >{each}</h3>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 0 && index == 5 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.projectDetail0.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 1 && index == 5 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.projectDetail1.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 2 && index == 5 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.projectDetail2.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
            
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{subIndex == 5 && index == 5 && (
            <div className="col-lg-4 ">
              <div className=" gy-4">
                {functions.projectDetail3.map((each, index) => (
                  <div key={index}>
                    <div className="feature-box ">
                      <h3>{each.title}</h3>
                      <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
           
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
        )}

{width <= 1000 && (

<div >
<div>
    <div >
    {functions.functionsListMobile.map((each) => (
      <div>
        <div  onClick={() => {setIndex(0)}} className="accordion-title feature-box">
          <h3  style={{cursor: 'pointer'}} >{each.desc1}</h3>

          {index == 0 && (
  <div>
    <div >
      {functions.contractResearchListMobile.map((each) => (
        <div>
          <div onClick={() => setSubIndex(0)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc1}</h3>

            {subIndex == 0 && index == 0 && (
  <div>
    <div>
      {functions.contractResearchDetail0.map((each) => (
        <div>
          <div className="feature-box">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{each.details}</p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc6}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc7}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc8}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc9}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(1)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc2}</h3>


{subIndex == 1 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail1.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{each.details}</p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc6}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc7}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc8}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc9}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc10}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc11}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc12}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc13}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc14}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc15}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(2)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc3}</h3>

            {subIndex == 2 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail2.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{each.details1}</p>
  <p style={{ fontSize: 14 }}>{each.details2}</p>
  <p style={{ fontSize: 14 }}>{each.details3}</p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv1}</p>
  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv2}</p>
  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv3}</p>
  <p style={{ fontSize: 14, marginLeft: 20 }}> - {each.serv4}</p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
 
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
         
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(3)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc4}</h3>

            {subIndex == 3 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail3.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
           
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc6}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc7}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc8}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc9}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc10}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(4)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc5}</h3>

            {subIndex == 4 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail4.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{each.details1}</p>
  <p style={{ fontSize: 14 }}>{each.details2}</p>
  <p style={{ fontSize: 14 }}>{each.details3}</p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc6}
            </p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(5)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc6}</h3>

            {subIndex == 5 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail5.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{each.details1}</p>
  <p style={{ fontSize: 14 }}>{each.details2}</p>
  <p style={{ fontSize: 14 }}>{each.details3}</p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
  <p style={{ fontSize: 14 }}>{each.details4}</p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(6)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc7}</h3>

{subIndex == 6 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail6.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{each.details1}</p>
  <p style={{ fontSize: 14 }}>{each.details2}</p>
  
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>

           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(7)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc8}</h3>
            {subIndex == 7 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail7.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{each.details1}</p>
  <p style={{ fontSize: 14 }}>{each.details2}</p>
  <p style={{ fontSize: 14 }}>{each.details3}</p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(8)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc9}</h3>

{subIndex == 8 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail8.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
 
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc6}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc7}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc8}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc9}
            </p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(9)} className=" accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc10}</h3>
            {subIndex == 9 && index == 0 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.contractResearchDetail9.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>

            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc1}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc2}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc3}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc4}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc5}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc6}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc7}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc8}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc9}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc10}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc11}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc12}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc13}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc14}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc15}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc16}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc17}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc18}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc19}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc20}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc21}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc22}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc23}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc24}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc25}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc26}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc27}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc28}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc29}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc30}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc31}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc32}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc33}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc34}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc35}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc36}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc37}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc38}
            </p>
            <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc39}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc40}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc41}
            </p>
  <p style={{ fontSize: 14 }}>
              {"\u2022"} {each.desc42}
            </p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        </div>

        <p></p>

        <div  onClick={() => {setIndex(1)}} className="accordion-title feature-box">
          <h3  style={{cursor: 'pointer'}} >{each.desc2}</h3>


{index == 1 && (
  <div className="col-lg-4 ">
    <div className="  gy-2">
      {functions.foodAndAgriListMobile.map((each) => (
        <div>
          <div onClick={() => setSubIndex(0)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc1}</h3>

            {subIndex == 0 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail0.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(1)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc2}</h3>

            {subIndex == 1 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail1.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(2)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc3}</h3>


{subIndex == 2 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail2.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
 
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(3)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc4}</h3>


{subIndex == 3 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail3.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>           
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(4)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc5}</h3>

            {subIndex == 4 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail4.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>

          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(5)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc6}</h3>

            {subIndex == 5 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail5.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>           
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(6)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each.desc7}</h3>


{subIndex == 6 && index == 1 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.foodAgriDetail6.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
          
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        </div>

        <p></p>
        <div  onClick={() => {setIndex(2)}} className="accordion-title feature-box">
          <h3  style={{cursor: 'pointer'}} >{each.desc3}</h3>


{index == 2 && (
  <div className="col-lg-4 ">
    <div className="  gy-2">
      {functions.drugAndPharmaList.map((each) => (
        <div>
          <div  onClick={() => setSubIndex(0)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}  >{each}</h3>

            {subIndex == 0 && index == 2 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.drugAndPharmaDetail0.map((each) => (
        <div>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc20}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc21}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc22}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc23}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc24}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc25}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc26}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc27}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc28}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc29}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc30}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc31}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc32}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc33}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc34}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc35}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc36}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc37}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc38}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc39}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc40}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc41}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc42}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc43}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc44}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc45}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc46}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc47}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc48}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc49}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc50}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc51}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc52}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc53}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc54}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc55}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc56}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc57}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc58}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc59}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc60}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc61}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc62}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc63}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc64}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc65}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc66}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc67}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc68}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc69}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc70}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc71}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc72}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc73}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc74}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc75}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc76}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc77}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc78}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc79}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc80}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc81}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc82}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc83}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc84}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc85}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc86}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc87}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc88}</p>

           
          </div>
        </div>
      ))}
    </div>
  </div>
)}


          </div>
        </div>
      ))}
    </div>
  </div>
)}

        </div>
        <p></p>
        <div  onClick={() => {setIndex(3)}} className="accordion-title feature-box">
          <h3  style={{cursor: 'pointer'}} >{each.desc4}</h3>

          {index == 3 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.chemicalsList.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
          <h3>{each.title}</h3>
          <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc20}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc21}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc22}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc23}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc24}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc25}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc26}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc27}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc28}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc29}</p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        </div>
        <p></p>
        <div  onClick={() => {setIndex(4) }} className="accordion-title feature-box ">
          <h3  style={{cursor: 'pointer'}} >{each.desc5}</h3>

          {index == 4 && (
  <div className="col-lg-4 ">
    <div className="  gy-4">
      {functions.waterListMobile.map((each) => (
        <div>
          <div onClick={() => setSubIndex(0)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc1}</h3>

            {subIndex == 0 && index == 4 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.waterDetail0.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc16}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc17}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc18}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc19}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc20}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc21}</p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(1)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc2}</h3>

            {subIndex == 1 && index == 4 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.waterDetail1.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>

           
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>
          
        </div>
      ))}
    </div>
  </div>
)}

        </div>
        <p></p>
        <div  onClick={() => {setIndex(5) }} className="accordion-title feature-box ">
          <h3  style={{cursor: 'pointer'}} >{each.desc6}</h3>

          {index == 5 && (
  <div className="col-lg-4 ">
    <div className="  gy-3">
      {functions.projectListMobile.map((each) => (
        <div>
          <div onClick={() => setSubIndex(0)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc1}</h3>



{subIndex == 0 && index == 5 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.projectDetail0.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div onClick={() => setSubIndex(1)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc2}</h3>


{subIndex == 1 && index == 5 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.projectDetail1.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc4}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc5}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc6}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc7}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc8}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc9}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc10}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc11}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc12}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc13}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc14}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc15}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(2)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc3}</h3>

            {subIndex == 2 && index == 5 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.projectDetail2.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc2}</p>
  <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc3}</p>
  
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>

          <div onClick={() => setSubIndex(3)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc4}</h3>
          </div>

          <div onClick={() => setSubIndex(4)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc5}</h3>
          </div>

          <div onClick={() => setSubIndex(5)} className="accordion-title feature-box">
            <h3 style={{cursor: 'pointer'}}   >{each.desc6}</h3>
            {subIndex == 5 && index == 5 && (
  <div className="col-lg-4 ">
    <div className=" gy-4">
      {functions.projectDetail3.map((each, index) => (
        <div key={index}>
          <div className="feature-box ">
            <h3>{each.title}</h3>
            <p style={{ fontSize: 14 }}>{"\u2022"}{each.desc1}</p>
 
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>
          
        </div>
      ))}
    </div>
  </div>
)}
        </div>

      </div>
    ))}
  </div>
</div>



</div>

 )}

      </div>
    </section>
  );
};
export default Services;
