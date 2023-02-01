type Props = {
  searchQuery: string
  onSearchTermChange: (query: string) => void
}

export const SearchBar = ({ onSearchTermChange, searchQuery }: Props) => (
  <div className="search-bar" aria-label="search-bar">
    <input
      value={searchQuery}
      onChange={(event) => onSearchTermChange(event.target.value)}
    />
  </div>
)
