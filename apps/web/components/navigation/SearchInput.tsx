import Input from "@web/components/ui/Input";
import { Search } from "react-feather";

const SearchInput = () => {
  return (
    <div className="bg-dark flex h-auto w-fit items-center justify-start gap-2 rounded-lg border border-neutral-700 px-2">
      <Search className="shrink-0 grow-0 text-neutral-400" size={16} />
      <Input className="rounded-lg py-2" theme="none" type="search" name="query" placeholder="Find the perfect tool" />
    </div>
  );
};

export default SearchInput;
