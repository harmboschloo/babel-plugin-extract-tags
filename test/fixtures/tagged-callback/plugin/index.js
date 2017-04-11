import { createPlugin } from "../../../../src";

const taggedCallback = (props, types) => {
  if (props.tag.member === null) {
    const outputContent = props.taggedContent + "extra";
    const outputFilePath = props.outputFilePath.replace(".txt", "-extra.txt");
    return { outputContent, outputFilePath };
  } else if (props.tag.member === "prop") {
    const outputContent = props.taggedContent + "extra";
    const outputFilePath = props.outputFilePath.replace(".txt", "-extra.txt");
    return { outputContent, outputFilePath };
  } else if (props.tag.member === "prop3") {
    const tagArguments = [];
    return { tagArguments };
  } else if (props.tag.member === "prop4") {
    const tagArguments = [types.numericLiteral(123), props.tagIdIdentifier];
    return { tagArguments };
  } else {
    return props;
  }
};

const options = {
  taggedCallback,
  taggerMembers: { "*": {} }
};

export default createPlugin(options);
