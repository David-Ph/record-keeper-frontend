import validator from "validator";
import { CampaignStatus } from "../../config/Options";

export const titleValidator = (title = "") => {
  const isValid = validator.isLength(title.toString(), {
    min: 1,
    max: 50,
  });

  const message = isValid ? "OK" : "Title should be between 1 to 50 characters";
  return { isValid, message };
};

export const dungeonMasterValidator = (dungeonMaster = "") => {
  const isValid = validator.isLength(dungeonMaster.toString(), {
    min: 1,
    max: 50,
  });

  const message = isValid
    ? "OK"
    : "Dungeon Master should be between 1 to 50 characters";
  return { isValid, message };
};

export const statusValidator = (status = "") => {
  const isValid = CampaignStatus.includes(status.toString());

  const message = isValid
    ? "OK"
    : "Invalid status. Choose between [On Going, Completed, Finished, On Going]";
  return { isValid, message };
};

export const descriptionValidator = (description = "") => {
  const isValid = validator.isLength(description.toString(), {
    min: 1,
    max: 250,
  });

  const message = isValid
    ? "OK"
    : "Description should be between 1 to 250 characters";
  return { isValid, message };
};
