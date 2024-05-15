import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");



  const [dropdownOpen, setDropdownOpen] = useState(false);


  const fatchData=(value)=>{
        fetch('http://localhost:5000/assignment')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            const result = data.filter((user)=>{
                return user && user.service_name && user.service_name.toLowerCase().includes(value);
            });
            // setInput(data);
            // console.log(result);
            setResults(result);



            setDropdownOpen(true);
        })

  }

  const handleChange =(value)=>{
    setInput(value);
    fatchData(value);
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-x-3">
        <input
          className="w-50 bg-white border rounded-lg text-black"
          type="text"
          value={input}
          onChange={(e)=>handleChange(e.target.value)}



          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}
        />
        <FaSearch id="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
