import { createPlugin } from "../../../../src";

const taggedCallback = props => {
  if (props.tag.member === null) {
    const outputContent = props.taggedContent + "extra";
    const outputFilePath = props.outputFilePath.replace(".txt", "-extra.txt");
    return { outputContent, outputFilePath };
  } else if (props.tag.member === "prop") {
    const outputContent = props.taggedContent + "extra";
    const outputFilePath = props.outputFilePath.replace(".txt", "-extra.txt");
    return { outputContent, outputFilePath };
  } else {
    return props;
  }
};

const options = {
  taggedCallback,
  taggerMembers: { "*": {} }
};

export default createPlugin(options);
