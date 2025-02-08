export const BluePalmUp = ({ text }: { text: string }) => {
  return (
    <div className="ml-2 flex items-center space-x-2 mt-8">
      <div className="w-[19px] h-[19px] bg-[url('/~s20231073/assets/img/palms.png')] bg-[left_-87px_top_-52px] bg-no-repeat"></div>
      <p className="text-xl">{text}</p>
    </div>
  );
};
