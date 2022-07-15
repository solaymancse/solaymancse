import React from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { AiFillEye } from "react-icons/ai";

import { projectData } from "../../Data";
import { Title, Code, Desc, Links,CardBox } from "./ProjectCardElement";

export const ProjectCard = () => {
  return (
    <>
      {projectData.map((data,index) => (
        <CardBox key={index}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="400"
            image={data.img}
          />
          <CardContent
            style={{ textAlign: "center", backgroundColor: "#2D343E" }}
          >
            <Title>{data.title}</Title>
            <Code>
              {data.code.map((langs,index) => (
                <Desc key={index}>{langs}</Desc>
              ))}
            </Code>
          </CardContent>
          <CardActions
            style={{ justifyContent: "center", backgroundColor: "#2D343E" }}
          >
            <Links>
              <AiFillEye style={{ marginRight: "8px" }} />{" "}
              <a size="small" href={data.live}>
                Live Link
              </a>
            </Links>
            <Links>
              <a size="small" href={data.source}>
                Source Code
              </a>
            </Links>
          </CardActions>
        </CardBox>
      ))}
    </>
  );
};
