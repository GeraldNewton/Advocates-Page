import React, { useState } from "react";
import Expandicon from "./expandicon.jsx";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import "./faq.css";
export default function FAQ() {
  const [showexpand, setShowexpand] = useState({
    panel1: true,
    panel2: true,
    panel3: true,
    panel4: true,
  });
  return (
    <div className="container-faq">
      <div className="FAQ-header-faq">FAQ</div>
      <div className="content-faq">
        <div className="FAQ-content-faq">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          reiciendis autem ipsam, perferendis necessitatibus enim excepturi
          laborum earum nesciunt, voluptatibus eius
        </div>
        <div className="Accordian-faq">
          <Accordion
            sx={{
              boxShadow: "none",
              mb: "2%",
            }}
            onChange={(e, expanded) =>
              setShowexpand({ ...showexpand, panel1: !expanded })
            }
            // CHECK ABOUT THE onChange I DID ABOVE AND PARAMETERS I USED IN https://stackoverflow.com/questions/64010549/react-material-ui-accordion-how-to-call-a-function-when-accordion-is-open
          >
            <AccordionSummary
              expandIcon={showexpand.panel1 && <Expandicon />}
              className="container-faq"
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "var(--textcolor)",
                }}
              >
                Do I need a personal injury report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "rgba(29,29,29,0.94)" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  color: "var(--textcolor)",
                  textAlign: "left",
                  opacity:"0.5"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="accordianDivider-faq"></div>
          <Accordion
            sx={{
              boxShadow: "none",
              mb: "2%",
            }}
            onChange={(e, expanded) =>
              setShowexpand({ ...showexpand, panel2: !expanded })
            }
          >
            <AccordionSummary
              expandIcon={showexpand.panel2 && <Expandicon />}
              className="container-faq"
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "var(--textcolor)",
                }}
              >
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  color: "var(--textcolor)",
                  textAlign: "left",
                  opacity:"0.5"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="accordianDivider-faq"></div>
          <Accordion
            sx={{
              boxShadow: "none",
              mb: "2%",
            }}
            onChange={(e, expanded) =>
              setShowexpand({ ...showexpand, panel3: !expanded })
            }
          >
            <AccordionSummary
              expandIcon={showexpand.panel3 && <Expandicon />}
              className="container-faq"
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "var(--textcolor)",
                }}
              >
                What should I do right after car accidect
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  color: "var(--textcolor)",
                  textAlign: "left",
                  opacity:"0.5"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="accordianDivider-faq"></div>
          <Accordion
            sx={{
              boxShadow: "none",
              mb: "2%",
            }}
            onChange={(e, expanded) =>
              setShowexpand({ ...showexpand, panel4: !expanded })
            }
          >
            <AccordionSummary
              expandIcon={showexpand.panel4 && <Expandicon />}
              className="container-faq"
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "var(--textcolor)",
                }}
              >
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "rgba(29,29,29,0.94)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  color: "var(--textcolor)",
                  textAlign: "left",
                  opacity:"0.5"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
