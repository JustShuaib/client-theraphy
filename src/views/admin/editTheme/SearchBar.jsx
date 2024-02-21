/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const { Search } = Input;

const SearchBar = ({
  searchResult,
  setSearchResult,
  pickedSearch,
  setPickedSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const searchMutate = useMutation({
    mutationFn: async (searchValue) => {
      const response = axios.post("/api/dynamic_search", searchValue);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();
      const searchResponse = jsonResponse.results;
      console.log("the response of the search query is this:");
      console.log(searchResponse);
      // search response in itself is expected to be a list of key-value pairs.
      return searchResponse;
    },
  });

  useEffect(() => {
    if (searchMutate.status === "success") {
      setSearchResult(searchMutate.data);
    } else if (searchMutate.status === "error") {
      console.log("The search could not be updated");
    }
  }, [searchMutate.data, searchMutate.status, setSearchResult]);

  //   useEffect(() => {
  //     console.log(searchMutate.error);
  //   }, [searchMutate.error]);

  const handleSearch = (search) => {
    setSearchValue(search);
    searchMutate.mutate({ query: searchValue });
  };

  const handleClick = (search) => {
    //add to selected array
    setPickedSearch(...pickedSearch, {
      name: search.name,
      table_name: search.table_name,
      options: "",
      audio: search.audio,
      image: search.image,
      video: search.video,
    });
  };
  return (
    <div className="relative w-full h-fit">
      <div className="z-40 w-full">
        <Search
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          value={searchValue}
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: "100%" }}
        />
      </div>
      <div className="relative z-10 w-full overflow-y-scroll bg-white rounded-lg shadow-md h-fit">
        {searchResult &&
          searchResult.map((search) => {
            return (
              <button
                onClick={() => handleClick(search)}
                key={search.name}
                className="flex flex-row items-center justify-between w-full h-10 px-2 border-b-2"
              >
                <p className="text-lg font-semibold capitalize">
                  {search.name}
                </p>
                <div className="flex flex-col justify-end h-full">
                  <p className="text-sm opacity-55">
                    {" "}
                    from {search.table_name}
                  </p>
                </div>
              </button>
            );
          })}
      </div>
      {/* <div className='flex flex-row w-full h-8 pl-4 bg-white rounded-lg'>
                <input className='w-[95%] focus:outline-none rounded-lg' type="text" name="" id="" />
                <button className='w-[5%]'></button>
            </div> */}
    </div>
  );
};

export default SearchBar;
