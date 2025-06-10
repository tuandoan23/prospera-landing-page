import { NextPage } from "next";
import React from "react";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

interface Props {}

const items = ["Swift(iOS native)", "React Native", "Android Studio", "Slack"];

const Poll: NextPage<Props> = ({}) => {
  return (
    <div className="min-w-36 rounded-2xl bg-gradient-to-br from-[#404040] to-[#101010] p-2 sm:p-6">
      <div className="mb-2">
        <p className="text-secondary text-[7px]">POLL</p>
        <p className="text-sm font-bold">
          What would you build your first app with?
        </p>
      </div>
      <div className="flex flex-col gap-1">
        {items.map((i, index) => {
          return <PollItem key={index}>{i}</PollItem>;
        })}
      </div>
    </div>
  );
};

const PollItem = ({ children }: LayoutWrapperProps) => {
  return (
    <div className="group hover:bg-secondary border-7b flex items-center justify-between rounded-md border-[1px] bg-transparent p-1.5">
      <p className="text-7b text-[9px] group-hover:text-white">{children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="hidden size-2 group-hover:block"
      >
        <path
          fillRule="evenodd"
          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Poll;
