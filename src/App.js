import "./App.css";
import FilterTabs from "./components/FilterTabs";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#fbfbfb]">
      <Header />
      <main>
        <FilterTabs />
        {/* Search */}
        {/* ResourceListing  */}
            {/* ResourceCard */}
            {/* Pagination */}
      </main>
    </div>
  );
}

export default App;
