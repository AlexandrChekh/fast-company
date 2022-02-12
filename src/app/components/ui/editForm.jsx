import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import SelectField from "../common/form/selectField";
const EditForm = ({ usersId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(usersId).then((data) => setUser(data));
    }, [usersId]);
    useEffect(() => {
        console.log(user);
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form>
                        <SelectField />
                        <button
                            type="submit"
                            // disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
EditForm.propTypes = {
    usersId: PropTypes.string.isRequired
};
export default EditForm;
