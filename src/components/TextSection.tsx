import { NextPage } from "next";

interface Props {}

const TextSection: NextPage<Props> = ({}) => {
  return (
    <div className="mx-auto p-3 sm:px-6 md:max-w-9/12 md:px-10 lg:px-8">
      <p className="text-2xl md:w-4/5">
        In Chronicle everything is made with Blocks that come with pixel perfect
        design,{" "}
        <span className="text-[#70707043]">
          interactivity and motion out of the box. Instead of designing from
          scratch, simply choose the right one from our library of blocks and
          see the magic unfold.
        </span>
      </p>
    </div>
  );
};

export default TextSection;
