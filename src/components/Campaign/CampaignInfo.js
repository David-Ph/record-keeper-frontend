import React from "react";

import CampaignOptions from "./CampaignOptions";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Card from "../UI/Card/Card";

function CampaignInfo() {
  return (
    <SectionBlock>
      <div>
        <CampaignOptions />
        <div>
          <Card>
            <p>Dungeon Master:</p>
            <p>Nazth</p>
          </Card>
          <Card>
            <p>Status:</p>
            <p>On Going</p>
          </Card>
          <Card>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt
              corporis pariatur enim nisi quod! Reprehenderit quidem officia
              nisi corporis tempore assumenda voluptatibus modi, cupiditate
              laborum, quam eos vitae repellat dolorem natus aut dicta at illo
              debitis animi ex ad nostrum sed! Voluptatum dicta et similique
              atque ipsam voluptatibus impedit?
            </p>
          </Card>
        </div>
      </div>
    </SectionBlock>
  );
}

export default CampaignInfo;
