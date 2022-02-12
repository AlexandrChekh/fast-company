import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../../components/common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "./../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        lisence: false
    });
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState();
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно. Пример: user@user.user"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязательно для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8-ми символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        lisence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения "
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                onChange={handleChange}
                value={data.email}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                name="password"
                onChange={handleChange}
                value={data.password}
                type="password"
                error={errors.password}
            />
            <SelectField
                onChange={handleChange}
                options={professions}
                defaultOption={"Choose..."}
                name="professions"
                error={errors.profession}
                value={data.profession}
                label={"Выберите вашу профессию"}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите ваши качества"
                defaultValue={data.qualities}
            />
            <CheckBoxField
                value={data.lisence}
                onChange={handleChange}
                name="lisence"
                error={errors.lisence}
            >
                Подтвердить<a> лицензионное соглашение</a>
            </CheckBoxField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto "
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
