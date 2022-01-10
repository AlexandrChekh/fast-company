import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const objectOrArray = () => {
        if (Array.isArray(items)) {
            return items.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={
                        "list-group-item" +
                        (item === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item[contentProperty]}
                </li>
            ));
        }
        return Object.keys(items).map((item) => (
            <li
                key={items[item][valueProperty]}
                className={
                    "list-group-item" +
                    (items[item] === selectedItem ? " active" : "")
                }
                onClick={() => onItemSelect(items[item])}
                role="button"
            >
                {items[item][contentProperty]}
            </li>
        ));
    };
    return <ul className="list-group">{objectOrArray()}</ul>;
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};
export default GroupList;
