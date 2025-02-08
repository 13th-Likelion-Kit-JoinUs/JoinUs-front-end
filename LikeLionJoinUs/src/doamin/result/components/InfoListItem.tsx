export const InfoListItem = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <div className="relative grid pl-4 mb-2">
    <span className="absolute left-0 top-0 bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mt-1" />
    <span className="text-md leading-tight break-words">
      {label}: {items.join(", ")}
    </span>
  </div>
);
