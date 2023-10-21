import React from "react";
import { Top, Box, Detail, Signups, Numbers } from "../components/sharedstyles";
import { FaSignInAlt } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import { RiLoginCircleFill } from "react-icons/ri";

const TopPart = ({ users }) => {
  return (
    <Top>
      <Box>
        <Detail>
          <Signups>
            <span> Sign Ups</span>
            <span>
              <FaSignInAlt size={25} style={{ color: "green" }} />
            </span>
          </Signups>
          <Numbers>{users.length}</Numbers>
        </Detail>
      </Box>
      <Box>
        <Detail>
          <Signups>
            <span> Logins</span>
            <span>
              <RiLoginCircleFill size={25} style={{ color: "green" }} />
            </span>
          </Signups>
          <Numbers>{users.length}</Numbers>
        </Detail>
      </Box>
      <Box>
        <Detail>
          <Signups>
            <span>Upgrades</span>
            <span>
              <GiUpgrade size={25} style={{ color: "purple" }} />
            </span>
          </Signups>
          <Numbers>{users.length}</Numbers>
        </Detail>
      </Box>
    </Top>
  );
};

export default TopPart;
