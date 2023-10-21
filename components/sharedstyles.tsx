import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background-color: rgb(251, 247, 247);
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    height: 100%;
  }
`;
//Top
const Title = styled.h1`
  margin-left: 2rem;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 2rem;
    gap: 2rem;
  }
`;
const Box = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 0.1px solid green;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
const Icon = styled.span`
  margin-left: 1rem;
`;
const Numbers = styled.p`
  font-size: larger;
  font-weight: 600;
  background-color: #ccaed3;
  width: 3.9rem;
  border-radius: 8px;
  border: 0.3px solid black;
  padding: 8px;
  margin-top: 0px;
`;
const Signups = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  span:nth-child(2) {
    background-color: #c5f6d2;
    padding: 9px 6px 3px 6px;
    border: 0.5px solid black;
    border-radius: 8px;
  }
`;

//bottom
const Bottom = styled.div`
  background-color: white;
  grid-column: 1rem;
  position: relative;
  margin: 1rem 1rem 2rem 1rem;
  padding: 1rem;
  border-radius: 8px;
  overflow: scroll;
  border: 0.1px solid green;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.3rem;
  margin: 1rem 3.5rem 1.5rem 3.5rem;
`;
const Space = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 8px 0 8px;
`;
const Title_Summary = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  background-color: rgb(251, 247, 247);
  border-radius: 8px;
  margin: 8px 44px 8px 8px;
  padding: 8px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  border: 0.1px solid green;

  :hover {
    background-color: rgb(226, 220, 220);
  }
`;

//Summary
const SummaryBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem;
  gap: 1rem;
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0.5rem;
    gap: 2rem;
  }
`;
const SingleBox = styled.div`
  background-color: white;
  border: 0.5px solid black;
  border-radius: 8px;
  padding: 1rem;
  line-height: 2rem;
`;

export {
  Main,
  Top,
  Title,
  Detail,
  Icon,
  Signups,
  Numbers,
  Box,
  Bottom,
  TitleBox,
  Space,
  List,
  SummaryBoxes,
  SingleBox,
  Title_Summary,
};

// const Title1 = styled.h1`
//   margin: 0;
//   line-height: 1.15;
//   font-size: 4rem;
//   text-align: center;
//   text-decoration: none;

//   a {
//     color: ${({ theme }) => theme.colors.secondary};
//     text-decoration: none;
//     &:hover,
//     :focus,
//     :active {
//       text-decoration: underline;
//     }
//   }
// `;
