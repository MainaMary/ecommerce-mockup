import React, {  useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";
import Images from "../components/Images";

const Photos = () => {
  const { data, loading} = useContext(Context);
  return (
    <div>
      <h3>Photos</h3>
      <Images />
      <Wrapper>
        {loading
          ? "loading ...."
          : data.map(({ download_url, name }, index) => (
              <Images key={index} url={download_url} name={name} />
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
`;
