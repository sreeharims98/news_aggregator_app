import React, { useEffect } from "react";
import { Input, Select } from "antd";
import "./style.scss";
import { languages } from "./languages";
import { useHomeStore } from "../../../pages/Home/store";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Navbar = () => {
  const { Search } = Input;
  const { Option } = Select;

  //state management
  const [{ language }, { getLanguage, setLanguage, onNewsSearch }] =
    useHomeStore();

  useEffect(() => {
    //get language stored in session storage
    getLanguage();
  }, []);

  return (
    <div className="Navbar">
      <Link to={routes.HOME} className="title">
        NEWS
      </Link>
      <div className="right-sec">
        <div className="search-here">
          <Search
            placeholder="Search for news"
            onSearch={onNewsSearch} //search keyword passed to action
            enterButton
          />
        </div>
        <div className="language">
          <Select
            className="language-select"
            showSearch
            placeholder="Language"
            optionFilterProp="children"
            onChange={(value) => setLanguage(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={language}
          >
            {languages?.map((l) => (
              <Option value={l?.value} key={l?.value}>
                {l?.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};
