import React from "react";

import CampaignOptions from "./CampaignOptions";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Textbox from "../UI/TextBox/Textbox";
import Button from "../UI/Button/Button";

function CampaignInfo() {
  return (
    <SectionBlock>
      <div className="md:flex text-sm">
        <Textbox>
          <div className="md:flex md:flex-col md:justify-center">
            <CampaignOptions />
            <Button >New Campaign</Button > 
          </div>
        </Textbox>
        <div className="md:ml-2">
          <Textbox>
            <p>Dungeon Master:</p>
            <p>Nazth</p>
          </Textbox>
          <Textbox>
            <p>Status:</p>
            <p>On Going</p>
          </Textbox>
          <Textbox>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt
              corporis pariatur enim nisi quod! Reprehenderit quidem officia
              nisi corporis tempore assumenda voluptatibus modi, cupiditate
              laborum, quam eos vitae repellat dolorem natus aut dicta at illo
              debitis animi ex ad nostrum sed! Voluptatum dicta et similique
              atque ipsam voluptatibus impedit?
            </p>
          </Textbox>
        </div>
      </div>
    </SectionBlock>
  );
}

export default CampaignInfo;
