import SearchResult from "../editTheme/firstPane/SearchResult";

const MediaSelection = ({ words }) => {
  return (
    <div className="flex max-h-[34rem] basis-2/5 flex-col gap-y-6 overflow-y-scroll">
      {words.map((word) => (
        <SearchResult key={word.id} {...word} />
      ))}
    </div>
  );
};

export default MediaSelection;
