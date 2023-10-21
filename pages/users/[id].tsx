import { RiLoginCircleFill } from "react-icons/ri";
import {
  Main,
  Signups,
  SingleBox,
  SummaryBoxes,
  Title,
} from "../../components/sharedstyles";
import { AiOutlineUser } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://6524d386ea560a22a4ea24ca.mockapi.io/data1");
  const data = await res.json();
  console.log(data);

  const paths = data.map((item) => {
    return {
      // paths: [{}, {}, {}, { params:{id:"1"} }],return object with params and an id inside

      params: { id: item.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://6524d386ea560a22a4ea24ca.mockapi.io/data1/${id}`
  );
  const data = await res.json();

  return {
    props: {
      detail: data,
    },
  };
};

const Details = ({ detail }) => {
  return (
    <Main>
      <Title>Summary</Title>
      <SummaryBoxes>
        <SingleBox>
          <div>
            <Signups>
              <span>{detail.name.toUpperCase()}</span>
              <span>
                <AiOutlineUser size={25} style={{ color: "purple" }} />
              </span>
            </Signups>
          </div>
          <div>
            <b>Email: </b>
            {detail.email}
          </div>
          <div>
            <b>Sign Up Date: </b>
            {detail.date.substring(0, 16)}
          </div>
        </SingleBox>
        <SingleBox>
          <Signups>
            <span>Last Login</span>
            <span>
              <RiLoginCircleFill size={25} style={{ color: "green" }} />
            </span>
          </Signups>
          <div>
            <b>date: </b>
            {detail.date.substring(0, 16)}
          </div>
          <div>
            <b>Device Used: </b>
            {detail.device}
          </div>
        </SingleBox>
        <SingleBox>
          <Signups>
            <span>Upgrades</span>
            <span>
              <GiUpgrade size={25} style={{ color: "purple" }} />
            </span>
          </Signups>
          <div>
            <b>Old Plan:</b>
            {detail.oldPlan}
          </div>
          <div>
            <b>New Plan: </b>
            {detail.newPlan}
          </div>
          <div>
            <b>Upgrade Date: </b>
            {detail.upgradeDate.substring(0, 16)}
          </div>
        </SingleBox>
      </SummaryBoxes>
    </Main>
  );
};

export default Details;
