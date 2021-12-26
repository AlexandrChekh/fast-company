import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    console.log(selectedItem);
    const objectOrArray = () => {
        if (Array.isArray(items)) {
            return items.map((item, i) => (
                // console.log(items[i])
                <li
                    key={items[i][valueProperty]}
                    className={
                        "list-group-item" +
                        (items[i] === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[i])}
                    role="button"
                >
                    {items[i][contentProperty]}
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
    selectedItem: PropTypes.object.isRequired
};
export default GroupList;
