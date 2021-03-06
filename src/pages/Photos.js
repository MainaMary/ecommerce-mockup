import React, {  useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";
import Images from "../components/Images";

const Photos = () => {
  const { data, loading} = useContext(Context);
  return (
    <div>
      <h3 style={{textAlign: "center"}}> Choose Photos</h3>
      
      <Wrapper>
        {loading
          ? "loading ...."
          : data.map((obj, index) => (
              <Images key={index} obj={obj} url={obj.download_url} id={obj.id} name={obj.name}/>
            ))}
      </Wrapper>
    </div>
  );
};

export default Photos;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  padding: 20px 10px;
  @media (max-width: 768px){
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
