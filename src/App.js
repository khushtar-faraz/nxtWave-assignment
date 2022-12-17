import "./App.css";
import FilterTabs from "./components/FilterTabs";
import Header from "./components/Header";
import ResourceListing from "./components/ResourceListing";
import Search from "./components/Search";

function App() {
  return (
    <div className="w-[1440px] h-auto bg-[#fbfbfb]">
      <Header />
      <main>
        <FilterTabs />
        <Search />
        <ResourceListing /> 
      </main>
    </div>
  );
}

export default App;
