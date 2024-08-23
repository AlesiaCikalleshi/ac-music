import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TracksTable from "TracksTable";
import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";
import { search } from "services/api";
import Input from "components/ui/input";
import SearchIcon from "assets/icons/search.svg";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [tracks, setTracks] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await search(searchQuery);
        setTracks(data);
        console.log("a", data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) loadData();
  }, [searchQuery]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          startIcon={SearchIcon}
        />
      </InputWrapper>
      {searchQuery && (
        <div>
          <TableTitle>Results by: {searchQuery}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable tracks={tracks} isLoading={isLoading} />
          )}
        </div>
      )}
      {searchQuery && !isLoading && tracks?.length <= 0 && (
        <NotFoundText> Nothing was found :(</NotFoundText>
      )}
    </Wrapper>
  );
}

export default Search;
