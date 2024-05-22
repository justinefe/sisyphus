interface ITab {
  title: string;
  tab: string;
  handleClick: any;
  type: string;
}
const Tab = ({ title, tab, handleClick, type }: ITab) => {
  return (
    <button
      onClick={(e) => handleClick(e, type)}
      className={`shadow shadow-[bb]  h-[28px] w-full ${
        tab === type
          ? "bg-[#262932] text-[#FFFFFF] rounded-lg "
          : "bg-[#0000001F] text-[#A7B1BC]"
      } font-medium text-[12px]`}
    >
      {title}
    </button>
  );
};
export default Tab;
