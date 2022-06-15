import React from 'react';

// import { homeObjOne, homeObjTwo } from './Data';
import "./Scientists.css";
import '../Publications/Publications.css';

//icons
import { FaOrcid } from "react-icons/fa";
import { FiTwitter,FiLinkedin,FiFacebook,FiMail,FiInstagram } from "react-icons/fi";


import souradeep from './../../images/Souradeep.jpg';
import soham from './../../images/SohamChakr.jpg';
import profSub from './../../images/Shubhashis.png';
import deep from './../../images/DeepChauduri.jpg';
import debojyoti from './../../images/Debojyoti.jpg';
import madhu from './../../images/madhu1.jpg';
import ayush from './../../images/ayushmish.jpg'; 
import riti from './../../images/ritibhatia.jpg';


function Scientists() {
  return (
    <>
<div id="publications_header"><h2 style={{fontFamily: "DM Sans"}} > Team </h2></div>    
      <div className="s_row">

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={profSub} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Shubhasis Haldar</div>
                  <div className="scientist_bio_row_details ">Principal Investigator </div>
                    <div className="scientist_bio_row_details ">Postdoc Max Planck Institute & Columbia University 
                    </div>
                    <div className="scientist_bio_row_unc">I am interested in developing single molecule technologies to understand complex biological phenomenon 
                    </div>
          
                </div>  

                <div className="social_media_links" style={{padding:"6px"}}>
                      
                      <div style={{paddingLeft:"5px"}}><a href='https://www.facebook.com/shubhasis.haldar.31' target={"_blank"}><FiFacebook></FiFacebook></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/feed/' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:shubhasis.haldar@ashoka.edu.in"><FiMail ></FiMail></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://orcid.org/0000-0002-4304-5570' target={"_blank"}><FaOrcid ></FaOrcid></a>
                      </div>
                  </div>

          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={soham} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Soham Chakraborty</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_unc "> Soham is interested in understanding the talin mechanosensitivity and its regulation under different cellular processes</div>
                </div>  
                <div className="social_media_links" style={{padding:"6px"}}>
          
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/soham-chakraborty-b905071a4' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:soham.chakraborty_phd19@ashoka.edu.in"><FiMail ></FiMail></a>
                      </div>

                  </div>

          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={souradeep} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Souradeep Banerjee</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_unc scientist_bio_row_details">Souradeep tries to understand the maintenance of structural integrity in mechanosensitive proteins</div>
                </div>  
                <div className="social_media_links" style={{padding:"6px"}}>
                      
                      <div style={{paddingLeft:"5px"}}><a href='https://m.facebook.com/100001751436444/' target={"_blank"}><FiFacebook></FiFacebook></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/souradeep-banerjee-969030169' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:souradeep.banerjee_phd19@ashoka.edu.in"><FiMail></FiMail></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                        <a href='https://twitter.com/imSouradeep?t=XWEU7imDzrA9nnufAegK_g&s=08' target={"_blank"}><FiTwitter></FiTwitter></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://orcid.org/0000-0003-4719-9371' target={"_blank"}><FaOrcid ></FaOrcid></a>
                      </div>
                  </div>

          </div>


          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={madhu} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Madhu Bhatt</div>
                  <div className="scientist_bio_row_details">Junior Research Fellow</div>
                  <div className="scientist_bio_row_unc ">Madhu aims to understand the chain dynamics of proteins and its modulation via chaperone interactions</div>
                </div>  

                <div className="social_media_links" style={{padding:"6px"}}>
                      
                      <div style={{paddingLeft:"5px"}}><a href='https://www.facebook.com/madhu.bhatt.1213' target={"_blank"}><FiFacebook></FiFacebook></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/madhu-bhatt-5931a3154' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:madhu.bhatt@ashoka.edu.in"><FiMail ></FiMail></a>
                      </div>

                  </div>

          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={deep} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Deep Chauduri</div>
                  <div className="scientist_bio_row_details">PhD, Chemistry</div>
                  <div className="scientist_bio_row_details">Junior Research Fellow</div>
                  <div className="scientist_bio_row_unc ">Deep aims to decipher the mechanical activity of chaperones under single-molecule resolution</div>
                </div>  

                <div className="social_media_links" style={{padding:"6px"}}>
                      
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/deep-chaudhuri-a763a01a9' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:deep.chaudhuri_phd21@ashoka.edu.in"><FiMail ></FiMail></a>
                      </div>
            
                  </div>

          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={debojyoti} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Debojyoti</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_details">Junior Research Fellow</div>
                  <div className="scientist_bio_row_unc ">Debojyoti is interested in understanding the role of mechanochemical signaling in neurodegeneration </div>

                </div>  

                <div className="social_media_links" style={{padding:"6px"}}>
                      
                      <div style={{paddingLeft:"5px"}}><a href=' https://www.facebook.com/debojyoti.chowdhury.90' target={"_blank"}><FiFacebook></FiFacebook></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/debojyoti-chowdhury-304a9921b/' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:debojyoti.chowdhury_phd21@ashoka.edu.in" ><FiMail ></FiMail></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                        <a href='https://twitter.com/DEBCHEM7?t=EMf17-TEfMYVb4OGg645ig&s=09' target={"_blank"}><FiTwitter></FiTwitter></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href=' https://orcid.org/0000-0003-3358-165X' target={"_blank"}><FaOrcid ></FaOrcid></a>
                      </div>
                  </div>

          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={ayush} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Ayush Mistry</div>
                  <div className="scientist_bio_row_details">Intern</div>
                  <div className="scientist_bio_row_unc ">Ayush is studying the role of mechanosensitive adapter proteins in cancer cell migration and metastasis.</div>

                </div>  

                <div className="social_media_links" style={{padding:"6px"}}>
                      

                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/ayush-mistry-764709127' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:ayush.mistry38@gmail.com"><FiMail ></FiMail></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://twitter.com/AyushMistry25?t=XZiTuLzcbpPCmU6WIRiwyQ&s=09'><FiTwitter></FiTwitter></a>      
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://orcid.org/0000-0003-4755-6893' target={"_blank"}><FaOrcid ></FaOrcid></a>
                      </div>
                  </div>

          </div>


          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={riti} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Riti Bhatia</div>
                  <div className="scientist_bio_row_details">Intern</div>
                  <div className="scientist_bio_row_unc ">Riti is interested in exploring how the physical properties of proteins impact their physiological functions - particularly in the capacity of cancer research.</div>

                </div>  
                <div className="social_media_links" style={{padding:"6px"}}>
                 
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://www.linkedin.com/in/riti-bhatia-883774193' target={"_blank"}> <FiLinkedin></FiLinkedin></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href="mailto:riti.bhatia_ug23@ashoka.edu.in"><FiMail ></FiMail></a>
                      </div>
                      <div style={{paddingLeft:"5px"}}>
                      <a href='https://twitter.com/ritibhatia26?s=09' target={"_blank"}><FiTwitter ></FiTwitter></a>
                      </div>
                  </div>

          </div>



      </div>
        <div className='s_row'>
          <div style={{flex:"50%",marginLeft:"auto",fontFamily:"DM Sans",padding:"1em"}}>
              <h1 style={{fontFamily:"DM sans",marginBottom:"1em",justifyContent:"center",justify:"center",align:"center"}}>Former members</h1>
              <div id="names">Shashwat Goyal : Masters in cancer immunology and biotechnology: (University of
              Nottingham, United Kingdom) </div>
              <br></br>
              <div id="names">Abhijit Sreepada: Erasmus International Master in Innovative Medicine program (Germany
                  and Netherlands)</div>
                  <br></br>
              <div id="names">Ritika Nara : Masters in Cancer at (University College London, United Kingdom) </div>
              <br></br>
              <div id="names">Devshuvam Banerji: Uppsala University (Sweden)</div>
              <br></br>
              <div id="names">Yajushi Khurana : PhD in computational biology (Pittsburgh, Pennsylvania, United States) </div>
              <br></br>
              <div id="names">Manasven Raina : Masters Program MEME : Uppsala university (Sweden), LMU (Germany)
University of Montpellier (France)</div>
<br></br>
          </div>

        </div>



{/* 
          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110'/>
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row"> Thorne Kip </div>
                  <div className="scientist_bio_row_details"> Physicist </div>
                  <div className="scientist_bio_row_details"> PhD,Geometrodynamics </div>
                </div>  
          </div>
 */}

        
      {/* </div> */}


    </>
  );
}

export default Scientists;